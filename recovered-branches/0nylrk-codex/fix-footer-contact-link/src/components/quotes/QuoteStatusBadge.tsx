
<<<<<<< HEAD
import {Badge} from "@/components/ui/badge";
import {QuoteStatus} from "@/types/quotes";
const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {
=======
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" }
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" }
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" }
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" }
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" }
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }}
interface QuoteStatusBadgeProps {
  status: QuoteStatus
<<<<<<< HEAD
}

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  )
=======
import { Badge } from "@/components/ui/badge",;
import { QuoteStatus } from "@/types/quotes",;
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {;
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },;
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },;
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },;
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },;
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },;
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},;
interface QuoteStatusBadgeProps {;
  status: QuoteStatus;
}
;
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
  return (;
    <Badge className={config.className}>;
      {config.label}
    </Badge>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
