
<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { List, RefreshCw } from 'lucide-react';
import { useApiKeys } from "@/hooks/useApiKeys",;
;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Badge } from "@/components/ui/badge",;
import { ApiLogsChart } from "./ApiLogsChart",;
;
export function ApiLogs() {;
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),;
  const [pageSize, setPageSize] = useState(25),;
  const [currentPage, setCurrentPage] = useState(0),;
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
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <List className="mr-2" size={20} /> API Request Logs;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          View logs of requests made using your API keys.;
        </CardDescription>;
      </CardHeader>;
      ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <div className="flex items-center space-x-2">;
            <span className="text-sm text-zinc-400">Show</span>;
            <Select;
              value={pageSize.toString()}
              onValueChange={(value) => {;
                setPageSize(Number(value)),;
                setCurrentPage(0), // Reset to first page when changing page size;
              }}
            >;
              <SelectTrigger className="w-20 bg-zinc-800 border-zinc-700">;
                <SelectValue placeholder="25" />;
              </SelectTrigger>;
              <SelectContent className="bg-zinc-900 border-zinc-800">;
                <SelectItem value="10">10</SelectItem>;
                <SelectItem value="25">25</SelectItem>;
                <SelectItem value="50">50</SelectItem>;
                <SelectItem value="100">100</SelectItem>;
              </SelectContent>;
            </Select>;
            <span className="text-sm text-zinc-400">per page</span>;
          </div>;
          ;
          <Button variant="outline" size="sm" onClick={handleRefresh}>;
            <RefreshCw size={14} className="mr-1" /> Refresh;
          </Button>;
        </div>;
;
        {/* Visualization of logs per day */}
        {logs.length > 0 && (;
          <div className="mb-6">;
            <ApiLogsChart logs={logs} />;
          </div>;
        )}
;
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
              ) :logs.length === 0 ? (;
                <tr>;
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
                  </tr>;
                ));
              )}
            </tbody>;
          </table>;
        </div>;
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
                disabled={!hasPrevPage}
                onClick={() => setCurrentPage(currentPage - 1)}
              >;
                Previous;
              </Button>;
              <Button;
                variant="outline";
                size="sm";
                disabled={!hasNextPage}
                onClick={() => setCurrentPage(currentPage + 1)}
              >;
                Next;
              </Button>;
            </div>;
          </div>;
        )}
      </CardContent>;
    </Card>;
  ),;
=======
import { useState, useEffect } from "react",
import { format } from "date-fns",
import { List, RefreshCw } from 'lucide-react'
import { useApiKeys } from "@/hooks/useApiKeys",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Badge } from "@/components/ui/badge",
import { ApiLogsChart } from "./ApiLogsChart",export function ApiLogs() {
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),
  const [pageSize, setPageSize] = useState(25),
  const [currentPage, setCurrentPage] = useState(0),
  
  // Load logs on mount and when pagination changes,
useEffect(() => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  }, [pageSize, currentPage]),
  
  const handleRefresh = () => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  },
  
  // Helper to format the timestamp,
const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss')
  },
  
  // Helper to get badge color based on status code,
const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success</Badge>
    } else if (statusCode >= 400 && statusCode < 500) {
      return <Badge className="bg-amber-700">Client Error</Badge>
    } else if (statusCode >= 500) {
      return <Badge className="bg-red-700">Server Error</Badge>
    } else {
      return <Badge className="bg-blue-700">Other</Badge>    }
  },
  
  // Calculate pagination info,
const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,

export function ApiLogs() {const { logs, totalLogs, loading, fetchApiLogs} = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Load logs on mount and when pagination changes,
useEffect_(() => {fetchApiLogs(pageSize, currentPage * pageSize)}, [pageSize, currentPage]);
  
  const handleRefresh = () => {fetchApiLogs(pageSize, currentPage * pageSize)};
  
  // Helper to format the timestamp,
const formatTimestamp = (timestamp: string) => {return format(new Date(timestamp), _'yyyy-MM-dd HH:mm:ss')};
  
  // Helper to get badge color based on status code,
const getStatusBadge = (statusCode: number) => {if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success</Badge>} else if (statusCode >= 400 && statusCode < 500) {return <Badge className="bg-amber-700">Client Error</Badge>} else if (statusCode >= 500) {return <Badge className="bg-red-700">Server Error</Badge>} else {return <Badge className="bg-blue-700">Other</Badge>}
  };
  
  // Calculate pagination info,
