<<<<<<< HEAD
import React, { useState } from "react";
<<<<<<< HEAD
=======
import {Dispute, DisputeStatus} from "@/types/disputes";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
import {ShieldAlert} from "lucide-react";
import {Link} from "react-router-dom";
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
type DisputesListProps = $2;
  isLoading: boolean},
=======
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from "lucide-react",
import { Link } from "react-router-dom",
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
<<<<<<< HEAD
=======
<<<<<<< HEAD
    : disputes.filter($2);
  const getStatusBadgeVariant = $2;
      case "under_review":
        return "secondary",
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
>>>>>>> origin/chore/fix-lint-and-merge
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

}
export function DisputesList() { return null; }
},

type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default";

<<<<<<< HEAD
=======
=======
},


  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default";
<<<<<<< HEAD
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      case "under_review":

        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return "outline",
      default:"
        return "default"
    }

  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (isLoading) {}
    return ("
      <div className="space-y-4">"
        <div className="flex gap-2 mb-4">"
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => ("
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>"

        <div className="border rounded-md">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;

<<<<<<< HEAD
=======
=======
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
                </TableRow>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { formatDistanceToNow } from "date-fns",;"
import { ShieldAlert } from "lucide-react",;"
import { Link } from "react-router-dom",;

<<<<<<< HEAD
=======
=======
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
import { ShieldAlert } from "lucide-react",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;"
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
"
  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
=======

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");

  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from './react';
import { Dispute, DisputeStatus } from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Skeleton } from '@/components / ui / skeleton';
import { formatDistanceToNow } from './date - fns';
import { ShieldAlert } from './lucide-react';

import { Link } from './react-router-dom';
type DisputesListProps = {}
  disputes: Dispute[],
  is_loading: boolean;
}
;
export /**;
 * DisputesList - Function description;
 */

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

=======
<<<<<<< HEAD

=======
      case "closed":;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return "outline";
      default:;"
        return "default";
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              ))}
            </TableBody>;

<<<<<<< HEAD
        <div className="border rounded - md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Case ID</TableHead>;
                <TableHead > Project</TableHead>;
                <TableHead > Parties</TableHead>;
                <TableHead > Created</TableHead>;

                <TableHead className="text - right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array (5)].map ((_, i) => (

                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>;
        </div>;
      </div>);
  }

        <p className="text - muted - foreground mt - 2">;
          No active disputes match the selected filter;
        </p>;
      </div>);
  }

=======
=======
<<<<<<< HEAD
  if (disputes && disputes.length === 0) {;
    return (
        return "outline",;
      default:;
        return "default";
    }
  },;
;
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


  if (disputes && disputes.length === 0) {;




  if (disputes.length === 0) {
    return (
;
  if (disputes.length === 0) {;
    return (;
      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
          No active disputes match the selected filter;
        </p>;
      </div>;
    ),;
  }
;
  return (;
    <div className="space-y-4">;
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;
        <Button;
          variant={statusFilter === "all" ? "default" :"outline"}
          onClick={() => setStatusFilter("all")}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          size="sm";
        >;
          All;
        </Button>;
<<<<<<< HEAD

=======
        <Button;
          variant={statusFilter === "open" ? "default" :"outline"}
          onClick={() => setStatusFilter("open")}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          size="sm";
        >;
          Open;
        </Button>;
<<<<<<< HEAD

=======
        <Button;
          variant={statusFilter === "under_review" ? "default" :"outline"}
          onClick={() => setStatusFilter("under_review")}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          size="sm";
        >;
          Under Review;
        </Button>;
<<<<<<< HEAD

=======
        <Button;
          variant={statusFilter === "resolved" ? "default" :"outline"}
          onClick={() => setStatusFilter("resolved")}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          size="sm";
        >;
          Resolved;
        </Button>;
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="space - y-4">;
        <div className="flex gap - 2 mb - 4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map ((status) => (
            <Skeleton key={status} className="h - 10 w - 24" />))}
        </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="border rounded - md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Case ID</TableHead>;
                <TableHead > Project</TableHead>;
                <TableHead > Parties</TableHead>;
                <TableHead > Created</TableHead>;

                <TableHead className="text - right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array (5)].map ((_, i) => (

                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>;
        </div>;
      </div>);
  }

        <p className="text - muted - foreground mt - 2">;
          No active disputes match the selected filter;
        </p>;
      </div>);
  }

          size="sm";
        >;
          All;
        </Button>;

          size="sm";
        >;
          Open;
        </Button>;

          size="sm";
        >;
          Under Review;
        </Button>;

          size="sm";
        >;
          Resolved;
        </Button>;
<<<<<<< HEAD

=======
        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}
          on_click={() => setStatusFilter ("closed")}
        <Button;
          variant={statusFilter === "closed" ? "default" :"outline"}
          onClick={() => setStatusFilter("closed")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
<<<<<<< HEAD

<div className="flex flex-col text-sm">;
=======
<<<<<<< HEAD

<div className="flex flex-col text-sm">;
=======
;
      <div className="border rounded-md overflow-hidden">;
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
            {filteredDisputes.map((dispute) => (;
              <TableRow key={dispute.id}>;
                <TableCell className="font-mono text-xs">;
                  {dispute.id.split('-')[0]}
                </TableCell>;
                <TableCell>;
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>;
                <TableCell>;
                  <div className="flex flex-col text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <span>;
                      Client:{dispute.client_profile?.display_name || "Unknown Client"}
                    </span>;
                    <span>;
                      Talent:{dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD

</TableBody>
=======
<<<<<<< HEAD
          </TableBody>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Table>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
</TableBody>
        </Table>
      </div>
    </div>
  )
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD

;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
=======
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
=======

<<<<<<< HEAD
;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
=======
                  {formatDistanceToNow (new Date (dispute.created_at), { add_suffix: true })}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
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
  ),; import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
type DisputesListProps = {
  disputes: Dispute[];
isLoading: boolean 
};
export function DisputesList ({
  disputes, isLoading 
}: DisputesListProps) {
  const filteredDisputes = statusFilter === "all" const getStatusBadgeVariant = (status: DisputeStatus) => {
  switch (status) {
  
}
;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
