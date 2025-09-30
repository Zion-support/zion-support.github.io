




import type { QuoteRequest } from "@/types/quotes",;

;
type QuoteRequestCardProps = {;
  quote: QuoteRequest;,;
  onViewDetails: (quote:QuoteRequest) => void;,;
  onMarkAsResponded?:(id: string) => void;,;
  onToggleArchive: (id:string;, isArchived:boolean) => void;
},;
export const QuoteRequestCard:React.FC<QuoteRequestCardProps> = ({;




          <div>;
</div>"
            <CardTitle className="text-white">{quote.project_name};""
            <CardDescription className="text-zion-slate-light">;"

          </div>;
          <QuoteStatusBadge status={quote.status} />;

















