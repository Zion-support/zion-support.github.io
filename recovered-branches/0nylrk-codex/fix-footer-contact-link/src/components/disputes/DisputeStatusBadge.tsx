

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

import { Badge } from "@/components/ui/badge",
import { ShieldAlert } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed'
}
export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {

  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  let message = "This item has an open dispute";
=======
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
      variant = "outline";
      message = "This dispute has been closed";
      break;

=======
      variant = "outline",
      message = "This dispute has been closed",
      break,


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { Badge } from "@/components/ui/badge",;
import { ShieldAlert } from "lucide-react",;
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip",;
interface DisputeStatusBadgeProps {;
  status: 'open' | 'under_review' | 'resolved' | 'closed';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;
        </Badge>;
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;
    </Tooltip>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
