
import { Badge } from "@/components/ui/badge";
import { QuoteStatus } from "@/types/quotes";


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