const totalPages = Math.ceil(totalLogs / pageSize);
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;

  return (
    <Card className=&quot;bg-zinc-900 border-zinc-800 text-white&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-xl flex items-center&quot;>
          <List className=&quot;mr-2&quot; size={20} /> API Request Logs        </CardTitle>
        <CardDescription className=&quot;text-zinc-400&quot;>
          View logs of requests made using your API keys.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className=&quot;flex justify-between items-center mb-6&quot;>
          <div className=&quot;flex items-center space-x-2&quot;>
            <span className=&quot;text-sm text-zinc-400&quot;>Show</span>
            <Select,
value={pageSize.toString()}
              onValueChange={(value) => {
                setPageSize(Number(value)),
                setCurrentPage(0), // Reset to first page when changing page size
              }}            >
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
          
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; onClick={handleRefresh}>
            <RefreshCw size={14} className=&quot;mr-1&quot; /> Refresh
          </Button>
        </div>

        {/* Visualization of logs per day */}
        {logs.length > 0 && (
          <div className=&quot;mb-6&quot;>            <ApiLogsChart logs={logs} />
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
              {loading ? (
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
                  <td colSpan={6} className=&quot;text-center py-12&quot;>
                    <div className=&quot;flex flex-col items-center&quot;>
                      <List className=&quot;opacity-30 mb-3&quot; size={24} />
                      <span className=&quot;text-zinc-500&quot;>No API logs found.</span>
                      <span className=&quot;text-sm text-zinc-600 mt-1&quot;>                        Logs will appear here when you make API requests.
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className=&quot;border-b border-zinc-800 hover:bg-zinc-800/40&quot;>
                    <td className=&quot;px-4 py-3 text-sm&quot;>{formatTimestamp(log.createdat)}</td>
                    <td className=&quot;px-4 py-3&quot;>
                      <Badge,
variant=&quot;outline&quot;
                        className={
                          log.method === 'GET' 
                            ? &quot;border-green-500 text-green-400&quot;                             : log.method === 'POST' 
                            ? &quot;border-blue-500 text-blue-400&quot;
                            : log.method === 'PUT'
                            ? &quot;border-yellow-500 text-yellow-400&quot;
                            : &quot;border-red-500 text-red-400&quot
                        }                      >
                        {log.method}
                      </Badge>
                    </td>
                    <td className=&quot;px-4 py-3 font-mono text-sm text-zinc-400&quot;>{log.endpoint}</td>
                    <td className=&quot;px-4 py-3&quot;>
                      <div className=&quot;flex items-center&quot;>
                        <span className=&quot;font-mono mr-2&quot;>{log.statuscode}</span>
                        {getStatusBadge(log.statuscode)}
                      </div>
                    </td>
                    <td className=&quot;px-4 py-3 text-sm&quot;>
                      {log.responsetime_ms ? `${log.responsetime_ms}ms` : '-'}
                    </td>
                    <td className=&quot;px-4 py-3 text-sm&quot;>{log.ipaddress || '-'}</td>                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {logs.length > 0 && (
          <div className=&quot;mt-4 flex justify-between items-center&quot;>
            <div className=&quot;text-sm text-zinc-500&quot;>
              Showing {currentPage * pageSize + 1} to {Math.min((currentPage + 1) * pageSize, totalLogs)} of {totalLogs} logs            </div>
            <div className=&quot;flex space-x-2&quot;>
              <Button,
variant=&quot;outline&quot;
                size=&quot;sm&quot;
                disabled={!hasPrevPage}
                onClick={() => setCurrentPage(currentPage - 1)}              >
                Previous
              </Button>
              <Button,
variant=&quot;outline&quot;
                size=&quot;sm&quot;
                disabled={!hasNextPage}
                onClick={() => setCurrentPage(currentPage + 1)}              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
