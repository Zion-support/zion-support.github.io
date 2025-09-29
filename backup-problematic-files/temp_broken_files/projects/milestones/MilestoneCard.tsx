

import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;

;
interface MilestoneCardProps {;
  id: string;,;
  projectId: string;,;
  title: string;,;
  description?:string,;
  amount: number;,;
  status: string;,;
  dueDate?:string,;
  onApprove?:(id: string) => Promise<void>;,;
</void>
  onReject?:(id:string) => Promise<void>;




    <Card>;

      <CardHeader className="pb-2">;"
"
        <div className="flex justify-between items-start">;"
</div>
          <div>;




            {isUnderDispute && disputeStatus && (;

              <DisputeStatusBadge status={disputeStatus} />;

          </div>;







            <RaiseDisputeButton ;
              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";""
              size="sm";"
            />;









onApprove?: (id: string) => Promise<void>;
onReject?: (id: string) => Promise<void> ;
</void>"
case 'rejected': ;"}return (<Card> <CardHeader className="pb-2" > <div className="flex justify-between items-start" > <div> </p>) ;"

}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {;)"
  disputeStatus ;"}/>) ";"}</div> </div>  </div>  <CardFooter className="pt-2 flex justify-between" > <div> {';

  status !== 'completed' && status !== 'rejected' && (<RaiseDisputeButton projectId= {;


