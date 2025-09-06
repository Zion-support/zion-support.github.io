

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
  fetchMilestones,;
  updateMilestoneStatus,;

} from '../../../utils/api/milestones-client';

function getRoleFromEnvOrQuery(): any (): 'client' | 'talent' | 'admin' {;


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



  // Demo cookie-based auth to hit API successfully;
  useEffect(() => {;
    if (!role) return;


  }, [role]);


  useEffect(() => {;


    if (!projectId) return;

import MilestoneCard from '../../../components/monetization/MilestoneCard';

import { Milestone } from '../../../utils/types/milestones';





    let cancelled = false;
    (async () => {;
      setLoading(true);
      setError(null);


      }
    })();
    return () => {;
      cancelled = true;


    };


  }, [projectId]);


  const handleCreate = async (payload: {;

    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => {;
    if (!projectId) return;
    const res = await createMilestone(projectId as string, payload);

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



    setMilestones(prev => [res.milestone, ...prev]);  };



        {!loading && !error && (
          <div className='space - y-4'>;
            {milestones.length === 0 && (



        {!loading && !error && (;
          <div className='space-y-4'>;
            {milestones && milestones.length === 0 && (;
              <div className='text-gray-600'>;





                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>;
            )}
            {milestones && milestones.map(m => (;
              <MilestoneCard
                key={m && m.id}




        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (

        <div className='mt-12 text-xs text-gray-500'>
          Integration hooks ready: on Approved &rarr; trigger payout intent; on
          Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
);


        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr, trigger payout intent, on Paid &rarr, capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>

  )

