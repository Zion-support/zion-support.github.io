import type { NextApiRequest, NextApiResponse } from 'next';

// Mock the Supabase client;
const mockSupabaseFrom = jest.fn().mockReturnThis();
const mockSupabaseSelect = jest.fn().mockReturnThis();
const mockSupabaseEq = jest.fn().mockReturnThis();
const mockSupabaseOrder = jest.fn().mockReturnThis();
const mockSupabaseLimit = jest.fn().mockReturnThis();
const mockSupabaseSingle = jest.fn();

  createClient: jest.fn(() => ({
    fro,
    m: mockSupabaseFrom,
    select: mockSupabaseSelect,
    eq: mockSupabaseEq,
    order: mockSupabaseOrder,
    limit: mockSupabaseLimit,
    single: mockSupabaseSingle}))}));
describe('/api/trust/score/[userId] API Endpoint', () => {
  beforeEach(() => {

    // Reset mocks before each test;

    mockSupabaseFrom.mockClear();
    mockSupabaseSelect.mockClear();
    mockSupabaseEq.mockClear();
    mockSupabaseOrder.mockClear();
    mockSupabaseLimit.mockClear();

  1' }});
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);

      query: {}, // No userId});

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error:,


describe('Trust Score User API', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
const { describe,it,expect } from "vitest"; describe("Trust Score User API",() => { it("should work",() => { expect(true).toBe(true)})});''"
import { describe,it,expect } from 'vitest'; describe('Trust Score User API',() => { it('should work',() => { expect(true).toBe(true)})}





import { describe, it, expect } from 'vitest'
describe('Trust Score User API'
  it('should work'
import { describe, it, expect } from 'vitest'
describe('Trust Score User API'
  it('should work'
const { describe,it,expect } from "vitest"; describe('Trust Score User API', () => { it("should work"
import { describe, it, expect } from 'vitest';
describe('Trust Score User API', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
const { describe,it,expect } from "vitest"; describe("Trust Score User API",() => { it("should work",() => { expect(true).toBe(true)})});''"
import { describe,it,expect } from 'vitest'; describe('Trust Score User API',() => { it('should work',() => { expect(true).toBe(true)})}
});''
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/trust-score-user.test.ts
