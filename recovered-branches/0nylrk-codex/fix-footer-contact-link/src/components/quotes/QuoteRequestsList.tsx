import React from "react";
import {QuoteRequestCard} from "./QuoteRequestCard";
import {EmptyStateCard} from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";

import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type QuoteRequestsListProps = {

  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,

<<<<<<< HEAD
type QuoteRequestsListProps = {
  quotes: QuoteRequest[]
  isLoading: boolean
  isArchived: boolean
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onToggleArchive
}) => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;

import type { QuoteRequest } from "@/types/quotes",;

type QuoteRequestsListProps = {;

  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;

};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;

import type { QuoteRequest } from "@/types / quotes";
type QuoteRequestsListProps = {}

  quotes: QuoteRequest[],
  is_loading: boolean,
  is_archived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, is_archived: boolean) => void;
}
;

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
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
  
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  if (quotes && quotes.length === 0) {;'

    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }

  }
  if (quotes.length === 0) {'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }

        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />
      ))}

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes && quotes.map(quote => (;
        <QuoteRequestCard;
          key={quote && quote.id}
  onMarkAsResponded,
  onToggleArchive;
}) => {}
  // Check condition;
if ( {) {}
  $2;
}

      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}'
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;
  }

        <QuoteRequestCard;
          key={quote.id}

          quote={quote}
          onViewDetails={onViewDetails}

    </div>;
  );

    </div>;
  );

          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}

};
        />))}
    </div>);
}
;

    </div>;
  );
    </div>;
  );