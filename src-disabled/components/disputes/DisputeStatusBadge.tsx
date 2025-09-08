<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
=======
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {
  Tooltip
  TooltipContent
  TooltipTrigger
} from '@/components/ui/tooltip'
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD
=======
<<<<<<< HEAD

;
import { Tooltip, TooltipContent, TooltipTrigger  } from '@/components/ui/tooltip';
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {;
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';

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
=======
<<<<<<< HEAD
import { Tooltip, TooltipContent, TooltipTrigger  } from '@/components/ui/tooltip;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Tooltip;
  TooltipContent;
  TooltipTrigger;
 } from '@/components/ui/tooltip';
interface DisputeStatusBadgeProps  {status: 'open' | 'under_review' | 'resolved' | 'closed';
export function DisputeStatusBadge() {let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message  = null;default:;
=======
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
status: 'open' | 'under_review' | 'resolved' | 'closed';

export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {;
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



status: 'open' | 'under_review' | 'resolved' | 'closed';
status: 'open | under_review' | 'resolved | closed';

<<<<<<< HEAD

=======
<<<<<<< HEAD
export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {
  let variant: 'default | destructive' | 'secondary | outline' =;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Badge>;
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
import { Badge } from "@/components/ui/badge",import { ShieldAlert  } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",interface DisputeStatusBadgeProps  {status: 'open' | 'under_review' | 'resolved' | 'closed';
}export function DisputeStatusBadge() {let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",let message = "This item has an open dispute",switch (status) {case 'under_review':;
      variant = "secondary",message = "This dispute is under review by our team",break,case 'resolved':;
      variant = "outline",message = "This dispute has been resolved",break,case 'closed':;
      variant = "outline",message = "This dispute has been closed";
      break;
    default:;
      break;
  }return (<Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;
          <span>Under Dispute</span>;status: 'open' | 'under_review' | 'resolved' | 'closed';export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message  = 'This item has an open dispute';import { Badge  } from '@/components / ui / badge';
import { Tooltip,TooltipContent,TooltipTrigger} from '@/components / ui / tooltip';
interface DisputeStatusBadgeProps  {status: 'open' | 'under_review' | 'resolved' | 'closed';
export /**;
 * DisputeStatusBadge - Function description;
 */;
function DisputeStatusBadge() {let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';
<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
  switch (status) {case 'under_review':;
=======
  switch (status) {case 'under_review':;
  switch (status) {case 'under_review:;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {;
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;
    'destructive';
  let message = 'This item has an open dispute';
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    default:;
      break;interface DisputeStatusBadgeProps  {status: 'open' | 'under_review' | 'resolved' | 'closed';
}export function DisputeStatusBadge() {let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",let message = "This item has an open dispute",switch (status) {case 'under_review':;
      variant = "secondary",message = "This dispute is under review by our team",break,case 'resolved':;
      variant = "outline",message = "This dispute has been resolved",break,case 'closed':;
      variant = "outline",message = "This dispute has been closed",break,default:;
      break;
  }
  return (<Tooltip>;
      <TooltipTrigger asChild>;
        <Badge variant={variant} className='flex items-center gap-1'>;
          <ShieldAlert className='h-3 w-3' />;
          <span>Under Dispute</span>;
  }
  return (<Tooltip>;
      <TooltipTrigger as_child>;
        <Badge variant={variant} className='flex items - center gap - 1'>;
          <ShieldAlert className='h - 3 w - 3' />;
<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <span > Under Dispute</span>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
    default:;,
      break;

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
<<<<<<< HEAD

        <Badge variant={variant} className="flex items-center gap-1>;
          <ShieldAlert className=h-3 w-3" />;

=======
<<<<<<< HEAD
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;

=======
<<<<<<< HEAD
        <Badge variant={variant} className="flex items-center gap-1">;
          <ShieldAlert className="h-3 w-3" />;
=======
        <Badge variant={variant} className="flex items-center gap-1>;
          <ShieldAlert className=h-3 w-3" />;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </Badge>;

      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/disputes/DisputeStatusBadge.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


    </Tooltip>);
}
      </TooltipContent>
    </Tooltip>