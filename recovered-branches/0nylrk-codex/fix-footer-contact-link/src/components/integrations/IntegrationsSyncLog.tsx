

<<<<<<< HEAD

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
import {Badge} from "@/components/ui/badge";


import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

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



// Sample data for integration sync logs
=======
import {Badge} from "@/components/ui/badge";// Sample data for integration sync logs
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

const syncLogs = [
  {
    id: "1"
    integration: "Salesforce"
    event: "contact_synced"
    status: "success"
    timestamp: "2024-05-20T12:30:45Z"
<<<<<<< HEAD
    details: "Successfully synced contact data for Job #1234"


  },


  {
    id: "2"
    integration: "Greenhouse"
    event: "applicant_created"
    status: "success"
    timestamp: "2024-05-20T10:15:22Z"
    details: "New applicant created in Greenhouse from Zion application"


  },


  {
=======
    details: "Successfully synced contact data for Job #1234"  {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    id: "3"
    integration: "HubSpot"
    event: "deal_updated"
    status: "error"
    timestamp: "2024-05-19T16:45:12Z"
    details: "Failed to update deal - API rate limit exceeded"

<<<<<<< HEAD

  },


  {
    id: "4"
    integration: "Zoho CRM"
    event: "job_synced"
    status: "warning"
    timestamp: "2024-05-19T14:22:33Z"
    details: "Job synced but some fields were skipped due to mapping issues"


  },


=======
  },
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  {
    id: "5"
    integration: "Lever"
    event: "candidate_status_changed"
    status: "success"
    timestamp: "2024-05-18T09:10:05Z"
    details: "Updated candidate status to 'Interview Scheduled'"
<<<<<<< HEAD
  }

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
      case "error":
        return <Badge variant="destructive">Error</Badge>,
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }

  },
  

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


            ))}
=======
  }            ))}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </TableBody>
        </Table>
      </div>
    </Card>
  )
<<<<<<< HEAD
}
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

// Sample data for integration sync logs;
=======
}// Sample data for integration sync logs;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const syncLogs = [;
  {;
    id: "1",;
    integration: "Salesforce",;
    event: "contact_synced",;
    status: "success",;
    timestamp: "2024-05-20T12:30:45Z",;
<<<<<<< HEAD
    details: "Successfully synced contact data for Job #1234";
  };
  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;
    status: "success", ;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  };
  {;
    id: "3",;
    integration: "HubSpot",;
    event: "deal_updated",;
    status: "error",;
    timestamp: "2024-05-19T16:45:12Z",;
    details: "Failed to update deal - API rate limit exceeded";
  };
  {;
=======
    details: "Successfully synced contact data for Job #1234"
};  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;  {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    id: "4",;
    integration: "Zoho CRM",;
    event: "job_synced",;
    status: "warning",;
    timestamp: "2024-05-19T14:22:33Z",;
<<<<<<< HEAD
    details: "Job synced but some fields were skipped due to mapping issues";
  };
  {;
=======
    details: "Job synced but some fields were skipped due to mapping issues";  {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    id: "5",;
    integration: "Lever",;
    event: "candidate_status_changed",;
    status: "success",;
    timestamp: "2024-05-18T09:10:05Z",;
    details: "Updated candidate status to 'Interview Scheduled'";
<<<<<<< HEAD
  }
];

export function IntegrationsSyncLog() {;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case "success": return <Badge className="bg-green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;

      case "warning":;
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;
        return <Badge variant="outline">Unknown</Badge>;
    }
  };


  return (
=======
  }  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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



          </TableBody>;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        </Table>;
      </div>;
    </Card>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            ))}
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
export /**
 * IntegrationsSyncLog - Function description
 */
function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) =>: any {
    switch (status) {
<<<<<<< HEAD
      case "success": return <Badge className="bg - green - 500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;
      case "warning":;
        return <Badge className="bg - amber - 500">Warning</Badge>,
=======
      case "success": return <Badge className="bg - green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;
      case "warning":;
        return <Badge className="bg - amber-500">Warning</Badge>,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      default:;
        return <Badge variant="outline">Unknown</Badge>;
    }
  }
;
  return (
    <Card>;
<<<<<<< HEAD
      <div className="p - 4">;
=======
      <div className="p-4">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Integration</TableHead>;
              <TableHead > Event</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Time</TableHead>;
<<<<<<< HEAD
              <TableHead className="hidden md:table - cell">Details</TableHead>;
=======
              <TableHead className="hidden md:table-cell">Details</TableHead>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {sync_logs.map ((log) => (
              <TableRow key={log.id}>;
<<<<<<< HEAD
                <TableCell className="font - medium">{log.integration}</TableCell>;
=======
                <TableCell className="font-medium">{log.integration}</TableCell>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                <TableCell>;
                  {log.event.replace (/_ / g, ' ').replace (/\b\w / g, l => l.toUpperCase ())}
                </TableCell>;
                <TableCell>{getStatusBadge (log.status)}</TableCell>;
                <TableCell>{new Date (log.timestamp).toLocaleString ()}</TableCell>;
<<<<<<< HEAD
                <TableCell className="hidden md:table - cell">{log.details}</TableCell>;
=======
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </Card>);
}
<<<<<<< HEAD
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
