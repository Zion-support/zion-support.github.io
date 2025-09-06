<<<<<<< HEAD
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
=======

import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",;
;
type QuoteRequestsListProps = {;
  quotes:QuoteRequest[],;
  isLoading:boolean,;
  isArchived:boolean,;
  onViewDetails:(quote:QuoteRequest) => void,;
  onMarkAsResponded:(id:string) => void,;
  onToggleArchive:(id:string, isArchived:boolean) => void;
},;
;
export const QuoteRequestsList:React.FC<QuoteRequestsListProps> = ({;
  quotes,;
  isLoading,;
  isArchived,;
  onViewDetails,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  if (isLoading) {;
<<<<<<< HEAD
    return (
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
  }
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
<<<<<<< HEAD
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
    </div>;
  );
};
        />))}
    </div>);
}
;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
