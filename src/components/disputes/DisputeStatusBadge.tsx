<<<<<<< HEAD

import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from 'lucide-react'
<<<<<<< HEAD
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
=======
=======
import { Badge } from '@/components/ui/badge';
import { ShieldAlert } from 'lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import {
  Tooltip
  TooltipContent
  TooltipTrigger
} from '@/components/ui/tooltip'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface DisputeStatusBadgeProps {
<<<<<<< HEAD
  status: 'open' | 'under_review' | 'resolved' | 'closed'
=======
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message = null;
    default:
      break
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
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
