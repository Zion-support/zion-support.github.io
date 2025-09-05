
import React from &quot;react&quot;;
import { QuoteRequestCard } from &quot;./QuoteRequestCard&quot;;
import { EmptyStateCard } from &quot;./EmptyStateCard&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;

type QuoteRequestsListProps = {
  quotes: QuoteRequest[];
  isLoading: boolean;
  isArchived: boolean;
  onViewDetails: (quote: QuoteRequest) => void;
  onMarkAsResponded: (id: string) => void;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
}) => {
  if (isLoading) {
    return (
      <div className=&quot;text-center py-20&quot;>
        <p className=&quot;text-zion-slate-light&quot;>Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    );
  }
  
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
  
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5&quot;>
      {quotes.map(quote => (
        <QuoteRequestCard
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />
      ))}
    </div>
  );
};
