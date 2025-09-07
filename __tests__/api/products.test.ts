import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    product: {
      findMany: jest.fn(),
      aggregate: jest.fn(),
    },
    productReview: {
      aggregate: jest.fn(),
    },
    $queryRawUnsafe: jest.fn(),
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

let prisma: PrismaClient;

describe('/api/products API Endpoint', () => {
  let req: ReturnType<typeof createRequest>;
  let res: ReturnType<typeof createResponse>;

  describe('GET /api/products with fuzzy search', () => {
    it('should return products matching search query', async () => {
      const mockProducts = [
        {
          id: '1',
          name: 'GPT Product',
          description: 'AI-powered product',
          price: 100,
          currency: 'USD',
          tags: ['ai', 'gpt'],
        },
      ];

      (prisma.product.findMany as jest.Mock).mockResolvedValue(mockProducts);

      req = createRequest({
        method: 'GET',
        query: { search: 'gpt' },
      });
      res = createResponse();

      await productHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
      const data = JSON.parse(res._getData());
      expect(data.products).toEqual(mockProducts);
    });
  });
});
