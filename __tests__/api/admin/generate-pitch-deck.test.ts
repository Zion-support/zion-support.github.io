<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, RequestMethod } from 'node-mocks-http'
import handler from '@/pages/api/admin/generate-pitch-deck'
import { supabase } from '@/integrations/supabase/client'
jest && jest.mock('@/integrations/supabase/client'
describe('/api/admin/generate-pitch-deck API Endpoint'
    companyMission: 'Test'
    currentFundingStage: 'Seed'
    visionGoals: 'Conquer'
    roundType: 'Seed'
    targetRaiseAmount: '100k'
    activeUsers30d: '1000'
    gmv: '50k'
    notableClients: '[]'
  const mockPrompt = 'Test prompt'
      data: { user: { id: 'test-user-id'
      error: 'null'
jest && jest.mock('@/integrations/supabase/client'
describe('/api/admin/generate-pitch-deck API Endpoint'
    "companyMission"
    "currentFundingStage"
    "visionGoals"
    "roundType"
    "targetRaiseAmount"
    "activeUsers30d"
    "gmv"
      "data"
      "data"
    const { req, res } = createMocks({ "method"
      "method"
      '"Unauthorized"
      "error"
      "method"
      "headers"
      '"Unauthorized"
      "data"
      "method"
      "headers"
      '"Forbidden"
      "data"
      "data"
      "method"
      "headers"
      "data"
      "data"
      "method"
      "headers"
      "data"
            "error"
      "method"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      "headers"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';
import handler from '@/pages/api/admin/generate-pitch-deck';
import { supabase } from '@/integrations/supabase/client';
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: { getUser: jest.fn() },
    from: jest.fn().mockReturnThis(),
    select: jest.fn(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
  },
}));
describe('/api/admin/generate-pitch-deck API Endpoint', () => {
  const mockInputData = {
    companyMission: 'Test',
    currentFundingStage: 'Seed',
    visionGoals: 'Conquer',
    roundType: 'Seed',
    targetRaiseAmount: '100k',
  };
  const mockSyncedData = {
    activeUsers30d: '1000',
    gmv: '50k',
    notableClients: '[]',
  };
  const mockPrompt = 'Test prompt';
  beforeEach(() => {
    jest.clearAllMocks();
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      data: { user: { id: 'test-user-id' } },
      error: 'null',
    });
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
// Mock Supabase client
jest.mock('@/integrations/supabase/client', () => ({
  "supabase": {
    auth: {
      getUser: jest.fn()},
    "from": jest.fn().mockReturnThis(),
    "select": jest.fn(),
    "eq": jest.fn().mockReturnThis(),
    "single": jest.fn()}}));
describe('/api/admin/generate-pitch-deck API Endpoint', () => {
  const mockInputData = {
    "companyMission": 'Test',
    "currentFundingStage": 'Seed',
    "visionGoals": 'Conquer',
    "roundType": 'Seed',
    "targetRaiseAmount": '100k'};
  const mockSyncedData = {
    "activeUsers30d": '1000',
    "gmv": '50k',
    "notableClients": []};
  const mockPrompt = 'Test prompt';
  beforeEach(() => {
    jest.clearAllMocks();
    // Default mock implementations for Supabase
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      "data": { user: { id: 'test-user-id' } },
      "error": null});
    // Chainable mocks for Supabase query builder
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
    (supabase.select as jest.Mock).mockReturnThis();
    (supabase.eq as jest.Mock).mockReturnThis();
    (supabase.single as jest.Mock).mockResolvedValue({
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
      data: { role: 'admin' },
      error: 'null',
    });
  });
  test('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({ method: 'GET' as RequestMethod });
=======
    (supabase.from as jest.Mock).mockReturnThis();
    (supabase.select as jest.Mock).mockReturnThis();
    (supabase.eq as jest.Mock).mockReturnThis();
    (supabase.single as jest.Mock).mockResolvedValue({
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
      "data": { role: 'admin' },
      "error": null});
  });
  test('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({ "method": 'GET' as RequestMethod });
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
=======
    await handler(req as NextApiRequest, res as NextApiResponse);
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');
  });
  test('should return 401 if Authorization header is missing', async () => {
    const { req, res } = createMocks({
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
      method: 'POST' as RequestMethod,
      headers: {},
      body: {
        prompt: mockPrompt,
        inputData: 'mockInputData',
        syncedData: 'mockSyncedData',
      },
    });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe(
      'Unauthorized: Missing or invalid token.'
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
      "method": 'POST' as RequestMethod,
      "headers": {
        /* No Authorization header */
      },
      "body": {
        prompt: mockPrompt,
        "inputData": mockInputData,
        "syncedData": mockSyncedData}});
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe(
      '"Unauthorized": Missing or invalid token.'
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
  });
  test('should return 401 if token is invalid or user not found', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
      data: { user: null },
      error: new Error('Invalid token'),
    });
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer invalid-token' },
      body: {
        prompt: mockPrompt,
        inputData: 'mockInputData',
        syncedData: 'mockSyncedData',
      },
    });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe(
      'Unauthorized: Invalid token or user not found.'
=======
    );
  });
  test('should return 401 if token is invalid or user not found', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
      "data": { user: null },
      "error": new Error('Invalid token')});
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "headers": { Authorization: 'Bearer invalid-token' },
      "body": {
        prompt: mockPrompt,
        "inputData": mockInputData,
        "syncedData": mockSyncedData}});
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe(
      '"Unauthorized": Invalid token or user not found.'
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
  });
  test('should return 403 if user role is not authorized', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
      data: { user: { id: 'user-id' } },
      error: 'null',
    });
    (supabase.from as jest.Mock).mockReturnValueOnce({
      select: jest
        .fn()
        .mockReturnValueOnce({
          eq: jest
            .fn()
            .mockReturnValueOnce({
              single: jest
                .fn()
                .mockResolvedValueOnce({
                  data: { role: 'user' },
                  error: 'null',
                }),
            }),
        }),
    });
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token-for-user-role' },
      body: {
        prompt: mockPrompt,
        inputData: 'mockInputData',
        syncedData: 'mockSyncedData',
      },
    });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(403);
    expect(res._getJSONData().message).toBe(
      'Forbidden: Access denied. Insufficient privileges.'
    );
  });
  test('should return 400 if required parameters are missing', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      data: { user: { id: 'user-id' } },
      error: 'null',
    });
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({
      data: { role: 'admin' },
      error: 'null',
    });
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token' },
      body: { inputData: 'mockInputData', syncedData: 'mockSyncedData' },
    });
