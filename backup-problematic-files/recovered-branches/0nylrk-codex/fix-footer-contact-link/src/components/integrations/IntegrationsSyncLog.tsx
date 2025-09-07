
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { Card } from "@/components/ui/card",;
=======
import React from "react";""
import { Card } from "@/components/ui/card";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;""
import { Badge } from "@/components/ui/badge";"
;
// Sample data for integration sync logs;
const syncLogs = [;
  {;"
    id: "1";,;""
    integration: "Salesforce";,;""
    event: "contact_synced";,;""
    status: "success";,;""
    timestamp: "2024-05-20T12:30:45Z";,;""
    details:"Successfully synced contact data for Job #1234";"
  },;
    id: "2";,;""
    integration: "Greenhouse";,;""
    event: "applicant_created";,;""
    status: "success";, ;""
    timestamp: "2024-05-20T10:15:22Z";,;""
    details:"New applicant created in Greenhouse from Zion application";"
    id: "3";,;""
    integration: "HubSpot";,;""
    event: "deal_updated";,;""
    status: "error";,;""
    timestamp: "2024-05-19T16:45:12Z";,;""
    details:"Failed to update deal - API rate limit exceeded";"
    id: "4";,;""
    integration: "Zoho CRM";,;""
    event: "job_synced";,;""
    status: "warning";,;""
    timestamp: "2024-05-19T14:22:33Z";,;""
    details:"Job synced but some fields were skipped due to mapping issues";"
    id: "5";,;""
    integration: "Lever";,;""
    event: "candidate_status_changed";,;""
    timestamp: "2024-05-18T09:10:05Z";,;""
    details:"Updated candidate status to 'Interview Scheduled'";"
  }]
],;
export function IntegrationsSyncLog() {;
  const getStatusBadge = (status:string) => {;
<<<<<<< HEAD
    switch (status) {;
      case "success":return <Badge className="bg-green-500">Success</Badge>,;
      case "error":;
        return <Badge variant="destructive">Error</Badge>,;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      case "warning":;
        return <Badge className="bg-amber-500">Warning</Badge>,;
      default:;
        return <Badge variant="outline">Unknown</Badge>;
<<<<<<< HEAD
<<<<<<< HEAD

}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    switch (status) {;"
      case "success":return <Badge className="bg-green-500">Success,;""
        return <Badge variant="destructive">Error,;""
        return <Badge className="bg-amber-500">Warning,;""
        return <Badge variant="outline">Unknown;""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
