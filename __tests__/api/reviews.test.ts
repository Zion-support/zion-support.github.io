import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews';
import { describe, it, expect, beforeEach, vi } from 'vitest';

jest.mock('@prisma/client');
jest.mock('@/integrations/supabase/client');

describe('/api/reviews API Endpoint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('GET /api/reviews', () => {
    it('should return reviews with pagination', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET' as RequestMethod,
        query: { page: '1', limit: '10' }
      });

      await reviewsHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
    });
  });

  describe('POST /api/reviews', () => {
    it('should create a new review', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          productId: '1',
          rating: 5,
          comment: 'Great product!'
        }
      });

      await reviewsHandler(req, res);

      expect(res._getStatusCode()).toBe(201);
    });
  });
});