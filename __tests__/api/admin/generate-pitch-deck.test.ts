// Adjust path as needed
import { createMocks } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/admin/generate-pitch-deck';

// Mock Supabase client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
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
    notableClients: [],
  };

  const mockPrompt = 'Test prompt';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');
  });

  test('should return 401 if Authorization header is missing', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      headers: {},
      body: {
        prompt: mockPrompt,
        inputData: mockInputData,
        syncedData: mockSyncedData,
      },
    });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe('Unauthorized: Missing or invalid token.');
  });
});