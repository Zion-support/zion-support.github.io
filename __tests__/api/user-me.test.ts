import { expect, test, vi } from 'vitest'
import handler from '@/pages/api/users/me'
import type { NextApiRequest, NextApiResponse } from 'next'

interface MockApiResponse extends NextApiResponse {
  status: vi.Mock<[number], MockApiResponse>
  json: vi.Mock<[unknown], MockApiResponse>
  setHeader: vi.Mock<[string, string | string[]], void>
  end: vi.Mock<[(cb?: () => void) => void], void>
}

function mockReq(method: string, body?: unknown): NextApiRequest {
<<<<<<< HEAD
<<<<<<< HEAD
  return { method, body, headers: {}, query: {}, cookies: {} } as NextApiRequest
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
  return {
    method,
    body,
    headers: {},
    query: {},
    cookies: {}
  } as NextApiRequest
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
}

function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {}
  res.status = vi.fn().mockReturnValue(res as MockApiResponse)
  res.json = vi.fn().mockReturnValue(res as MockApiResponse)
  res.setHeader = vi.fn()
  res.end = vi.fn()
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
<<<<<<< HEAD
    expect.objectContaining({
      name: 'New Name'
    })
  )
})

test('DELETE soft deletes account', () => {
  const req = mockReq('DELETE')
=======
    expect.objectContaining({ name: 'New Name' })
  )
})

test('DELETE soft deletes account', () => {
  const req = mockReq('DELETE')
  const res = mockRes()
  
  handler(req, res)
  
  expect(res.json).toHaveBeenCalledWith({ success: true })
})

test('unsupported method returns 405', () => {
  const req = mockReq('POST')
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
  const res = mockRes()
  
  handler(req, res)
  
<<<<<<< HEAD
  expect(res.json).toHaveBeenCalledWith({
    success: true
  })
=======
  expect(res.status).toHaveBeenCalledWith(405)
  expect(res.end).toHaveBeenCalled()
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
})