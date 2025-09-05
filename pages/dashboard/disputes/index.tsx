import useSWR from 'swr';
import React, {_useMemo, _useState} from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import Link from 'next/link';
import type {_GetServerSideProps} from 'next';

const _fetcher = (_url: string) => fetch(url).then(r => r.json());

export const getServerSideProps: GetServerSideProps = async (_{_req}) => {_const _cookies = (req.headers.cookie || '').split(';').reduce(_(acc: unknown, _part: string) => {
    const [k, _v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;}, {} as Record<string, string>);
  let _role = 'guest';
  try {_const _user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest';} catch {}
  if (role !== 'admin') {_return { redirect: { destination: '/', _permanent: false} };
  }
  return {_props: {} };
};

export default function AdminDisputesDashboard() {_const { data} = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open');

  const _disputes = useMemo__(() => {_const _list = data?.disputes || [];
    if (statusFilter === 'All') return list;
    return list.filter(_(d: unknown) => d.status === statusFilter);}, [data, statusFilter]);

  return (
    <EnhancedLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>
          <select value={_statusFilter} onChange={_e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            {_(['Open', _'Under Review', _'Resolved', _'All'] as const).map(s => (<option key={s} value={_s}>{_s}</option>))}
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
              {_disputes.map(_(d: unknown) => (
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2 font-medium">{_d.id}</td>
                  <td className="px-3 py-2">{_d.talentUserId}</td>
                  <td className="px-3 py-2">{_d.clientUserId}</td>
                  <td className="px-3 py-2">{_d.projectId}</td>
                  <td className="px-3 py-2">{_new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{_d.status}</td>
                  <td className="px-3 py-2 flex gap-2">
                    <Link href={_`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</a></Link>
                    <Link href={_`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</a></Link>
                    <Link href={_`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</a></Link>
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