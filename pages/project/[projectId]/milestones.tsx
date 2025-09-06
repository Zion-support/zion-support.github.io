<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import {;
  createMilestone,;
  fetchMilestones,;
  updateMilestoneStatus,;
} from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): any (): 'client' | 'talent' | 'admin' {;
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
  if (typeof window === 'undefined') return 'client';
  const url = new URL(window && window.location.href);
  const r = url && url.searchParams.get('role');
  if (r === 'talent' || r === 'admin') return r;
  return 'client';
export default function ProjectMilestonesPage() {;
  const router = useRouter();
  const { 'project-id': projectId } = router && router.query as any;
  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() =>;
    getRoleFromEnvOrQuery();
  );  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {;
    setRole(getRoleFromEnvOrQuery());  }, []);
  if (r === 'talent' || r === 'admin') return r;
  return 'client'
}
export default function ProjectMilestonesPage() {
=======
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';

import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

} from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): any (): 'client' | 'talent' | 'admin' {;

=======
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';

function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  if (typeof window === 'undefined') return 'client';

  const url = new URL(window && window.location.href);
  const r = url && url.searchParams.get('role');
  if (r === 'talent' || r === 'admin') return r;

  return 'client';
export default function ProjectMilestonesPage() {;
  const router = useRouter();

  const { 'project-id': projectId } = router && router.query as any;

  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() =>;
    getRoleFromEnvOrQuery();
  );  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
=======
import { useRouter  } from 'next/router';
import Head from 'next/head',
import MilestoneForm from '../../../components/monetization/MilestoneForm',
=======
import {useRouter} from 'next/router';
=======
import { useRouter } from 'next/router';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';
<<<<<<< HEAD
import {
  createMilestone
  fetchMilestones
  updateMilestoneStatus;
=======
<<<<<<< HEAD
import {
  createMilestone,
  fetchMilestones,;
  updateMilestoneStatus,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';
import { Milestone } from '../../../utils/types/milestones';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {;
  if (typeof window === 'undefined') return 'client',;
  const url = new URL(window.location.href);
  const r = url.searchParams.get('role');
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
export default function ProjectMilestonesPage(req, res) {
  try {
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const router = useRouter();
  const { 'project-id': projectId } = router.query as any;
  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() => getRoleFromEnvOrQuery());
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  useEffect(() => {;
    setRole(getRoleFromEnvOrQuery());  }, []);


=======
<<<<<<< HEAD
  useEffect(() => {
    setRole(getRoleFromEnvOrQuery())
  }, []);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Demo cookie-based auth to hit API successfully;
  useEffect(() => {;
    if (!role) return;
<<<<<<< HEAD


  }, [role]);


  useEffect(() => {;
<<<<<<< HEAD
    if (!projectId) return,;

=======

    if (!projectId) return;
=======

import {useRouter} from 'next/router';
=======
import { useRouter } from 'next/router';

import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    try {
      const userId = role === 'talent' ? 'talent-1' : role === 'client' ? 'client-1' : 'client-1';
      document.cookie = `x-user-id=${userId}, path=/`;
      document.cookie = `x-user-role=${role}, path=/`
    } catch {}
  }, [role]);
  useEffect(() => {;
    if (!projectId) return;
=======
  useEffect(() => {;
    setRole(getRoleFromEnvOrQuery());
  }, []),;
  // Demo cookie-based auth to hit API successfully;
  useEffect(() => {;
    if (!role) return,;
    try {
      const userId = role === 'talent' ? 'talent-1' : role === 'client' ? 'client-1' : 'client-1';
      document.cookie = `x-user-id=${userId}, path=/`,;
      document.cookie = `x-user-role=${role}, path=/`;
    } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [role]),;
  useEffect(() => {;
    if (!projectId) return,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    let cancelled = false;
    (async () => {;
      setLoading(true);
      setError(null);
<<<<<<< HEAD
      try {;
        const data = await fetchMilestones(projectId as string);
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======

        if (!cancelled) setMilestones(data.milestones || []);
      } catch (error) {
        if (!cancelled) setError(e?.message || 'Failed to load milestones');
      } finally {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        if (!cancelled) setMilestones(data && data.milestones || []);
      } catch (e: any) {;
        if (!cancelled) setError(e?.message || 'Failed to load milestones');
      } finally {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (!cancelled) setLoading(false);
import {use_router} from 'next / router';
import Head from 'next / head';
import MilestoneForm from '../../../components / monetization / MilestoneForm';
import MilestoneCard from '../../../components / monetization / MilestoneCard';
import { Milestone } from '../../../utils / types / milestones';
import {
  create_milestone,
  fetch_milestones,
  updateMilestoneStatus,
} from '../../../utils / api / milestones - client';
function getRoleFromEnvOrQuery (): 'client' | 'talent' | 'admin' {
  // Check condition
if (return 'client') {
  $2
}
  const url = new URL (window.location.href);
  const r = url.search_params.get ('role');
  // Check condition
if (return r) {
  $2
}
  return 'client';
export default /**
 * ProjectMilestonesPage - Function description
 */
function ProjectMilestonesPage() {
  const router = use_router ();
  const { 'project - id': project_id } = router.query as any;
;
  const [role, set_role] = useState<'client' | 'talent' | 'admin'>(() =>;
    getRoleFromEnvOrQuery ());  const [milestones, set_milestones] = useState < Milestone[]>([]);
  const [loading, set_loading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {
    set_role (getRoleFromEnvOrQuery ());  }, []);
;
  // Demo cookie - based auth to hit API successfully;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    try {
      const user_id =;
        role === 'talent';
          ? 'talent - 1';
          : role === 'client';
            ? 'client - 1';
            : 'client - 1';
      document.cookie = `x - user - id=${user_id} path=/`;
      document.cookie = `x - user - role=${role} path=/`;    } catch {}
  }, [role]);
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    let cancelled = false;
    (async () => {
      set_loading (true);
      set_error (null);
      try {
        const data = await fetch_milestones (project_id as string);
        if (set_milestones (data.milestones || [])) {
  $2
}
      } catch (e: any) {
        if (set_error (e?.message || 'Failed to load milestones')) {
  $2
}
      } finally {
        if (set_loading (false)) {
  $2
}
      }
    })();
    return () => {;
      cancelled = true;
<<<<<<< HEAD

<<<<<<< HEAD
=======

    };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }, [projectId]);


  const handleCreate = async (payload: {;

=======
    }
  const handleCreate = async (payload: {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => {;
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
    } catch {}
  }, [role]),

  useEffect(() => {
    if (!projectId) return,
    let cancelled = false
    (async () => {
      setLoading(true),
      setError(null),
      try {
        const data = await fetchMilestones(projectId as string)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (!cancelled) setMilestones(data.milestones || [])
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load milestones')
      } finally {
        if (!cancelled) setLoading(false)
      }
})();
    return () => {
      cancelled = true
    }
=======
      try {
        const data = await fetchMilestones(projectId as string);
<<<<<<< HEAD
        if (!cancelled) setMilestones(data.milestones |[]);
      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Failed to load milestones');
      } finally {
=======
        if (!cancelled) setMilestones(data.milestones || []);
      } catch (error) {
        if (!cancelled) setError(e?.message || 'Failed to load milestones');
      } finally {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (!cancelled) setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    })();
    return () => {;
      cancelled = true;
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }, [projectId]);
<<<<<<< HEAD

=======

    setMilestones(prev => [res.milestone, ...prev]);  };


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [projectId]),

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleCreate = async (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => {
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);
<<<<<<< HEAD
    setMilestones((prev) => [res.milestone, ...prev])
<<<<<<< HEAD

  },

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  };
=======
<<<<<<< HEAD
    setMilestones(prev => [res.milestone, ...prev]);  }
=======
    setMilestones(prev => [res.milestone, ...prev]);  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [projectId]),
  const handleCreate = async (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => {
    if (!projectId) return,
    const res = await createMilestone(projectId as string, payload),
    setMilestones((prev) => [res.milestone, ...prev])
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleAction = async (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid'
    milestoneId: string
  ) => {
    if (!projectId) return
    const map: Record<string, string> = {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setMilestones(prev => [res && res.milestone, ...prev]);  };
  const handleAction = async (;
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',;
    milestoneId: string;
  ) => {;
    if (!projectId) return,;
    const map: Record<string, string> = {;
      in_progress: 'In Progress',;
      submitted: 'Submitted',;
      approved: 'Approved',;
      paid: 'Paid',;
    };
=======
<<<<<<< HEAD
      in_progress: 'In Progress'
      submitted: 'Submitted'
      approved: 'Approved'
      paid: 'Paid'
    }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const status = map[action];
    const res = await updateMilestoneStatus(projectId as string, milestoneId, {;
      status,;
    });
<<<<<<< HEAD
    setMilestones(prev =>;
      prev && prev.map(m => (m && m.id === milestoneId ? res && res.milestone : m));
    );  };
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div>;
      <Head>;
        <title>Project Milestones</title>;
        <meta
          name='description'
          content='Track project deliverables and milestone payments'
<<<<<<< HEAD

=======
=======
    setMilestones(prev =>
      prev.map(m => (m.id === milestoneId ? res.milestone : m))
    );  }

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      in_progress: 'In Progress',
      submitted: 'Submitted',
      approved: 'Approved',
      paid: 'Paid'},
<<<<<<< HEAD
    const status = map[action];
    const res = await updateMilestoneStatus(projectId as string, milestoneId, { status });
    setMilestones((prev) => prev.map((m) => (m.id === milestoneId ? res.milestone : m)))
  };
=======
    const status = map[action],
    const res = await updateMilestoneStatus(projectId as string, milestoneId, { status }),
    setMilestones((prev) => prev.map((m) => (m.id === milestoneId ? res.milestone : m)))
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div>
      <Head>
        <title>Project Milestones</title>
<<<<<<< HEAD
<meta name="description" content="Track project deliverables and milestone payments" />
      </Head>
=======
        <meta name="description" content="Track project deliverables and milestone payments" />
      </Head>
<<<<<<< HEAD
      <div className='max-w-5xl mx-auto px-4 py-8'>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold'>Milestones</h1>
          <p className='text-sm text-gray-600'>
            Project: {projectId as string}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </p>
=======
<<<<<<< HEAD
=======


      in_progress: 'In Progress',
      submitted: 'Submitted',
      approved: 'Approved',
      paid: 'Paid'},
    const status = map[action];
    const res = await updateMilestoneStatus(projectId as string, milestoneId, { status });
    setMilestones((prev) => prev.map((m) => (m.id === milestoneId ? res.milestone : m)))

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div>
      <Head>
        <title>Project Milestones</title>
        <meta name="description" content="Track project deliverables and milestone payments" />
      </Head>

<<<<<<< HEAD
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {projectId as string}</p>
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        {role !== 'talent' && (
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
            </div>
            <MilestoneForm onSubmit={handleCreate} />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
      </Head>;
      <div className='max-w-5xl mx-auto px-4 py-8'>;
        <div className='mb-6'>;
          <h1 className='text-2xl font-bold'>Milestones</h1>;
          <p className='text-sm text-gray-600'>;
            Project: {projectId as string}

          </p>;
        </div>;
        {role !== 'talent' && (;
          <div className='mb-8 p-4 rounded bg-gray-50 border'>;
            <div className='flex items-center justify-between mb-3'>;
              <h2 className='text-lg font-semibold'>Add Milestone</h2>;
              <span className='text-xs text-gray-500'>Role: {role}</span>            </div>;
            <MilestoneForm onSubmit={handleCreate} />;
          </div>;
<<<<<<< HEAD


        )}
        {loading && <div>Loading milestones...</div>}

=======
        )}
        {loading && <div>Loading milestones...</div>}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }, [project_id]);
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

;
  const handle_create = async (payload: {
    title: string;
    description?: string;
    due_date: string;
    amount_usd: number;
  }) => {
    // Check condition
if (return) {
  $2
}
    const res = await create_milestone (project_id as string, payload);
    set_milestones (prev => [res.milestone, ...prev]);  }
;
  const handle_action = async (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',
    milestone_id: string) => {
    // Check condition
if (return, ) {
  $2
}
<<<<<<< HEAD

<<<<<<< HEAD
        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (

              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {milestones.map((m) => (;
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {!loading && !error && (
          <div className='space - y-4'>;
            {milestones.length === 0 && (



=======
    const map: Record < string, string> = {
      in_progress: 'In Progress',
      submitted: 'Submitted',
      approved: 'Approved',
      paid: 'Paid',
    }
    const status = map[action];
    const res = await updateMilestoneStatus (project_id as string, milestone_id, {
      status,
    });
    set_milestones (prev =>;
      prev.map (m => (m.id === milestone_id ? res.milestone : m)));  }
;
  return (
    <div>;
      <Head>;
        <title > Project Milestones</title>;
        <meta;
          name='description';
          content='Track project deliverables and milestone payments';
        />;
      </Head>;
      <div className='max - w-5xl mx - auto px - 4 py - 8'>;
        <div className='mb - 6'>;
          <h1 className='text - 2xl font - bold'>Milestones</h1>;
          <p className='text - sm text - gray - 600'>;
            Project: {project_id as string}
          </p>;
        </div>;
        {role !== 'talent' && (
          <div className='mb - 8 p - 4 rounded bg - gray - 50 border'>;
            <div className='flex items - center justify - between mb - 3'>;
              <h2 className='text - lg font - semibold'>Add Milestone</h2>;
              <span className='text - xs text - gray - 500'>Role: {role}</span>            </div>;
            <MilestoneForm on_submit={handle_create} />;
          </div>)}
        {loading && <div > Loading milestones...</div>}
        {error && <div className='text - red - 600'>{error}</div>}
        {!loading && !error && (
          <div className='space - y-4'>;
            {milestones.length === 0 && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {!loading && !error && (;
          <div className='space-y-4'>;
            {milestones && milestones.length === 0 && (;
              <div className='text-gray-600'>;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>;
            )}
            {milestones && milestones.map(m => (;
              <MilestoneCard
                key={m && m.id}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='text - gray - 600'>;
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>)}
            {milestones.map (m => (
              <MilestoneCard;
                key={m.id}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                milestone={m}
                project_id={String (project_id)}
                role={role}
                on_action={handle_action}
              />            ))}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='mt-12 text-xs text-gray-500'>;
          Integration hooks ready: on Approved &rarr; trigger payout intent; on;
          Paid &rarr; capture via Stripe/PayPal/Escrow.;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD


=======


}
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )}
            {milestones.map((m) => (
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />
            ))}
          </div>
        )}
=======
<<<<<<< HEAD
        )}
        {loading && <div>Loading milestones...</div>}
        {error && <div className='text-red-600'>{error}</div>}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        {loading && <div>Loading milestones...</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {error && <div className="text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
<<<<<<< HEAD
              <div className='text-gray-600'>
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>
            )}
            {milestones.map(m => (
              <MilestoneCard
                key={m.id}
                milestone={m}
                projectId={String(projectId)}
                role={role}
                onAction={handleAction}
              />            ))}
          </div>
        )}
        <div className='mt-12 text-xs text-gray-500'>
          Integration hooks ready: on Approved &rarr; trigger payout intent; on
          Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
);
<<<<<<< HEAD
=======

}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {milestones.map((m) => (;
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr, trigger payout intent, on Paid &rarr, capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
          </div>)}
        <div className='mt - 12 text - xs text - gray - 500'>;
          Integration hooks ready: on Approved &rarr; trigger payout intent; on;
          Paid &rarr; capture via Stripe / PayPal / Escrow.;
        </div>;
      </div>;
<<<<<<< HEAD

=======
    </div>);
;
=======
;
        <div className="mt-12 text-xs text-gray-500">;
          Integration hooks ready: on Approved &rarr, trigger payout intent, on Paid &rarr, capture via Stripe/PayPal/Escrow.;
        </div>;
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
