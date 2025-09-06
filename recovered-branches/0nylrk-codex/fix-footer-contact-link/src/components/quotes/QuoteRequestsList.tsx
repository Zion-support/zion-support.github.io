
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { QuoteRequestCard } from "./QuoteRequestCard",
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
import { EmptyStateCard } from "./EmptyStateCard",
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from "react","
import { QuoteRequestCard } from "./QuoteRequestCard",";
import { EmptyStateCard } from "./EmptyStateCard";"
import type { QuoteRequest } from "@/types/quotes";"
import { EmptyStateCard } from "./EmptyStateCard","
import type { QuoteRequest } from "@/types/quotes",

type QuoteRequestsListProps = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  quotes: QuoteRequest[],
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
},

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
<<<<<<< HEAD
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
=======
import type { QuoteRequest } from "@/types/quotes",}) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import type { QuoteRequest } from "@/types/quotes",}) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import { QuoteRequestCard } from "./QuoteRequestCard",;
import { EmptyStateCard } from "./EmptyStateCard",;
=======
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({};
  quotes;
  isLoading;
  isArchived;
  onViewDetails;
  onMarkAsResponded;
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,

  onToggleArchive;
}) => {}
  if (isLoading) {}
    return (
"
import React from "react",;"
import { QuoteRequestCard } from "./QuoteRequestCard",;"
import { EmptyStateCard } from "./EmptyStateCard",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { QuoteRequest } from "@/types/quotes",;



type QuoteRequestsListProps = {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  quotes: QuoteRequest[],;
  isLoading: boolean,;
  isArchived: boolean,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
import React from './react';'
import { QuoteRequestCard } from './QuoteRequestCard';'
import { EmptyStateCard } from './EmptyStateCard';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
export const QuoteRequestsList: React.FC < QuoteRequestsListProps> = ({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export const QuoteRequestsList: React.FC < QuoteRequestsListProps> = ({};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  quotes;
  is_loading;
  is_archived;
  onViewDetails;
    return (

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="text-center py-20">;
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
      <div className="text-center py-20">;'"
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;
      </div>;
    );

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (quotes && quotes.length === 0) {;'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
<<<<<<< HEAD
=======
}
<<<<<<< HEAD
<<<<<<< HEAD



  }
  if (quotes.length === 0) {'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  
  return ("
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {quotes.map(quote => (
        <QuoteRequestCard;
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

  

  if (quotes && quotes.length === 0) {;'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }


    </div>;
  );
  }
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
=======

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
    return (
      <div className="text - center py-20">;
        <p className="text - zion - slate-light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
=======
    return ("
      <div className="text - center py - 20">;'"
        <p className="text - zion - slate - light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}'
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;
  }
<<<<<<< HEAD
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-5">;
      {quotes.map (quote => (
=======
  return ("
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 5">;
      {quotes.map (quote => (



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <QuoteRequestCard;
          key={quote.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          quote={quote}
          onViewDetails={onViewDetails}
<<<<<<< HEAD
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    </div>;
  );

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}

};
        />))}
    </div>);
}
;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </div>;
  );
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
