import { expect, test, jest } from '@jest/globals'
import handler from '../../pages/api/users/me'
import type { NextApiRequest, NextApiResponse } from 'next'

interface MockApiResponse extends NextApiResponse {
  status: jest.Mock<[number], MockApiResponse>
  json: jest.Mock<[unknown], MockApiResponse>
  setHeader: jest.Mock<[string, string | string[]], void>
  end: jest.Mock<[(cb?: () => void) => void], void>
}

function mockReq(method: string, body?: unknown): NextApiRequest {
  return {
    method,
    body,
    headers: {},
    query: {},
    cookies: {}
  } as NextApiRequest
}

function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {}
  res.status = jest.fn().mockReturnValue(res as MockApiResponse)
  res.json = jest.fn().mockReturnValue(res as MockApiResponse)
  res.setHeader = jest.fn()
  res.end = jest.fn()
  return res as MockApiResponse
}

test('GET returns profile', () => {
  const req = mockReq('GET')
  const res = mockRes()
  
  handler(req, res)
  
  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
      email: 'jane@example.com',
      points: expect.any(Number)
    })
  )
})

test('PUT updates profile', () => {
  const req = mockReq('PUT', { name: 'New Name' })
  const res = mockRes()
  
  handler(req, res)
  
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
      name: 'New Name'
    })
  )
})

test('DELETE soft deletes account', () => {
  const req = mockReq('DELETE')
  const res = mockRes()
  
  handler(req, res)
  
  expect(res.json).toHaveBeenCalledWith({
    success: true
  })
})