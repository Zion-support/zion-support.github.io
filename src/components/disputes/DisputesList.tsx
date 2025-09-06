<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
========
<<<<<<< HEAD
import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import {  Table,  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import Skeleton from '@/components / ui / skeleton';
import { formatDistanceToNow } from 'date - fns';
import { ShieldAlert } from 'lucide-react';
import Link from 'next / link';
type DisputesListProps = {
  disputes: Dispute[];
is_loading: boolean;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
TableBody,
  TableCell,
  TableHead,
  TableHeader,

<<<<<<< HEAD

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Table,  Table,;
=======

import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
=======
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

        <div className="border rounded-md">
=======
>>>>>>> type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
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
>>>>>>> }
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
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         <div className="border rounded-md">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        <div className="border rounded-md">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>
>>>>>>>               </TableRow>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </TableRow>
>>>>>>>             </TableHeader>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>                <TableHead className="text-right">Actions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
        return "outline", // Changed from './success'; to "outline";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "closed":;
        return "outline";
      default:;
        return "default";
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
    }
  };
========
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
=======
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
    }
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
              ))}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
              ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </TableBody>;
          </Table>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

    );
<<<<<<< HEAD

=======
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }

  if (disputes.length === 0) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="text-center py-12 border rounded-md bg-muted/20">
=======
>>>>>>>   }

  if (disputes.length === 0) {
    return (
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662

  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
    )
>>>>>>>   }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

========
<<<<<<< HEAD
    );  }
    )
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
  }
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

>>>>>>>       <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </p>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         </p>
      </div>
    )
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
=======
ursor/fix-website-loading-errors-and-merge-6662
        </p>
      </div>
    )
>>>>>>> 
========
        </p>
      </div>
    )
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
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
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx


========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
          size="sm";
        >;
          All;
        </Button>;
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

        <Button;
          variant={status_filter === "open" ? "default" : "outline"}
          on_click={() => setStatusFilter ("open")}

========
        <Button;
          variant={status_filter === "open" ? "default" : "outline"}
          on_click={() => setStatusFilter ("open")}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
          size="sm";
          size="sm";
        >;
          Open;
        </Button>;
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

        <Button;
          variant={status_filter === "under_review" ? "default" : "outline"}
          on_click={() => setStatusFilter ("under_review")}

========
        <Button;
          variant={status_filter === "under_review" ? "default" : "outline"}
          on_click={() => setStatusFilter ("under_review")}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
          size="sm";
          size="sm";
        >;
          Under Review;
        </Button>;
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

        <Button;
          variant={status_filter === "resolved" ? "default" : "outline"}
          on_click={() => setStatusFilter ("resolved")}

========
        <Button;
          variant={status_filter === "resolved" ? "default" : "outline"}
          on_click={() => setStatusFilter ("resolved")}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
          size="sm";
          size="sm";
        >;
          Resolved;
        </Button>;
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
    <div className="space-y-4">
>>>>>>>       <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onClick={() => setStatusFilter("all")}
          size="sm";
        >;
          All;
        </Button>;
        <Button;
          variant={statusFilter === "open" ? "default" :"outline"}
          onClick={() => setStatusFilter("open")}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
          size="sm"
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           size="sm"
>>>>>>>           size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
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
          size="sm"
          size="sm"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          size="sm"
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           size="sm"
>>>>>>>           size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          size="sm"
          size="sm"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          size="sm"
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           size="sm"
>>>>>>>           size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          size="sm"
          size="sm"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD

          size="sm"
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           size="sm"
>>>>>>>           size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          size="sm"
          size="sm"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          Closed
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">
>>>>>>>         <Table>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      <div className="border rounded-md overflow-hidden">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
        <Table>
>>>>>>>           <TableHeader>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">

      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map(dispute => (            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             {filteredDisputes.map((dispute) => (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {filteredDisputes.map((dispute) => (
>>>>>>>               <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  {dispute.project?.title |'Unknown Project'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {dispute.project?.title |'Unknown Project'}
                  {dispute.project?.title || 'Unknown Project'}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
                    addSuffix: true
                  })}                      Talent: {dispute.talent_profile?.display_name |"Unknown Talent"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    addSuffix: true
                  })}                      Talent: {dispute.talent_profile?.display_name |"Unknown Talent"}
                    addSuffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    </span>
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
>>>>>>>                     </span>
                  </div>
                </TableCell>
                <TableCell>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <TableCell className="text-right">
ursor/fix-website-loading-errors-and-merge-6662
                    </span>
                  </div>
                </TableCell>
                <TableCell>

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
=======
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {dispute.status.replace('_ ')}
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
                  </Badge>
                </TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                <TableCell className="text-right">
>>>>>>>                   <Button asChild size="sm">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild size="sm">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
<<<<<<< HEAD
<<<<<<< HEAD
            ))}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>             ))}
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  addSuffix: true
})
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> </div>)
}"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx


========
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
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
<<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputesList.tsx
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
