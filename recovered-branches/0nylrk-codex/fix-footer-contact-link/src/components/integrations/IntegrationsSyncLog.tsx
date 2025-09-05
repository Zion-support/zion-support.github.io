
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

// Sample data for integration sync logs
const _syncLogs = [
  {_id: "1", _integration: "Salesforce", _event: "contact_synced", _status: "success", _timestamp: "2024-05-20T12:30:45Z", _details: "Successfully synced contact data for Job #1234"},
  {_id: "2", _integration: "Greenhouse", _event: "applicant_created", _status: "success", _timestamp: "2024-05-20T10:15:22Z", _details: "New applicant created in Greenhouse from Zion application"},
  {_id: "3", _integration: "HubSpot", _event: "deal_updated", _status: "error", _timestamp: "2024-05-19T16:45:12Z", _details: "Failed to update deal - API rate limit exceeded"},
  {_id: "4", _integration: "Zoho CRM", _event: "job_synced", _status: "warning", _timestamp: "2024-05-19T14:22:33Z", _details: "Job synced but some fields were skipped due to mapping issues"},
  {_id: "5", _integration: "Lever", _event: "candidate_status_changed", _status: "success", _timestamp: "2024-05-18T09:10:05Z", _details: "Updated candidate status to 'Interview Scheduled'"}
];

export function IntegrationsSyncLog() {_const _getStatusBadge = (_status: string) => {
    switch (status) {
      case "success":
        return <Badge className="bg-green-500">Success</Badge>;
      case "error":
        return <Badge variant="destructive">Error</Badge>;
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;}
  };
  
  return (_<Card>
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Integration</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="hidden md:table-cell">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_syncLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{_log.integration}</TableCell>
                <TableCell>
                  {_log.event.replace(/_/g, _' ').replace(/\b\w/g, _l => l.toUpperCase())}
                </TableCell>
                <TableCell>{_getStatusBadge(log.status)}</TableCell>
                <TableCell>{_new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">{_log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
