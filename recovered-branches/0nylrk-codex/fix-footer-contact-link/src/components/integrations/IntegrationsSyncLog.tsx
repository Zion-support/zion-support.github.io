<<<<<<< HEAD
import React from "react";
import { Card } from "@/components/ui/card";
import {
=======
import { Card } from "@/components/ui/card";

<<<<<<< HEAD
  Table;
  TableBody;
  TableCell;

  TableHead;

=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

<<<<<<< HEAD
=======
<<<<<<< HEAD

import React from "react";
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Card } from "@/components/ui/card",
import {}

>>>>>>> merged-prs-20250907-203621
  Table,
  TableBody,
  TableCell,
  TableHead,
<<<<<<< HEAD
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
// Sample data for integration sync logs
const syncLogs = $2;
    integration: "Salesforce",
    event: "contact_synced",
    status: "success",
    timestamp: "2024-05-20T12: 30: 45Z",
    details: "Successfully synced contact data for Job #1234"
  }
  {
    id: "2",
    integration: "Greenhouse",
    event: "applicant_created",
    status: "success", 
    timestamp: "2024-05-20T10: 15: 22Z",
    details: "New applicant created in Greenhouse from Zion application"
  }
  {
    id: "3",
    integration: "HubSpot",
    event: "deal_updated",
    status: "error",
    timestamp: "2024-05-19T16: 45: 12Z",
    details: "Failed to update deal - API rate limit exceeded"
  }
  {
    id: "4",
    integration: "Zoho CRM",
    event: "job_synced",
    status: "warning",
    timestamp: "2024-05-19T14: 22: 33Z",
    details: "Job synced but some fields were skipped due to mapping issues"
  }
  {
    id: "5",
    integration: "Lever",
    event: "candidate_status_changed",
    status: "success",
    timestamp: "2024-05-18T09: 10: 05Z",
    details: "Updated candidate status to 'Interview Scheduled'"
  }
],

export function IntegrationsSyncLog() {
  const getStatusBadge = $2;
      case "error":
        return <Badge variant = $2;
      case "warning":
        return <Badge className = $2;
      default:
        return <Badge variant = $2;
  return (
    <Card>
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Sample data for integration sync logs

const syncLogs = [
  {
    id: "1"
    integration: "Salesforce"
    event: "contact_synced"
    status: "success"
    timestamp: "2024-05-20T12:30:45Z"
<<<<<<< HEAD
=======
    details: "Successfully synced contact data for Job #1234"

<<<<<<< HEAD
  },


  }
  },
=======

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {
    id: "5"
    integration: "Lever"
    event: "candidate_status_changed"
    status: "success"
    timestamp: "2024-05-18T09:10:05Z"

    details: "Updated candidate status to 'Interview Scheduled'"

<<<<<<< HEAD
=======
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

],


export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {

    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
];
],

export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {
    switch (status) {;
      case "success": return <Badge className="bg-green-500">Success</Badge>;
    switch (status) {
      case "success": return <Badge className="bg-green-500">Success</Badge>,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      case "error":

        return <Badge variant="destructive">Error</Badge>,

"
      case "warning":"
        return <Badge className="bg-amber-500">Warning</Badge>
      default:"
        return <Badge variant="outline">Unknown</Badge>
    }
<<<<<<< HEAD
  },
  

  }

  },
  
=======

<<<<<<< HEAD
=======
  },
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Card>"

>>>>>>> merged-prs-20250907-203621
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Integration</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD
              <TableHead>Time</TableHead>
=======

>>>>>>> merged-prs-20250907-203621
              <TableHead className="hidden md:table-cell">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {syncLogs.map((log) => (
<<<<<<< HEAD
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.integration}</TableCell>
                <TableCell>
                  {log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </TableCell>
                <TableCell>{getStatusBadge(log.status)}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>
              </TableRow>
=======

<<<<<<< HEAD
            ))}
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          </TableBody>
        </Table>
      </div>
    </Card>
  )
<<<<<<< HEAD
}// Sample data for integration sync logs;
  {;
    }
    "id": "1",;"
    "integration": "Salesforce",;"
    "event": "contact_synced",;"
    "status": "success",;"
    "timestamp": "2024-05-"20T12":"30":45Z",;"
    "details": "Successfully synced contact data for Job #1234""
};  {;
    }
    "id": "2",;"
    "integration": "Greenhouse",;"
    "event": "applicant_created",;  {;"
    }
    "id": "4",;"
    "integration": "Zoho CRM",;"
    "event": "job_synced",;"
    "status": "warning",;"
    "timestamp": "2024-05-"19T14":"22":33Z",;"
    "details": "Job synced but some fields were skipped due to mapping issues";  {;"
    }
    "id": "5",;"
    "integration": "Lever",;"
    "event": "candidate_status_changed",;"
    "status": "success",;"
    "timestamp": "2024-05-"18T09":"10":05Z",;"
    "details": "Updated candidate status to 'Interview Scheduled'";"
  }  return (
    <Card>;
      <div className="p-4">;"
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;

import { Card } from "@/components/ui/card",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
<<<<<<< HEAD

=======
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "2",;
    integration: "Greenhouse",;
    event: "applicant_created",;
<<<<<<< HEAD
    status: "success",;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  },;
=======
    status: "success", ;
    timestamp: "2024-05-20T10:15:22Z",;
    details: "New applicant created in Greenhouse from Zion application";
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "3",;
    integration: "HubSpot",;
    event: "deal_updated",;
    status: "error",;
    timestamp: "2024-05-19T16:45:12Z",;
    details: "Failed to update deal - API rate limit exceeded";
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "4",;
    integration: "Zoho CRM",;
    event: "job_synced",;
    status: "warning",;
    timestamp: "2024-05-19T14:22:33Z",;
    details: "Job synced but some fields were skipped due to mapping issues";
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "5",;
    integration: "Lever",;
    event: "candidate_status_changed",;
    status: "success",;
    timestamp: "2024-05-18T09:10:05Z",;
    details: "Updated candidate status to 'Interview Scheduled'";
  }
<<<<<<< HEAD

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
=======
];

export function IntegrationsSyncLog() {;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      case "success": return <Badge className="bg-green-500">Success</Badge>;
      case "error":;

        return <Badge variant="destructive">Error</Badge>;

<<<<<<< HEAD
"
      case "warning":;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      case "warning":;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;"
        return <Badge variant="outline">Unknown</Badge>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    }
  };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (

      <div className="p-4">;
>>>>>>> origin/chore/fix-lint-and-merge
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
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ))}

<<<<<<< HEAD
            ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </TableBody>;

          </TableBody>;

        </Table>;
      </div>;
    </Card>;
  );
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
            ))}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';
import { Card } from '@/components / ui / card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';

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
              ))});"
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
<<<<<<< HEAD

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
});
}
;
=======
    </Card>);
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
<<<<<<< HEAD
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
