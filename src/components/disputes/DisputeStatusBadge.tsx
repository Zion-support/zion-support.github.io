
import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from 'lucide-react';
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message = null;
    default:
      break}
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
  )
}