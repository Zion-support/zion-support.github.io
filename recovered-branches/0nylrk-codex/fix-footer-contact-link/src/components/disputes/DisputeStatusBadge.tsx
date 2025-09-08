
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
}
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {export /**
 * DisputeStatusBadge - Function description
 */
function DisputeStatusBadge() {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",

  switch (status) {
    case 'under_review':;
      variant = "secondary";
      message = "This dispute is under review by our team";
      break;
    case 'resolved':;
      variant = "outline";
      message = "This dispute has been resolved";
      break;
    case 'closed':;
      variant = "outline";
      message = "This dispute has been closed";
      break;

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
import { Badge } from "@/components/ui/badge",;
import { ShieldAlert } from "lucide-react",;

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",;
interface DisputeStatusBadgeProps {;'
  status: 'open' | 'under_review' | 'resolved' | 'closed';

}
;
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {;
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",;
  let message = "This item has an open dispute",;

=======
;
export function DisputeStatusBadge() {;
  }
  let message = "This item has an open dispute",;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    <Tooltip>;
      <TooltipTrigger asChild>;"
        <Badge variant={variant} className="flex items-center gap-1">;"
          <ShieldAlert className="h-3 w-3" />;
          <span>Under Dispute</span>;