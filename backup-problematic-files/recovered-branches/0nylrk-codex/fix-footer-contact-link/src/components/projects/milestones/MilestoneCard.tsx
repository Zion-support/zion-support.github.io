

import React from 'react',;''
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Badge } from "@/components/ui/badge",;""
import { Button } from "@/components/ui/button",;""
import { format } from 'date-fns',;''
import { Check, ArrowDown, X } from "lucide-react",;""
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;''
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;''
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;'

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
</void>
  onReject?:(id:string) => Promise<void>;
</void>
    <Card>;
</Card>'
      <CardHeader className="pb-2">;"
</CardHeader>"
        <div className="flex justify-between items-start">;"
</div>
          <div>;
</div>"
            <CardTitle className="text-xl">{title}</CardTitle>;""
              <p className="text-sm text-muted-foreground">;"
</p>
              </p>;
          </div>;"
          <div className="flex gap-2">;"
</div>"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;"
</Badge>
            </Badge>;
              <DisputeStatusBadge status={disputeStatus} />;
</DisputeStatusBadge>
          </div>;
        </div>;
      </CardHeader>;"
      <CardContent className="pb-2">;"
</CardContent>"
          <p className="text-muted-foreground">{description}</p>;""
        <div className="mt-4">;"
</div>"
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;"
        </div>;
      </CardContent>;"
      <CardFooter className="pt-2 flex justify-between">;"
</CardFooter>
        <div>;
</div>
            <RaiseDisputeButton ;
              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";""
              size="sm";"
            />;
</RaiseDisputeButton>
        </div>;"
        <div className="flex gap-2">;"
</div>"
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;"
</Button>"
              <X className="h-4 w-4 mr-1" /> Reject;"
</X>
            </Button>;"
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;"
</Button>"
              <Check className="h-4 w-4 mr-1" /> Approve;"
</Check>
            </Button>;"
            <Button variant="outline" size="sm" disabled>;"
</Button>
            </Button>;
        </div>;
      </CardFooter>;
    </Card>;
onApprove?: (id: string) => Promise<void>;
</void>
onReject?: (id: string) => Promise<void> 
</void>"

