<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
<<<<<<< HEAD

=======
=======

import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Check, ArrowDown, X } from 'lucide-react'
=======
>>>>>>> import { Check, ArrowDown, X } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useDisputeCheck  } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge  } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface MilestoneCardProps {

  id: string
  projectId: string
  title: string
  description?: string
  amount: number
  status: string
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>; import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
interface MilestoneCardProps {
  id: string
  projectId: string
  title: string
  description?: string
  amount: number
  status: string
  dueDate?: string
  onApprove?: (id: string,) => Promise<void>
  onReject?: (id: string,) => Promise<void>
}
export function MilestoneCard({
  id
  projectId
  title
  description
  amount
  status
  dueDate
  onApprove

  onReject
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':
<<<<<<< HEAD
import React from 'react';

>>>>>>> import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
=======
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default: return 'bg-gray-500'
    }
  }
=======
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from 'lucide-react'
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onApprove?: (id: string,) => Promise<void>,
  onReject?: (id: string,) => Promise<void>
}

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
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id)
  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in_progress':
        return 'bg-blue-500'
      case 'pending':
        return 'bg-yellow-500'
      case 'rejected':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
;
export function MilestoneCard({;
  id,;
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
  onReject;
}: MilestoneCardProps) {;
<<<<<<< HEAD
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);



>>>>>>>         return 'bg-green-500';
=======
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case 'in_progress':;
        return 'bg-blue-500',;
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
<<<<<<< HEAD
      default: return 'bg-gray-500'
    }
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from 'lucide-react'
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
  id: string,
  projectId: string,
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  title: string,
  description?: string,
  amount: number,
  status: string,



  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
  dueDate?: string,
<<<<<<< HEAD

=======
  onApprove?: (id: string,) => Promise<void>,
  onReject?: (id: string,) => Promise<void>
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
;
export function MilestoneCard({;
  id,;
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
      case 'in_progress':;
        return 'bg-blue-500',;
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }
<<<<<<< HEAD

=======
  
>>>>>>>   return (
              <p className="text-sm text-muted-foreground">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}

      default: return 'bg-gray-500'
    };
  }
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
<<<<<<< HEAD

              <p className="text-sm text-muted-foreground">
=======
              <p className='text-sm text-muted-foreground'>                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>  }
=======
      default: return 'bg-gray-500';
    }
  }
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
<<<<<<< HEAD
>>>>>>>               <p className="text-sm text-muted-foreground">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              <p className='text-sm text-muted-foreground'>                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>  }
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <p className="text-sm text-muted-foreground">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className='flex gap-2'>
            <Badge
              variant='outline'
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >
              {status.replace('_', ' ')}
            </Badge>
<<<<<<< HEAD
>>>>>>>           <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>
>>>>>>>               <DisputeStatusBadge status={disputeStatus} />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>

<<<<<<< HEAD
=======
            
            {isUnderDispute && disputeStatus && (
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <DisputeStatusBadge status={disputeStatus} />
>>>>>>>             )}
          </div>
        </div>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <CardContent className='pb-2'>
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>
          <p className='text-xl font-bold'>${amount.toFixed(2)}</p>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
      </CardContent>
      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
<<<<<<< HEAD
<<<<<<< HEAD

              variant="ghost"
=======
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
              size='sm'            <RaiseDisputeButton
              projectId = {projectId,}
              milestoneId = {id,}
        </div>
      </CardContent>
      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id} 
>>>>>>>               variant="ghost"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              size="sm"
            />
          )}
        </div>
<<<<<<< HEAD

          )}
          {status === 'pending' && onApprove && !isUnderDispute && (

          )}
          {isUnderDispute && (

            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          )}
        </div>
      </CardFooter>

=======
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
>>>>>>>           )}
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
>>>>>>>           )}
          {isUnderDispute && (
    </Card>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_ ')}
            </Badge>;

              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;

      <CardContent className='pb-2'>;
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>;
          <p className='text-xl font-bold'>${amount && amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;

      <CardFooter className='pt-2 flex justify-between'>;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
<<<<<<< HEAD

              variant="ghost"
              size="sm"
            />;
          )}

=======
              size='sm'            <RaiseDisputeButton
              projectId = {projectId,}
              milestoneId = {id,}
=======
      
      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>
      </CardContent>
      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
<<<<<<< HEAD
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
              size='sm'            <RaiseDisputeButton 
              projectId = {projectId,}
              milestoneId = {id,}
=======
      
      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        <div>
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id} 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              variant="ghost"
              size="sm"
            />
          )}
        </div>
<<<<<<< HEAD


          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
=======
<<<<<<< HEAD
        <div className='flex gap-2'>
<<<<<<< HEAD
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
=======
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
=======
        
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          )}
          {status === 'pending' && onApprove && !isUnderDispute && (
<<<<<<< HEAD
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
=======
<<<<<<< HEAD
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
=======
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          )}
          {isUnderDispute && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          )}
        </div>
      </CardFooter>
<<<<<<< HEAD
    </Card>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          )}
          
          {status === 'pending' && onApprove && !isUnderDispute && (




          )}
          
          {isUnderDispute && (
<<<<<<< HEAD

=======
=======
    </Card>;
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status.replace('_ ')}
            </Badge>;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </CardHeader>;
      <CardContent className="pb-2">;
        {description && (;
          <p className="text-muted-foreground">{description}</p>;
        )}
        <div className="mt-4">;
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton;
              projectId={projectId} ;
              milestoneId={id} ;
              variant="ghost";
              size="sm";
            />;
          )}
        </div>;
        <div className="flex gap-2">;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;
              <X className="h-4 w-4 mr-1" /> Reject;
            </Button>;
          )}
;
          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;
              <Check className="h-4 w-4 mr-1" /> Approve;
            </Button>;
          )}
;
          {isUnderDispute && (;
            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
