
<<<<<<< HEAD
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
import Skeleton from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
import { ShieldAlert } from 'lucide-react';
import Link from "next/link",;
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
      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
        return "outline",;
      default:;
        return "default";
    }
  },;
;
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
              ))}
            </TableBody>;
          </Table>;
        </div>;
      </div>;
    ),;
  }
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
        <Button;
          variant={statusFilter === "closed" ? "default" :"outline"}
          onClick={() => setStatusFilter("closed")}
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
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
                    <span>;
                      Client:{dispute.client_profile?.display_name || "Unknown Client"}
                    </span>;
                    <span>;
                      Talent:{dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  ),;
=======
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean
},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),
  const filteredDisputes = statusFilter === &quot;all&quot; 
import React, {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Skeleton from "@/components/ui/skeleton";
import Link from "next/link";

type DisputesListProps = {disputes: Dispute[];
  isLoading: boolean};

export function DisputesList(_{disputes, isLoading}: DisputesListProps) {const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter),

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default",
      case "underreview":
        return "secondary",
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline",
      default:
        return "default"    }
  },

  if (isLoading) {
    return (
      <div className=&quot;space-y-4&quot;>
        <div className=&quot;flex gap-2 mb-4&quot;>
          {[&quot;All&quot;, &quot;Open&quot;, &quot;Under Review&quot;, &quot;Resolved&quot;, &quot;Closed&quot].map((status) => (
            <Skeleton key={status} className=&quot;h-10 w-24&quot; />
        return "default"}
  };

  if (isLoading) {return (_<div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", _"Open", _"Under Review", _"Resolved", _"Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
        <div className=&quot;border rounded-md&quot;>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className=&quot;text-right&quot;>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {_[...Array(5)].map(_(_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-4 w-40&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-4 w-32&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-6 w-20&quot; /></TableCell>
                  <TableCell className=&quot;text-right&quot;><Skeleton className=&quot;h-9 w-20 ml-auto&quot; /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }

  if (disputes.length === 0) {
    return (
      <div className=&quot;text-center py-12 border rounded-md bg-muted/20&quot;>
        <ShieldAlert className=&quot;mx-auto h-12 w-12 text-muted-foreground mb-4&quot; />
        <h3 className=&quot;text-xl font-medium&quot;>No disputes found</h3>
        <p className=&quot;text-muted-foreground mt-2&quot;>
          No active disputes match the selected filter
        </p>
      </div>
    )
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex gap-2 mb-4 overflow-x-auto pb-2&quot;>
        <Button,
variant={statusFilter === &quot;all&quot; ? &quot;default&quot; : &quot;outline&quot}
          onClick={() => setStatusFilter(&quot;all&quot;)}
          size=&quot;sm&quot;        >
          All
        </Button>
        <Button,
variant={statusFilter === &quot;open&quot; ? &quot;default&quot; : &quot;outline&quot}
          onClick={() => setStatusFilter(&quot;open&quot;)}
          size=&quot;sm&quot;        >
          Open
        </Button>
        <Button,
variant={statusFilter === &quot;underreview&quot; ? &quot;default&quot; : &quot;outline&quot}
          onClick={() => setStatusFilter(&quot;underreview&quot;)}
          size=&quot;sm&quot;        >
          Under Review
        </Button>
        <Button,
variant={statusFilter === &quot;resolved&quot; ? &quot;default&quot; : &quot;outline&quot}
          onClick={() => setStatusFilter(&quot;resolved&quot;)}
          size=&quot;sm&quot;        >
          Resolved
        </Button>
        <Button,
variant={statusFilter === &quot;closed&quot; ? &quot;default&quot; : &quot;outline&quot}
          onClick={() => setStatusFilter(&quot;closed&quot;)}
          size=&quot;sm&quot;        >
          Closed
        </Button>
      </div>

      <div className=&quot;border rounded-md overflow-hidden&quot;>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className=&quot;text-right&quot;>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map(_(dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className=&quot;font-mono text-xs&quot;>
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
                  {dispute.project?.title || &quot;Unknown Project&quot}                </TableCell>
                <TableCell>
                  <div className=&quot;flex flex-col text-sm&quot;>
                    <span>
                      Client: {dispute.clientprofile?.displayname || &quot;Unknown Client&quot}
                    </span>
                    <span>
                      Talent: {dispute.talentprofile?.displayname || &quot;Unknown Talent&quot}                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.createdat), _{ addSuffix: true})}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
                <TableCell className=&quot;text-right&quot;>
                  <Button asChild size=&quot;sm&quot;>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
