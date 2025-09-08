<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
export /**;
 * DisputesList - Function description;
 */;
function DisputesList() {const [status_filter, setStatusFilter] = useState < DisputeStatus | 'all'>('all')const filtered_disputes =;
    status_filter === 'all';
      ? disputes;
<<<<<<< HEAD
      : disputes.filter (dispute => dispute.status === status_filter)const getStatusBadgeVariant = (status: DisputeStatus, ) =>: any {switch (status) {case 'open':;
=======
      : disputes.filter (dispute => dispute.status === status_filter)const getStatusBadgeVariant = (status: DisputeStatus, ) =>: any {switch (status) {case open':;
        return 'default;
      case under_review':;
        return 'secondary;
      case resolved':;
        return 'outline; // Changed from ./success'; to "outline;
=======
}
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
        return 'outline'; // Changed from './success'; to "outline";
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      case 'closed':;
        return 'outline';
      default:;
import React, { useState } from './react';
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
:src_backup/components/disputes/DisputesList.tsx

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
:src_backup/components/disputes/DisputesList.tsx
import { Dispute, DisputeStatus  } from '@/types/ disputes';
import { Button  } from '@/components/ui/ button';
import { Badge  } from '@/components/ui/ badge';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

<<<<<<< HEAD

=======
import React, { useState } from react",
import { Dispute, DisputeStatus } from "@/types/disputes,
import { Button } from @/components/ui/button";
import { Badge } from "@/components/ui/badge;
import { Dispute, DisputeStatus  } from '@/types/ disputes;
import { Button  } from @/components/ui/ button';
import { Badge  } from '@/components/ui/ badge;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533

import {
  // TODO: Implement
pr-12325
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  TableRow } from '@/components / ui / table';
import Skeleton from "@/components / ui / skeleton";
  TableRow } from '@/components/ui/ table';
import Skeleton from "@/components/ui/ skeleton";
import { formatDistanceToNow  } from './date - fns';
import Link from './next / link';
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react'
import Link from "next/link";
<<<<<<< HEAD
=======
  TableRow } from @/components / ui / table';
import Skeleton from @/components / ui / skeleton";
  TableRow } from '@/components/ui/ table;
import Skeleton from "@/components/ui/ skeleton;
import { formatDistanceToNow  } from ./date - fns';
import Link from './next / link;
  TableRow} from @/components/ui/table",
import Skeleton from "@/components/ui/skeleton,
import { formatDistanceToNow } from date-fns";
import { ShieldAlert } from lucide-react'
import Link from "next/link;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type DisputesListProps = any;
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
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react'
import Link from "next/link";
type DisputesListProps = any;

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
<<<<<<< HEAD
import { Dispute, DisputeStatus   } from '@/types / disputes';
import { Button   } from '@/components / ui / button';
import { Badge   } from '@/components / ui / badge';
import React, { useState } from "react",import { Dispute, DisputeStatus } from "@/types/disputes",import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
=======
import Link from 'next/link';
=======
<<<<<<< HEAD
  TableRow} from @/components/ui/table';
import Skeleton from '@/components/ui/skeleton;
import { formatDistanceToNow } from date-fns';
import { ShieldAlert } from 'lucide-react;
import { Dispute, DisputeStatus   } from @/types / disputes';
import { Button   } from '@/components / ui / button;
import { Badge   } from @/components / ui / badge';
import React, { useState } from react",import { Dispute, DisputeStatus } from "@/types/disputes,import { Button  } from '@/components/ui/button;
import { Badge  } from @/components/ui/badge';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;TableRow  } from '@/components / ui / table';
import Skeleton from '@/components / ui / skeleton';
import { formatDistanceToNow   } from './date - fns';
import Link from './next / link';
  TableRow} from "@/components/ui/table",import Skeleton from "@/components/ui/skeleton",import { formatDistanceToNow  } from 'date-fns';
