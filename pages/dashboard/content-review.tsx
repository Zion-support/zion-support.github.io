<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';

const fetcher = (url: string) => fetch(url).then(r => r.json())
=======
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';
<<<<<<< HEAD

const fetcher = (url: string) => fetch(url).then(r => r.json())
=======
const fetcher = null;
    mutate()
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie |'').split(';').reduce(
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split(';').reduce(
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v |'');
      return acc;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
<<<<<<< HEAD
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  render() {
    if (this.state.hasError) {
=======

  render() {}
    if (this.state.hasError) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return <div>Something went wrong.</div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{;
    status?: string;
    reason?: string;
    userEmail?: string;
    contentType?: string;
  }>({ status: 'pending' });  const query = useMemo(() => {

=======
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
=======
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';
const fetcher = (url: string) => fetch(url).then(r => r.json());
export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {;
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>),;
  let role = 'guest';
  try { role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest' } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (role !== 'admin') return { redirect: { destination: '/', permanent: false } },;
  return { props: {}   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export default function ContentReviewPage(req, res) {
  try {
  const [filters, setFilters] = useState<{ status?: string, reason?: string, userEmail?: string, contentType?: string }>({ status: 'pending' }),;
  const query = useMemo(() => {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{
    status?: string;
    reason?: string;
    userEmail?: string;
    contentType?: string;
  }>({ status: 'pending' });
  const query = useMemo(() => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const p = new URLSearchParams();
    if (filters.status) p.set('status', filters.status);
    if (filters.reason) p.set('reason', filters.reason);
    if (filters.userEmail) p.set('userEmail', filters.userEmail);
    if (filters.contentType) p.set('contentType', filters.contentType);
<<<<<<< HEAD

<<<<<<< HEAD
  return (
=======
=======
return p.toString();
  }, [filters]);
  const { data, mutate } = useSWR(
    `/api/admin/moderation/flags${query ? `?${query}` : ''}`
    fetcher
  );
  const flags = data?.flags || [];

  const [selected, setSelected] = useState<any | null>(null);

async function handleAction(
    action: 'approve' | 'remove' | 'warn' | 'ban',
    adminNotes?: string
  ) {
    if (!selected) return;
    await fetch(
      `/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`
      {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ action, adminNotes })
      }
    );
    setSelected(null);
<<<<<<< HEAD
    mutate();  }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }, [filters]),;
  const { data, mutate } = useSWR(`/api/admin/moderation/flags${query ? `?${query}` : ''}`, fetcher);
  const flags = data?.flags || [];
  const [selected, setSelected] = useState<any | null>(null);
  async function handleAction(action: 'approve'|'remove'|'warn'|'ban', adminNotes?: string) {;
    if (!selected) return,;
    await fetch(`/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`, {;
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, adminNotes });
    });
    setSelected(null);
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    return this.props.children;
  }
}
import useSWR from 'swr';'
import React, { useMemo, useState } from 'react';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      }
    );
    set_selected (null);
    mutate ();  }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <EnhancedLayout>;

'
            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

<<<<<<< HEAD
            }
            className='border rounded px-2 py-1';
