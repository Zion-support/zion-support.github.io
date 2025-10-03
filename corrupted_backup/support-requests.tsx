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
              <label className="text-left">Priority Filter</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as any)}
                className="text-left"
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
          <div className="text-left">Loading support requests...</div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-left">
            No support requests found matching your criteria.
          </div>
        ) : (
          <div className="text-left">
            {filteredRequests.map((request) => (
              <div key={request.id} className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <div className="text-left">
                      <h3 className="text-left">{request.subject}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(request.status)}`}>
                        {request.status.replace('_', ' ')}
                      <
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      <
                    </div>
                    
                    <div className="text-left">
                      <p><strong>From:</strong> {request.userName} ({request.email})</p>
                      <p><strong>Category:</strong> {request.category}</p>
                      {request.assignedTo && (
                        <p><strong>Assigned to:</strong> {request.assignedTo}</p>
                      )}
                    </div>
                    
                    <p className="text-left">{request.message}</p>
                    
                    {request.response && (
                      <div className="text-left">
                        <p className="text-left">Response:</p>
                        <p className="text-left">{request.response}</p>
                      </div>
                    )}
                    
                    <div className="text-left">
                      <span>Created: {new Date(request.createdAt).toLocaleString()}<
                      <span>Updated: {new Date(request.updatedAt).toLocaleString()}<
                    </div>
                  </div>
                  
                  <div className="text-left">
                    {request.status === 'open' && (
                      <>
                        <button
                          onClick={() => handleAssign(request.id, 'current_user')}
                          className="text-left"
                        >
                          Assign to Me
                        </button>
                        <button
                          onClick={() => handleStatusChange(request.id, 'in_progress')}
                          className="text-left"
                        >
                          Start Progress
                        </button>
                      </>
                    )}
                    {request.status === 'in_progress' && (
                      <button
                        onClick={() => handleStatusChange(request.id, 'resolved')}
                        className="text-left"
                      >
                        Mark Resolved
                      </button>
                    )}
                    {request.status === 'resolved' && (
                      <button
                        onClick={() => handleStatusChange(request.id, 'closed')}
                        className="text-left"
                      >
                        Close
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedRequest(request)}
                      className="text-left"
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

