
import React, {_useState} from "react";

// Mock data for support requests
const _MOCK_SUPPORT_REQUESTS = [
  {_id: "SR-1001", _user: "john.doe@example.com", _userId: "user-123", _issue: "Cannot access account after password reset", _status: "open", _priority: "high", _createdAt: "2023-12-15T14:30:00Z", _lastUpdated: "2023-12-15T15:45:00Z", _category: "authentication"},
  {_id: "SR-1002", _user: "sarah.smith@company.co", _userId: "user-456", _issue: "Payment failed but funds were deducted", _status: "in-progress", _priority: "high", _createdAt: "2023-12-14T09:15:00Z", _lastUpdated: "2023-12-15T13:20:00Z", _category: "billing"},
  {_id: "SR-1003", _user: "tech.guru@startup.io", _userId: "user-789", _issue: "Unable to download invoice PDF", _status: "open", _priority: "medium", _createdAt: "2023-12-15T11:00:00Z", _lastUpdated: "2023-12-15T11:00:00Z", _category: "billing"},
  {_id: "SR-1004", _user: "developer@codelab.dev", _userId: "user-235", _issue: "API integration documentation is outdated", _status: "open", _priority: "low", _createdAt: "2023-12-13T16:45:00Z", _lastUpdated: "2023-12-13T16:45:00Z", _category: "api"},
  {_id: "SR-1005", _user: "maria.rodriguez@design.co", _userId: "user-567", _issue: "Dispute with freelancer over delivered work quality", _status: "in-progress", _priority: "high", _createdAt: "2023-12-12T10:30:00Z", _lastUpdated: "2023-12-15T09:15:00Z", _category: "disputes"},
  {_id: "SR-1006", _user: "alex.wong@datacompany.com", _userId: "user-890", _issue: "Profile verification pending for over 7 days", _status: "resolved", _priority: "medium", _createdAt: "2023-12-08T13:20:00Z", _lastUpdated: "2023-12-15T08:30:00Z", _category: "verification"},
  {_id: "SR-1007", _user: "jamie.taylor@tech.org", _userId: "user-345", _issue: "Cannot upload portfolio images", _status: "resolved", _priority: "medium", _createdAt: "2023-12-10T15:10:00Z", _lastUpdated: "2023-12-13T11:25:00Z", _category: "profile"}
];

export default function SupportRequests() {_const [searchQuery, _setSearchQuery] = useState("");
  const [statusFilter, _setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, _setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, _setCategoryFilter] = useState<string | null>(null);
  
  // Apply filters to the request data
  const _filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery && 
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;}
    
    // Apply status filter
    if (statusFilter && request.status !== statusFilter) {_return false;}
    
    // Apply priority filter
    if (priorityFilter && request.priority !== priorityFilter) {_return false;}
    
    // Apply category filter
    if (categoryFilter && request.category !== categoryFilter) {_return false;}
    
    return true;
  });
  
  // Count by status for the summary dashboard
  const _openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length;
  const _inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length;
  const _resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length;
  const _totalCount = MOCK_SUPPORT_REQUESTS.length;
  
  const _resetFilters = () => {_setSearchQuery("");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);};
  
  return (_<AppLayout>
      <SEO 
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Support Requests
            </h1>
            <p className="text-zion-slate-light mt-2">
              Manage and respond to user support requests and issues
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-zion-purple hover:bg-zion-purple-light">
              New Support Case
            </Button>
          </div>
        </div>
        
        {_/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{_openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{_inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{_resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{_totalCount}</CardTitle>
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {_/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, _user or issue..."
                  value={_searchQuery}
                  onChange={_(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={_statusFilter || ""} onValueChange={_value => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={_priorityFilter || ""} onValueChange={_value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={_categoryFilter || ""} onValueChange={_value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="authentication">Authentication</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="disputes">Disputes</SelectItem>
                  <SelectItem value="verification">Verification</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" onClick={_resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </div>
            
            {_/* Support Requests Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {_filteredRequests.map(_(request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{_request.id}</TableCell>
                        <TableCell>{_request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{_request.issue}</TableCell>
                        <TableCell>
                          <Badge variant={_request.status === 'open' 
                              ? 'default' 
                              : request.status === 'in-progress' 
                              ? 'secondary' 
                              : 'outline'}>
                            {_request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={_request.priority === 'high' 
                              ? 'destructive' 
                              : request.priority === 'medium' 
                              ? 'default' 
                              : 'outline'}>
                            {_request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{_request.category}</TableCell>
                        <TableCell>{_new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{_new Date(request.lastUpdated).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Assign</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="escalated" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>
              <p className="text-zion-slate-light">
                This tab will show support requests that have been escalated by agents or the system.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-flagged" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>
              <p className="text-zion-slate-light">
                This tab shows issues that our AI system has identified as requiring human attention.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="need-response" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>
              <p className="text-zion-slate-light">
                These support requests have been waiting for an agent response for over 24 hours.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
