<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ApiLogs() {
  }
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  // Load logs on mount and when pagination changes,
useEffect(() => {
    }
    fetchApiLogs(pageSize, currentPage * pageSize)
  }, [pageSize, currentPage]);

<<<<<<< HEAD
  const handleRefresh = () => {
    }
    fetchApiLogs(pageSize, currentPage * pageSize)
  }
  // Helper to format the timestamp,
const formatTimestamp = ("timestamp": string) => {
    }
    return format(new Date(timestamp), 'yyyy-MM-dd "HH": "mm":ss')'
  }
=======

<<<<<<< HEAD
import {useState, useEffect} from "react";
import {format} from "date-fns";
import {List, RefreshCw} from "lucide-react";
import {useApiKeys, type, ApiLog} from "@/hooks/useApiKeys";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Badge} from "@/components/ui/badge";

export function ApiLogs() {
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  // Load logs on mount and when pagination changes
  useEffect(() => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  }, [pageSize, currentPage]);

  const handleRefresh = () => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  }
  // Helper to format the timestamp
  const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss')
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function ApiLogs() {;
  }
import { useState, useEffect } from "react","
import { format } from "date-fns","
import { List, RefreshCw } from "lucide-react","
import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Badge } from "@/components/ui/badge","
export function ApiLogs() {
}
const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),;
const [pageSize, setPageSize] = useState(25),;
const [currentPage, setCurrentPage] = useState(0),;
  // Load logs on mount and when pagination changes,
useEffect(() => {
    }
    fetchApiLogs(pageSize, currentPage * pageSize)
  }, [pageSize, currentPage]);

    }
    fetchApiLogs(pageSize, currentPage * pageSize)
  }
  // Helper to format the timestamp,
    }
    return format(new Date(timestamp), 'yyyy-MM-dd "HH": "mm":ss')'
  },
  // Helper to get badge color based on status code,
const getStatusBadge = ("statusCode": number) => {
    }
    if (statusCode >= 200 && statusCode < 300) {
}
return <Badge className="bg-green-700">Success</Badge>;"
    } else if (statusCode >= 400 && statusCode < 500) {
}
return <Badge className="bg-amber-700">Client Error</Badge>;"
    } else if (statusCode >= 500) {
}
return <Badge className="bg-red-700">Server Error</Badge>;"
    } else {
}
return <Badge className="bg-blue-700">Other</Badge>;"
    }import { useState, useEffect } from "react";"
import { format } from "date-fns";"
import { List, RefreshCw } from "lucide-react",;"
import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Badge } from "@/components/ui/badge",;"
export function ApiLogs() {;
  }
  // Load logs on mount and when pagination changes;
  useEffect(() => {;
    }
    fetchApiLogs(pageSize, currentPage * pageSize);
  }, [pageSize, currentPage]),;
  const handleRefresh = () => {;
    }
    fetchApiLogs(pageSize, currentPage * pageSize);
  },;
  // Helper to format the timestamp;
  const formatTimestamp = ("timestamp": string) => {;
    }
    return format(new Date(timestamp), 'yyyy-MM-dd "HH": "mm":ss');'
  },;
  // Helper to get badge color based on status code;
  const getStatusBadge = ("statusCode": number) => {;
    }
    if (statusCode >= 200 && statusCode < 300) {;
      }
      return <Badge className="bg-green-700">Success</Badge>;"
    } else if (statusCode >= 400 && statusCode < 500) {;
      }
      return <Badge className="bg-amber-700">Client Error</Badge>;"
    } else if (statusCode >= 500) {;
      }
      return <Badge className="bg-red-700">Server Error</Badge>;"
    } else {;
      }
      return <Badge className="bg-blue-700">Other</Badge>;"
    }
  },;
  // Calculate pagination info;
  const totalPages = Math.ceil(totalLogs / pageSize),;
  const hasPrevPage = currentPage > 0;
  return (;    <Card className="bg-zinc-900 border-zinc-800 text-white">;"
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;"
          <List className="mr-2" size={20} /> API Request Logs;"
        </CardTitle>;
        <CardDescription className="text-zinc-400">;"
          View logs of requests made using your API keys.;
        </CardDescription>;
      </CardHeader>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useEffect} from "react";
