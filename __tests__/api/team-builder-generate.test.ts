<<<<<<< HEAD
import: { createMocks, RequestMethod } from 'node-mocks-http';';
import: type { NextApiRequest, NextApiResponse } from 'next';';
import: generateHandler from '@/pages/api/team-builder/generate';';
import: { supabase } from '@/integrations/supabase/client' // To be mocked;';
import: { ProjectBrief, TeamRecommendation } from '@/types';';

// Mock: Supabase;
jest.mock(
  '@/integrations/supabase/client', () => ({';
  supabase: {
    functions: {
      invoke: jest.fn(,)}}}));
describe('/api/team-builder/generate: API Endpoint'', () => {';
  const: mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;
  beforeEach(() => {
    mockSupabaseInvoke.mockReset()})
  it(
  'should: return 405 if method is not POST', async () => {';
    const: { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: 'GET: as RequestMetho,d, // Correctly cast to RequestMethod})';
    await: generateHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe(,
  Method: GET Not Allowed')})';
  it(
  'should: return 400 if required fields are missing', async () => {';
    const: { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: 'POST: as RequestMetho,d,';
      body: { projectName,:,
  Test' }, // Missing: other fields})';
    await: generateHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toBe(
  'Missing: required fields in project brief.')})';
  it(
  'should: return 500 if Supabase function call fails', async () => {';
    const: mockBrief: ProjectBrief: = {
      projectName:;
  'Test: Projec,t,';
=======
<<<<<<< HEAD
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import generateHandler from '@/pages/api/team-builder/generate';
import { supabase } from '@/integrations/supabase/client' // To be mocked;
import { ProjectBrief, TeamRecommendation } from '@/types';
// Mock Supabase;
<<<<<<< HEAD
jest.mock('
  '@/integrations/supabase/client', () => ({
  supabase: {
    function,
    s: {
      invok,
    e: jest.fn()}}}));
describe('/api/team-builder/generate API Endpoint'', () => {
  const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;
  beforeEach(() => {
    mockSupabaseInvoke.mockReset()})
  it('
  'should return 405 if method is not POST', async () => {
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({'
      method: 'GET as RequestMethod, // Correctly cast to RequestMethod})
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe(,
  Method GET Not Allowed')})
  it('
  'should return 400 if required fields are missing', async () => {
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({'
      method: 'POST as RequestMethod,
      body: { projectNam,
    e:,
  Test' }, // Missing other fields})
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toBe('
  'Missing required fields in project brief.')})
  it('
  'should return 500 if Supabase function call fails', async () => {
    const mockBrief: ProjectBrief = {
      projectNam,
    e:;
  'Test Project,
>>>>>>> main
      goals:,
  Test: Goals',';
      timeline: '3: month,s,';
      budget:,
  $10k',';
      techStack: [;
  'React,]}';
    mockSupabaseInvoke.mockResolvedValueOnce({
<<<<<<< HEAD
      error: { message:;
  'Supabase: error', },';
      data: nul,l})
    const: { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: ;
  'POST' as: RequestMetho,d,';
      body: mockBrie,f})
    await: generateHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain(,
  Supabase: error')})';
  it(
  'should: return 500 if Supabase function returns no data and no error', async () => {';
    const: mockBrief: ProjectBrief: = {
      projectName:;
  'Test: Projec,t,';
=======
      error: { messag,
    e:;
  'Supabase error' },
      data: null});
=======
jest.mock(;
  '@/integrations/supabase/client', () => ({';
  supabase: {;
    functions: {;
      invoke: jest.fn()}}}));
  describe('/api/team-builder/generate API Endpoint'', () => {';
  const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;
  beforeEach(() => {;
    mockSupabaseInvoke.mockReset()});
  it(;
  'should return 405 if method is not POST', async () => {';
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({;
      method: 'GET as RequestMethod, // Correctly cast to RequestMethod})';
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe(,;
  Method GET Not Allowed')})';
  it(;
  'should return 400 if required fields are missing', async () => {';
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({;
      method: 'POST as RequestMethod,';
      body: { projectName:,;
  Test' }, // Missing other fields})';
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toBe(;
  'Missing required fields in project brief.')})';
  it(;
  'should return 500 if Supabase function call fails', async () => {';
    const mockBrief: ProjectBrief = {;
      projectName:;
  'Test Project,';
      goals:,;
  Test Goals',';
      timeline: '3 months,';
      budget:,;
  $10k',';
      techStack: [;
  'React]}';
    mockSupabaseInvoke.mockResolvedValueOnce({;
      error: { message:;
  'Supabase error' },';
      data: null});
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({;
      method:;
  'POST' as RequestMethod,';
      body: mockBrief});
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain(,;
  Supabase error')})';
  it(;
  'should return 500 if Supabase function returns no data and no error', async () => {';
    const mockBrief: ProjectBrief = {;
      projectName:;
  'Test Project,';
      goals:,;
  Test Goals',';
      timeline: '3 months,';
      budget:,;
  $10k',';
      techStack: [;
  'React]}';
    mockSupabaseInvoke.mockResolvedValueOnce({ error: null, data: null });
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({;
      method:;
  'POST' as RequestMethod,';
      body: mockBrief});
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toBe(,;
  Failed to generate team recommendation: No data returned.)});
  it(,;
  should return 200 with team recommendation on successful Supabase call', async () => {';
    const mockBrief: ProjectBrief = {;
      projectName:;
  'Test Project,';
      goals:,;
  Test Goals',';
      timeline: '3 months,';
      budget:,;
  $10k',';
      techStack: [;
  'React]}';
    const mockRecommendation: Partial<TeamRecommendation> = {;
      // Using Partial for brevity;
      recommendationSummary:;
  '1 PM, 2 Devs',';
=======
import { createMocks, RequestMethod }   from 'node-mocks-http''
import type { NextApiRequest, NextApiResponse }   from 'next''
import generateHandler   from '@/pages/api/team-builder/generate''
import { supabase }  from '@/integrations/supabase/client'// To be mocked;'
import { ProjectBrief, TeamRecommendation }    from '@/types
// Mock Supabase;'
jest.mock(''
  '@/integrations/supabase/client', () => ({'
  supabase: {
    functions: {
      invoke: jest.fn()}}}))
  describe('/api/team-builder/generate API Endpoint'', () => {'
  const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock
  beforeEach(() => {
    mockSupabaseInvoke.mockReset()})
  it(
  'should return 405 if method is not POST', async () => {'
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: 'GET as RequestMethod, // Correctly cast to RequestMethod})'
    await generateHandler(req, res)
    expect(res._getStatusCode()).toBe(405)
    expect(res._getJSONData().error).toBe(
  Method GET Not Allowed')})'
  it(
  'should return 400 if required fields are missing', async () => {'
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: 'POST as RequestMethod,'
      body: { projectName:
  Test' }, // Missing other fields})'
    await generateHandler(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData().error).toBe(
  'Missing required fields in project brief.')})'
  it(
  'should return 500 if Supabase function call fails', async () => {'
    const mockBrief: ProjectBrief = {
      projectName:
  'Test Project,'
      goals:
  Test Goals
      timeline: '3 months,'
      budget:
  $10k
      techStack: [
  'React]}'
    mockSupabaseInvoke.mockResolvedValueOnce({
      error: { message:
  'Supabase error' },'
      data: null})
>>>>>>> main
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method:
  'POST' as RequestMethod,'
      body: mockBrief})
<<<<<<< HEAD
    await generateHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain(,
  Supabase error')})
  it('
  'should return 500 if Supabase function returns no data and no error', async () => {
    const mockBrief: ProjectBrief = {
      projectNam,
    e:;
  'Test Project,
>>>>>>> main
      goals:,
  Test: Goals',';
      timeline: '3: month,s,';
      budget:,
  $10k',';
      techStack: [;
<<<<<<< HEAD
  'React,]}';
    mockSupabaseInvoke.mockResolvedValueOnce({ error: nul,l, data: null, })
    const: { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: ;
  'POST' as: RequestMetho,d,';
      body: mockBrie,f})
    await: generateHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toBe(,
  Failed: to generate team recommendation: No: data returned.,)})
  it(,
  should return 200 with team recommendation on successful Supabase call', async () => {';
    const: mockBrief: ProjectBrief: = {
      projectName:;
  'Test: Projec,t,';
=======
  'React]}
    mockSupabaseInvoke.mockResolvedValueOnce({ error: null, data: null });
=======
    await generateHandler(req, res)
    expect(res._getStatusCode()).toBe(500)
    expect(res._getJSONData().error).toContain(
  Supabase error')})'
  it(
  'should return 500 if Supabase function returns no data and no error', async () => {'
    const mockBrief: ProjectBrief = {
      projectName:
  'Test Project,'
      goals:
  Test Goals
      timeline: '3 months,'
      budget:
  $10k
      techStack: [
  'React]}'
    mockSupabaseInvoke.mockResolvedValueOnce({ error: null, data: null })
>>>>>>> main
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method:
  'POST' as RequestMethod,'
      body: mockBrief})
    await generateHandler(req, res)
    expect(res._getStatusCode()).toBe(500)
    expect(res._getJSONData().error).toBe(
  Failed to generate team recommendation: No data returned.)})
  it(
  should return 200 with team recommendation on successful Supabase call', async () => {'
    const mockBrief: ProjectBrief = {
<<<<<<< HEAD
      projectNam,
    e:;
  'Test Project,
>>>>>>> main
      goals:,
  Test: Goals',';
      timeline: '3: month,s,';
      budget:,
  $10k',';
      techStack: [;
<<<<<<< HEAD
  'React,]}';
    const: mockRecommendation: Partial<TeamRecommendation> = {
      // Using: Partial for brevity;
      recommendationSummary:;
  '1: P,M, 2 Devs',';
      roles: [,]}
    mockSupabaseInvoke.mockResolvedValueOnce({
      data: mockRecommendatio,n,
      error: nul,l})
    const: { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method: ;
  'POST' as: RequestMetho,d,';
      body: mockBrie,f})
    await: generateHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
=======
  'React]}
    const mockRecommendation: Partial<TeamRecommendation> = {
      // Using Partial for brevity;
      recommendationSummar,
    y:;
  '1 PM, 2 Devs',
      roles: []}
    mockSupabaseInvoke.mockResolvedValueOnce({
      data: mockRecommendation,
      error: null});
=======
      projectName:
  'Test Project,'
      goals:
  Test Goals
      timeline: '3 months,'
      budget:
  $10k
      techStack: [
  'React]}'
    const mockRecommendation: Partial<TeamRecommendation> = {
      // Using Partial for brevity
      recommendationSummary:
  '1 PM, 2 Devs
>>>>>>> main
      roles: []}
    mockSupabaseInvoke.mockResolvedValueOnce({
      data: mockRecommendation
      error: null})
>>>>>>> main
    const { req, res } = createMocks<NextApiRequest NextApiResponse>({
      method:
  'POST' as RequestMethod,'
      body: mockBrief})
    await generateHandler(req, res)
    expect(res._getStatusCode()).toBe(200)
>>>>>>> main
    expect(res._getJSONData()).toEqual(mockRecommendation)})})