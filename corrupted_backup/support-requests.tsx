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

