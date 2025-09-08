import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Search, Filter } from "lucide-react",
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Mock data for support requests

const MOCK_SUPPORT_REQUESTS = [
  {
    id: "SR-1001"
    user: "john.doe@example.com"
    userId: "user-123"
    issue: "Cannot access account after password reset"
    status: "open"
    priority: "high"
    createdAt: "2023-12-15T14:30:00Z"
    lastUpdated: "2023-12-15T15:45:00Z"
    category: "authentication"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "SR-1002"
    user: "sarah.smith@company.co"
    userId: "user-456"
    issue: "Payment failed but funds were deducted"
    status: "in-progress"
    priority: "high"
    createdAt: "2023-12-14T09:15:00Z"
    lastUpdated: "2023-12-15T13:20:00Z"
    category: "billing"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "SR-1003"
    user: "tech.guru@startup.io"
    userId: "user-789"
    issue: "Unable to download invoice PDF"
    status: "open"
    priority: "medium"
    createdAt: "2023-12-15T11:00:00Z"
    lastUpdated: "2023-12-15T11:00:00Z"
    category: "billing"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "SR-1004"
    user: "developer@codelab.dev"
    userId: "user-235"
    issue: "API integration documentation is outdated"
    status: "open"
    priority: "low"
    createdAt: "2023-12-13T16:45:00Z"
    lastUpdated: "2023-12-13T16:45:00Z"
    category: "api"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "SR-1005"
    user: "maria.rodriguez@design.co"
    userId: "user-567"
    issue: "Dispute with freelancer over delivered work quality"
    status: "in-progress"
    priority: "high"
    createdAt: "2023-12-12T10:30:00Z"
    lastUpdated: "2023-12-15T09:15:00Z"
    category: "disputes"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "SR-1006"
    user: "alex.wong@datacompany.com"
    userId: "user-890"
    issue: "Profile verification pending for over 7 days"
    status: "resolved"
    priority: "medium"
    createdAt: "2023-12-08T13:20:00Z"
    lastUpdated: "2023-12-15T08:30:00Z"
    category: "verification"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "SR-1007"
    user: "jamie.taylor@tech.org"
    userId: "user-345"
    issue: "Cannot upload portfolio images"
    status: "resolved"
    priority: "medium"
    createdAt: "2023-12-10T15:10:00Z"
    lastUpdated: "2023-12-13T11:25:00Z"
    category: "profile"
  }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery &&
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
<<<<<<< HEAD

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






=======
}
return false;
import React, { useState } from "react";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { Input } from "@/components/ui/input",;"
import { Button } from "@/components/ui/button",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { Search, Filter } from "lucide-react",;"
import { AppLayout } from "@/layout/AppLayout",;"
import { SEO } from "@/components/SEO",;"
// Mock data for support requests;
  {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // Apply status filter
    if (statusFilter && request.status !== statusFilter) {
      return false
    }
    // Apply priority filter
    if (priorityFilter && request.priority !== priorityFilter) {
      return false
    }
    // Apply category filter
    if (categoryFilter && request.category !== categoryFilter) {
      return false
    }

<<<<<<< HEAD



=======
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
    user: "john.doe@example.com",;
    userId: "user-123",;
    issue: "Cannot access account after password reset",;
    status: "open",;
    priority: "high",;
    createdAt: "2023-12-15T14:30:00Z",;
    lastUpdated: "2023-12-15T15:45:00Z",;
    category: "authentication";
  },;
  {;
    id: "SR-1002",;
    user: "sarah.smith@company.co",;
    userId: "user-456",;
    issue: "Payment failed but funds were deducted",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-14T09:15:00Z",;
    lastUpdated: "2023-12-15T13:20:00Z",;
    category: "billing";
  },;
  {;
    id: "SR-1003",;
    user: "tech.guru@startup.io",;
    userId: "user-789",;
    issue: "Unable to download invoice PDF",;
    status: "open",;
    priority: "medium",;
    createdAt: "2023-12-15T11:00:00Z",;
    lastUpdated: "2023-12-15T11:00:00Z",;
    category: "billing";
  },;
  {;
    id: "SR-1004",;
    user: "developer@codelab.dev",;
    userId: "user-235",;
    issue: "API integration documentation is outdated",;
    status: "open",;
    priority: "low",;
    createdAt: "2023-12-13T16:45:00Z",;
    lastUpdated: "2023-12-13T16:45:00Z",;
    category: "api";
  },;
  {;
    id: "SR-1005",;
    user: "maria.rodriguez@design.co",;
    userId: "user-567",;
    issue: "Dispute with freelancer over delivered work quality",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-12T10:30:00Z",;
    lastUpdated: "2023-12-15T09:15:00Z",;
    category: "disputes";
  },;
  {;
    id: "SR-1006",;
    user: "alex.wong@datacompany.com",;
    userId: "user-890",;
    issue: "Profile verification pending for over 7 days",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-08T13:20:00Z",;
    lastUpdated: "2023-12-15T08:30:00Z",;
    category: "verification";
  },;
  {;
    id: "SR-1007",;
    user: "jamie.taylor@tech.org",;
    userId: "user-345",;
    issue: "Cannot upload portfolio images",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-10T15:10:00Z",;
    lastUpdated: "2023-12-13T11:25:00Z",;
    category: "profile";
  }
],;
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
    }
    // Apply status filter
    if (statusFilter && request.status !== statusFilter) {
      return false
    }
    // Apply priority filter
    if (priorityFilter && request.priority !== priorityFilter) {
      return false
    }
    // Apply category filter
    if (categoryFilter && request.category !== categoryFilter) {
      return false
    }


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <AppLayout>
      <SEO
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      />
      <div className=\"container mx-auto px-4 py-8\" />
        <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between mb-8\" />
          <div />
            <h1 className=\"text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent\" />
              Support Requests;
            </h1>
            <p className=\"text-zion-slate-light mt-2\" />
              Manage and respond to user support requests and issues;
            </p>
          </div>
          <div className=\"mt-4 md:mt-0\" />
            <Button className=\"bg-zion-purple hover:bg-zion-purple-light\" />
              New Support Case;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </Button>
          </div>
        </div>
        {/* Status Cards */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8\" />
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{openCount}</CardTitle>
              <CardDescription />Open Requests</CardDescription>
            </CardHeader>
          </Card>
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{inProgressCount}</CardTitle>
              <CardDescription />In Progress</CardDescription>
            </CardHeader>
          </Card>
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{resolvedCount}</CardTitle>
              <CardDescription />Resolved</CardDescription>
            </CardHeader>
          </Card>
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{totalCount}</CardTitle>
              <CardDescription />Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Tabs defaultValue=\"all\" className=\"mb-8\" />
          <TabsList />
            <TabsTrigger value=\"all\" />All Requests</TabsTrigger>
            <TabsTrigger value=\"escalated\" />Escalated</TabsTrigger>
            <TabsTrigger value=\"ai-flagged\" />AI Flagged</TabsTrigger>
            <TabsTrigger value=\"need-response\" />Need Response</TabsTrigger>
          </TabsList>


  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (searchQuery && ;
        !request && request.issue.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !request && request.user.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !request && request.id.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())) {;}
      return false;}
    }
    // Apply status filter;
    if (statusFilter && request && request.status !== statusFilter) {;}
      return false;}
    }
    // Apply priority filter;
    if (priorityFilter && request && request.priority !== priorityFilter) {;}
      return false;}
    }
    // Apply category filter;
    if (categoryFilter && request && request.category !== categoryFilter) {;}
      return false;}
    }

