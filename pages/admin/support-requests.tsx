import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
export const getServerSideProps: GetServerSideProps = async () => {
  const requests = readJson<any[]>('support/requests.json', []);
  return { props: { initialRequests: requests } }
};
ursor/integrate-build-improve-and-re-verify-b76c

export default function SupportRequests({ initialRequests }: { initialRequests: any[] }) {
  const [requests, setRequests] = useState(initialRequests);

  async function resolve(id: string) {
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) }),
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)))
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
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>
            )}
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
                className="w-full p-2 border rounded-md"><option value="all">All Statuses</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Priority Filter</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as any)}
                className="w-full p-2 border rounded-md"><option value="all">All Priorities</option>
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
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
export const getServerSideProps: GetServerSideProps = async () => {
  const requests = readJson<any[]>('support/requests.json', []);
  return { props: { initialRequests: requests } }
};

export default function SupportRequests({ initialRequests }: { initialRequests: any[] }) {
  const [requests, setRequests] = useState(initialRequests);

  async function resolve(id: string) {
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) }),
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)))
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
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>
            )}
          </div>
ursor/integrate-build-improve-and-re-verify-b76c
        ))}
      </div>
    </div>
  )
}
}
ursor/integrate-build-improve-and-re-verify-b76c
