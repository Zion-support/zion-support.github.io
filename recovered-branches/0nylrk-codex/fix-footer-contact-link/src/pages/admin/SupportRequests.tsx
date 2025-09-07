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
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",

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

=======
<<<<<<< HEAD
// Mock data for support requests
const MOCK_SUPPORT_REQUESTS = $2;
    user: "john.doe@example.com",
    userId: "user-123",
    issue: "Cannot access account after password reset",
    status: "open",
    priority: "high",
    createdAt: "2023-12-15T14: 30: 00Z",
    lastUpdated: "2023-12-15T15: 45: 00Z",
    category: "authentication"
  }
  {
    id: "SR-1002",
    user: "sarah.smith@company.co",
    userId: "user-456",
    issue: "Payment failed but funds were deducted",
    status: "in-progress",
    priority: "high",
    createdAt: "2023-12-14T09: 15: 00Z",
    lastUpdated: "2023-12-15T13: 20: 00Z",
    category: "billing"
  }
  {
    id: "SR-1003",
    user: "tech.guru@startup.io",
    userId: "user-789",
    issue: "Unable to download invoice PDF",
    status: "open",
    priority: "medium",
    createdAt: "2023-12-15T11: 00: 00Z",
    lastUpdated: "2023-12-15T11: 00: 00Z",
    category: "billing"
  }
  {
    id: "SR-1004",
    user: "developer@codelab.dev",
    userId: "user-235",
    issue: "API integration documentation is outdated",
    status: "open",
    priority: "low",
    createdAt: "2023-12-13T16: 45: 00Z", 
    lastUpdated: "2023-12-13T16: 45: 00Z",
    category: "api"
  }
  {
    id: "SR-1005",
    user: "maria.rodriguez@design.co",
    userId: "user-567",
    issue: "Dispute with freelancer over delivered work quality",
    status: "in-progress",
    priority: "high",
    createdAt: "2023-12-12T10: 30: 00Z",
    lastUpdated: "2023-12-15T09: 15: 00Z",
    category: "disputes"
  }
  {
    id: "SR-1006",
    user: "alex.wong@datacompany.com",
    userId: "user-890",
    issue: "Profile verification pending for over 7 days",
    status: "resolved",
    priority: "medium",
    createdAt: "2023-12-08T13: 20: 00Z",
    lastUpdated: "2023-12-15T08: 30: 00Z",
    category: "verification"
  }
  {
    id: "SR-1007",
    user: "jamie.taylor@tech.org",
    userId: "user-345",
    issue: "Cannot upload portfolio images",
    status: "resolved",
    priority: "medium",
    createdAt: "2023-12-10T15: 10: 00Z",
    lastUpdated: "2023-12-13T11: 25: 00Z",
    category: "profile"
  }
],

export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState($2);
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),
  
  // Apply filters to the request data
  const filteredRequests = $2;
  // Count by status for the summary dashboard
  const openCount = $2;
  const inProgressCount = $2;
  const resolvedCount = $2;
  const totalCount = $2;
  const resetFilters = () => {
    setSearchQuery($2);
    setStatusFilter($2);
    setPriorityFilter($2);
    setCategoryFilter(null)
  },
  
=======
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

],


];
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
  
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery &&
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
<<<<<<< HEAD
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
=======
      return false
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
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

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id: "SR-1001",;
<<<<<<< HEAD
    user: "john.doe@example.com",;
=======
    user: "john && john.doe@example && example.com",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-123",;
    issue: "Cannot access account after password reset",;
    status: "open",;
    priority: "high",;
    createdAt: "2023-12-15T14:30:00Z",;
    lastUpdated: "2023-12-15T15:45:00Z",;
    category: "authentication";
