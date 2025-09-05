
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { format } from "date-fns",
import { List, RefreshCw } from 'lucide-react'
import { useApiKeys } from "@/hooks/useApiKeys",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Badge } from "@/components/ui/badge",
import { ApiLogsChart } from "./ApiLogsChart",
=======
import { useState, useEffect } from &quot;react&quot;;
import { format } from &quot;date-fns&quot;;
import { List, RefreshCw } from 'lucide-react'
import { useApiKeys } from &quot;@/hooks/useApiKeys&quot;;

import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ApiLogsChart } from &quot;./ApiLogsChart&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ApiLogs() {
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),
  const [pageSize, setPageSize] = useState(25),
  const [currentPage, setCurrentPage] = useState(0),
  
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
  
  // Helper to get badge color based on status code
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
<<<<<<< HEAD
      return <Badge className="bg-green-700">Success</Badge>
    } else if (statusCode >= 400 && statusCode < 500) {
      return <Badge className="bg-amber-700">Client Error</Badge>
    } else if (statusCode >= 500) {
      return <Badge className="bg-red-700">Server Error</Badge>
    } else {
      return <Badge className="bg-blue-700">Other</Badge>
=======
      return <Badge className=&quot;bg-green-700&quot;>Success</Badge>;
    } else if (statusCode >= 400 && statusCode < 500) {
      return <Badge className=&quot;bg-amber-700&quot;>Client Error</Badge>;
    } else if (statusCode >= 500) {
      return <Badge className=&quot;bg-red-700&quot;>Server Error</Badge>;
    } else {
      return <Badge className=&quot;bg-blue-700&quot;>Other</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  // Calculate pagination info
  const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,
=======


export function ApiLogs() {_const { logs, _totalLogs, _loading, _fetchApiLogs} = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Load logs on mount and when pagination changes
  useEffect__(() => {_fetchApiLogs(pageSize, _currentPage * pageSize);}, [pageSize, currentPage]);
  
  const _handleRefresh = () => {_fetchApiLogs(pageSize, _currentPage * pageSize);};
  
  // Helper to format the timestamp
  const _formatTimestamp = (_timestamp: string) => {_return format(new Date(timestamp), _'yyyy-MM-dd HH:mm:ss');};
  
  // Helper to get badge color based on status code
  const _getStatusBadge = (_statusCode: number) => {_if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success</Badge>;} else if (statusCode >= 400 && statusCode < 500) {_return <Badge className="bg-amber-700">Client Error</Badge>;} else if (statusCode >= 500) {_return <Badge className="bg-red-700">Server Error</Badge>;} else {_return <Badge className="bg-blue-700">Other</Badge>;}
  };
  
  // Calculate pagination info
  const _totalPages = Math.ceil(totalLogs / pageSize);
  const _hasNextPage = currentPage < totalPages - 1;
  const _hasPrevPage = currentPage > 0;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card className=&quot;bg-zinc-900 border-zinc-800 text-white&quot;>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className=&quot;text-xl flex items-center&quot;>
          <List className=&quot;mr-2&quot; size={20} /> API Request Logs
=======
        <CardTitle className="text-xl flex items-center">
          <List className="mr-2" size={_20} /> API Request Logs
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </CardTitle>
        <CardDescription className=&quot;text-zinc-400&quot;>
          View logs of requests made using your API keys.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className=&quot;flex justify-between items-center mb-6&quot;>
          <div className=&quot;flex items-center space-x-2&quot;>
            <span className=&quot;text-sm text-zinc-400&quot;>Show</span>
            <Select
<<<<<<< HEAD
              value={pageSize.toString()}
              onValueChange={(value) => {
                setPageSize(Number(value)),
                setCurrentPage(0), // Reset to first page when changing page size
              }}
=======
              value={_pageSize.toString()}
              onValueChange={_(_value) => {
                setPageSize(Number(value));
                setCurrentPage(0); // Reset to first page when changing page size}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <SelectTrigger className=&quot;w-20 bg-zinc-800 border-zinc-700&quot;>
                <SelectValue placeholder=&quot;25&quot; />
              </SelectTrigger>
              <SelectContent className=&quot;bg-zinc-900 border-zinc-800&quot;>
                <SelectItem value=&quot;10&quot;>10</SelectItem>
                <SelectItem value=&quot;25&quot;>25</SelectItem>
                <SelectItem value=&quot;50&quot;>50</SelectItem>
                <SelectItem value=&quot;100&quot;>100</SelectItem>
              </SelectContent>
            </Select>
            <span className=&quot;text-sm text-zinc-400&quot;>per page</span>
          </div>
          
<<<<<<< HEAD
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; onClick={handleRefresh}>
            <RefreshCw size={14} className=&quot;mr-1&quot; /> Refresh
          </Button>
        </div>

        {/* Visualization of logs per day */}
        {logs.length > 0 && (
          <div className=&quot;mb-6&quot;>
=======
          <Button variant="outline" size="sm" onClick={_handleRefresh}>
            <RefreshCw size={_14} className="mr-1" /> Refresh
          </Button>
        </div>

        {_/* Visualization of logs per day */}
        {_logs.length > 0 && (
          <div className="mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ApiLogsChart logs={logs} />
          </div>
        )}

        <div className=&quot;overflow-x-auto&quot;>
          <table className=&quot;w-full border-collapse&quot;>
            <thead>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <th className=&quot;px-4 py-2 text-left font-medium text-zinc-300&quot;>Timestamp</th>
                <th className=&quot;px-4 py-2 text-left font-medium text-zinc-300&quot;>Method</th>
                <th className=&quot;px-4 py-2 text-left font-medium text-zinc-300&quot;>Endpoint</th>
                <th className=&quot;px-4 py-2 text-left font-medium text-zinc-300&quot;>Status</th>
                <th className=&quot;px-4 py-2 text-left font-medium text-zinc-300&quot;>Response Time</th>
                <th className=&quot;px-4 py-2 text-left font-medium text-zinc-300&quot;>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {_loading ? (
                <tr>
                  <td colSpan={6} className=&quot;text-center py-12&quot;>
                    <div className=&quot;flex flex-col items-center&quot;>
                      <div className=&quot;animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4&quot;></div>
                      <span className=&quot;text-zinc-500&quot;>Loading logs...</span>
                    </div>
                  </td>
                </tr>
              ) : logs.length === 0 ? (
                <tr>
<<<<<<< HEAD
                  <td colSpan={6} className=&quot;text-center py-12&quot;>
                    <div className=&quot;flex flex-col items-center&quot;>
                      <List className=&quot;opacity-30 mb-3&quot; size={24} />
                      <span className=&quot;text-zinc-500&quot;>No API logs found.</span>
                      <span className=&quot;text-sm text-zinc-600 mt-1&quot;>
=======
                  <td colSpan={_6} className="text-center py-12">
                    <div className="flex flex-col items-center">
                      <List className="opacity-30 mb-3" size={_24} />
                      <span className="text-zinc-500">No API logs found.</span>
                      <span className="text-sm text-zinc-600 mt-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Logs will appear here when you make API requests.
                      </span>
                    </div>
                  </td>
                </tr>
<<<<<<< HEAD
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className=&quot;border-b border-zinc-800 hover:bg-zinc-800/40&quot;>
                    <td className=&quot;px-4 py-3 text-sm&quot;>{formatTimestamp(log.created_at)}</td>
                    <td className=&quot;px-4 py-3&quot;>
                      <Badge 
                        variant=&quot;outline&quot;
                        className={
                          log.method === 'GET' 
                            ? &quot;border-green-500 text-green-400&quot; 
=======
              ) : (_logs.map((log) => (
                  <tr key={_log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">
                    <td className="px-4 py-3 text-sm">{_formatTimestamp(log.created_at)}</td>
                    <td className="px-4 py-3">
                      <Badge 
                        variant="outline"
                        className={_log.method === 'GET' 
                            ? "border-green-500 text-green-400" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            : log.method === 'POST' 
                            ? &quot;border-blue-500 text-blue-400&quot;
                            : log.method === 'PUT'
<<<<<<< HEAD
                            ? &quot;border-yellow-500 text-yellow-400&quot;
                            : &quot;border-red-500 text-red-400&quot;
                        }
=======
                            ? "border-yellow-500 text-yellow-400"
                            : "border-red-500 text-red-400"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        {_log.method}
                      </Badge>
                    </td>
<<<<<<< HEAD
                    <td className=&quot;px-4 py-3 font-mono text-sm text-zinc-400&quot;>{log.endpoint}</td>
                    <td className=&quot;px-4 py-3&quot;>
                      <div className=&quot;flex items-center&quot;>
                        <span className=&quot;font-mono mr-2&quot;>{log.status_code}</span>
                        {getStatusBadge(log.status_code)}
                      </div>
                    </td>
                    <td className=&quot;px-4 py-3 text-sm&quot;>
                      {log.response_time_ms ? `${log.response_time_ms}ms` : '-'}
                    </td>
                    <td className=&quot;px-4 py-3 text-sm&quot;>{log.ip_address || '-'}</td>
=======
                    <td className="px-4 py-3 font-mono text-sm text-zinc-400">{_log.endpoint}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-mono mr-2">{_log.status_code}</span>
                        {_getStatusBadge(log.status_code)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {_log.response_time_ms ? `${log.response_time_ms}ms` : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm">{_log.ip_address || '-'}</td>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
<<<<<<< HEAD
        {logs.length > 0 && (
          <div className=&quot;mt-4 flex justify-between items-center&quot;>
            <div className=&quot;text-sm text-zinc-500&quot;>
              Showing {currentPage * pageSize + 1} to {Math.min((currentPage + 1) * pageSize, totalLogs)} of {totalLogs} logs
=======
        {_logs.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-zinc-500">
              Showing {currentPage * pageSize + 1} to {_Math.min((currentPage + 1) * pageSize, _totalLogs)} of {_totalLogs} logs
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <div className=&quot;flex space-x-2&quot;>
              <Button
<<<<<<< HEAD
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                disabled={!hasPrevPage}
                onClick={() => setCurrentPage(currentPage - 1)}
=======
                variant="outline"
                size="sm"
                disabled={_!hasPrevPage}
                onClick={_() => setCurrentPage(currentPage - 1)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Previous
              </Button>
              <Button
<<<<<<< HEAD
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                disabled={!hasNextPage}
                onClick={() => setCurrentPage(currentPage + 1)}
=======
                variant="outline"
                size="sm"
                disabled={_!hasNextPage}
                onClick={_() => setCurrentPage(currentPage + 1)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
