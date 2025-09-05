
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Search, Filter } from &quot;lucide-react&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { SEO } from &quot;@/components/SEO&quot;;

// Mock data for support requests
const MOCK_SUPPORT_REQUESTS = [
  {
    id: &quot;SR-1001&quot;,
    user: &quot;john.doe@example.com&quot;,
    userId: &quot;user-123&quot;,
    issue: &quot;Cannot access account after password reset&quot;,
    status: &quot;open&quot;,
    priority: &quot;high&quot;,
    createdAt: &quot;2023-12-15T14:30:00Z&quot;,
    lastUpdated: &quot;2023-12-15T15:45:00Z&quot;,
    category: &quot;authentication&quot;
  },
  {
    id: &quot;SR-1002&quot;,
    user: &quot;sarah.smith@company.co&quot;,
    userId: &quot;user-456&quot;,
    issue: &quot;Payment failed but funds were deducted&quot;,
    status: &quot;in-progress&quot;,
    priority: &quot;high&quot;,
    createdAt: &quot;2023-12-14T09:15:00Z&quot;,
    lastUpdated: &quot;2023-12-15T13:20:00Z&quot;,
    category: &quot;billing&quot;
  },
  {
    id: &quot;SR-1003&quot;,
    user: &quot;tech.guru@startup.io&quot;,
    userId: &quot;user-789&quot;,
    issue: &quot;Unable to download invoice PDF&quot;,
    status: &quot;open&quot;,
    priority: &quot;medium&quot;,
    createdAt: &quot;2023-12-15T11:00:00Z&quot;,
    lastUpdated: &quot;2023-12-15T11:00:00Z&quot;,
    category: &quot;billing&quot;
  },
  {
    id: &quot;SR-1004&quot;,
    user: &quot;developer@codelab.dev&quot;,
    userId: &quot;user-235&quot;,
    issue: &quot;API integration documentation is outdated&quot;,
    status: &quot;open&quot;,
    priority: &quot;low&quot;,
    createdAt: &quot;2023-12-13T16:45:00Z&quot;, 
    lastUpdated: &quot;2023-12-13T16:45:00Z&quot;,
    category: &quot;api&quot;
  },
  {
    id: &quot;SR-1005&quot;,
    user: &quot;maria.rodriguez@design.co&quot;,
    userId: &quot;user-567&quot;,
    issue: &quot;Dispute with freelancer over delivered work quality&quot;,
    status: &quot;in-progress&quot;,
    priority: &quot;high&quot;,
    createdAt: &quot;2023-12-12T10:30:00Z&quot;,
    lastUpdated: &quot;2023-12-15T09:15:00Z&quot;,
    category: &quot;disputes&quot;
  },
  {
    id: &quot;SR-1006&quot;,
    user: &quot;alex.wong@datacompany.com&quot;,
    userId: &quot;user-890&quot;,
    issue: &quot;Profile verification pending for over 7 days&quot;,
    status: &quot;resolved&quot;,
    priority: &quot;medium&quot;,
    createdAt: &quot;2023-12-08T13:20:00Z&quot;,
    lastUpdated: &quot;2023-12-15T08:30:00Z&quot;,
    category: &quot;verification&quot;
  },
  {
    id: &quot;SR-1007&quot;,
    user: &quot;jamie.taylor@tech.org&quot;,
    userId: &quot;user-345&quot;,
    issue: &quot;Cannot upload portfolio images&quot;,
    status: &quot;resolved&quot;,
    priority: &quot;medium&quot;,
    createdAt: &quot;2023-12-10T15:10:00Z&quot;,
    lastUpdated: &quot;2023-12-13T11:25:00Z&quot;,
    category: &quot;profile&quot;
  }
];

