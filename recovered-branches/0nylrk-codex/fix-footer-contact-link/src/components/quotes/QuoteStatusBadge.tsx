
<<<<<<< HEAD
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
import { QuoteStatus } from "@/types/quotes",
const statusConfig: Record<QuoteStatus { label: string, className: string }> = {
  new: { label: "New", className: "bg-blue-500 hover:bg-blue-600" },
  in_review: { label: "In Review", className: "bg-yellow-500 hover:bg-yellow-600" },
  accepted: { label: "Accepted", className: "bg-green-500 hover:bg-green-600" },
  responded: { label: "Responded", className: "bg-purple-500 hover:bg-purple-600" },
  closed: { label: "Closed", className: "bg-gray-500 hover:bg-gray-600" },
  archived: { label: "Archived", className: "bg-gray-400 hover:bg-gray-500" }},
=======
import { Badge } from &quot;@/components/ui/badge&quot;;
import { QuoteStatus } from &quot;@/types/quotes&quot;;

const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {
  new: { label: &quot;New&quot;, className: &quot;bg-blue-500 hover:bg-blue-600&quot; },
  in_review: { label: &quot;In Review&quot;, className: &quot;bg-yellow-500 hover:bg-yellow-600&quot; },
  accepted: { label: &quot;Accepted&quot;, className: &quot;bg-green-500 hover:bg-green-600&quot; },
  responded: { label: &quot;Responded&quot;, className: &quot;bg-purple-500 hover:bg-purple-600&quot; },
  closed: { label: &quot;Closed&quot;, className: &quot;bg-gray-500 hover:bg-gray-600&quot; },
  archived: { label: &quot;Archived&quot;, className: &quot;bg-gray-400 hover:bg-gray-500&quot; }};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface QuoteStatusBadgeProps {
  status: QuoteStatus
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {;
  const config = statusConfig[status];
  return (;
    <Badge className={config.className}>;
      {config.label}
    </Badge>;
  );
};