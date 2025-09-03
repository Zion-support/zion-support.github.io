import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import generateHandler from '@/pages/api/team-builder/generate';
import { supabase } from '@/integrations/supabase/client'; // To be mocked
import { ProjectBrief, TeamRecommendation } from '@/types';

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: jest.fn()
    }
  }
}));

describe('/api/team-builder/generate API Endpoint', () => {
  const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;

  beforeEach(() => {
    mockSupabaseInvoke.mockReset();
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET' as RequestMethod // Correctly cast to RequestMethod
    });

    await generateHandler(req, res);

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

    await generateHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Missing required fields');
  });

  it('should return 200 with team recommendations on success', async () => {
    const mockProjectBrief: ProjectBrief = {
      projectName: 'Test Project',
      description: 'A test project',
      industry: 'Technology',
      teamSize: 5,
      budget: 100000,
      timeline: '6 months',
      skills: ['React', 'Node.js', 'TypeScript'],
      experience: 'intermediate'
    };

    const mockTeamRecommendation: TeamRecommendation = {
      roles: [
        {
          title: 'Frontend Developer',
          skills: ['React', 'TypeScript'],
          experience: 'intermediate',
          count: 2
        },
        {
          title: 'Backend Developer',
          skills: ['Node.js', 'TypeScript'],
          experience: 'intermediate',
          count: 2
        },
        {
          title: 'Project Manager',
          skills: ['Project Management'],
          experience: 'senior',
          count: 1
        }
      ],
      totalCost: 95000,
      timeline: '5 months'
    };

    mockSupabaseInvoke.mockResolvedValue({
      data: mockTeamRecommendation,
      error: null
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: mockProjectBrief
    });

    await generateHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockTeamRecommendation);
    expect(mockSupabaseInvoke).toHaveBeenCalledWith('team-builder-generate', {
      body: mockProjectBrief
    });
  });

  it('should return 500 if Supabase function fails', async () => {
    const mockProjectBrief: ProjectBrief = {
      projectName: 'Test Project',
      description: 'A test project',
      industry: 'Technology',
      teamSize: 5,
      budget: 100000,
      timeline: '6 months',
      skills: ['React', 'Node.js', 'TypeScript'],
      experience: 'intermediate'
    };

    mockSupabaseInvoke.mockResolvedValue({
      data: null,
      error: new Error('Supabase function failed')
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: mockProjectBrief
    });

    await generateHandler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain('Failed to generate team recommendations');
  });

  it('should validate project brief structure', async () => {
    const invalidProjectBrief = {
      projectName: 'Test Project',
      // Missing required fields
      description: 'A test project'
    };

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: invalidProjectBrief
    });

    await generateHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Missing required fields');
  });
});