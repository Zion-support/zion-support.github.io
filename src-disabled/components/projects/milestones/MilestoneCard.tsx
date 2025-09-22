:src_backup/components/projects/milestones/MilestoneCard.tsx

import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Button } from "@/components/ui/button";
import { format  } from 'date-fns';
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
:src/components/projects/milestones/MilestoneCard.tsx
import { Check, ArrowDown, X } from 'lucide-react'
:src_backup/components/projects/milestones/MilestoneCard.tsx
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
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;

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
  onReject?: (id: string) => Promise<void>;
import { Check, ArrowDown, X } from 'lucide-react
pr-12325
import { useDisputeCheck  } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge  } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

  function getStatusBadgeColor() {
    switch (status) {
:src_backup/components/projects/milestones/MilestoneCard.tsx
      case 'completed':
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
:src_backup/components/projects/milestones/MilestoneCard.tsx
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';interface MilestoneCardProps {;
interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
:src_backup/components/projects/milestones/MilestoneCard.tsx
  onApprove?: (id: string,) => Promise<void>,;
  onReject?: (id: string,) => Promise<void>;
}

:src_backup/components/projects/milestones/MilestoneCard.tsx
export function MilestoneCard(): any ({;  id,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
;
export function MilestoneCard({;
:src_backup/components/projects/milestones/MilestoneCard.tsx
  id,;
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
:src_backup/components/projects/milestones/MilestoneCard.tsx
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
  onReject,;}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);

        return 'bg-green-500';
      case 'in_progress':;
:src/components/projects/milestones/MilestoneCard.tsx
return 'bg-blue-500';      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
:src_backup/components/projects/milestones/MilestoneCard.tsx

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

  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
  dueDate?: string,

default:
        return 'bg-gray-500';
    }
  }
:src/components/projects/milestones/MilestoneCard.tsx
  return (
    <Card>
      <CardHeader className="pb-2">"
        <div className="flex justify-between items-start">"
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>"
            {dueDate && (
              <p className="text-sm text-muted-foreground">"
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}'
              </p>;
            )}
      default: return 'bg-gray-500''
    };
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
:src_backup/components/projects/milestones/MilestoneCard.tsx

              <p className="text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
              <p className='text-sm text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
          </div>
:src_backup/components/projects/milestones/MilestoneCard.tsx

          </div>

          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>

            {isUnderDispute && disputeStatus && (
:src_backup/components/projects/milestones/MilestoneCard.tsx



<div className='flex gap-2'>
            <Badge
              variant='outline'
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >
              {status.replace('_', ' ')}
            </Badge>
            {isUnderDispute && disputeStatus && (
:src/components/projects/milestones/MilestoneCard.tsx
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
:src_backup/components/projects/milestones/MilestoneCard.tsx

      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>
:src_backup/components/projects/milestones/MilestoneCard.tsx


<CardContent className='pb-2'>
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>
          <p className='text-xl font-bold'>${amount.toFixed(2)}</p>
:src/components/projects/milestones/MilestoneCard.tsx
        </div>
      </CardContent>
:src_backup/components/projects/milestones/MilestoneCard.tsx

      <CardFooter className="pt-2 flex justify-between">
        <div>
          {status !== 'completed' && status !== 'rejected' && (
<RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id}
              variant="ghost"
              size="sm"
      <CardFooter className="pt-2 flex justify-between">
        <div>
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id} 
              variant="ghost"
              size="sm"
              size='sm'
origin/cursor/automate-test-improve-and-merge-code-2533
            />
          )}
        </div>

          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>

        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
:src_backup/components/projects/milestones/MilestoneCard.tsx
        <div className='flex gap-2'>
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject
            </Button>
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve
            </Button>
          )}

          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>
              Actions frozen due to dispute
origin/cursor/automate-test-improve-and-merge-code-2533
            </Button>
:src_backup/components/projects/milestones/MilestoneCard.tsx
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>

          )}
