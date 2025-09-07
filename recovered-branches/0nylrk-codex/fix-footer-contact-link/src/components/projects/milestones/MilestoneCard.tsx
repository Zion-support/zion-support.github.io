




import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Button} from "@/components/ui/button";""
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";""
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
  id;
  projectId;

  title;
  description;
  amount;
  status;
  dueDate;
  onApprove;
  onReject;
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
      default: return 'bg-gray-500
    }
import { Button } from "@/components/ui/button",""
import { format } from 'date-fns',
import { Check, ArrowDown, X } from "lucide-react",""
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
  // TODO: Implement
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
</void>
  onReject?: (id: string) => Promise<void>
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
    <Card>;

      <CardHeader className="pb-2">;"
"
        <div className="flex justify-between items-start">;"
</div>
          <div>;
</div>"
            <CardTitle className="text-xl">{title};""
              <p className="text-sm text-muted-foreground">;"
</p>
              </p>;
          </div>;"
          <div className="flex gap-2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;"

            ;
              <DisputeStatusBadge status={disputeStatus} />;

          </div>;
      ;"
      <CardContent className="pb-2">;"
          <p className="text-muted-foreground">{description}</p>;""
        <div className="mt-4">;"
          <p className="text-xl font-bold">${amount && amount.toFixed(2)}</p>;"
      <CardFooter className="pt-2 flex justify-between">;"

            <RaiseDisputeButton;
              projectId={projectId} 
              milestoneId={id} 
              variant="ghost"""
              size="sm""
            />;

</div>"`;


      
    


          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;"

              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";""
              size="sm";"

            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;"
              <X className="h-4 w-4 mr-1" /> Reject;"

            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;"
              <Check className="h-4 w-4 mr-1" /> Approve;"

            <Button variant="outline" size="sm" disabled>;"

  on_approve?: (id: string) => Promise < void>,
  on_reject?: (id: string) => Promise < void>;
export /**
 * MilestoneCard - Function description;
 */
function MilestoneCard() {
  const { isUnderDispute, dispute_status } = useDisputeCheck (project_id, id);
  /**
 * getStatusBadgeColor - Function description;
    switch (status) {"
      case 'completed':;
        return 'bg - green - 500';
      case 'in_progress':;
        return 'bg - blue - 500';
      case 'pending':;
        return 'bg - yellow - 500';
      case 'rejected':;
        return 'bg - red - 500';
      default: return 'bg - gray - 500';
  return (

      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;"
            <CardTitle className="text - xl">{title};""
              <p className="text - sm text - muted - foreground">;"
</p>)
              </p>)}
          <div className="flex gap - 2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;"

              <DisputeStatusBadge status={dispute_status} />)}

      <CardContent className="pb - 2">;"
          <p className="text - muted - foreground">{description}</p>)}""
        <div className="mt - 4">;"
          <p className="text - xl font - bold">${amount.to_fixed (2)}</p>;"
      <CardFooter className="pt - 2 flex justify - between">;"

              project_id={project_id}
              milestone_id={id}"
            />)}

            <Button variant="outline" size="sm" on_click={() => on_reject (id)}>;"
              <X className="h - 4 w - 4 mr - 1" /> Reject;"

            )}"
            <Button variant="default" size="sm" on_click={() => on_approve (id)}>;"
              <Check className="h - 4 w - 4 mr - 1" /> Approve;"


            )}
    );
onApprove?: (id: string) => Promise<void>;
</void>"
}return (<Card> <CardHeader className="pb-2" > <div className="flex justify-between items-start" > <div> </p>)"

}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {
  disputeStatus;)
}/>) 
}</div> </div>  </div>  <CardFooter className="pt-2 flex justify-between" > <div> {"
  status !== 'completed' && status !== 'rejected' && (<RaiseDisputeButton projectId= {
  projectId;)

}</div> Actions frozen due to dispute ) 
}</div>  ) `;