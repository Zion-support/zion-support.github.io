import React, { useState } from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import SEO from "@/components/SEO"
//[^;]*
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id: "SR-1001",user: "john.doe@example.com",userId: "user-123",issue: "Cannot access account after password reset",status: "open",priority: "high",createdAt: "2023-12-15T14:30:00Z",lastUpdated: "2023-12-15T15:45:00Z",category: "authentication"
  };
  {;
    id: "SR-1002",user: "sarah.smith@company.co",userId: "user-456",issue: "Payment failed but funds were deducted",status: "in-progress",priority: "high",createdAt: "2023-12-14T09:15:00Z",lastUpdated: "2023-12-15T13:20:00Z",category: "billing"
  };
  {;
    id: "SR-1003",user: "tech.guru@startup.io",userId: "user-789",issue: "Unable to download invoice PDF",status: "open",priority: "medium",createdAt: "2023-12-15T11:00:00Z",lastUpdated: "2023-12-15T11:00:00Z",category: "billing"
  };
  {;
    id: "SR-1004",user: "developer@codelab.dev",userId: "user-235",issue: "API integration documentation is outdated",status: "open",priority: "low",createdAt: "2023-12-13T16:45:00Z",lastUpdated: "2023-12-13T16:45:00Z",category: "api"
  };
  {;
    id: "SR-1005",user: "maria.rodriguez@design.co",userId: "user-567",issue: "Dispute with freelancer over delivered work quality",status: "in-progress",priority: "high",createdAt: "2023-12-12T10:30:00Z",lastUpdated: "2023-12-15T09:15:00Z",category: "disputes"
  };
  {;
    id: "SR-1006",user: "alex.wong@datacompany.com",userId: "user-890",issue: "Profile verification pending for over 7 days",status: "resolved",priority: "medium",createdAt: "2023-12-08T13:20:00Z",lastUpdated: "2023-12-15T08:30:00Z",category: "verification"
  };
  {;
    id: "SR-1007",user: "jamie.taylor@tech.org",userId: "user-345",issue: "Cannot upload portfolio images",status: "resolved",priority: "medium",createdAt: "2023-12-10T15:10:00Z",lastUpdated: "2023-12-13T11:25:00Z",category: "profile"
  };
];
export default function SupportRequests() {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),;
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),;

  //[^;]*
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {;
    //[^;]*
    if (searchQuery &&;
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {;
      return false,;
    };

    //[^;]*
    if (statusFilter && request.status !== statusFilter) {;&& request.status !== statusFilter) {; request.status !== statusFilter) {
      return false,;
    };

    //[^;]*
    if (priorityFilter && request.priority !== priorityFilter) {;&& request.priority !== priorityFilter) {; request.priority !== priorityFilter) {
      return false,;
    };

    //[^;]*
    if (categoryFilter && request.category !== categoryFilter) {;&& request.category !== categoryFilter) {; request.category !== categoryFilter) {
      return false,;
    };

    return true,;
  }),;

  //[^;]*
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length
  const totalCount = MOCK_SUPPORT_REQUESTS.length

  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setPriorityFilter(null)
    setCategoryFilter(null)
  };
  return (
    <>;
      <SEO;
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Support Requests;
            </[^>]*>
            <p className="text-zion-slate-light mt-2">;
              Manage and respond to user support requests and issues;
            </[^>]*>
          </[^>]*>

          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;
              New Support Case;
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Status Cards */};
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{openCount}</[^>]*>
              <CardDescription>Open Requests</[^>]*>
            </[^>]*>
          </[^>]*>

          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{inProgressCount}</[^>]*>
              <CardDescription>In Progress</[^>]*>
            </[^>]*>
          </[^>]*>

          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{resolvedCount}</[^>]*>
              <CardDescription>Resolved</[^>]*>
            </[^>]*>
          </[^>]*>

          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{totalCount}</[^>]*>
              <CardDescription>Total Requests</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <Tabs defaultValue="all" className="mb-8">;
          <TabsList>;
            <TabsTrigger value="all">All Requests</[^>]*>
            <TabsTrigger value="escalated">Escalated</[^>]*>
            <TabsTrigger value="ai-flagged">AI Flagged</[^>]*>
            <TabsTrigger value="need-response">Need Response</[^>]*>
          </[^>]*>

          <TabsContent value="all" className="mt-6">;
            {/* Search and Filters */};
            <div className="flex flex-col md:flex-row gap-4 mb-6">;
              <div className="relative flex-1">;
                <[^>]*/>
                <Input;
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery};
                  onChange={(e: any) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>

              <Select value={statusFilter || ""} onValueChange={(value: string) => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]">;
                  <[^>]*/>
                </[^>]*>
                <SelectContent>;
                  <SelectItem value="">All Statuses</[^>]*>
                  <SelectItem value="open">Open</[^>]*>
                  <SelectItem value="in-progress">In Progress</[^>]*>
                  <SelectItem value="resolved">Resolved</[^>]*>
                </[^>]*>
              </[^>]*>

              <Select value={priorityFilter || ""} onValueChange={(value: string) => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">;
                  <[^>]*/>
                </[^>]*>
                <SelectContent>;
                  <SelectItem value="">All Priorities</[^>]*>
                  <SelectItem value="high">High</[^>]*>
                  <SelectItem value="medium">Medium</[^>]*>
                  <SelectItem value="low">Low</[^>]*>
                </[^>]*>
              </[^>]*>

              <Select value={categoryFilter || ""} onValueChange={(value: string) => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">;
                  <[^>]*/>
                </[^>]*>
                <SelectContent>;
                  <SelectItem value="">All Categories</[^>]*>
                  <SelectItem value="authentication">Authentication</[^>]*>
                  <SelectItem value="billing">Billing</[^>]*>
                  <SelectItem value="api">API</[^>]*>
                  <SelectItem value="disputes">Disputes</[^>]*>
                  <SelectItem value="verification">Verification</[^>]*>
                  <SelectItem value="profile">Profile</[^>]*>
                </[^>]*>
              </[^>]*>

              <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
              </[^>]*>
            </[^>]*>

            {/* Support Requests Table */};
            <Card>;
              <CardContent className="p-0">;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead>ID</[^>]*>
                      <TableHead>User</[^>]*>
                      <TableHead>Issue</[^>]*>
                      <TableHead>Status</[^>]*>
                      <TableHead>Priority</[^>]*>
                      <TableHead>Category</[^>]*>
                      <TableHead>Created</[^>]*>
                      <TableHead>Last Updated</[^>]*>
                      <TableHead>Actions</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <TableBody>;
                    {filteredRequests.map((request) => (;
                      <TableRow key={request.id}>;
                        <TableCell className="font-medium">{request.id}</[^>]*>
                        <TableCell>{request.user}</[^>]*>
                        <TableCell className="max-w-xs truncate">{request.issue}</[^>]*>
                        <TableCell>;
                          <Badge variant={;
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
                              ? 'secondary'
                              : 'outline'
                          }>;
                            {request.status};
                          </[^>]*>
                        </[^>]*>
                        <TableCell>;
                          <Badge variant={;
                            request.priority === 'high'
                              ? 'destructive'
                              : request.priority === 'medium'
                              ? 'default'
                              : 'outline'
                          }>;
                            {request.priority};
                          </[^>]*>
                        </[^>]*>
                        <TableCell>{request.category}</[^>]*>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</[^>]*>
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</[^>]*>
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</[^>]*>
                          <Button variant="ghost" size="sm">Assign</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <TabsContent value="escalated" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">Escalated Requests</[^>]*>
              <p className="text-zion-slate-light">;
                This tab will show support requests that have been escalated by agents or the system.;
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <TabsContent value="ai-flagged" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</[^>]*>
              <p className="text-zion-slate-light">;
                This tab shows issues that our AI system has identified as requiring human attention.;
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <TabsContent value="need-response" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">Awaiting Response</[^>]*>
              <p className="text-zion-slate-light">;
                These support requests have been waiting for an agent response for over 24 hours.;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
