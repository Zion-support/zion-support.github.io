<<<<<<< HEAD


import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';
import handler from '@/pages/api/admin/generate-pitch-deck';

jest.mock('@/integrations/supabase/client', () => ({
  supabase: {,)
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
  const mockPrompt = 'Test prompt';

=======
ursor/automate-test-improve-and-merge-code-646c;
import { NextApiRequest, NextApiResponse  } from 'next';'
import { createMocks, RequestMethod  } from 'node-mocks-http';'
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
      "method"'"
      '"Unauthorized"
      "error"
      "method"
      "headers"'"
      '"Unauthorized"
      "data"
      "method"
      "headers"'"
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
      "headers"
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';
import handler from '@/pages/api/admin/generate-pitch-deck';
import { supabase } from '@/integrations/supabase/client';



import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});

import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});

      "headers"
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';



import { NextApiRequest, NextApiResponse } from 'next''
import { createMocks, RequestMethod } from 'node-mocks-http''
import handler from '@/pages/api/admin/generate-pitch-deck''
import { supabase } from '@/integrations/supabase/client''
jest && jest.mock('@/integrations/supabase/client''
describe('/api/admin/generate-pitch-deck API Endpoint''
    "companyMission": 'Test''
    "currentFundingStage": 'Seed''
    "visionGoals": 'Conquer''
    "roundType": 'Seed''
    "targetRaiseAmount": '100k''
    "activeUsers30d": '1000''
    "gmv": '50k''
    "notableClients": '[]''
const mockPrompt = 'Test prompt';'
      "data": { "user": { "id": 'test-user-id''
      }
      "error": 'null''
jest && jest.mock('@/integrations/supabase/client''
describe('/api/admin/generate-pitch-deck API Endpoint''
    "companyMission""
    "currentFundingStage""
    "visionGoals""
    "roundType""
    "targetRaiseAmount""
    "activeUsers30d""
    "gmv""
      "data""
      "data""
   ;
const { req, res } = createMocks({ "method";"
      "method""
      '"Unauthorized""
      "error""
      "method""
      "headers""
      '"Unauthorized""
      "data""
      "method""
      "headers""
      '"Forbidden""
      "data""
      "data""
      "method""
      "headers""
      "data""
      "data""
      "method""
      "headers""
      "data""
            "error""
      "method""
  };

  it('should return 401 for unauthorized requests', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: mockRequestData
    });


}


import { NextApiRequest, NextApiResponse } from 'next';'
import { createMocks, RequestMethod } from 'node-mocks-http';'
import handler from '@/pages/api/admin/generate-pitch-deck';'
import { supabase  } from '@/integrations/supabase/client';'
jest && jest.mock('@/integrations/supabase/client';'
describe('/api/admin/generate-pitch-deck API Endpoint';'
    "companyMission": 'Test';'
    "currentFundingStage": 'Seed';'
    "visionGoals": 'Conquer';'
    "roundType": 'Seed';'
    "targetRaiseAmount": '100k';'
    "activeUsers30d": '1000';'
    "gmv": '50k';'
    "notableClients": '[]';'

      "data": { "user": { "id": 'test-user-id';'
      }
      "error": 'null';'
jest && jest.mock('@/integrations/supabase/client';'
describe('/api/admin/generate-pitch-deck API Endpoint';'
    "companyMission";"
    "currentFundingStage";"
    "visionGoals";"
    "roundType";"
    "targetRaiseAmount";"
    "activeUsers30d";"
    "gmv";"
      "data";"
      "data";"

      "method";"
      '"Unauthorized";"
      "error";"
      "method";"
      "headers";"
      '"Unauthorized";"
      "data";"
      "method";"
      "headers";"
      '"Forbidden";"
      "data";"
      "data";"
      "method";"
      "headers";"
      "data";"
      "data";"
      "method";"
      "headers";"
      "data";"
            "error";"
      "method";"
      "headers";"
      "headers";"
}
ursor/automate-test-improve-and-merge-code-646c;
ursor/automate-test-improve-and-merge-code-646c;
jest.mock('@/integrations/supabase/client', () => ({"supabase": {"auth": { "getUser": jest.fn(),'
},"from": jest.fn().mockReturnThis(),"select": jest.fn(),"eq": jest.fn().mockReturnThis(),"single": jest.fn()}
}))describe('/api/admin/generate-pitch-deck API Endpoint', () => {const mockInputData = {"companyMission": 'Test',"currentFundingStage": 'Seed',"visionGoals": 'Conquer',"roundType": 'Seed',"targetRaiseAmount": '100k';'
  }

const mockSyncedData = {"activeUsers30d": '1000',"gmv": '50k',"notableClients": '[]';'
  }

  beforeEach(() => {jest.clearAllMocks()(supabase.auth.getUser as jest.Mock).mockResolvedValue({"data": { "user": { "id": 'test-user-id' },'
},"error": 'null';'
    })ursor/automate-test-improve-and-merge-code-646c;
// Mock Supabase client;
jest.mock('@/integrations/supabase/client', () => ({"supabase": {"auth": {"getUser": jest.fn(,"
},"from": jest.fn().mockReturnThis(),"select": jest.fn(),"eq": jest.fn().mockReturnThis(),"single": jest.fn()}}))describe('/api/admin/generate-pitch-deck API Endpoint', () => {const mockInputData = {"companyMission": 'Test',"currentFundingStage": 'Seed',"visionGoals": 'Conquer',"roundType": 'Seed',"targetRaiseAmount": '100k;'
}

  beforeEach(() => {jest.clearAllMocks()// Default mock implementations for Supabase;
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({"data": { "user": { "id": 'test-user-id' },'
},"error": null})// Chainable mocks for Supabase query builder;"
    (supabase.from as jest.Mock).mockReturnThis()(supabase.select as jest.Mock).mockReturnThis()(supabase.eq as jest.Mock).mockReturnThis()(supabase.single as jest.Mock).mockResolvedValue({"data": { "role": 'admin','
},"error": null})})test('should return 405 if method is not POST', async () => {const { req, res } = createMocks({ "method": 'GET' as RequestMethod })await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(405)expect(res._getHeaders().allow).toContain('POST')})test('should return 401 if Authorization header is missing', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"headers": {/* No Authorization header */;"
      },"body": {"prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData}})await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(401)expect(res._getJSONData().message).toBe('"Unauthorized": Missing or invalid token.';'
    )})test('should return 401 if token is invalid or user not found', async () => {(supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({"data": { "user": null,"
},"error": new Error('Invalid token')})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer invalid-token','
},"body": {"prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData}})await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(401)expect(res._getJSONData().message).toBe('"Unauthorized": Invalid token or user not found.';'
    )})test('should return 403 if user role is not authorized', async () => {(supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({"data": { "user": { "id": 'user-id' },'
},"error": null})// Mock profile fetch to return a non-authorized role;"
    (supabase.from as jest.Mock).mockReturnValueOnce({"select": jest.fn().mockReturnValueOnce({"eq": jest.fn().mockReturnValueOnce({"single": jest.fn().mockResolvedValueOnce({"data": { "role": 'user','
},"error": null})})})})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token-for-user-role','
},"body": {"prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData}})await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(403)expect(res._getJSONData().message).toBe('"Forbidden": Access denied. Insufficient privileges.';'
    )})test('should return 400 if required parameters are missing', async () => {// Auth and role are fine for this test;'
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({"data": { "user": { "id": 'user-id' },'
},"error": null})(supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({"data": { "role": 'admin','
},"error": null})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token','
},"body": {/* "prompt": mockPrompt, */ // Missing prompt;"
        "inputData": mockInputData,"syncedData": mockSyncedData}})await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(400)expect(res._getJSONData().message).toContain('Missing required parameters')})test('should return 200 and mock deck data on successful generation', async () => {// Auth and role are fine;'
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({"data": { "user": { "id": 'user-id' },'
},"error": null})(supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({"data": { "role": 'admin','
},"error": null})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token','
},"body": {"prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData}})await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(200)const responseData = res._getJSONData()expect(responseData.slides).toBeInstanceOf(Array)expect(responseData.slides.length).toBeGreaterThan(0)expect(responseData.slides[0].title).toBeDefined()})test('should;'
  return 500 if fetching profile fails', async () => {(supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({"data": { "user": { "id": 'user-id' },'
},"error": null})// Simulate profile fetch error;"
    (supabase.from as jest.Mock).mockReturnValueOnce({"select": jest.fn().mockReturnValueOnce({"eq": jest.fn().mockReturnValueOnce({"single": jest.fn().mockResolvedValueOnce({"data": null,"error": new Error('Failed to fetch profile')})})})})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token','
},"body": {"prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData}})await handler(req as NextApiRequest, res as NextApiResponse)expect(res._getStatusCode()).toBe(500)})})"headers";"
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ "supabase": { "auth": { "getUser": jest.fn(),'
},"from": jest.fn().mockReturnThis(),"select": jest.fn(),"eq": jest.fn().mockReturnThis(),"single": jest.fn()
}))describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { "companyMission": 'Test',"currentFundingStage": 'Seed',"visionGoals": 'Conquer',"roundType": 'Seed',"targetRaiseAmount": '100k;'
}

const mockSyncedData = { "activeUsers30d": '1000',"gmv": '50k',"notableClients": [,;'
}
;
  const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks()(supabase.auth.getUser as jest.Mock).mockResolvedValue({ "data": { "user": { "id": 'test-user-id' },'
},"error": null})(supabase.from as jest.Mock).mockReturnThis()(supabase.select as jest.Mock).mockReturnThis()(supabase.eq as jest.Mock).mockReturnThis()(supabase.single as jest.Mock).mockResolvedValue({ "data": { "role": 'admin','
},"error": null}
})test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ "method": 'GET' as RequestMethod,'
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(405)expect(res._getHeaders().allow).toContain('POST')})test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"headers":  ,'
},"body": { "prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(401)expect(res._getJSONData().message).toBe( '"Unauthorized": Missing or invalid token.' ,'
})test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ "data": { "user": null,'
},"error": new Error('Invalid token','
})const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer invalid-token','
},"body": { "prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(401)expect(res._getJSONData().message).toBe( '"Unauthorized": Invalid token or user not found.' ,'
})test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ "data": { "user": { "id": 'user-id' },'
},"error": null})(supabase.from as jest.Mock).mockReturnValueOnce({ "select": jest .fn() .mockReturnValueOnce({ "eq": jest .fn() .mockReturnValueOnce({ "single": jest .fn() .mockResolvedValueOnce({ "data": { "role": 'user','
},"error": null })})}
})const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token-for-user-role','
},"body": { "prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(403)expect(res._getJSONData().message).toBe( '"Forbidden": Access denied. Insufficient privileges.' ,'
})test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ "data": { "user": { "id": 'user-id' },'
},"error": null})(supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ "data": { "role": 'admin','
},"error": nul
})const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token','
},"body": { "inputData": mockInputData,"syncedData": mockSyncedData 
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(400)expect(res._getJSONData().message).toContain('Missing required parameters')})test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ "data": { "user": { "id": 'user-id' },'
},"error": null})(supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ "data": { "role": 'admin','
},"error": nul
})const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token','
},"body": { "prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(200)const responseData = res._getJSONData()expect(responseData.slides).toBeInstanceOf(Array)expect(responseData.slides.length).toBeGreaterThan(0)expect(responseData.slides[0].title).toBeDefined()})test('should;'
  return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ "data": { "user": { "id": 'user-id' },'
},"error": nul
})(supabase.from as jest.Mock).mockReturnValueOnce({ "select": jest .fn() .mockReturnValueOnce({ "eq": jest .fn() .mockReturnValueOnce({ "single": jest .fn() .mockResolvedValueOnce({ "data": null,"error": new Error('Failed to fetch profile')})})},'
};
const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"headers": { "Authorization": 'Bearer valid-token',;'
},"body": { "prompt": mockPrompt,"inputData": mockInputData,"syncedData": mockSyncedData
})await handler(req as NextApiRequest,res as NextApiResponse)expect(res._getStatusCode()).toBe(500)})})"headers";"headers";"
      "headers";"
      "headers";"
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;
      "headers";"
      "headers";"
      "headers";"
