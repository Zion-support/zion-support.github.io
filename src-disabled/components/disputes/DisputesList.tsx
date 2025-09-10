

:src_backup/components/disputes/DisputesList.tsx
}

}
export /**;
 * DisputesList - Function description;
 */;
function DisputesList() {const [status_filter, setStatusFilter] = useState < DisputeStatus | 'all'>('all')const filtered_disputes =;
    status_filter === 'all';
      ? disputes;
      : disputes.filter (dispute => dispute.status === status_filter)const getStatusBadgeVariant = (status: DisputeStatus, ) =>: any {switch (status) {case 'open':;


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
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';



:src_backup/components/disputes/DisputesList.tsx
  TableRow } from '@/components / ui / table';
import Skeleton from "@/components / ui / skeleton";
  TableRow } from '@/components/ui/ table';
import Skeleton from "@/components/ui/ skeleton";
import { formatDistanceToNow  } from './date - fns';
import Link from './next / link';
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx


  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import { Dispute, DisputeStatus   } from '@/types / disputes';
import { Button   } from '@/components / ui / button';
import { Badge   } from '@/components / ui / badge';
import React, { useState } from "react",import { Dispute, DisputeStatus } from "@/types/disputes",import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
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
:src_backup/components/disputes/DisputesList.tsx
type DisputesListProps = {;
:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
        return 'outline'; // Changed from "success" to "outline";
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus,) => {switch (status) {case 'open':;return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
      default:;
        return 'default';
:src_backup/components/disputes/DisputesList.tsx
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  TableRow } from '@/components/ui/table';
TableBody,TableCell,TableHead,TableHeader,import { Button } from "@/components/ui/button",import { Badge } from "@/components/ui/badge",import { return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
  TableRow } from @/components/ui/table';
TableBody,TableCell,TableHead,TableHeader,import { Button } from @/components/ui/button",import { Badge } from "@/components/ui/badge,import { return 'outline; // Changed from success" to "outline;
      case closed':;
        return 'outline;
      default:;
        return 'default';import React, { useState  } from 'react';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table",import {Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from '@/components/ui/table';
type DisputesListProps = {disputes: Dispute[],isLoading: boolean;
}export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {const [statusFilter, setStatusFilter]  = useState<DisputeStatus | "all">("all")const filteredDisputes = statusFilter === "all" ;


export /**;
 * DisputesList - Function description;
 */;
function DisputesList() {const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all")const filtered_disputes = status_filter === "all";
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter)const getStatusBadgeVariant = (status: DisputeStatus) =>: any {switch (status) {case "open": return "default";
      case "under_review":;
        return "secondary";
:src_backup/components/disputes/DisputesList.tsx
      case "resolved":;
:src_backup/components/disputes/DisputesList.tsx



        <div className="border rounded-md>
      case resolved":;

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



:src_backup/components/disputes/DisputesList.tsx
origin/cursor/automate-test-improve-and-merge-code-2533


:src_backup/components/disputes/DisputesList.tsx
                <TableHead className="text-right">Actions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                <TableHead className=text-right">Actions</TableHead>



:src_backup/components/disputes/DisputesList.tsx



<TableHead className='text-right'>Actions</TableHead>



<TableHead className='text-right>Actions</TableHead>
:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
      case "resolved":;import { formatDistanceToNow } from "date-fns",import Link from "next/link",type DisputesListProps = {disputes: Dispute[];
      case "resolved":;import { formatDistanceToNow } from "date-fns",import Link from "next/link",type DisputesListProps = {disputes: Dispute[];
      case resolved":;import { formatDistanceToNow } from "date-fns,import Link from next/link",type DisputesListProps = {disputes: Dispute[];
  isLoading: boolean;
        return "outline", // Changed from './success'; to "outline";case "closed":;
        return "outline";
      default:;
        return "default";<div className="border rounded-md">;
}
export function DisputesList() {const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all")const filteredDisputes = statusFilter === "all";


    : disputes.filter(dispute => dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {case "open": return "default";
      case "under_review":;
        return "secondary";
    : disputes.filter(dispute => dispute.status === statusFilter)const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {case open": return "default;
      case under_review":;
        return "secondary;
      case resolved":;
        return "outline, // Changed from success" to "outline;
      case closed":;
        return "outline;


:src_backup/components/disputes/DisputesList.tsx
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
      <div className="space-y-4">;
        <div className="flex gap-2 mb-4">;,
        <div className="flex gap-2 mb-4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (<Skeleton key={status} className="h-10 w-24" />;


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
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx




    );



  }

  if (disputes && disputes.length === 0) {;

              ))}
:src_backup/components/disputes/DisputesList.tsx
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );


:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx





:src_backup/components/disputes/DisputesList.tsx
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
    <div className='space-y-4'>


)}if (disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>;
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
)}if (disputes.length === 0) {return (<div className=text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4 />;
        <h3 className=text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2>;
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
:src_backup/components/disputes/DisputesList.tsx
          onClick={() => setStatusFilter('closed')}
:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
          onClick={() => setStatusFilter('closed')}size='sm'        >    <div className="space-y-4">;
    <div className="space-y-4">;
  if (disputes && disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
          onClick={() => setStatusFilter('closed')}size='sm'        >    <div className="space-y-4">;
    <div className="space-y-4">;
    <div className="space-y-4">;
  if (disputes && disputes.length === 0) {return (<div className='text-center py-12 border rounded-md bg-muted/20'>;
        </p>;
      </div>;
:src_backup/components/disputes/DisputesList.tsx
    )}size="sm";


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
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}


:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}size="sm";
          variant={status_filter === "open" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("open")}"
          size="sm";
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}size="sm";


:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}size="sm";
          variant={status_filter === "under_review" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("under_review")}"
          size="sm";
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}size="sm";


:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}size="sm";
        >;
          Resolved;
        </Button>;
