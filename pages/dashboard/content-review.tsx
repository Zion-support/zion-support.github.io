import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split(';').reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>);
  let role = 'guest';
  try { role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest'; } catch {}
  if (role !== 'admin') return { redirect: { destination: '/', permanent: false } };
  return { props: {} };
};

export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{ status?: string; reason?: string; userEmail?: string; contentType?: string }>({ status: 'pending' });
  const query = useMemo(() => {
    const p = new URLSearchParams();
    if (filters.status) p.set('status', filters.status);
    if (filters.reason) p.set('reason', filters.reason);
    if (filters.userEmail) p.set('userEmail', filters.userEmail);
    if (filters.contentType) p.set('contentType', filters.contentType);
    return p.toString();
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
    mutate();
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
              </tr>
            </thead>
            <tbody>
              {flags.map((f: any) => (
                <tr key={f.id} className=&quot;border-t hover:bg-gray-50/50&quot;>
                  <td className=&quot;px-3 py-2 font-mono text-xs&quot;>{f.id}</td>
                  <td className=&quot;px-3 py-2&quot;>{f.contentType}</td>
                  <td className=&quot;px-3 py-2&quot;>{f.userEmail}</td>
                  <td className=&quot;px-3 py-2 truncate max-w-xs&quot; title={f.reason}>{f.reason}</td>
                  <td className=&quot;px-3 py-2 text-xs&quot;>T{Math.round(f.aiScores?.toxicity*100)}% / N{Math.round(f.aiScores?.nsfw*100)}% / S{Math.round(f.aiScores?.scam*100)}%</td>
                  <td className=&quot;px-3 py-2&quot;>{new Date(f.createdAt).toLocaleString()}</td>
                  <td className=&quot;px-3 py-2&quot;>{f.status}</td>
                  <td className=&quot;px-3 py-2&quot;>
                    <button onClick={() => setSelected(f)} className=&quot;px-2 py-1 rounded border&quot;>Review</button>
                  </td>
                </tr>
              ))}
              {flags.length === 0 && (
                <tr><td colSpan={8} className=&quot;px-3 py-6 text-center text-gray-500&quot;>No results</td></tr>
              )}
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