import {format} from "date-fns";
import {List, RefreshCw} from "lucide-react";
import {useApiKeys, type, ApiLog} from "@/hooks/useApiKeys";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Badge} from "@/components/ui/badge";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Badge} from "@/components/ui/badge";

export function ApiLogs() {

  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);

    fetchApiLogs(pageSize, currentPage * pageSize)

  }, [pageSize, currentPage]);

export function ApiLogs() { return null; }

  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react",
import { format } from "date-fns",
import { List, RefreshCw } from "lucide-react",

import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys",
"
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Badge } from "@/components/ui/badge",
export function ApiLogs() {}
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),
  const [pageSize, setPageSize] = useState(25),
  const [currentPage, setCurrentPage] = useState(0),
<<<<<<< HEAD

=======
<<<<<<< HEAD
  
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Load logs on mount and when pagination changes
  useEffect(() => {

    fetchApiLogs(pageSize, currentPage * pageSize)
<<<<<<< HEAD
  }, [pageSize, currentPage]),
  
=======
  }, [pageSize, currentPage]);

  const handleRefresh = () => {}
>>>>>>> origin/chore/fix-lint-and-merge
    fetchApiLogs(pageSize, currentPage * pageSize)
<<<<<<< HEAD
  }

  // Helper to get badge color based on status code
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
=======
<<<<<<< HEAD
  }

  // Helper to get badge color based on status code
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
=======
  },
  
  // Helper to format the timestamp
  const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss')
  },
  
<<<<<<< HEAD
  
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Helper to get badge color based on status code
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success</Badge>
    } else if (statusCode >= 400 && statusCode < 500) {
      return <Badge className="bg-amber-700">Client Error</Badge>
    } else if (statusCode >= 500) {
      return <Badge className="bg-red-700">Server Error</Badge>
    } else {
      return <Badge className="bg-blue-700">Other</Badge>
    }
<<<<<<< HEAD
  }
  // Calculate pagination info
  const totalPages = Math.ceil(totalLogs / pageSize);
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      return <Badge className="bg-green-700">Success</Badge>
    } else if (statusCode >= 400 && statusCode < 500) {"
      return <Badge className="bg-amber-700">Client Error</Badge>
    } else if (statusCode >= 500) {"
      return <Badge className="bg-red-700">Server Error</Badge>
    } else {"
      return <Badge className="bg-blue-700">Other</Badge>

export function ApiLogs() { return null; }

  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);

  // Load logs on mount and when pagination changes;
  useEffect(() => {;
    fetchApiLogs(pageSize, currentPage * pageSize);
  }, [pageSize, currentPage]);

  const handleRefresh = () => {;
    fetchApiLogs(pageSize, currentPage * pageSize);
  };

  // Helper to format the timestamp;

    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss');
  };

  // Helper to get badge color based on status code;
  const getStatusBadge = (statusCode: number) => {;

      return <Badge className="bg-blue-700">Other</Badge>;
    }
  };

  // Calculate pagination info;
  const totalPages = Math && Math.ceil(totalLogs / pageSize);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  
  // Calculate pagination info
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,

