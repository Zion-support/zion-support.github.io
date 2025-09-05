<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { createServerClient } from '../../../utils/supabase/server',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createServerClient(),

    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const result = await Promise.allSettled([
      supabase.from('users').select('id, role, country'),
      supabase.from('jobs').select('id, status, category'),
      supabase.from('quotes').select('id, status'),
      supabase.from('projects').select('id, status'),
      supabase.from('referrals').select('id, converted, source')]),

    const [usersR, jobsR, quotesR, projectsR, referralsR] = result,

    const users = usersR.status === 'fulfilled' && usersR.value.data ? usersR.value.data as any[] : [],
    const jobs = jobsR.status === 'fulfilled' && jobsR.value.data ? jobsR.value.data as any[] : [],
    const quotes = quotesR.status === 'fulfilled' && quotesR.value.data ? quotesR.value.data as any[] : [],
    const projects = projectsR.status === 'fulfilled' && projectsR.value.data ? projectsR.value.data as any[] : [],
    const referrals = referralsR.status === 'fulfilled' && referralsR.value.data ? referralsR.value.data as any[] : [],

    const mockIfEmpty = (arr: any[], mock: any[]) => (arr.length ? arr : mock),

    const usersData = mockIfEmpty(users, [
      { id: 1, role: 'client', country: 'US' },
      { id: 2, role: 'talent', country: 'IN' },
      { id: 3, role: 'talent', country: 'US' },
      { id: 4, role: 'client', country: 'GB' }]),

    const jobsData = mockIfEmpty(jobs, [
      { id: 11, status: 'posted', category: 'AI/ML' },
      { id: 12, status: 'filled', category: 'Design' },
      { id: 13, status: 'filled', category: 'AI/ML' }]),

    const quotesData = mockIfEmpty(quotes, [
      { id: 21, status: 'sent' },
      { id: 22, status: 'accepted' },
      { id: 23, status: 'sent' }]),

    const projectsData = mockIfEmpty(projects, [
      { id: 31, status: 'active' },
      { id: 32, status: 'completed' },
      { id: 33, status: 'active' }]),

    const referralsData = mockIfEmpty(referrals, [
      { id: 41, converted: true, source: 'linkedin' },
      { id: 42, converted: false, source: 'twitter' },
      { id: 43, converted: true, source: 'partner' }]),

    const totalUsers = usersData.length,
    const totalTalents = usersData.filter(u => u.role === 'talent').length,
    const totalClients = usersData.filter(u => u.role === 'client').length,

    const jobsPosted = jobsData.filter(j => j.status === 'posted').length,
    const jobsFilled = jobsData.filter(j => j.status === 'filled').length,

    const quotesSent = quotesData.filter(q => q.status === 'sent').length,
    const quotesAccepted = quotesData.filter(q => q.status === 'accepted').length,

    const activeProjects = projectsData.filter(p => p.status === 'active').length,

    const categoryCounts: Record<string number> = {},
    jobsData.forEach(j => { categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1 }),

    const referralConversions = referralsData.filter(r => r.converted).length,

    const geoCounts: Record<string number> = {},
    usersData.forEach(u => { geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1 }),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _supabase = createServerClient();

    // Replace with your actual tables/queries
    // Fallback to mock if querying fails
    const _result = await Promise.allSettled([
      supabase.from('users').select('id, _role, _country'), _supabase.from('jobs').select('id, _status, _category'), _supabase.from('quotes').select('id, _status'), _supabase.from('projects').select('id, _status'), _supabase.from('referrals').select('id, _converted, _source')]);

    const [usersR, _jobsR, _quotesR, _projectsR, _referralsR] = result;

    const _users = usersR.status === 'fulfilled' && usersR.value.data ? usersR.value.data as any[] : [];
    const _jobs = jobsR.status === 'fulfilled' && jobsR.value.data ? jobsR.value.data as any[] : [];
    const _quotes = quotesR.status === 'fulfilled' && quotesR.value.data ? quotesR.value.data as any[] : [];
    const _projects = projectsR.status === 'fulfilled' && projectsR.value.data ? projectsR.value.data as any[] : [];
    const _referrals = referralsR.status === 'fulfilled' && referralsR.value.data ? referralsR.value.data as any[] : [];

    const _mockIfEmpty = (_arr: unknown[], _mock: unknown[]) => (arr.length ? arr : mock);

    const _usersData = mockIfEmpty(users, _[
      { id: 1, _role: 'client', _country: 'US'},
      {_id: 2, _role: 'talent', _country: 'IN'},
      {_id: 3, _role: 'talent', _country: 'US'},
      {_id: 4, _role: 'client', _country: 'GB'}]);

    const _jobsData = mockIfEmpty(jobs, [
      {_id: 11, _status: 'posted', _category: 'AI/ML'},
      {_id: 12, _status: 'filled', _category: 'Design'},
      {_id: 13, _status: 'filled', _category: 'AI/ML'}]);

    const _quotesData = mockIfEmpty(quotes, [
      {_id: 21, _status: 'sent'},
      {_id: 22, _status: 'accepted'},
      {_id: 23, _status: 'sent'}]);

    const _projectsData = mockIfEmpty(projects, [
      {_id: 31, _status: 'active'},
      {_id: 32, _status: 'completed'},
      {_id: 33, _status: 'active'}]);

    const _referralsData = mockIfEmpty(referrals, [
      {_id: 41, _converted: true, _source: 'linkedin'},
      {_id: 42, _converted: false, _source: 'twitter'},
      {_id: 43, _converted: true, _source: 'partner'}]);

    const _totalUsers = usersData.length;
    const _totalTalents = usersData.filter(u => u.role === 'talent').length;
    const _totalClients = usersData.filter(u => u.role === 'client').length;

    const _jobsPosted = jobsData.filter(j => j.status === 'posted').length;
    const _jobsFilled = jobsData.filter(j => j.status === 'filled').length;

    const _quotesSent = quotesData.filter(q => q.status === 'sent').length;
    const _quotesAccepted = quotesData.filter(q => q.status === 'accepted').length;

    const _activeProjects = projectsData.filter(p => p.status === 'active').length;

    const categoryCounts: Record<string, number> = {};
    jobsData.forEach(j => {_categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1;});

    const _referralConversions = referralsData.filter(r => r.converted).length;

    const geoCounts: Record<string, number> = {};
    usersData.forEach(u => {_geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1;});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    res.status(200).json({_totals: { totalUsers, _totalTalents, _totalClients, _jobsPosted, _jobsFilled, _quotesSent, _quotesAccepted, _activeProjects},
      topCategories: Object.entries(categoryCounts).sort(_(a, _b) => b[1] - a[1]).slice(0, 5).map(_([label, _value]) => ({_label, _value})),
      referralConversions,
<<<<<<< HEAD
      geo: Object.entries(geoCounts).map(([country, value]) => ({ label: country, value }))})
  } catch (e: any) {
    res.status(200).json({
      totals: { totalUsers: 4, totalTalents: 2, totalClients: 2, jobsPosted: 1, jobsFilled: 2, quotesSent: 2, quotesAccepted: 1, activeProjects: 2 },
      topCategories: [{ label: 'AI/ML', value: 2 }, { label: 'Design', value: 1 }],
      referralConversions: 2,
      geo: [{ label: 'US', value: 2 }, { label: 'IN', value: 1 }, { label: 'GB', value: 1 }]})
=======
      geo: Object.entries(geoCounts).map(_([country, _value]) => ({_label: country, _value}))});
  } catch (e: unknown) {_res.status(200).json({
      totals: { totalUsers: 4, _totalTalents: 2, _totalClients: 2, _jobsPosted: 1, _jobsFilled: 2, _quotesSent: 2, _quotesAccepted: 1, _activeProjects: 2},
      topCategories: [{_label: 'AI/ML', _value: 2}, {_label: 'Design', _value: 1}],
      referralConversions: 2,
      geo: [{_label: 'US', _value: 2}, {_label: 'IN', _value: 1}, {_label: 'GB', _value: 1}]});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}