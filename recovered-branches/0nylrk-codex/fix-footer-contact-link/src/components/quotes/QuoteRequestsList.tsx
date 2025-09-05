
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

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
}) => {
  if (isLoading) {
    return (
      <div className=&quot;text-center py-20&quot;>
        <p className=&quot;text-zion-slate-light&quot;>Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
=======
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
},;
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
  quotes,;
  isLoading,;
  isArchived,;
  onViewDetails,;
  onMarkAsResponded;
  onToggleArchive;
}) => {;
  if (isLoading) {;
    return (;
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  if (quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
<<<<<<< HEAD
  
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5&quot;>
      {quotes.map(quote => (
        <QuoteRequestCard
=======
;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;
      {quotes.map(quote => (;
        <QuoteRequestCard;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />;
      ))}
    </div>;
  );
};