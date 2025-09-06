
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import Head from 'next/head',
import MilestoneForm from '../../../components/monetization/MilestoneForm',
=======
=======
import { useRouter  } from 'next/router';
import Head from 'next/head',
import MilestoneForm from '../../../components/monetization/MilestoneForm',
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import {useRouter} from 'next/router';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';
=======
import MilestoneCard from '../../../components/monetization/MilestoneCard';

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
import { Milestone } from '../../../utils/types/milestones';
import {
  createMilestone
  fetchMilestones
  updateMilestoneStatus;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import {
  createMilestone,
  fetchMilestones,;
  updateMilestoneStatus,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';
import { Milestone } from '../../../utils/types/milestones';
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
    if (!projectId) return,;
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    let cancelled = false;
    (async () => {;
      setLoading(true);
      setError(null);
      try {;
        const data = await fetchMilestones(projectId as string);
        if (!cancelled) setMilestones(data.milestones |[]);
      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Failed to load milestones');
      } finally {
        if (!cancelled) setMilestones(data.milestones || []);
      } catch (error) {
        if (!cancelled) setError(e?.message || 'Failed to load milestones');
      } finally {;
        if (!cancelled) setLoading(false);
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    })();
    return () => {;
      cancelled = true;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    }
    };
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======


    };
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

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
  }, [projectId]);

=======

    setMilestones(prev => [res.milestone, ...prev]);  };


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [projectId]),

  const handleCreate = async (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => {
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);
    setMilestones((prev) => [res.milestone, ...prev])

  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  const handleAction = async (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid'
    milestoneId: string
  ) => {
    if (!projectId) return
    const map: Record<string, string> = {
      in_progress: 'In Progress'
      submitted: 'Submitted'
      approved: 'Approved'
      paid: 'Paid'
    }
    const status = map[action];
    const res = await updateMilestoneStatus(projectId as string, milestoneId, {
      status
    });
    setMilestones(prev =>
      prev.map(m => (m.id === milestoneId ? res.milestone : m))
    );  }

      in_progress: 'In Progress',
      submitted: 'Submitted',
      approved: 'Approved',
      paid: 'Paid'},
    const status = map[action];
    const res = await updateMilestoneStatus(projectId as string, milestoneId, { status });
    setMilestones((prev) => prev.map((m) => (m.id === milestoneId ? res.milestone : m)))

  },
  return (
    <div>
      <Head>
        <title>Project Milestones</title>
        <meta name="description" content="Track project deliverables and milestone payments" />
      </Head>
      <div className='max-w-5xl mx-auto px-4 py-8'>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold'>Milestones</h1>
          <p className='text-sm text-gray-600'>
            Project: {projectId as string}
          </p>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {projectId as string}</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        </div>

        {role !== 'talent' && (
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            <MilestoneForm onSubmit={handleCreate} />
          </div>
        )}
        {loading && <div>Loading milestones...</div>}
<<<<<<< HEAD
        {error && <div className='text-red-600'>{error}</div>}
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
        {error && <div className='text-red-600'>{error}</div>}

=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  }, [project_id]);
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======



=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {!loading && !error && (
          <div className='space - y-4'>;
            {milestones.length === 0 && (



        {!loading && !error && (;
          <div className='space-y-4'>;
            {milestones && milestones.length === 0 && (;
              <div className='text-gray-600'>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>;
            )}
            {milestones && milestones.map(m => (;
              <MilestoneCard
                key={m && m.id}

=======
              <div className='text - gray - 600'>;
                No milestones yet.{' '}
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



        <div className='mt-12 text-xs text-gray-500'>;
          Integration hooks ready: on Approved &rarr; trigger payout intent; on;
          Paid &rarr; capture via Stripe/PayPal/Escrow.;
        </div>;
      </div>;
    </div>;
  );


=======


}
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        {error && <div className="text-red-600">{error}</div>}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
              <div className='text-gray-600'>
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>
            )}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

}
}
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr, trigger payout intent, on Paid &rarr, capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          </div>)}
        <div className='mt - 12 text - xs text - gray - 500'>;
          Integration hooks ready: on Approved &rarr; trigger payout intent; on;
          Paid &rarr; capture via Stripe / PayPal / Escrow.;
        </div>;
      </div>;

    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
