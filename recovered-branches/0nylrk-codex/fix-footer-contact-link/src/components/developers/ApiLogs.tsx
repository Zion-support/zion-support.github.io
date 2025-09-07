


export function ApiLogs() {
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  // Load logs on mount and when pagination changes;
  useEffect(() => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  }, [pageSize, currentPage]);

  const handleRefresh = () => {
  }
  // Helper to format the timestamp;
  const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss')
export function ApiLogs() {;



import { useState, useEffect } from "react",""
import { format } from "date-fns",""
import { List, RefreshCw } from "lucide-react",""
import { useApiKeys, type ApiLog } from "@/hooks/useApiKeys",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { Badge } from "@/components/ui/badge","
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys(),
  const [pageSize, setPageSize] = useState(25),
  const [currentPage, setCurrentPage] = useState(0),

  
  
  // Load logs on mount and when pagination changes;

  // Helper to format the timestamp;
  const formatTimestamp = (timestamp: string) => {"
  },
  
  
  // Helper to get badge color based on status code;
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success"
    } else if (statusCode >= 400 && statusCode < 500) {"
      return <Badge className="bg-amber-700">Client Error""
      return <Badge className="bg-red-700">Server Error""
      return <Badge className="bg-blue-700">Other"
    if (statusCode >= 200 && statusCode < 300) {;"
      return <Badge className="bg-green-700">Success;"
    } else if (statusCode >= 400 && statusCode < 500) {;"
      return <Badge className="bg-amber-700">Client Error;""
      return <Badge className="bg-red-700">Server Error;""
      return <Badge className="bg-blue-700">Other;"
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;
  
  // Calculate pagination info;
  const totalPages = Math.ceil(totalLogs / pageSize),
  const hasNextPage = currentPage < totalPages - 1,
  const hasPrevPage = currentPage > 0,


  return (

            <Select;

)
  const hasNextPage = currentPage < totalPages - 1,;
  return (;

"
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"

      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;"
          <List className="mr-2" size={20} /> API Request Logs;"

        ;"
        <CardDescription className="text-zinc-400">;"

        ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;"
</div>"
          <div className="flex items-center space-x-2">;"
            <span className="text-sm text-zinc-400">Show</span>;"
            <Select;)
              value={pageSize && pageSize.toString()}
              onValueChange={(value) => {;

              value={pageSize.toString()}
              <SelectTrigger className="w-20 bg-zinc-800 border-zinc-700">"
                <SelectValue placeholder="25" />"

              <SelectContent className="bg-zinc-900 border-zinc-800">"
                <SelectItem value="10">10""
                <SelectItem value="25">25""
                <SelectItem value="50">50""
                <SelectItem value="100">100"
              
            <span className="text-sm text-zinc-400">per page</span>"
          <Button variant="outline" size="sm" onClick={handleRefresh}>"
            <RefreshCw size={14} className="mr-1" /> Refresh;"

          
        <div className="overflow-x-auto">"
          <table className="w-full border-collapse">"
</table>
            <thead>
</thead>"
              <tr className="border-b border-zinc-800">"
</tr>"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th>""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Method</th>""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th>""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Status</th>""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Response Time</th>""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">IP Address</th>"
              </tr>
            </thead>
            <tbody>
</tbody>
                <tr>
                  <td colSpan={6} className="text-center py-12">"
</td>"
                    <div className="flex flex-col items-center">"
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div>""
                      <span className="text-zinc-500">Loading logs...</span>"
                    </div>
                  </td>
                      <List className="opacity-30 mb-3" size={24} />"
                      <span className="text-zinc-500">No API logs found.</span>""
                      <span className="text-sm text-zinc-600 mt-1">"
</span>
                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">"
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>""
                    <td className="px-4 py-3">"
                      <Badge;"
                        variant="outline""
                        className={"
                          log.method === 'GET
                            ? "border-green-500 text-green-400"""
                            : log.method === 'POST
                setCurrentPage(0), // Reset to first page when changing page size;
              }}
            >;

              <SelectTrigger className="w-20 bg-zinc-800 border-zinc-700">;"
                <SelectValue placeholder="25" />;"

              <SelectContent className="bg-zinc-900 border-zinc-800">;"
                <SelectItem value="10">10;""
                <SelectItem value="25">25;""
                <SelectItem value="50">50;""
                <SelectItem value="100">100;"
            <span className="text-sm text-zinc-400">per page</span>;"
          </div>;"
          <Button variant="outline" size="sm" onClick={handleRefresh}>;"

        <div className="overflow-x-auto">;"
          <table className="w-full border-collapse">;"
            <thead>;
              <tr className="border-b border-zinc-800">;"
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th>;""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Method</th>;""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th>;""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Status</th>;""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">Response Time</th>;""
                <th className="px-4 py-2 text-left font-medium text-zinc-300">IP Address</th>;"
              </tr>;
            </thead>;
            <tbody>;
                <tr>;
                  <td colSpan={6} className="text-center py-12">;"
                    <div className="flex flex-col items-center">;"
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div>;""
                      <span className="text-zinc-500">Loading logs...</span>;"
                    </div>;
                  </td>;
                      <List className="opacity-30 mb-3" size={24} />;"
                      <span className="text-zinc-500">No API logs found.</span>;""
                      <span className="text-sm text-zinc-600 mt-1">;"
                      </span>;
                </tr>;"
                  <tr key={log && log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">;"
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log && log.created_at)}</td>;""
                    <td className="px-4 py-3">;"
                          log && log.method === 'GET
                            : log && log.method === 'POST
                            ? "border-blue-500 text-blue-400"""
                            : log && log.method === 'PUT
                            ? "border-yellow-500 text-yellow-400"""
                            : "border-red-500 text-red-400""
                        }>;

                    </td>;"
                    <td className="px-4 py-3 font-mono text-sm text-zinc-400">{log && log.endpoint}</td>;""
                      <div className="flex items-center">;"
                        <span className="font-mono mr-2">{log && log.status_code}</span>;"
                    <td className="px-4 py-3 text-sm">;"
                    <td className="px-4 py-3 text-sm">{log && log.ip_address || '-'}</td>;
            </tbody>;
          </table>;
          <div className="mt-4 flex justify-between items-center">;"
            <div className="text-sm text-zinc-500">;"
            <div className="flex space-x-2">;"
              <Button;"
                variant="outline"""
                size="sm""
                disabled={!hasPrevPage}
                onClick={() => setCurrentPage(currentPage - 1)}

                disabled={!hasNextPage}
                onClick={() => setCurrentPage(currentPage + 1)}
