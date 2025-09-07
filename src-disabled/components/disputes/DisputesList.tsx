<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
        return 'outline'; // Changed from './success'; to "outline";
=======


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
origin/cursor/automate-test-improve-and-merge-code-2533
import {
        return 'outline'; // Changed from './success'; to "outline";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
      case 'closed':;
        return 'outline';
      default:;
import React, { useState } from './react';
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
origin/cursor/automate-test-improve-and-merge-code-2533
=======
import { Dispute, DisputeStatus  } from '@/types/ disputes';
import { Button  } from '@/components/ui/ button';
import { Badge  } from '@/components/ui/ badge';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
import {
  // TODO: Implement
pr-12325
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react'
import Link from "next/link";
type DisputesListProps = any;
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';
type DisputesListProps = {;
  disputes: Dispute[];
isLoading: boolean 
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
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
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
TableBody,
  TableCell,
  TableHead,
  TableHeader,

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Table,
=======
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {  Table,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
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


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  Table,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean
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

<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
=======
        return "outline", // Changed from './success'; to "outline";

      case "closed":;
        return "outline";
      default:;
        return "default";


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

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
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        return "outline", // Changed from './success'; to "outline";

      case "closed":;
        return "outline";
      default:;
        return "default";



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        <div className="border rounded-md">
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>
        <div className='border rounded-md'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <TableHead className="text-right">Actions</TableHead>
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<TableHead className='text-right'>Actions</TableHead>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
                <TableHead className="text-right">Actions</TableHead>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                <TableHead className="text-right">Actions</TableHead>


<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
              </TableRow>
=======
  TableRow} from "@/components/ui/table",              </TableRow>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>"
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>"
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>"
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>"
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>"
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
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
export function DisputesList({ disputes, isLoading }:,  DisputesListProps) {;,
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),;
  const filteredDisputes = statusFilter === "all";
    ? disputes;
    : disputes.filter(dispute => dispute.status ===,  statusFilter),;
  const getStatusBadgeVariant = (status:,  DisputeStatus) => {;,
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
      default:;,
      default:;
        return "default";
    }
  };
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        <div className="flex gap-2 mb-4">;,
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
            <TableBody>;,
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
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
              ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
            </TableBody>;
          </Table>;
        </div>;
      </div>;
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
    );
<<<<<<< HEAD
  }

  if (disputes.length === 0) {
    return (
=======



=======
    );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
  }
  if (disputes && disputes.length === 0) {;
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
    return (
=======
              ))}    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected,  filter    );
    )
  }
  if (disputes && disputes.length === 0) {;
    return (
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="text-center py-12 border rounded-md bg-muted/20">
=======
=======
  }

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
  if (disputes.length === 0) {
    return (
  }

  if (disputes.length === 0) {
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
    return (      <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
    return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected,  filter    );
  }
      <div className="text-center py-12 border rounded-md bg-muted/20">"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />"
        <h3 className="text-xl font-medium">No disputes found</h3>"
        <p className="text-muted-foreground mt-2">"

<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx

=======
  if (disputes.length === 0) {
    return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
      <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
=======
        </p>
      </div>
    )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
<TableCell>
                    <Skeleton className='h-4 w-24' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-40' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-32' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-24' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-6 w-20' />
                  </TableCell>
                  <TableCell className='text-right'>
                    <Skeleton className='h-9 w-20 ml-auto' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
);
  }

  if (disputes.length === 0) {
    return (
<div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>
          No active disputes match the selected filter
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </p>
      </div>
    )
  }

<<<<<<< HEAD
  return (
    <div className="space-y-4">
=======
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
=======
        </p>
      </div>
    )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
