

import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

  }
  },
=======

  },

=======
  }
  },  {
    id: "SR-1002"
    user: "sarah.smith@company.co"
    userId: "user-456"
    issue: "Payment failed but funds were deducted"
    status: "in-progress"
    priority: "high"
    createdAt: "2023-12-14T09:15:00Z"
    lastUpdated: "2023-12-15T13:20:00Z"
    category: "billing"

  }
  },
=======

  },

=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  }
  },
=======

  },

=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  }
  },
=======

  },

=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  }
  },
=======

  },

=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  }
  },
=======

  },

=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
],


=======];
export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
],

export default function SupportRequests() {;
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),
  
import React, { useState } from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Search, Filter} from "lucide-react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
=======

],

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery &&
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import React, { useState } from "react",;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id: "SR-1001",;
export default function SupportRequests() {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    
    return true
  }),
  
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,
  const totalCount = MOCK_SUPPORT_REQUESTS.length,
  
  },
  

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null)


  },
  

=======  return (
    <AppLayout>
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
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>
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
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
=======
=======
  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (searchQuery && ;
        !request && request.issue.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !request && request.user.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !request && request.id.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())) {;
      return false;
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Apply status filter;
    if (statusFilter && request && request.status !== statusFilter) {;
      return false;
    }
    return true;
  });
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'in-progress').length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'resolved').length;
  const totalCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.length;  const resetFilters = () => {;
    setSearchQuery("");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>