ursor/automate-test-improve-and-merge-code-646c;
      "headers";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  beforeEach(() => {
    }
    jest.clearAllMocks();
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      data: { user: { id: 'test-user-id' } },
      error: 'null',
    });
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
<<<<<<< HEAD

// Mock Supabase client;
  "supabase": {"
    auth: {,)
  getUser: jest.fn()},"
    "from": jest.fn().mockReturnThis(),""
    "select": jest.fn(),""
    "eq": jest.fn().mockReturnThis(),""
    "single": jest.fn()}}));""
    "companyMission": 'Test',
    "currentFundingStage": 'Seed',
    "visionGoals": 'Conquer',
    "roundType": 'Seed',
    "targetRaiseAmount": '100k'};
    "activeUsers30d": '1000',
    "gmv": '50k',
    "notableClients": []};
  const mockPrompt = 'Test prompt';
=======
    "companyMission": 'Test','
    "currentFundingStage": 'Seed','
    "visionGoals": 'Conquer','
    "roundType": 'Seed','
    "targetRaiseAmount": '100k'};'

const mockSyncedData = {
    "activeUsers30d": '1000','
    "gmv": '50k','
    "notableClients": []};"
>>>>>>> origin/cursor/delete-old-data-records-6bba

  beforeEach(() => {
    }
    jest.clearAllMocks();
    // Default mock implementations for Supabase
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      "data": { "user": { "id": 'test-user-id' },'
},
      "error": null});"
    // Chainable mocks for Supabase query builder
    (supabase.from as jest.Mock).mockReturnThis();
    (supabase.select as jest.Mock).mockReturnThis();
    (supabase.eq as jest.Mock).mockReturnThis();
    (supabase.single as jest.Mock).mockResolvedValue({
      "data": { "role": 'admin','
},
      "error": null});"
  });
  test('should return 405 if method is not POST', async () => {'
    }
    const { req, res } = createMocks({ "method": 'GET' as RequestMethod });'
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');'
  });
  test('should return 401 if Authorization header is missing', async () => {'
    }
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,'
      "headers": {"
        /* No Authorization header */
      },
      "body": {"
        }
        "prompt": mockPrompt,
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe(
      '"Unauthorized": Missing or invalid token.''
    );
    });
  });
  test('should return 401 if token is invalid or user not found', async () => {'
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      "data": { "user": null,"
},
      "error": new Error('Invalid token')});'

