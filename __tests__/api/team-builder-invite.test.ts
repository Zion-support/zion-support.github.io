import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import inviteHandler from '@/pages/api/team-builder/invite';
import { supabase } from '@/integrations/supabase/client'; // To be mocked
import { TeamInvite } from '@/types';

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    single: jest.fn()
  }
}));

describe('/api/team-builder/invite API Endpoint', () => {
  // Define mockInsert separately to allow chaining
  const mockSingle = jest.fn();
  const mockSelect = jest.fn().mockReturnThis();
  const mockInsert = jest.fn().mockReturnThis();
  
  // This object will be returned by supabase.from()
  const mockSupabaseChain = {
    insert: mockInsert,
    select: mockSelect,
    single: mockSingle
  };

  beforeEach(() => {
    // Reset all mocks before each test
    mockSingle.mockReset();
    mockSelect.mockClear();
    mockInsert.mockClear();
    
    // Ensure supabase.from itself is a mock that returns our chainable object
    (supabase.from as jest.Mock).mockReturnValue(mockSupabaseChain);
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET' as RequestMethod
    });
    
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe('Method GET Not Allowed');
  });

  it('should return 400 if required fields are missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { 
        email: 'test@example.com' 
      } // Missing other required fields
    });
    
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toBe('Missing required fields');
  });

  it('should return 500 if database insert fails', async () => {
    const mockInvite: TeamInvite = {
      email: 'test@example.com',
      role: 'Developer',
      projectId: 'project1',
      invitedBy: 'user1'
    };

    mockSingle.mockResolvedValueOnce({
      error: { message: 'Database error' },
      data: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: mockInvite
    });

    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toBe('Failed to send invitation');
  });

  it('should return 200 with invitation data on success', async () => {
    const mockInvite: TeamInvite = {
      email: 'test@example.com',
      role: 'Developer',
      projectId: 'project1',
      invitedBy: 'user1'
    };

    const mockInviteResponse = {
      id: 'invite1',
      ...mockInvite,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    mockSingle.mockResolvedValueOnce({
      error: null,
      data: mockInviteResponse
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: mockInvite
    });

    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getJSONData();
    expect(responseData.id).toBe('invite1');
    expect(responseData.email).toBe('test@example.com');
    expect(responseData.role).toBe('Developer');
  });
});