<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx


<<<<<<< HEAD
=======

import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { format  } from 'date-fns';
import { Check, ArrowDown, X } from "lucide-react";
import { useDisputeCheck  } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge  } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface MilestoneCardProps {

  id: string
  projectId: string
  title: string
  description?: string;
  amount: number
  status: string
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>

  onReject?: (id: string) => Promise<void>
}
export function MilestoneCard({
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from "lucide-react",
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

export function MilestoneCard({ ;
  id;
  projectId;

  title
  description
  amount
  status

  dueDate;
  onApprove;
  onReject
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
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
      default: return 'bg-gray-500'
    }
  }
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from "lucide-react",
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
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from "lucide-react",;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
<<<<<<< HEAD
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
<<<<<<< HEAD
  description?: string;
  amount: number,;
  status: string,;
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
export function MilestoneCard(): any ({ ;
  id;
  projectId;
=======

import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from "lucide-react",;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
;
interface MilestoneCardProps {;
  id:string,;
  projectId:string,;
  title:string,;
  description?:string,;
  amount:number,;
  status:string,;
  dueDate?:string,;
  onApprove?:(id:string) => Promise<void>,;
  onReject?:(id:string) => Promise<void>;
}
;
export function MilestoneCard({ ;
  id,;
  projectId,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  title, ;
  description, ;
  amount, ;
  status, ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
  dueDate;
  onApprove;
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx


  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;

========
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
        return 'bg-green-500';
      case 'in_progress':;
        return 'bg-blue-500';
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';
<<<<<<< HEAD

    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  }



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
  return (
=======
  dueDate,;
  onApprove,;
  onReject;
} MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  ;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
      case 'in_progress':;
        return 'bg-blue-500',;
      case 'pending':;
<<<<<<< HEAD
        return 'bg-yellow-500',;
      case 'rejected':;
        return 'bg-red-500',;
      default:return 'bg-gray-500';
    }
  }
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
=======
                Due:{format(new Date(dueDate), 'MMM d, yyyy')}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </p>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
<<<<<<< HEAD
              {status && status.replace('_ ')}
            </Badge>;
=======
              {status.replace('_ ')}
            </Badge>;
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <CardContent className="pb-2">;
        {description && (;
          <p className="text-muted-foreground">{description}</p>;
        )}
        <div className="mt-4">;
<<<<<<< HEAD
          <p className="text-xl font-bold">${amount && amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton
              projectId={projectId} 
              milestoneId={id} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
              variant="ghost"
              size="sm"
            />;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
=======
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }
  
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
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>
            {isUnderDispute && disputeStatus && (
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
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
              variant="ghost"
              size="sm"
            />
          )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
          )}
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
          )}
          {isUnderDispute && (
            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
        </div>;
=======
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      ;
      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton ;
              projectId={projectId} ;
              milestoneId={id} ;
              variant="ghost";
              size="sm";
            />;
          )}
        </div>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex gap-2">;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;
              <X className="h-4 w-4 mr-1" /> Reject;
            </Button>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;
              <Check className="h-4 w-4 mr-1" /> Approve;
            </Button>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {isUnderDispute && (;
            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
  );

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import {format} from 'date - fns';
import { Check, ArrowDown, X } from './lucide-react';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
import {DisputeStatusBadge} from '@/components / disputes / DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components / disputes / RaiseDisputeButton';
interface MilestoneCardProps {
  id: string,
  project_id: string,
  title: string,
  description?: string;
  amount: number,
  status: string,
  due_date?: string;
  on_approve?: (id: string) => Promise < void>,
  on_reject?: (id: string) => Promise < void>;
}
export /**
 * MilestoneCard - Function description
 */
function MilestoneCard() {
  const { isUnderDispute, dispute_status } = useDisputeCheck (project_id, id);
;
<<<<<<< HEAD

=======
  /**
 * getStatusBadgeColor - Function description
 */
function getStatusBadgeColor() {
    switch (status) {
      case 'completed':;
        return 'bg - green - 500';
      case 'in_progress':;
        return 'bg - blue - 500';
      case 'pending':;
        return 'bg - yellow - 500';
      case 'rejected':;
        return 'bg - red - 500';
      default: return 'bg - gray - 500';
    }
  }
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
          <div className="flex gap - 2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace ('_ ')}
            </Badge>;
            {isUnderDispute && dispute_status && (
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className="pb - 2">;
        {description && (
          <p className="text - muted - foreground">{description}</p>)}
        <div className="mt - 4">;
          <p className="text - xl font - bold">${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt - 2 flex justify - between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton;
              project_id={project_id}
              milestone_id={id}
              variant="ghost";
              size="sm";
            />)}
        </div>;
        <div className="flex gap - 2">;
          {status === 'pending' && on_reject && !isUnderDispute && (
            <Button variant="outline" size="sm" on_click={() => on_reject (id)}>;
              <X className="h - 4 w - 4 mr - 1" /> Reject;
            </Button>)}
          {status === 'pending' && on_approve && !isUnderDispute && (
            <Button variant="default" size="sm" on_click={() => on_approve (id)}>;
              <Check className="h - 4 w - 4 mr - 1" /> Approve;
            </Button>)}
          {isUnderDispute && (
            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>)}
        </div>;
      </CardFooter>;
    </Card>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 interface MilestoneCardProps {
  id: string;
projectId: string;
title: string;
description?: string;
amount: number;
status: string;
dueDate?: string;
onApprove?: (id: string) => Promise<void>;
onReject?: (id: string) => Promise<void> 
}export function MilestoneCard ({
  id;
projectId;
title;
description;
amount;
status;
dueDate;
onApprove;
onReject 
}: MilestoneCardProps) {
  const {
  isUnderDispute, disputeStatus 
}= useDisputeCheck (projectId, id);
switch (status) {
  case 'completed': return 'bg-green-500';
case 'in progress': return 'bg-blue-500';
case 'pending': return 'bg-yellow-500';
case 'rejected': 
}return (<Card> <CardHeader className="pb-2" > <div className="flex justify-between items-start" > <div> </p>) 
}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {
  disputeStatus 
}/>) 
}</div> </div> </CardHeader> </div> </CardContent> <CardFooter className="pt-2 flex justify-between" > <div> {
  status !== 'completed' && status !== 'rejected' && (<RaiseDisputeButton projectId= {
  projectId 
}/>) 
}</div> Actions frozen due to dispute </Button>) 
}</div> </CardFooter> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestoneCard.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
