
import React from &quot;react&quot;;
import { format } from &quot;date-fns&quot;;
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription
} from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { QuoteStatusBadge } from &quot;@/components/quotes/QuoteStatusBadge&quot;;
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from &quot;lucide-react&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;

type QuoteRequestCardProps = {
  quote: QuoteRequest;
  onViewDetails: (quote: QuoteRequest) => void;
  onMarkAsResponded?: (id: string) => void;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};

export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
  quote,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PP');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Card key={quote.id} className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div>
            <CardTitle className=&quot;text-white&quot;>{quote.project_name}</CardTitle>
            <CardDescription className=&quot;text-zion-slate-light&quot;>
              {formatDate(quote.created_at)}
            </CardDescription>
          </div>
          <QuoteStatusBadge status={quote.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className=&quot;text-sm text-zion-slate-light mb-3&quot;>
          <span className=&quot;text-white font-medium&quot;>From: </span>
          {quote.requester_name}
        </div>
        
        <p className=&quot;text-white line-clamp-3 mb-4&quot;>{quote.project_summary}</p>
        
        <div className=&quot;flex items-center gap-2 text-sm text-zion-slate-light mb-3&quot;>
          <CalendarIcon className=&quot;h-4 w-4&quot; />
          <span>Timeline: {quote.timeline}</span>
        </div>
        
        <div className=&quot;flex justify-between items-center mt-4&quot;>
          <Button
            variant=&quot;outline&quot;
            size=&quot;sm&quot;
            onClick={() => onViewDetails(quote)}
            className=&quot;flex items-center gap-1&quot;
          >
            <Eye className=&quot;h-4 w-4&quot; />
            View Details
          </Button>
          
          <div className=&quot;flex items-center&quot;>
            {quote.status !== 'responded' && onMarkAsResponded && (
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                onClick={() => onMarkAsResponded(quote.id)}
                className=&quot;flex items-center gap-1&quot;
              >
                <MessageSquare className=&quot;h-4 w-4&quot; />
                Mark Responded
              </Button>
            )}
            
            <Button
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className=&quot;flex items-center gap-1&quot;
            >
              {quote.is_archived ? (
                <RefreshCw className=&quot;h-4 w-4&quot; />
              ) : (
                <ArchiveIcon className=&quot;h-4 w-4&quot; />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
