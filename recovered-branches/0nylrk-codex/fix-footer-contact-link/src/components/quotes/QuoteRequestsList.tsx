
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
</QuoteRequestsListProps>
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
</QuoteRequestsListProps>"
      <div className="text-center py-20">"
</div>"
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>'
      </div>
export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({;
</QuoteRequestsListProps>
export const QuoteRequestsList: React.FC < QuoteRequestsListProps> = ({
  quotes;
  is_loading;
  is_archived;
  onViewDetails;
    return ('
      <div className="text-center py-20">;"
</div>"
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>;'
      </div>;'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;'
</EmptyStateCard>'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />'
</EmptyStateCard>'
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">"
</div>
        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />
</QuoteRequestCard>"
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;'
</EmptyStateCard>
    </div>;'
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;"
</div>
        <QuoteRequestCard;
          key={quote && quote.id}
  onMarkAsResponded,
  onToggleArchive;)
}) => {
</QuoteRequestCard>"
      <div className="text - center py - 20">;"
</div>"
        <p className="text - zion - slate - light">Loading {is_archived ? 'archived' : 'your'} hire requests...</p>;'
      </div>);'
    return <EmptyStateCard type={is_archived ? 'archived' : 'active'} />;'
</EmptyStateCard>'
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 5">;"
</div>
        <QuoteRequestCard;
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!is_archived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}



    </div>;
</QuoteRequestCard>
    </div>;
    </div>);
    </div>;"
  return (<div className="text-center py-20" > <p className="text-zion-slate-light" >Loading {"
</div>)
}hire requests...</p> </div>) 
}<QuoteRequestCard key= {
  quote.id;
}quote= {
  quote;
}onViewDetails= {
  onViewDetails;
}onMarkAsResponded= {
  !isArchived ? onMarkAsResponded : undefined;
}onToggleArchive= {
  onToggleArchive;
}/>) ) 
</QuoteRequestCard>
}</div>) 
    </div>
    </div>;
    </div>;"