>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

<<<<<<< HEAD
interface MilestoneCardProps {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>;
=======
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string,) => Promise<void>,
  onReject?: (id: string,) => Promise<void>
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function MilestoneCard({
  id,
  projectId,
  title,
  description,
  amount,
  status,
  dueDate,
  onApprove,
  onReject,
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  return (
    <Card>
      <CardHeader className='pb-2'>
        <div className='flex justify-between items-start'>
          <div>
            <CardTitle className='text-xl'>{title}</CardTitle>
            {dueDate && (
              <p className='text-sm text-muted-foreground'>                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>
=======
              <p className="text-sm text-muted-foreground">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='flex gap-2'>
            <Badge
              variant='outline'
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >
              {status.replace('_', ' ')}
            </Badge>
<<<<<<< HEAD
=======
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {isUnderDispute && disputeStatus && (
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className='pb-2'>
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>
          <p className='text-xl font-bold'>${amount.toFixed(2)}</p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      </CardContent>

      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
<<<<<<< HEAD
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
              size='sm'
=======
            <RaiseDisputeButton 
              projectId = {projectId,}
              milestoneId = {id,}
              variant="ghost"
              size="sm"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            />
          )}
        </div>

        <div className='flex gap-2'>
          {status === 'pending' && onReject && !isUnderDispute && (
<<<<<<< HEAD
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject
=======
            <Button variant="outline" size="sm" onClick={(,) => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            </Button>
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (
<<<<<<< HEAD
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve
=======
            <Button variant="default" size="sm" onClick={(,) => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            </Button>
          )}

          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute
=======
            <Button variant="outline" size="sm" disabled>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Actions frozen due to dispute
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
