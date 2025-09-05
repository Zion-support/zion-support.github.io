
import React from "react";
import type {_QuoteRequest} from "@/types/quotes";

type QuoteRequestsListProps = {_quotes: QuoteRequest[];
  isLoading: boolean;
  isArchived: boolean;
  onViewDetails: (_quote: QuoteRequest) => void;
  onMarkAsResponded: (_id: string) => void;
  onToggleArchive: (_id: string, _isArchived: boolean) => void;};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = (_{_quotes, _isLoading, _isArchived, _onViewDetails, _onMarkAsResponded, _onToggleArchive}) => {_if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    );
  }
  
  if (quotes.length === 0) {_return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {_quotes.map(quote => (
        <QuoteRequestCard
          key={quote.id}
          quote={_quote}
          onViewDetails={_onViewDetails}
          onMarkAsResponded={_!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={_onToggleArchive}
        />
      ))}
    </div>
  );
};
