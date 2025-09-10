import type { NextApiRequest, NextApiResponse } from 'next';
import inviteHandler from @/pages/api/team-builder/invite';
import { supabase } from '@/integrations/supabase/client // To be mocked;
import { TeamInvite } from '@/types';
// Mock Supabase;

  supabase: {
    fro,
    m: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    single: jest.fn()}}));


  // Define mockInsert separately to allow chaining;
  const mockSingle = jest.fn();
  const mockSelect = jest.fn().mockReturnThis();
  const mockInsert = jest.fn().mockReturnThis();
  // This object will be returned by supabase.from();
  const mockSupabaseChain = {;
    insert: mockInsert,;
    select: mockSelect,;
    single: mockSingle}
  beforeEach(() => {;
    // Reset all mocks before each test;
    mockSingle.mockReset();
    mockSelect.mockClear();
    mockInsert.mockClear();
    // Ensure supabase.from itself is a mock that returns our chainable object;
    (supabase.from as jest.Mock).mockReturnValue(mockSupabaseChain)});

    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(405)});
  it(,

  'Insert failed },
      data: null});
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method:,

    mockSingle.mockResolvedValueOnce({ error: null, data: null });
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method:,
  POST' as RequestMethod,

  it(,
  should return 201 with invite data on successful insert, async () => {
    const mockInvite: Partial<TeamInvite> = {

  'invite-123,
      talent_id: 'placeholder',
  talent1',
      role_title: Developer,
      status: ;
  'pending'}
    mockSingle.mockResolvedValueOnce({ data: mockInvite, error: null });
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method:,
  POST as RequestMethod,
      body: {

  'talent1,
        roleTitle:,
  Developer',
        projectBriefId: brief1}});

    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData()).toEqual(mockInvite);
    expect(supabase.from).toHaveBeenCalledWith(,;
  team_invites');';
    expect(mockInsert).toHaveBeenCalledWith(;
      expect.objectContaining({;
        talent_id: 'talent1',;
        role_title:,;
  Developer'',;
        project_brief_id: 'brief1',;
        status:;
  'pending'});
    expect(mockSelect).toHaveBeenCalled();
    expect(mockSingle).toHaveBeenCalled()})});

    expect(mockInsert).toHaveBeenCalledWith(

        talent_id: 'talent1,
        role_title:,
  Developer,
        project_brief_id: 'brief1,
        status: ;
  'pending'}));

    expect(mockSelect).toHaveBeenCalled();
    expect(mockSingle).toHaveBeenCalled()})});





import { describe, it, expect } from 'vitest';


describe('Team Builder Invite API', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
const { describe,it,expect } from "vitest"; describe("Team Builder Invite API",() => { it("should work",() => { expect(true).toBe(true)})});''"
import { describe,it,expect } from 'vitest'; describe('Team Builder Invite API',() => { it('should work',() => { expect(true).toBe(true)})}





import { describe, it, expect } from 'vitest'
describe('Team Builder Invite API'
  it('should work'
import { describe, it, expect } from 'vitest'
describe('Team Builder Invite API'
  it('should work'
const { describe,it,expect } from "vitest"; describe('Team Builder Invite API', () => { it("should work"
import { describe, it, expect } from 'vitest';
describe('Team Builder Invite API', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
const { describe,it,expect } from "vitest"; describe("Team Builder Invite API",() => { it("should work",() => { expect(true).toBe(true)})});''"
import { describe,it,expect } from 'vitest'; describe('Team Builder Invite API',() => { it('should work',() => { expect(true).toBe(true)})}
});''
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/team-builder-invite.test.ts
