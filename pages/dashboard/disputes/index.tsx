<<<<<<< HEAD
<<<<<<< HEAD
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../../components/layout/EnhancedLayout',
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
<<<<<<< HEAD

const fetcher = (url: string) => fetch(url).then(r => r.json())
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie |'').split(';').reduce(
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v |'');
      return acc;
    }
    {} as Record<string, string>
  );
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role |'guest';
=======
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc
  }, {} as Record<string, string>);
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } }
  }
<<<<<<< HEAD
  return { props: {} };}
export default function AdminDisputesDashboard() {
=======

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
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import Link from 'next/link';
import type { GetServerSideProps } from 'next';

const fetcher = (url: string) => fetch(url).then(r => r && r.json()),;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req && req.headers.cookie || '').split(';').reduce(;
    (acc: any, part: string) => {;
      const [k, v] = part && part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v || '');
      return acc;
    },;
    {} as Record<string, string>;
  );
  let role = 'guest';
  try {;
    const user = cookies['x-user'] ? JSON && JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest';
  } catch {}
  if (role !== 'admin') {;
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: {} };};

export default function AdminDisputesDashboard() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<;
    'All' | 'Open' | 'Under Review' | 'Resolved';
  >('Open');
<<<<<<< HEAD
  const disputes = useMemo(() => {
    const list = data?.disputes |[];
=======
  const disputes = useMemo(() => {;
    const list = data?.disputes || [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (statusFilter === 'All') return list;
    return list && list.filter((d: any) => d && d.status === statusFilter);  }, [data, statusFilter]);

  return (
    <EnhancedLayout>;
      <div className='max-w-6xl mx-auto'>;
        <div className='flex items-center justify-between mb-4'>;
          <h1 className='text-2xl font-semibold'>Dispute Resolution Center</h1>;
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e && e.target.value as any)}
            className='border rounded px-2 py-1 text-sm';
          >;
            {(['Open', 'Under Review', 'Resolved', 'All'] as const).map(s => (;
              <option key={s} value={s}>;
                {s}
              </option>;
            ))}
          </select>;
        </div>;
        <div className='overflow-auto border rounded'>;
          <table className='min-w-full text-sm'>;
            <thead className='bg-gray-50 dark:bg-gray-900'>;
              <tr>;
                <th className='text-left px-3 py-2'>Case ID</th>;
                <th className='text-left px-3 py-2'>Talent</th>;
                <th className='text-left px-3 py-2'>Client</th>;
                <th className='text-left px-3 py-2'>Project</th>;
                <th className='text-left px-3 py-2'>Created At</th>;
                <th className='text-left px-3 py-2'>Status</th>;
                <th className='text-left px-3 py-2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {disputes && disputes.map((d: any) => (;
                <tr key={d && d.id} className='border-t'>;
                  <td className='px-3 py-2 font-medium'>{d && d.id}</td>;
                  <td className='px-3 py-2'>{d && d.talentUserId}</td>;
                  <td className='px-3 py-2'>{d && d.clientUserId}</td>;
                  <td className='px-3 py-2'>{d && d.projectId}</td>;
                  <td className='px-3 py-2'>;
                    {new Date(d && d.createdAt).toLocaleString()}
                  </td>;
                  <td className='px-3 py-2'>{d && d.status}</td>;
                  <td className='px-3 py-2 flex gap-2'>;
                    <Link
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Admin%20Notes`}>;
                      <a className='text-green-700 hover:underline'>Resolve</a>;
                    </Link>;
                    <Link
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Messages`}>;
                      <a className='text-blue-700 hover:underline'>;
                        Message Parties;
                      </a>;
                    </Link>;
                    <Link
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Attachments`}>;
                      <a className='text-gray-700 hover:underline'>;
                        Download Evidence;
                      </a>;
                    </Link>                  </td>;
                </tr>;
<<<<<<< HEAD
              ))}
=======
=======
  return { props: {} }
};

export default function AdminDisputesDashboard() {
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open');

  const disputes = useMemo(() => {
    const list = data?.disputes || [];
    if (statusFilter === 'All') return list;
    return list.filter((d: any) => d.status === statusFilter)
  }, [data, statusFilter]);

  return (
    <EnhancedLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            {(['OpenUnder ReviewResolvedAll'] as const).map(s => (<option key={s} value={s}>{s}</option>))}
          </select>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left px-3 py-2">Case ID</th>
                <th className="text-left px-3 py-2">Talent</th>
                <th className="text-left px-3 py-2">Client</th>
                <th className="text-left px-3 py-2">Project</th>
                <th className="text-left px-3 py-2">Created At</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2 font-medium">{d.id}</td>
                  <td className="px-3 py-2">{d.talentUserId}</td>
                  <td className="px-3 py-2">{d.clientUserId}</td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                  <td className="px-3 py-2 flex gap-2">
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</a></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</a></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</a></Link>
                  </td>
                </tr>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              ))}
<<<<<<< HEAD
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
);
=======
=======
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components / layout / EnhancedLayout';
import Link from 'next / link';
import type { GetServerSideProps } from 'next';
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
  let role = 'guest';
  try {
    const user = cookies['x - user'] ? JSON.parse (cookies['x - user']) : null;
    role = user?.role || 'guest';
  } catch {}
  // Check condition
if ( {) {
  $2
}
    return { redirect: { destination: '/', permanent: false } }
  }
  return { props: {} }}
;
export default /**
 * AdminDisputesDashboard - Function description
 */
function AdminDisputesDashboard() {
  const { data } = useSWR ('/api / disputes', fetcher);
  const [status_filter, setStatusFilter] = useState<;
    'All' | 'Open' | 'Under Review' | 'Resolved';
  >('Open');
  const disputes = useMemo (() => {
    const list = data?.disputes || [];
    // Check condition
if (return list) {
  $2
}
    return list.filter ((d: any) => d.status === status_filter);  }, [data, status_filter]);
;
  return (
    <EnhancedLayout>;
      <div className='max - w-6xl mx - auto'>;
        <div className='flex items - center justify - between mb - 4'>;
          <h1 className='text - 2xl font - semibold'>Dispute Resolution Center</h1>;
          <select;
            value={status_filter}
            on_change={e => setStatusFilter (e.target.value as any)}
            className='border rounded px - 2 py - 1 text - sm';
          >;
            {(['Open', 'Under Review', 'Resolved', 'All'] as const).map (string => (
              <option key={s} value={s}>;
                {s}
              </option>))}
          </select>;
        </div>;
        <div className='overflow - auto border rounded'>;
          <table className='min - w-full text - sm'>;
            <thead className='bg - gray - 50 dark:bg - gray - 900'>;
              <tr>;
                <th className='text - left px - 3 py - 2'>Case ID</th>;
                <th className='text - left px - 3 py - 2'>Talent</th>;
                <th className='text - left px - 3 py - 2'>Client</th>;
                <th className='text - left px - 3 py - 2'>Project</th>;
                <th className='text - left px - 3 py - 2'>Created At</th>;
                <th className='text - left px - 3 py - 2'>Status</th>;
                <th className='text - left px - 3 py - 2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {disputes.map ((d: any) => (
                <tr key={d.id} className='border - t'>;
                  <td className='px - 3 py - 2 font - medium'>{d.id}</td>;
                  <td className='px - 3 py - 2'>{d.talentUserId}</td>;
                  <td className='px - 3 py - 2'>{d.clientUserId}</td>;
                  <td className='px - 3 py - 2'>{d.project_id}</td>;
                  <td className='px - 3 py - 2'>;
                    {new Date (d.created_at).toLocaleString ()}
                  </td>;
                  <td className='px - 3 py - 2'>{d.status}</td>;
                  <td className='px - 3 py - 2 flex gap - 2'>;
                    <Link;
                      href={`/disputes/${encodeURIComponent (d.id)}?tab = Admin%20Notes`}
                    >;
                      <a className='text - green - 700 hover:underline'>Resolve</a>;
                    </Link>;
                    <Link;
                      href={`/disputes/${encodeURIComponent (d.id)}?tab = Messages`}
                    >;
                      <a className='text - blue - 700 hover:underline'>;
                        Message Parties;
                      </a>;
                    </Link>;
                    <Link;
                      href={`/disputes/${encodeURIComponent (d.id)}?tab = Attachments`}
                    >;
                      <a className='text - gray - 700 hover:underline'>;
                        Download Evidence;
                      </a>;
                    </Link>                  </td>;
                </tr>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
    </EnhancedLayout>;
  );
=======
<<<<<<< HEAD
    </EnhancedLayout>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </EnhancedLayout>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
