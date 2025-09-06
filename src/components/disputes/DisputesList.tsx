import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Table,
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

type DisputesListProps = {
  disputes: Dispute[];
isLoading: boolean ;
};

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | 'all'>(
    'all'
  );

  const filteredDisputes =
    statusFilter === 'all'
      ? disputes
      : disputes.filter(dispute => dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case 'open':
        return 'default';
      case 'under_review':
        return 'secondary';
      case 'resolved':
        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline';
      default:
        return 'default';
    }
  };

  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />
          ))}
        </div>
        <div className='border rounded-md'>          <Table>
=======
        <div className="border rounded-md">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <Table>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Actions</TableHead>              </TableRow>
=======
                <TableHead className="text-right">Actions</TableHead>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </TableRow>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
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
                  </TableCell>                </TableRow>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                </TableRow>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );  }

  if (disputes.length === 0) {
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter
=======
    )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (disputes.length === 0) {
    return (
<<<<<<< HEAD
      <div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>
      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          No active disputes match the selected filter
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </p>
      </div>
    );
  }

  return (
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
          size='sm'        >
=======
    <div className="space-y-4">
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          size="sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          All
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === 'open' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('open')}
          size='sm'
=======
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}
          size="sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          Open
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === 'under_review' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('under_review')}
          size='sm'
=======
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
          size="sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          Under Review
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === 'resolved' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('resolved')}
          size='sm'
=======
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
          size="sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          Resolved
        </Button>
        <Button
<<<<<<< HEAD
          variant={statusFilter === 'closed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('closed')}
          size='sm'
=======
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
          size="sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Closed
        </Button>
      </div>

      <div className='border rounded-md overflow-hidden'>        <Table>
=======
      <div className="border rounded-md overflow-hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <Table>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map(dispute => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
                  {dispute.project?.title || 'Unknown Project'}
                </TableCell>
                <TableCell>
                  <div className='flex flex-col text-sm'>
                    <span>
                      Client:{' '}
                      {dispute.client_profile?.display_name || 'Unknown Client'}
                    </span>
                    <span>
                      Talent:{' '}
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true,
                  })}
=======
                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </span>
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true,
                  })}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                    </Link>                  </Button>
=======
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </TableCell>
              </TableRow>
            ))}
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
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
