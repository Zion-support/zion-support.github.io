<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx


<<<<<<< HEAD
=======

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { Card } from "@/components/ui/card";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
=======
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Card } from "@/components/ui/card",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Sample data for integration sync logs

const syncLogs = [
  {
    id: "1"
    integration: "Salesforce"
    event: "contact_synced"
    status: "success"
    timestamp: "2024-05-20T12:30:45Z"
    details: "Successfully synced contact data for Job #1234"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    id: "2"
    integration: "Greenhouse"
    event: "applicant_created"
    status: "success"
    timestamp: "2024-05-20T10:15:22Z"
    details: "New applicant created in Greenhouse from Zion application"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    id: "3"
    integration: "HubSpot"
    event: "deal_updated"
    status: "error"
    timestamp: "2024-05-19T16:45:12Z"
    details: "Failed to update deal - API rate limit exceeded"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    id: "4"
    integration: "Zoho CRM"
    event: "job_synced"
    status: "warning"
    timestamp: "2024-05-19T14:22:33Z"
    details: "Job synced but some fields were skipped due to mapping issues"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    id: "5"
    integration: "Lever"
    event: "candidate_status_changed"
    status: "success"
    timestamp: "2024-05-18T09:10:05Z"
    details: "Updated candidate status to 'Interview Scheduled'"
  }
<<<<<<< HEAD
<<<<<<< HEAD

export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
=======

],


