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
    }
  }
  return {
    PrismaClient: jest.fn(() => mPrismaClient)
  }
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

  it('should return products successfully', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ]

    mockPrisma.product.findMany.mockResolvedValue(mockProducts)
<<<<<<< HEAD
=======
  })

  it('should return products with pagination', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ]

    mockPrisma.product.findMany.mockResolvedValue(mockProducts)
    mockPrisma.product.aggregate.mockResolvedValue({ _count: { id: 2 } })

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { page: '1', limit: '10' }
    })

    await productHandler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toMatchObject({
      products: mockProducts,
      pagination: expect.any(Object)
    })
  })

  it('should handle errors gracefully', async () => {
    mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
    })

    await productHandler(req, res)

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toEqual(mockProducts)
  })

  it('should handle database errors', async () => {
    mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
<<<<<<< HEAD
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
          description: 'Test Description',
          price: 99.99,
          category: 'Test Category',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

      mockPrisma.product.findMany.mockResolvedValue(mockProducts)
      mockPrisma.product.aggregate.mockResolvedValue({ _count: { id: 1 } })

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET',
        query: { page: '1', limit: '10' }
      })

      await productHandler(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(JSON.parse(res._getData())).toEqual({
        products: mockProducts,
        pagination: {
          page: 1,
          limit: 10,
          total: 1,
          totalPages: 1
        }
      })
=======
    expect(res._getStatusCode()).toBe(500)
    expect(JSON.parse(res._getData())).toMatchObject({
      error: 'Internal server error'
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    })

    it('should handle database errors', async () => {
      mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET'
      })

      await productHandler(req, res)

      expect(res._getStatusCode()).toBe(500)
      expect(JSON.parse(res._getData())).toEqual({
        error: 'Internal server error'
      })
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    })

    await productHandler(req, res)

    expect(res._getStatusCode()).toBe(500)
    expect(res._getJSONData()).toHaveProperty('error')
  })
})