=======
    );
  });
  test('should return 403 if user role is not authorized', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
      "data": { user: { id: 'user-id' } },
      "error": null});
    // Mock profile fetch to return a non-authorized role
    (supabase.from as jest.Mock).mockReturnValueOnce({
      "select": jest.fn().mockReturnValueOnce({
        eq: jest.fn().mockReturnValueOnce({
          single: jest.fn().mockResolvedValueOnce({
            data: { role: 'user' },
            "error": null})})})});
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "headers": { Authorization: 'Bearer valid-token-for-user-role' },
      "body": {
        prompt: mockPrompt,
        "inputData": mockInputData,
        "syncedData": mockSyncedData}});
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(403);
    expect(res._getJSONData().message).toBe(
      '"Forbidden": Access denied. Insufficient privileges.'
    );
  });
  test('should return 400 if required parameters are missing', async () => {
    // Auth and role are fine for this test
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      "data": { user: { id: 'user-id' } },
      "error": null});
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({
      "data": { role: 'admin' },
      "error": null});
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "headers": { Authorization: 'Bearer valid-token' },
      "body": {
        /* prompt: mockPrompt, */ // Missing prompt
        "inputData": mockInputData,
        "syncedData": mockSyncedData}});
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
=======
    await handler(req as NextApiRequest, res as NextApiResponse);
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toContain('Missing required parameters');
  });
  test('should return 200 and mock deck data on successful generation', async () => {
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      data: { user: { id: 'user-id' } },
      error: 'null',
    });
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({
      data: { role: 'admin' },
      error: 'null',
    });
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token' },
      body: {
        prompt: mockPrompt,
        inputData: 'mockInputData',
        syncedData: 'mockSyncedData',
      },
    });
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
    // Auth and role are fine
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      "data": { user: { id: 'user-id' } },
      "error": null});
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({
      "data": { role: 'admin' },
      "error": null});
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "headers": { Authorization: 'Bearer valid-token' },
      "body": {
        prompt: mockPrompt,
        "inputData": mockInputData,
        "syncedData": mockSyncedData}});
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
=======
    await handler(req as NextApiRequest, res as NextApiResponse);
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getJSONData();
    expect(responseData.slides).toBeInstanceOf(Array);
    expect(responseData.slides.length).toBeGreaterThan(0);
    expect(responseData.slides[0].title).toBeDefined();
  });
  test('should return 500 if fetching profile fails', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
      data: { user: { id: 'user-id' } },
      error: 'null',
    });
    (supabase.from as jest.Mock).mockReturnValueOnce({
      select: jest
        .fn()
        .mockReturnValueOnce({
          eq: jest
            .fn()
            .mockReturnValueOnce({
              single: jest
                .fn()
                .mockResolvedValueOnce({
                  data: null,
                  error: new Error('Failed to fetch profile'),
                }),
            }),
        }),
    });
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token' },
      body: {
        prompt: mockPrompt,
        inputData: 'mockInputData',
        syncedData: 'mockSyncedData',
      },
    });
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
      "data": { user: { id: 'user-id' } },
      "error": null});
    // Simulate profile fetch error
    (supabase.from as jest.Mock).mockReturnValueOnce({
      "select": jest.fn().mockReturnValueOnce({
        eq: jest.fn().mockReturnValueOnce({
          single: jest.fn().mockResolvedValueOnce({
            data: null,
            "error": new Error('Failed to fetch profile')})})})});
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "headers": { Authorization: 'Bearer valid-token' },
      "body": {
        prompt: mockPrompt,
        "inputData": mockInputData,
        "syncedData": mockSyncedData}});
<<<<<<< HEAD:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
    expect(res._getStatusCode()).toBe(500);
  });
});
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});

import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
=======
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(500);
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      "headers"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
      "headers"
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
<<<<<<< HEAD
=======
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
ursor/add-new-services-and-deploy-updates-0462
ursor/integrate-build-improve-and-re-verify-8f7d
      "headers"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      "headers"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

=======
      "headers"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/admin/generate-pitch-deck.test.ts
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
