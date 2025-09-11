
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
=======
export function ApiLogs() {;
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from "react",
import { format } from "date-fns",
import { List, RefreshCw } from "lucide-react",
import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys",

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Badge } from "@/components/ui/badge",
export function ApiLogs() {
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),
  const [pageSize, setPageSize] = useState(25),
  const [currentPage, setCurrentPage] = useState(0),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  
  // Load logs on mount and when pagination changes
  useEffect(() => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  }, [pageSize, currentPage]),
  
  const handleRefresh = () => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  },
  
  // Helper to format the timestamp
  const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss')
  },
  
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

  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  // Calculate pagination info
  const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,

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
  const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,


  return (

            <Select

  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
  return (

=======              value={pageSize.toString()}
              onValueChange={(value) => {
                setPageSize(Number(value));

                setCurrentPage(0), // Reset to first page when changing page size
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
            <Select
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { List, RefreshCw } from "lucide-react",;
import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <List className="mr-2" size={20} /> API Request Logs;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          View logs of requests made using your API keys.;
        </CardDescription>;
      </CardHeader>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <div className="flex items-center space-x-2">;
            <span className="text-sm text-zinc-400">Show</span>;
                setCurrentPage(0), // Reset to first page when changing page size;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <Button variant="outline" size="sm" onClick={handleRefresh}>;
            <RefreshCw size={14} className="mr-1" /> Refresh;
          </Button>;
        </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
