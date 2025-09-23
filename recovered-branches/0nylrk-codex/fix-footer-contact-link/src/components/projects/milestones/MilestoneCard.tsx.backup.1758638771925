
import React from 'react';
<<<<<<< HEAD
import { CardContentCardFooterCardHeaderCardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { CheckArrowDownX } from "lucide-react";
=======
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { Check, ArrowDown, X } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

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
}

export function MilestoneCard({ 
<<<<<<< HEAD
  id
  projectId,
  title
  description
  amount
  status
=======
  id, 
  projectId,
  title, 
  description, 
  amount, 
  status, 
>>>>>>> origin/auto/autonomy-17186719616
  dueDate,
  onApprove,
  onReject
}: MilestoneCardProps) {
<<<<<<< HEAD
  const { isUnderDisputedisputeStatus } = useDisputeCheck(projectIdid);
=======
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
>>>>>>> origin/auto/autonomy-17186719616
  
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
  }
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
              <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
                Due: {format(new Date(dueDate)'MMM dyyyy')}
=======
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
>>>>>>> origin/auto/autonomy-17186719616
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
<<<<<<< HEAD
              {status.replace('_' ')}
=======
              {status.replace('_', ' ')}
>>>>>>> origin/auto/autonomy-17186719616
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
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
