<<<<<<< HEAD
import: { createMocks, createRequest, createResponse } from 'node-mocks-http';';
import: type { NextApiRequest, NextApiResponse } from 'next';';
import: handler from '../../pages/api/trust/score/[userId]' // Adjust path as needed;';
// Mock: the Supabase client;
const: mockSupabaseFrom = jest.fn().mockReturnThis();
const: mockSupabaseSelect = jest.fn().mockReturnThis();
const: mockSupabaseEq = jest.fn().mockReturnThis();
const: mockSupabaseOrder = jest.fn().mockReturnThis();
const: mockSupabaseLimit = jest.fn().mockReturnThis();
const: mockSupabaseSingle = jest.fn();
jest.mock(
  '@supabase/supabase-js', () => ({';
  createClient: jest.fn(() => ({
    from: mockSupabaseFro,m,
    select: mockSupabaseSelec,t,
    eq: mockSupabaseE,q,
    order: mockSupabaseOrde,r,
    limit: mockSupabaseLimi,t,
    single: mockSupabaseSingl,e}))}));
describe('/api/trust/score/[userId] API: Endpoint'', () => {';
  beforeEach(() => {
    // Reset: mocks before each test;
=======
<<<<<<< HEAD
import { createMocks, createRequest, createResponse } from 'node-mocks-http;
=======
<<<<<<< HEAD
import { createMocks, createRequest, createResponse } from 'node-mocks-http';
>>>>>>> main
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import handler from '../../pages/api/trust/score/[userId] // Adjust path as needed;
=======
import handler from ../../pages/api/trust/score/[userId]' // Adjust path as needed;
>>>>>>> main
// Mock the Supabase client;
const mockSupabaseFrom = jest.fn().mockReturnThis();
const mockSupabaseSelect = jest.fn().mockReturnThis();
const mockSupabaseEq = jest.fn().mockReturnThis();
const mockSupabaseOrder = jest.fn().mockReturnThis();
const mockSupabaseLimit = jest.fn().mockReturnThis();
const mockSupabaseSingle = jest.fn();
<<<<<<< HEAD
jest.mock('
  '@supabase/supabase-js', () => ({
=======
<<<<<<< HEAD
jest.mock(
  '@supabase/supabase-js, () => ({
>>>>>>> main
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
=======
jest.mock(;
  '@supabase/supabase-js', () => ({';
  createClient: jest.fn(() => ({;
    from: mockSupabaseFrom,;
    select: mockSupabaseSelect,;
    eq: mockSupabaseEq,;
    order: mockSupabaseOrder,;
    limit: mockSupabaseLimit,;
    single: mockSupabaseSingle}))}));
  describe('/api/trust/score/[userId] API Endpoint'', () => {';
  beforeEach(() => {;
>>>>>>> main
    // Reset mocks before each test;
>>>>>>> main
    mockSupabaseFrom.mockClear();
    mockSupabaseSelect.mockClear();
    mockSupabaseEq.mockClear();
    mockSupabaseOrder.mockClear();
    mockSupabaseLimit.mockClear();
<<<<<<< HEAD
    mockSupabaseSingle.mockClear()})
  test('
  'should return 405 if method is not GET', async () => {
    const { req, res } = createMocks({'
      method: 'POST,
      query: { userI,
    d:,
=======
    mockSupabaseSingle.mockClear()});
<<<<<<< HEAD
  test(
<<<<<<< HEAD
  'should: return 405 if method is not GET', async () => {';
    const: { req, res } = createMocks({
      method: 'POS,T,';
      query: { userId,:,
  1' }})';
    await: handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toBe(
  'GET')})';
  test(
  'should: return 400 if userId is missing', async () => {';
    const: { req, res } = createMocks({
      method: 'GE,T,';
      query:  ,{}, // No: userId})
=======
  'should return 405 if method is not GET', async () => {
    const { req, res } = createMocks({
      method: POST,
      query: { userId:,
>>>>>>> main
  1' }});
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
<<<<<<< HEAD
    expect(res._getHeaders().allow).toBe('
  'GET')})
  test('
  'should return 400 if userId is missing', async () => {
    const { req, res } = createMocks({'
      method: 'GET,
=======
    expect(res._getHeaders().allow).toBe(
  'GET)});
  test(
  'should return 400 if userId is missing', async () => {
    const { req, res } = createMocks({
      method: GET,
>>>>>>> main
      query: {}, // No userId});
>>>>>>> main
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error:,
<<<<<<< HEAD
  User: ID is required and must be a string.'})})';
  test(
  'should: return 400 if userId is not a string (e.g. array)', async () => {';
    const: { req, res } = createMocks({
      method: 'GE,T,';
      query: { userId: ,[,
  1''2'] }})';
    await: handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'User: ID is required and must be a string,.})})';
  test(
  'should: return trust score data if user and score are found', async () => {';
    const: mockScoreData = {
      id:  ,1,
      score: 8,5,
      userId: 12,3,
      operatorGptAnalysis: ;
  'Looks: good,',';
      components: [{ id: ,1, componentType: ;
  'completionRate,', value: 0.,9, weight: 0.3, }],';
      createdAt: new: Date().toISOString(,),
      updatedAt: new: Date().toISOString(,)}
    mockSupabaseSingle.mockResolvedValueOnce({
      data: mockScoreDat,a,
      error: nul,l})
    const: { req, res } = createMocks({
      method:,
  GET',';
      query: { userId:;
  '123, }})';
    await: handler(
=======
<<<<<<< HEAD
  User ID is required and must be a string.'})})
  test('
  'should return 400 if userId is not a string (e.g. array), async () => {
    const { req, res } = createMocks({'
      method: 'GET,
      query: { userI,
    d: [,
  1''2'] }});
=======
  User ID is required and must be a string.'})});
  test(
  'should return 400 if userId is not a string (e.g. array), async () => {
    const { req, res } = createMocks({
      method: 'GET,
      query: { userId: [,
  1'2'] }});
>>>>>>> main
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
<<<<<<< HEAD
    expect(JSON.parse(res._getData())).toEqual({'
      error: 'User ID is required and must be a string.})})
  test('
  'should return trust score data if user and score are found', async () => {
=======
    expect(JSON.parse(res._getData())).toEqual({
      error: 'User ID is required and must be a string.})});
  test(
  should return trust score data if user and score are found', async () => {
>>>>>>> main
    const mockScoreData = {
      id: 1,
      score: 85,
      userId: 123,
<<<<<<< HEAD
      operatorGptAnalysis:;
  'Looks good',
      components: [{ i,
    d: 1, componentType:;
=======
      operatorGptAnalysis: ;
  'Looks good,
      components: [{ id: 1, componentType: ;
>>>>>>> main
  'completionRate', value: 0.9, weight: 0.3 }],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()}
    mockSupabaseSingle.mockResolvedValueOnce({
      data: mockScoreData,
      error: null});
    const { req, res } = createMocks({
      method:,
<<<<<<< HEAD
  GET',
      query: { userI,
    d:;
=======
  GET,
      query: { userId: ;
>>>>>>> main
  '123 }});
    await handler(
>>>>>>> main
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(mockScoreData);
    expect(mockSupabaseFrom).toHaveBeenCalledWith(,
  TrustScore');';
    expect(mockSupabaseSelect).toHaveBeenCalledWith(
<<<<<<< HEAD
      expect.stringContaining(
  'components: TrustScoreComponent(*)'));';
    expect(mockSupabaseEq).toHaveBeenCalledWith(
  'userI,d, 123) // Ensure: string;';
  '123' is: parsed to number;';
    expect(mockSupabaseOrder).toHaveBeenCalledWith(
  'createdAt', {';
      ascending: fals,e})
=======
<<<<<<< HEAD
      expect.stringContaining('
  'components: TrustScoreComponent(*)));
    expect(mockSupabaseEq).toHaveBeenCalledWith('
  'userId, 123) // Ensure string;
  '123' is parsed to number;
    expect(mockSupabaseOrder).toHaveBeenCalledWith('
  'createdAt', {
      ascending: false});
>>>>>>> main
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
=======
      expect.stringContaining(
  components: TrustScoreComponent(*)'));
    expect(mockSupabaseEq).toHaveBeenCalledWith(
  'userId, 123) // Ensure string;
  123' is parsed to number;
    expect(mockSupabaseOrder).toHaveBeenCalledWith(
  'createdAt, {
      ascending: false});
    expect(mockSupabaseLimit).toHaveBeenCalledWith(1);
    expect(mockSupabaseSingle).toHaveBeenCalled()});
  test(
  'should: return 404 if trust score is not found for the user', async () => {';
    mockSupabaseSingle.mockResolvedValueOnce({
<<<<<<< HEAD
      data: nul,l,
      error: { code,:,
  PGRST116', message: 'Row: not found, }})';
    const: { req, res } = createMocks({
      method:,
  GET',';
      query: { userId:;
  '124, }})';
    await: handler(
=======
      data: null,
      error: { code:,
  PGRST116, message: 'Row not found }});
    const { req, res } = createMocks({
      method:,
  GET',
      query: { userId: ;
  124 }});
>>>>>>> main
    await handler(
>>>>>>> main
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({
<<<<<<< HEAD
      error: ;
  'Trust: score not found for this user.,'})})';
  test(
  'should: also return 404 if data is null without specific PGRST116 error (general not found)', async () => {';
    // This: covers cases where .single() might return {data: nul,l, error: nul,l} if: no row matches but no DB error occurs.;
    mockSupabaseSingle.mockResolvedValueOnce({ data: nul,l, error: null, })
    const: { req, res } = createMocks({
      method:,
  GET',';
      query: { userId:;
  '125, }})';
    await: handler(
=======
<<<<<<< HEAD
      error:;
  'Trust score not found for this user.'})})
  test('
  'should also return 404 if data is null without specific PGRST116 error (general not found), async () => {
=======
      error: ;
  'Trust score not found for this user.'})});
  test(
  should also return 404 if data is null without specific PGRST116 error (general not found)', async () => {
>>>>>>> main
    // This covers cases where .single() might return {data: null, error: null} if no row matches but no DB error occurs.;
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: null });
    const { req, res } = createMocks({
      method:,
  GET',
<<<<<<< HEAD
      query: { userI,
    d:;
  '125 }});
=======
      query: { userId: ;
  125 }});
>>>>>>> main
    await handler(
>>>>>>> main
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({
      error:,
<<<<<<< HEAD
  Trust: score not found for this user.'})})';
  test(
  'should: return 500 if there is a database error (not PGRST116)', async () => {';
    const: dbError = { message: 'Internal: server erro,r, code: ;';
  'XXYYZ', }';
    mockSupabaseSingle.mockResolvedValueOnce({ data: nul,l, error: dbError, })
    const: { req, res } = createMocks({
      method:,
  GET',';
      query: { userId:;
  '126, }})';
    await: handler(
=======
<<<<<<< HEAD
  Trust score not found for this user.'})})
  test('
  'should return 500 if there is a database error (not PGRST116), async () => {'
    const dbError = { message: 'Internal server error, code:;
  'XXYYZ' }
=======
  Trust score not found for this user.'})});
  test(
  'should return 500 if there is a database error (not PGRST116), async () => {
    const dbError = { message: 'Internal server error, code: ;
  'XXYYZ }
>>>>>>> main
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: dbError });
    const { req, res } = createMocks({
      method:,
  GET',
<<<<<<< HEAD
      query: { userI,
    d:;
=======
      query: { userId: ;
>>>>>>> main
  '126 }});
    await handler(
>>>>>>> main
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({
      error: ;
<<<<<<< HEAD
  'Internal: server error while fetching trust score.,'})})';
  // This: assumes that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in the test environment;
  // or: the module handles their absence gracefully (which it should, by console.error but not crashing).;
  // For: a more robust test, you might set these env vars during test setup.;
  test(
  'handler: initializes Supabase client (conceptual check)', () => {';
    // This: test just ensures the module doesn't crash on import due to env var issues.;';
    // Actual: Supabase client functionality is tested by the other cases via mocks.;
    expect(handler).toBeDefined()})})
=======
  Internal server error while fetching trust score.'})});
  // This assumes that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in the test environment;
  // or the module handles their absence gracefully (which it should, by console.error but not crashing).;
  // For a more robust test, you might set these env vars during test setup.;
<<<<<<< HEAD
  test('
  'handler initializes Supabase client (conceptual check), () => {'
=======
  test(
  'handler initializes Supabase client (conceptual check), () => {
>>>>>>> main
    // This test just ensures the module doesn't crash on import due to env var issues.;
    // Actual Supabase client functionality is tested by the other cases via mocks.;
    expect(handler).toBeDefined()})});
=======
  test(;
  'should return 405 if method is not GET', async () => {';
    const { req, res } = createMocks({;
      method: 'POST,';
      query: { userId:,;
  1' }})';
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toBe(;
  'GET')})';
  test(;
  'should return 400 if userId is missing', async () => {';
    const { req, res } = createMocks({;
      method: 'GET,';
      query: {}, // No userId});
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({;
      error:,;
  User ID is required and must be a string.'})})';
  test(;
  'should return 400 if userId is not a string (e.g. array)', async () => {';
    const { req, res } = createMocks({;
      method: 'GET,';
      query: { userId: [,;
  1''2'] }})';
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({;
      error: 'User ID is required and must be a string.})})';
  test(;
  'should return trust score data if user and score are found', async () => {';
    const mockScoreData = {;
      id: 1,;
      score: 85,;
      userId: 123,;
      operatorGptAnalysis:;
  'Looks good',';
      components: [{ id: 1, componentType:;
  'completionRate', value: 0.9, weight: 0.3 }],';
      createdAt: new Date().toISOString(),;
      updatedAt: new Date().toISOString(});
    mockSupabaseSingle.mockResolvedValueOnce({;
      data: mockScoreData,;
      error: null});
    const { req, res } = createMocks({;
      method:,;
  GET',';
      query: { userId:;
  '123 }})';
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(mockScoreData);
    expect(mockSupabaseFrom).toHaveBeenCalledWith(,;
  TrustScore');';
    expect(mockSupabaseSelect).toHaveBeenCalledWith(;
      expect.stringContaining(;
  'components: TrustScoreComponent(*)'));';
    expect(mockSupabaseEq).toHaveBeenCalledWith(;
  'userId, 123) // Ensure string;';
  '123' is parsed to number;';
    expect(mockSupabaseOrder).toHaveBeenCalledWith(;
  'createdAt', {';
      ascending: false});
    expect(mockSupabaseLimit).toHaveBeenCalledWith(1);
    expect(mockSupabaseSingle).toHaveBeenCalled()});
  test(;
  'should return 404 if trust score is not found for the user', async () => {';
    mockSupabaseSingle.mockResolvedValueOnce({;
      data: null,;
      error: { code:,;
  PGRST116', message: 'Row not found }})';
    const { req, res } = createMocks({;
      method:,;
  GET',';
      query: { userId:;
  '124 }})';
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({;
      error:;
  'Trust score not found for this user.'})})';
  test(;
  'should also return 404 if data is null without specific PGRST116 error (general not found)', async () => {';
    // This covers cases where .single() might return {data: null, error: null} if no row matches but no DB error occurs.;
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: null });
    const { req, res } = createMocks({;
      method:,;
  GET',';
      query: { userId:;
  '125 }})';
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({;
      error:,;
  Trust score not found for this user.'})})';
  test(;
  'should return 500 if there is a database error (not PGRST116)', async () => {';
    const dbError = { message: 'Internal server error, code:;';
  'XXYYZ' }';
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: dbError });
    const { req, res } = createMocks({;
      method:,;
  GET',';
      query: { userId:;
  '126 }})';
    await handler(;
      req as unknown as NextApiRequest,;
      res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({;
      error:;
  'Internal server error while fetching trust score.'})})';
  // This assumes that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in the test environment;
  // or the module handles their absence gracefully (which it should, by console.error but not crashing).;
  // For a more robust test, you might set these env vars during test setup.;
  test(;
  'handler initializes Supabase client (conceptual check)', () => {';
    // This test just ensures the module doesn't crash on import due to env var issues.;
    // Actual Supabase client functionality is tested by the other cases via mocks.;
    expect(handler).toBeDefined()})});
=======
import { createMocks, createRequest, createResponse }   from 'node-mocks-http''
import type { NextApiRequest, NextApiResponse }   from 'next''
import handler  from '../../pages/api/trust/score/[userId]'// Adjust path as needed;'
// Mock the Supabase client
const mockSupabaseFrom = jest.fn().mockReturnThis()
const mockSupabaseSelect = jest.fn().mockReturnThis()
const mockSupabaseEq = jest.fn().mockReturnThis()
const mockSupabaseOrder = jest.fn().mockReturnThis()
const mockSupabaseLimit = jest.fn().mockReturnThis()
const mockSupabaseSingle = jest.fn()
jest.mock(
  '@supabase/supabase-js', () => ({'
  createClient: jest.fn(() => ({
    from: mockSupabaseFrom
    select: mockSupabaseSelect
    eq: mockSupabaseEq
    order: mockSupabaseOrder
    limit: mockSupabaseLimit
    single: mockSupabaseSingle}))}))
  describe('/api/trust/score/[userId] API Endpoint'', () => {'
  beforeEach(() => {
    // Reset mocks before each test
    mockSupabaseFrom.mockClear()
    mockSupabaseSelect.mockClear()
    mockSupabaseEq.mockClear()
    mockSupabaseOrder.mockClear()
    mockSupabaseLimit.mockClear()
    mockSupabaseSingle.mockClear()})
  test(
  'should return 405 if method is not GET', async () => {'
    const { req, res } = createMocks({
      method: 'POST,'
      query: { userId:
  1' }})'
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(405)
    expect(res._getHeaders().allow).toBe(
  'GET')})'
  test(
  'should return 400 if userId is missing', async () => {'
    const { req, res } = createMocks({
      method: 'GET,'
      query: {}, // No userId})
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toEqual({
      error:
  User ID is required and must be a string.'})})'
  test(
  'should return 400 if userId is not a string (e.g. array)', async () => {'
    const { req, res } = createMocks({
      method: 'GET,'
      query: { userId: [
  1''2'] }})'
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toEqual({
      error: 'User ID is required and must be a string.})})'
  test(
  'should return trust score data if user and score are found', async () => {'
    const mockScoreData = {
      id: 1
      score: 85
      userId: 123
      operatorGptAnalysis:
  'Looks good
      components: [{ id: 1, componentType:
  'completionRate', value: 0.9, weight: 0.3 }],'
      createdAt: new Date().toISOString()
      updatedAt: new Date().toISOString(})
    mockSupabaseSingle.mockResolvedValueOnce({
      data: mockScoreData
      error: null})
    const { req, res } = createMocks({
      method:
  GET
      query: { userId:
  '123 }})'
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(mockScoreData)
    expect(mockSupabaseFrom).toHaveBeenCalledWith(
  TrustScore');'
    expect(mockSupabaseSelect).toHaveBeenCalledWith(
      expect.stringContaining(
  'components: TrustScoreComponent(*)'));'
    expect(mockSupabaseEq).toHaveBeenCalledWith(
  'userId, 123) // Ensure string;123' is parsed to number;'
    expect(mockSupabaseOrder).toHaveBeenCalledWith(
  'createdAt', {'
      ascending: false})
    expect(mockSupabaseLimit).toHaveBeenCalledWith(1)
    expect(mockSupabaseSingle).toHaveBeenCalled()})
  test(
  'should return 404 if trust score is not found for the user', async () => {'
    mockSupabaseSingle.mockResolvedValueOnce({
      data: null
      error: { code:
  PGRST116', message: 'Row not found }})'
    const { req, res } = createMocks({
      method:
  GET
      query: { userId:
  '124 }})'
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(404)
    expect(JSON.parse(res._getData())).toEqual({
      error:
  'Trust score not found for this user.'})})'
  test(
  'should also return 404 if data is null without specific PGRST116 error (general not found)', async () => {'
    // This covers cases where .single() might return {data: null, error: null} if no row matches but no DB error occurs.
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: null })
    const { req, res } = createMocks({
      method:
  GET
      query: { userId:
  '125 }})'
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(404)
    expect(JSON.parse(res._getData())).toEqual({
      error:
  Trust score not found for this user.'})})'
  test(
  'should return 500 if there is a database error (not PGRST116)', async () => {'
    const dbError = { message: 'Internal server error, code:;XXYYZ' }'
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: dbError })
    const { req, res } = createMocks({
      method:
  GET
      query: { userId:
  '126 }})'
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse)
    expect(res._getStatusCode()).toBe(500)
    expect(JSON.parse(res._getData())).toEqual({
      error:
  'Internal server error while fetching trust score.'})})'
  // This assumes that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in the test environment
  // or the module handles their absence gracefully (which it should, by console.error but not crashing).
  // For a more robust test, you might set these env vars during test setup.
  test(
  'handler initializes Supabase client (conceptual check)', () => {'
    // This test just ensures the module doesn't crash on import due to env var issues.;'
    // Actual Supabase client functionality is tested by the other cases via mocks.
    expect(handler).toBeDefined()})})
>>>>>>> main
>>>>>>> main
>>>>>>> main
