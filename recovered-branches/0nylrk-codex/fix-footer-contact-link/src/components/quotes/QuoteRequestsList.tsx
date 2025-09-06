




type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},



  onToggleArchive
}) => {
  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  is_loading;
  is_archived;
  onViewDetails;

  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  if (isLoading) {;

    return (
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );


  }
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  }


  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes && quotes.map(quote => (;
        <QuoteRequestCard
          key={quote && quote.id}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}



    </div>;
  );




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

};
