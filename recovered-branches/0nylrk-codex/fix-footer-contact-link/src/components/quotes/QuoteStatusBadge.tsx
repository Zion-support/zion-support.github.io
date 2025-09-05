
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
}

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {
  const config = statusConfig[status],
=======

const statusConfig: Record<QuoteStatus, {_label: string, _className: string}> = {_new: { label: "New", _className: "bg-blue-500 hover:bg-blue-600"},
  in_review: {_label: "In Review", _className: "bg-yellow-500 hover:bg-yellow-600"},
  accepted: {_label: "Accepted", _className: "bg-green-500 hover:bg-green-600"},
  responded: {_label: "Responded", _className: "bg-purple-500 hover:bg-purple-600"},
  closed: {_label: "Closed", _className: "bg-gray-500 hover:bg-gray-600"},
  archived: {_label: "Archived", _className: "bg-gray-400 hover:bg-gray-500"}};

interface QuoteStatusBadgeProps {_status: QuoteStatus;}

export const _QuoteStatusBadge = (_{_status}: QuoteStatusBadgeProps) => {_const _config = statusConfig[status];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Badge className={config.className}>
      {_config.label}
    </Badge>
  )
},
