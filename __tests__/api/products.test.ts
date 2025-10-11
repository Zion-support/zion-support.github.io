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
  let mockReq: NextApiRequest
  let mockRes: NextApiResponse

  beforeEach(() => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>()
    mockReq = req
    mockRes = res
  })

  it('should return products successfully', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ]

    const mockPrisma = new PrismaClient() as any
    mockPrisma.product.findMany.mockResolvedValue(mockProducts)

    await productHandler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      data: mockProducts
    })
  })

  it('should handle errors gracefully', async () => {
    const mockPrisma = new PrismaClient() as any
    mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))

    await productHandler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      error: 'Internal server error'
    })
  })
})