<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

import React from "react";
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import {Card} from "@/components/ui/card";"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";"
import {Badge} from "@/components/ui/badge";

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card } from "@/components/ui/card";
import {};
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
<<<<<<< HEAD
<<<<<<< HEAD
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Card } from "@/components/ui/card",
import {}
=======
import React from "react",
import { Card } from "@/components/ui/card",
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Table,
  TableBody,
  TableCell,
  TableHead,
TableHeader,"
  TableRow} from "@/components/ui/table","
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Sample data for integration sync logs
=======
import {Badge} from "@/components/ui/badge";// Sample data for integration sync logs
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {Badge} from "@/components/ui/badge";// Sample data for integration sync logs
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",

// Sample data for integration sync logs
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const syncLogs = [
  {
    id: "1"
    integration: "Salesforce"
    event: "contact_synced"
    status: "success"
    timestamp: "2024-05-20T12:30:45Z"
<<<<<<< HEAD
    details: "Successfully synced contact data for Job #1234"
<<<<<<< HEAD

}
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
    id: "2"
    integration: "Greenhouse"
    event: "applicant_created"
    status: "success"
    timestamp: "2024-05-20T10:15:22Z"
    details: "New applicant created in Greenhouse from Zion application"
}
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
=======
    details: "Successfully synced contact data for Job #1234"  {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  },

  {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    id: "3"
    integration: "HubSpot"
    event: "deal_updated"
    status: "error"
    timestamp: "2024-05-19T16:45:12Z"
    details: "Failed to update deal - API rate limit exceeded"
<<<<<<< HEAD

}
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
    id: "4"
    integration: "Zoho CRM"
    event: "job_synced"
    status: "warning"
    timestamp: "2024-05-19T14:22:33Z"
    details: "Job synced but some fields were skipped due to mapping issues"
}
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  {
    id: "5"
    integration: "Lever"
    event: "candidate_status_changed"
    status: "success"
    timestamp: "2024-05-18T09:10:05Z"
=======
  {"
    id: "5""
    integration: "Lever""
    event: "candidate_status_changed""
    status: "success""
    timestamp: "2024-05-18T09:10:05Z""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    details: "Updated candidate status to 'Interview Scheduled'"
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD

export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "error":
        return <Badge variant="destructive">Error</Badge>,

"
      case "warning":"
        return <Badge className="bg-amber-500">Warning</Badge>
      default:"
        return <Badge variant="outline">Unknown</Badge>
    }

}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Card>"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Integration</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
<TableHead>Time</TableHead>"
              <TableHead className="hidden md:table-cell">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {syncLogs.map((log) => (
<TableRow key={log.id}>"
                <TableCell className="font-medium">{log.integration}</TableCell>
                <TableCell>'
                  {log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </TableCell>
                <TableCell>{getStatusBadge(log.status)}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>"
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>
              </TableRow>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ))}
=======
  }            ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }            ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </TableBody>
        </Table>
      </div>
    </Card>
  )
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card } from "@/components/ui/card",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;

// Sample data for integration sync logs;
=======
}// Sample data for integration sync logs;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;

// Sample data for integration sync logs;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const syncLogs = [;
{;
    id: "1",;
    integration: "Salesforce",;
    event: "contact_synced",;
    status: "success",;
    timestamp: "2024-05-20T12:30:45Z",;
    details: "Successfully synced contact data for Job #1234";
  };
},;
  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;
    status: "success", ;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  };
status: "success",;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  },;
  {;
    id: "3",;
    integration: "HubSpot",;
    event: "deal_updated",;
    status: "error",;
    timestamp: "2024-05-19T16:45:12Z",;
    details: "Failed to update deal - API rate limit exceeded";
  };
},;
  {;
    details: "Successfully synced contact data for Job #1234"
};  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;  {;
    id: "4",;
    integration: "Zoho CRM",;
    event: "job_synced",;
    status: "warning",;
    timestamp: "2024-05-19T14:22:33Z",;
    details: "Job synced but some fields were skipped due to mapping issues";
  };
},;
  {;
    details: "Job synced but some fields were skipped due to mapping issues";  {;
    id: "5",;
    integration: "Lever",;
    event: "candidate_status_changed",;
    status: "success",;
    timestamp: "2024-05-18T09:10:05Z",;
    details: "Updated candidate status to 'Interview Scheduled'";
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
];

export function IntegrationsSyncLog() {;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "success": return <Badge className="bg-green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;

"
      case "warning":;"
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;"
        return <Badge variant="outline">Unknown</Badge>;

  return (

=======
  }  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      case "success": return <Badge className="bg-green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;

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
      case "warning":;
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card>;
=======
    <Card>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="p-4">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Integration</TableHead>;
              <TableHead>Event</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Time</TableHead>;"
              <TableHead className="hidden md:table-cell">Details</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {syncLogs && syncLogs.map((log) => (;
              <TableRow key={log && log.id}>;"
                <TableCell className="font-medium">{log && log.integration}</TableCell>;
                <TableCell>;'
                  {log && log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l && l.toUpperCase())}
                </TableCell>;
                <TableCell>{getStatusBadge(log && log.status)}</TableCell>;
                <TableCell>{new Date(log && log.timestamp).toLocaleString()}</TableCell>;"
                <TableCell className="hidden md:table-cell">{log && log.details}</TableCell>;
              </TableRow>;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </TableBody>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </TableBody>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </Table>;
      </div>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            ))}
import React from './react';
import { Card } from '@/components / ui / card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
=======

            ))}
