import { NextApiRequest, NextApiResponse } from 'next';
import { vi } from 'vitest';
import handler from '@/pages/api/auth/register';

// Mock the Supabase client
const signUpMock = vi.fn();
vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      signUp: signUpMock,
    },
  }),
}));

// Define a more specific type for the mocked response
interface MockApiResponse extends NextApiResponse {
  status: vi.Mock<[number], MockApiResponse>;
  json: vi.Mock<[unknown], MockApiResponse>;
  setHeader: vi.Mock<[string, string | string[]], void>;
  end: vi.Mock<[() => void], void>;
}

// Helper to create mock request object
function mockReq(body: unknown, method: string = 'POST'): NextApiRequest {
  return {
    method,
    body,
    headers: {},
    query: {},
    cookies: {},
  } as NextApiRequest;
}

// Helper to create mock response object
function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {};
  res.status = vi.fn().mockReturnValue(res as MockApiResponse);
  res.json = vi.fn().mockReturnValue(res as MockApiResponse);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res as MockApiResponse;
}

describe('/api/auth/register', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should return 405 if method is not POST', async () => {
    const req = {
      method: 'GET',
      body: undefined,
      headers: {},
      query: {},
      cookies: {},
    } as NextApiRequest;
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalled();
  });

  test('should return 400 for invalid input', async () => {
    const req = mockReq({
      email: 'invalid-email',
      password: 'short',
    });
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.any(String),
      })
    );
  });

  test('handles successful registration', async () => {
    signUpMock.mockResolvedValue({
      data: {
        user: {
          id: 'user-id-123',
          email: 'test@example.com',
          user_metadata: {
            display_name: 'Test User',
          },
        },
        session: null,
      },
      error: null,
    });

    const req = mockReq({
      name: 'Test User',
      email: 'test@example.com',
      password: 'Password123!',
    });
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});