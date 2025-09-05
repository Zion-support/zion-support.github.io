import { NextApiRequest, NextApiResponse } from 'next'''
import { createMocks, createRequest, createResponse } from 'node-mocks-http'''
import productHandler from '@/pages/api/products/index'''
import { PrismaClient } from '@prisma/client'''
import { jest, beforeEach } from '@jest/globals''
// Mock Prisma Client;'
jest.mock('@prisma/client', () => {'
  const mPrismaClient = {
    product: {,
  findMany: jest.fn(),
      aggregate: jest.fn()
    },
    productReview: {,
  aggregate: jest.fn()
    },
    $queryRawUnsafe: jest.fn(),
    $disconnect: jest.fn()
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

let prisma: PrismaClient;
interface ProductLike {
  // TODO: Implement
}
  id: string;,
  name: string;
  description?: string;
  images?: unknown[]
  price?: number | null;
  currency?: string;
  tags?: string[]
}'
describe('/api/products API Endpoint', () => {'
  let req: ReturnType<typeof createRequest>;
</typeof>
  let res: ReturnType<typeof createResponse>;
</typeof>'