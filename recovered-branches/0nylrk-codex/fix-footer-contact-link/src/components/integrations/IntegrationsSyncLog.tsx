
<<<<<<< HEAD
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
=======
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Sample data for integration sync logs
<<<<<<< HEAD
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
=======
const _syncLogs = [
  {_id: "1", _integration: "Salesforce", _event: "contact_synced", _status: "success", _timestamp: "2024-05-20T12:30:45Z", _details: "Successfully synced contact data for Job #1234"},
  {_id: "2", _integration: "Greenhouse", _event: "applicant_created", _status: "success", _timestamp: "2024-05-20T10:15:22Z", _details: "New applicant created in Greenhouse from Zion application"},
  {_id: "3", _integration: "HubSpot", _event: "deal_updated", _status: "error", _timestamp: "2024-05-19T16:45:12Z", _details: "Failed to update deal - API rate limit exceeded"},
  {_id: "4", _integration: "Zoho CRM", _event: "job_synced", _status: "warning", _timestamp: "2024-05-19T14:22:33Z", _details: "Job synced but some fields were skipped due to mapping issues"},
  {_id: "5", _integration: "Lever", _event: "candidate_status_changed", _status: "success", _timestamp: "2024-05-18T09:10:05Z", _details: "Updated candidate status to 'Interview Scheduled'"}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function IntegrationsSyncLog() {_const _getStatusBadge = (_status: string) => {
    switch (status) {
<<<<<<< HEAD
      case "success": return <Badge className="bg-green-500">Success</Badge>,
      case "error":
        return <Badge variant="destructive">Error</Badge>,
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>,
      default:
<<<<<<< HEAD
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
=======
        return <Badge variant="outline">Unknown</Badge>;}
  };
  
  return (_<Card>
      <div className="p-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            {_syncLogs.map((log) => (
              <TableRow key={log.id}>
<<<<<<< HEAD
                <TableCell className=&quot;font-medium&quot;>{log.integration}</TableCell>
=======
                <TableCell className="font-medium">{_log.integration}</TableCell>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <TableCell>
                  {_log.event.replace(/_/g, _' ').replace(/\b\w/g, _l => l.toUpperCase())}
                </TableCell>
<<<<<<< HEAD
                <TableCell>{getStatusBadge(log.status)}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className=&quot;hidden md:table-cell&quot;>{log.details}</TableCell>
=======
                <TableCell>{_getStatusBadge(log.status)}</TableCell>
                <TableCell>{_new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">{_log.details}</TableCell>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
