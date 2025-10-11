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

describe('/api/products API Endpoint', () => {
  let req: ReturnType<typeof createRequest>
  let res: ReturnType<typeof createResponse>
  let prisma: PrismaClient

  beforeEach(() => {
    jest.clearAllMocks()
    prisma = new PrismaClient()
  })

  it('should return products with pagination', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ]

    ;(prisma.product.findMany as jest.Mock).mockResolvedValue(mockProducts)
    ;(prisma.product.aggregate as jest.Mock).mockResolvedValue({ _count: { id: 2 } })

    const { req, res } = createMocks({
      method: 'GET',
      query: { page: '1', limit: '10' }
    })

    await productHandler(req as NextApiRequest, res as NextApiResponse)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toHaveProperty('products')
  })

  it('should handle database errors', async () => {
    ;(prisma.product.findMany as jest.Mock).mockRejectedValue(new Error('Database error'))

    const { req, res } = createMocks({
      method: 'GET'
    })

    await productHandler(req as NextApiRequest, res as NextApiResponse)

    expect(res._getStatusCode()).toBe(500)
  })
})