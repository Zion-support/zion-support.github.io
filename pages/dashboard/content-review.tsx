<<<<<<< HEAD

<<<<<<< HEAD
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v |'');
      return acc;
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{;
    status?: string;
    reason?: string;
    userEmail?: string;
    contentType?: string;
  }>({ status: 'pending' });  const query = useMemo(() => {

const fetcher = (url: string) => fetch(url).then(r => r.json());
export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {;
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>),;
=======
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components / admin / ModerationModal';
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split (';').reduce (
    (acc: any, part: string) => {
      const [k, v] = part.trim ().split ('=');
      if (acc[k] = decodeURIComponent (v || '')) {
  $2
}
      return acc;
    },
    {} as Record < string, string>);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  const [filters, setFilters] = useState<{ status?: string, reason?: string, userEmail?: string, contentType?: string }>({ status: 'pending' }),;
  const query = useMemo(() => {;

    const p = new URLSearchParams();
    if (filters.status) p.set('status', filters.status);
    if (filters.reason) p.set('reason', filters.reason);
    if (filters.userEmail) p.set('userEmail', filters.userEmail);
    if (filters.contentType) p.set('contentType', filters.contentType);
    return p.toString();

=======
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';

=======
    role = cookies['x - user'] ? JSON.parse (cookies['x - user']).role : 'guest';
  } catch {}
  // Check condition
if (
    return { redirect: { destination: '/', permanent: false } }) {
  $2
}
  return { props: {} }
}
;
export default /**
 * ContentReviewPage - Function description
 */
function ContentReviewPage() {
  const [filters, set_filters] = useState<{
    status?: string;
    reason?: string;
    user_email?: string;
    content_type?: string;
  }>({ status: 'pending' });  const query = useMemo (() => {
    const p = new URLSearchParams ();
    if (p.set ('status', filters.status)) {
  $2
}
    if (p.set ('reason', filters.reason)) {
  $2
}
    if (p.set ('user_email', filters.user_email)) {
  $2
}
    if (p.set ('content_type', filters.content_type)) {
  $2
}
    return p.to_string ();
  }, [filters]);
  const { data, mutate } = useSWR (
    `/api / admin / moderation / flags${query ? `?${query}` : ''}`,
    fetcher);  const flags = data?.flags || [];
;
  const [selected, set_selected] = useState < any | null>(null);
;
  async /**
 * handle_action - Function description
 */
function handle_action() {
    // Check condition
if (return) {
  $2
}
    await fetch (
      `/api / admin / moderation / flags/${encodeURIComponent (selected.id)}/action`,
      {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ action, admin_notes }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    );
    set_selected (null);
    mutate ();  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <EnhancedLayout>;
<<<<<<< HEAD

            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

=======
            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            value={filters && filters.contentType || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                contentType: e && e.target.value || undefined,;
              }));
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

            value={filters && filters.reason || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, reason: e && e.target.value || undefined }));

