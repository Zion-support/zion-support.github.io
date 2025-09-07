
<<<<<<< HEAD

import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
type QuoteRequestsListProps = any;

=======
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",}) => {
  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );

  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
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
      <div className="text - center py-20">;
        <p className="text - zion - slate-light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;
  }
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-5">;
      {quotes.map (quote => (
import React from "react",""
import { QuoteRequestCard } from "./QuoteRequestCard",""
import { EmptyStateCard } from "./EmptyStateCard";""
import type { QuoteRequest } from "@/types/quotes";""
import { EmptyStateCard } from "./EmptyStateCard",""
import type { QuoteRequest } from "@/types/quotes","
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void;
},




export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
"
      <div className="text-center py-20">"
</div>"
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>

export const QuoteRequestsList: React.FC < QuoteRequestsListProps> = ({
  quotes;
  is_loading;
  is_archived;
  onViewDetails;
    return (
      <div className="text-center py-20">;"
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;

    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">"
pr-12325
        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}

    </div>;
  );
    </div>;
  );

          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;"
          key={quote && quote.id}
  onMarkAsResponded,
  onToggleArchive;)
}) => {
      <div className="text - center py - 20">;"
        <p className="text - zion - slate - light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
      </div>);
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;

    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 5">;"
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}




    </div>;"
  return (<div className="text-center py-20" > <p className="text-zion-slate-light" >Loading {"
</div>)
}hire requests...</p> </div>) 
}<QuoteRequestCard key= {
  quote.id;
}quote= {
  quote;
}onViewDetails= {
}onMarkAsResponded= {
  !isArchived ? onMarkAsResponded : undefined;
}onToggleArchive= {
  onToggleArchive;
}/>) ) 

}</div>) 
pr-12325
>>>>>>> origin/main
