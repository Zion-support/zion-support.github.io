
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx

import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
<<<<<<< HEAD
import React from "react";
import {QuoteRequestCard} from "./QuoteRequestCard";
import {EmptyStateCard} from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
<<<<<<< HEAD
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
=======
import { EmptyStateCard } from "./EmptyStateCard",
import type { QuoteRequest } from "@/types/quotes",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},
<<<<<<< HEAD

<<<<<<< HEAD
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({

  onMarkAsResponded,
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
type QuoteRequestsListProps = {
  quotes: QuoteRequest[]
  isLoading: boolean
  isArchived: boolean
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
=======
<<<<<<< HEAD
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
<<<<<<< HEAD
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
  onMarkAsResponded
=======
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onMarkAsResponded,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onToggleArchive
}) => {
  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
type QuoteRequestsListProps = {;
  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx

========
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
=======
},;
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  quotes,;
  isLoading,;
  isArchived,;
  onViewDetails,;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  if (isLoading) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
    return (
=======
  onMarkAsResponded;
  onToggleArchive;
}) => {;
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx


  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

};

=======

=======

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx



    </div>;
  );

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
        />))}
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/QuoteRequestsList.tsx
=======
<<<<<<< HEAD
    </div>
  )
<<<<<<< HEAD
}

=======
    </div>;
  );
=======
=======
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
