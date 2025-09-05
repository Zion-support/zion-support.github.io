
import React from 'react';

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
  
  function getStatusBadgeColor() {_switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';}
  }
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{_title}</CardTitle>
            {_dueDate && (
              <p className="text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), _'MMM d, _yyyy')}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={_`capitalize ${getStatusBadgeColor()} text-white`}>
              {_status.replace('_', _' ')}
            </Badge>
            
            {_isUnderDispute && disputeStatus && (
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        {_description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${_amount.toFixed(2)}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        <div>
          {_status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={_id} 
              variant="ghost"
              size="sm"
            />
          )}
        </div>
        
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
              Actions frozen due to dispute
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