:src_backup/components/disputes/DisputesList.tsx
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}size="sm";
          variant={statusFilter === "resolved ? default" : "outline}
          onClick={() => setStatusFilter(resolved")}size="sm;
        >;
          Resolved;
        </Button>;

    <div className="space-y-4">




          size='sm'        >    <div className="space-y-4">
    <div className="space-y-4">
          variant={status_filter === "resolved" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("resolved")}"
          size="sm";
:src_backup/components/disputes/DisputesList.tsx
          size='sm'


          size='sm
origin/cursor/automate-test-improve-and-merge-code-2533

          size='sm'
        >
          Closed
        </Button>
      </div>
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx
          size='sm'
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx


            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>',
                  {dispute.id.split('-')[0]}'
                </TableCell>
                <TableCell>
:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx





:src_backup/components/disputes/DisputesList.tsx
                      Talent:{' '}
:src_backup/components/disputes/DisputesList.tsx
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>
                      Talent:{' '}
                      Talent:{ }
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
                      {dispute.talent_profile?.display_name |Unknown Talent}                    </span>
:src_backup/components/disputes/DisputesList.tsx


                    </span>
                  </div>
                </TableCell>
                <TableCell>



:src_backup/components/disputes/DisputesList.tsx
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
:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
                <TableCell>{dispute.project?.title || 'Unknown Project'}
                <TableCell>{dispute.project?.title || 'Unknown Project'}
                <TableCell>{dispute.project?.title || 'Unknown Project}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex - col text - sm'>;
                    <span>Client:{' '}
                      {dispute.client_profile?.display_name || 'Unknown Client'}
                    </span>;
                    <span>Talent:{' '}


:src_backup/components/disputes/DisputesList.tsx
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
                  {formatDistanceToNow (new Date (dispute.created_at), {add_suffix: true})}                      Talent: {dispute.talent_profile?.display_name || Unknown Talent"}
:src_backup/components/disputes/DisputesList.tsx
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
:src_backup/components/disputes/DisputesList.tsx
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>


                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>

                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx
:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
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
                    {dispute.status.replace ('_', ' ')}


:src_backup/components/disputes/DisputesList.tsx
                    <Link href={`/dashboard / disputes/${dispute.id}`}>;


:src_backup/components/disputes/DisputesList.tsx
                    {dispute.status.replace ('_ ')}
                    {dispute.status.replace ('_ ')}
                    {dispute.status.replace (_ )}


:src_backup/components/disputes/DisputesList.tsx
                    <Link href={`/dashboard / disputes/${dispute.id}`}>View Details</Link>;
:src_backup/components/disputes/DisputesList.tsx
    </div>);


    </div>);

}

// Check condition
if ( {") {"
  $2
}
    </div>)}
// Check condition;
if ( {") {$2;
}
:src_backup/components/disputes/DisputesList.tsx
  return (<div className="space - y-4" > <div className="flex gap - 2 mb - 4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {status ";
}className="h - 10 w - 24" /> ";
:src_backup/components/disputes/DisputesList.tsx
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
:src_backup/components/disputes/DisputesList.tsx
}"};
}"};
}}
}
}



          </TableBody>;
        </Table>;
      </div>;
  );

:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx

:src_backup/components/disputes/DisputesList.tsx


:src_backup/components/disputes/DisputesList.tsx
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}"}}
}</div> <div className="border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}"}}
}</div> <div className=border rounded - md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {[...Array (5) ].map ( (, i) => (<TableRow key= {addSuffix: true;
})}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) )}</TableBody> </Table> </div> </div>)}}}
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
:src_backup/components/disputes/DisputesList.tsx
  addSuffix: true ;
:src_backup/components/disputes/DisputesList.tsx


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
