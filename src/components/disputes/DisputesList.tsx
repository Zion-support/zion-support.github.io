<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react'
import Link from "next/link";
type DisputesListProps = any;
=======
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
=======
import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

type DisputesListProps = {
  disputes: Dispute[];
isLoading: boolean ;
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | 'all'>(
    'all'
  )
  const filteredDisputes =
    statusFilter === 'all'
      ? disputes
      : disputes.filter(dispute => dispute.status === statusFilter)
  const getStatusBadgeVariant = (status: DisputeStatus,) => {
    switch (status) {
      case 'open':
        return 'default'
      case 'under_review':
        return 'secondary'
      case 'resolved':
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>
<<<<<<< HEAD
        <div className='border rounded-md'>          <Table>
        <div className="border rounded-md">
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
        <div className="border rounded-md">
=======
        <div className='border rounded-md'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
=======
                <TableHead className='text-right'>Actions</TableHead>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i,) => (
                <TableRow key={i}>
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
<<<<<<< HEAD
                  </TableCell>                </TableRow>                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
=======
                  </TableCell>
                </TableRow>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
<<<<<<< HEAD
    ) }
=======
    );
  }

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (disputes.length === 0) {
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
<<<<<<< HEAD
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    )
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
        <p className='text-muted-foreground mt-2'>
          No active disputes match the selected filter
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </p>
      </div>
    )
  }
  return (
    <div className='space-y-4'>
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>
        <Button
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
<<<<<<< HEAD
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
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          size="sm"
=======
          size='sm'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        >
          All
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}
          size="sm"
          size="sm"
=======
          variant={statusFilter === 'open' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('open')}
          size='sm'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        >
          Open
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
          size="sm"
          size="sm"
=======
          variant={statusFilter === 'under_review' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('under_review')}
          size='sm'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        >
          Under Review
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
          size="sm"
          size="sm"
=======
          variant={statusFilter === 'resolved' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('resolved')}
          size='sm'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        >
          Resolved
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
          size="sm"
          size="sm"
=======
          variant={statusFilter === 'closed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('closed')}
          size='sm'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        >
          Closed
        </Button>
      </div>
<<<<<<< HEAD
      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">
=======

      <div className='border rounded-md overflow-hidden'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map(dispute => (            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
                  {dispute.project?.title |'Unknown Project'}
                </TableCell>
                <TableCell>
                  <div className='flex flex-col text-sm'>
                    <span>
                      Client:{' '}
                      {dispute.client_profile?.display_name |'Unknown Client'}
                    </span>
                    <span>
                      Talent:{' '}
<<<<<<< HEAD
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true
                  })}                      Talent: {dispute.talent_profile?.display_name |"Unknown Talent"}
=======
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                    </span>
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
<<<<<<< HEAD
                    </Link>                  </Button>                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
=======
                    </Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
