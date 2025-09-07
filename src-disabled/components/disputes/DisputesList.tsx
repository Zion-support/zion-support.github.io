<<<<<<< HEAD
}
=======
<<<<<<< HEAD

}
export /**;
 * DisputesList - Function description;
 */;
function DisputesList() {const [status_filter, setStatusFilter] = useState < DisputeStatus | 'all>(all')const filtered_disputes =;
    status_filter === 'all;
      ? disputes;
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
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
        return 'outline'; // Changed from './success'; to "outline";
>>>>>>> origin/chore/fix-lint-and-merge

      case 'closed:;
        return outline';
      default:;
import React, { useState } from './react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Dispute, DisputeStatus  } from '@/types/ disputes';
import { Button  } from '@/components/ui/ button';
import { Badge  } from '@/components/ui/ badge';
import { Dispute, DisputeStatus  } from @/types / disputes';
import { Button  } from '@/components / ui / button;
import { Badge  } from @/components / ui / badge';

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
  TableRow } from '@/components / ui / table';
import Skeleton from "@/components / ui / skeleton";
  TableRow } from '@/components/ui/ table';
import Skeleton from "@/components/ui/ skeleton";
import { formatDistanceToNow  } from './date - fns';
import Link from './next / link';
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react'
import Link from "next/link";
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  TableRow} from @/components/ui/table",
import { ShieldAlert } from 'lucide-react
type DisputesListProps = any;

