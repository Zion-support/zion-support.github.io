import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';
import handler from '@/pages/api/admin/generate-pitch-deck';

jest.mock('@/integrations/supabase/client');

describe('/api/admin/generate-pitch-deck API Endpoint', () => {
  const mockRequestData = {
    companyMission: 'Test mission',
    currentFundingStage: 'Seed',
    visionGoals: 'Test vision',
    roundType: 'Seed',
    targetRaiseAmount: '100k',
    activeUsers30d: '1000',
    gmv: '50k',
    notableClients: '[]'
  };

  it('should return 401 for unauthorized requests', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: mockRequestData
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Unauthorized'
    });
  });

  it('should return 403 for forbidden requests', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      headers: {
        authorization: 'Bearer invalid-token'
      },
      body: mockRequestData
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Forbidden'
    });
  });

  it('should handle successful pitch deck generation', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      headers: {
        authorization: 'Bearer valid-token'
      },
      body: mockRequestData
    });

    await handler(req, res);

<<<<<<< HEAD
      "method": 'POST' as RequestMethod,'
      "headers": { "Authorization": 'Bearer valid-token','
},
      "body": {"
        }
        "prompt": mockPrompt,
        "inputData": mockInputData,"
        "syncedData": mockSyncedData}});"
    await handler(req as NextApiRequest, res as NextApiResponse);
=======
>>>>>>> origin/chore/fix-lint-and-merge
    expect(res._getStatusCode()).toBe(200);
  });
});