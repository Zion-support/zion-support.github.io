
import { Badge } from "@/components/ui/badge",
import { ShieldAlert } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
interface DisputeStatusBadgeProps {
<<<<<<< HEAD
  status: 'open' | 'under_review' | 'resolved' | 'closed'
}
=======
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
<<<<<<< HEAD
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message = null;
=======
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive"
  let message = "This item has an open dispute";
  switch (status) {
    case 'under_review':
      variant = "secondary";
      message = "This dispute is under review by our team";
      break;
    case 'resolved':
      variant = "outline";
      message = "This dispute has been resolved";
      break;
    case 'closed':
      variant = "outline";
      message = "This dispute has been closed";
      break;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
      </TooltipContent>
    </Tooltip>
  )
}