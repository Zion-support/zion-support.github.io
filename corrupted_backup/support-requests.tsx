import { GetServerSideProps } from 'next',;
import { useState } from 'react',;
import { readJson } from '../../utils/fsDb',;
export const getServerSideProps: GetServerSideProps = async () => {;
  const requests = readJson<any[]>('support/requests.json', []),;
  return { props: { initialRequests: requests } }
},;
export default function SupportRequests({ initialRequests }: { initialRequests: any[] }) {;
  const [requests, setRequests] = useState(initialRequests);
  async function resolve(id: string) {;
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)));
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface SupportRequest {
  id: string;
  userId: string;
  userName: string;
  email: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  response?: string;
}

export default function SupportRequests({
  initialRequests,
}: {
  initialRequests: any[];
}) {
  const [requests, setRequests] = useState(initialRequests);

  async function resolve(id: string) {
    await fetch('/api/support/resolve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setRequests((prev: any[]) =>
      prev.map(r =>
        r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r
      )
    );
const mockSupportRequests: SupportRequest[] = [
  {
    id: '1',
    userId: 'user123',
    userName: 'John Doe',
    email: 'john@example.com',
    subject: 'Login Issues',
    message: 'I am unable to log into my account. Getting an error message every time I try.',
    status: 'open',
    priority: 'high',
    category: 'Technical',
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    userId: 'user456',
    userName: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Billing Question',
    message: 'I was charged twice for the same service. Can you please help me resolve this?',
    status: 'in_progress',
    priority: 'medium',
    category: 'Billing',
    createdAt: '2025-01-14T15:30:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
    assignedTo: 'support_agent_1'
  },
  {
    id: '3',
    userId: 'user789',
    userName: 'Mike Johnson',
    email: 'mike@example.com',
    subject: 'Feature Request',
    message: 'Would it be possible to add dark mode to the dashboard?',
    status: 'resolved',
    priority: 'low',
    category: 'Feature Request',
    createdAt: '2025-01-13T09:15:00Z',
    updatedAt: '2025-01-14T16:45:00Z',
    assignedTo: 'support_agent_2',
    response: 'Thank you for your suggestion! We have added dark mode to our roadmap and will implement it in the next update.'
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Support Requests</h1>
      <div className="grid gap-3">
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>}
        {requests.map((r) => (
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
            <div className="text-sm">
              <div className="font-medium">{r.id}</div>
              <div className="opacity-80">Session: {r.sessionId}</div>
              <div className="opacity-80">Tag: {r.tag}</div>
              <div className="opacity-80">Reason: {r.reason}</div>
              <div className="opacity-80">Status: {r.status}</div>
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Support Requests</h1>
      <div className='grid gap-3'>
        {requests.length === 0 && (
          <div className='opacity-70'>No requests found.</div>
        )}
        {requests.map(r => (
          <div
            key={r.id}
            className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between'
          >
            <div className='text-sm'>
              <div className='font-medium'>{r.id}</div>
              <div className='opacity-80'>Session: {r.sessionId}</div>
              <div className='opacity-80'>Tag: {r.tag}</div>
              <div className='opacity-80'>Reason: {r.reason}</div>
              <div className='opacity-80'>Status: {r.status}</div>
            </div>
            {r.status !== 'resolved' && (
              <button
                onClick={() => resolve(r.id)}
                className='enhanced-button enhanced-button-primary'
              >
                Mark Resolved
              </button>
            )}
    <>
      <Head>
        <title>Admin Support Requests - Zion Tech Group</title>
        <meta name="description" content="Manage customer support requests" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Support Requests</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Requests</h3>
            <p className="text-2xl font-bold">{requests.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Open</h3>
            <p className="text-2xl font-bold text-red-600">{openRequests.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">In Progress</h3>
            <p className="text-2xl font-bold text-yellow-600">{inProgressRequests.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Resolved</h3>
            <p className="text-2xl font-bold text-green-600">{resolvedRequests.length}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Status Filter</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Statuses</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>
            )}
          </div>;
        ))}
      </div>;
    </div>;
  );
}
}
};

export default AdminSupportRequestsPage;
