import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../pages/api/trust/score/[userId]'; // Adjust path as needed

// Mock the Supabase client
const mockSupabaseFrom = jest.fn().mockReturnThis();
const mockSupabaseSelect = jest.fn().mockReturnThis();
const mockSupabaseEq = jest.fn().mockReturnThis();
const mockSupabaseOrder = jest.fn().mockReturnThis();
const mockSupabaseLimit = jest.fn().mockReturnThis();
const mockSupabaseSingle = jest.fn();

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: mockSupabaseFrom,
    select: mockSupabaseSelect,
    eq: mockSupabaseEq,
    order: mockSupabaseOrder,
    limit: mockSupabaseLimit,
    single: mockSupabaseSingle
  }))
}));

describe('/api/trust/score/[userId] API Endpoint', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 405 if method is not GET', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('GET');
  });

  it('should return 400 if userId is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {}
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('User ID is required');
  });

  it('should return 200 with trust score data on success', async () => {
    const mockTrustScore = {
      userId: 'user-123',
      score: 85,
      factors: {
        profileCompleteness: 90,
        verificationStatus: 100,
        activityLevel: 80,
        communityStanding: 75
      },
      lastUpdated: new Date().toISOString()
    };

    mockSupabaseSingle.mockResolvedValue({
      data: mockTrustScore,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'user-123' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockTrustScore);
    expect(mockSupabaseFrom).toHaveBeenCalledWith('trust_scores');
    expect(mockSupabaseEq).toHaveBeenCalledWith('userId', 'user-123');
  });

  it('should return 404 if user not found', async () => {
    mockSupabaseSingle.mockResolvedValue({
      data: null,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'nonexistent-user' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    expect(res._getJSONData().error).toContain('User not found');
  });

  it('should return 500 if database query fails', async () => {
    mockSupabaseSingle.mockResolvedValue({
      data: null,
      error: new Error('Database connection failed')
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'user-123' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain('Failed to fetch trust score');
  });

  it('should validate userId format', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: '' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('User ID is required');
  });

  it('should handle malformed userId', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'invalid-user-id-format' }
    });

    // Mock successful response even for malformed ID (let the database handle validation)
    const mockTrustScore = {
      userId: 'invalid-user-id-format',
      score: 0,
      factors: {
        profileCompleteness: 0,
        verificationStatus: 0,
        activityLevel: 0,
        communityStanding: 0
      },
      lastUpdated: new Date().toISOString()
    };

    mockSupabaseSingle.mockResolvedValue({
      data: mockTrustScore,
      error: null
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockTrustScore);
  });

  it('should return trust score with proper data structure', async () => {
    const mockTrustScore = {
      userId: 'user-123',
      score: 85,
      factors: {
        profileCompleteness: 90,
        verificationStatus: 100,
        activityLevel: 80,
        communityStanding: 75
      },
      lastUpdated: new Date().toISOString(),
      metadata: {
        totalReviews: 25,
        averageRating: 4.2,
        responseTime: '2 hours'
      }
    };

    mockSupabaseSingle.mockResolvedValue({
      data: mockTrustScore,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'user-123' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getJSONData();
    expect(responseData).toHaveProperty('userId');
    expect(responseData).toHaveProperty('score');
    expect(responseData).toHaveProperty('factors');
    expect(responseData).toHaveProperty('lastUpdated');
    expect(typeof responseData.score).toBe('number');
    expect(responseData.score).toBeGreaterThanOrEqual(0);
    expect(responseData.score).toBeLessThanOrEqual(100);
  });
});