=======
            value={filters && filters.reason || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, reason: e && e.target.value || undefined }));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }
            className='border rounded px-2 py-1';
          />;
          <input
            placeholder='User email'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            value={filters && filters.userEmail || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                userEmail: e && e.target.value || undefined,;
              }));
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc
  }, {} as Record<string, string>);
  let role = 'guest';
  try { role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest' } catch {}
  if (role !== 'admin') return { redirect: { destination: '/', permanent: false } },
  return { props: {} }
};
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{ status?: string, reason?: string, userEmail?: string, contentType?: string }>({ status: 'pending' }),
  const query = useMemo(() => {
=======
<<<<<<< HEAD
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';
<<<<<<< HEAD

const fetcher = (url: string) => fetch(url).then(r => r.json())
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie |'').split(';').reduce(
=======
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split(';').reduce(
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v |'');
      return acc;
    }
    {} as Record<string, string>
  );
  let role = 'guest';
  try {
    role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest';
  } catch {}
  if (role !== 'admin')
    return { redirect: { destination: '/', permanent: false } }
  return { props: {} }
}
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{;
    status?: string;
    reason?: string;
    userEmail?: string;
    contentType?: string;
  }>({ status: 'pending' });  const query = useMemo(() => {
=======
<<<<<<< HEAD
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const p = new URLSearchParams();
    if (filters.status) p.set('status', filters.status);
    if (filters.reason) p.set('reason', filters.reason);
    if (filters.userEmail) p.set('userEmail', filters.userEmail);
    if (filters.contentType) p.set('contentType', filters.contentType);
<<<<<<< HEAD
    return p.toString()
  }, [filters]);
  const { data, mutate } = useSWR(`/api/admin/moderation/flags${query ? `?${query}` : ''}`, fetcher);
  const flags = data?.flags || [];
  const [selected, setSelected] = useState<any | null>(null);
  async function handleAction(action: 'approve'|'remove'|'warn'|'ban', adminNotes?: string) {
    if (!selected) return;
    await fetch(`/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, adminNotes })
    });
    setSelected(null);
    mutate()
  }
=======
    return p.toString();
<<<<<<< HEAD
  }, [filters]);
  const { data, mutate } = useSWR(
    `/api/admin/moderation/flags${query ? `?${query}` : ''}`
    fetcher
  );  const flags = data?.flags |[];
  const [selected, setSelected] = useState<any | null>(null);
  async function handleAction(
    action: 'approve' | 'remove' | 'warn' | 'ban'
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
    mutate();  }

=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <EnhancedLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Admin Content Review</h1>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  }

  return (
    <EnhancedLayout>
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
              </tr>
            </thead>
            <tbody>
              {flags.map((f: any) => (
<<<<<<< HEAD
<tr key={f.id} className="border-t hover:bg-gray-50/50">
=======
                <tr key={f.id} className="border-t hover:bg-gray-50/50">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
              ))}
              {flags.length === 0 && (
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======


}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {
=======
<tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )}
=======
              ))  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              {flags.length === 0 && (
<<<<<<< HEAD
                <tr>
                  <td
                    colSpan={8}
                    className='px-3 py-6 text-center text-gray-500'
                  >
                    No results
                  </td>
                </tr>              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </tbody>
          </table>
        </div>
      </div>
<<<<<<< HEAD
{selected && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </tbody>;
          </table>;
        </div>;
      </div>;
      {selected && (;
=======
      {selected && (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <ModerationModal
          flag={selected}
          onClose={() => setSelected(null)}
          onAction={handleAction}
        />;
      )}
<<<<<<< HEAD


=======
=======
    </EnhancedLayout>;
  );
    </EnhancedLayout>
<<<<<<< HEAD
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='overflow - auto border rounded'>;
          <table className='min - w-full text - sm'>;
            <thead className='bg - gray - 50 dark:bg - gray - 900'>;
              <tr>;
                <th className='text - left px - 3 py - 2'>ID</th>;
                <th className='text - left px - 3 py - 2'>Type</th>;
                <th className='text - left px - 3 py - 2'>User</th>;
                <th className='text - left px - 3 py - 2'>Reason</th>;
                <th className='text - left px - 3 py - 2'>AI Scores</th>;
                <th className='text - left px - 3 py - 2'>Created</th>;
                <th className='text - left px - 3 py - 2'>Status</th>;
                <th className='text - left px - 3 py - 2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {flags.map ((function: any) => (
                <tr key={f.id} className='border - t hover:bg - gray - 50 / 50'>;
                  <td className='px - 3 py - 2 font - mono text - xs'>{f.id}</td>;
                  <td className='px - 3 py - 2'>{f.content_type}</td>;
                  <td className='px - 3 py - 2'>{f.user_email}</td>;
                  <td className='px - 3 py - 2 truncate max - w-xs' title={f.reason}>;
                    {f.reason}
                  </td>;
                  <td className='px - 3 py - 2 text - xs'>;
                    T{Math.round (f.ai_scores?.toxicity * 100)}% / N;
                    {Math.round (f.ai_scores?.nsfw * 100)}% / S;
                    {Math.round (f.ai_scores?.scam * 100)}%;
                  </td>;
                  <td className='px - 3 py - 2'>;
                    {new Date (f.created_at).toLocaleString ()}
                  </td>;
                  <td className='px - 3 py - 2'>{f.status}</td>;
                  <td className='px - 3 py - 2'>;
                    <button;
                      on_click={() => set_selected (f)}
                      className='px - 2 py - 1 rounded border';
                    >;
                      Review;
                    </button>                  </td>;
                </tr>))}
              {flags.length === 0 && (
                <tr>;
                  <td;
                    col_span={8}
                    className='px - 3 py - 6 text - center text - gray - 500';
                  >;
                    No results;
                  </td>;
                </tr>              )}
=======
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
      {selected && (
        <ModerationModal;
          flag={selected}
          on_close={() => set_selected (null)}
          on_action={handle_action}
        />)}
    </EnhancedLayout>);
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
      {selected && (;
        <ModerationModal;
          flag={selected  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          onClose={() => setSelected(null)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          onAction={handleAction  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        />;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </EnhancedLayout>;
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
