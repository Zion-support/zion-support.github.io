import type {_QuoteRequest, _QuoteStatus} from '@/types/quotes';
import type {_DateRange} from '@/types/dateRange';

export const _useAdminQuotes = () => {_const { toast} = useToast();
  const _queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  // Fetch all quote requests
  const {_data: allQuotes = [], _isLoading, _error} = useQuery(_{_queryKey: ['quotes', _'admin'], _queryFn: () => quoteRequestService.getAll(), _enabled: true});

  // Filter quotes based on selected filters
  const _filteredQuotes = allQuotes.filter(_(quote) => {_// Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false;}
    
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {_return false;}
    if (archiveFilter === 'archived' && !quote.is_archived) {_return false;}
    
    // Search filter
    if (searchQuery) {_const _query = searchQuery.toLowerCase();
      if (
        !quote.requester_name.toLowerCase().includes(query) &&
        !quote.project_name.toLowerCase().includes(query) &&
        !quote.project_summary.toLowerCase().includes(query) &&
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query))
      ) {
        return false;}
    }
    
    // Date range filter
    if (dateRange?.from) {_const _createdAt = new Date(quote.created_at);
      if (createdAt < dateRange.from) {
        return false;}
    }
    
    if (dateRange?.to) {_const _createdAt = new Date(quote.created_at);
      const _endDate = new Date(dateRange.to);
      endDate.setHours(23, _59, _59, _999); // End of day
      if (createdAt > endDate) {
        return false;}
    }
    
    return true;
  });

  // Update quote status mutation
  const _updateStatusMutation = useMutation(_{_mutationFn: ({ id, _status}: {_id: string; status: QuoteStatus}) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: () => {_toast({
        title: "Status updated", _description: "The quote request status has been updated"});
      queryClient.invalidateQueries({_queryKey: ['quotes', _'admin']});
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: "Failed to update status: " + error.message, _variant: "destructive"});
    }
  });

  // Archive/Unarchive mutation
  const _toggleArchiveMutation = useMutation(_{_mutationFn: ({ id, _isArchived}: {_id: string; isArchived: boolean}) => 
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, _variables) => {_toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived", _description: variables.isArchived 
          ? "The quote request has been archived" 
          : "The quote request has been moved back to active quotes"});
      queryClient.invalidateQueries({_queryKey: ['quotes', _'admin']});
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: "Failed to update quote: " + error.message, _variant: "destructive"});
    }
  });

  // Delete mutation
  const _deleteMutation = useMutation(_{_mutationFn: (id: string) => quoteRequestService.delete(id), _onSuccess: () => {
      toast({
        title: "Quote deleted", _description: "The quote request has been permanently deleted"});
      queryClient.invalidateQueries({_queryKey: ['quotes', _'admin']});
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: "Failed to delete quote: " + error.message, _variant: "destructive"});
    }
  });

  return {_quotes: filteredQuotes, _isLoading, _error, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _searchQuery, _setSearchQuery, _dateRange, _setDateRange, _updateStatus: (_id: string, _status: QuoteStatus) => 
      updateStatusMutation.mutate({ id, _status}),
    toggleArchive: (_id: string, _isArchived: boolean) => 
      toggleArchiveMutation.mutate({_id, _isArchived}),
    deleteQuote: (_id: string) => deleteMutation.mutate(id)};
};