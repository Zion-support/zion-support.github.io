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
  const mockFrom = jest.fn().mockReturnValue({
    insert: mockInsert,
    select: mockSelect,
    single: mockSingle
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (supabase.from as jest.Mock).mockImplementation(mockFrom);
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET' as RequestMethod
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');
  });

  it('should return 400 if required fields are missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        // Missing required fields
      }
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Missing required fields');
  });

  it('should return 201 with created invite on success', async () => {
    const mockTeamInvite: TeamInvite = {
      id: 'invite-123',
      projectId: 'project-456',
      email: 'test@example.com',
      role: 'developer',
      status: 'pending',
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    };

    mockSingle.mockResolvedValue({
      data: mockTeamInvite,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        projectId: 'project-456',
        email: 'test@example.com',
        role: 'developer'
      }
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData()).toEqual(mockTeamInvite);
    expect(supabase.from).toHaveBeenCalledWith('team_invites');
    expect(mockInsert).toHaveBeenCalledWith({
      projectId: 'project-456',
      email: 'test@example.com',
      role: 'developer',
      status: 'pending',
      expiresAt: expect.any(Date)
    });
  });

  it('should return 500 if database insert fails', async () => {
    mockSingle.mockResolvedValue({
      data: null,
      error: new Error('Database insert failed')
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        projectId: 'project-456',
        email: 'test@example.com',
        role: 'developer'
      }
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain('Failed to create team invite');
  });

  it('should validate email format', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        projectId: 'project-456',
        email: 'invalid-email',
        role: 'developer'
      }
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Invalid email format');
  });

  it('should validate role values', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        projectId: 'project-456',
        email: 'test@example.com',
        role: 'invalid-role'
      }
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Invalid role');
  });

  it('should set default expiration date', async () => {
    const mockTeamInvite: TeamInvite = {
      id: 'invite-123',
      projectId: 'project-456',
      email: 'test@example.com',
      role: 'developer',
      status: 'pending',
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };

    mockSingle.mockResolvedValue({
      data: mockTeamInvite,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        projectId: 'project-456',
        email: 'test@example.com',
        role: 'developer'
      }
    });

    await inviteHandler(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(mockInsert).toHaveBeenCalledWith(
      expect.objectContaining({
        expiresAt: expect.any(Date)
      })
    );
  });
});