<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Check, ArrowDown, X } from 'lucide-react'
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
  dueDate?: string
  onApprove?: (id: string) => Promise<void>
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
=======


import React from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



        return 'bg-green-500';
<<<<<<< HEAD
      case 'in_progress':;
        return 'bg-blue-500';
      case 'pending':;
=======
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
<<<<<<< HEAD
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  title: string,
  description?: string,
  amount: number,
  status: string,
<<<<<<< HEAD



  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
  dueDate?: string,
  onApprove?: (id: string,) => Promise<void>,
  onReject?: (id: string,) => Promise<void>
}


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
  
              <p className="text-sm text-muted-foreground">

              <p className="text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}

      default: return 'bg-gray-500'
    };
  }
  
  return (
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
              <p className='text-sm text-muted-foreground'>                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>  }
      default: return 'bg-gray-500';
    }
  }
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
<<<<<<< HEAD
              <p className='text-sm text-muted-foreground'>                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>  }
=======
      default: return 'bg-gray-500';
    }
  }
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
              <p className="text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
          </div>
<<<<<<< HEAD
          <div className='flex gap-2'>
            <Badge
              variant='outline'
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >
              {status.replace('_', ' ')}
            </Badge>
          </div>


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>
<<<<<<< HEAD
            
            {isUnderDispute && disputeStatus && (
            
            {isUnderDispute && disputeStatus && (
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <DisputeStatusBadge status={disputeStatus} />
          </div>
        </div>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className='pb-2'>
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>
          <p className='text-xl font-bold'>${amount.toFixed(2)}</p>

=======
        </div>
      </CardContent>
      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      
      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </div>
      </CardContent>
      <CardFooter className='pt-2 flex justify-between'>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
<<<<<<< HEAD
<<<<<<< HEAD

              className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_', ' ')}
            </Badge>;
=======
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
              size='sm'            <RaiseDisputeButton
              projectId = {projectId,}
              milestoneId = {id,}
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>
          {isUnderDispute && (
    </Card>
  )
}
            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              variant="ghost"
              size="sm"
            />
          )}
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    </Card>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>



          )}
          
          {status === 'pending' && onApprove && !isUnderDispute && (




          )}
          
          {isUnderDispute && (
<<<<<<< HEAD

        </div>;

        <div className='flex gap-2'>;
=======
    </Card>;
  );
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>;
              <X className='h-4 w-4 mr-1' /> Reject            </Button>;
          )}
<<<<<<< HEAD

          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>;
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>;
          )}

          {isUnderDispute && (;
=======
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
<<<<<<< HEAD
;
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
<<<<<<< HEAD
    </Card>;
  );
=======
    </Card>);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
