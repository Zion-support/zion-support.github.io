
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes",
type QuoteRequestsListProps = {
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},




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



  onToggleArchive
}) => {
=======
import type { QuoteRequest } from "@/types/quotes",}) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
<<<<<<< HEAD

import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
import type { QuoteRequest } from "@/types/quotes",;
type QuoteRequestsListProps = {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    return (
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );

<<<<<<< HEAD


  }


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (quotes && quotes.length === 0) {;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
}
<<<<<<< HEAD


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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
      <div className="text - center py - 20">;
        <p className="text - zion - slate - light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
=======
      <div className="text - center py-20">;
        <p className="text - zion - slate-light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;
  }
  return (
<<<<<<< HEAD
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 5">;
=======
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-5">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      {quotes.map (quote => (
        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}

<<<<<<< HEAD


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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    </div>;
  );
    </div>;
  );
<<<<<<< HEAD
};
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
