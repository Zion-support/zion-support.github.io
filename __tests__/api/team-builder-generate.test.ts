import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import generateHandler from '@/pages/api/team-builder/generate';
import { supabase } from '@/integrations/supabase/client'; // To be mocked
import { ProjectBrief, TeamRecommendation } from '@/types';

// Mock Supabase
jest.mock(
  '@/integrations/supabase/client',
  () => ({
    supabase: {
      functions: {
        invoke: jest.fn()
      }
    }
  })
);

describe('/api/team-builder/generate API Endpoint', () => {
  const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;

  beforeEach(() => {
    mockSupabaseInvoke.mockReset();
  });

  it(
    'should return 405 if method is not POST',
    async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET' as RequestMethod, // Correctly cast to RequestMethod
      });
      await generateHandler(req, res);
      expect(res._getStatusCode()).toBe(405);
      expect(res._getJSONData().error).toBe(
        'Method GET Not Allowed'
      );
    }
  );

  it(
    'should return 400 if required fields are missing',
    async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          projectName:
            'Test'
        }, // Missing other fields
      });
      await generateHandler(req, res);
      expect(res._getStatusCode()).toBe(400);
      expect(res._getJSONData().error).toBe(
        'Missing required fields in project brief.'
      );
    }
  );

  it(
    'should return 500 if Supabase function call fails',
    async () => {
      const mockBrief: ProjectBrief = {
        projectName:
          'Test Project',
        goals:
          'Test Goals',
        timeline: '3 months',
        budget:
          '$10k',
        techStack: [
          'React'
        ]
      };

      mockSupabaseInvoke.mockResolvedValueOnce({
        error: {
          message:
            'Supabase error'
        },
        data: null
      });

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          projectBrief: mockBrief
        }
      });

      await generateHandler(req, res);
      expect(res._getStatusCode()).toBe(500);
      expect(res._getJSONData().error).toBe(
        'Supabase error'
      );
    }
  );

  it(
    'should return 200 with team recommendations on success',
    async () => {
      const mockBrief: ProjectBrief = {
        projectName: 'Test Project',
        goals: 'Test Goals',
        timeline: '3 months',
        budget: '$10k',
        techStack: ['React']
      };

      const mockRecommendations: TeamRecommendation[] = [
        {
          role: 'Frontend Developer',
          skills: ['React', 'TypeScript'],
          experience: '3-5 years',
          salary: '$80k-120k'
        }
      ];

      mockSupabaseInvoke.mockResolvedValueOnce({
        error: null,
        data: {
          recommendations: mockRecommendations
        }
      });

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          projectBrief: mockBrief
        }
      });

      await generateHandler(req, res);
      expect(res._getStatusCode()).toBe(200);
      const responseData = res._getJSONData();
      expect(responseData.recommendations).toEqual(mockRecommendations);
    }
  );
});