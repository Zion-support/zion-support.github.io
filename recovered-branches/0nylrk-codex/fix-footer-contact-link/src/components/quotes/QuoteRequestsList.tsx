
<<<<<<< HEAD


import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",
import type { QuoteRequest } from "@/types/quotes",



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},

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
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
  onMarkAsResponded
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,

=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }


  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
<<<<<<< HEAD

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
  )

=======


=======

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}



    </div>;
  );

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
=======
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