<<<<<<< HEAD
    <div className='space-y-4'>
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
        </p>
      </div>
    )
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
  }
    <div className='space-y-4'>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
  return (
<div className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>
        <Button
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
          size='sm'
        >
          All
        </Button>
        <Button
variant={statusFilter === 'open' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('open')}
          size='sm'
        >
          Open
        </Button>
        <Button
variant={statusFilter === 'under_review' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('under_review')}
          size='sm'
        >
          Under Review
        </Button>
        <Button
variant={statusFilter === 'resolved' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('resolved')}
          size='sm'
        >
          Resolved
        </Button>
        <Button
variant={statusFilter === 'closed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('closed')}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
          size='sm'        >    <div className="space-y-4">
    <div className="space-y-4">
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        </p>
      </div>
    )

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
          size='sm'        >    <div className="space-y-4">
    <div className="space-y-4">
    <div className="space-y-4">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx

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
          variant={status_filter === "open" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("open")}"
          size="sm";
          size="sm";
        >;
          Open;
        </Button>;
        <Button;
          variant={status_filter === "under_review" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("under_review")}"
          size="sm";
          size="sm";
        >;
          Under Review;
        </Button>;
        <Button;
          variant={status_filter === "resolved" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("resolved")}"
          size="sm";
          size="sm";
        >;
          Resolved;
        </Button>;
    <div className="space-y-4">"
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">"
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}"
          onClick={() => setStatusFilter("all")}"
          size="sm""
  }

  return (
    <div className="space-y-4">
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
=======
    <div className="space-y-4">      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          size="sm"
        >
          All
        </Button>
        <Button
          variant={statusFilter === "open" ? "default" : "outline"}"
          onClick={() => setStatusFilter("open")}"
          size="sm""
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
=======
)
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");"
"
  const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all");""
  const filtered_disputes = status_filter === "all";"
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
  // TODO: Implement
    switch (status) {"
      case "open": return "default";""
      case "under_review":;""
        return "secondary";""
      case "resolved":;""
        return "outline", // Changed from './success'; to "outline";""
      case "closed":;""
        return "outline";"
      default:;"
        return "default";""
        <div className="border rounded-md">"
</div>
          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>Case ID
                <TableHead>Project
                <TableHead>Parties
                <TableHead>Created
                <TableHead>Status

                <TableHead className="text-right">Actions"
            <TableBody>

                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" />""
                  <TableCell><Skeleton className="h-4 w-40" />""
                  <TableCell><Skeleton className="h-4 w-32" />""
                  <TableCell><Skeleton className="h-6 w-20" />""
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" />"
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),;"
      <div className="space-y-4">;"
</div>"
        <div className="flex gap-2 mb-4">;"
            <Skeleton key={status} className="h-10 w-24" />;"

        </div>;"
        <div className="border rounded-md">;"
          <Table>;

            <TableHeader>;

              <TableRow>;

                <TableHead>Case ID;
                <TableHead>Project;
                <TableHead>Parties;
                <TableHead>Created;
                <TableHead>Status;"
                <TableHead className="text-right">Actions;"
              ;
            <TableBody>;

                <TableRow key={i}>;
                  <TableCell><Skeleton className="h-4 w-24" />;""
                  <TableCell><Skeleton className="h-4 w-40" />;""
                  <TableCell><Skeleton className="h-4 w-32" />;""
                  <TableCell><Skeleton className="h-6 w-20" />;""
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" />;"
        </div>;
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;

        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
</p>

      <div className="text-center py-12 border rounded-md bg-muted/20">"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />"
        <h3 className="text-xl font-medium">No disputes found</h3>""
        <p className="text-muted-foreground mt-2">"

        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">;"
</p>"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;"
        <h3 className="text-xl font-medium">No disputes found</h3>;""
        <p className="text-muted-foreground mt-2">;"
        </p>;
        <Button;"
          variant={status_filter === "open" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("open")}"

          variant={status_filter === "under_review" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("under_review")}"

          variant={status_filter === "resolved" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("resolved")}"

        ;"
    <div className="space-y-4">"
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">"
          variant={statusFilter === "all" ? "default" : "outline"}""
          onClick={() => setStatusFilter("all")}"

          variant={statusFilter === "open" ? "default" : "outline"}""
          onClick={() => setStatusFilter("open")}"

          variant={statusFilter === "under_review" ? "default" : "outline"}""
          onClick={() => setStatusFilter("under_review")}"

          variant={statusFilter === "resolved" ? "default" : "outline"}""
          onClick={() => setStatusFilter("resolved")}"

          variant={statusFilter === "closed" ? "default" : "outline"}""
          onClick={() => setStatusFilter("closed")}"


      <div className="border rounded-md overflow-hidden">"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          size="sm"
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}"
          onClick={() => setStatusFilter("under_review")}"
          size="sm""
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
          size="sm"
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}"
          onClick={() => setStatusFilter("resolved")}"
          size="sm""
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
          size="sm"
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === "closed" ? "default" : "outline"}"
          onClick={() => setStatusFilter("closed")}"
          size="sm""
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
          size="sm"
          size='sm'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          Closed
        </Button>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      <div className="border rounded-md overflow-hidden">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx

      <div className="border rounded-md overflow-hidden">
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======

