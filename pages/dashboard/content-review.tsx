import useSWR from 'swr';
import React, {_useMemo, _useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {_GetServerSideProps} from 'next';
import ModerationModal from '../../components/admin/ModerationModal';

const _fetcher = (_url: string) => fetch(url).then(r => r.json());

export const getServerSideProps: GetServerSideProps = async (_{_req}) => {_const _cookies = (req.headers.cookie || '').split(';').reduce(_(acc: unknown, _part: string) => {
    const [k, _v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;}, {} as Record<string, string>);
  let _role = 'guest';
  try {_role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest';} catch {}
  if (role !== 'admin') return {_redirect: { destination: '/', _permanent: false} };
  return {_props: {} };
};

export default function ContentReviewPage() {_const [filters, _setFilters] = useState<{ status?: string; reason?: string; userEmail?: string; contentType?: string}>({_status: 'pending'});
  const _query = useMemo__(() => {_const _p = new URLSearchParams();
    if (filters.status) p.set('status', _filters.status);
    if (filters.reason) p.set('reason', _filters.reason);
    if (filters.userEmail) p.set('userEmail', _filters.userEmail);
    if (filters.contentType) p.set('contentType', _filters.contentType);
    return p.toString();}, [filters]);
  const {_data, _mutate} = useSWR(`/api/admin/moderation/flags${_query ? `?${query}` : ''}`, fetcher);
  const _flags = data?.flags || [];

  const [selected, setSelected] = useState<any | null>(null);

  async function handleAction(_action: 'approve'|'remove'|'warn'|'ban', _adminNotes?: string) {_if (!selected) return;
    await fetch(`/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_action, _adminNotes})
    });
    setSelected(null);
    mutate();
  }

  return (
    <EnhancedLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Admin Content Review</h1>
        </div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
          <select value={_filters.status || ''} onChange={_e => setFilters(f => ({ ...f, _status: e.target.value || undefined}))} className="border rounded px-2 py-1">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="removed">Removed</option>
            <option value="warned">Warned</option>
            <option value="banned">Banned</option>
          </select>
          <select value={_filters.contentType || ''} onChange={_e => setFilters(f => ({ ...f, _contentType: e.target.value || undefined}))} className="border rounded px-2 py-1">
            <option value="">All Types</option>
            <option value="listing">Listing</option>
            <option value="message">Message</option>
            <option value="cv">CV</option>
            <option value="job">Job Post</option>
          </select>
          <input placeholder="Reason contains..." value={_filters.reason || ''} onChange={_e => setFilters(f => ({ ...f, _reason: e.target.value || undefined}))} className="border rounded px-2 py-1" />
          <input placeholder="User email" value={_filters.userEmail || ''} onChange={_e => setFilters(f => ({ ...f, _userEmail: e.target.value || undefined}))} className="border rounded px-2 py-1" />
          <button onClick={_() => setFilters({ status: 'pending'})} className="border rounded px-2 py-1">Reset</button>
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
              </tr>
            </thead>
            <tbody>
              {_flags.map(_(f: unknown) => (
                <tr key={f.id} className="border-t hover:bg-gray-50/50">
                  <td className="px-3 py-2 font-mono text-xs">{_f.id}</td>
                  <td className="px-3 py-2">{_f.contentType}</td>
                  <td className="px-3 py-2">{_f.userEmail}</td>
                  <td className="px-3 py-2 truncate max-w-xs" title={_f.reason}>{_f.reason}</td>
                  <td className="px-3 py-2 text-xs">T{_Math.round(f.aiScores?.toxicity*100)}% / N{_Math.round(f.aiScores?.nsfw*100)}% / S{_Math.round(f.aiScores?.scam*100)}%</td>
                  <td className="px-3 py-2">{_new Date(f.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{_f.status}</td>
                  <td className="px-3 py-2">
                    <button onClick={_() => setSelected(f)} className="px-2 py-1 rounded border">Review</button>
                  </td>
                </tr>
              ))}
              {_flags.length === 0 && (
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {_selected && (_<ModerationModal
          flag={selected}
          onClose={_() => setSelected(null)}
          onAction={_handleAction}
        />
      )}
    </EnhancedLayout>
  );
}