<<<<<<< HEAD
  return (
=======
<<<<<<< HEAD
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <List className="mr-2" size={20} /> API Request Logs
        </CardTitle>
        <CardDescription className="text-zinc-400">
          View logs of requests made using your API keys.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Show</span>
            <Select

export function ApiLogs() {;
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  // Load logs on mount and when pagination changes;
  useEffect(() => {;
    fetchApiLogs(pageSize, currentPage * pageSize);
  }, [pageSize, currentPage]);
  const handleRefresh = () => {;
    fetchApiLogs(pageSize, currentPage * pageSize);
  };
  // Helper to format the timestamp;
  const formatTimestamp = (timestamp: string) => {;
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss');
  };
  // Helper to get badge color based on status code;
  const getStatusBadge = (statusCode: number) => {;
    if (statusCode >= 200 && statusCode < 300) {;
      return <Badge className="bg-green-700">Success</Badge>;
    } else if (statusCode >= 400 && statusCode < 500) {;
      return <Badge className="bg-amber-700">Client Error</Badge>;
    } else if (statusCode >= 500) {;
      return <Badge className="bg-red-700">Server Error</Badge>;
    } else {;
      return <Badge className="bg-blue-700">Other</Badge>;
    }
  };
  // Calculate pagination info;
  const totalPages = Math && Math.ceil(totalLogs / pageSize);

  },
  
  // Calculate pagination info
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,

<<<<<<< HEAD
=======

  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <Select

  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
  return (

              value={pageSize.toString()}
              onValueChange={(value) => {
                setPageSize(Number(value));

                setCurrentPage(0), // Reset to first page when changing page size
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

            <Select

<<<<<<< HEAD
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
  return (

              value={pageSize.toString()}
              onValueChange={(value) => {
                setPageSize(Number(value));

                setCurrentPage(0), // Reset to first page when changing page size

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react",;

import { format } from "date-fns",;
import { List, RefreshCw } from "lucide-react",;
import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys",;
<<<<<<< HEAD
=======
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Badge } from "@/components/ui/badge",;
<<<<<<< HEAD
=======
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ApiLogs() {;

  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),;
  const [pageSize, setPageSize] = useState(25),;
  const [currentPage, setCurrentPage] = useState(0),;
  // Load logs on mount and when pagination changes;
  useEffect(() => {;
    fetchApiLogs(pageSize, currentPage * pageSize);
  }, [pageSize, currentPage]),;
  const handleRefresh = () => {;
    fetchApiLogs(pageSize, currentPage * pageSize);
  },;
  // Helper to format the timestamp;
  const formatTimestamp = (timestamp: string) => {;'
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss');
  },;
  // Helper to get badge color based on status code;
  const getStatusBadge = (statusCode: number) => {;
    if (statusCode >= 200 && statusCode < 300) {;"
      return <Badge className="bg-green-700">Success</Badge>;
    } else if (statusCode >= 400 && statusCode < 500) {;"
      return <Badge className="bg-amber-700">Client Error</Badge>;
    } else if (statusCode >= 500) {;"
      return <Badge className="bg-red-700">Server Error</Badge>;
    } else {;"
      return <Badge className="bg-blue-700">Other</Badge>;
    }
  },;
  // Calculate pagination info;
  const totalPages = Math.ceil(totalLogs / pageSize),;
  const hasNextPage = currentPage < totalPages - 1,;
  const hasPrevPage = currentPage > 0;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  return (;
<<<<<<< HEAD
  ;
  // Load logs on mount and when pagination changes;
  useEffect(() => {;
    fetchApiLogs(pageSize, currentPage * pageSize),;
  }, [pageSize, currentPage]),;
  ;
  const handleRefresh = () => {;
    fetchApiLogs(pageSize, currentPage * pageSize),;
  },;
  ;
  // Helper to format the timestamp;
  const formatTimestamp = (timestamp:string) => {;
    return format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');
  },;
  ;
  // Helper to get badge color based on status code;
  const getStatusBadge = (statusCode:number) => {;
    if (statusCode >= 200 && statusCode < 300) {;
      return <Badge className="bg-green-700">Success</Badge>;
    } else if (statusCode >= 400 && statusCode < 500) {;
      return <Badge className="bg-amber-700">Client Error</Badge>,;
    } else if (statusCode >= 500) {;
      return <Badge className="bg-red-700">Server Error</Badge>,;
    } else {;
      return <Badge className="bg-blue-700">Other</Badge>,;
    }
  },;
  ;
  // Calculate pagination info;
  const totalPages = Math.ceil(totalLogs / pageSize),;
  const hasNextPage = currentPage < totalPages - 1,;
  const hasPrevPage = currentPage > 0,;
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;

          <List className="mr-2" size={20} /> API Request Logs;
        </CardTitle>;"
        <CardDescription className="text-zinc-400">;
          View logs of requests made using your API keys.;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
      ;
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <CardContent>;"
        <div className="flex justify-between items-center mb-6">;"
          <div className="flex items-center space-x-2">;"
            <span className="text-sm text-zinc-400">Show</span>;

            <Select;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <div className="flex items-center space-x-2">;
            <span className="text-sm text-zinc-400">Show</span>;
<<<<<<< HEAD
            <Select;
              value={pageSize.toString()}
              onValueChange={(value) => {;
                setPageSize(Number(value));
                setCurrentPage(0), // Reset to first page when changing page size;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Select
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              value={pageSize && pageSize.toString()}
              onValueChange={(value) => {;
                setPageSize(Number(value));

            <Select;
              value={pageSize.toString()}
              onValueChange={(value) => {;
                setPageSize(Number(value));
                setCurrentPage(0), // Reset to first page when changing page size;

<<<<<<< HEAD
              }}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              }}
<<<<<<< HEAD
            >
              <SelectTrigger className="w-20 bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="25" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-zinc-400">per page</span>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw size={14} className="mr-1" /> Refresh
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th>
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Method</th>
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th>
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Status</th>
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Response Time</th>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            >"
              <SelectTrigger className="w-20 bg-zinc-800 border-zinc-700">"
                <SelectValue placeholder="25" />
              </SelectTrigger>"
              <SelectContent className="bg-zinc-900 border-zinc-800">"
                <SelectItem value="10">10</SelectItem>"
                <SelectItem value="25">25</SelectItem>"
                <SelectItem value="50">50</SelectItem>"
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>"
            <span className="text-sm text-zinc-400">per page</span>
          </div>"
          <Button variant="outline" size="sm" onClick={handleRefresh}>"
            <RefreshCw size={14} className="mr-1" /> Refresh;
          </Button>
        </div>"
        <div className="overflow-x-auto">"
          <table className="w-full border-collapse">
            <thead>"
              <tr className="border-b border-zinc-800">"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th>"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Method</th>"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th>"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Status</th>"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Response Time</th>"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <th className="px-4 py-2 text-left font-medium text-zinc-300">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <tr>"
                  <td colSpan={6} className="text-center py-12">"
                    <div className="flex flex-col items-center">"
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div>"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <span className="text-zinc-500">Loading logs...</span>
                    </div>
                  </td>
                </tr>
              ) : logs.length === 0 ? (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <div className="flex flex-col items-center">
                      <List className="opacity-30 mb-3" size={24} />
                      <span className="text-zinc-500">No API logs found.</span>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <tr>"
                  <td colSpan={6} className="text-center py-12">"
                    <div className="flex flex-col items-center">"
                      <List className="opacity-30 mb-3" size={24} />"
                      <span className="text-zinc-500">No API logs found.</span>"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <span className="text-sm text-zinc-600 mt-1">
                        Logs will appear here when you make API requests.
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                logs.map((log) => (
                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={
                          log.method === 'GET'
                            ? "border-green-500 text-green-400"
                            : log.method === 'POST'
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                logs.map((log) => ("
                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">"
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>"
                    <td className="px-4 py-3">
                      <Badge"
                        variant="outline"
                        className={'
                          log.method === 'GET'"
                            ? "border-green-500 text-green-400"'
                            : log.method === 'POST'
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <Select;
              value={pageSize.toString()}
              onValueChange={(value) => {;
                setPageSize(Number(value)),;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                setCurrentPage(0), // Reset to first page when changing page size;
              }}
            >;"
              <SelectTrigger className="w-20 bg-zinc-800 border-zinc-700">;"
                <SelectValue placeholder="25" />;
              </SelectTrigger>;"
              <SelectContent className="bg-zinc-900 border-zinc-800">;"
                <SelectItem value="10">10</SelectItem>;"
                <SelectItem value="25">25</SelectItem>;"
                <SelectItem value="50">50</SelectItem>;"
                <SelectItem value="100">100</SelectItem>;
              </SelectContent>;
            </Select>;"
            <span className="text-sm text-zinc-400">per page</span>;
          </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          ;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button variant="outline" size="sm" onClick={handleRefresh}>;
            <RefreshCw size={14} className="mr-1" /> Refresh;
          </Button>;
        </div>;
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="overflow-x-auto">;
          <table className="w-full border-collapse">;
            <thead>;
              <tr className="border-b border-zinc-800">;
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th>;
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Method</th>;
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th>;
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Status</th>;
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Response Time</th>;
                <th className="px-4 py-2 text-left font-medium text-zinc-300">IP Address</th>;
              </tr>;
            </thead>;
            <tbody>;
              {loading ? (;
                <tr>;
                  <td colSpan={6} className="text-center py-12">;
                    <div className="flex flex-col items-center">;
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div>;
                      <span className="text-zinc-500">Loading logs...</span>;
                    </div>;
                  </td>;
                </tr>;
<<<<<<< HEAD
              ) :logs.length === 0 ? (;
=======
              ) : logs && logs.length === 0 ? (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <tr>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <td colSpan={6} className="text-center py-12">;
                    <div className="flex flex-col items-center">;
                      <List className="opacity-30 mb-3" size={24} />;
                      <span className="text-zinc-500">No API logs found.</span>;

                      <span className="text-sm text-zinc-600 mt-1">;
                        Logs will appear here when you make API requests.;
                      </span>;
                    </div>;
                  </td>;
                </tr>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
              ) : (;
                logs && logs.map((log) => (;
                  <tr key={log && log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">;
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log && log.created_at)}</td>;
                    <td className="px-4 py-3">;
                      <Badge
                        variant="outline"
                        className={
                          log && log.method === 'GET' 
                            ? "border-green-500 text-green-400" 
                            : log && log.method === 'POST' 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            ? "border-blue-500 text-blue-400"
                            : log && log.method === 'PUT'
                            ? "border-yellow-500 text-yellow-400"

                            : "border-red-500 text-red-400"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        }>;

                        {log && log.method}
                      </Badge>;
                    </td>;"
                    <td className="px-4 py-3 font-mono text-sm text-zinc-400">{log && log.endpoint}</td>;"
                    <td className="px-4 py-3">;"
                      <div className="flex items-center">;"
                        <span className="font-mono mr-2">{log && log.status_code}</span>;
                        {getStatusBadge(log && log.status_code)}
                      </div>;
                    </td>;"
                    <td className="px-4 py-3 text-sm">;'
                      {log && log.response_time_ms ? `${log && log.response_time_ms}ms` : '-'}

                    <td className="px-4 py-3 text-sm">{log && log.ip_address || '-'}</td>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
              ) :(;
                logs.map((log) => (;
                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">;
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>;
                    <td className="px-4 py-3">;
                      <Badge ;
                        variant="outline";
                        className={;
                          log.method === 'GET' ;
                            ? "border-green-500 text-green-400" ;
                            :log.method === 'POST' ;
                            ? "border-blue-500 text-blue-400";
                            :log.method === 'PUT';
                            ? "border-yellow-500 text-yellow-400";
                            :"border-red-500 text-red-400";
                        }
                      >;
                        {log.method}
                      </Badge>;
                    </td>;
                    <td className="px-4 py-3 font-mono text-sm text-zinc-400">{log.endpoint}</td>;
                    <td className="px-4 py-3">;
                      <div className="flex items-center">;
                        <span className="font-mono mr-2">{log.status_code}</span>;
                        {getStatusBadge(log.status_code)}
                      </div>;
                    </td>;
                    <td className="px-4 py-3 text-sm">;
                      {log.response_time_ms ? `${log.response_time_ms}ms` :'-'}
                    </td>;
                    <td className="px-4 py-3 text-sm">{log.ip_address || '-'}</td>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </tr>;
                ));
              )}
            </tbody>;
          </table>;
        </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <Button
                variant="outline"
                size="sm"
        ;
        {logs.length > 0 && (;
          <div className="mt-4 flex justify-between items-center">;
            <div className="text-sm text-zinc-500">;
              Showing {currentPage * pageSize + 1} to {Math.min((currentPage + 1) * pageSize, totalLogs)} of {totalLogs} logs;
            </div>;
            <div className="flex space-x-2">;
              <Button;
                variant="outline";
                size="sm";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                disabled={!hasPrevPage}
                onClick={() => setCurrentPage(currentPage - 1)}
              >;
                Previous;
              </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
              <Button;
                variant="outline";
                size="sm";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                disabled={!hasNextPage}
                onClick={() => setCurrentPage(currentPage + 1)}
              >;
                Next;
              </Button>;
            </div>;
          </div>;
        )}
<<<<<<< HEAD

=======
      </CardContent>;
    </Card>;
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Badge } from '@/components / ui / badge';
export /**
 * ApiLogs - Function description
 */
function ApiLogs() {
  const { logs, total_logs, loading, fetchApiLogs } = useApiKeys ();
  const [page_size, setPageSize] = useState (25);
  const [current_page, setCurrentPage] = useState (0);
;
  // Load logs on mount and when pagination changes;
  useEffect (() => {
    fetchApiLogs (page_size, current_page * page_size);
  }, [page_size, current_page]);
;
  const handle_refresh = () =>: any {
    fetchApiLogs (page_size, current_page * page_size);
  }
;
  // Helper to format the timestamp;
  const format_timestamp = (timestamp: string) =>: any {
    return format (new Date (timestamp), 'yyyy - MM - dd HH: mm:ss');
  }
;
  // Helper to get badge color based on status code;
  const getStatusBadge = (status_code: number) =>: any {
    // Check condition
if ( {) {
  $2
}
      return <Badge className="bg - green - 700">Success</Badge>;
    } else // Check condition
if ( {) {
  $2
}
      return <Badge className="bg - amber - 700">Client Error</Badge>;
    } else // Check condition
if ( {) {
  $2
}
      return <Badge className="bg - red - 700">Server Error</Badge>;
    } else {
      return <Badge className="bg - blue - 700">Other</Badge>;
    }
  }
;
  // Calculate pagination info;
  const total_pages = Math.ceil (total_logs / page_size);
  const hasNextPage = current_page < total_pages - 1;
  const hasPrevPage = current_page > 0;
;
  return (
    <Card className="bg - zinc - 900 border - zinc - 800 text - white">;
      <CardHeader>;
        <CardTitle className="text - xl flex items - center">;
          <List className="mr - 2" size={20} /> API Request Logs;
        </CardTitle>;
        <CardDescription className="text - zinc - 400">;
          View logs of requests made using your API keys.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex justify - between items - center mb - 6">;
          <div className="flex items - center space - x-2">;
            <span className="text - sm text - zinc - 400">Show</span>;
            <Select;
              value={page_size.to_string ()}
              onValueChange={(value) => {
                setPageSize (Number (value));
                setCurrentPage (0), // Reset to first page when changing page size;
              }}
            >;
              <SelectTrigger className="w - 20 bg - zinc - 800 border - zinc - 700">;
                <SelectValue placeholder="25" />;
              </SelectTrigger>;
              <SelectContent className="bg - zinc - 900 border - zinc - 800">;
                <SelectItem value="10">10</SelectItem>;
                <SelectItem value="25">25</SelectItem>;
                <SelectItem value="50">50</SelectItem>;
                <SelectItem value="100">100</SelectItem>;
              </SelectContent>;
            </Select>;
            <span className="text - sm text - zinc - 400">per page</span>;
          </div>;
          <Button variant="outline" size="sm" on_click={handle_refresh}>;
            <RefreshCw size={14} className="mr - 1" /> Refresh;
          </Button>;
        </div>;
        <div className="overflow - x-auto">;
          <table className="w - full border - collapse">;
            <thead>;
              <tr className="border - b border - zinc - 800">;
                <th className="px - 4 py - 2 text - left font - medium text - zinc - 300">Timestamp</th>;
                <th className="px - 4 py - 2 text - left font - medium text - zinc - 300">Method</th>;
                <th className="px - 4 py - 2 text - left font - medium text - zinc - 300">Endpoint</th>;
                <th className="px - 4 py - 2 text - left font - medium text - zinc - 300">Status</th>;
                <th className="px - 4 py - 2 text - left font - medium text - zinc - 300">Response Time</th>;
                <th className="px - 4 py - 2 text - left font - medium text - zinc - 300">IP Address</th>;
              </tr>;
            </thead>;
            <tbody>;
              {loading ? (
                <tr>;
                  <td col_span={6} className="text - center py - 12">;
                    <div className="flex flex - col items - center">;
                      <div className="animate - spin rounded - full h - 8 w - 8 border - t-2 border - b-2 border - zion - cyan mb - 4"></div>;
                      <span className="text - zinc - 500">Loading logs...</span>;
                    </div>;
                  </td>;
                </tr>) : logs.length === 0 ? (
                <tr>;
                  <td col_span={6} className="text - center py - 12">;
                    <div className="flex flex - col items - center">;
                      <List className="opacity - 30 mb - 3" size={24} />;
                      <span className="text - zinc - 500">No API logs found.</span>;
                      <span className="text - sm text - zinc - 600 mt - 1">;
                        Logs will appear here when you make API requests.;
                      </span>;
                    </div>;
                  </td>;
                </tr>) : (
                logs.map ((log) => (
                  <tr key={log.id} className="border - b border - zinc - 800 hover:bg - zinc - 800 / 40">;
                    <td className="px - 4 py - 3 text - sm">{format_timestamp (log.created_at)}</td>;
                    <td className="px - 4 py - 3">;
                      <Badge;
                        variant="outline";
                        className={
                          log.method === 'GET';
                            ? "border - green - 500 text - green - 400";
                            : log.method === 'POST';
                            ? "border - blue - 500 text - blue - 400";
                            : log.method === 'PUT';
                            ? "border - yellow - 500 text - yellow - 400";
                            : "border - red - 500 text - red - 400";
                        }
                      >;
                        {log.method}
                      </Badge>;
                    </td>;
                    <td className="px - 4 py - 3 font - mono text - sm text - zinc - 400">{log.endpoint}</td>;
                    <td className="px - 4 py - 3">;
                      <div className="flex items - center">;
                        <span className="font - mono mr - 2">{log.status_code}</span>;
                        {getStatusBadge (log.status_code)}
                      </div>;
                    </td>;
                    <td className="px - 4 py - 3 text - sm">;
                      {log.response_time_ms ? `${log.response_time_ms}ms` : '-'}
                    </td>;
                    <td className="px - 4 py - 3 text - sm">{log.ip_address || '-'}</td>;
                  </tr>)))}
            </tbody>;
          </table>;
        </div>;
        {logs.length > 0 && (
          <div className="mt - 4 flex justify - between items - center">;
            <div className="text - sm text - zinc - 500">;
              Showing {current_page * page_size + 1} to {Math.min ((current_page + 1) * page_size, total_logs)} of {total_logs} logs;
            </div>;
            <div className="flex space - x-2">;
              <Button;
                variant="outline";
                size="sm";
                disabled={!hasPrevPage}
                on_click={() => setCurrentPage (current_page - 1)}
              >;
                Previous;
              </Button>;
              <Button;
                variant="outline";
                size="sm";
                disabled={!hasNextPage}
                on_click={() => setCurrentPage (current_page + 1)}
              >;
                Next;
              </Button>;
            </div>;
          </div>)}
      </CardContent>;
    </Card>);
  ),; import {
  {
  {
  Button 
}from "@/components/ui/button";
import {
  {
  {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
}from "@/components/ui/card";
import {
  {
  {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
}from "@/components/ui/select";
import {
  {
  {
  Badge 
}from "@/components/ui/badge";
export function ApiLogs () {
  const {
  logs, totalLogs, loading, fetchApiLogs 
}= useApiKeys ();
const [pageSize, setPageSize] = useState (25);
const [currentPage, setCurrentPage] = useState (0);
//Load logs on mount and when pagination changes useEffect ( () => {
  fetchApiLogs (pageSize, currentPage * pageSize) 
}, [pageSize, currentPage]);
const handleRefresh = () => {
  fetchApiLogs (pageSize, currentPage * pageSize) 
};
//Helper to format the timestamp const formatTimestamp = (timestamp: string) => {
  return format (new Date (timestamp), 'yyyy-MM-dd HH: mm:ss') 
};
//Helper to get badge color based on status code const getStatusBadge = (statusCode: number) => {
  if (statusCode >= 200 && statusCode < 300) {
  
}
};
//Calculate pagination info const totalPages = Math.ceil (totalLogs / pageSize);
const hasNextPage = currentPage < totalPages - 1;
const hasPrevPage = currentPage > 0;
bg-zinc-900 border-zinc-800 text-white"> <CardHeader> </CardTitle> <CardDescription className=" text-zinc-400"> View logs of requests made using your API keys. </CardDescription> </CardHeader> <CardContent> <div className=" flex justify-between items-center mb-6"> <div className=" flex items-center space-x-2"> <span className=" text-sm text-zinc-400">Show</span> <Select > <SelectTrigger className=" w-20 bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" 25"/> </SelectTrigger> <SelectContent className=" bg-zinc-900 border-zinc-800"> <SelectItem value=" 10">10</SelectItem> <SelectItem value=" 25">25</SelectItem> <SelectItem value=" 50">50</SelectItem> <SelectItem value=" 100">100</SelectItem> </SelectContent> </Select> <span className=" text-sm text-zinc-400">per page</span> </div> </Button> </div> <div className=" overflow-x-auto"> <table className=" w-full border-collapse"> <thead> <tr className=" border-b border-zinc-800"> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Method</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Status</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Response Time</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">IP Address</th> </tr> </thead> <tbody> {
  loading ? (<tr> <td colSpan= {
  6 
}className=" text-center py-12"> <div className=" flex flex-col items-center"> <div className=" animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div> <span className=" text-zinc-500">Loading logs...</span> </div> </td> </tr>) : logs.length === 0 ? (<tr> Logs will appear here when you make API requests. </span> </div> </td> </tr> : log.method === 'POST' ? " border-blue-500 text-blue-400": log.method === 'PUT' > {
  log.method 
}</Badge> </td> </tr>) ) ) 
}</tbody> </table> </div> </div> <div className=" flex space-x-2" > <Button > Previous </Button> <Button > Next </Button> </div> </div>) 
}</CardContent> </Card>) 
}
>>>>>>> merged-prs-20250907-203621
                            ? "border-blue-500 text-blue-400"
                            : log.method === 'PUT'
                            ? "border-yellow-500 text-yellow-400"
                            : "border-red-500 text-red-400"
                        }
                      >
                        {log.method}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-zinc-400">{log.endpoint}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-mono mr-2">{log.status_code}</span>
                        {getStatusBadge(log.status_code)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {log.response_time_ms ? `${log.response_time_ms}ms` : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm">{log.ip_address |'-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {logs.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-zinc-500">
              Showing {currentPage * pageSize + 1} to {Math.min((currentPage + 1) * pageSize, totalLogs)} of {totalLogs} logs
            </div>
            <div className="flex space-x-2">
<<<<<<< HEAD
=======
=======

        {logs && logs.length > 0 && (;
          <div className="mt-4 flex justify-between items-center">;
            <div className="text-sm text-zinc-500">;
              Showing {currentPage * pageSize + 1} to {Math && Math.min((currentPage + 1) * pageSize, totalLogs)} of {totalLogs} logs;
            </div>;
            <div className="flex space-x-2">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              <Button
                variant="outline"
                size="sm"
                disabled={!hasPrevPage}
                onClick={() => setCurrentPage(currentPage - 1)}
<<<<<<< HEAD
              >
                Previous
              </Button>
=======
<<<<<<< HEAD
              >
                Previous
              </Button>
=======
              >;
                Previous;
              </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              <Button
                variant="outline"
                size="sm"
                disabled={!hasNextPage}
                onClick={() => setCurrentPage(currentPage + 1)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
=======
=======
              >;
                Next;
              </Button>;
            </div>;
          </div>;
        )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from './react';

import { format } from './date - fns';
import { List, RefreshCw } from './lucide-react';

import { useApiKeys, type, ApiLog } from '@/hooks / useApiKeys';
;

<<<<<<< HEAD
      </CardContent>;
    </Card>;
  );
}
=======
<<<<<<< HEAD
      </CardContent>;
    </Card>;
  );
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