<<<<<<< HEAD
  },;
  {;
    id: "SR-1002",;
    user: "sarah.smith@company.co",;
=======
  };
  {;
    id: "SR-1002",;
    user: "sarah && sarah.smith@company && company.co",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-456",;
    issue: "Payment failed but funds were deducted",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-14T09:15:00Z",;
    lastUpdated: "2023-12-15T13:20:00Z",;
    category: "billing";
<<<<<<< HEAD
  },;
  {;
    id: "SR-1003",;
    user: "tech.guru@startup.io",;
=======
  };
  {;
    id: "SR-1003",;
    user: "tech && tech.guru@startup && startup.io",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-789",;
    issue: "Unable to download invoice PDF",;
    status: "open",;
    priority: "medium",;
    createdAt: "2023-12-15T11:00:00Z",;
    lastUpdated: "2023-12-15T11:00:00Z",;
    category: "billing";
<<<<<<< HEAD
  },;
  {;
    id: "SR-1004",;
    user: "developer@codelab.dev",;
=======
  };
  {;
    id: "SR-1004",;
    user: "developer@codelab && codelab.dev",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-235",;
    issue: "API integration documentation is outdated",;
    status: "open",;
    priority: "low",;
<<<<<<< HEAD
    createdAt: "2023-12-13T16:45:00Z",;
    lastUpdated: "2023-12-13T16:45:00Z",;
    category: "api";
  },;
  {;
    id: "SR-1005",;
    user: "maria.rodriguez@design.co",;
=======
    createdAt: "2023-12-13T16:45:00Z", ;
    lastUpdated: "2023-12-13T16:45:00Z",;
    category: "api";
  };
  {;
    id: "SR-1005",;
    user: "maria && maria.rodriguez@design && design.co",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-567",;
    issue: "Dispute with freelancer over delivered work quality",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-12T10:30:00Z",;
    lastUpdated: "2023-12-15T09:15:00Z",;
    category: "disputes";
<<<<<<< HEAD
  },;
  {;
    id: "SR-1006",;
    user: "alex.wong@datacompany.com",;
=======
  };
  {;
    id: "SR-1006",;
    user: "alex && alex.wong@datacompany && datacompany.com",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-890",;
    issue: "Profile verification pending for over 7 days",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-08T13:20:00Z",;
    lastUpdated: "2023-12-15T08:30:00Z",;
    category: "verification";
<<<<<<< HEAD
  },;
  {;
    id: "SR-1007",;
    user: "jamie.taylor@tech.org",;
=======
  };
  {;
    id: "SR-1007",;
    user: "jamie && jamie.taylor@tech && tech.org",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    userId: "user-345",;
    issue: "Cannot upload portfolio images",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-10T15:10:00Z",;
    lastUpdated: "2023-12-13T11:25:00Z",;
    category: "profile";
  }
<<<<<<< HEAD
],;
export default function SupportRequests() {;
=======
];

export default function SupportRequests() {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
    return true
  });
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length;
  const totalCount = MOCK_SUPPORT_REQUESTS.length;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
    return true
  }),
  
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,
  const totalCount = MOCK_SUPPORT_REQUESTS.length,
  
<<<<<<< HEAD
  const resetFilters = () => {
    setSearchQuery(""),
    setStatusFilter(null),
    setPriorityFilter(null),
    setCategoryFilter(null)
  }

  },
  
=======


  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null)


  },
  


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <AppLayout>
      <SEO
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
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
=======

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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </Button>
          </div>
        </div>
        {/* Status Cards */}
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
=======
          <TabsContent value="all" className="mt-6">
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
    return true;
  });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'in-progress').length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'resolved').length;
  const totalCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.length;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
          <div className=\"mt-4 md:mt-0\" />;
            <Button className=\"bg-zion-purple hover:bg-zion-purple-light\" />;
=======
<<<<<<< HEAD
          <div className=\"mt-4 md:mt-0\" />;
            <Button className=\"bg-zion-purple hover:bg-zion-purple-light\" />;
=======
          ;
          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              New Support Case;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
=======
        ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Status Cards */}
        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8\" />;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{openCount}</CardTitle>;
              <CardDescription />Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
<<<<<<< HEAD
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{inProgressCount}</CardTitle>;
              <CardDescription />In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{resolvedCount}</CardTitle>;
              <CardDescription />Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{totalCount}</CardTitle>;
              <CardDescription />Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs defaultValue=\"all\" className=\"mb-8\" />;
          <TabsList />;
            <TabsTrigger value=\"all\" />All Requests</TabsTrigger>;
            <TabsTrigger value=\"escalated\" />Escalated</TabsTrigger>;
            <TabsTrigger value=\"ai-flagged\" />AI Flagged</TabsTrigger>;
            <TabsTrigger value=\"need-response\" />Need Response</TabsTrigger>;
          </TabsList>;

            {/* Search and Filters */}
            <div className=\"flex flex-col md:flex-row gap-4 mb-6\" />;
              <div className=\"relative flex-1\" />;
                <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400\" />;
                <Input;
placeholder=\"Search by ID, user or issue...\"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
              <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>


              <Select value={priorityFilter |""} onValueChange={value => setPriorityFilter(value |null)}>
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
=======

              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>


              <Select value={categoryFilter |""} onValueChange={value => setCategoryFilter(value |null)}>
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
=======

              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
                              ? 'secondary'
                              : 'outline'
                          }>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onChange={(e) => setSearchQuery(e && e.target.value)}

