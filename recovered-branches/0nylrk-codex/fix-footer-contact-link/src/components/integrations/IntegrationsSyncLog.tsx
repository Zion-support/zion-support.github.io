
<<<<<<< HEAD
import React from "react",
import { Card } from "@/components/ui/card",
=======
import React from &quot;react&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Sample data for integration sync logs
const syncLogs = [
  {
    id: &quot;1&quot;,
    integration: &quot;Salesforce&quot;,
    event: &quot;contact_synced&quot;,
    status: &quot;success&quot;,
    timestamp: &quot;2024-05-20T12:30:45Z&quot;,
    details: &quot;Successfully synced contact data for Job #1234&quot;
  },
  {
    id: &quot;2&quot;,
    integration: &quot;Greenhouse&quot;,
    event: &quot;applicant_created&quot;,
    status: &quot;success&quot;, 
    timestamp: &quot;2024-05-20T10:15:22Z&quot;,
    details: &quot;New applicant created in Greenhouse from Zion application&quot;
  },
  {
    id: &quot;3&quot;,
    integration: &quot;HubSpot&quot;,
    event: &quot;deal_updated&quot;,
    status: &quot;error&quot;,
    timestamp: &quot;2024-05-19T16:45:12Z&quot;,
    details: &quot;Failed to update deal - API rate limit exceeded&quot;
  },
  {
    id: &quot;4&quot;,
    integration: &quot;Zoho CRM&quot;,
    event: &quot;job_synced&quot;,
    status: &quot;warning&quot;,
    timestamp: &quot;2024-05-19T14:22:33Z&quot;,
    details: &quot;Job synced but some fields were skipped due to mapping issues&quot;
  },
  {
    id: &quot;5&quot;,
    integration: &quot;Lever&quot;,
    event: &quot;candidate_status_changed&quot;,
    status: &quot;success&quot;,
    timestamp: &quot;2024-05-18T09:10:05Z&quot;,
    details: &quot;Updated candidate status to 'Interview Scheduled'&quot;
  }
],

export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {
    switch (status) {
<<<<<<< HEAD
      case "success": return <Badge className="bg-green-500">Success</Badge>,
      case "error":
        return <Badge variant="destructive">Error</Badge>,
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>,
      default:
        return <Badge variant="outline">Unknown</Badge>
=======
      case &quot;success&quot;:
        return <Badge className=&quot;bg-green-500&quot;>Success</Badge>;
      case &quot;error&quot;:
        return <Badge variant=&quot;destructive&quot;>Error</Badge>;
      case &quot;warning&quot;:
        return <Badge className=&quot;bg-amber-500&quot;>Warning</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>Unknown</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  return (
    <Card>
      <div className=&quot;p-4&quot;>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Integration</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className=&quot;hidden md:table-cell&quot;>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {syncLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className=&quot;font-medium&quot;>{log.integration}</TableCell>
                <TableCell>
                  {log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </TableCell>
                <TableCell>{getStatusBadge(log.status)}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className=&quot;hidden md:table-cell&quot;>{log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
