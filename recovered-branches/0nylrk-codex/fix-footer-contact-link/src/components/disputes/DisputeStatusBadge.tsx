
<<<<<<< HEAD
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
import { ShieldAlert } from "lucide-react",
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",
=======
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ShieldAlert } from &quot;lucide-react&quot;;
import { Tooltip, TooltipContent, TooltipTrigger } from &quot;@/components/ui/tooltip&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
}

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
<<<<<<< HEAD
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",
  let message = "This item has an open dispute",
=======

interface DisputeStatusBadgeProps {_status: 'open' | 'under_review' | 'resolved' | 'closed';}

export function DisputeStatusBadge(_{_status}: DisputeStatusBadgeProps) {_let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let _message = "This item has an open dispute";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
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
=======
  let variant: &quot;default&quot; | &quot;destructive&quot; | &quot;secondary&quot; | &quot;outline&quot; = &quot;destructive&quot;;
  let message = &quot;This item has an open dispute&quot;;
  
  switch (status) {
    case 'under_review':
      variant = &quot;secondary&quot;;
      message = &quot;This dispute is under review by our team&quot;;
      break;
    case 'resolved':
      variant = &quot;outline&quot;;
      message = &quot;This dispute has been resolved&quot;;
      break;
    case 'closed':
      variant = &quot;outline&quot;;
      message = &quot;This dispute has been closed&quot;;
      break;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    default:
<<<<<<< HEAD
      break
  }
=======
      break;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
<<<<<<< HEAD
        <Badge variant={variant} className=&quot;flex items-center gap-1&quot;>
          <ShieldAlert className=&quot;h-3 w-3&quot; />
=======
        <Badge variant={_variant} className="flex items-center gap-1">
          <ShieldAlert className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{_message}</p>
      </TooltipContent>
    </Tooltip>
  )
}