<<<<<<< HEAD
    return true;
  });

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'in-progress').length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'resolved').length;
  const totalCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.length;

<<<<<<< HEAD
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

=======
  const resetFilters = (;
    setSearchQuery(\"\");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null)) => {
  return $3;}
}
};
  return (
    <AppLayout />;
      <SEO;
title=\"Support Requests | Admin Dashboard\"
        description=\"Manage and track user support requests and issues\"

>>>>>>> origin/cursor/delete-old-data-records-6bba
      />;
      <div className=\"container mx-auto px-4 py-8\" />;
        <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between mb-8\" />;
          <div />;
            <h1 className=\"text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent\" />;
              Support Requests;
            </h1>;
            <p className=\"text-zion-slate-light mt-2\" />;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;

<<<<<<< HEAD
          ;
          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;

=======
          <div className=\"mt-4 md:mt-0\" />;
            <Button className=\"bg-zion-purple hover:bg-zion-purple-light\" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              New Support Case;
            </Button>;
          </div>;
        </div>;

<<<<<<< HEAD
        ;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Status Cards */}
        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8\" />;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{openCount}</CardTitle>;
              <CardDescription />Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

<<<<<<< HEAD


=======
              <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />

                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Statuses</SelectItem>
                  <SelectItem value=\"open\" />Open</SelectItem>
                  <SelectItem value=\"in-progress\" />In Progress</SelectItem>
                  <SelectItem value=\"resolved\" />Resolved</SelectItem>
                </SelectContent>
              </Select>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />

                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Priorities</SelectItem>
                  <SelectItem value=\"high\" />High</SelectItem>
                  <SelectItem value=\"medium\" />Medium</SelectItem>
                  <SelectItem value=\"low\" />Low</SelectItem>
                </SelectContent>
              </Select>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />

                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Categories</SelectItem>
                  <SelectItem value=\"authentication\" />Authentication</SelectItem>
                  <SelectItem value=\"billing\" />Billing</SelectItem>
                  <SelectItem value=\"api\" />API</SelectItem>
                  <SelectItem value=\"disputes\" />Disputes</SelectItem>
                  <SelectItem value=\"verification\" />Verification</SelectItem>
                  <SelectItem value=\"profile\" />Profile</SelectItem>
                </SelectContent>
              </Select>
              <Button variant=\"outline\" onClick={resetFilters} className=\"md:w-auto\" />
                <Filter className=\"h-4 w-4 mr-2\" /> Reset Filters;
              </Button>
            </div>
            {/* Support Requests Table */}
            <Card />
              <CardContent className=\"p-0\" />
                <Table />
                  <TableHeader />
                    <TableRow />
                      <TableHead />ID</TableHead>
                      <TableHead />User</TableHead>
                      <TableHead />Issue</TableHead>
                      <TableHead />Status</TableHead>
                      <TableHead />Priority</TableHead>
                      <TableHead />Category</TableHead>
                      <TableHead />Created</TableHead>
                      <TableHead />Last Updated</TableHead>
                      <TableHead />Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody />
                    {filteredRequests.map((request) => (}
                      <TableRow key={request.id} />
                        <TableCell className=\"font-medium\" />{request.id}</TableCell>
                        <TableCell />{request.user}</TableCell>
                        <TableCell className=\"max-w-xs truncate\" />{request.issue}</TableCell>
                        <TableCell />
                          <Badge variant={
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
<<<<<<< HEAD

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


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell />
                          <Badge variant={
                            request.priority === 'high'
                              ? 'destructive'
                              : request.priority === 'medium'


                              : 'outline'
                          }>;

                            {request && request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell />;
                          <Badgevariant={
                            request && request.priority === 'high' 
                              ? 'destructive' 
                              : request && request.priority === 'medium' 

                              : 'outline'
                          }>;
                            {request && request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request && request.category}</TableCell>;
                        <TableCell>{new Date(request && request.createdAt).toLocaleDateString()}</TableCell>;
                        <TableCell>{new Date(request && request.lastUpdated).toLocaleDateString()}</TableCell>;
<<<<<<< HEAD

                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;

                        </TableCell>;
                      </TableRow>;
                    ))}



=======
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;

                        </TableCell>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