<<<<<<< HEAD
=======
      <div className='max - w-7xl mx - auto'>;
        <div className='flex items - center justify - between mb - 4'>;
          <h1 className='text - 2xl font - semibold'>Admin Content Review</h1>;
        </div>;
        <div className='mb - 4 grid grid - cols - 1 md:grid - cols - 5 gap - 3 text - sm'>;
          <select;
            value={filters.status || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, status: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >;
            <option value=''>All Statuses</option>;
            <option value='pending'>Pending</option>;
            <option value='approved'>Approved</option>;
            <option value='removed'>Removed</option>;
            <option value='warned'>Warned</option>;
            <option value='banned'>Banned</option>;
          </select>;

            value={filters && filters.contentType || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                contentType: e && e.target.value || undefined,;
              }));

            }
            className='border rounded px-2 py-1';
          <select;
            value={filters.content_type || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                content_type: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          >;
            <option value=''>All Types</option>;
            <option value='listing'>Listing</option>;
            <option value='message'>Message</option>;
            <option value='cv'>CV</option>;
            <option value='job'>Job Post</option>;
          </select>;

            value={filters && filters.reason || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, reason: e && e.target.value || undefined }));

            }
            className='border rounded px-2 py-1';
          />;
          <input
            placeholder='User email'

            value={filters && filters.userEmail || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                userEmail: e && e.target.value || undefined,;
              }));

            }
            className='border rounded px-2 py-1';
          />;
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1';
          <input;
            placeholder='Reason contains...';
            value={filters.reason || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, reason: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <input;
            placeholder='User email';
            value={filters.user_email || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                user_email: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <button;
            on_click={() => set_filters ({ status: 'pending' })}
            className='border rounded px - 2 py - 1';
          >;
            Reset;
          </button>;
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
            }
            className='border rounded px-2 py-1';
      <div className='max - w-7xl mx - auto'>;
        <div className='flex items - center justify - between mb - 4'>;
          <h1 className='text - 2xl font - semibold'>Admin Content Review</h1>;
        </div>;
        <div className='mb - 4 grid grid - cols - 1 md:grid - cols - 5 gap - 3 text - sm'>;
          <select;
            value={filters.status || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, status: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          >;
            <option value=''>All Statuses</option>;
            <option value='pending'>Pending</option>;
            <option value='approved'>Approved</option>;
            <option value='removed'>Removed</option>;
            <option value='warned'>Warned</option>;
            <option value='banned'>Banned</option>;
          </select>;
            }
            className='border rounded px-2 py-1';
          <select;
            value={filters.content_type || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                content_type: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          >;
            <option value=''>All Types</option>;
            <option value='listing'>Listing</option>;
            <option value='message'>Message</option>;
            <option value='cv'>CV</option>;
            <option value='job'>Job Post</option>;
          </select>;
            }
            className='border rounded px-2 py-1';
          />;
          <input
            placeholder='User email'
            }
            className='border rounded px-2 py-1';
          />;
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1';
          <input;
            placeholder='Reason contains...';
            value={filters.reason || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, reason: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <input;
            placeholder='User email';
            value={filters.user_email || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                user_email: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <button;
            on_click={() => set_filters ({ status: 'pending' })}
            className='border rounded px - 2 py - 1';
          >;
            Reset;
          </button>;
        </div>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <EnhancedLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Admin Content Review</h1>
        </div>
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
=======
        <div className='mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm'>
          <select
            value={filters.status |''}
            onChange={e =>
              setFilters(f => ({ ...f, status: e.target.value |undefined }))
            }
            className='border rounded px-2 py-1'
          >
            <option value=''>All Statuses</option>
            <option value='pending'>Pending</option>
            <option value='approved'>Approved</option>
            <option value='removed'>Removed</option>
            <option value='warned'>Warned</option>
            <option value='banned'>Banned</option>
          </select>
          <select
            value={filters.contentType |''}
            onChange={e =>
              setFilters(f => ({
                ...f
                contentType: e.target.value |undefined
              }))
            }
            className='border rounded px-2 py-1'
          >
            <option value=''>All Types</option>
            <option value='listing'>Listing</option>
            <option value='message'>Message</option>
            <option value='cv'>CV</option>
            <option value='job'>Job Post</option>
          </select>
          <input
            placeholder='Reason contains...'
            value={filters.reason |''}
            onChange={e =>
              setFilters(f => ({ ...f, reason: e.target.value |undefined }))
            }
            className='border rounded px-2 py-1'
          />
          <input
            placeholder='User email'
            value={filters.userEmail |''}
            onChange={e =>
              setFilters(f => ({
                ...f
                userEmail: e.target.value |undefined
              }))
            }
            className='border rounded px-2 py-1'
          />
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1'
          >
            Reset
          </button>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
          <select value={filters.status || ''} onChange={e => setFilters(f => ({ ...f, status: e.target.value || undefined }))} className="border rounded px-2 py-1">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="removed">Removed</option>
            <option value="warned">Warned</option>
            <option value="banned">Banned</option>
          </select>
          <select value={filters.contentType || ''} onChange={e => setFilters(f => ({ ...f, contentType: e.target.value || undefined }))} className="border rounded px-2 py-1">
            <option value="">All Types</option>
            <option value="listing">Listing</option>
            <option value="message">Message</option>
            <option value="cv">CV</option>
            <option value="job">Job Post</option>
          </select>
          <input placeholder="Reason contains..." value={filters.reason || ''} onChange={e => setFilters(f => ({ ...f, reason: e.target.value || undefined }))} className="border rounded px-2 py-1" />
          <input placeholder="User email" value={filters.userEmail || ''} onChange={e => setFilters(f => ({ ...f, userEmail: e.target.value || undefined }))} className="border rounded px-2 py-1" />
          <button onClick={() => setFilters({ status: 'pending' })} className="border rounded px-2 py-1">Reset</button>

<<<<<<< HEAD
=======


        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left px-3 py-2">ID</th>
                <th className="text-left px-3 py-2">Type</th>
                <th className="text-left px-3 py-2">User</th>
                <th className="text-left px-3 py-2">Reason</th>
                <th className="text-left px-3 py-2">AI Scores</th>
                <th className="text-left px-3 py-2">Created</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
<<<<<<< HEAD

  const [selected, setSelected] = useState<any | null>(null),

  async function handleAction(action: 'approve'|'remove'|'warn'|'ban', adminNotes?: string) {
    if (!selected) return,
    await fetch(`/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, adminNotes })
    }),
    setSelected(null),
    mutate()
=======
=======
    mutate();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }

  return (
    <EnhancedLayout>
<<<<<<< HEAD
      <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Admin Content Review</h1>
        </div>
        <div className=&quot;mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm&quot;>
          <select value={filters.status || ''} onChange={e => setFilters(f => ({ ...f, status: e.target.value || undefined }))} className=&quot;border rounded px-2 py-1&quot;>
            <option value="&quot;>All Statuses</option>
            <option value=&quot;pending&quot;>Pending</option>
            <option value=&quot;approved&quot;>Approved</option>
            <option value=&quot;removed&quot;>Removed</option>
            <option value=&quot;warned&quot;>Warned</option>
            <option value=&quot;banned">Banned</option>
          </select>
          <select value={filters.contentType || ''} onChange={e => setFilters(f => ({ ...f, contentType: e.target.value || undefined }))} className="border rounded px-2 py-1&quot;>
            <option value="&quot;>All Types</option>
            <option value=&quot;listing&quot;>Listing</option>
            <option value=&quot;message&quot;>Message</option>
            <option value=&quot;cv&quot;>CV</option>
            <option value=&quot;job&quot;>Job Post</option>
          </select>
          <input placeholder=&quot;Reason contains...&quot; value={filters.reason || ''} onChange={e => setFilters(f => ({ ...f, reason: e.target.value || undefined }))} className=&quot;border rounded px-2 py-1&quot; />
          <input placeholder=&quot;User email&quot; value={filters.userEmail || ''} onChange={e => setFilters(f => ({ ...f, userEmail: e.target.value || undefined }))} className=&quot;border rounded px-2 py-1&quot; />
          <button onClick={() => setFilters({ status: 'pending' })} className=&quot;border rounded px-2 py-1&quot;>Reset</button>
        </div>
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50 dark:bg-gray-900&quot;>
              <tr>
                <th className=&quot;text-left px-3 py-2&quot;>ID</th>
                <th className=&quot;text-left px-3 py-2&quot;>Type</th>
                <th className=&quot;text-left px-3 py-2&quot;>User</th>
                <th className=&quot;text-left px-3 py-2&quot;>Reason</th>
                <th className=&quot;text-left px-3 py-2&quot;>AI Scores</th>
                <th className=&quot;text-left px-3 py-2&quot;>Created</th>
                <th className=&quot;text-left px-3 py-2&quot;>Status</th>
                <th className=&quot;text-left px-3 py-2&quot;>Actions</th>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<div className='max-w-7xl mx-auto'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <EnhancedLayout>;

            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

            }
            className='border rounded px-2 py-1';
      <div className='max - w-7xl mx - auto'>;
        <div className='flex items - center justify - between mb - 4'>;
          <h1 className='text - 2xl font - semibold'>Admin Content Review</h1>;
        </div>;
        <div className='mb - 4 grid grid - cols - 1 md:grid - cols - 5 gap - 3 text - sm'>;
          <select;
            value={filters.status || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, status: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          >;
            <option value=''>All Statuses</option>;
            <option value='pending'>Pending</option>;
            <option value='approved'>Approved</option>;
            <option value='removed'>Removed</option>;
            <option value='warned'>Warned</option>;
            <option value='banned'>Banned</option>;
          </select>;
            }
            className='border rounded px-2 py-1';
          <select;
            value={filters.content_type || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                content_type: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          >;
            <option value=''>All Types</option>;
            <option value='listing'>Listing</option>;
            <option value='message'>Message</option>;
            <option value='cv'>CV</option>;
            <option value='job'>Job Post</option>;
          </select>;
            }
            className='border rounded px-2 py-1';
          />;
          <input
            placeholder='User email'
            }
            className='border rounded px-2 py-1';
          />;
          <button
            onClick={() => setFilters({ status: 'pending' })}
<<<<<<< HEAD
            className='border rounded px-2 py-1';
          <input;
            placeholder='Reason contains...';
            value={filters.reason || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, reason: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <input;
            placeholder='User email';
            value={filters.user_email || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                user_email: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <button;
            on_click={() => set_filters ({ status: 'pending' })}
            className='border rounded px - 2 py - 1';
          >;
            Reset;
          </button>;
        </div>;
=======
            className='border rounded px-2 py-1'
          >
            Reset
          </button>
        </div>
        <div className='overflow-auto border rounded'>
          <table className='min-w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900'>
              <tr>
                <th className='text-left px-3 py-2'>ID</th>
                <th className='text-left px-3 py-2'>Type</th>
                <th className='text-left px-3 py-2'>User</th>
                <th className='text-left px-3 py-2'>Reason</th>
                <th className='text-left px-3 py-2'>AI Scores</th>
                <th className='text-left px-3 py-2'>Created</th>
                <th className='text-left px-3 py-2'>Status</th>
                <th className='text-left px-3 py-2'>Actions</th>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </tr>
            </thead>
            <tbody>
              {flags.map((f: any) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<tr key={f.id} className="border-t hover:bg-gray-50/50">
=======
                <tr key={f.id} className="border-t hover:bg-gray-50/50">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <td className="px-3 py-2 font-mono text-xs">{f.id}</td>
                  <td className="px-3 py-2">{f.contentType}</td>
                  <td className="px-3 py-2">{f.userEmail}</td>
                  <td className="px-3 py-2 truncate max-w-xs" title={f.reason}>{f.reason}</td>
                  <td className="px-3 py-2 text-xs">T{Math.round(f.aiScores?.toxicity*100)}% / N{Math.round(f.aiScores?.nsfw*100)}% / S{Math.round(f.aiScores?.scam*100)}%</td>
                  <td className="px-3 py-2">{new Date(f.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{f.status}</td>
                  <td className="px-3 py-2">
                    <button onClick={() => setSelected(f)} className="px-2 py-1 rounded border">Review</button>
                  </td>
                </tr>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              ))}
              {flags.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className='px-3 py-6 text-center text-gray-500'
                  >
                    No results
                  </td>
                </tr>              )}
            </tbody>
          </table>
        </div>
      </div>
      {selected && (
        <ModerationModal
          flag={selected}
          onClose={() => setSelected(null)}
          onAction={handleAction}
        />
      )}
    </EnhancedLayout>
);


}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ))}
              {flags.length === 0 && (
=======


                  <td className="px-3 py-2 font-mono text-xs">{f.id}</td>"
                  <td className="px-3 py-2">{f.contentType}</td>"
                  <td className="px-3 py-2">{f.userEmail}</td>"
                  <td className="px-3 py-2 truncate max-w-xs" title={f.reason}>{f.reason}</td>"
                  <td className="px-3 py-2 text-xs">T{Math.round(f.aiScores?.toxicity*100)}% / N{Math.round(f.aiScores?.nsfw*100)}% / S{Math.round(f.aiScores?.scam*100)}%</td>"
                  <td className="px-3 py-2">{new Date(f.createdAt).toLocaleString()}</td>"
                  <td className="px-3 py-2">{f.status}</td>"
                  <td className="px-3 py-2">"
                    <button onClick={() => setSelected(f)} className="px-2 py-1 rounded border">Review</button>
                  </td>
                </tr>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </tbody>;
          </table>;
        </div>;
      </div>;

      {selected && (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
      {selected && (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<tr key={f.id} className='border-t hover:bg-gray-50/50'>
                  <td className='px-3 py-2 font-mono text-xs'>{f.id}</td>
                  <td className='px-3 py-2'>{f.contentType}</td>
                  <td className='px-3 py-2'>{f.userEmail}</td>
                  <td className='px-3 py-2 truncate max-w-xs' title={f.reason}>
                    {f.reason}
                  </td>
                  <td className='px-3 py-2 text-xs'>
                    T{Math.round(f.aiScores?.toxicity * 100)}% / N
                    {Math.round(f.aiScores?.nsfw * 100)}% / S
                    {Math.round(f.aiScores?.scam * 100)}%
                  </td>
                  <td className='px-3 py-2'>
                    {new Date(f.createdAt).toLocaleString()}
                  </td>
                  <td className='px-3 py-2'>{f.status}</td>
                  <td className='px-3 py-2'>
                    <button
                      onClick={() => setSelected(f)}
                      className='px-2 py-1 rounded border'
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
              {flags.length === 0 && (
<tr>
                  <td
                    colSpan={8}
                    className='px-3 py-6 text-center text-gray-500'
                  >
                    No results
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selected && (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <ModerationModal
=======


        <ModerationModal;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          flag={selected}
          onClose={() => setSelected(null)}
          onAction={handleAction}
        />;
      )}
<<<<<<< HEAD
    </EnhancedLayout>;
  );
    </EnhancedLayout>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        <div className='overflow - auto border rounded'>;
          <table className='min - w-full text - sm'>;
=======
'
        <div className='overflow - auto border rounded'>;'
          <table className='min - w-full text - sm'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <thead className='bg - gray - 50 dark:bg - gray - 900'>;
              <tr>;'
                <th className='text - left px - 3 py - 2'>ID</th>;'
                <th className='text - left px - 3 py - 2'>Type</th>;'
                <th className='text - left px - 3 py - 2'>User</th>;'
                <th className='text - left px - 3 py - 2'>Reason</th>;'
                <th className='text - left px - 3 py - 2'>AI Scores</th>;'
                <th className='text - left px - 3 py - 2'>Created</th>;'
                <th className='text - left px - 3 py - 2'>Status</th>;'
                <th className='text - left px - 3 py - 2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {flags.map ((function: any) => ('
                <tr key={f.id} className='border - t hover:bg - gray - 50 / 50'>;'
                  <td className='px - 3 py - 2 font - mono text - xs'>{f.id}</td>;'
                  <td className='px - 3 py - 2'>{f.content_type}</td>;'
                  <td className='px - 3 py - 2'>{f.user_email}</td>;'
                  <td className='px - 3 py - 2 truncate max - w-xs' title={f.reason}>;
                    {f.reason}
                  </td>;'
                  <td className='px - 3 py - 2 text - xs'>;
                    T{Math.round (f.ai_scores?.toxicity * 100)}% / N;
                    {Math.round (f.ai_scores?.nsfw * 100)}% / S;
                    {Math.round (f.ai_scores?.scam * 100)}%;
                  </td>;'
                  <td className='px - 3 py - 2'>;
                    {new Date (f.created_at).toLocaleString ()}
                  </td>;'
                  <td className='px - 3 py - 2'>{f.status}</td>;'
                  <td className='px - 3 py - 2'>;
                    <button;
                      on_click={() => set_selected (f)}'
                      className='px - 2 py - 1 rounded border';
                    >;
                      Review;
                    </button>                  </td>;
                </tr>))}
              {flags.length === 0 && (
                <tr>;
                  <td;
                    col_span={8}'
                    className='px - 3 py - 6 text - center text - gray - 500';
                  >;
                    No results;
                  </td>;
                </tr>              )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {selected && (
        <ModerationModal;
          flag={selected}
          on_close={() => set_selected (null)}
          on_action={handle_action}
        />)}
    </EnhancedLayout>);
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    </EnhancedLayout>
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