;
    return true;
  }),;
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,;
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,;
  const totalCount = MOCK_SUPPORT_REQUESTS.length,;
  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
  return (;
    <AppLayout>;
      <SEO;
        title="Support Requests | Admin Dashboard";
        description="Manage and track user support requests and issues";
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Support Requests;
            </h1>;
            <p className="text-zion-slate-light mt-2">;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              New Support Case;
            </Button>;
          </div>;
        </div>;
        {/* Status Cards */}
<<<<<<< HEAD
        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8\" />;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{openCount}</CardTitle>;
              <CardDescription />Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{inProgressCount}</CardTitle>;
              <CardDescription />In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{resolvedCount}</CardTitle>;
              <CardDescription />Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{totalCount}</CardTitle>;
              <CardDescription />Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs defaultValue=\"all\" className=\"mb-8\" />;
          <TabsList />;
            <TabsTrigger value=\"all\" />All Requests</TabsTrigger>;
            <TabsTrigger value=\"escalated\" />Escalated</TabsTrigger>;
            <TabsTrigger value=\"ai-flagged\" />AI Flagged</TabsTrigger>;
            <TabsTrigger value=\"need-response\" />Need Response</TabsTrigger>;
          </TabsList>;

            {/* Search and Filters */}
            <div className=\"flex flex-col md:flex-row gap-4 mb-6\" />;
              <div className=\"relative flex-1\" />;
                <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400\" />;
                <Input;
placeholder=\"Search by ID, user or issue...\"
                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

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
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>;
              <CardDescription>Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>;
              <CardDescription>In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>;
              <CardDescription>Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs defaultValue="all" className="mb-8">;
          <TabsList>;
            <TabsTrigger value="all">All Requests</TabsTrigger>;
            <TabsTrigger value="escalated">Escalated</TabsTrigger>;
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>;
            <TabsTrigger value="need-response">Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value="all" className="mt-6">;
>>>>>>> merged-prs-20250907-203621
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
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
              <Select value={priorityFilter |""} onValueChange={value => setPriorityFilter(value |null)}>
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
              <Select value={categoryFilter |""} onValueChange={value => setCategoryFilter(value |null)}>
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
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </div>
            {/* Support Requests Table */}
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
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          <Badge variant={
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
<<<<<<< HEAD

=======
                              ? 'secondary'
                              : 'outline'
                          }>
=======
<<<<<<< HEAD
                <Input;
                  placeholder="Search by ID, user or issue...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10";
                />;
              </div>;
              ;
                  className="pl-10";
                />;
              </div>;
=======

                  className="pl-10";
                />;
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Status" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Statuses</SelectItem>;
                  <SelectItem value="open">Open</SelectItem>;
                  <SelectItem value="in-progress">In Progress</SelectItem>;
                  <SelectItem value="resolved">Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Priority" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Priorities</SelectItem>;
                  <SelectItem value="high">High</SelectItem>;
                  <SelectItem value="medium">Medium</SelectItem>;
                  <SelectItem value="low">Low</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Category" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Categories</SelectItem>;
                  <SelectItem value="authentication">Authentication</SelectItem>;
                  <SelectItem value="billing">Billing</SelectItem>;
                  <SelectItem value="api">API</SelectItem>;
                  <SelectItem value="disputes">Disputes</SelectItem>;
                  <SelectItem value="verification">Verification</SelectItem>;
                  <SelectItem value="profile">Profile</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
              </Button>;
            </div>;
<<<<<<< HEAD
            ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Support Requests Table */}
            <Card>;
              <CardContent className="p-0">;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead>ID</TableHead>;
                      <TableHead>User</TableHead>;
                      <TableHead>Issue</TableHead>;
                      <TableHead>Status</TableHead>;
                      <TableHead>Priority</TableHead>;
                      <TableHead>Category</TableHead>;
                      <TableHead>Created</TableHead>;
                      <TableHead>Last Updated</TableHead>;
                      <TableHead>Actions</TableHead>;
                    </TableRow>;
                  </TableHeader>;
                  <TableBody>;
