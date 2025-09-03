import { expect, test, vi } from 'vitest';
import handler from '@/pages/api/users/me';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a more specific type for the mocked response
interface MockApiResponse extends NextApiResponse {
  status: vi.Mock<[number], MockApiResponse>;
  json: vi.Mock<[unknown], MockApiResponse>; // Changed from [any] to [unknown]
  setHeader: vi.Mock<[string, string | string[]], void>;
  end: vi.Mock<[(cb?: () => void) => void], void>;
}

function mockReq(method: string, body?: unknown): NextApiRequest {
  return {
    method,
    body,
    headers: {},
    query: {},
    cookies: {}
  } as NextApiRequest;
}

function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {};
  res.status = vi.fn().mockReturnValue(res as MockApiResponse);
  res.json = vi.fn().mockReturnValue(res as MockApiResponse);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res as MockApiResponse;
}

test('GET returns profile', () => {
  const req = mockReq('GET');
  const res = mockRes();
  
  handler(req, res);
  
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    id: expect.any(String),
    email: expect.any(String),
    name: expect.any(String)
  });
});

test('POST returns method not allowed', () => {
  const req = mockReq('POST', { name: 'Test' });
  const res = mockRes();
  
  handler(req, res);
  
  expect(res.status).toHaveBeenCalledWith(405);
  expect(res.json).toHaveBeenCalledWith({
    error: 'Method not allowed'
  });
});