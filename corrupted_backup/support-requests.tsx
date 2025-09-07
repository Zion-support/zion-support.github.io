<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
  }
];

const AdminSupportRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<SupportRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'open' | 'in_progress' | 'resolved' | 'closed'>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high' | 'urgent'>('all');
  const [selectedRequest, setSelectedRequest] = useState<SupportRequest | null>(null);

  useEffect(() => {
    // Simulate loading support requests
    setTimeout(() => {
      setRequests(mockSupportRequests);
      setLoading(false);
    }, 1000);
  }, []);

  const handleStatusChange = (requestId: string, newStatus: SupportRequest['status']) => {
    setRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, status: newStatus, updatedAt: new Date().toISOString() }
          : request
      )
    );
  };

  const handleAssign = (requestId: string, assignedTo: string) => {
    setRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, assignedTo, status: 'in_progress' as const, updatedAt: new Date().toISOString() }
          : request
      )
    );
  };

  const filteredRequests = requests.filter(request => {
    const statusMatch = filter === 'all' || request.status === filter;
    const priorityMatch = priorityFilter === 'all' || request.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-200 text-red-900';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const openRequests = requests.filter(r => r.status === 'open');
  const inProgressRequests = requests.filter(r => r.status === 'in_progress');
  const resolvedRequests = requests.filter(r => r.status === 'resolved');

  return (

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
            <div>
              <label className="block text-sm font-medium mb-2">Priority Filter</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as any)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Requests List */}
        {loading ? (
          <div className="text-center py-8">Loading support requests...</div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No support requests found matching your criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{request.subject}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(request.status)}`}>
                        {request.status.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      <p><strong>From:</strong> {request.userName} ({request.email})</p>
                      <p><strong>Category:</strong> {request.category}</p>
                      {request.assignedTo && (
                        <p><strong>Assigned to:</strong> {request.assignedTo}</p>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-3">{request.message}</p>
                    
                    {request.response && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-3">
                        <p className="text-sm font-medium text-blue-800 mb-1">Response:</p>
                        <p className="text-sm text-blue-700">{request.response}</p>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Created: {new Date(request.createdAt).toLocaleString()}</span>
                      <span>Updated: {new Date(request.updatedAt).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    {request.status === 'open' && (
                      <>
                        <button
                          onClick={() => handleAssign(request.id, 'current_user')}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                          Assign to Me
                        </button>
                        <button
                          onClick={() => handleStatusChange(request.id, 'in_progress')}
                          className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                        >
                          Start Progress
                        </button>
                      </>
                    )}
                    {request.status === 'in_progress' && (
                      <button
                        onClick={() => handleStatusChange(request.id, 'resolved')}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Mark Resolved
                      </button>
                    )}
                    {request.status === 'resolved' && (
                      <button
                        onClick={() => handleStatusChange(request.id, 'closed')}
                        className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                      >
                        Close
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedRequest(request)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
