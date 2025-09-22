
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Dispute, DisputeStatus} from "@/types/disputes";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
import {ShieldAlert} from "lucide-react";
import {Link} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from "lucide-react",
import { Link } from "react-router-dom",
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean
}
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
  const filteredDisputes = statusFilter === "all"
    ? disputes
    : disputes.filter(dispute => dispute.status === statusFilter);
},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter),

type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

<<<<<<< HEAD
  const filteredDisputes = statusFilter === "all"
    ? disputes
    : disputes.filter(dispute => dispute.status === statusFilter),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

"
import React, { useState } from "react","
import { Dispute, DisputeStatus } from "@/types/disputes","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",
import {}
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,"
  TableRow} from "@/components/ui/table","
import { Skeleton } from "@/components/ui/skeleton","
import { formatDistanceToNow } from "date-fns","
import { ShieldAlert } from "lucide-react","
import { Link } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean
}
export function DisputesList() { return null; }
},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

},

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default";
<<<<<<< HEAD
      case "under_review":
=======
},      case "under_review":
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
},      case "under_review":
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
},

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default";
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default",
      case "under_review":
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function DisputesList() { return null; }
export function DisputesList() { return null; }
  const getStatusBadgeVariant = (status: DisputeStatus) => {}
    switch (status) {"
      case "open": return "default";

  const getStatusBadgeVariant = (status: DisputeStatus) => {}
    switch (status) {"
      case "open": return "default",
"
      case "under_review":"
        return "secondary""
      case "resolved":"
        return "outline", // Changed from "success" to "outline""
      case "closed":
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return "outline",
      default:"
        return "default"
    }

  },
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (isLoading) {}
    return ("
      <div className="space-y-4">"
        <div className="flex gap-2 mb-4">"
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => ("
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>"
=======

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="border rounded-md">
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Table>

            <TableHeader>

              <TableRow>
<TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
<TableHead>Status</TableHead>"
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
<TableRow key={i}>"
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>"
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>"
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>"
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>"
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>"
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
                </TableRow>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { formatDistanceToNow } from "date-fns",;"
import { ShieldAlert } from "lucide-react",;"
import { Link } from "react-router-dom",;

type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;"
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
"
  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;"
      case "open": return "default";
import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
import { ShieldAlert } from "lucide-react",;
import { Link } from "react-router-dom",;
;
type DisputesListProps = {;
  disputes:Dispute[],;
  isLoading:boolean;
},;
;
export function DisputesList({ disputes, isLoading } DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),;
;
  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    :disputes.filter(dispute => dispute.status === statusFilter),;
;
  const getStatusBadgeVariant = (status:DisputeStatus) => {;
    switch (status) {;
      case "open":return "default",;
type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
},;
export function DisputesList({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),;
  const filteredDisputes = statusFilter === "all";
    ? disputes;
    : disputes.filter(dispute => dispute.status === statusFilter),;
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");

  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
import React, { useState } from './react';
import { Dispute, DisputeStatus } from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Skeleton } from '@/components / ui / skeleton';
import { formatDistanceToNow } from './date - fns';
import { ShieldAlert } from './lucide-react';
=======
"
      case "under_review":;"
        return "secondary",;"
      case "resolved":;"
        return "outline", // Changed from "success" to "outline";"
      case "closed":;

import React, { useState } from './react';'
import { Dispute, DisputeStatus } from '@/types / disputes';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Skeleton } from '@/components / ui / skeleton';'
import { formatDistanceToNow } from './date - fns';'
import { ShieldAlert } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Link } from './react-router-dom';
type DisputesListProps = {}
  disputes: Dispute[],
  is_loading: boolean;
}
;
export /**;
 * DisputesList - Function description;
 */
