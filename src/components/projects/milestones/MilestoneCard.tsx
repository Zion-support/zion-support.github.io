
<<<<<<< HEAD
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
=======
import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { format } from 'date-fns';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======

interface MilestoneCardProps {_id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  dueDate?: string;
  onApprove?: (_id: string) => Promise<void>;
  onReject?: (_id: string) => Promise<void>;}

export function MilestoneCard(_{_id, _projectId, _title, _description, _amount, _status, _dueDate, _onApprove, _onReject}: MilestoneCardProps) {_const { isUnderDispute, _disputeStatus} = useDisputeCheck(projectId, id);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  function getStatusBadgeColor() {_switch (status) {
      case 'completed':
        return 'bg-green-500',
      case 'in_progress':
        return 'bg-blue-500',
      case 'pending':
        return 'bg-yellow-500',
      case 'rejected':
<<<<<<< HEAD
        return 'bg-red-500',
      default: return 'bg-gray-500'
    }
=======
        return 'bg-red-500';
      default:
        return 'bg-gray-500';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return (
    <Card>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div>
<<<<<<< HEAD
            <CardTitle className=&quot;text-xl&quot;>{title}</CardTitle>
            {dueDate && (
              <p className=&quot;text-sm text-muted-foreground&quot;>
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
=======
            <CardTitle className="text-xl">{_title}</CardTitle>
            {_dueDate && (
              <p className="text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), _'MMM d, _yyyy')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            )}
          </div>
<<<<<<< HEAD
          <div className="flex gap-2">
<<<<<<< HEAD
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
=======
          <div className=&quot;flex gap-2&quot;>
            <Badge variant=&quot;outline&quot; className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_', ' ')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <Badge variant="outline" className={_`capitalize ${getStatusBadgeColor()} text-white`}>
              {_status.replace('_', _' ')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Badge>
            
            {_isUnderDispute && disputeStatus && (
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
      
<<<<<<< HEAD
      <CardContent className=&quot;pb-2&quot;>
        {description && (
          <p className=&quot;text-muted-foreground&quot;>{description}</p>
        )}
        <div className=&quot;mt-4&quot;>
          <p className=&quot;text-xl font-bold&quot;>${amount.toFixed(2)}</p>
=======
      <CardContent className="pb-2">
        {_description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${_amount.toFixed(2)}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </CardContent>
      
      <CardFooter className=&quot;pt-2 flex justify-between&quot;>
        <div>
          {_status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton 
              projectId={projectId} 
<<<<<<< HEAD
              milestoneId={id} 
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
=======
              milestoneId={_id} 
              variant="ghost"
              size="sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          )}
        </div>
        
<<<<<<< HEAD
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
            <Button variant=&quot;outline&quot; size=&quot;sm&quot; disabled>
=======
        <div className="flex gap-2">
          {_status === 'pending' && onReject && !isUnderDispute && (_<Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
          )}
          
          {_status === 'pending' && onApprove && !isUnderDispute && (_<Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
          )}
          
          {_isUnderDispute && (
            <Button variant="outline" size="sm" disabled>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Actions frozen due to dispute
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
