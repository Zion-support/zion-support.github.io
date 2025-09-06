<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======


=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {QuoteRequestCard} from "./QuoteRequestCard";
import {EmptyStateCard} from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",
import type { QuoteRequest } from "@/types/quotes",
<<<<<<< HEAD

import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({

  onMarkAsResponded,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onToggleArchive
}) => {
  if (isLoading) {
    return (
<<<<<<< HEAD
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
type QuoteRequestsListProps = {;
  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  quotes;
  is_loading;
  is_archived;
  onViewDetails;
    return (
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }


  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
<<<<<<< HEAD
=======
}

<<<<<<< HEAD

=======

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  
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
    </div>;
  );
    </div>;
  );
=======

  

  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>;
  );
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <QuoteRequestCard;
          key={quote.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          quote={quote}
          onViewDetails={onViewDetails}
<<<<<<< HEAD
<<<<<<< HEAD
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}



    </div>;
  );

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>;
  );


=======
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
        />))}
    </div>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
    </div>
  )
}

    </div>;
  );
    </div>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
