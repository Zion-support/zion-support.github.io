
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

export function MilestoneCard({ ;

  title, ;
  description, ;
  amount, ;
  status, ;



  dueDate;
  onApprove;
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);

  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;


        return 'bg-green-500';
      case 'in_progress':;
        return 'bg-blue-500';
      case 'pending':;



    }
  }







          {isUnderDispute && (;
            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;






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
  );
}
;