function DisputesList() {
  const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all");
;
  const filtered_disputes = status_filter === "all";
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
;
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review":;
        return "secondary",
      case "resolved":;
        return "outline", // Changed from './success'; to "outline";
<<<<<<< HEAD
      case "closed":;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
function DisputesList() { return null; }
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {}
    switch (status) {"
      case "open": return "default";"
      case "under_review":;"
        return "secondary","
      case "resolved":;'"
        return "outline", // Changed from './success'; to "outline";"
      case "closed":;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return "outline";
      default:;"
        return "default";
    }
};
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        <div className="flex gap-2 mb-4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (;
            <Skeleton key={status} className="h-10 w-24" />;
          ))}
        </div>;
        <div className="border rounded-md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Case ID</TableHead>;
                <TableHead>Project</TableHead>;
                <TableHead>Parties</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array(5)].map((_, i) => (;
                <TableRow key={i}>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>;
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>;
                </TableRow>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              ))}
            </TableBody>;
=======
      case "closed":;            </TableBody>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      case "closed":;            </TableBody>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      case "closed":;
        return "outline";
      default:;
        return "default";
    }

              ))}
            </TableBody>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Table>;
        </div>;
      </div>;
    );
  }
    return ("
      <div className="text-center py-12 border rounded-md bg-muted/20">;"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;"
        <h3 className="text-xl font-medium">No disputes found</h3>;"
        <p className="text-muted-foreground mt-2">;
          No active disputes match the selected filter;
        </p>;
      </div>;
    );
  }
  return ("
    <div className="space-y-4">;"
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;
        <Button"
          variant={statusFilter === "all" ? "default" : "outline"}"
          onClick={() => setStatusFilter("all")}"
          size="sm";
        >;
          All;
        </Button>;
        <Button"
          variant={statusFilter === "open" ? "default" : "outline"}"
          onClick={() => setStatusFilter("open")}"
          size="sm";
        >;
          Open;
        </Button>;
        <Button"
          variant={statusFilter === "under_review" ? "default" : "outline"}"
          onClick={() => setStatusFilter("under_review")}"
          size="sm";
        >;
          Under Review;
        </Button>;
        <Button"
          variant={statusFilter === "resolved" ? "default" : "outline"}"
          onClick={() => setStatusFilter("resolved")}"
          size="sm";
        >;
          Resolved;
</Button>;
<<<<<<< HEAD
          onClick={() => setStatusFilter("closed")}

  }
;
return (;
    <div className="space-y-4">;
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;
        <Button;
          variant={statusFilter === "all" ? "default" :"outline"}
          onClick={() => setStatusFilter("all")}
          size="sm";
        >;
          All;
        </Button>;
        <Button;
          variant={statusFilter === "open" ? "default" :"outline"}
          onClick={() => setStatusFilter("open")}
          size="sm";
        >;
          Open;
        </Button>;
        <Button;
          variant={statusFilter === "under_review" ? "default" :"outline"}
          onClick={() => setStatusFilter("under_review")}
          size="sm";
        >;
          Under Review;
        </Button>;
        <Button;
          variant={statusFilter === "resolved" ? "default" :"outline"}
          onClick={() => setStatusFilter("resolved")}
          size="sm";
        >;
          Resolved;
        </Button>;
<<<<<<< HEAD
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }

  if (disputes.length === 0) {
    return (
      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
        </p>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          size="sm"
        >
          All
        </Button>
        <Button
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}
          size="sm"
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
          size="sm"
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
          size="sm"
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
          size="sm"
        >
          Closed
        </Button>
      </div>
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
                  {dispute.project?.title |"Unknown Project"}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">
                    <span>
                      Client: {dispute.client_profile?.display_name |"Unknown Client"}
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name |"Unknown Talent"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link to={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
;
  // Check condition
if ( {) {
  $2

}
    return ("
      <div className="space - y-4">;"
        <div className="flex gap - 2 mb - 4">;"
          {["All", "Open", "Under Review", "Resolved", "Closed"].map ((status) => ("
            <Skeleton key={status} className="h - 10 w - 24" />))}
        </div>;"
=======
}
    return (
      <div className="space - y-4">;
        <div className="flex gap - 2 mb - 4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map ((status) => (
            <Skeleton key={status} className="h - 10 w - 24" />))}
        </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="border rounded - md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Case ID</TableHead>;
                <TableHead > Project</TableHead>;
                <TableHead > Parties</TableHead>;
                <TableHead > Created</TableHead>;
<TableHead > Status</TableHead>;"
                <TableHead className="text - right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array (5)].map ((_, i) => (
<TableRow key={i}>;"
                  <TableCell><Skeleton className="h - 4 w - 24" /></TableCell>;"
                  <TableCell><Skeleton className="h - 4 w - 40" /></TableCell>;"
                  <TableCell><Skeleton className="h - 4 w - 32" /></TableCell>;"
                  <TableCell><Skeleton className="h - 4 w - 24" /></TableCell>;"
                  <TableCell><Skeleton className="h - 6 w - 20" /></TableCell>;"
                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>;
        </div>;
      </div>);
  }
// Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="text - center py - 12 border rounded - md bg - muted / 20">;"
        <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;"
        <h3 className="text - xl font - medium">No disputes found</h3>;"
        <p className="text - muted - foreground mt - 2">;
          No active disputes match the selected filter;
        </p>;
      </div>);
  }
return ("
    <div className="space - y-4">;"
      <div className="flex gap - 2 mb - 4 overflow - x-auto pb - 2">;
        <Button;"
          variant={status_filter === "all" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("all")}"
          size="sm";
        >;
          All;
        </Button>;
<Button;"
          variant={status_filter === "open" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("open")}"
          size="sm";
        >;
          Open;
        </Button>;
<Button;"
          variant={status_filter === "under_review" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("under_review")}"
          size="sm";
        >;
          Under Review;
        </Button>;
<Button;"
          variant={status_filter === "resolved" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("resolved")}"
          size="sm";
        >;
          Resolved;
        </Button>;
<Button;"
          variant={status_filter === "closed" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("closed")}
"
=======
<Button;
          variant={statusFilter === "closed" ? "default" :"outline"}
          onClick={() => setStatusFilter("closed")}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;

</TableCell>;
                <TableCell>;"
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>;
                <TableCell>;

<div className="flex flex-col text-sm">;
                    <span>;
                      Client:{dispute.client_profile?.display_name || "Unknown Client"}
                    </span>;
                    <span>;
                      Talent:{dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

</TableBody>
        </Table>
      </div>
    </div>
  )
}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}

;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
{formatDistanceToNow (new Date (dispute.created_at), { add_suffix: true })}
                </TableCell>;
                <TableCell>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
