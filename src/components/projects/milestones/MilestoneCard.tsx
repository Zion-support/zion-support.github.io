<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
import React from 'react';

>>>>>>> import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
=======
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
interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
  onApprove?: (id: string,) => Promise<void>,;
  onReject?: (id: string,) => Promise<void>;
}

export function MilestoneCard(): any ({;
  id,;
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
  onReject,;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
<<<<<<< HEAD
      default: return 'bg-gray-500'
    }
  }
=======


import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { format } from 'date - fns';
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks / useDisputeCheck';
import { DisputeStatusBadge } from '@/components / disputes / DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components / disputes / RaiseDisputeButton';
interface MilestoneCardProps {
  id: string;
  project_id: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  due_date?: string;
  on_approve?: (id: string) => Promise < void>;
  on_reject?: (id: string) => Promise < void>; import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
interface MilestoneCardProps {
  id: string,
  project_id: string,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

<<<<<<< HEAD
=======
  
>>>>>>>   return (
              <p className="text-sm text-muted-foreground">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

              <p className="text-sm text-muted-foreground">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               <p className="text-sm text-muted-foreground">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              <p className="text-sm text-muted-foreground">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='flex gap-2'>
            <Badge
              variant='outline'
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >
              {status.replace('_', ' ')}
            </Badge>
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
          </div>


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>
<<<<<<< HEAD

<<<<<<< HEAD
=======
            
            {isUnderDispute && disputeStatus && (
<<<<<<< HEAD



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
=======
            
            {isUnderDispute && disputeStatus && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <DisputeStatusBadge status={disputeStatus} />
>>>>>>>             )}
          </div>
        </div>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <CardContent className='pb-2'>
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>
          <p className='text-xl font-bold'>${amount.toFixed(2)}</p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

      
      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id} 
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
              size='sm'            <RaiseDisputeButton 
              projectId = {projectId,}
              milestoneId = {id,}
      
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              variant="ghost"
              size="sm"
            />
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD


          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='flex gap-2'>
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
        
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
          )}
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
          )}
          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          )}
          
          {status === 'pending' && onApprove && !isUnderDispute && (




          )}
          
          {isUnderDispute && (
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Card>;
  );
};
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
  );
}
      <CardHeader className='pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div>;
            <CardTitle className='text - xl'>{title}</CardTitle>;
            {due_date && (
              <p className='text - sm text - muted - foreground'>                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>  }
  return (
    <Card>;
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - start">;
          <div>;
            <CardTitle className="text - xl">{title}</CardTitle>;
            {due_date && (
              <p className="text - sm text - muted - foreground">;
                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>;
          <div className='flex gap - 2'>;
            <Badge;
              variant='outline';
              className={`capitalize ${getStatusBadgeColor ()} text - white`}
            >;
              {status.replace ('_', ' ')}
            </Badge>;
          <div className="flex gap - 2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace ('_ ')}
            </Badge>;
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className='pb - 2'>;
        {description && <p className='text - muted - foreground'>{description}</p>}
        <div className='mt - 4'>;
          <p className='text - xl font - bold'>${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className='pt - 2 flex justify - between'>;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton;
              project_id={project_id}
              milestone_id={id}
              variant='ghost';
              size='sm'            <RaiseDisputeButton;
              project_id = {project_id, }
              milestone_id = {id, }
              variant="ghost";
              size="sm";
            />)}
        </div>;
        <div className='flex gap - 2'>;
          {status === 'pending' && on_reject && !isUnderDispute && (
            <Button variant='outline' size='sm' on_click={() => on_reject (id)}>;
              <X className='h - 4 w - 4 mr - 1' /> Reject            </Button>)}
          {status === 'pending' && on_approve && !isUnderDispute && (
            <Button variant='default' size='sm' on_click={() => on_approve (id)}>;
              <Check className='h - 4 w - 4 mr - 1' /> Approve            </Button>)}
          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>)}
        </div>;
      </CardFooter>;
    </Card>);
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
