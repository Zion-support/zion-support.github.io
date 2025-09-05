 type QuoteRequestsListProps = {
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
