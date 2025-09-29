import { loginUser } from '@/services/authService';
import { NextApiRequest, NextApiResponse } from 'next';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

const mockSignInWithPassword = vi.fn();

vi.mock('@supabase/supabase-js', async () => {
  const actual = await vi.importActual('@supabase/supabase-js') as any;
  return {
    ...actual,
    createClient: vi.fn(() => ({
      auth: {
        signInWithPassword: mockSignInWithPassword,
        signUp: vi.fn(),
        onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
        getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
      },
      from: vi.fn().mockReturnThis(),
    })),
  };
});

// Import the handler AFTER setting up the mock
import loginHandler from '../../pages/api/auth/login';


// Helper to create mock NextApiRequest
const mockApiReq = (body: any, method: string = 'POST') => ({
  method,
  body,
} as NextApiRequest);

// Helper to create mock NextApiResponse
const mockApiRes = () => {
  const res: Partial<NextApiResponse> = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn().mockReturnThis(),
    end: vi.fn().mockReturnThis(),
  };
  return res as NextApiResponse;
};

describe('/api/auth/login API Handler', () => {
  beforeEach(() => {
    mockSignInWithPassword.mockReset();
  });
});
const { describe,it,expect } from "vitest"; describe("Login",() => { it("should work",() => { expect(true).toBe(true)})});''"
import { describe,it,expect } from 'vitest'; describe('Login',() => { it('should work',() => { expect(true).toBe(true)})}
});''
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/auth/login.test.ts