<<<<<<< HEAD
                    {filteredRequests.map((request) => (;
                      <TableRow key={request.id}>;
                        <TableCell className="font-medium">{request.id}</TableCell>;
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>;
                        <TableCell>;
=======
                    {filteredRequests && filteredRequests.map((request) => (;
                      <TableRow key={request && request.id}>;
                        <TableCell className="font-medium">{request && request.id}</TableCell>;
                        <TableCell>{request && request.user}</TableCell>;
                        <TableCell className="max-w-xs truncate">{request && request.issue}</TableCell>;
                        <TableCell>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          <Badge variant={;
                            request.status === 'open';
                              ? 'default';
                              : request.status === 'in-progress';
                              ? 'secondary';
                              : 'outline';
                          }>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell />
                          <Badge variant={
                            request.priority === 'high'
                              ? 'destructive'
                              : request.priority === 'medium'
<<<<<<< HEAD

                              : 'outline'
                          }>;

                            {request && request.status}
                          </Badge>;
                        </TableCell>;
=======
<<<<<<< HEAD
                              ? 'default'
=======
<<<<<<< HEAD

=======
                              ? 'default'
<<<<<<< HEAD
                    {filteredRequests.map((request) => (;
                      <TableRow key={request.id}>;
                        <TableCell className="font-medium">{request.id}</TableCell>;
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>;
                        <TableCell>;
                          <Badge variant={;
                            request.status === 'open' ;
                              ? 'default' ;
                              :request.status === 'in-progress' ;
                              ? 'secondary' ;
                              :'outline';
                          }>;
                            {request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell>;
                          <Badge variant={;
                            request.priority === 'high' ;
                              ? 'destructive' ;
                              :request.priority === 'medium' ;
                              ? 'default' ;
                              :'outline';
                          }>;
                            {request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request.category}</TableCell>;
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>;
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                              : 'outline'
                          }>;

                            {request && request.status}
                          </Badge>;
                        </TableCell>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;
<<<<<<< HEAD
                        </TableCell>;
=======
<<<<<<< HEAD
                        </TableCell>;
=======
                        </TableCell>;
                      </TableRow>;
                    ))}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                              : 'outline'
                          }>
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.category}</TableCell>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>
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
  )
<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Search, Filter } from './lucide-react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {
    id: "SR - 1001",
    user: "john.doe@example.com",
    user_id: "user - 123",
    issue: "Cannot access account after password reset",
    status: "open",
    priority: "high",
    created_at: "2023 - 12 - 15T14:30:00Z",
    last_updated: "2023 - 12 - 15T15:45:00Z",
    category: "authentication";
  }
  {
    id: "SR - 1002",
    user: "sarah.smith@company.co",
    user_id: "user - 456",
    issue: "Payment failed but funds were deducted",
    status: "in - progress",
    priority: "high",
    created_at: "2023 - 12 - 14T09:15:00Z",
    last_updated: "2023 - 12 - 15T13:20:00Z",
    category: "billing";
  }
  {
    id: "SR - 1003",
    user: "tech.guru@startup.io",
    user_id: "user - 789",
    issue: "Unable to download invoice PDF",
    status: "open",
    priority: "medium",
    created_at: "2023 - 12 - 15T11:00:00Z",
    last_updated: "2023 - 12 - 15T11:00:00Z",
    category: "billing";
  }
  {
    id: "SR - 1004",
    user: "developer@codelab.dev",
    user_id: "user - 235",
    issue: "API integration documentation is outdated",
    status: "open",
    priority: "low",
    created_at: "2023 - 12 - 13T16:45:00Z",
    last_updated: "2023 - 12 - 13T16:45:00Z",
    category: "api";
  }
  {
    id: "SR - 1005",
    user: "maria.rodriguez@design.co",
    user_id: "user - 567",
    issue: "Dispute with freelancer over delivered work quality",
    status: "in - progress",
    priority: "high",
    created_at: "2023 - 12 - 12T10:30:00Z",
    last_updated: "2023 - 12 - 15T09:15:00Z",
    category: "disputes";
  }
  {
    id: "SR - 1006",
    user: "alex.wong@datacompany.com",
    user_id: "user - 890",
    issue: "Profile verification pending for over 7 days",
    status: "resolved",
    priority: "medium",
    created_at: "2023 - 12 - 08T13:20:00Z",
    last_updated: "2023 - 12 - 15T08:30:00Z",
    category: "verification";
  }
  {
    id: "SR - 1007",
    user: "jamie.taylor@tech.org",
    user_id: "user - 345",
    issue: "Cannot upload portfolio images",
    status: "resolved",
    priority: "medium",
    created_at: "2023 - 12 - 10T15:10:00Z",
    last_updated: "2023 - 12 - 13T11:25:00Z",
    category: "profile";
  }
];
;
export default /**
 * SupportRequests - Function description
 */
