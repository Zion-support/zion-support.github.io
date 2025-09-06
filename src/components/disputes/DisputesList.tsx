<<<<<<< HEAD

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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD
=======
  TableBody
  TableCell
  TableHead
  TableHeader


import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Table,  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
TableBody,
  TableCell,
  TableHead,
  TableHeader,

<<<<<<< HEAD
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

import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
<<<<<<< HEAD
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>
=======

        <div className="border rounded-md">
  disputes: Dispute[]
  isLoading: boolean
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
  disputes: Dispute[],
  is_loading: boolean;
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
<<<<<<< HEAD
type DisputesListProps = {
  disputes: Dispute[]
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
=======
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>
ursor/fix-website-loading-errors-and-merge-6662
              </TableRow>
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
        return "outline", // Changed from './success'; to "outline";
      case "closed":;
        return "outline";
      default:;
        return "default";
        </div>
        <div className="border rounded-md">
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
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
                </TableRow>
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
    }
  }

  if (isLoading) {;
    return (
      <div className='space-y-4'>;
        <div className='flex gap-2 mb-4'>;
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (;
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>;
        <div className='border rounded-md'>          <Table>;
        <div className="border rounded-md">;
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
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array(5)].map((_, i,) => (;
                <TableRow key={i}>;
                  <TableCell>;
                    <Skeleton className='h-4 w-24' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h-4 w-40' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h-4 w-32' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h-4 w-24' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h-6 w-20' />;
                  </TableCell>;
                  <TableCell className='text-right'>;
                    <Skeleton className='h-9 w-20 ml-auto' />;
                  </TableCell>                </TableRow>                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>;
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>;
              ))}
              ))}
            </TableBody>;
          </Table>;
        </div>;
      </div>;
<<<<<<< HEAD
    );
  }

  if (disputes.length === 0) {


  }

  if (disputes && disputes.length === 0) {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
    )
  }

  if (disputes && disputes.length === 0) {;
    return (
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (disputes.length === 0) {
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
  }
=======
  }

  if (disputes.length === 0) {
    return (
  }

  if (disputes.length === 0) {
    return (
      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



        </p>
      </div>
    )
<<<<<<< HEAD




      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
ursor/fix-website-loading-errors-and-merge-6662
ursor/fix-website-loading-errors-and-merge-6662
ursor/fix-website-loading-errors-and-merge-6662
ursor/fix-website-loading-errors-and-merge-6662
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">
            {filteredDisputes.map(dispute => (            </TableRow>
          </TableHeader>
          <TableBody>

=======
      <div className="text-center py-12 border rounded-md bg-muted/20">
      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
        </p>
      </div>
    )
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        </p>
      </div>
    )
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
  return (
    }
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='space - y-4'>;
        <div className='flex gap - 2 mb - 4'>;
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map (status => (
            <Skeleton key={status} className='h - 10 w - 24' />          ))}
        </div>;
        <div className='border rounded - md'>          <Table>;
        <div className="border rounded - md">;
      <div className="space - y-4">;
        <div className="flex gap - 2 mb - 4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map ((status) => (
            <Skeleton key={status} className="h - 10 w - 24" />))}
        </div>;
        <div className="border rounded - md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Case ID</TableHead>;
                <TableHead > Project</TableHead>;
                <TableHead > Parties</TableHead>;
                <TableHead > Created</TableHead>;
                <TableHead > Status</TableHead>;
                <TableHead className='text - right'>Actions</TableHead>              </TableRow>                <TableHead className="text - right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array (5)].map ((_, i, ) => (
                <TableRow key={i}>;
                  <TableCell>;
                    <Skeleton className='h - 4 w - 24' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h - 4 w - 40' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h - 4 w - 32' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h - 4 w - 24' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h - 6 w - 20' />;
                  </TableCell>;
                  <TableCell className='text - right'>;
                    <Skeleton className='h - 9 w - 20 ml - auto' />;
                  </TableCell>                </TableRow>                  <TableCell><Skeleton className="h - 4 w - 24" /></TableCell>;
                  <TableCell><Skeleton className="h - 4 w - 40" /></TableCell>;
                  <TableCell><Skeleton className="h - 4 w - 32" /></TableCell>;
                  <TableCell><Skeleton className="h - 4 w - 24" /></TableCell>;
                  <TableCell><Skeleton className="h - 6 w - 20" /></TableCell>;
                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell>))}
            </TableBody>;
          </Table>;
        </div>;
      </div>) }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='text - center py - 12 border rounded - md bg - muted / 20'>;
        <ShieldAlert className='mx - auto h - 12 w - 12 text - muted - foreground mb - 4' />;
        <h3 className='text - xl font - medium'>No disputes found</h3>;
        <p className='text - muted - foreground mt - 2'>          No active disputes match the selected filter    );
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='text - center py - 12 border rounded - md bg - muted / 20'>;
        <ShieldAlert className='mx - auto h - 12 w - 12 text - muted - foreground mb - 4' />;
        <h3 className='text - xl font - medium'>No disputes found</h3>;
        <p className='text - muted - foreground mt - 2'>      <div className="text - center py - 12 border rounded - md bg - muted / 20">;
        <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
        <h3 className="text - xl font - medium">No disputes found</h3>;
        <p className="text - muted - foreground mt - 2">;
        </p>;
      </div>);
  }
  return (
    <div className='space - y-4'>;
      <div className='flex gap - 2 mb - 4 overflow - x-auto pb - 2'>;
        <Button;
          variant={status_filter === 'all' ? 'default' : 'outline'}
          on_click={() => setStatusFilter ('all')}
          size='sm'        >;
          All;
        </Button>;
        <Button;
          variant={status_filter === 'open' ? 'default' : 'outline'}
          on_click={() => setStatusFilter ('open')}
          size='sm'        >;
          Open;
        </Button>;
        <Button;
          variant={status_filter === 'under_review' ? 'default' : 'outline'}
          on_click={() => setStatusFilter ('under_review')}
          size='sm'        >;
          Under Review;
        </Button>;
        <Button;
          variant={status_filter === 'resolved' ? 'default' : 'outline'}
          on_click={() => setStatusFilter ('resolved')}
          size='sm'        >;
          Resolved;
        </Button>;
        <Button;
          variant={status_filter === 'closed' ? 'default' : 'outline'}
          on_click={() => setStatusFilter ('closed')}
          size='sm'        >    <div className="space - y-4">;
      <div className="flex gap - 2 mb - 4 overflow - x-auto pb - 2">;
        <Button;
          variant={status_filter === "all" ? "default" : "outline"}
          on_click={() => setStatusFilter ("all")}
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

          size="sm"
ursor/fix-website-loading-errors-and-merge-6662

  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="space-y-4">
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




<<<<<<< HEAD
          size="sm"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          size="sm"
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}



