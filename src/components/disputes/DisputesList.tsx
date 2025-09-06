<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from 'react'
import { Dispute, DisputeStatus } from '@/types/disputes'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {  Table,  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import Skeleton from '@/components/ui/skeleton'
import { formatDistanceToNow } from 'date-fns'
import { ShieldAlert } from 'lucide-react'
import Link from 'next/link'
type DisputesListProps = {
  disputes: Dispute[]
isLoading: boolean
}
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | 'all'>(
    'all'
  )
  const filteredDisputes = null;
    statusFilter === 'all'
      ? disputes
      : disputes.filter(dispute => dispute.status === statusFilter)
  const getStatusBadgeVariant = (status: DisputeStatus,) => {
    switch (status) {
      case 'open':
=======
}
export /**
 * DisputesList - Function description
 */
function DisputesList() {
  const [status_filter, setStatusFilter] = useState < DisputeStatus | 'all'>(
    'all');
  const filtered_disputes =;
    status_filter === 'all';
      ? disputes;
      : disputes.filter (dispute => dispute.status === status_filter);
  const getStatusBadgeVariant = (status: DisputeStatus, ) =>: any {
    switch (status) {
      case 'open':;
>>>>>>> main
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD
        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline'
      default:
        return 'default'
import React, { useState } from "react"
import { Dispute, DisputeStatus } from "@/types/disputes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from "@/components/ui/table"
import Skeleton from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
<<<<<<< HEAD
=======
type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean
}
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all")
  const filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter)
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default"
      case "under_review":
        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline"
      default:
        return "default"
    }
  }
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>
        <div className='border rounded-md'>          <Table>
        <div className="border rounded-md">
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
TableBody,
  TableCell,
  TableHead,
  TableHeader,

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
=======
        return 'outline'; // Changed from './success'; to "outline";
      case 'closed':;
        return 'outline';
      default:;
        return 'default';
import React, { useState } from './react';
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from '@/components / ui / table';
import Skeleton from "@/components / ui / skeleton";
import { formatDistanceToNow  } from './date - fns';
import Link from './next / link';
type DisputesListProps = {


import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Table,  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';
type DisputesListProps = {;
  disputes: Dispute[];
isLoading: boolean ;
};

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | 'all'>(;
    'all';
  );

  const filteredDisputes =;
    statusFilter === 'all';
      ? disputes;
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus,) => {;
    switch (status) {;
      case 'open':;
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
        return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
      default:;
        return 'default';


import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {

>>>>>>> main
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean
<<<<<<< HEAD
}
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all")
  const filteredDisputes = statusFilter === "all"
    ? disputes
    : disputes.filter(dispute => dispute.status === statusFilter)
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default"
      case "under_review":
        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline"
      default:
        return "default"
    }
  }

  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>
        <div className='border rounded-md'>          <Table>
        <div className="border rounded-md">
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
=======
},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter),

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default",
      case "under_review":
        return "secondary",
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline",
      default:
        return "default"
    }
  },

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {;
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table";
import Skeleton from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react';
import Link from "next/link";
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
  disputes: Dispute[],
  is_loading: boolean;
}
export /**
 * DisputesList - Function description
 */
function DisputesList() {
  const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all");
  const filtered_disputes = status_filter === "all";
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review":;
        return "secondary";
      case "resolved":;

        return "outline", // Changed from './success'; to "outline";

      case "closed":;
        return "outline";
      default:;
        return "default";


>>>>>>> main
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>
=======
                <TableHead className="text-right">Actions</TableHead>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


                <TableHead className="text-right">Actions</TableHead>


>>>>>>> main
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    ) }
  if (disputes.length === 0) {
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    )
<<<<<<< HEAD
  }
  if (disputes.length === 0) {
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======




>>>>>>> main
                </TableRow>
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
      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
        return "outline";
      default:;
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
              ))}
            </TableBody>;
          </Table>;
        </div>;
      </div>;
<<<<<<< HEAD
    );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

  if (disputes.length === 0) {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    );



  }

  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
    )
  }

  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
  }

>>>>>>> main
      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </p>
      </div>
    )
  }
<<<<<<< HEAD
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <div className='space-y-4'>
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>
        <Button
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
          size='sm'        >
          All
        </Button>
        <Button
          variant={statusFilter === 'open' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('open')}
          size='sm'        >
          Open
        </Button>
        <Button
          variant={statusFilter === 'under_review' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('under_review')}
          size='sm'        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === 'resolved' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('resolved')}
          size='sm'        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === 'closed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('closed')}
          size='sm'        >    <div className="space-y-4">
=======
<<<<<<< HEAD

  return (
    <div className="space-y-4">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    <div className="space-y-4">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



        </p>
      </div>
    )

  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
        </p>;
      </div>;
    );
  }


          size="sm";
        >;
          All;
        </Button>;

        <Button;
          variant={status_filter === "open" ? "default" : "outline"}
          on_click={() => setStatusFilter ("open")}

          size="sm";
          size="sm";
        >;
          Open;
        </Button>;

        <Button;
          variant={status_filter === "under_review" ? "default" : "outline"}
          on_click={() => setStatusFilter ("under_review")}

          size="sm";
          size="sm";
        >;
          Under Review;
        </Button>;

        <Button;
          variant={status_filter === "resolved" ? "default" : "outline"}
          on_click={() => setStatusFilter ("resolved")}

          size="sm";
          size="sm";
        >;
          Resolved;
        </Button>;

    <div className="space-y-4">



