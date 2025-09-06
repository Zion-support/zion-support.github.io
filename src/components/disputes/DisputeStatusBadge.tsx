<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Badge } from '@/components/ui/badge';
import { ShieldAlert } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,;
} from '@/components/ui/tooltip';
<<<<<<< HEAD
=======
=======

import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =
    'destructive';
  let message = 'This item has an open dispute';

  switch (status) {
    case 'under_review':
      variant = 'secondary';
      message = 'This dispute is under review by our team';
      break;
    case 'resolved':
      variant = 'outline';
      message = 'This dispute has been resolved';
      break;
    case 'closed':
      variant = 'outline';
      message = 'This dispute has been closed';
      break;
    default:
      break;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant={variant} className='flex items-center gap-1'>
          <ShieldAlert className='h-3 w-3' />
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
