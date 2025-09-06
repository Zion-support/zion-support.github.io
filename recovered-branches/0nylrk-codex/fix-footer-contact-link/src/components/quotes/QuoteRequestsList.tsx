=======
import React from './react';
import { QuoteRequestCard } from './QuoteRequestCard';
import { EmptyStateCard } from './EmptyStateCard';
import type { QuoteRequest } from "@/types / quotes";
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  is_loading: boolean,
  is_archived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, is_archived: boolean) => void;
}
;
export const QuoteRequestsList: React.FC < QuoteRequestsListProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  quotes;
  is_loading;
  is_archived;
  onViewDetails;
    return (
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes && quotes.map(quote => (;
        <QuoteRequestCard
          key={quote && quote.id}
=======
  onMarkAsResponded,
  onToggleArchive;
}) => {
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center py - 20">;
        <p className="text - zion - slate - light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;
  }
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 5">;
      {quotes.map (quote => (
        <QuoteRequestCard;
          key={quote.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
=======
        />))}
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
