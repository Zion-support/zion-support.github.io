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

jest.mock(
  '@supabase/supabase-js',
  () => ({
    createClient: jest.fn(() => ({
      from: mockSupabaseFrom,
      select: mockSupabaseSelect,
      eq: mockSupabaseEq,
      order: mockSupabaseOrder,
      limit: mockSupabaseLimit,
      single: mockSupabaseSingle
    }))
  })
);

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

  test(
    'should return 405 if method is not GET',
    async () => {
      const { req, res } = createMocks({
        method: 'POST',
        query: {
          userId:
            '1'
        }
      });
      await handler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );
      expect(res._getStatusCode()).toBe(405);
      expect(res._getHeaders().allow).toBe(
        'GET'
      );
    }
  );

  test(
    'should return 400 if userId is missing',
    async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {}, // No userId
      });
      await handler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual({
        error:
          'User ID is required and must be a string.'
      });
    }
  );

  test(
    'should return 400 if userId is not a string (e.g. array)',
    async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          userId: [
            '1',
            '2'
          ]
        }
      });
      await handler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual({
        error:
          'User ID is required and must be a string.'
      });
    }
  );

  test(
    'should return 500 if Supabase query fails',
    async () => {
      mockSupabaseSingle.mockResolvedValueOnce({
        data: null,
        error: new Error('Database error')
      });

      const { req, res } = createMocks({
        method: 'GET',
        query: {
          userId: 'user-123'
        }
      });

      await handler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );
      expect(res._getStatusCode()).toBe(500);
      expect(JSON.parse(res._getData())).toEqual({
        error:
          'Database error'
      });
    }
  );

  test(
    'should return 200 with trust score data on success',
    async () => {
      const mockTrustScore = {
        userId: 'user-123',
        score: 85,
        factors: {
          verification: 90,
          activity: 80,
          reputation: 85
        },
        lastUpdated: new Date().toISOString()
      };

      mockSupabaseSingle.mockResolvedValueOnce({
        data: mockTrustScore,
        error: null
      });

      const { req, res } = createMocks({
        method: 'GET',
        query: {
          userId: 'user-123'
        }
      });

      await handler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );
      expect(res._getStatusCode()).toBe(200);
      const responseData = JSON.parse(res._getData());
      expect(responseData).toEqual(mockTrustScore);
    }
  );
});