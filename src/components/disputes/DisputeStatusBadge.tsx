
=======
import { Badge } from "@/components/ui/badge";
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
import { ShieldAlert } from 'lucide-react'

import {
  Tooltip
  TooltipContent
  TooltipTrigger
} from '@/components/ui/tooltip'

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message = null;
<<<<<<< HEAD
    default:
      break

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    default:
      break
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant={variant} className="flex items-center gap-1">
          <ShieldAlert className="h-3 w-3" />
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>

import { Badge } from "@/components/ui/badge",;
import { ShieldAlert } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",;
interface DisputeStatusBadgeProps {;
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}
;
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {;
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",;
  let message = "This item has an open dispute",;
  switch (status) {;
    case 'under_review':;
      variant = "secondary",;
      message = "This dispute is under review by our team",;
      break,;
    case 'resolved':;
      variant = "outline",;
      message = "This dispute has been resolved",;
      break,;
    case 'closed':;
      variant = "outline",;
      message = "This dispute has been closed";
      break;
    default:;
      break;
  }
;
  return (;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    <Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className='flex items-center gap-1'>;
          <ShieldAlert className='h-3 w-3' />;
          <span>Under Dispute</span>;
  }
  return (
    <Tooltip>;
      <TooltipTrigger as_child>;
        <Badge variant={variant} className='flex items - center gap - 1'>;
          <ShieldAlert className='h - 3 w - 3' />;
          <span > Under Dispute</span>;

        </Badge>;
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;
<<<<<<< HEAD




    </Tooltip>);
}
;
