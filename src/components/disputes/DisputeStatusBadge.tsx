<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeStatusBadge.tsx

<<<<<<< HEAD
=======
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { Badge } from "@/components/ui/badge";
import { Badge } from '@/components/ui/badge'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    default:
      break
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface DisputeStatusBadgeProps {
========
<<<<<<< HEAD
import { Badge } from '@/components/ui/badge';
import { ShieldAlert } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';
interface DisputeStatusBadgeProps {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeStatusBadge.tsx
  status: 'open' | 'under_review' | 'resolved' | 'closed';
export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {;
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';
<<<<<<<< HEAD:src/components/disputes/DisputeStatusBadge.tsx


========
  switch (status) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeStatusBadge.tsx
import { Badge } from '@/components / ui / badge';
import { ShieldAlert } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components / ui / tooltip';
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';
export /**
 * DisputeStatusBadge - Function description
 */
function DisputeStatusBadge() {
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';
  switch (status) {
<<<<<<<< HEAD:src/components/disputes/DisputeStatusBadge.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeStatusBadge.tsx
    case 'under_review':;
      variant = 'secondary';
      message = 'This dispute is under review by our team';
      break;
    case 'resolved':;
      variant = 'outline';
      message = 'This dispute has been resolved';
      break;
    case 'closed':;
      variant = 'outline';
      message = 'This dispute has been closed';
      break;
    default:;
      break;
<<<<<<<< HEAD:src/components/disputes/DisputeStatusBadge.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
    case 'resolved':
      variant = 'outline'
      message = 'This dispute has been resolved'
      break
    case 'closed':
      variant = 'outline'
      message = 'This dispute has been closed'
      break
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';

import { Badge } from "@/components/ui/badge",
import { ShieldAlert } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
}

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",
  let message = "This item has an open dispute",
  
  switch (status) {
    case 'under_review':
      variant = "secondary",
      message = "This dispute is under review by our team",
      break,
    case 'resolved':
      variant = "outline",
      message = "This dispute has been resolved",
      break,
    case 'closed':
      variant = "outline",
      message = "This dispute has been closed",
      break,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    default:
=======
>>>>>>>     default:
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      break
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  }
<<<<<<< HEAD

  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    default:
      break
  }
  
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant={variant} className="flex items-center gap-1">
          <ShieldAlert className="h-3 w-3" />
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </TooltipContent>;
    </Tooltip>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </TooltipContent>
    </Tooltip>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeStatusBadge.tsx
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
<<<<<<<< HEAD:src/components/disputes/DisputeStatusBadge.tsx

========
=======

import { Badge } from "@/components/ui/badge",;
import { ShieldAlert } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",;
;
interface DisputeStatusBadgeProps {;
  status:'open' | 'under_review' | 'resolved' | 'closed';
}
;
export function DisputeStatusBadge({ status } DisputeStatusBadgeProps) {;
  let variant:"default" | "destructive" | "secondary" | "outline" = "destructive",;
  let message = "This item has an open dispute",;
  ;
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
      message = "This dispute has been closed",;
      break,;
    default:;
      break;
  }
  ;
  return (;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;
          <span>Under Dispute</span>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeStatusBadge.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Badge>;
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeStatusBadge.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </Tooltip>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
      </TooltipContent>
    </Tooltip>
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </Tooltip>);
}
=======
    </Tooltip>;
  ),;}
 interface DisputeStatusBadgeProps {;
  status: 'open' | 'under review' | 'resolved' | 'closed' ;
}export function DisputeStatusBadge ({;
  status ;
}: DisputeStatusBadgeProps) {;
  switch (status) {';
  case 'under review': variant = "secondary";";
message = "This dispute is under review by our team";
break;'";
case 'resolved': variant = "outline";";
message = "This dispute has been resolved";
break;'";
case 'closed': variant = "outline";";
message = "This dispute has been closed";
break;
message ;
}</p> </TooltipContent> </Tooltip>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeStatusBadge.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