<<<<<<< HEAD

        prompt: mockPrompt,
        inputData: 'mockInputData',
        syncedData: 'mockSyncedData',
      },
    });

=======
      "method": 'POST' as RequestMethod,'
      "headers": { "Authorization": 'Bearer invalid-token','
},
      "body": {"
        }
        "prompt": mockPrompt,
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe(
      '"Unauthorized": Invalid token or user not found.''
    );
  });
  test('should return 403 if user role is not authorized', async () => {'
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      "data": { "user": { "id": 'user-id' },'
},
      "error": null});"
    // Mock profile fetch to return a non-authorized role
    (supabase.from as jest.Mock).mockReturnValueOnce({
      "select": jest.fn().mockReturnValueOnce({"
        }
        "eq": jest.fn().mockReturnValueOnce({
          }
          "single": jest.fn().mockResolvedValueOnce({
            }
            "data": { "role": 'user','
},
            "error": null})})})});"
    });

    await handler(req, res);

<<<<<<< HEAD

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

=======
      "method": 'POST' as RequestMethod,'
      "headers": { "Authorization": 'Bearer valid-token-for-user-role','
},
      "body": {"
        }
        "prompt": mockPrompt,
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(403);
    expect(res._getJSONData().message).toBe(
      '"Forbidden": Access denied. Insufficient privileges.''
    );
    });
  });
  test('should return 400 if required parameters are missing', async () => {'
    // Auth and role are fine for this test
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
<<<<<<< HEAD

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
    );

=======
      "data": { "user": { "id": 'user-id' },'
},
      "error": null});"
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({'
      "data": { "role": 'admin','
},
      "error": null});"

      "method": 'POST' as RequestMethod,'
      "headers": { "Authorization": 'Bearer valid-token','
},
      "body": {"
        /* "prompt": mockPrompt, */ // Missing prompt
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toContain('Missing required parameters');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  });
  test('should return 200 and mock deck data on successful generation', async () => {'
    // Auth and role are fine
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      "data": { "user": { "id": 'user-id' },'
},
      "error": null});"
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({'
      "data": { "role": 'admin','
},
      "error": null});"
    });

    await handler(req, res);