'
import React from './react';'
import { Card } from '@/components / ui / card';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from '@/components / ui / badge';
// Sample data for integration sync logs;
const sync_logs = [;
  {"
    id: "1","
    integration: "Salesforce","
    event: "contact_synced","
    status: "success","
    timestamp: "2024 - 05 - 20T12:30:45Z","
    details: "Successfully synced contact data for Job #1234";
  }
  {"
    id: "2","
    integration: "Greenhouse","
    event: "applicant_created","
    status: "success","
    timestamp: "2024 - 05 - 20T10:15:22Z","
    details: "New applicant created in Greenhouse from Zion application";
  }
  {"
    id: "3","
    integration: "HubSpot","
    event: "deal_updated","
    status: "error","
    timestamp: "2024 - 05 - 19T16:45:12Z","
    details: "Failed to update deal - API rate limit exceeded";
  }
  {"
    id: "4","
    integration: "Zoho CRM","
    event: "job_synced","
    status: "warning","
    timestamp: "2024 - 05 - 19T14:22:33Z","
    details: "Job synced but some fields were skipped due to mapping issues";
  }
  {"
    id: "5","
    integration: "Lever","
    event: "candidate_status_changed","
    status: "success","
    timestamp: "2024 - 05 - 18T09:10:05Z",'"
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
      case "success": return <Badge className="bg - green-500">Success</Badge>;
      case "error":;
        return <Badge variant="destructive">Error</Badge>;
      case "warning":;
        return <Badge className="bg - amber-500">Warning</Badge>,
      default:;
        return <Badge variant="outline">Unknown</Badge>;
    }
  }
