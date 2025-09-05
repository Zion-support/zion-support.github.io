
<<<<<<< HEAD
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
  title, ;
  description, ;
  amount, ;
  status, ;
  dueDate,;
  onApprove,;
  onReject;
} MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  ;
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
      case 'in_progress':;
        return 'bg-blue-500',;
      case 'pending':;
        return 'bg-yellow-500',;
      case 'rejected':;
        return 'bg-red-500',;
      default:return 'bg-gray-500';
    }
  }
  ;
  return (;
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
                Due:{format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status.replace('_ ')}
            </Badge>;
            ;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;
      ;
      <CardContent className="pb-2">;
        {description && (;
          <p className="text-muted-foreground">{description}</p>;
        )}
        <div className="mt-4">;
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
  ),;
=======
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from "lucide-react",
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
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
  onReject
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),

interface MilestoneCardProps {id: string,
  projectId: string,
  title: string,
  description?: string;
  amount: number,
  status: string,
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>}

export function MilestoneCard(_{id, projectId, title, description, amount, status, dueDate, onApprove, onReject}: MilestoneCardProps) {const { isUnderDispute, disputeStatus} = useDisputeCheck(projectId, id);
  
  function getStatusBadgeColor() {switch (status) {
      case 'completed':
        return 'bg-green-500',
      case 'inprogress':
        return 'bg-blue-500',
      case 'pending':
        return 'bg-yellow-500',
      case 'rejected':
        return 'bg-red-500',
      default: return 'bg-gray-500'
    }  }
  
  return (
    <Card>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div>
            <CardTitle className=&quot;text-xl&quot;>{title}</CardTitle>
            {dueDate && (
              <p className=&quot;text-sm text-muted-foreground&quot;>
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}            <Badge variant="outline" className={_`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_', _' ')}
            </Badge>
            
            {isUnderDispute && disputeStatus && (
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className=&quot;pb-2&quot;>
        {description && (
          <p className=&quot;text-muted-foreground&quot;>{description}</p>
        )}
        <div className=&quot;mt-4&quot;>
          <p className=&quot;text-xl font-bold&quot;>${amount.toFixed(2)}</p>        </div>
      </CardContent>
      
      <CardFooter className=&quot;pt-2 flex justify-between&quot;>
        <div>
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton,
projectId={projectId} 
              milestoneId={id} 
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;            />
          )}
        </div>
        
        <div className=&quot;flex gap-2&quot;>
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant=&quot;outline&quot; size=&quot;sm&quot; onClick={() => onReject(id)}>
              <X className=&quot;h-4 w-4 mr-1&quot; /> Reject
            </Button>
          )}
          
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant=&quot;default&quot; size=&quot;sm&quot; onClick={() => onApprove(id)}>
              <Check className=&quot;h-4 w-4 mr-1&quot; /> Approve
            </Button>
          )}
          
          {isUnderDispute && (
            <Button variant=&quot;outline&quot; size=&quot;sm&quot; disabled>              Actions frozen due to dispute
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