export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {

    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
];
=======
],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {
<<<<<<< HEAD
    switch (status) {;
      case "success": return <Badge className="bg-green-500">Success</Badge>;
=======
    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "error":
        return <Badge variant="destructive">Error</Badge>,
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }

=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card>
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
            {syncLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.integration}</TableCell>
                <TableCell>
                  {log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </TableCell>
                <TableCell>{getStatusBadge(log.status)}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>
              </TableRow>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card } from "@/components/ui/card",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Sample data for integration sync logs;
const syncLogs = [;
  {;
    id: "1",;
    integration: "Salesforce",;
    event: "contact_synced",;
    status: "success",;
    timestamp: "2024-05-20T12:30:45Z",;
    details: "Successfully synced contact data for Job #1234";
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;
<<<<<<< HEAD
    status: "success", ;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  };
=======
    status: "success",;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "3",;
    integration: "HubSpot",;
    event: "deal_updated",;
    status: "error",;
    timestamp: "2024-05-19T16:45:12Z",;
    details: "Failed to update deal - API rate limit exceeded";
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "4",;
    integration: "Zoho CRM",;
    event: "job_synced",;
    status: "warning",;
    timestamp: "2024-05-19T14:22:33Z",;
    details: "Job synced but some fields were skipped due to mapping issues";
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "5",;
    integration: "Lever",;
    event: "candidate_status_changed",;
    status: "success",;
    timestamp: "2024-05-18T09:10:05Z",;
    details: "Updated candidate status to 'Interview Scheduled'";
  }
<<<<<<< HEAD
];
export function IntegrationsSyncLog() {;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case "success": return <Badge className="bg-green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx

========
=======

import React from "react",;
import { Card } from "@/components/ui/card",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
;
// Sample data for integration sync logs;
const syncLogs = [;
  {;
    id:"1",;
    integration:"Salesforce",;
    event:"contact_synced",;
    status:"success",;
    timestamp:"2024-05-20T12:30:45Z",;
    details:"Successfully synced contact data for Job #1234";
  },;
  {;
    id:"2",;
    integration:"Greenhouse",;
    event:"applicant_created",;
    status:"success", ;
    timestamp:"2024-05-20T10:15:22Z",;
    details:"New applicant created in Greenhouse from Zion application";
  },;
  {;
    id:"3",;
    integration:"HubSpot",;
    event:"deal_updated",;
    status:"error",;
    timestamp:"2024-05-19T16:45:12Z",;
    details:"Failed to update deal - API rate limit exceeded";
  },;
  {;
    id:"4",;
    integration:"Zoho CRM",;
    event:"job_synced",;
    status:"warning",;
    timestamp:"2024-05-19T14:22:33Z",;
    details:"Job synced but some fields were skipped due to mapping issues";
  },;
  {;
    id:"5",;
    integration:"Lever",;
    event:"candidate_status_changed",;
    status:"success",;
    timestamp:"2024-05-18T09:10:05Z",;
    details:"Updated candidate status to 'Interview Scheduled'";
  }
],;
;
export function IntegrationsSyncLog() {;
  const getStatusBadge = (status:string) => {;
    switch (status) {;
      case "success":return <Badge className="bg-green-500">Success</Badge>,;
      case "error":;
        return <Badge variant="destructive">Error</Badge>,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
      case "warning":;
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;
        return <Badge variant="outline">Unknown</Badge>;
<<<<<<< HEAD
    }
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
  return (
    <Card>;
      <div className="p-4">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Integration</TableHead>;
              <TableHead>Event</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Time</TableHead>;
              <TableHead className="hidden md:table-cell">Details</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {syncLogs && syncLogs.map((log) => (;
              <TableRow key={log && log.id}>;
                <TableCell className="font-medium">{log && log.integration}</TableCell>;
                <TableCell>;
                  {log && log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l && l.toUpperCase())}
                </TableCell>;
                <TableCell>{getStatusBadge(log && log.status)}</TableCell>;
                <TableCell>{new Date(log && log.timestamp).toLocaleString()}</TableCell>;
                <TableCell className="hidden md:table-cell">{log && log.details}</TableCell>;
              </TableRow>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ))}

========
            ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
          </TableBody>;
        </Table>;
      </div>;
    </Card>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
import React from './react';
import { Card } from '@/components / ui / card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
// Sample data for integration sync logs;
const sync_logs = [;
  {
    id: "1",
    integration: "Salesforce",
    event: "contact_synced",
    status: "success",
    timestamp: "2024 - 05 - 20T12:30:45Z",
    details: "Successfully synced contact data for Job #1234";
  }
  {
    id: "2",
    integration: "Greenhouse",
    event: "applicant_created",
    status: "success",
    timestamp: "2024 - 05 - 20T10:15:22Z",
    details: "New applicant created in Greenhouse from Zion application";
  }
  {
    id: "3",
    integration: "HubSpot",
    event: "deal_updated",
    status: "error",
    timestamp: "2024 - 05 - 19T16:45:12Z",
    details: "Failed to update deal - API rate limit exceeded";
  }
  {
    id: "4",
    integration: "Zoho CRM",
    event: "job_synced",
    status: "warning",
    timestamp: "2024 - 05 - 19T14:22:33Z",
    details: "Job synced but some fields were skipped due to mapping issues";
  }
  {
    id: "5",
    integration: "Lever",
    event: "candidate_status_changed",
    status: "success",
    timestamp: "2024 - 05 - 18T09:10:05Z",
    details: "Updated candidate status to 'Interview Scheduled'";
  }
];
;
<<<<<<< HEAD

=======
export /**
 * IntegrationsSyncLog - Function description
 */
function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) =>: any {
    switch (status) {
      case "success": return <Badge className="bg - green - 500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;
      case "warning":;
        return <Badge className="bg - amber - 500">Warning</Badge>,
      default:;
        return <Badge variant="outline">Unknown</Badge>;
    }
  }
;
  return (
    <Card>;
      <div className="p - 4">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Integration</TableHead>;
              <TableHead > Event</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Time</TableHead>;
              <TableHead className="hidden md:table - cell">Details</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {sync_logs.map ((log) => (
              <TableRow key={log.id}>;
                <TableCell className="font - medium">{log.integration}</TableCell>;
                <TableCell>;
                  {log.event.replace (/_ / g, ' ').replace (/\b\w / g, l => l.toUpperCase ())}
                </TableCell>;
                <TableCell>{getStatusBadge (log.status)}</TableCell>;
                <TableCell>{new Date (log.timestamp).toLocaleString ()}</TableCell>;
                <TableCell className="hidden md:table - cell">{log.details}</TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </Card>);
=======
    }
  },;
  ;
=======
],;
export function IntegrationsSyncLog() {;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case "success": return <Badge className="bg-green-500">Success</Badge>,;
      case "error":;
        return <Badge variant="destructive">Error</Badge>,;
      case "warning":;
        return <Badge className="bg-amber-500">Warning</Badge>;
      default:;
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <Card>;
      <div className="p-4">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Integration</TableHead>;
              <TableHead>Event</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Time</TableHead>;
              <TableHead className="hidden md:table-cell">Details</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {syncLogs.map((log) => (;
              <TableRow key={log.id}>;
                <TableCell className="font-medium">{log.integration}</TableCell>;
                <TableCell>;
                  {log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </TableCell>;
                <TableCell>{getStatusBadge(log.status)}</TableCell>;
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>;
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>;
              </TableRow>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </Card>;
<<<<<<< HEAD
  ),; import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
  const getStatusBadge = (status: string) => {
  switch (status) {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<Card> <div className="p-4" > hidden md:table-cell" >Details</TableHead> </TableRow> </TableHeader> <TableBody> {
  syncLogs.map ( (log) => (<TableRow key= {
  log.id 
}> <TableCell> {
  log.event.replace (/ /g, ' ') .replace (/\b\w/g, l => l.toUpperCase () ) 
}</TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/IntegrationsSyncLog.tsx
=======
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