;
  return (
    <Card>;
      <div className="p-4">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Integration</TableHead>;
              <TableHead > Event</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Time</TableHead>;
              <TableHead className="hidden md:table-cell">Details</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {sync_logs.map ((log) => (
              <TableRow key={log.id}>;
                <TableCell className="font-medium">{log.integration}</TableCell>;
                <TableCell>;
                  {log.event.replace (/_ / g, ' ').replace (/\b\w / g, l => l.toUpperCase ())}
                </TableCell>;
                <TableCell>{getStatusBadge (log.status)}</TableCell>;
                <TableCell>{new Date (log.timestamp).toLocaleString ()}</TableCell>;
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  TableHeader;"
  TableRow} from "@/components/ui/table",""
import { Badge } from "@/components/ui/badge";""
import React from "react",""
import { Card } from "@/components/ui/card","
  // TODO: Implement
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,"
import { Badge } from "@/components/ui/badge","
// Sample data for integration sync logs;
const syncLogs = [
  {"
    id: "1"","
  integration: "Salesforce"""
    event: "contact_synced"","
  status: "success"""
    timestamp: "2024-05-20T12:30:45Z"","
  details: "Successfully synced contact data for Job #1234""
  },

    id: "2"","
  integration: "Greenhouse"""
    event: "applicant_created"","
    timestamp: "2024-05-20T10:15:22Z"","
  details: "New applicant created in Greenhouse from Zion application""

    id: "3"","
  integration: "HubSpot"""
    event: "deal_updated"","
  status: "error"""
    timestamp: "2024-05-19T16:45:12Z"","
  details: "Failed to update deal - API rate limit exceeded""

    id: "4"","
  integration: "Zoho CRM"""
    event: "job_synced"","
  status: "warning"""
    timestamp: "2024-05-19T14:22:33Z"","
  details: "Job synced but some fields were skipped due to mapping issues""

    id: "5"","
  integration: "Lever"""
    event: "candidate_status_changed"","
    timestamp: "2024-05-18T09:10:05Z"","
  details: "Updated candidate status to 'Interview Scheduled'""
"
      case "error":""
        return <Badge variant="destructive">Error,""
        return <Badge className="bg-amber-500">Warning""
        return <Badge variant="outline">Unknown"
    <Card>
      <div className="p-4">"
</div>
        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Integration
              <TableHead>Event
              <TableHead>Status
              <TableHead>Time"
              <TableHead className="hidden md:table-cell">Details"
          <TableBody>

              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.integration}"
                <TableCell>

                <TableCell>{getStatusBadge(log.status)}
                <TableCell>{new Date(log.timestamp).toLocaleString()}"
                <TableCell className="hidden md:table-cell">{log.details}"
      case "success": return <Badge className="bg-green-500">Success;""
        return <Badge variant="destructive">Error;""
        return <Badge className="bg-amber-500">Warning,;""
        return <Badge variant="outline">Unknown;"
    <Card>;
      <div className="p-4">;"
        <Table>;

          <TableHeader>;

            <TableRow>;

              <TableHead>Integration;
              <TableHead>Event;
              <TableHead>Status;
              <TableHead>Time;"
              <TableHead className="hidden md:table-cell">Details;"
            ;
          <TableBody>;

              <TableRow key={log && log.id}>;
                <TableCell className="font-medium">{log && log.integration};"
                <TableCell>;

                <TableCell>{getStatusBadge(log && log.status)};
                <TableCell>{new Date(log && log.timestamp).toLocaleString()};"
                <TableCell className="hidden md:table-cell">{log && log.details};"
      </div>;
    ;"
      case "success": return <Badge className="bg - green - 500">Success;""
        return <Badge className="bg - amber - 500">Warning,""
      <div className="p - 4">;"

              <TableHead > Integration;
              <TableHead > Event;
              <TableHead > Status;
              <TableHead > Time;"
              <TableHead className="hidden md:table - cell">Details;"

              <TableRow key={log.id}>;
                <TableCell className="font - medium">{log.integration};"

                <TableCell>{getStatusBadge (log.status)};
                <TableCell>{new Date (log.timestamp).toLocaleString ()};"
                <TableCell className="hidden md:table - cell">{log.details};"
              ))}
    );"
      case "success": return <Badge className="bg-green-500">Success,;""
        return <Badge variant="destructive">Error,;""
        return <Badge className="bg-amber-500">Warning;""

                <TableCell className="font-medium">{log.integration};"

                <TableCell>{getStatusBadge(log.status)};
                <TableCell>{new Date(log.timestamp).toLocaleString()};"
                <TableCell className="hidden md:table-cell">{log.details};"
return (<Card> <div className="p-4" > hidden md:table-cell" >Details   <TableBody> {"
)
  syncLogs.map ( (log) => (<TableRow key= {
  log.id;
}> <TableCell> {
} ) ) 
}  </div> ) ]"
pr-12325
</TableRow>"
                <TableCell className="font - medium">{log.integration}</TableCell>;"
                <TableCell>;
</TableCell>
                </TableCell>;
                <TableCell>{getStatusBadge (log.status)}</TableCell>;
                <TableCell>{new Date (log.timestamp).toLocaleString ()}</TableCell>;"
                <TableCell className="hidden md:table - cell">{log.details}</TableCell>;"

              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;

    </Card>);"
      case "success": return <Badge className="bg-green-500">Success</Badge>,;""
        return <Badge variant="destructive">Error</Badge>,;""
        return <Badge className="bg-amber-500">Warning</Badge>;""
        return <Badge variant="outline">Unknown</Badge>;"
    <Card>;
</Card>"
      <div className="p-4">;"
</div>
        <Table>;
</Table>
          <TableHeader>;
</TableHeader>
            <TableRow>;
</TableRow>
              <TableHead>Integration</TableHead>;
              <TableHead>Event</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Time</TableHead>;"
              <TableHead className="hidden md:table-cell">Details</TableHead>;"
            </TableRow>;
          </TableHeader>;
          <TableBody>;
</TableBody>
              <TableRow key={log.id}>;
</TableRow>"
                <TableCell className="font-medium">{log.integration}</TableCell>;"
                <TableCell>;
</TableCell>
                </TableCell>;
                <TableCell>{getStatusBadge(log.status)}</TableCell>;
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>;"
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>;"
              </TableRow>;
          </TableBody>;
        </Table>;
      </div>;
    </Card>;"
return (<Card> <div className="p-4" > hidden md:table-cell" >Details</TableHead> </TableRow> </TableHeader> <TableBody> {"
</Card>)
  syncLogs.map ( (log) => (<TableRow key= {
  log.id;
}> <TableCell> {
</TableRow>)
}</TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </Card>) 
}
  );
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}</TableBody> </Table> </div> </Card>) ]"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