=======

                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  {formatDistanceToNow (new Date (dispute.created_at), { add_suffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {dispute.status.replace('_ ')}
                  </Badge>;
                </TableCell>;"
                <TableCell className="text-right">;"
                  <Button asChild size="sm">;
                    <Link to={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  ),; import {};
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
type DisputesListProps = {}
  disputes: Dispute[];
isLoading: boolean;
};
export function DisputesList() { return null; }
  const filteredDisputes = statusFilter === "all" const getStatusBadgeVariant = (status: DisputeStatus) => {}
  switch (status) {}
}
;

};
if (isLoading) {
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {
  ["All", "Open", "Under Review", "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {
  status 
}className="h-10 w-24" /> 
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  i 
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </div>) 
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filteredDisputes.map ( (dispute) => (<TableRow key= {
  dispute.id 
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {
  formatDistanceToNow (new Date (dispute.created at), {
  addSuffix: true 
}) 
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </div>) 
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
    switch (status) {"
      case "open": return "default";""
      case "under_review":;""
        return "secondary",""
      case "resolved":;""
        return "outline", // Changed from './success'; to "outline";""
      case "closed":;""
        return "outline";"
      default:;"
        return "default";"

              ))}
        </div>;
      </div>;"
      <div className="text-center py-12 border rounded-md bg-muted/20">;"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;"
        <h3 className="text-xl font-medium">No disputes found</h3>;""
        <p className="text-muted-foreground mt-2">;"
</p>
        </p>;
    <div className="space-y-4">;"
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;"
        <Button;"
          variant={statusFilter === "all" ? "default" : "outline"}""
          onClick={() => setStatusFilter("all")}"

          variant={statusFilter === "open" ? "default" : "outline"}""
          onClick={() => setStatusFilter("open")}"

          variant={statusFilter === "under_review" ? "default" : "outline"}""
          onClick={() => setStatusFilter("under_review")}"

          variant={statusFilter === "resolved" ? "default" : "outline"}""
          onClick={() => setStatusFilter("resolved")}"

      <div className="space - y-4">;"
        <div className="flex gap - 2 mb - 4">;"
            <Skeleton key={status} className="h - 10 w - 24" />))}"

        <div className="border rounded - md">;"
          <Table>;

            <TableHeader>;

              <TableRow>;

                <TableHead > Case ID;
                <TableHead > Project;
                <TableHead > Parties;
                <TableHead > Created;
                <TableHead > Status;"
                <TableHead className="text - right">Actions;"
            <TableBody>;

                <TableRow key={i}>;
                  <TableCell><Skeleton className="h - 4 w - 24" />;""
                  <TableCell><Skeleton className="h - 4 w - 40" />;""
                  <TableCell><Skeleton className="h - 4 w - 32" />;""
                  <TableCell><Skeleton className="h - 6 w - 20" />;""
                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" />;"
      </div>);"
      <div className="text - center py - 12 border rounded - md bg - muted / 20">;"
        <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;"
        <h3 className="text - xl font - medium">No disputes found</h3>;""
        <p className="text - muted - foreground mt - 2">;"
      <div className="flex gap - 2 mb - 4 overflow - x-auto pb - 2">;"
          variant={status_filter === "all" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("all")}"

          variant={status_filter === "open" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("open")}"

          variant={status_filter === "under_review" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("under_review")}"

          variant={status_filter === "resolved" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("resolved")}"

          variant={status_filter === "closed" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("closed")}"

      <div className="border rounded - md overflow - hidden">;"

              <TableRow key={dispute.id}>;
                <TableCell className="font - mono text - xs">;"

                <TableCell>;

                  <div className="flex flex - col text - sm">;"
                    <span>;
</span>
                    </span>;

                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;

                <TableCell className="text - right">;"
                  <Button as_child size="sm">;"

                    <Link to={`/dashboard / disputes/${dispute.id}`}>View Details;
    </div>);

                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;

                <TableCell className="text-right">;"
                  <Button asChild size="sm">;"
`;
                    <Link to={`/dashboard/disputes/${dispute.id}`}>View Details;
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {"
</div>)"
  ["All", "Open", "Under Review", "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {"
  status;"
}className="h-10 w-24" />"
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID <TableHead>Project <TableHead>Parties <TableHead>Created <TableHead>Status <TableHead className="text-right" >Actions   <TableBody> {"
</div>)
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  i;)"
}> <TableCell><Skeleton className="h-4 w-24" /> <TableCell><Skeleton className="h-4 w-40" /> <TableCell><Skeleton className="h-4 w-32" /> <TableCell><Skeleton className="h-4 w-24" /> <TableCell><Skeleton className="h-6 w-20" /> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /> ) )"
}  </div> </div>) "
}> All  <Button > Open  <Button > Under Review  <Button > Resolved  <Button > Closed  </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID <TableHead>Project <TableHead>Parties <TableHead>Created <TableHead>Status <TableHead className="text-right" >Actions   <TableBody> {"
  filteredDisputes.map ( (dispute) => (<TableRow key= {
  dispute.id;"
}>  <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div>  <TableCell> {"
)
} <TableCell>   ) ) 
}  </div> </div>) "`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