export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery && 
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply status filter
    if (statusFilter && request.status !== statusFilter) {
      return false;
    }
    
    // Apply priority filter
    if (priorityFilter && request.priority !== priorityFilter) {
      return false;
    }
    
    // Apply category filter
    if (categoryFilter && request.category !== categoryFilter) {
      return false;
    }
    
    return true;
  });
  
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length;
  const totalCount = MOCK_SUPPORT_REQUESTS.length;
  
  const resetFilters = () => {
    setSearchQuery("&quot;);
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
  
  return (
    <AppLayout>
      <SEO 
        title=&quot;Support Requests | Admin Dashboard&quot;
        description=&quot;Manage and track user support requests and issues&quot;
      />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-start md:items-center justify-between mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&quot;>
              Support Requests
            </h1>
            <p className=&quot;text-zion-slate-light mt-2&quot;>
              Manage and respond to user support requests and issues
            </p>
          </div>
          
          <div className=&quot;mt-4 md:mt-0&quot;>
            <Button className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;>
              New Support Case
            </Button>
          </div>
        </div>
        
        {/* Status Cards */}
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8&quot;>
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{totalCount}</CardTitle>
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <Tabs defaultValue=&quot;all&quot; className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;all&quot;>All Requests</TabsTrigger>
            <TabsTrigger value=&quot;escalated&quot;>Escalated</TabsTrigger>
            <TabsTrigger value=&quot;ai-flagged&quot;>AI Flagged</TabsTrigger>
            <TabsTrigger value=&quot;need-response&quot;>Need Response</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;all&quot; className=&quot;mt-6&quot;>
            {/* Search and Filters */}
            <div className=&quot;flex flex-col md:flex-row gap-4 mb-6&quot;>
              <div className=&quot;relative flex-1&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400&quot; />
                <Input
                  placeholder=&quot;Search by ID, user or issue...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;pl-10&quot;
                />
              </div>
              
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]&quot;>
                  <SelectValue placeholder=&quot;Status&quot; />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="&quot;>All Statuses</SelectItem>
                  <SelectItem value=&quot;open&quot;>Open</SelectItem>
                  <SelectItem value=&quot;in-progress&quot;>In Progress</SelectItem>
                  <SelectItem value=&quot;resolved&quot;>Resolved</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]&quot;>
                  <SelectValue placeholder=&quot;Priority&quot; />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="&quot;>All Priorities</SelectItem>
                  <SelectItem value=&quot;high&quot;>High</SelectItem>
                  <SelectItem value=&quot;medium&quot;>Medium</SelectItem>
                  <SelectItem value=&quot;low&quot;>Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]&quot;>
                  <SelectValue placeholder=&quot;Category&quot; />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="&quot;>All Categories</SelectItem>
                  <SelectItem value=&quot;authentication&quot;>Authentication</SelectItem>
                  <SelectItem value=&quot;billing&quot;>Billing</SelectItem>
                  <SelectItem value=&quot;api&quot;>API</SelectItem>
                  <SelectItem value=&quot;disputes&quot;>Disputes</SelectItem>
                  <SelectItem value=&quot;verification&quot;>Verification</SelectItem>
                  <SelectItem value=&quot;profile&quot;>Profile</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant=&quot;outline&quot; onClick={resetFilters} className=&quot;md:w-auto&quot;>
                <Filter className=&quot;h-4 w-4 mr-2&quot; /> Reset Filters
              </Button>
            </div>
            
            {/* Support Requests Table */}
            <Card>
              <CardContent className=&quot;p-0&quot;>
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
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className=&quot;font-medium&quot;>{request.id}</TableCell>
                        <TableCell>{request.user}</TableCell>
                        <TableCell className=&quot;max-w-xs truncate&quot;>{request.issue}</TableCell>
                        <TableCell>
                          <Badge variant={
                            request.status === 'open' 
                              ? 'default' 
                              : request.status === 'in-progress' 
                              ? 'secondary' 
                              : 'outline'
                          }>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            request.priority === 'high' 
                              ? 'destructive' 
                              : request.priority === 'medium' 
                              ? 'default' 
                              : 'outline'
                          }>
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.category}</TableCell>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button variant=&quot;ghost&quot; size=&quot;sm&quot;>View</Button>
                          <Button variant=&quot;ghost&quot; size=&quot;sm&quot;>Assign</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;escalated&quot; className=&quot;mt-6&quot;>
            <div className=&quot;bg-zion-blue-light/20 p-8 rounded-lg text-center&quot;>
              <h3 className=&quot;text-xl font-medium mb-4&quot;>Escalated Requests</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                This tab will show support requests that have been escalated by agents or the system.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;ai-flagged&quot; className=&quot;mt-6&quot;>
            <div className=&quot;bg-zion-blue-light/20 p-8 rounded-lg text-center&quot;>
              <h3 className=&quot;text-xl font-medium mb-4&quot;>AI Flagged Issues</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                This tab shows issues that our AI system has identified as requiring human attention.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;need-response&quot; className=&quot;mt-6&quot;>
            <div className=&quot;bg-zion-blue-light/20 p-8 rounded-lg text-center&quot;>
              <h3 className=&quot;text-xl font-medium mb-4&quot;>Awaiting Response</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                These support requests have been waiting for an agent response for over 24 hours.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
