interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}
=======
export /**
 * DisputeStatusBadge - Function description
 */
function DisputeStatusBadge() {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive",
  let message = "This item has an open dispute";
;
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
        </Badge>;
      </TooltipTrigger>;
      <TooltipContent>;
        <p>{message}</p>;
      </TooltipContent>;
=======
    </Tooltip>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
