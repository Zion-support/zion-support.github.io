import React, { useEffect, useState } from 'react',
import type { NextPage } from 'next'
import type { Review } from '../../types/reviews'
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key')

const AdminReviewsPage: NextPage = () => {
  const [pending, setPending] = useState<Review[]>([]),
  const [all, setAll] = useState<Review[]>([]),
  const [adminKey, setAdminKey] = useState(''),

  async function refresh() {
    const res = await fetch('/api/admin/debug/reviews')
    const data = await res.json()
    if (res.ok) {
      setAll(data.reviews),
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
  }

  useEffect(() => { refresh() }, []),

  async function moderate(action: 'approve' | 'remove', reviewId: string) {
    const res = await fetch('/api/reviews/moderate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'},
      body: JSON.stringify({ action, reviewId })}),
    if (res.ok) refresh()
  }

  return (
    <main className=&quot;max-w-5xl mx-auto p-6 space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Review Moderation</h1>

      <div className=&quot;enhanced-card&quot;>
        <label className=&quot;block text-sm mb-2&quot;>Admin Key</label>
        <input className=&quot;border p-2 rounded w-full&quot; value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder=&quot;Enter admin key&quot; />
      </div>

      <section className=&quot;enhanced-card&quot;>
        <h2 className=&quot;text-xl font-semibold mb-4&quot;>Pending Reviews</h2>
        <div className=&quot;space-y-4&quot;>
          {pending.map((r) => (
            <div key={r.id} className=&quot;border rounded p-3&quot;>
              <div className=&quot;text-sm text-gray-600 mb-1&quot;>Project: {r.projectId} • To: {r.toRole} {r.toId}</div>
              <div className=&quot;font-medium&quot;>{r.rating}★ — {r.text}</div>
              <div className=&quot;mt-2 flex gap-2&quot;>
                <button className=&quot;enhanced-button enhanced-button-primary&quot; onClick={() => moderate('approve', r.id)}>Approve</button>
                <button className=&quot;enhanced-button enhanced-button-secondary&quot; onClick={() => moderate('remove', r.id)}>Remove</button>
import React, {_useEffect, _useState} from 'react';
import type {_NextPage} from 'next';
import type {_Review} from '../../types/reviews';

const _ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key');

const AdminReviewsPage: NextPage = () => {_const [pending, _setPending] = useState<Review[]>([]);
  const [all, _setAll] = useState<Review[]>([]);
  const [adminKey, _setAdminKey] = useState('');

  async function refresh() {
    const _res = await fetch('/api/admin/debug/reviews');
    const _data = await res.json();
    if (res.ok) {
      setAll(data.reviews);
      setPending(_data.reviews.filter((r: Review) => !r.approved && !r.removed));}
  }

  useEffect__(() => {_refresh();}, []);

  async function moderate(_action: 'approve' | 'remove', _reviewId: string) {_const _res = await fetch('/api/reviews/moderate', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json', _'x-admin-key': adminKey || 'dev-admin-key'},
      body: JSON.stringify({_action, _reviewId})});
    if (res.ok) refresh();
  }

  return (_<main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Moderation</h1>

      <div className="enhanced-card">
        <label className="block text-sm mb-2">Admin Key</label>
        <input className="border p-2 rounded w-full" value={_adminKey} onChange={_(e) => setAdminKey(e.target.value)} placeholder="Enter admin key" />
      </div>

      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
        <div className="space-y-4">
          {_pending.map(_(r) => (_<div key={r.id} className="border rounded p-3">
              <div className="text-sm text-gray-600 mb-1">Project: {_r.projectId} • To: {_r.toRole} {_r.toId}</div>
              <div className="font-medium">{_r.rating}★ — {_r.text}</div>
              <div className="mt-2 flex gap-2">
                <button className="enhanced-button enhanced-button-primary" onClick={_() => moderate('approve', _r.id)}>Approve</button>
                <button className="enhanced-button enhanced-button-secondary" onClick={_() => moderate('remove', _r.id)}>Remove</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          ))}
          {_!pending.length && <div>No pending reviews.</div>}
        </div>
      </section>

      <section className=&quot;enhanced-card&quot;>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>All Reviews</h2>
        <pre className=&quot;text-xs whitespace-pre-wrap&quot;>{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )
},

export default AdminReviewsPage