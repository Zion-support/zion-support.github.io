>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import { NextApiRequest,NextApiResponse } from 'next' import { createMocks,createRequest,createResponse } from 'node-mocks-http' import productHandler from '@/pages/api/products/index' import { PrismaClient } from '@prisma/client' jest.mock('@prisma/client',() => { const mPrismaClient = { product: { findMany: jest.fn(),aggregate: jest.fn() },productReview: { aggregate: jest.fn() },$queryRawUnsafe: jest.fn(),$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mPrismaClient) }}); let prisma: PrismaClient interface ProductLike { id: string name: string description?: string images?: unknown[] price?: number | null currency?: string tags?: string[] } describe('/api/products API Endpoint', () => { let req: ReturnType<typeof createRequest> let res: ReturnType<typeof createResponse> beforeEach(() => { jest.clearAllMocks() prisma = new PrismaClient(); (prisma.productReview.aggregate as jest.Mock).mockResolvedValue({ _avg: { rating: null },_count: { id: 0 } })}) describe('GET /api/products with fuzzy search', () => { it('should return products matching "gpt"
    it('should return products matching "gpt"
          "id"
          "id"

=======
          "id"