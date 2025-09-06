
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
<<<<<<< HEAD

type QuoteRequestsListProps = {
  quotes: QuoteRequest[]
  isLoading: boolean
  isArchived: boolean
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
=======
type QuoteRequestsListProps = {;
  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
<<<<<<< HEAD
  onMarkAsResponded
  onToggleArchive
}) => {
  if (isLoading) {
=======
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
  }
<<<<<<< HEAD
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
=======

  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes && quotes.map(quote => (;
        <QuoteRequestCard
          key={quote && quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />;
      ))}
<<<<<<< HEAD
    </div>
  )
}

=======
    </div>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
