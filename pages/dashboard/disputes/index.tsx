import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import Link from 'next/link';
import type { GetServerSideProps } from 'next';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split(';').reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>);
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest';
  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: {} };
};

export default function AdminDisputesDashboard() {
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open');

  const disputes = useMemo(() => {
    const list = data?.disputes || [];
    if (statusFilter === 'All') return list;
    return list.filter((d: any) => d.status === statusFilter);
  }, [data, statusFilter]);

  return (
    <EnhancedLayout>
      <div className=&quot;max-w-6xl mx-auto&quot;>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Dispute Resolution Center</h1>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className=&quot;border rounded px-2 py-1 text-sm&quot;>
            {(['Open','Under Review','Resolved','All'] as const).map(s => (<option key={s} value={s}>{s}</option>))}
          </select>
        </div>
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50 dark:bg-gray-900&quot;>
              <tr>
                <th className=&quot;text-left px-3 py-2&quot;>Case ID</th>
                <th className=&quot;text-left px-3 py-2&quot;>Talent</th>
                <th className=&quot;text-left px-3 py-2&quot;>Client</th>
                <th className=&quot;text-left px-3 py-2&quot;>Project</th>
                <th className=&quot;text-left px-3 py-2&quot;>Created At</th>
                <th className=&quot;text-left px-3 py-2&quot;>Status</th>
                <th className=&quot;text-left px-3 py-2&quot;>Actions</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (
                <tr key={d.id} className=&quot;border-t&quot;>
                  <td className=&quot;px-3 py-2 font-medium&quot;>{d.id}</td>
                  <td className=&quot;px-3 py-2&quot;>{d.talentUserId}</td>
                  <td className=&quot;px-3 py-2&quot;>{d.clientUserId}</td>
                  <td className=&quot;px-3 py-2&quot;>{d.projectId}</td>
                  <td className=&quot;px-3 py-2&quot;>{new Date(d.createdAt).toLocaleString()}</td>
                  <td className=&quot;px-3 py-2&quot;>{d.status}</td>
                  <td className=&quot;px-3 py-2 flex gap-2&quot;>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className=&quot;text-green-700 hover:underline&quot;>Resolve</Link></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className=&quot;text-blue-700 hover:underline&quot;>Message Parties</Link></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className=&quot;text-gray-700 hover:underline&quot;>Download Evidence</Link></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
  );
}