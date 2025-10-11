import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, createRequest, createResponse } from 'node-mocks-http'
import productHandler from '@/pages/api/products/index'
import { PrismaClient } from '@prisma/client'

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    product: {
      findMany: jest.fn(),
      aggregate: jest.fn()
    },
    productReview: {
      aggregate: jest.fn()
    },
    $queryRawUnsafe: jest.fn(),
    $disconnect: jest.fn()
  }
  return { PrismaClient: jest.fn(() => mPrismaClient) }
})

describe('/api/products', () => {
  let mockPrisma: any

  beforeEach(() => {
    mockPrisma = new PrismaClient()
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('GET /api/products', () => {
    it('should return products with pagination', async () => {
      const mockProducts = [
        {
          id: 1,
          name: 'Test Product',
          price: 99.99,
          description: 'Test Description',
          category: 'Test Category'
        }
      ]

      mockPrisma.product.findMany.mockResolvedValue(mockProducts)
      mockPrisma.product.aggregate.mockResolvedValue({ _count: { id: 1 } })

      const { req, res } = createMocks({
        method: 'GET',
        query: { page: '1', limit: '10' }
      })

      await productHandler(req as NextApiRequest, res as NextApiResponse)

      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual({
        products: mockProducts,
        pagination: {
          page: 1,
          limit: 10,
          total: 1,
          totalPages: 1
        }
      })
    })

    it('should handle database errors', async () => {
      mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))

      const { req, res } = createMocks({
        method: 'GET'
      })

      await productHandler(req as NextApiRequest, res as NextApiResponse)

      expect(res._getStatusCode()).toBe(500)
      expect(res._getJSONData()).toEqual({
        error: 'Internal server error'
      })
    })
  })
})