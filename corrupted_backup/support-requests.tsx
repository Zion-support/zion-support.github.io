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
] 

const AdminSupportRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<SupportRequest[]>([]) 
  const [loading, setLoading] = useState(true) 
  const [filter, setFilter] = useState<'all' | 'open' | 'in_progress' | 'resolved' | 'closed'>('all') 
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high' | 'urgent'>('all') 
  const [selectedRequest, setSelectedRequest] = useState<SupportRequest | null>(null) 

  useEffect(() => {
    // Simulate loading support requests
    setTimeout(() => {
      setRequests(mockSupportRequests) 
      setLoading(false) 
    }, 1000) 
  }, []) 

  const handleStatusChange = (requestId: string, newStatus: SupportRequest['status']) => {
    setRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, status: newStatus, updatedAt: new Date().toISOString() }
          : request
      )
    ) 
  } 

  const handleAssign = (requestId: string, assignedTo: string) => {
    setRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, assignedTo, status: 'in_progress' as const, updatedAt: new Date().toISOString() }
          : request
      )
    ) 
  } 

  const filteredRequests = requests.filter(request => {
    const statusMatch = filter === 'all' || request.status === filter 
    const priorityMatch = priorityFilter === 'all' || request.priority === priorityFilter 
    return statusMatch && priorityMatch 
  }) 

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800' 
      case 'in_progress': return 'bg-yellow-100 text-yellow-800' 
      case 'resolved': return 'bg-green-100 text-green-800' 
      case 'closed': return 'bg-gray-100 text-gray-800' 
      default: return 'bg-gray-100 text-gray-800' 
    }
  } 

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-200 text-red-900' 
      case 'high': return 'bg-orange-100 text-orange-800' 
      case 'medium': return 'bg-yellow-100 text-yellow-800' 
      case 'low': return 'bg-green-100 text-green-800' 
      default: return 'bg-gray-100 text-gray-800' 
    }
  } 

  const openRequests = requests.filter(r => r.status === 'open') 
  const inProgressRequests = requests.filter(r => r.status === 'in_progress') 
  const resolvedRequests = requests.filter(r => r.status === 'resolved') 

  return (
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
};