:src/components/projects/milestones/MilestoneCard.tsx

          {status === 'pending' && onApprove && !isUnderDispute && (

          )}
          {isUnderDispute && (
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

:src_backup/components/projects/milestones/MilestoneCard.tsx
<div className='flex gap-2'>;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>;
              <X className='h-4 w-4 mr-1' /> Reject            </Button>;
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>;
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>;
          )}

          {isUnderDispute && (;
:src_backup/components/projects/milestones/MilestoneCard.tsx
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;              Actions frozen due to dispute;
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
:src_backup/components/projects/milestones/MilestoneCard.tsx

              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;
  );
}
:src_backup/components/projects/milestones/MilestoneCard.tsx
;
  );
}
      <CardHeader className='pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div>;
            <CardTitle className='text - xl'>{title}</CardTitle>;
            {due_date && (
              <p className='text - sm text - muted - foreground'>                Due: {format (new Date (due_date), 'MMM d, yyyy')}'
              </p>)}
          </div>  }
  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify - between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {due_date && (
:src_backup/components/projects/milestones/MilestoneCard.tsx
              <p className="text - sm text - muted-foreground">;
                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>;
          <div className='flex gap - 2'>;
            <Badge;
              variant='outline';
              className={`capitalize ${getStatusBadgeColor ()} text - white`}`
            >;
              {status.replace ('_', ' ')}'
            </Badge>;
:src_backup/components/projects/milestones/MilestoneCard.tsx
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace ('_ ')}
            </Badge>;
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className='pb - 2'>;
        {description && <p className='text - muted - foreground'>{description}</p>}'
        <div className='mt - 4'>;
          <p className='text - xl font - bold'>${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className='pt - 2 flex justify - between'>;
        <div>;
          {status !== 'completed' && status !== 'rejected' && ('
            <RaiseDisputeButton;

      <CardHeader className="pb-2">;"
"
        <div className="flex justify-between items-start">;"
</div>
          <div>;
</div>"
            <CardTitle className="text-xl">{title};""
              <p className="text-sm text-muted-foreground">;"
</p>
    <Card>
      <CardHeader className="pb-2">"
        <div className="flex justify-between items-start">"
          <div>
            <CardTitle className="text-xl">{title}""
              <p className="text-sm text-muted-foreground">"
              </p>;

          <div className="flex gap-2">"
</div>)"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>"

              <DisputeStatusBadge status={disputeStatus} />

      <CardContent className="pb-2">"
          <p className="text-muted-foreground">{description}</p>""
        <div className="mt-4">"
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>"
      <CardFooter className='pt-2 flex justify-between'>

            ;
          <div className="flex gap-2">;"
</div>"`;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;"

              <DisputeStatusBadge status={disputeStatus} />;

          </div>;
      ;"
      <CardContent className='pb-2'>;

        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>;
          <p className='text-xl font-bold'>${amount && amount.toFixed(2)}</p>;
      <CardFooter className='pt-2 flex justify-between'>;

            <RaiseDisputeButton;
              projectId={projectId}
              milestoneId={id}
              variant='ghost
              variant="ghost"""
              size="sm""
            />;

            <Button variant='outline' size='sm' onClick={() => onReject(id)}>

              <X className='h-4 w-4 mr-1' /> Reject            

            <Button variant="outline" size="sm" onClick={() => onReject(id)}>"
              <X className="h-4 w-4 mr-1" /> Reject;"

      <CardContent className="pb-2">;"
          <p className="text-muted-foreground">{description}</p>;""
        <div className="mt-4">;"
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;"
      <CardFooter className="pt-2 flex justify-between">;"

              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";""
              size="sm";"

        </div>;"
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;"

            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;"
              <Check className="h-4 w-4 mr-1" /> Approve;"

            <Button variant="outline" size="sm" disabled>;"

      <CardHeader className='pb - 2'>;

        <div className='flex justify - between items - start'>;
            <CardTitle className='text - xl'>{title};
              <p className='text - sm text - muted - foreground'>                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>  }

      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;"
            <CardTitle className="text - xl">{title};""
              <p className="text - sm text - muted - foreground">;"
          <div className='flex gap - 2'>;
            <Badge;
              variant='outline';`;
              className={`capitalize ${getStatusBadgeColor ()} text - white`}
            >;

          <div className="flex gap - 2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;"

              <DisputeStatusBadge status={dispute_status} />)}

      <CardContent className='pb - 2'>;

        {description && <p className='text - muted - foreground'>{description}</p>}
        <div className='mt - 4'>;
          <p className='text - xl font - bold'>${amount.to_fixed (2)}</p>;
      <CardFooter className='pt - 2 flex justify - between'>;

pr-12325
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
          {status === 'pending' && on_reject && !isUnderDispute && ('
            <Button variant='outline' size='sm' on_click={() => on_reject (id)}>;
              <X className='h - 4 w - 4 mr - 1' /> Reject            </Button>)}'
          {status === 'pending' && on_approve && !isUnderDispute && ('
            <Button variant='default' size='sm' on_click={() => on_approve (id)}>;
              <Check className='h - 4 w - 4 mr - 1' /> Approve            </Button>)}'
          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>)}
        </div>;
      </CardFooter>;
    </Card>);
}
:src_backup/components/projects/milestones/MilestoneCard.tsx
        </div>
      </CardFooter>
    </Card>
  );
}
:src/components/projects/milestones/MilestoneCard.tsx
            />)}

            <Button variant='outline' size='sm' on_click={() => on_reject (id)}>;

              <X className='h - 4 w - 4 mr - 1' /> Reject            )}

            <Button variant='default' size='sm' on_click={() => on_approve (id)}>;

              <Check className='h - 4 w - 4 mr - 1' /> Approve            )}

            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;"

            )}
    );"`;
pr-12325
