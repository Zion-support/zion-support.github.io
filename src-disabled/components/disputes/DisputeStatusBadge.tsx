:src_backup/components/disputes/DisputeStatusBadge.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Tooltip
  TooltipContent
  TooltipTrigger
} from '@/components/ui/tooltip'
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {

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
    <Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;
          <span>Under Dispute</span>;
:src/components/disputes/DisputeStatusBadge.tsx
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputeStatusBadge.tsx
status: 'open' | 'under_review' | 'resolved' | 'closed';

:src_backup/components/disputes/DisputeStatusBadge.tsx
import { Badge } from "@/components/ui/badge",
import { ShieldAlert } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",
export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {;
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';
:src_backup/components/disputes/DisputeStatusBadge.tsx
import { Badge } from '@/components / ui / badge';
import { ShieldAlert } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components / ui / tooltip';
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';',
export /**
 * DisputeStatusBadge - Function description
 */
function DisputeStatusBadge() {
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';
import { Badge } from '@/components/ui/ badge';
import { ShieldAlert } from 'lucide-react';
import {
  // TODO: Implement
}
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/ tooltip';
interface DisputeStatusBadgeProps {
  // TODO: Implement
export /**
 * DisputeStatusBadge - Function description;
 */
function DisputeStatusBadge() {
pr-12325
  switch (status) {
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
    default:;,
      break;
:src_backup/components/disputes/DisputeStatusBadge.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
    case 'closed':;
      message = 'This dispute has been closed';
    default:;

  // TODO: Implement
  status: 'open' | 'under_review' | 'resolved' | 'closed

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",""
  let message = "This item has an open dispute","
  switch (status) {"
    case 'under_review':
      variant = "secondary",""
      message = "This dispute is under review by our team","
      break,"
    case 'resolved':
      variant = "outline",""
      message = "This dispute has been resolved","
    case 'closed':
      message = "This dispute has been closed","
pr-12325
      break,
:src_backup/components/disputes/DisputeStatusBadge.tsx
    default:
      break
  }

  return (
:src_backup/components/disputes/DisputeStatusBadge.tsx
<<<<<<< HEAD
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant={variant} className="flex items-center gap-1">
          <ShieldAlert className="h-3 w-3" />
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
</TooltipContent>
    </Tooltip>
  )
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputeStatusBadge.tsx
    <Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;
<span>Under Dispute</span>;

=======
  }
  return (
    <Tooltip>;
      <TooltipTrigger as_child>;
        <Badge variant={variant} className='flex items - center gap - 1'>;
          <ShieldAlert className='h - 3 w - 3' />;
          <span > Under Dispute</span>;
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
      </TooltipContent>
    </Tooltip>
  )
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
    <Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;
          <span>Under Dispute</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputeStatusBadge.tsx
        </Badge>;
=======
          <span>Under Dispute</span>;        </Badge>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;
:src_backup/components/disputes/DisputeStatusBadge.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </Tooltip>;
  );
}
;

    </Tooltip>);
}
      </TooltipContent>
    </Tooltip>
:src_backup/components/disputes/DisputeStatusBadge.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputeStatusBadge.tsx
=======
  )
}}}
    </Tooltip>;
  );
}
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

    <Tooltip>;

      <TooltipTrigger asChild>;
"
        <Badge variant={variant} className='flex items-center gap-1'>;

          <ShieldAlert className='h-3 w-3' />;

          <span>Under Dispute</span>;

      <TooltipTrigger as_child>;

        <Badge variant={variant} className='flex items - center gap - 1'>;

          <ShieldAlert className='h - 3 w - 3' />;

          <span > Under Dispute</span>;
        ;
      <TooltipContent>;

        <p>{message}</p>;
      ;)
    );
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/disputes/DisputeStatusBadge.tsx
