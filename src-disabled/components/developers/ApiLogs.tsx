

:src_backup/components/developers/ApiLogs.tsx
:src/components/developers/ApiLogs.tsx
:src/components/developers/ApiLogs.tsx


:src_backup/components/developers/ApiLogs.tsx
import { ApiLogsChart  } from './ApiLogsChart';
import { ApiLogsChart  } from './ApiLogsChart';
import { ApiLogsChart  } from './ApiLogsChart;
export /**
 * ApiLogs - Function description
 */
function ApiLogs() {
  const { logs, total_logs, loading, fetchApiLogs } = useApiKeys ();
  const [page_size, setPageSize] = useState (25);
  const [current_page, setCurrentPage] = useState (0);
  const hasNextPage = current_page < total_pages - 1;
  const hasPrevPage = current_page > 0);
}
  );

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { List, RefreshCw } from 'lucide-react'
import { useApiKeys } from "@/hooks/useApiKeys";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ApiLogsChart } from "./ApiLogsChart";
import { useState, useEffect } from "react;
import { format } from date-fns";
import { List, RefreshCw } from lucide-react'
import { useApiKeys } from "@/hooks/useApiKeys;
import { Button } from @/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from @/components/ui/select";
import { Badge } from "@/components/ui/badge;
import { ApiLogsChart } from ./ApiLogsChart";

  
  const handleRefresh = () => {
    fetchApiLogs(pageSize, currentPage * pageSize)
  },
  
  // Helper to format the timestamp
  const formatTimestamp = (timestamp: string) => {,
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss'),
  },
  
  // Helper to get badge color based on status code
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success</Badge>,
    } else if (statusCode >= 400 && statusCode < 500) {
      return <Badge className="bg-amber-700">Client Error</Badge>
    } else if (statusCode >= 500) {
      return <Badge className="bg-red-700">Server Error</Badge>
    } else {
      return <Badge className="bg-blue-700">Other</Badge>
    }
  },
  
  // Calculate pagination info
  const totalPages = Math.ceil($2);
  const hasNextPage = $2;
  const hasPrevPage = $2;
  return (
    <Card className = $2;

                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>
                    <td className="px-4 py-3">

                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40">,
                    <td className="px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>
                    <td className="px-4 py-3">
                  <tr key={log.id} className="border-b border-zinc-800 hover:bg-zinc-800/40>,
                    <td className=px-4 py-3 text-sm">{formatTimestamp(log.created_at)}</td>
                    <td className="px-4 py-3>

:src/components/developers/ApiLogs.tsx
    </Card>
:src_backup/components/developers/ApiLogs.tsx
  )
}
;

;
