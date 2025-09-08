









      return false

import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Search, Filter } from "lucide-react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;



// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id: "SR-1001",;

    user: "john && john.doe@example && example.com",;

    userId: "user-123",;
    issue: "Cannot access account after password reset",;
    status: "open",;
    priority: "high",;
    createdAt: "2023-12-15T14:30:00Z",;
    lastUpdated: "2023-12-15T15:45:00Z",;
    category: "authentication";

  };
  {;
    id: "SR-1002",;
    user: "sarah && sarah.smith@company && company.co",;

    userId: "user-456",;
    issue: "Payment failed but funds were deducted",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-14T09:15:00Z",;
    lastUpdated: "2023-12-15T13:20:00Z",;
    category: "billing";

  };
  {;
    id: "SR-1003",;
    user: "tech && tech.guru@startup && startup.io",;

    userId: "user-789",;
    issue: "Unable to download invoice PDF",;
    status: "open",;
    priority: "medium",;
    createdAt: "2023-12-15T11:00:00Z",;
    lastUpdated: "2023-12-15T11:00:00Z",;
    category: "billing";

  };
  {;
    id: "SR-1004",;
    user: "developer@codelab && codelab.dev",;

    userId: "user-235",;
    issue: "API integration documentation is outdated",;
    status: "open",;
    priority: "low",;

    createdAt: "2023-12-13T16:45:00Z", ;
    lastUpdated: "2023-12-13T16:45:00Z",;
    category: "api";
  };
  {;
    id: "SR-1005",;
    user: "maria && maria.rodriguez@design && design.co",;

    userId: "user-567",;
    issue: "Dispute with freelancer over delivered work quality",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-12T10:30:00Z",;
    lastUpdated: "2023-12-15T09:15:00Z",;
    category: "disputes";

  };
  {;
    id: "SR-1006",;
    user: "alex && alex.wong@datacompany && datacompany.com",;

    userId: "user-890",;
    issue: "Profile verification pending for over 7 days",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-08T13:20:00Z",;
    lastUpdated: "2023-12-15T08:30:00Z",;
    category: "verification";

  };
  {;
    id: "SR-1007",;
    user: "jamie && jamie.taylor@tech && tech.org",;

    userId: "user-345",;
    issue: "Cannot upload portfolio images",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-10T15:10:00Z",;
    lastUpdated: "2023-12-13T11:25:00Z",;
    category: "profile";
  }

];

export default function SupportRequests() {;


  const [searchQuery, setSearchQuery] = useState(""),;
  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),;
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),;
  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (searchQuery &&;
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {;
      return false;












    return true;
  });

  const resetFilters = () => {;
    setSearchQuery("");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
  return (
    <AppLayout>;
      <SEO
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"

import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Search, Filter } from "lucide-react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
;
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id:"SR-1001",;
    user:"john.doe@example.com",;
    userId:"user-123",;
    issue:"Cannot access account after password reset",;
    status:"open",;
    priority:"high",;
    createdAt:"2023-12-15T14:30:00Z",;
    lastUpdated:"2023-12-15T15:45:00Z",;
    category:"authentication";
  },;
  {;
    id:"SR-1002",;
    user:"sarah.smith@company.co",;
    userId:"user-456",;
    issue:"Payment failed but funds were deducted",;
    status:"in-progress",;
    priority:"high",;
    createdAt:"2023-12-14T09:15:00Z",;
    lastUpdated:"2023-12-15T13:20:00Z",;
    category:"billing";
  },;
  {;
    id:"SR-1003",;
    user:"tech.guru@startup.io",;
    userId:"user-789",;
    issue:"Unable to download invoice PDF",;
    status:"open",;
    priority:"medium",;
    createdAt:"2023-12-15T11:00:00Z",;
    lastUpdated:"2023-12-15T11:00:00Z",;
    category:"billing";
  },;
  {;
    id:"SR-1004",;
    user:"developer@codelab.dev",;
    userId:"user-235",;
    issue:"API integration documentation is outdated",;
    status:"open",;
    priority:"low",;
    createdAt:"2023-12-13T16:45:00Z", ;
    lastUpdated:"2023-12-13T16:45:00Z",;
    category:"api";
  },;
  {;
    id:"SR-1005",;
    user:"maria.rodriguez@design.co",;
    userId:"user-567",;
    issue:"Dispute with freelancer over delivered work quality",;
    status:"in-progress",;
    priority:"high",;
    createdAt:"2023-12-12T10:30:00Z",;
    lastUpdated:"2023-12-15T09:15:00Z",;
    category:"disputes";
  },;
  {;
    id:"SR-1006",;
    user:"alex.wong@datacompany.com",;
    userId:"user-890",;
    issue:"Profile verification pending for over 7 days",;
    status:"resolved",;
    priority:"medium",;
    createdAt:"2023-12-08T13:20:00Z",;
    lastUpdated:"2023-12-15T08:30:00Z",;
    category:"verification";
  },;
  {;
    id:"SR-1007",;
    user:"jamie.taylor@tech.org",;
    userId:"user-345",;
    issue:"Cannot upload portfolio images",;
    status:"resolved",;
    priority:"medium",;
    createdAt:"2023-12-10T15:10:00Z",;
    lastUpdated:"2023-12-13T11:25:00Z",;
    category:"profile";
  }
],;
;
export default function SupportRequests() {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),;
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),;
  ;
  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (searchQuery && ;
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {;
      return false,;
    }
    ;
    // Apply status filter;
    if (statusFilter && request.status !== statusFilter) {;
      return false,;
    }
    ;
    // Apply priority filter;
    if (priorityFilter && request.priority !== priorityFilter) {;
      return false,;
    }
    ;
    // Apply category filter;
    if (categoryFilter && request.category !== categoryFilter) {;
      return false,;
    }
    ;
    return true,;
  }),;
  ;
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,;
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,;
  const totalCount = MOCK_SUPPORT_REQUESTS.length,;
  ;
  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setPriorityFilter(null),;
    setCategoryFilter(null),;
  },;
  ;
  return (;
    <AppLayout>;
      <SEO ;
        title="Support Requests | Admin Dashboard";
        description="Manage and track user support requests and issues";

          ;
          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;

        ;

          ;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>;
              <CardDescription>In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          ;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>;
              <CardDescription>Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          ;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        ;
        <Tabs defaultValue="all" className="mb-8">;
          <TabsList>;
            <TabsTrigger value="all">All Requests</TabsTrigger>;
            <TabsTrigger value="escalated">Escalated</TabsTrigger>;
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>;
            <TabsTrigger value="need-response">Need Response</TabsTrigger>;
          </TabsList>;
          ;
          <TabsContent value="all" className="mt-6">;
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">;
              <div className="relative flex-1">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, user or issue..."






                              ? 'secondary'
                              : 'outline'
                          }>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}



                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;

                        </TableCell>;
                      </TableRow>;
                    ))}