>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
          size="sm"
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
          size="sm"
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
<<<<<<< HEAD
<<<<<<< HEAD
          size="sm"
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
          size="sm"
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
<<<<<<< HEAD
<<<<<<< HEAD
          size="sm"
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
          size="sm"
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
<<<<<<< HEAD
<<<<<<< HEAD
          size="sm"
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
          size="sm"
        >
          Closed
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">
=======

      <div className="border rounded-md overflow-hidden">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


      <div className="border rounded-md overflow-hidden">



>>>>>>> main
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map(dispute => (            </TableRow>
          </TableHeader>
          <TableBody>
=======
=======


>>>>>>> main
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
                  {dispute.project?.title |'Unknown Project'}
=======
                  {dispute.project?.title || 'Unknown Project'}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>


                  {dispute.project?.title || 'Unknown Project'}


>>>>>>> main
                </TableCell>
                <TableCell>
                  <div className='flex flex-col text-sm'>
                    <span>
                      Client:{' '}
                      {dispute.client_profile?.display_name |'Unknown Client'}
                    </span>
                    <span>
                      Talent:{' '}
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {
<<<<<<< HEAD
<<<<<<< HEAD
                    addSuffix: true
                  })}                      Talent: {dispute.talent_profile?.display_name |"Unknown Talent"}
=======
                    addSuffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

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

                    addSuffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}


>>>>>>> main
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">
                    <span>
                      Client: {dispute.client_profile?.display_name || "Unknown Client"}
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
                    </span>
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true
                  })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell className='text-right'>
                  <Button asChild size='sm'>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>
                      View Details
                    </Link>                  </Button>                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
=======
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

          size="sm";
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;

      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className='text-right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map(dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map((dispute) => (;
              <TableRow key={dispute && dispute.id}>;
                <TableCell className='font-mono text-xs'>;
                  {dispute && dispute.id.split('-')[0]}

                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}

                </TableCell>;
                <TableCell>;
                  {dispute && dispute.project?.title || 'Unknown Project'}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm'>;
                    <span>;
                      Client:{' '}
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client'}
                    </span>;
                    <span>;
                      Talent:{' '}
                      {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {;
                    addSuffix: true,;
                  })}                      Talent: {dispute && dispute.talent_profile?.display_name || "Unknown Talent"}
        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}
          on_click={() => setStatusFilter ("closed")}
          size="sm";
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
      <div className='border rounded - md overflow - hidden'>        <Table>      <div className="border rounded - md overflow - hidden">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Case ID</TableHead>;
              <TableHead > Project</TableHead>;
              <TableHead > Parties</TableHead>;
              <TableHead > Created</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead className='text - right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filtered_disputes.map (dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filtered_disputes.map ((dispute) => (
              <TableRow key={dispute.id}>;
                <TableCell className='font - mono text - xs'>;
                  {dispute.id.split ('-')[0]}
                </TableCell>;
                <TableCell>;
                  {dispute.project?.title || 'Unknown Project'}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex - col text - sm'>;
                    <span>;
                      Client:{' '}
                      {dispute.client_profile?.display_name || 'Unknown Client'}
                    </span>;
                    <span>;
                      Talent:{' '}
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>

>>>>>>> main
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
if (isLoading) {"
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {"
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {
  status "
}className="h-10 w-24" /> "
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  i "
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) )
}</TableBody> </Table> </div> </div>) "
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filteredDisputes.map ( (dispute) => (<TableRow key= {
  dispute.id "
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {
  formatDistanceToNow (new Date (dispute.created at), {
<<<<<<< HEAD
  addSuffix: true
})
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> </div>)
}"}
=======
=======

                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_', ' ')}
                  </Badge>;
                </TableCell>;
                <TableCell className='text - right'>;
                  <Button as_child size='sm'>;
                    <Link href={`/dashboard / disputes/${dispute.id}`}>;
                      View Details;
                    </Link>                  </Button>                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text - right">;
                  <Button as_child size="sm">;
                    <Link href={`/dashboard / disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);

}
// Check condition
if ( {") {
  $2
}
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {
  status ";
}className="h - 10 w - 24" /> ";
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {


>>>>>>> main
  addSuffix: true 
}) 
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}"};
}
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======


>>>>>>> main
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


  i ";
}> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 4 w - 40" /></TableCell> <TableCell><Skeleton className="h - 4 w - 32" /></TableCell> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 6 w - 20" /></TableCell> <TableCell className="text - right" ><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filtered_disputes.map ( (dispute) => (<TableRow key= {
  dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex - col text - sm" > <span> </span> </div> </TableCell> <TableCell> {
  formatDistanceToNow (new Date (dispute.created at), {
  add_suffix: true;
});
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);
}"}
}
;
>>>>>>> main