<div className='border rounded-md overflow-hidden'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx


<div className='border rounded-md overflow-hidden'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======

<div className='border rounded-md overflow-hidden'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======


=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
              <TableHead className="text-right">Actions</TableHead>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
              <TableHead className="text-right">Actions</TableHead>
<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>',
                  {dispute.id.split('-')[0]}'
                </TableCell>
                <TableCell>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx

<<<<<<< HEAD

                  {dispute.project?.title || 'Unknown Project'}


<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
                  {dispute.project?.title || 'Unknown Project'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                </TableCell>
=======
      </div>                </TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <TableCell>
                  <div className='flex flex-col text-sm'>'
                    <span>
                      Client:{' '}'
                      {dispute.client_profile?.display_name |'Unknown Client'}'
                    </span>
                    <span>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
                      Talent:{' '}
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>
=======
                      Talent:{' '}'
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <TableHead className="text-right">Actions</TableHead>
=======
              <TableHead className="text-right">Actions</TableHead>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">"
                  {dispute.id.split('-')[0]}',
                </TableCell>
                <TableCell>
                    addSuffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}"
                  {dispute.project?.title || "Unknown Project"}"
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">"
                    <span>
                      Client: {dispute.client_profile?.display_name || "Unknown Client"}"
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}"
                <TableCell className="font-mono text-xs">
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

                    addSuffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
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
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
=======
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======

                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                    </span>
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
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
                <TableCell className='font-mono text-xs'>;,
                  {dispute && dispute.id.split('-')[0]}'
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  {dispute && dispute.project?.title || 'Unknown Project'}'
                </TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm'>;
                    <span>;
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
                      Client:{' '}
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client'}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
                      Client:{' '}'
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                    </span>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    <span>;
                      Talent:{' '}'
                      {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {;
                    addSuffix: true,;
                  })}                      Talent: {dispute && dispute.talent_profile?.display_name || "Unknown Talent"}"
        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("closed")}"
          size="sm";
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
      <div className='border rounded - md overflow - hidden'>        <Table>      <div className="border rounded - md overflow-hidden">;
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
                  {dispute.id.split ('-')[0]}',
                </TableCell>;
                <TableCell>;
                  {dispute.project?.title || 'Unknown Project'}'
                </TableCell>;
                <TableCell>;
                  <div className='flex flex - col text - sm'>;
                    <span>;
                      Client:{' '}'
                      {dispute.client_profile?.display_name || 'Unknown Client'}'
                    </span>;
                    <span>;
                      Talent:{' '}'
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}"
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
                    {dispute.status.replace('_ ')}'
                  </Badge>
                </TableCell>
                <TableCell className="text-right">"
                  <Button asChild size="sm">"
                    <Link href={`/dashboard/disputes/${dispute.id}`} />View Details</Link>`
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
{formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true,
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
                    </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </Button>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_', ' ')}'
                  </Badge>;
                </TableCell>;
                <TableCell className='text - right'>;
                  <Button as_child size='sm'>;
                    <Link href={`/dashboard / disputes/${dispute.id}`} />;`
                      View Details;
                    </Link>                  </Button>                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_ ')}'
                  </Badge>;
                </TableCell>;
                <TableCell className="text - right">;
                  <Button as_child size="sm">;
                    <Link href={`/dashboard / disputes/${dispute.id}`} />View Details</Link>;`
                  </Button>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Check condition
if ( {") {"
  $2
}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
  return (<div className="space-y-4" > <div className="flex gap - 2 mb-4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {
  status ";
}className="h - 10 w-24" /> ";
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  addSuffix: true 
}) 
=======
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";,
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {"
  status ";
}className="h - 10 w - 24" /> ";
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {"
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  addSuffix: true
})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
}"};
}
}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
  i ";
}> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 4 w - 40" /></TableCell> <TableCell><Skeleton className="h - 4 w - 32" /></TableCell> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 6 w - 20" /></TableCell> <TableCell className="text - right" ><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {"
  filtered_disputes.map ( (dispute) => (<TableRow key= {
  dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex - col text - sm" > <span> </span> </div> </TableCell> <TableCell> {"
  formatDistanceToNow (new Date (dispute.created,  at), {
  add_suffix: true;
});
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);
}"}"
}
;
}}}}}})))
}
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
          </TableBody>
        </Table>
      </div>
    </div>
  );
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
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/disputes/DisputesList.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
=======

              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>

                <TableCell>


                  <div className='flex flex-col text-sm'>
                    <span>
</span>
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>


                <TableCell className="font-mono text-xs">"


                  <div className="flex flex-col text-sm">"

      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">;"



              <TableHead className='text-right'>Actions;

            {filteredDisputes && filteredDisputes.map(dispute => (            ;

              <TableRow key={dispute && dispute.id}>;

                <TableCell className='font-mono text-xs'>;

                <TableCell>;


                  <div className='flex flex-col text-sm'>;
                    <span>;
                    </span>;
                      {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;

        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}")"
          on_click={() => setStatusFilter ("closed")}"

      <div className='border rounded - md overflow - hidden'>        <Table>      <div className="border rounded - md overflow - hidden">;"



              <TableHead > Case ID;
              <TableHead > Project;
              <TableHead > Parties;
              <TableHead > Created;
              <TableHead > Status;"
              <TableHead className='text - right'>Actions;

            {filtered_disputes.map (dispute => (            ;

              <TableRow key={dispute.id}>;

                <TableCell className='font - mono text - xs'>;



                  <div className='flex flex - col text - sm'>;
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;


                  <Badge variant={getStatusBadgeVariant(dispute.status)}>


                <TableCell className="text-right">"
                  <Button asChild size="sm">"

                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details

                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;

                <TableCell className='text - right'>;

                  <Button as_child size='sm'>;
`;
                    <Link href={`/dashboard / disputes/${dispute.id}`}>;



                <TableCell className="text - right">;"
                  <Button as_child size="sm">;"
                    <Link href={`/dashboard / disputes/${dispute.id}`}>View Details;
              ))}
    </div>);"
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";"
</div>)"
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {""
  status ";""
}className="h - 10 w - 24" /> ";"
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID <TableHead > Project <TableHead > Parties <TableHead > Created <TableHead > Status <TableHead className="text - right" >Actions   <TableBody> {"
</div>)
  [...Array (5) ].map ( (, i) => (<TableRow key= {


  addSuffix: true;)
}) 
} <TableCell>   ) ) ;
}  </div> </div>) ;
}> <TableCell><Skeleton className="h - 4 w - 24" /> <TableCell><Skeleton className="h - 4 w - 40" /> <TableCell><Skeleton className="h - 4 w - 32" /> <TableCell><Skeleton className="h - 4 w - 24" /> <TableCell><Skeleton className="h - 6 w - 20" /> <TableCell className="text - right" ><Skeleton className="h - 9 w - 20 ml - auto" /> ) );""
}  </div> </div>) ";""
}> All  <Button > Open  <Button > Under Review  <Button > Resolved  <Button > Closed  </div> <div className="border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID <TableHead > Project <TableHead > Parties <TableHead > Created <TableHead > Status <TableHead className="text - right" >Actions   <TableBody> {"
  filtered_disputes.map ( (dispute) => (<TableRow key= {"
  dispute.id ";""
}>  <TableCell> <div className="flex flex - col text - sm" > <span> </span> </div>  <TableCell> {"
} <TableCell>   ) );
}  </div> </div>);"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputesList.tsx
