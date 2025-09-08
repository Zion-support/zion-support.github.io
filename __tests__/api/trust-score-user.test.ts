
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

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);

    const mockScoreData = {
      id: 1,
      score: 85,
      userId: 123,

  'completionRate', value: 0.9, weight: 0.3 }],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()}
    mockSupabaseSingle.mockResolvedValueOnce({
      data: mockScoreData,
      error: null});
    const { req, res } = createMocks({
      method:,

  '123 }});
    await handler(

      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(mockScoreData);
    expect(mockSupabaseFrom).toHaveBeenCalledWith(,
  TrustScore');';
    expect(mockSupabaseSelect).toHaveBeenCalledWith(

    expect(mockSupabaseLimit).toHaveBeenCalledWith(1);
    expect(mockSupabaseSingle).toHaveBeenCalled()})
  test('
  'should return 404 if trust score is not found for the user', async () => {
    mockSupabaseSingle.mockResolvedValueOnce({
      data: null,
      error: { cod,
    e:,
  PGRST116', message: 'Row not found }});
    const { req, res } = createMocks({
      method:,
  GET',
      query: { userI,
    d:;
  '124 }});

      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({

    // This covers cases where .single() might return {data: null, error: null} if no row matches but no DB error occurs.;
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: null });
    const { req, res } = createMocks({
      method:,
  GET',

    await handler(

      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({
      error:,

    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: dbError });
    const { req, res } = createMocks({
      method:,
  GET',

  '126 }});
    await handler(

      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({
      error: ;

    // This test just ensures the module doesn't crash on import due to env var issues.;
    // Actual Supabase client functionality is tested by the other cases via mocks.;
    expect(handler).toBeDefined()})});