import { ShieldAlert  } from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type DisputesListProps = any;type DisputesListProps = {import React, { useState } from 'react';
import { Dispute, DisputeStatus  } from '@/types/disputes';
import { Table,  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
<<<<<<< HEAD
=======
type DisputesListProps = any;type DisputesListProps = {import React, { useState } from react';
import { Dispute, DisputeStatus  } from '@/types/disputes;
import { Table,  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from @/components/ui/table';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type DisputesListProps = {disputes: Dispute[];
isLoading: boolean ;
}export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {const [statusFilter, setStatusFilter] = useState<DisputeStatus | 'all'>('all';
  )const filteredDisputes =;
<<<<<<< HEAD
type DisputesListProps = {;
=======
type DisputesListProps = {
=======
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';
>>>>>>> merged-prs-20250907-203621
type DisputesListProps = {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus,) => {;
    switch (status) {;
      case 'open':;

        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return 'outline'; // Changed from "success" to "outline";
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus,) => {switch (status) {case 'open':;return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
<<<<<<< HEAD
      default:;
        return 'default';
:src_backup/components/disputes/DisputesList.tsx
=======
      default:;
        return 'default';
        return outline'; // Changed from success" to "outline;
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus,) => {switch (status) {case 'open:;return default';
      case 'under_review:;
        return secondary';
      case 'resolved:;return outline'; // Changed from success" to "outline;
      case 'closed:;
        return outline';
      default:;
        return 'default;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {


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
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
=======
import { Button } from @/components/ui/button",
import { Badge } from "@/components/ui/badge,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  Table,

  TableBody,
  TableCell,
  TableHead,
  TableHeader,

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  TableRow } from '@/components/ui/table';
TableBody,TableCell,TableHead,TableHeader,import { Button } from "@/components/ui/button",import { Badge } from "@/components/ui/badge",import { return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  TableRow } from @/components/ui/table';
TableBody,TableCell,TableHead,TableHeader,import { Button } from @/components/ui/button",import { Badge } from "@/components/ui/badge,import { return 'outline; // Changed from success" to "outline;
      case closed':;
        return 'outline;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      default:;
        return 'default';import React, { useState  } from 'react';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table",import {Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from '@/components/ui/table';
type DisputesListProps = {disputes: Dispute[],isLoading: boolean;
<<<<<<< HEAD
}export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {const [statusFilter, setStatusFilter]  = useState<DisputeStatus | "all">("all")const filteredDisputes = statusFilter === "all" ;
=======
}export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {const [statusFilter, setStatusFilter]  = useState<DisputeStatus | "all>(all")const filteredDisputes = statusFilter === "all ;
=======
>>>>>>> merged-prs-20250907-203621
  TableRow} from "@/components/ui/table";
import Skeleton from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react';
import Link from "next/link";
type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const filteredDisputes = statusFilter === "all" ;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
  disputes: Dispute[],
  is_loading: boolean;
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export /**;
 * DisputesList - Function description;
 */;
<<<<<<< HEAD
function DisputesList() {const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all")const filtered_disputes = status_filter === "all";
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter)const getStatusBadgeVariant = (status: DisputeStatus) =>: any {switch (status) {case "open": return "default";
      case "under_review":;
        return "secondary";
:src_backup/components/disputes/DisputesList.tsx
      case "resolved":;
:src_backup/components/disputes/DisputesList.tsx
=======
=======
>>>>>>> merged-prs-20250907-203621
export /**
 * DisputesList - Function description
 */
function DisputesList() {
  const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all");
  const filtered_disputes = status_filter === "all";
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review":;
        return "secondary";
      case "resolved":;
<<<<<<< HEAD



        <div className="border rounded-md>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      case resolved":;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        return "outline", // Changed from './success'; to "outline";

      case "closed":;
        return "outline";
      default:;
        return "default";



        <div className="border rounded-md">
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

        <div className="border rounded-md">

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

        <div className="border rounded-md">
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>
        <div className='border rounded-md'>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
                <TableHead className="text-right">Actions</TableHead>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <TableHead className="text-right">Actions</TableHead>
                <TableHead className=text-right">Actions</TableHead>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <TableHead className="text-right">Actions</TableHead>

                <TableHead className="text-right">Actions</TableHead>

<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD



=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx



<TableHead className='text-right'>Actions</TableHead>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD



<TableHead className='text-right>Actions</TableHead>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
              </TableRow>

            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
      case "resolved":;import { formatDistanceToNow } from "date-fns",import Link from "next/link",type DisputesListProps = {disputes: Dispute[];
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      case "resolved":;import { formatDistanceToNow } from "date-fns",import Link from "next/link",type DisputesListProps = {disputes: Dispute[];
      case resolved":;import { formatDistanceToNow } from "date-fns,import Link from next/link",type DisputesListProps = {disputes: Dispute[];
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  isLoading: boolean;
        return "outline", // Changed from './success'; to "outline";case "closed":;
        return "outline";
      default:;
        return "default";<div className="border rounded-md">;
}
<<<<<<< HEAD
export function DisputesList() {const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all")const filteredDisputes = statusFilter === "all";
=======
export function DisputesList() {const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all>(all")const filteredDisputes = statusFilter === "all;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
    : disputes.filter(dispute => dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {case "open": return "default";
      case "under_review":;
        return "secondary";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    : disputes.filter(dispute => dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {case open": return "default;
      case under_review":;
        return "secondary;
      case resolved":;
        return "outline, // Changed from success" to "outline;
      case closed":;
        return "outline;
=======
>>>>>>> merged-prs-20250907-203621
    : disputes.filter(dispute => dispute.status === statusFilter),;
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default",;
      case "under_review":;
        return "secondary",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
        return "outline";
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      default:;,
      default:;
        return "default";
    }
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  if (isLoading) {return (<div className='space-y-4'>;
        <div className='flex gap-2 mb-4'>;
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (<Skeleton key={status} className='h-10 w-24' />          ))}
        </div>;
        <div className='border rounded-md'>;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Case ID</TableHead>;
                <TableHead>Project</TableHead>;
                <TableHead>Parties</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
<TableHead className='text-right'>Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array(5)].map((_, i) => (<TableRow key={i}>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>;
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>;
                </TableRow>;
  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table",type DisputesListProps = {disputes: Dispute[],isLoading: boolean;
},export function DisputesList() {const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),const filteredDisputes = statusFilter === "all";
    ? disputes;
    : disputes.filter(dispute => dispute.status === statusFilter),const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {case "open": return "default",case "under_review":;
        return "secondary",case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
        return "outline";
      default:;
        return "default";
    }
  }if (isLoading) {return (<div className="space-y-4">;
  };
  if (isLoading) {;
    return (;
<<<<<<< HEAD
      <div className="space-y-4">;
        <div className="flex gap-2 mb-4">;,
        <div className="flex gap-2 mb-4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (<Skeleton key={status} className="h-10 w-24" />;
=======
      <div className="space-y-4>;
        <div className=flex gap-2 mb-4">;,
        <div className="flex gap-2 mb-4>;
          {[All", "Open, Under Review", "Resolved, Closed"].map((status) => (<Skeleton key={status} className="h-10 w-24 />;
=======
>>>>>>> merged-prs-20250907-203621
  };
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        <div className="flex gap-2 mb-4">;,
        <div className="flex gap-2 mb-4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (;
            <Skeleton key={status} className="h-10 w-24" />;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              {[...Array(5)].map((_, i) => (<TableRow key={i}>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>;
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>;
                </TableRow>;
              ))}))}</TableBody>;
          </Table>;
        </div>;
      </div>;)}if (disputes && disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    ))}if (disputes && disputes.length === 0) {return (}if (disputes.length === 0) {return (}if (disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    )}<div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
          No active disputes match the selected filter;
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
                  </TableCell>;
                </TableRow>;
=======
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
              ))}
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            </TableBody>;
          </Table>;
        </div>;
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
      </div>;
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    );



  }

  if (disputes && disputes.length === 0) {;

              ))}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

>>>>>>> origin/cursor/delete-old-data-records-6bba
    );

  }
  if (disputes && disputes.length === 0) {;

    return (

      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected,  filter    );
    )
  }
  if (disputes && disputes.length === 0) {;
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
<<<<<<< HEAD
=======
      <div className='text-center py-12 border rounded-md bg-muted/20>;
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium>No disputes found</h3>;
        <p className=text-muted-foreground mt-2'>          No active disputes match the selected filter    );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba



      <div className="text-center py-12 border rounded-md bg-muted/20">

  if (disputes.length === 0) {
    return (
  }

  if (disputes.length === 0) {

      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected,  filter    );
  }
      <div className="text-center py-12 border rounded-md bg-muted/20">"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />"
        <h3 className="text-xl font-medium">No disputes found</h3>"
        <p className="text-muted-foreground mt-2">"

      <div className="text-center py-12 border rounded-md bg-muted/20">

        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
);
  }

  if (disputes.length === 0) {
    return (
<div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>
          No active disputes match the selected filter
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
        </p>
      </div>
    )
  return (
<div className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
        </p>
      </div>
    )
  }
<<<<<<< HEAD
    <div className='space-y-4'>
=======
    <div className='space-y-4>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }

  return (
<div className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>
        <Button
<<<<<<< HEAD


=======
<<<<<<< HEAD
)}if (disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>;
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
)}if (disputes.length === 0) {return (<div className=text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4 />;
        <h3 className=text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          No active disputes match the selected filter;
        </p>;
      </div>;
    )}<div className='space-y-4'>;
  return (<div className='space-y-4'>;
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>;
        <Button;
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
          size='sm';
        >;
          All;
        </Button>;
        <Button;
variant={statusFilter === 'open' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('open')}
          size='sm';
        >;
          Open;
        </Button>;
        <Button;
variant={statusFilter === 'under_review' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('under_review')}
          size='sm';
        >;
          Under Review;
        </Button>;
        <Button;
variant={statusFilter === 'resolved' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('resolved')}
          size='sm';
        >;
          Resolved;
        </Button>;
        <Button;
variant={statusFilter === 'closed' ? 'default' : 'outline'}
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
          onClick={() => setStatusFilter('closed')}
:src_backup/components/disputes/DisputesList.tsx
=======
          onClick={() => setStatusFilter('closed')}
          onClick={() => setStatusFilter(closed')}
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
          onClick={() => setStatusFilter('closed')}size='sm'        >    <div className="space-y-4">;
    <div className="space-y-4">;
  if (disputes && disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          onClick={() => setStatusFilter('closed')}size='sm'        >    <div className="space-y-4">;
    <div className="space-y-4">;
    <div className="space-y-4">;
  if (disputes && disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
<<<<<<< HEAD
        </p>;
      </div>;
:src_backup/components/disputes/DisputesList.tsx
    )}size="sm";
=======
        </p>;
      </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    )}size="sm";
          onClick={() => setStatusFilter(closed')}size='sm        >    <div className=space-y-4">;
    <div className="space-y-4>;
    <div className=space-y-4">;
  if (disputes && disputes.length === 0) {return (<div className=text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4 />;
        <h3 className=text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2>      <div className="text-center py-12 border rounded-md bg-muted/20>;
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium>No disputes found</h3>;
        <p className=text-muted-foreground mt-2">;
        </p>;
      </div>;
    )}size="sm;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >;
          All;
        </Button>;<Button;
          variant={status_filter === "open" ? "default" : "outline"}
          on_click={() => setStatusFilter ("open")}size="sm";
          size="sm";
        >;
          Open;
        </Button>;<Button;
          variant={status_filter === "under_review" ? "default" : "outline"}
          on_click={() => setStatusFilter ("under_review")}size="sm";
          size="sm";
        >;
          Under Review;
        </Button>;<Button;
          variant={status_filter === "resolved" ? "default" : "outline"}
          on_click={() => setStatusFilter ("resolved")}size="sm";
          size="sm";
        >;
          Resolved;
        </Button>;<div className="space-y-4">;
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;
        <Button;
<<<<<<< HEAD
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
=======
          variant={statusFilter === all" ? "default : outline"}
          onClick={() => setStatusFilter("all)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    );
  }
          size="sm";
        >;
          All;
        </Button>;
        <Button;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}size="sm";
          variant={status_filter === "open" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("open")}"
          size="sm";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}size="sm";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
          variant={status_filter === "open" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("open")}"
          size="sm";
          size="sm";
          variant={statusFilter === "open ? default" : "outline}
          onClick={() => setStatusFilter(open")}size="sm;
          variant={status_filter === open" ? "default : outline"}"
          on_click={() => setStatusFilter (open)}"
          size="sm;
          size=sm";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >;
          Open;
        </Button>;
        <Button;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}size="sm";
          variant={status_filter === "under_review" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("under_review")}"
          size="sm";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}size="sm";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
          variant={status_filter === "under_review" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("under_review")}"
          size="sm";
          size="sm";
          variant={statusFilter === "under_review ? default" : "outline}
          onClick={() => setStatusFilter(under_review")}size="sm;
          variant={status_filter === under_review" ? "default : outline"}"
          on_click={() => setStatusFilter (under_review)}"
          size="sm;
          size=sm";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >;
          Under Review;
        </Button>;
        <Button;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}size="sm";
        >;
          Resolved;
        </Button>;
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}size="sm";
          variant={statusFilter === "resolved ? default" : "outline}
          onClick={() => setStatusFilter(resolved")}size="sm;
        >;
          Resolved;
        </Button>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    <div className="space-y-4">




<<<<<<< HEAD
          size='sm'        >    <div className="space-y-4">
    <div className="space-y-4">
          variant={status_filter === "resolved" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("resolved")}"
          size="sm";
=======
          size=sm'        >    <div className="space-y-4>
    <div className=space-y-4">
    <div className="space-y-4>
          variant={status_filter === resolved" ? "default : outline"}"
          on_click={() => setStatusFilter (resolved)}"
          size="sm;
          size=sm";
=======
>>>>>>> merged-prs-20250907-203621
          variant={status_filter === "resolved" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("resolved")}"
          size="sm";
          size="sm";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">

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

          size="sm"
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
          size='sm'
=======
          size='sm'
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          size='sm
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533

          size='sm'
        >
          Closed
        </Button>
      </div>
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


      <div className="border rounded-md overflow-hidden">





<div className='border rounded-md overflow-hidden'>
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <TableHead className="text-right">Actions</TableHead>
<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
          size='sm'
=======
          size='sm
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          Closed
        </Button>

      <div className="border rounded-md overflow-hidden">

<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <TableHead className="text-right">Actions</TableHead>
<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
            </TableRow>
          </TableHeader>
          <TableBody>

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/delete-old-data-records-6bba

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>',
                  {dispute.id.split('-')[0]}'
                </TableCell>
                <TableCell>
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/delete-old-data-records-6bba

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<<<<<<< HEAD
=======
                  {dispute.project?.title || 'Unknown Project'}


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

>>>>>>> origin/cursor/delete-old-data-records-6bba
                </TableCell>

                <TableCell>
                  <div className='flex flex-col text-sm'>'
                    <span>
                      Client:{' '}'
                      {dispute.client_profile?.display_name |'Unknown Client'}'
                    </span>
                    <span>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
                      Talent:{' '}
:src_backup/components/disputes/DisputesList.tsx
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      Talent:{' '}
                      Talent:{ }
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
                      {dispute.talent_profile?.display_name |Unknown Talent}                    </span>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {

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
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


                    </span>
                  </div>
                </TableCell>
                <TableCell>

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Button;
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}size="sm";
          size='sm';
        >;
          Closed;
        </Button>;
      </div>;
      <div className="border rounded-md overflow-hidden">;
<div className='border rounded-md overflow-hidden'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
<TableHead className='text-right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes.map((dispute) => (<TableRow key={dispute.id}>;
                <TableCell className='font-mono text-xs'>;
                  {dispute.id.split('-')[0]}
                </TableCell>;
                <TableCell>{dispute.project?.title || 'Unknown Project'}</TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm'>;
                    <span>Client:{' '}
                      {dispute.client_profile?.display_name |'Unknown Client'}
                    </span>;
                    <span>Talent:{' '}{dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute.created_at), {<TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes.map((dispute) => (<TableRow key={dispute.id}>;
                <TableCell className="font-mono text-xs">;
                  {dispute.id.split('-')[0]}
                </TableCell>;
                <TableCell>addSuffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}{dispute.project?.title || "Unknown Project"}
                </TableCell>;
                <TableCell>;
                  <div className="flex flex-col text-sm">;
                    <span>Client: {dispute.client_profile?.display_name || "Unknown Client"}
                    </span>;
                    <span>Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}{dispute.talent_profile?.display_name || 'Unknown Talent'}</span>;
                  </div>;
                </TableCell>;
                <TableCell>;
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;<div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">;
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
            {filteredDisputes && filteredDisputes.map((dispute) => (<TableRow key={dispute && dispute.id}>;
                <TableCell className='font-mono text-xs'>;
                  {dispute && dispute.id.split('-')[0]}{formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}</TableCell>;
                <TableCell>{dispute && dispute.project?.title || 'Unknown Project'}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm'>;
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <span>;
                      Client:{' '}
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client'}

                    </span>;
                    <span>;
                      Talent:{' '}
                    <span>Client:{' '}
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client'}</span>;
                    <span>Talent:{' '}
                      {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {addSuffix: true})}                      Talent: {dispute && dispute.talent_profile?.display_name || "Unknown Talent"}
        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}
          on_click={() => setStatusFilter ("closed")}
<<<<<<< HEAD
=======
          size=sm;
=======
>>>>>>> merged-prs-20250907-203621
          size="sm";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                    </span>;

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
                <TableCell>{dispute.project?.title || 'Unknown Project'}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <TableCell>{dispute.project?.title || 'Unknown Project'}
                <TableCell>{dispute.project?.title || 'Unknown Project}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </TableCell>;
                <TableCell>;
                  <div className='flex flex - col text - sm'>;
                    <span>Client:{' '}
                      {dispute.client_profile?.display_name || 'Unknown Client'}
                    </span>;
<<<<<<< HEAD
                    <span>Talent:{' '}
=======
                    <span>Talent:{' }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || Unknown Talent"}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}"
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Badge>
                </TableCell>
>>>>>>> origin/cursor/delete-old-data-records-6bba


                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>

                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Button>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
{formatDistanceToNow(new Date(dispute.created_at), {addSuffix: true})}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_', ' ')}
                  </Badge>;
                </TableCell>;
                <TableCell className='text-right'>;
                  <Button asChild size='sm'>;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>;
                      View Details;
                    </Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}{formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
<<<<<<< HEAD
                    {dispute.status.replace ('_', ' ')}
=======
                    {dispute.status.replace ('_,  ')}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_', ' ')}'
                  </Badge>;
                </TableCell>;
                <TableCell className='text - right'>;
                  <Button as_child size='sm'>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <Link href={`/dashboard / disputes/${dispute.id}`}>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Link href={`/dashboard / disputes/${dispute.id}`} />;`
                      View Details;
                    </Link>                  </Button>                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
                    {dispute.status.replace ('_ ')}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    {dispute.status.replace ('_ ')}
                    {dispute.status.replace (_ )}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {dispute.status.replace ('_ ')}'
                  </Badge>;
                </TableCell>;
                <TableCell className="text - right">;
                  <Button as_child size="sm">;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <Link href={`/dashboard / disputes/${dispute.id}`}>View Details</Link>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Link href={`/dashboard / disputes/${dispute.id}`} />View Details</Link>;`
                  </Button>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
>>>>>>> origin/cursor/delete-old-data-records-6bba


    </div>);

}

// Check condition
if ( {") {"
  $2
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
    </div>)}
// Check condition;
if ( {") {$2;
}
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {status ";
}className="h - 10 w - 24" /> ";
:src_backup/components/disputes/DisputesList.tsx
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
=======
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {status ";
}className="h - 10 w - 24" /> ";
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  return (<div className=space - y-4" > <div className="flex gap - 2 mb - 4 > {;
  ["All", Open, "Under Review",  Resolved, "Closed" ].map ( (status) => (<Skeleton key= {status ;
}className=h - 10 w - 24" /> ";
}</div> <div className=border rounded - md > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  [...Array (5) ].map ( (, i) => (<TableRow key= {
>>>>>>> origin/cursor/delete-old-data-records-6bba



  addSuffix: true 
}) 

}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
}"};
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}"};
}}
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/cursor/delete-old-data-records-6bba



          </TableBody>;
        </Table>;
      </div>;
  );
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}}}}}})))
}

          </TableBody>
        </Table>
      </div>
  );
};
if (isLoading) {";
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}"}}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}"}}
}</div> <div className=border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}}}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</TableBody>;
        </Table>;
      </div>;
  )i ";
}> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 4 w - 40" /></TableCell> <TableCell><Skeleton className="h - 4 w - 32" /></TableCell> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 6 w - 20" /></TableCell> <TableCell className="text - right" ><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {filtered_disputes.map ( (dispute) => (<TableRow key= {dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex - col text - sm" > <span> </span> </div> </TableCell> <TableCell> {formatDistanceToNow (new Date (dispute.created at), {add_suffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}"}
}</TableBody>;
        </Table>;
      </div>;
  )}if (isLoading) {";
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {status ";
}className="h-10 w-24" /> ";
<<<<<<< HEAD
:src_backup/components/disputes/DisputesList.tsx
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
  addSuffix: true ;
:src_backup/components/disputes/DisputesList.tsx
=======
  return (<div className="space-y-4" > <div className=flex gap-2 mb-4 > {";
  ["All, Open", "Under Review,  Resolved", "Closed ].map ( (status) => (<Skeleton key= {
  status ;
}className="h-10 w-24" /> ;
}</div> <div className=border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  i ;
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className=h-4 w-40 /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className=h-4 w-24 /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className=text-right ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className=border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filteredDisputes.map ( (dispute) => (<TableRow key= {
  dispute.id ;
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {
  formatDistanceToNow (new Date (dispute.created at), {
  addSuffix: true ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}) ;
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}"
origin/cursor/automate-test-improve-and-merge-code-2533
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {i ";
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {filteredDisputes.map ( (dispute) => (<TableRow key= {dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {formatDistanceToNow (new Date (dispute.created at), {addSuffix: true ;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
});
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}"