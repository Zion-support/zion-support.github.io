<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======


import React from "react";
import {QuoteRequestCard} from "./QuoteRequestCard";
import {EmptyStateCard} from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",
import type { QuoteRequest } from "@/types/quotes",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
=======
type QuoteRequestsListProps = {
  quotes: QuoteRequest[]
  isLoading: boolean
  isArchived: boolean
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5



  onToggleArchive
}) => {
  if (isLoading) {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
type QuoteRequestsListProps = {;
  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
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
  quotes;
  is_loading;
  is_archived;
  onViewDetails;
    return (
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }


  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
}

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


  

  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
    </div>;
  );
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
          quote={quote}
          onViewDetails={onViewDetails}
    </div>;
  );


          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
};
        />))}
    </div>);
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          onMarkAsResponded={!isArchived ? onMarkAsResponded :undefined}
          onToggleArchive={onToggleArchive}
        />;
      ))}
    </div>;
  ),;
},; type QuoteRequestsListProps = {
  quotes: QuoteRequest[];
isLoading: boolean;
isArchived: boolean;
onViewDetails: (quote: QuoteRequest) => void;
onMarkAsResponded: (id: string) => void;
onToggleArchive: (id: string, isArchived: boolean) => void 
};
quotes, isLoading, isArchived, onViewDetails, onMarkAsResponded, onToggleArchive 
}) => {
  if (isLoading) {
  return (<div className="text-center py-20" > <p className="text-zion-slate-light" >Loading {
  isArchived ? 'archived' : 'your' 
}hire requests...</p> </div>) 
}<QuoteRequestCard key= {
  quote.id 
}quote= {
  quote 
}onViewDetails= {
  onViewDetails 
}onMarkAsResponded= {
  !isArchived ? onMarkAsResponded : undefined 
}onToggleArchive= {
  onToggleArchive 
}/>) ) 
}</div>) 
};
    </div>
  )
}

    </div>;
  );
    </div>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
