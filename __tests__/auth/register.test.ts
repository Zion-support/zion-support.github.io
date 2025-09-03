import { describe, expect, test, vi, beforeEach } from 'vitest';
import handler from '@/pages/api/auth/register'; // Assuming this is the Next.js API handler
import { z } from 'zod'; // Used by the handler
import type { NextApiRequest, NextApiResponse } from 'next';

// Mock the Supabase client
const signUpMock = vi.fn();

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      signUp: signUpMock
    }
  })
}));

// Define a more specific type for the mocked response
interface MockApiResponse extends NextApiResponse {
  status: vi.Mock<[number], MockApiResponse>;
  json: vi.Mock<[unknown], MockApiResponse>; // Parameter of json can be unknown
  setHeader: vi.Mock<[string, string | string[]], void>;
  end: vi.Mock<[((cb?: () => void) => void)?], void>; // end can be called with no args
}

// Helper to create mock request object
function mockReq(body: unknown, method: string = 'POST'): NextApiRequest {
  return {
    method,
    body,
    headers: {},
    query: {},
    cookies: {}
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

  test('should register user successfully', async () => {
    const mockUser = {
      id: 'user1',
      email: 'test@example.com',
      user_metadata: {
        name: 'Test User'
      }
    };

    signUpMock.mockResolvedValueOnce({
      data: {
        user: mockUser,
        session: null
      },
      error: null
    });

    const req = mockReq({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User'
    });

    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      user: mockUser,
      message: 'User registered successfully'
    });
  });

  test('should return 400 for invalid email', async () => {
    const req = mockReq({
      email: 'invalid-email',
      password: 'password123',
      name: 'Test User'
    });

    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid email format'
    });
  });

  test('should return 400 for weak password', async () => {
    const req = mockReq({
      email: 'test@example.com',
      password: '123',
      name: 'Test User'
    });

    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Password must be at least 6 characters'
    });
  });

  test('should return 400 for missing name', async () => {
    const req = mockReq({
      email: 'test@example.com',
      password: 'password123'
      // Missing name
    });

    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Name is required'
    });
  });

  test('should return 409 for existing email', async () => {
    signUpMock.mockResolvedValueOnce({
      data: {
        user: null,
        session: null
      },
      error: {
        message: 'User already registered'
      }
    });

    const req = mockReq({
      email: 'existing@example.com',
      password: 'password123',
      name: 'Test User'
    });

    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      error: 'User already registered'
    });
  });

  test('should return 500 for server error', async () => {
    signUpMock.mockRejectedValueOnce(new Error('Database connection failed'));

    const req = mockReq({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User'
    });

    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Internal server error'
    });
  });
});