<<<<<<< HEAD
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
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
type DisputesListProps = any;type DisputesListProps = {import React, { useState } from 'react';
import { Dispute, DisputeStatus  } from '@/types/disputes';
import { Table,  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
type DisputesListProps = any;type DisputesListProps = {import React, { useState } from react';
import { Dispute, DisputeStatus  } from '@/types/disputes;
import { Table,  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from @/components/ui/table';
type DisputesListProps = {disputes: Dispute[];
isLoading: boolean ;
}export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {const [statusFilter, setStatusFilter] = useState<DisputeStatus | all'>('all;
  )const filteredDisputes =;
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
  disputes: Dispute[];
isLoading: boolean 
}

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | all'>(;
    'all;
  );

  const filteredDisputes =;
    statusFilter === all';
      ? disputes;
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus,) => {
    switch (status) {
      case 'open:;

        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        return 'outline'; // Changed from "success" to "outline";
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus,) => {switch (status) {case 'open':;return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
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


import React, { useState } from react";
import { Dispute, DisputeStatus } from "@/types/disputes;


        return outline'; // Changed from success" to "outline
      case 'closed:
        return outline'
      default:
        return 'default
import React, { useState } from react"
import { Dispute, DisputeStatus } from "@/types/disputes
import { Button } from @/components/ui/button"
import { Badge } from "@/components/ui/badge
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from @/components/ui/table"
import Skeleton from "@/components/ui/skeleton
import { formatDistanceToNow } from date-fns"
import Link from "next/link
TableBody,
  TableCell,
  TableHead,
  TableHeader,

import { Button } from @/components/ui/button",
import { Badge } from "@/components/ui/badge,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  Table,

  TableBody,
  TableCell,
  TableHead,
  TableHeader,

  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  TableRow } from @/components/ui/table';
TableBody,TableCell,TableHead,TableHeader,import { Button } from @/components/ui/button",import { Badge } from "@/components/ui/badge,import { return 'outline; // Changed from success" to "outline;
      case closed':;
        return 'outline;
      default:;
        return default';import React, { useState  } from 'react;
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from @/components/ui/table",import {Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from @/components/ui/table';
type DisputesListProps = {disputes: Dispute[],isLoading: boolean;
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

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");

  const filteredDisputes = statusFilter === "all" ;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
export /**;
 * DisputesList - Function description;
 */;
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
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review":;
        return "secondary";
      case "resolved":;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      case resolved":;

        return "outline, // Changed from './success; to outline";

      case "closed:;
        return outline";
      default:;
        return "default;



        <div className=border rounded-md">
import { formatDistanceToNow } from date-fns",
import Link from "next/link,
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

        <div className=border rounded-md">

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

        <div className="border rounded-md>
}
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | all">("all)
  const filteredDisputes = statusFilter === all"
    ? disputes
    : disputes.filter(dispute => dispute.status === statusFilter)
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open: return default"
      case "under_review:
        return secondary"
      case "resolved:
        return outline", // Changed from "success to outline"
      case "closed:
        return outline"
      default:
        return "default
    }
  }

  if (isLoading) {
    return (
      <div className='space-y-4>
        <div className=flex gap-2 mb-4'>
          {['All, Open', 'Under Review, Resolved', 'Closed].map(status => (
            <Skeleton key={status} className=h-10 w-24' />          ))}
        </div>
        <div className='border rounded-md'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
                <TableHead className="text-right">Actions</TableHead>
                <TableHead className=text-right">Actions</TableHead>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

                <TableHead className="text-right>Actions</TableHead>

                <TableHead className=text-right">Actions</TableHead>

<TableHead className=text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD



<TableHead className='text-right>Actions</TableHead>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

              </TableRow>

            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>

                  <TableCell><Skeleton className="h-4 w-24 /></TableCell>
                  <TableCell><Skeleton className=h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32 /></TableCell>
                  <TableCell><Skeleton className=h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20 /></TableCell>
                  <TableCell className=text-right"><Skeleton className="h-9 w-20 ml-auto /></TableCell>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      case "resolved":;import { formatDistanceToNow } from "date-fns",import Link from "next/link",type DisputesListProps = {disputes: Dispute[];
      case resolved":;import { formatDistanceToNow } from "date-fns,import Link from next/link",type DisputesListProps = {disputes: Dispute[];
  isLoading: boolean;
        return "outline, // Changed from ./success'; to outline";case "closed:;
        return outline";
      default:;
        return "default;<div className=border rounded-md">;
}
export function DisputesList() {const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all>(all")const filteredDisputes = statusFilter === "all;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                </TableRow>
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from @/components/ui/table",
type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean;
},
export function DisputesList({ disputes, isLoading }:,  DisputesListProps) {,
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | all">("all),
  const filteredDisputes = statusFilter === all";
    ? disputes;
    : disputes.filter(dispute => dispute.status ===,  statusFilter),
  const getStatusBadgeVariant = (status:,  DisputeStatus) => {,
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all>(all"),
  const filteredDisputes = statusFilter === "all;
    ? disputes;
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
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
        return "outline";
>>>>>>> origin/chore/fix-lint-and-merge
      default:;,
      default:;
        return default";
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  if (isLoading) {return (<div className=space-y-4'>;
        <div className='flex gap-2 mb-4>;
          {[All', 'Open, Under Review', 'Resolved, Closed'].map(status => (<Skeleton key={status} className='h-10 w-24 />          ))}
        </div>;
        <div className=border rounded-md'>;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Case ID</TableHead>;
                <TableHead>Project</TableHead>;
                <TableHead>Parties</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead className="text-right>Actions</TableHead>;
<TableHead className='text-right>Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array(5)].map((_, i) => (<TableRow key={i}>;
                  <TableCell><Skeleton className=h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40 /></TableCell>;
                  <TableCell><Skeleton className=h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24 /></TableCell>;
                  <TableCell><Skeleton className=h-6 w-20" /></TableCell>;
                  <TableCell className="text-right><Skeleton className=h-9 w-20 ml-auto" /></TableCell>;
                </TableRow>;
  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table,type DisputesListProps = {disputes: Dispute[],isLoading: boolean;
},export function DisputesList() {const [statusFilter, setStatusFilter] = useState<DisputeStatus | all">("all),const filteredDisputes = statusFilter === all";
    ? disputes;
    : disputes.filter(dispute => dispute.status === statusFilter),const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {case "open: return default",case "under_review:;
        return secondary",case "resolved:;
        return outline", // Changed from "success to outline";
      case "closed:;
        return outline";
      default:;
        return "default;
    }
  }if (isLoading) {return (<div className=space-y-4">;
  }
  if (isLoading) {
    return (;
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
          ))}
        </div>;
        <div className=border rounded-md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Case ID</TableHead>;
                <TableHead>Project</TableHead>;
                <TableHead>Parties</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead className="text-right>Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;,
            <TableBody>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              {[...Array(5)].map((_, i) => (<TableRow key={i}>;
                  <TableCell><Skeleton className=h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40 /></TableCell>;
                  <TableCell><Skeleton className=h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24 /></TableCell>;
                  <TableCell><Skeleton className=h-6 w-20" /></TableCell>;
                  <TableCell className="text-right><Skeleton className=h-9 w-20 ml-auto" /></TableCell>;
                </TableRow>;
              ))}))}</TableBody>;
          </Table>;
        </div>;
      </div>;)}if (disputes && disputes.length === 0) {return (<div className=text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4 />;
        <h3 className=text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2>          No active disputes match the selected filter    ))}if (disputes && disputes.length === 0) {return (}if (disputes.length === 0) {return (}if (disputes.length === 0) {return (<div className=text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4 />;
        <h3 className=text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2>          No active disputes match the selected filter    )}<div className="text-center py-12 border rounded-md bg-muted/20>;
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium>No disputes found</h3>;
        <p className=text-muted-foreground mt-2">;
          No active disputes match the selected filter;
<TableCell>;
                    <Skeleton className=h-4 w-24' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h-4 w-40 />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className=h-4 w-32' />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className='h-4 w-24 />;
                  </TableCell>;
                  <TableCell>;
                    <Skeleton className=h-6 w-20' />;
                  </TableCell>;
                  <TableCell className='text-right>;
                    <Skeleton className=h-9 w-20 ml-auto' />;
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
              ))}

            </TableBody>;
          </Table>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

    );



  }

  if (disputes && disputes.length === 0) {

              ))}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

    );

  }
  if (disputes && disputes.length === 0) {

    return (

      <div className='text-center py-12 border rounded-md bg-muted/20>;
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium>No disputes found</h3>;
        <p className=text-muted-foreground mt-2'>          No active disputes match the selected,  filter    );
    )
  }
  if (disputes && disputes.length === 0) {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
      <div className='text-center py-12 border rounded-md bg-muted/20>;
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium>No disputes found</h3>;
        <p className=text-muted-foreground mt-2'>          No active disputes match the selected filter    );
  }


  }

  if (disputes.length === 0) {
    return (
  }

  if (disputes.length === 0) {
    return (
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

      <div className="text-center py-12 border rounded-md bg-muted/20>

  if (disputes.length === 0) {
    return (
  }

  if (disputes.length === 0) {

      <div className='text-center py-12 border rounded-md bg-muted/20>;
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium>No disputes found</h3>;
        <p className=text-muted-foreground mt-2'>          No active disputes match the selected,  filter    );
  }
      <div className=text-center py-12 border rounded-md bg-muted/20">"
        <ShieldAlert className=mx-auto h-12 w-12 text-muted-foreground mb-4 />"
        <h3 className="text-xl font-medium>No disputes found</h3>
        <p className="text-muted-foreground mt-2">

      <div className=text-center py-12 border rounded-md bg-muted/20">

        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4 />
        <h3 className=text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2>
          No active disputes match the selected filter

<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
<TableCell>
                    <Skeleton className='h-4 w-24 />
                  </TableCell>
                  <TableCell>
                    <Skeleton className=h-4 w-40' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-32 />
                  </TableCell>
                  <TableCell>
                    <Skeleton className=h-4 w-24' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-6 w-20 />
                  </TableCell>
                  <TableCell className=text-right'>
                    <Skeleton className='h-9 w-20 ml-auto />
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
<div className=text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4 />
        <h3 className=text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2>
          No active disputes match the selected filter
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
        </p>
      </div>
    )
  return (
<div className=space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
        </p>
      </div>
    )
  }
    <div className='space-y-4>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  }

  return (
<div className=space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2>
        <Button
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
          No active disputes match the selected filter;
        </p>;
      </div>;
    )}<div className=space-y-4'>;
  return (<div className='space-y-4>;
      <div className=flex gap-2 mb-4 overflow-x-auto pb-2'>;
        <Button;
          variant={statusFilter === 'all ? default' : 'outline}
          onClick={() => setStatusFilter(all')}
          size='sm;
        >;
          All;
        </Button>;
        <Button;
variant={statusFilter === open' ? 'default : outline'}
          onClick={() => setStatusFilter('open)}
          size=sm';
        >;
          Open;
        </Button>;
        <Button;
variant={statusFilter === 'under_review ? default' : 'outline}
          onClick={() => setStatusFilter(under_review')}
          size='sm;
        >;
          Under Review;
        </Button>;
        <Button;
variant={statusFilter === resolved' ? 'default : outline'}
          onClick={() => setStatusFilter('resolved)}
          size=sm';
        >;
          Resolved;
        </Button>;
        <Button;
variant={statusFilter === 'closed' ? 'default' : 'outline'}
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

  if (disputes && disputes.length === 0) {
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
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
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
        </p>;
      </div>;
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
        >;
          All;
        </Button>;<Button;
          variant={status_filter === open" ? "default : outline"}
          on_click={() => setStatusFilter ("open)}size=sm";
          size="sm;
        >;
          Open;
        </Button>;<Button;
          variant={status_filter === under_review" ? "default : outline"}
          on_click={() => setStatusFilter ("under_review)}size=sm";
          size="sm;
        >;
          Under Review;
        </Button>;<Button;
          variant={status_filter === resolved" ? "default : outline"}
          on_click={() => setStatusFilter ("resolved)}size=sm";
          size="sm;
        >;
          Resolved;
        </Button>;<div className=space-y-4">;
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2>;
        <Button;
          variant={statusFilter === all" ? "default : outline"}
          onClick={() => setStatusFilter("all)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
    );
  }
          size=sm";
        >;
          All;
        </Button>;
        <Button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}size="sm";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
        >;
          Open;
        </Button>;
        <Button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}size="sm";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
        >;
          Under Review;
        </Button>;
        <Button;
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

    <div className=space-y-4">




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
        >;
          Resolved;
        </Button>;
    <div className="space-y-4>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <Button
          variant={statusFilter === all" ? "default : outline"}"
          onClick={() => setStatusFilter(all)}"
          size="sm
  }

  return (
    <div className="space-y-4">

      <div className=flex gap-2 mb-4 overflow-x-auto pb-2>

        <Button
          variant={statusFilter === "all" ? default : "outline"}
          onClick={() => setStatusFilter(all)}
          size="sm"
        >
          All
        </Button>
        <Button
          variant={statusFilter === open ? "default" : outline}"
          onClick={() => setStatusFilter("open)}
          size="sm"
          variant={statusFilter === open" ? "default : outline"}
          onClick={() => setStatusFilter("open)}

          size=sm"
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review ? default" : "outline}
          onClick={() => setStatusFilter("under_review")}
          size=sm""
          variant={statusFilter === under_review ? "default" : outline}
          onClick={() => setStatusFilter("under_review")}

          size=sm
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? default : "outline"}
          onClick={() => setStatusFilter(resolved")}"
          size=sm"
          variant={statusFilter === "resolved ? default" : "outline}
          onClick={() => setStatusFilter(resolved")}

          size="sm
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === closed" ? "default : outline"}"
          onClick={() => setStatusFilter(closed)}"
          size="sm
          variant={statusFilter === "closed" ? default : "outline"}
          onClick={() => setStatusFilter(closed)}

          size="sm"
          size='sm'
<<<<<<< HEAD
=======
<<<<<<< HEAD
          size='sm
origin/cursor/automate-test-improve-and-merge-code-2533

          size=sm'
        >
          Closed
        </Button>
      </div>


      <div className=border rounded-md overflow-hidden>





<div className='border rounded-md overflow-hidden'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
<TableHead className=text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
          size='sm
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          Closed
        </Button>

      <div className=border rounded-md overflow-hidden>

              <TableHead className="text-right">Actions</TableHead>
<TableHead className=text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
            </TableRow>
          </TableHeader>
          <TableBody>

<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs>,
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
<<<<<<< HEAD
=======
<<<<<<< HEAD



                  {dispute.project?.title || Unknown Project'}


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

                </TableCell>

                <TableCell>
                  <div className='flex flex-col text-sm>
                    <span>
                      Client:{' '}
                      {dispute.client_profile?.display_name |Unknown Client'}'
                    </span>
                    <span>
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

                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {

            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className=font-mono text-xs>"
                  {dispute.id.split('-')[0]},
                </TableCell>
                <TableCell>
                    addSuffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent}
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>
                <TableCell>
                  <div className=flex flex-col text-sm">"
                    <span>
                      Client: {dispute.client_profile?.display_name || Unknown Client}"
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent}
                <TableCell className="font-mono text-xs">
                  {dispute.id.split(-')[0]}
                </TableCell>
                <TableCell>

                  {dispute.project?.title || Unknown Project}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">
                    <span>
                      Client: {dispute.client_profile?.display_name || Unknown Client}
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}

<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                    </span>
                  </div>
                </TableCell>
                <TableCell>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Button;
          variant={statusFilter === closed ? "default" : outline}
          onClick={() => setStatusFilter("closed")}size=sm;
          size='sm;
        >;
          Closed;
        </Button>;
      </div>;
      <div className="border rounded-md overflow-hidden">;
<div className=border rounded-md overflow-hidden'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className=text-right>Actions</TableHead>;
<TableHead className='text-right>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes.map((dispute) => (<TableRow key={dispute.id}>;
                <TableCell className=font-mono text-xs'>;
                  {dispute.id.split('-)[0]}
                </TableCell>;
                <TableCell>{dispute.project?.title || Unknown Project'}</TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm>;
                    <span>Client:{ '}
                      {dispute.client_profile?.display_name |'Unknown Client}
                    </span>;
                    <span>Talent:{ '}{dispute.talent_profile?.display_name |'Unknown Talent}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute.created_at), {<TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes.map((dispute) => (<TableRow key={dispute.id}>;
                <TableCell className=font-mono text-xs>;
                  {dispute.id.split(-')[0]}
                </TableCell>;
                <TableCell>addSuffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}{dispute.project?.title || Unknown Project}
                </TableCell>;
                <TableCell>;
                  <div className="flex flex-col text-sm">;
                    <span>Client: {dispute.client_profile?.display_name || Unknown Client}
                    </span>;
                    <span>Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}{dispute.talent_profile?.display_name || 'Unknown Talent}</span>;
                  </div>;
                </TableCell>;
                <TableCell>;
          size=sm;
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;<div className=border rounded-md overflow-hidden'>        <Table>      <div className=border rounded-md overflow-hidden>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className='text-right>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map(dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map((dispute) => (<TableRow key={dispute && dispute.id}>;
                <TableCell className=font-mono text-xs'>;
                  {dispute && dispute.id.split('-)[0]}{formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}</TableCell>;
                <TableCell>{dispute && dispute.project?.title || Unknown Project'}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm'>;
                    <span>;
                      Client:{ '}
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client}

                    </span>;
                    <span>;
                      Talent:{ '}
                    <span>Client:{' }
                      {dispute && dispute.client_profile?.display_name || Unknown Client'}</span>;
                    <span>Talent:{' }
                      {dispute && dispute.talent_profile?.display_name || Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {addSuffix: true})}                      Talent: {dispute && dispute.talent_profile?.display_name || "Unknown Talent"}
        <Button;
          variant={status_filter === closed ? "default" : outline}
          on_click={() => setStatusFilter ("closed")}
          size=sm;
=======
>>>>>>> merged-prs-20250907-203621
          size="sm";
>>>>>>> origin/chore/fix-lint-and-merge
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
      <div className='border rounded-md overflow-hidden>        <Table>      <div className=border rounded-md overflow-hidden>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className=text-right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map(dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map((dispute) => (;
              <TableRow key={dispute && dispute.id}>;
                <TableCell className='font-mono text-xs>;,
                  {dispute && dispute.id.split(-')[0]}'
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  {dispute && dispute.project?.title || Unknown Project}'
                </TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm>;
                    <span>;

                    </span>;

                    <span>;
                      Talent:{ '}'
                      {dispute && dispute.talent_profile?.display_name || Unknown Talent}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {
                    addSuffix: true})}                      Talent: {dispute && dispute.talent_profile?.display_name || "Unknown Talent"}
        <Button;
          variant={status_filter === closed" ? "default : outline"}"
          on_click={() => setStatusFilter (closed)}"
          size="sm;
          size=sm";
        >;
          Closed;
        </Button>;
      </div>;
      <div className='border rounded - md overflow - hidden'>        <Table>      <div className="border rounded - md overflow-hidden>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Case ID</TableHead>;
              <TableHead > Project</TableHead>;
              <TableHead > Parties</TableHead>;
              <TableHead > Created</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead className=text - right>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filtered_disputes.map (dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filtered_disputes.map ((dispute) => (
              <TableRow key={dispute.id}>;
                <TableCell className='font - mono text - xs'>;
                  {dispute.id.split (-)[0]}',
                </TableCell>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <TableCell>{dispute.project?.title || 'Unknown Project'}
                <TableCell>{dispute.project?.title || 'Unknown Project}
                </TableCell>;
                <TableCell>;
                  <div className=flex flex - col text - sm'>;
                    <span>Client:{' }
                      {dispute.client_profile?.display_name || Unknown Client'}
                    </span>;
                    <span>Talent:{' }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                <TableCell>;
                  {dispute.project?.title || Unknown Project'}'
                </TableCell>;
                <TableCell>;
                  <div className=flex flex - col text - sm>;
                    <span>;
                      Client:{' '}
                      {dispute.client_profile?.display_name || Unknown Client'}'
                    </span>;
                    <span>;
                      Talent:{ }'
                      {dispute.talent_profile?.display_name || 'Unknown Talent}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || Unknown Talent"}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>

                <TableCell className="text-right">
                  <Button asChild size=sm>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
{formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true})}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_,  ')}
                  </Badge>
                </TableCell>
                <TableCell className='text-right>
                  <Button asChild size=sm'>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>
                      View Details
                    </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </Button>
                </TableCell>
              </TableRow>
            ))}

                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size=sm>;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
{formatDistanceToNow(new Date(dispute.created_at), {addSuffix: true})}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_,  ')}
                  </Badge>;
                </TableCell>;
                <TableCell className='text-right>;
                  <Button asChild size=sm'>;
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
                    {dispute.status.replace ('_,  ')}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_,  ')}'
                  </Badge>;
                </TableCell>;
                <TableCell className=text - right>;
                  <Button as_child size='sm'>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Link href={`/dashboard / disputes/${dispute.id}`}>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                    <Link href={`/dashboard / disputes/${dispute.id}`} />;`
                      View Details;
                    </Link>                  </Button>                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    {dispute.status.replace ('_ ')}
                    {dispute.status.replace (_ )}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                    {dispute.status.replace ('_ ')}'
                  </Badge>;
                </TableCell>;
                <TableCell className="text - right">;
                  <Button as_child size="sm">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Link href={`/dashboard / disputes/${dispute.id}`}>View Details</Link>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
    </div>);


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
    </div>);

}

// Check condition
if ( {") {"
  $2
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
    </div>)}
// Check condition;
if ( {) {$2;
}
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {status ";
}className="h - 10 w - 24" /> ";
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  return (<div className=space - y-4" > <div className="flex gap - 2 mb - 4 > {;
  ["All", Open, "Under Review",  Resolved, "Closed" ].map ( (status) => (<Skeleton key= {status ;
}className=h - 10 w - 24" /> ";
}</div> <div className=border rounded - md > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {


=======
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  addSuffix: true 
}) 

}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}"};
}}
}
}

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> merged-prs-20250907-203621

  i ;
}> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className=h - 4 w - 40 /></TableCell> <TableCell><Skeleton className="h - 4 w - 32" /></TableCell> <TableCell><Skeleton className=h - 4 w - 24 /></TableCell> <TableCell><Skeleton className="h - 6 w - 20" /></TableCell> <TableCell className=text - right ><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>) ;
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className=border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filtered_disputes.map ( (dispute) => (<TableRow key= {
  dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex - col text - sm > <span> </span> </div> </TableCell> <TableCell> {
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

          </TableBody>
        </Table>
      </div>
    </div>
  );
};
if (isLoading) {";
<<<<<<< HEAD
=======
<<<<<<< HEAD
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}"}}
}</div> <div className=border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}}}
}</TableBody>;
        </Table>;
      </div>;
    </div>;
  )i ";
}> <TableCell><Skeleton className="h - 4 w - 24 /></TableCell> <TableCell><Skeleton className=h - 4 w - 40" /></TableCell> <TableCell><Skeleton className="h - 4 w - 32 /></TableCell> <TableCell><Skeleton className=h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 6 w - 20 /></TableCell> <TableCell className=text - right" ><Skeleton className="h - 9 w - 20 ml - auto /></TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>) ;
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className=text - right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {filtered_disputes.map ( (dispute) => (<TableRow key= {dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex - col text - sm > <span> </span> </div> </TableCell> <TableCell> {formatDistanceToNow (new Date (dispute.created at), {add_suffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}}
}</TableBody>;
        </Table>;
      </div>;
    </div>;
  )}if (isLoading) {";
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {status ";
}className="h-10 w-24" /> ";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
}) ;
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}
origin/cursor/automate-test-improve-and-merge-code-2533
}</div> <div className=border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {i ;
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className=h-4 w-40 /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className=h-4 w-24 /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className=text-right ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>) ;
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className=border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {filteredDisputes.map ( (dispute) => (<TableRow key= {dispute.id ;
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {formatDistanceToNow (new Date (dispute.created at), {addSuffix: true ;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
});
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}"