function SupportRequests() {
  const [search_query, setSearchQuery] = useState ("");
  const [status_filter, setStatusFilter] = useState < string | null>(null);
  const [priority_filter, setPriorityFilter] = useState < string | null>(null);
  const [category_filter, setCategoryFilter] = useState < string | null>(null);
;
  // Apply filters to the request data;
  const filtered_requests = MOCK_SUPPORT_REQUESTS.filter (request => {
    // Apply search query filter;
    if (.includes (search_query.toLowerCase ()) &&) {
  $2
}
        !request.user.toLowerCase ().includes (search_query.toLowerCase ()) &&;
        !request.id.toLowerCase ().includes (search_query.toLowerCase ())) {
      return false;
    }
    // Apply status filter;
    // Check condition
if ( {) {
  $2
}
      return false;
    }
    // Apply priority filter;
    // Check condition
if ( {) {
  $2
}
      return false;
    }
    // Apply category filter;
    // Check condition
if ( {) {
  $2
}
      return false;
    }
    return true;
  });
;
  // Count by status for the summary dashboard;
  const open_count = MOCK_SUPPORT_REQUESTS.filter (r => r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter (r => r.status === 'in - progress').length;
  const resolved_count = MOCK_SUPPORT_REQUESTS.filter (r => r.status === 'resolved').length;
  const total_count = MOCK_SUPPORT_REQUESTS.length;
;
  const reset_filters = () =>: any {
    setSearchQuery ("");
    setStatusFilter (null);
    setPriorityFilter (null);
    setCategoryFilter (null);
  }
;
  return (
    <AppLayout>;
      <SEO;
        title="Support Requests | Admin Dashboard";
        description="Manage and track user support requests and issues";
      />;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="flex flex - col md:flex - row items - start md:items - center justify - between mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">;
              Support Requests;
            </h1>;
            <p className="text - zion - slate - light mt - 2">;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className="mt - 4 md:mt - 0">;
            <Button className="bg - zion - purple hover:bg - zion - purple - light">;
              New Support Case;
            </Button>;
          </div>;
        </div>;
        {/* Status Cards */}
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 8">;
          <Card>;
            <CardHeader className="pb - 2">;
              <CardTitle className="text - 2xl font - bold">{open_count}</CardTitle>;
              <CardDescription > Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb - 2">;
              <CardTitle className="text - 2xl font - bold">{inProgressCount}</CardTitle>;
              <CardDescription > In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb - 2">;
              <CardTitle className="text - 2xl font - bold">{resolved_count}</CardTitle>;
              <CardDescription > Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb - 2">;
              <CardTitle className="text - 2xl font - bold">{total_count}</CardTitle>;
              <CardDescription > Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs default_value="all" className="mb - 8">;
          <TabsList>;
            <TabsTrigger value="all">All Requests</TabsTrigger>;
            <TabsTrigger value="escalated">Escalated</TabsTrigger>;
            <TabsTrigger value="ai - flagged">AI Flagged</TabsTrigger>;
            <TabsTrigger value="need - response">Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value="all" className="mt - 6">;
            {/* Search and Filters */}
            <div className="flex flex - col md:flex - row gap - 4 mb - 6">;
              <div className="relative flex - 1">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400" />;
                <Input;
                  placeholder="Search by ID, user or issue...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="pl - 10";
                />;
              </div>;
              <Select value={status_filter || ""} onValueChange={value => setStatusFilter (value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Status" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Statuses</SelectItem>;
                  <SelectItem value="open">Open</SelectItem>;
                  <SelectItem value="in - progress">In Progress</SelectItem>;
                  <SelectItem value="resolved">Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={priority_filter || ""} onValueChange={value => setPriorityFilter (value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Priority" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Priorities</SelectItem>;
                  <SelectItem value="high">High</SelectItem>;
                  <SelectItem value="medium">Medium</SelectItem>;
                  <SelectItem value="low">Low</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={category_filter || ""} onValueChange={value => setCategoryFilter (value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Category" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Categories</SelectItem>;
                  <SelectItem value="authentication">Authentication</SelectItem>;
                  <SelectItem value="billing">Billing</SelectItem>;
                  <SelectItem value="api">API</SelectItem>;
                  <SelectItem value="disputes">Disputes</SelectItem>;
                  <SelectItem value="verification">Verification</SelectItem>;
                  <SelectItem value="profile">Profile</SelectItem>;
                </SelectContent>;
              </Select>;
              <Button variant="outline" on_click={reset_filters} className="md:w - auto">;
                <Filter className="h - 4 w - 4 mr - 2" /> Reset Filters;
              </Button>;
            </div>;
            {/* Support Requests Table */}
            <Card>;
              <CardContent className="p - 0">;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead > ID</TableHead>;
                      <TableHead > User</TableHead>;
                      <TableHead > Issue</TableHead>;
                      <TableHead > Status</TableHead>;
                      <TableHead > Priority</TableHead>;
                      <TableHead > Category</TableHead>;
                      <TableHead > Created</TableHead>;
                      <TableHead > Last Updated</TableHead>;
                      <TableHead > Actions</TableHead>;
                    </TableRow>;
                  </TableHeader>;
                  <TableBody>;
                    {filtered_requests.map ((request) => (
                      <TableRow key={request.id}>;
                        <TableCell className="font - medium">{request.id}</TableCell>;
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className="max - w-xs truncate">{request.issue}</TableCell>;
                        <TableCell>;
                          <Badge variant={
                            request.status === 'open';
                              ? 'default';
                              : request.status === 'in - progress';
                              ? 'secondary';
                              : 'outline';
                          }>;
                            {request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell>;
                          <Badge variant={
                            request.priority === 'high';
                              ? 'destructive';
                              : request.priority === 'medium';
                              ? 'default';
                              : 'outline';
                          }>;
                            {request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request.category}</TableCell>;
                        <TableCell>{new Date (request.created_at).toLocaleDateString ()}</TableCell>;
                        <TableCell>{new Date (request.last_updated).toLocaleDateString ()}</TableCell>;
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;
                        </TableCell>;
                      </TableRow>))}
                  </TableBody>;
                </Table>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          ;
          <TabsContent value="escalated" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>;
              <p className="text-zion-slate-light">;
                This tab will show support requests that have been escalated by agents or the system.;
              </p>;
            </div>;
          </TabsContent>;
          ;
          <TabsContent value="ai-flagged" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>;
              <p className="text-zion-slate-light">;
                This tab shows issues that our AI system has identified as requiring human attention.;
              </p>;
            </div>;
          </TabsContent>;
          ;
          <TabsContent value="need-response" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>;
              <p className="text-zion-slate-light">;
                These support requests have been waiting for an agent response for over 24 hours.;
              </p>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;

}
;

<<<<<<< HEAD
    </AppLayout>;
  ),;}
   return true;
});
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Support Requests </h1> <p className=" text-zion-slate-light mt-2"> Manage and respond to user support requests and issues </p> </div> <div className=" mt-4 md:mt-0"> <Button className=" bg-zion-purple hover:bg-zion-purple-light"> New Support Case </Button> </div> </div> <CardDescription>Open Requests</CardDescription> </CardHeader> </Card> <Card> <CardDescription>In Progress</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Resolved</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Total Requests</CardDescription> </CardHeader> </Card> </div> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai-flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need-response">Need Response</TabsTrigger> </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in-progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem> </SelectContent> </Select> </Button> </div> {
  /* Support Requests Table */ 
}<Card> <CardContent className=" p-0"> <Table> <TableHeader> <TableRow> <TableHead>ID</TableHead> <TableHead>User</TableHead> <TableHead>Issue</TableHead> <TableHead>Status</TableHead> <TableHead>Priority</TableHead> <TableHead>Category</TableHead> <TableHead>Created</TableHead> <TableHead>Last Updated</TableHead> <TableHead>Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filteredRequests.map ( (request) => (<TableRow key= {
  request.id 
}> <TableCell> <Badge variant= {
  request.status === 'open' ? 'default' : request.status === 'in-progress' ? 'secondary' : 'outline' 
}> {
  request.status 
}</Badge> </TableCell> <TableCell> <Badge variant= {
  request.priority === 'high' ? 'destructive' : request.priority === 'medium' ? 'default' : 'outline' 
}> {
  request.priority 
}</Badge> </TableCell> <TableCell> {
  request.category 
}</TableCell> <TableCell> {
  new Date (request.createdAt) .toLocaleDateString () 
}</TableCell> <TableCell> {
  new Date (request.lastUpdated) .toLocaleDateString () 
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Escalated Requests</h3> <p className=" text-zion-slate-light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai-flagged"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">AI Flagged Issues</h3> <p className=" text-zion-slate-light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need-response"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Awaiting Response</h3> <p className=" text-zion-slate-light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </AppLayout>) 
}
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
