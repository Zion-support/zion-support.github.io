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
  let mockPrisma: jest.Mocked<PrismaClient>

  beforeEach(() => {
    mockPrisma = new PrismaClient() as jest.Mocked<PrismaClient>
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
          name: 'Test Product 1',
          description: 'Test Description 1',
          price: 99.99,
          category: 'Electronics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Test Product 2',
          description: 'Test Description 2',
          price: 149.99,
          category: 'Clothing',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

      mockPrisma.product.findMany.mockResolvedValue(mockProducts)
      mockPrisma.product.aggregate.mockResolvedValue({ _count: { id: 2 } })

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET',
        query: { page: '1', limit: '10' }
      })

      await productHandler(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(JSON.parse(res._getData())).toEqual({
        success: true,
        data: mockProducts,
        pagination: {
          page: 1,
          limit: 10,
          total: 2,
          pages: 1
        }
      })
    })

    it('should handle database errors', async () => {
      mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET'
      })

      await productHandler(req, res)

      expect(res._getStatusCode()).toBe(500)
      expect(JSON.parse(res._getData())).toEqual({
        success: false,
        error: 'Internal server error'
      })
    })

    it('should handle invalid pagination parameters', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET',
        query: { page: 'invalid', limit: 'invalid' }
      })

      await productHandler(req, res)

      expect(res._getStatusCode()).toBe(400)
      expect(JSON.parse(res._getData())).toEqual({
        success: false,
        error: 'Invalid pagination parameters'
      })
    })
  })
})