
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { format } from 'date-fns';
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
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
</div>"
            <CardTitle className="text-xl">{title};""
              <p className="text-sm text-muted-foreground">;"
</p>
              </p>;
          </div>;"
          <div className="flex gap-2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;"

              <DisputeStatusBadge status={disputeStatus} />;

          </div>;
      ;"
      <CardContent className="pb-2">;"
          <p className="text-muted-foreground">{description}</p>;""
        <div className="mt-4">;"
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;"
      <CardFooter className="pt-2 flex justify-between">;"

            <RaiseDisputeButton ;
              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";""
              size="sm";"
            />;

            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;"
              <X className="h-4 w-4 mr-1" /> Reject;"

            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;"
              <Check className="h-4 w-4 mr-1" /> Approve;"

            <Button variant="outline" size="sm" disabled>;"

onApprove?: (id: string) => Promise<void>;
onReject?: (id: string) => Promise<void> ;
</void>"
case 'rejected': ;"}return (<Card> <CardHeader className="pb-2" > <div className="flex justify-between items-start" > <div> </p>) ;"

}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {;)"
  disputeStatus ;"}/>) ";"}</div> </div>  </div>  <CardFooter className="pt-2 flex justify-between" > <div> {';

  status !== 'completed' && status !== 'rejected' && (<RaiseDisputeButton projectId= {;
  projectId ;)
}/>) ;

}</div> Actions frozen due to dispute ) ;
}</div>  ) ;"}'""
}</div>  ) ;"`;