<<<<<<< HEAD
          size="sm"
ursor/fix-website-loading-errors-and-merge-6662
          size="sm"
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          size="sm"
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}



<<<<<<< HEAD
          size="sm"
ursor/fix-website-loading-errors-and-merge-6662
          size="sm"
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          size="sm"
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}



<<<<<<< HEAD
          size="sm"
ursor/fix-website-loading-errors-and-merge-6662
          size="sm"
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          size="sm"
        >
          Closed
        </Button>
      </div>
<<<<<<< HEAD
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">
ursor/fix-website-loading-errors-and-merge-6662
      <div className="border rounded-md overflow-hidden">
        <Table>
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">

      <div className="border rounded-md overflow-hidden">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map(dispute => (            </TableRow>
          </TableHeader>
          <TableBody>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
<<<<<<< HEAD
                  {dispute.project?.title |'Unknown Project'}
                  {dispute.project?.title |'Unknown Project'}
                  {dispute.project?.title || 'Unknown Project'}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                    addSuffix: true
                  })}                      Talent: {dispute.talent_profile?.display_name |"Unknown Talent"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
            ))}

                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_', ' ')}
=======
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
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  </div>
                </TableCell>
                <TableCell>
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                    </span>
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {;
                    addSuffix: true,;
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD

            ))}
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
  addSuffix: true
})
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> </div>)
}"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
<<<<<<< HEAD
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
              </TableRow>;
            ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  addSuffix: true 
}) 
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;


<<<<<<< HEAD
}
=======
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
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
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  ),; import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
type DisputesListProps = {;
  disputes: Dispute[];
isLoading: boolean ;
};
export function DisputesList ({;
  disputes, isLoading ;
}: DisputesListProps) {;
  const filteredDisputes = statusFilter === "all" const getStatusBadgeVariant = (status: DisputeStatus) => {;
  switch (status) {;
  ;
}
};
if (isLoading) {";
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {;
  status ";
}className="h-10 w-24" /> ";
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  [...Array (5) ].map ( (, i) => (<TableRow key= {;
  i ";
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  filteredDisputes.map ( (dispute) => (<TableRow key= {;
  dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {;
  formatDistanceToNow (new Date (dispute.created at), {;
  addSuffix: true ;
}) ;
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}"
}
;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
