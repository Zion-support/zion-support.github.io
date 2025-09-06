<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

<<<<<<< HEAD
=======
=======

import React from "react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Card } from "@/components/ui/card";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    id: "2"
    integration: "Greenhouse"
    event: "applicant_created"
    status: "success"
    timestamp: "2024-05-20T10:15:22Z"
    details: "New applicant created in Greenhouse from Zion application"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    id: "3"
    integration: "HubSpot"
    event: "deal_updated"
    status: "error"
    timestamp: "2024-05-19T16:45:12Z"
    details: "Failed to update deal - API rate limit exceeded"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    id: "4"
    integration: "Zoho CRM"
    event: "job_synced"
    status: "warning"
    timestamp: "2024-05-19T14:22:33Z"
    details: "Job synced but some fields were skipped due to mapping issues"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    id: "5"
    integration: "Lever"
    event: "candidate_status_changed"
    status: "success"
    timestamp: "2024-05-18T09:10:05Z"
    details: "Updated candidate status to 'Interview Scheduled'"
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
=======

],


export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {

    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,

=======


],


export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {

    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,

];
],

export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {
    switch (status) {;
      case "success": return <Badge className="bg-green-500">Success</Badge>;
    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case "error":
        return <Badge variant="destructive">Error</Badge>,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  },
  

=======
  },
  

  }

  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {;
    id: "3",;
    integration: "HubSpot",;
    event: "deal_updated",;
    status: "error",;
    timestamp: "2024-05-19T16:45:12Z",;
    details: "Failed to update deal - API rate limit exceeded";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {;
    id: "4",;
    integration: "Zoho CRM",;
    event: "job_synced",;
    status: "warning",;
    timestamp: "2024-05-19T14:22:33Z",;
    details: "Job synced but some fields were skipped due to mapping issues";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {;
    id: "5",;
    integration: "Lever",;
    event: "candidate_status_changed",;
    status: "success",;
    timestamp: "2024-05-18T09:10:05Z",;
    details: "Updated candidate status to 'Interview Scheduled'";
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
];

export function IntegrationsSyncLog() {;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      case "success": return <Badge className="bg-green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case "warning":;
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;
        return <Badge variant="outline">Unknown</Badge>;
<<<<<<< HEAD
    }
  };


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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




<<<<<<< HEAD
<<<<<<< HEAD
=======
            ))}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </TableBody>;
        </Table>;
      </div>;
    </Card>;
  );
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    }
  },;
  ;
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
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </Card>;
};
return (<Card> <div className="p-4" > hidden md:table-cell" >Details</TableHead> </TableRow> </TableHeader> <TableBody> {
  syncLogs.map ( (log) => (<TableRow key= {
  log.id 
}> <TableCell> {
  log.event.replace (/ /g, ' ') .replace (/\b\w/g, l => l.toUpperCase () ) 
}</TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </Card>) 
}
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
