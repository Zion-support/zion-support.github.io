import React, {_useEffect, _useState} from 'react';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';

function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {_if (typeof window === 'undefined') return 'client';
  const _url = new window.URL(window.location.href);
  const _r = url.searchParams.get('role');
  if (r === 'talent' || r === 'admin') return r;
  return 'client';}

export default function ProjectMilestonesPage() {_const _router = useRouter();
  const { 'project-id': projectId} = router.query as any;

  const [role, setRole] = useState<'client' | 'talent' | 'admin'>__(() => getRoleFromEnvOrQuery());
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect__(() => {_setRole(getRoleFromEnvOrQuery());}, []);

  // Demo cookie-based auth to hit API successfully
  useEffect__(() => {_if (!role) return;
    try {
      const _userId = role === 'talent' ? 'talent-1' : role === 'client' ? 'client-1' : 'client-1';
      document.cookie = `x-user-id=${userId}; path=/`;
      document.cookie = `x-user-role=${_role}; path=/`;
    } catch {}
  }, [role]);

  useEffect__(() => {_if (!projectId) return;
    let _cancelled = false;
    (_async () => {
      setLoading(true);
      setError(null);
      try {
        const _data = await fetchMilestones(projectId as string);
        if (!cancelled) setMilestones(data.milestones || []);} catch (e: unknown) {_if (!cancelled) setError(e?.message || 'Failed to load milestones');} finally {_if (!cancelled) setLoading(false);}
    })();
    return () => {_cancelled = true;};
  }, [projectId]);

  const _handleCreate = async (_payload: {_title: string; description?: string; dueDate: string; amountUsd: number}) => {_if (!projectId) return;
    const _res = await createMilestone(projectId as string, _payload);
    setMilestones(_(prev) => [res.milestone, _...prev]);};

  const _handleAction = async (_action: 'in_progress' | 'submitted' | 'approved' | 'paid', _milestoneId: string) => {_if (!projectId) return;
    const map: Record<string, _string> = {
      in_progress: 'In Progress', _submitted: 'Submitted', _approved: 'Approved', _paid: 'Paid'};
    const _status = map[action];
    const _res = await updateMilestoneStatus(projectId as string, milestoneId, {_status});
    setMilestones(_(prev) => prev.map(_(m) => (m.id === milestoneId ? res.milestone : m)));
  };

  return (
    <div>
      <Head>
        <title>Project Milestones</title>
        <meta name="description" content="Track project deliverables and milestone payments" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {_projectId as string}</p>
        </div>

        {_role !== 'talent' && (
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
            </div>
            <MilestoneForm onSubmit={_handleCreate} />
          </div>
        )}

        {_loading && <div>Loading milestones...</div>}
        {_error && <div className="text-red-600">{error}</div>}

        {_!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )}
            {_milestones.map(_(m) => (
              <MilestoneCard key={m.id} milestone={_m} projectId={_String(projectId)} role={_role} onAction={_handleAction} />
            ))}
          </div>
        )}

        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr; trigger payout intent; on Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
  );
}