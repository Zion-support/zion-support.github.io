<<<<<<< HEAD
import { useState } from 'react',
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',
import { quoteRequestService } from '@/services/quoteRequestService',
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',
import { useToast } from '@/components/ui/use-toast',
import type { DateRange } from '@/types/dateRange',
export const useAdminQuotes = () => {
  const { toast } = useToast(),
  const queryClient = useQueryClient(),
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined),

  // Fetch all quote requests
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotesadmin'],
    queryFn: () => quoteRequestService.getAll(),
    enabled: true}),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter quotes based on selected filters
  const _filteredQuotes = allQuotes.filter(_(quote) => {_// Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
<<<<<<< HEAD
      return false
    }
    
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {
      return false
    }
    if (archiveFilter === 'archived' && !quote.is_archived) {
      return false
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase(),
=======
      return false;}
    
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {_return false;}
    if (archiveFilter === 'archived' && !quote.is_archived) {_return false;}
    
    // Search filter
    if (searchQuery) {_const _query = searchQuery.toLowerCase();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      if (
        !quote.requester_name.toLowerCase().includes(query) &&
        !quote.project_name.toLowerCase().includes(query) &&
        !quote.project_summary.toLowerCase().includes(query) &&
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query))
      ) {
<<<<<<< HEAD
        return false
      }
    }
    
    // Date range filter
    if (dateRange?.from) {
      const createdAt = new Date(quote.created_at),
      if (createdAt < dateRange.from) {
        return false
      }
    }
    
    if (dateRange?.to) {
      const createdAt = new Date(quote.created_at),
      const endDate = new Date(dateRange.to),
      endDate.setHours(23, 59, 59, 999), // End of day
      if (createdAt > endDate) {
        return false
      }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    return true
  }),

  // Update quote status mutation
<<<<<<< HEAD
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: () => {
      toast({
<<<<<<< HEAD
        title: "Status updated",
        description: "The quote request status has been updated"
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update status: " + error.message,
        variant: "destructive"
      })
=======
        title: &quot;Status updated&quot;,
        description: &quot;The quote request status has been updated&quot;
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'admin'] });
    },
    onError: (error: Error) => {
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update status: &quot; + error.message,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _updateStatusMutation = useMutation(_{_mutationFn: ({ id, _status}: {_id: string; status: QuoteStatus}) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: () => {_toast({
        title: "Status updated", _description: "The quote request status has been updated"});
      queryClient.invalidateQueries({_queryKey: ['quotes', _'admin']});
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: "Failed to update status: " + error.message, _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

  // Archive/Unarchive mutation
<<<<<<< HEAD
  const toggleArchiveMutation = useMutation({
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, variables) => {
      toast({
        title: variables.isArchived ? &quot;Quote archived&quot; : &quot;Quote unarchived&quot;,
        description: variables.isArchived 
<<<<<<< HEAD
          ? "The quote request has been archived" 
          : "The quote request has been moved back to active quotes"
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
      })
=======
          ? &quot;The quote request has been archived&quot; 
          : &quot;The quote request has been moved back to active quotes&quot;
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'admin'] });
    },
    onError: (error: Error) => {
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update quote: &quot; + error.message,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

  // Delete mutation
  const _deleteMutation = useMutation(_{_mutationFn: (id: string) => quoteRequestService.delete(id), _onSuccess: () => {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Quote deleted",
        description: "The quote request has been permanently deleted"
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to delete quote: " + error.message,
        variant: "destructive"
      })
=======
        title: &quot;Quote deleted&quot;,
        description: &quot;The quote request has been permanently deleted&quot;
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'admin'] });
    },
    onError: (error: Error) => {
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to delete quote: &quot; + error.message,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        title: "Quote deleted", _description: "The quote request has been permanently deleted"});
      queryClient.invalidateQueries({_queryKey: ['quotes', _'admin']});
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: "Failed to delete quote: " + error.message, _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

<<<<<<< HEAD
  return {
    quotes: filteredQuotes,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    searchQuery,
    setSearchQuery,
    dateRange,
    setDateRange,
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation.mutate({ id, status }),
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation.mutate({ id, isArchived }),
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
},
=======
  return {_quotes: filteredQuotes, _isLoading, _error, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _searchQuery, _setSearchQuery, _dateRange, _setDateRange, _updateStatus: (_id: string, _status: QuoteStatus) => 
      updateStatusMutation.mutate({ id, _status}),
    toggleArchive: (_id: string, _isArchived: boolean) => 
      toggleArchiveMutation.mutate({_id, _isArchived}),
    deleteQuote: (_id: string) => deleteMutation.mutate(id)};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
