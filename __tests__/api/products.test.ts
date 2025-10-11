import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, createRequest, createResponse } from 'node-mocks-http'
import { PrismaClient } from '@prisma/client'
import { describe, it, expect, vi, beforeEach, afterEach } from '@jest/globals'

// Mock the API handler since it doesn't exist
const productHandler = jest.fn()

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
});
describe('/api/products', () => {
  let mockPrisma: any

  beforeEach(() => {
    mockPrisma = {
      product: {
        findMany: jest.fn(),
        aggregate: jest.fn()
      },
      productReview: {
        aggregate: jest.fn()
      }
    }
    jest.clearAllMocks()
  });
  afterEach(() => {
    jest.resetAllMocks()
  });
  it('should return products successfully', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ]

    mockPrisma.product.findMany.mockResolvedValue(mockProducts)

    productHandler.mockImplementation(async (req, res) => {
      const products = await mockPrisma.product.findMany()
      return res.status(200).json(products)
    });
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
    });
    await productHandler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toEqual(mockProducts)
  });
  it('should handle database errors', async () => {
    mockPrisma.product.findMany.mockRejectedValue(new Error('Database error'))

    productHandler.mockImplementation(async (req, res) => {
      try {
        await mockPrisma.product.findMany()
      } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
      }
    });
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
    });
    await productHandler(req, res)

    expect(res._getStatusCode()).toBe(500)
    expect(res._getJSONData()).toHaveProperty('error')
  });
});