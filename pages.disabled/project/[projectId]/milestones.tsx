:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import {useRouter} from 'next/router';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';
<<<<<<< HEAD

<<<<<<< HEAD

} from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): any (): 'client' | 'talent' | 'admin' {;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useEffect, useState } from 'react';

import {
  createMilestone,
=======

import {}
  createMilestone,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx
  fetchMilestones,;
  updateMilestoneStatus,;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from '../../../utils/api/milestones-client';
<<<<<<< HEAD
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (typeof window === 'undefined') return 'client';
=======
} from '../../../utils/api/milestones-client';
:pages_backup/project/[projectId]/milestones.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {

function getRoleFromEnvOrQuery(): any (): 'client' | 'talent' | 'admin' {;

import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
import { Milestone  } from '../../../utils/types/milestones';
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
  if (typeof window;
:pages_backup/project/[projectId]/milestones.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {

  if (typeof window === 'undefined') return 'client';
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const url = new URL(window && window.location.href);'
  const r = url && url.searchParams.get('role');'
  if (r === 'talent' || r === 'admin') return r;
'
  return 'client';
<<<<<<< HEAD:pages_backup/project/[projectId]/milestones.tsx
export default function ProjectMilestonesPage() {;
<<<<<<< HEAD
  const router = useRouter();
<<<<<<< HEAD
  const { 'project-id': projectId } = router.query as any;
  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() =>
    getRoleFromEnvOrQuery()
  );  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  useEffect(() => {
    setRole(getRoleFromEnvOrQuery());  }, []);
  // Demo cookie-based auth to hit API successfully
  useEffect(() => {
    if (!role) return;
    try {
      const userId =
        role === 'talent'
          ? 'talent-1'
          : role === 'client'
            ? 'client-1'
            : 'client-1';
      document.cookie = `x-user-id=${userId}; path=/`;
      document.cookie = `x-user-role=${role}; path=/`;    } catch {}
  }, [role]);
  useEffect(() => {
    if (!projectId) return;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const url = new URL(window.location.href);
  const r = url.searchParams.get('role');
  if (r === 'talent' || r === 'admin') return r;
return 'client';

export default function ProjectMilestonesPage() {
origin/cursor/automate-test-improve-and-merge-code-2533
  const router = useRouter();
  const { 'project-id': projectId } = router.query as any;

const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() =>
    getRoleFromEnvOrQuery()
  );
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';
import { Milestone } from '../../../utils/types/milestones';
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {;
  if (typeof window === 'undefined') return 'client',;
  const url = new URL(window.location.href);
  const r = url.searchParams.get('role');
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
export default function ProjectMilestonesPage(req, res) {
  try {
  const router = useRouter();
  const { 'project-id': projectId } = router.query as any;
  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() => getRoleFromEnvOrQuery());
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {;
    setRole(getRoleFromEnvOrQuery());
  }, []),;
=======

  useEffect(() => {;
    setRole(getRoleFromEnvOrQuery());
  }, []),;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Demo cookie-based auth to hit API successfully;
  useEffect(() => {;
    if (!role) return;

  }, [role]);

  useEffect(() => {;
:pages_backup/project/[projectId]/milestones.tsx
if (!projectId) return,;
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';

} from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
  if (typeof window === 'undefined') return 'client';
  const url = new URL(window.location.href);
  const r = url.searchParams.get('role');
  if (r === 'talent' |r === 'admin') return r;
  return 'client';
export default function ProjectMilestonesPage() {;
  const router = useRouter();
  const { 'project-id': projectId } = router.query as any;
  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() =>
    getRoleFromEnvOrQuery()
  );  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setRole(getRoleFromEnvOrQuery());  }, []);
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {
setRole(getRoleFromEnvOrQuery());
  }, []);

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Demo cookie-based auth to hit API successfully
  useEffect(() => {
    if (!role) return;
    try {
const userId =
        role === 'talent'
          ? 'talent-1'
          : role === 'client'
            ? 'client-1'
            : 'client-1';
      document.cookie = `x-user-id=${userId}; path=/`;
document.cookie = `x-user-role=${role}; path=/`;    } catch {}
  }, [role]);
  useEffect(() => {
    if (!projectId) return;

const router = useRouter();
  const { 'project-id': projectId } = router.query as any;
  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() => getRoleFromEnvOrQuery());
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import MilestoneCard from '../../../components/monetization/MilestoneCard';
'
import { Milestone } from '../../../utils/types/milestones';

:pages_backup/project/[projectId]/milestones.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    let cancelled = false;
    (async () => {;
      setLoading(true);
      setError(null);
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (!cancelled) setLoading(false);
import {use_router} from 'next / router';
import Head from 'next / head';
import MilestoneForm from '../../../components / monetization / MilestoneForm';
import MilestoneCard from '../../../components / monetization / MilestoneCard';
import { Milestone } from '../../../utils / types / milestones';
import {}
  create_milestone,
  fetch_milestones,
  updateMilestoneStatus,';
} from '../../../utils / api / milestones - client';'
function getRoleFromEnvOrQuery (): 'client' | 'talent' | 'admin' {}
  // Check condition'
if (return 'client') {}
  $2;
}
  const url = new URL (window.location.href);'
  const r = url.search_params.get ('role');
  // Check condition;
if (return r) {}
  $2;
}'
  return 'client';
export default /**;
 * ProjectMilestonesPage - Function description;
 */
function ProjectMilestonesPage() {}
  const router = use_router ();'
  const { 'project - id': project_id } = router.query as any;
;'
  const [role, set_role] = useState<'client' | 'talent' | 'admin'>(() =>;
    getRoleFromEnvOrQuery ());  const [milestones, set_milestones] = useState < Milestone[]>([]);
  const [loading, set_loading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {}
    set_role (getRoleFromEnvOrQuery ());  }, []);
;
  // Demo cookie - based auth to hit API successfully;
  useEffect (() => {}
    // Check condition;
if (return) {}
  $2;
}
    try {}
      const user_id =;'
        role === 'talent';'
          ? 'talent - 1';'
          : role === 'client';'
            ? 'client - 1';'
            : 'client - 1';
      document.cookie = `x - user - id=${user_id} path=/`;`
      document.cookie = `x - user - role=${role} path=/`;    } catch {}
  }, [role]);
;
  useEffect (() => {}
    // Check condition;
if (return) {}
  $2;
}
    let cancelled = false;
    (async () => {}
      set_loading (true);
      set_error (null);
      try {}
        const data = await fetch_milestones (project_id as string);
        if (set_milestones (data.milestones || [])) {}
  $2;
}
      } catch (e: any) {'
        if (set_error (e?.message || 'Failed to load milestones')) {}
  $2;
}
      } finally {}
        if (set_loading (false)) {}
  $2;
}
:pages_backup/project/[projectId]/milestones.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      try {
        const data = await fetchMilestones(projectId as string);
if (!cancelled) setMilestones(data.milestones || []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Failed to load milestones');
      } finally {
        if (!cancelled) setLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
    })();
    return () => {;
      cancelled = true;
}
    };

    };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [projectId]);

  const handleCreate = async (payload: {;

    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => {;
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);
<<<<<<< HEAD
    setMilestones(prev => [res.milestone, ...prev]);  }
    setMilestones(prev => [res.milestone, ...prev]);  };

        if (!cancelled) setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    })();
    return () => {;
      cancelled = true;

  }, [projectId]);
  const handleCreate = async (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => {
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        if (!cancelled) setMilestones(data.milestones || [])
      } catch (e: any) {'
        if (!cancelled) setError(e?.message || 'Failed to load milestones')
      } finally {}
        if (!cancelled) setLoading(false)
      }
    })();
    return () => {}
      cancelled = true;
    }
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [projectId]);

        if (!cancelled) setLoading(false);
        } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    })();
    return () => {;
      cancelled = true;

  }, [projectId]);

:pages_backup/project/[projectId]/milestones.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx

    setMilestones(prev => [res.milestone, ...prev]);  };

:pages_backup/project/[projectId]/milestones.tsx
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [projectId]),

  const handleCreate = async (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => {}
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    setMilestones(prev => [res.milestone, ...prev]);
  };

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/project/[projectId]/milestones.tsx
=======
    setMilestones(prev => [res.milestone, ...prev]);
  };

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleAction = async (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid'
    milestoneId: string
  ) => {
    if (!projectId) return
    const map: Record<string, string> = {
milestoneId: string;
  ) => {}
    if (!projectId) return;
    const map: Record<string, string> = {}
'
      in_progress: 'In Progress''
      submitted: 'Submitted''
      approved: 'Approved''
      paid: 'Paid'
    }
:pages_backup/project/[projectId]/milestones.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const status = map[action];
    const res = await updateMilestoneStatus(projectId as string, milestoneId, {}
      status;
    });
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div>
      <Head>
        <title>Project Milestones</title>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {projectId as string}</p>
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>

        {role !== 'talent' && (
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setMilestones(prev =>
      prev.map(m => (m.id === milestoneId ? res.milestone : m))
    );
  };
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx

  return (
    <div>
      <Head>
        <title>Project Milestones</title>
        <meta name="description" content="Track project deliverables and milestone payments" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {projectId as string}</p>

<meta
          name='description'
          content='Track project deliverables and milestone payments'
        />
      </Head>
      <div className='max-w-5xl mx-auto px-4 py-8'>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold'>Milestones</h1>
          <p className='text-sm text-gray-600'>
            Project: {projectId as string}
          </p>
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>

        {role !== 'talent' && (
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
</div>
            <MilestoneForm onSubmit={handleCreate} />
          </div>
<<<<<<< HEAD:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD

  }, [project_id]);

:pages_backup/project/[projectId]/milestones.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
          <div className='mb-8 p-4 rounded bg-gray-50 border'>
            <div className='flex items-center justify-between mb-3'>
              <h2 className='text-lg font-semibold'>Add Milestone</h2>
              <span className='text-xs text-gray-500'>Role: {role}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
            <MilestoneForm onSubmit={handleCreate} />
          </div>
        )}
        {loading && <div>Loading milestones...</div>}
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
  }, [project_id]);

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

;
  const handle_create = async (payload: {}
    title: string;
    description?: string;
    due_date: string;
    amount_usd: number;
  }) => {}
    // Check condition;
if (return) {}
  $2;
}
    const res = await create_milestone (project_id as string, payload);
    set_milestones (prev => [res.milestone, ...prev]);  }
;
  const handle_action = async ('
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',
    milestone_id: string) => {}
    // Check condition;
if (return, ) {}
  $2;
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
{error && <div className='text-red-600'>{error}</div>}
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {!loading && !error && (
=======

        {!loading && !error && ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx
          <div className='space - y-4'>;
            {milestones.length === 0 && (

        {!loading && !error && (;'
          <div className='space-y-4'>;
            {milestones && milestones.length === 0 && (;'
              <div className='text-gray-600'>;

:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                No milestones yet.{' '}
=======

'
                No milestones yet.{' '}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>;
            )}
            {milestones && milestones.map(m => (;
              <MilestoneCard;
                key={m && m.id}

:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
              <div className='text - gray - 600'>;
                No milestones yet.{' '}
=======
'
              <div className='text - gray - 600'>;'
                No milestones yet.{' '}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>)}
            {milestones.map (m => (
              <MilestoneCard;
                key={m.id}

                milestone={m}
                project_id={String (project_id)}
                role={role}
                on_action={handle_action}
              />            ))}

'
        <div className='mt-12 text-xs text-gray-500'>;
          Integration hooks ready: on Approved &rarr; trigger payout intent; on;
          Paid &rarr; capture via Stripe/PayPal/Escrow.;
        </div>;
      </div>;
    </div>;
  );

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
}

:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        {error && <div className="text-red-600">{error}</div>}

"
        {error && <div className="text-red-600">{error}</div>}
:pages_backup/project/[projectId]/milestones.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && ('"
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )}
            {milestones.map((m) => (
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />
            ))}
          </div>
        )}

        )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        {loading && <div>Loading milestones...</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
        {error && <div className="text-red-600">{error}</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

        {!loading && !error && ("
          <div className="space-y-4">
            {milestones.length === 0 && (
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
              <div className='text-gray-600'>
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>
            )}
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
            {milestones.map((m) => (
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />
            ))}
          </div>
        )}
<<<<<<< HEAD
        <div className='mt-12 text-xs text-gray-500'>
          Integration hooks ready: on Approved &rarr; trigger payout intent; on
          Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
);

}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            {milestones.map((m) => (
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />
            ))}
          </div>
        )}
        <div className='mt-12 text-xs text-gray-500'>
          Integration hooks ready: on Approved &rarr; trigger payout intent; on
          Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
            {milestones.map(m => (
              <MilestoneCard
                key={m.id}
                milestone={m}
                projectId={String(projectId)}
                role={role}
                onAction={handleAction}
              />
origin/cursor/automate-test-improve-and-merge-code-2533
            ))}
          </div>
        )}

:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
<<<<<<< HEAD
}
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {milestones.map((m) => (;
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />;
            ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx
        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr, trigger payout intent, on Paid &rarr, capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  )
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
          </div>)}
=======

          </div>)}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId]/milestones.tsx
        <div className='mt - 12 text - xs text - gray - 500'>;
          Integration hooks ready: on Approved &rarr; trigger payout intent; on;
          Paid &rarr; capture via Stripe / PayPal / Escrow.;
        </div>;
      </div>;

    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
<div className='mt-12 text-xs text-gray-500'>
          Integration hooks ready: on Approved &rarr; trigger payout intent; on
          Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
  );
:pages_backup/project/[projectId]/milestones.tsx
<<<<<<< HEAD:pages/project/[projectId]/milestones.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/project/[projectId]/milestones.tsx
