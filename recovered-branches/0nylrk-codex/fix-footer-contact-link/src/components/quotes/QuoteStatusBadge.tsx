
import { Badge } from &quot;@/components/ui/badge&quot;;
import { QuoteStatus } from &quot;@/types/quotes&quot;;

const statusConfig: Record<QuoteStatus, { label: string, className: string }> = {
  new: { label: &quot;New&quot;, className: &quot;bg-blue-500 hover:bg-blue-600&quot; },
  in_review: { label: &quot;In Review&quot;, className: &quot;bg-yellow-500 hover:bg-yellow-600&quot; },
  accepted: { label: &quot;Accepted&quot;, className: &quot;bg-green-500 hover:bg-green-600&quot; },
  responded: { label: &quot;Responded&quot;, className: &quot;bg-purple-500 hover:bg-purple-600&quot; },
  closed: { label: &quot;Closed&quot;, className: &quot;bg-gray-500 hover:bg-gray-600&quot; },
  archived: { label: &quot;Archived&quot;, className: &quot;bg-gray-400 hover:bg-gray-500&quot; }};

interface QuoteStatusBadgeProps {
  status: QuoteStatus;
}

export const QuoteStatusBadge = ({ status }: QuoteStatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
};
