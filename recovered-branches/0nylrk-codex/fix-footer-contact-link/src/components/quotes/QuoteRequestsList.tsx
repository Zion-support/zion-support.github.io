import React from "react";
import {QuoteRequestCard} from "./QuoteRequestCard";
import {EmptyStateCard} from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";


<<<<<<< HEAD
=======
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",

>>>>>>> origin/cursor/delete-old-data-records-6bba

type QuoteRequestsListProps = {

  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,

<<<<<<< HEAD

  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,

=======
  onToggleArchive
}) => {

  onToggleArchive
}) => {


import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;

import type { QuoteRequest } from "@/types/quotes",;


>>>>>>> origin/cursor/delete-old-data-records-6bba
type QuoteRequestsListProps = {;

  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;


<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );


<<<<<<< HEAD

  if (quotes && quotes.length === 0) {;'


  

  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes && quotes.map(quote => (;
        <QuoteRequestCard
          key={quote && quote.id}
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

=======
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

  if (quotes && quotes.length === 0) {;'


    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  if (quotes.length === 0) {'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }

<<<<<<< HEAD
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 5">;
      {quotes.map (quote => (
    return (;
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' :'your'} hire requests...</p>;
      </div>;
    ),;
  }
  ;
  if (quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' :'active'} />,;
  }
  ;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes.map(quote => (;
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}

    </div>;
  );


<<<<<<< HEAD

};
        />))}
    </div>);
}
;




=======
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}


    </div>;
  );
    </div>;

  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
