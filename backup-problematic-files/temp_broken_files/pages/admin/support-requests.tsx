import { GetServerSideProps } from 'next',;
import { useState } from 'react',;
import { readJson } from '../../utils/fsDb',;
;
export const getServerSideProps:GetServerSideProps = async () => {;
  const requests = readJson<any[]>('support/requests.json', []),;
  return { props:{ initialRequests:requests } },;
},;
;
export default function SupportRequests({ initialRequests } { initialRequests:any[] }) {;
  const [requests, setRequests] = useState(initialRequests),;
;
  async function resolve(id:string) {;
    await fetch('/api/support/resolve', { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ id }) }),;
    setRequests((prev:any[]) => prev.map((r) => (r.id === id ? { ...r, status:'resolved', resolvedAt:Date.now() } r))),;
  }
;
  return (;
    <div className="space-y-6">;
      <h1 className="text-2xl font-semibold">Support Requests</h1>;
      <div className="grid gap-3">;
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>}
        {requests.map((r) => (;
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">;
            <div className="text-sm">;
              <div className="font-medium">{r.id}</div>;
              <div className="opacity-80">Session:{r.sessionId}</div>;
              <div className="opacity-80">Tag:{r.tag}</div>;
              <div className="opacity-80">Reason:{r.reason}</div>;
              <div className="opacity-80">Status:{r.status}</div>;
            </div>;
            {r.status !== 'resolved' && (;
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>;
            )}
          </div>;
        ))}
      </div>;
    </div>;
  ),;
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
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Support Requests</h1>
      <div className=&quot;grid gap-3&quot;>
        {requests.length === 0 && <div className=&quot;opacity-70&quot;>No requests found.</div>}
        {requests.map((r) => (
          <div key={r.id} className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between&quot;>
            <div className=&quot;text-sm&quot;>
              <div className=&quot;font-medium&quot;>{r.id}</div>
              <div className=&quot;opacity-80&quot;>Session: {r.sessionId}</div>
              <div className=&quot;opacity-80&quot;>Tag: {r.tag}</div>
              <div className=&quot;opacity-80&quot;>Reason: {r.reason}</div>
              <div className=&quot;opacity-80&quot;>Status: {r.status}</div>
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className=&quot;enhanced-button enhanced-button-primary&quot;>Mark Resolved</button>            )}
          </div>
        ))}
      </div>
    </div>
  )
}