
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard",
import type { QuoteRequest } from "@/types/quotes",
=======
import React from &quot;react&quot;;
import { QuoteRequestCard } from &quot;./QuoteRequestCard&quot;;
import { EmptyStateCard } from &quot;./EmptyStateCard&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},
=======
import React from "react";
import type {_QuoteRequest} from "@/types/quotes";

type QuoteRequestsListProps = {_quotes: QuoteRequest[];
  isLoading: boolean;
  isArchived: boolean;
  onViewDetails: (_quote: QuoteRequest) => void;
  onMarkAsResponded: (_id: string) => void;
  onToggleArchive: (_id: string, _isArchived: boolean) => void;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = (_{_quotes, _isLoading, _isArchived, _onViewDetails, _onMarkAsResponded, _onToggleArchive}) => {_if (isLoading) {
    return (
      <div className=&quot;text-center py-20&quot;>
        <p className=&quot;text-zion-slate-light&quot;>Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
  }
  
<<<<<<< HEAD
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
  
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5&quot;>
      {quotes.map(quote => (
=======
  if (quotes.length === 0) {_return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {_quotes.map(quote => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <QuoteRequestCard
          key={quote.id}
          quote={_quote}
          onViewDetails={_onViewDetails}
          onMarkAsResponded={_!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={_onToggleArchive}
        />
      ))}
    </div>
  )
},
