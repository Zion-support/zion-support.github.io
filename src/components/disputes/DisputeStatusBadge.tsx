
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ShieldAlert } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from &quot;@/components/ui/tooltip&quot;;

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
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
    default:
      break;
  }
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant={variant} className=&quot;flex items-center gap-1&quot;>
          <ShieldAlert className=&quot;h-3 w-3&quot; />
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
}
