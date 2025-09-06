<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
=======
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { Review } from '../../types/reviews';
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const AdminReviewsPage: NextPage = () => {
  const [pending, setPending] = useState<Review[]>([]);
  const [all, setAll] = useState<Review[]>([]);
  const [adminKey, setAdminKey] = useState('');

  async function refresh() {
    const res = await fetch('/api/admin/debug/reviews');
    const data = await res.json();
    if (res.ok) {
      setAll(data.reviews);
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
  }

<<<<<<< HEAD
  useEffect(() => {
    refresh();
  }, []);
=======
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { Review } from '../../types/reviews';
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key');

const AdminReviewsPage: NextPage = () => {
  const [pending, setPending] = useState<Review[]>([]);
  const [all, setAll] = useState<Review[]>([]);
  const [adminKey, setAdminKey] = useState('');

  async function refresh() {
    const res = await fetch('/api/admin/debug/reviews');
    const data = await res.json();
    if (res.ok) {
      setAll(data.reviews);
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
  }

  useEffect(() => { refresh() }, []);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  useEffect(() => { refresh() }, []);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  async function moderate(action: 'approve' | 'remove', reviewId: string) {
    const res = await fetch('/api/reviews/moderate', {
      method: 'POST',
      headers: {
<<<<<<< HEAD
<<<<<<< HEAD
        'Content-Type': 'application/json',
        'x-admin-key': adminKey || 'dev-admin-key',
      },
      body: JSON.stringify({ action, reviewId }),
    });
    if (res.ok) refresh();
=======
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'};
      body: JSON.stringify({ action, reviewId })});
    if (res.ok) refresh()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Moderation</h1>

      <div className="enhanced-card">
        <label className="block text-sm mb-2">Admin Key</label>
        <input className="border p-2 rounded w-full" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder="Enter admin key" />
      </div>

<<<<<<< HEAD
      <section className='enhanced-card'>
        <h2 className='text-xl font-semibold mb-4'>Pending Reviews</h2>
        <div className='space-y-4'>
          {pending.map(r => (
            <div key={r.id} className='border rounded p-3'>
              <div className='text-sm text-gray-600 mb-1'>
                Project: {r.projectId} • To: {r.toRole} {r.toId}
              </div>
              <div className='font-medium'>
                {r.rating}★ — {r.text}
              </div>
              <div className='mt-2 flex gap-2'>
                <button
                  className='enhanced-button enhanced-button-primary'
                  onClick={() => moderate('approve', r.id)}
                >
                  Approve
                </button>
                <button
                  className='enhanced-button enhanced-button-secondary'
                  onClick={() => moderate('remove', r.id)}
                >
                  Remove
                </button>
=======
      
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'
    },
    body: JSON.stringify({ action, reviewId })});
    if (res.ok) refresh()
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Moderation</h1>

      <div className="enhanced-card">
        <label className="block text-sm mb-2">Admin Key</label>
        <input className="border p-2 rounded w-full" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder="Enter admin key" />
      </div>

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
        <div className="space-y-4">
          {pending.map((r) => (
            <div key={r.id} className="border rounded p-3">
              <div className="text-sm text-gray-600 mb-1">Project: {r.projectId} • To: {r.toRole} {r.toId}</div>
              <div className="font-medium">{r.rating}★ — {r.text}</div>
              <div className="mt-2 flex gap-2">
                <button className="enhanced-button enhanced-button-primary" onClick={() => moderate('approve', r.id)}>Approve</button>
                <button className="enhanced-button enhanced-button-secondary" onClick={() => moderate('remove', r.id)}>Remove</button>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            </div>
          ))}
          {!pending.length && <div>No pending reviews.</div>}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </section>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )
};

<<<<<<< HEAD
export default AdminReviewsPage;
=======
      </section>

      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )
};

export default AdminReviewsPage;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default AdminReviewsPage;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
