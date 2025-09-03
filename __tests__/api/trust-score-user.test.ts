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
    // Reset mocks before each test
    mockSupabaseFrom.mockClear();
    mockSupabaseSelect.mockClear();
    mockSupabaseEq.mockClear();
    mockSupabaseOrder.mockClear();
    mockSupabaseLimit.mockClear();
    mockSupabaseSingle.mockClear();
  });

  test('should return 405 if method is not GET', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST'
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe('Method not allowed');
  });

  test('should return 400 if userId is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {} // No userId
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toBe('User ID is required');
  });

  test('should return 404 if user not found', async () => {
    mockSupabaseSingle.mockResolvedValueOnce({
      data: null,
      error: { message: 'User not found' }
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'nonexistent-user' }
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(404);
    expect(res._getJSONData().error).toBe('User not found');
  });

  test('should return 200 with trust score data', async () => {
    const mockUserData = {
      id: 'user1',
      trustScore: 85,
      totalReviews: 25,
      positiveReviews: 22,
      negativeReviews: 3,
      lastUpdated: new Date().toISOString()
    };

    mockSupabaseSingle.mockResolvedValueOnce({
      data: mockUserData,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'user1' }
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getJSONData();
    expect(responseData.id).toBe('user1');
    expect(responseData.trustScore).toBe(85);
    expect(responseData.totalReviews).toBe(25);
    expect(responseData.positiveReviews).toBe(22);
    expect(responseData.negativeReviews).toBe(3);
  });

  test('should return 500 if database error occurs', async () => {
    mockSupabaseSingle.mockResolvedValueOnce({
      data: null,
      error: { message: 'Database connection failed' }
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { userId: 'user1' }
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toBe('Internal server error');
  });
});