<<<<<<< HEAD


=======
      "method": 'POST' as RequestMethod,'
      "headers": { "Authorization": 'Bearer valid-token','
},
      "body": {"
        }
        "prompt": mockPrompt,
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
    await handler(req as NextApiRequest, res as NextApiResponse);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getJSONData();
    expect(responseData.slides).toBeInstanceOf(Array);
    expect(responseData.slides.length).toBeGreaterThan(0);
    expect(responseData.slides[0].title).toBeDefined();
  });
  test('should return 500 if fetching profile fails', async () => {'
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      "data": { "user": { "id": 'user-id' },'
},
      "error": null});"
    // Simulate profile fetch error
    (supabase.from as jest.Mock).mockReturnValueOnce({
      "select": jest.fn().mockReturnValueOnce({"
        }
        "eq": jest.fn().mockReturnValueOnce({
          }
          "single": jest.fn().mockResolvedValueOnce({
            }
            "data": null,
            "error": new Error('Failed to fetch profile')})})})});'

<<<<<<< HEAD
    expect(res._getStatusCode()).toBe(500);
  });
});
:backup-merge-conflicts/generate-pitch-deck.test.ts.backup
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});

import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});



=======
      "method": 'POST' as RequestMethod,'
      "headers": { "Authorization": 'Bearer valid-token','
},
      "body": {"
        }
        "prompt": mockPrompt,
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(500);
  });
});
<<<<<<< HEAD
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
=======
import { NextApiRequest,NextApiResponse } from 'next'; import { createMocks,RequestMethod } from 'node-mocks-http'; import handler from '@/pages/api/admin/generate-pitch-deck'; import { supabase } from '@/integrations/supabase/client'; jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getUser: jest.fn() },from: jest.fn().mockReturnThis(),select: jest.fn(),eq: jest.fn().mockReturnThis(),single: jest.fn(),},})); describe('/api/admin/generate-pitch-deck API Endpoint',() => { const mockInputData = { companyMission: 'Test',currentFundingStage: 'Seed',visionGoals: 'Conquer',roundType: 'Seed',targetRaiseAmount: '100k',}; const mockSyncedData = { activeUsers30d: '1000',gmv: '50k',notableClients: [],}; const mockPrompt = 'Test prompt'; beforeEach(() => { jest.clearAllMocks(); (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnThis(); (supabase.select as jest.Mock).mockReturnThis(); (supabase.eq as jest.Mock).mockReturnThis(); (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' },error: null,})}); test('should return 405 if method is not POST',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod }); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(405); expect(res._getHeaders().allow).toContain('POST')}); test('should return 401 if Authorization header is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: {},body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Missing or invalid token.' )}); test('should return 401 if token is invalid or user not found',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null },error: new Error('Invalid token'),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer invalid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(401); expect(res._getJSONData().message).toBe( 'Unauthorized: Invalid token or user not found.' )}); test('should return 403 if user role is not authorized',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: { role: 'user' },error: null }),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token-for-user-role' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(403); expect(res._getJSONData().message).toBe( 'Forbidden: Access denied. Insufficient privileges.' )}); test('should return 400 if required parameters are missing',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { inputData: mockInputData,syncedData: mockSyncedData },}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(400); expect(res._getJSONData().message).toContain('Missing required parameters')}); test('should return 200 and mock deck data on successful generation',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' },error: null,}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(200); const responseData = res._getJSONData(); expect(responseData.slides).toBeInstanceOf(Array); expect(responseData.slides.length).toBeGreaterThan(0); expect(responseData.slides[0].title).toBeDefined()}); test('should return 500 if fetching profile fails',async () => { (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } },error: null,}); (supabase.from as jest.Mock).mockReturnValueOnce({ select: jest .fn() .mockReturnValueOnce({ eq: jest .fn() .mockReturnValueOnce({ single: jest .fn() .mockResolvedValueOnce({ data: null,error: new Error('Failed to fetch profile'),}),}),}),}); const { req,res } = createMocks({ method: 'POST' as RequestMethod,headers: { Authorization: 'Bearer valid-token' },body: { prompt: mockPrompt,inputData: mockInputData,syncedData: mockSyncedData,},}); await handler(req as NextApiRequest,res as NextApiResponse); expect(res._getStatusCode()).toBe(500)})});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
