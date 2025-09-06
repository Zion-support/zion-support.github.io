

import { Badge } from "@/components/ui/badge",

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
}
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {

  let message = "This item has an open dispute";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}

  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",;


  let message = "This item has an open dispute";
  switch (status) {
    case 'under_review':

import {Badge} from "@/components/ui/badge";
import {ShieldAlert} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

interface DisputeStatusBadgeProps {;
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}

export function DisputeStatusBadge(): any ({ status }: DisputeStatusBadgeProps) {;
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",;
  let message = "This item has an open dispute";

  switch (status) {;
    case 'under_review':;

=======
export /**
 * DisputeStatusBadge - Function description
 */
function DisputeStatusBadge() {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",
  let message = "This item has an open dispute";
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  switch (status) {
    case 'under_review':;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

      variant = "secondary",
      message = "This dispute is under review by our team",
      break,
    case 'resolved':
      variant = "outline",
      message = "This dispute has been resolved",
      break,
    case 'closed':

=======
      variant = "outline",
      message = "This dispute has been closed",
      break,


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
;
        </Badge>;
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
