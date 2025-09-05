<<<<<<< HEAD
import { useState } from 'react',
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',
import { quoteRequestService } from '@/services/quoteRequestService',
import { useAuth } from '@/hooks/useAuth',
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',
import { useToast } from '@/hooks/use-toast',
export const useTalentQuotes = () => {
  const { user } = useAuth(),
  const { toast } = useToast(),
  const queryClient = useQueryClient(),
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),

  // Get the talent's ID (user's ID)
  const talentId = user?.id || '',

  // Fetch quotes for this talent
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotestalent', talentId],
    queryFn: () => quoteRequestService.getByTalentId(talentId),
    enabled: !!talentId}),
=======
import type {_QuoteRequest, _QuoteStatus} from '@/types/quotes';

export const _useTalentQuotes = () => {_const { user} = useAuth();
  const {_toast} = useToast();
  const _queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');

  // Get the talent's ID (user's ID)
  const _talentId = user?.id || '';

  // Fetch quotes for this talent
  const {_data: allQuotes = [], _isLoading, _error} = useQuery(_{_queryKey: ['quotes', _'talent', _talentId], _queryFn: () => quoteRequestService.getByTalentId(talentId), _enabled: !!talentId});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Count unread quotes
  const _unreadCount = allQuotes.filter(
    quote => quote.status === 'new' && !quote.viewed_at
  ).length,

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
=======
      return false;}
    
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {_return false;}
    if (archiveFilter === 'archived' && !quote.is_archived) {_return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return true
  }),

  // Mark as viewed/responded mutation
<<<<<<< HEAD
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: (_, variables) => {
<<<<<<< HEAD
      let message = "Status updated",
      if (variables.status === 'in_review') {
        message = "Quote marked as viewed"
      } else if (variables.status === 'responded') {
        message = "Quote marked as responded"
=======
      let message = &quot;Status updated&quot;;
      if (variables.status === 'in_review') {
        message = &quot;Quote marked as viewed&quot;;
      } else if (variables.status === 'responded') {
        message = &quot;Quote marked as responded&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      toast({
        title: message,
<<<<<<< HEAD
        description: "The quote request status has been updated"
      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update status: " + error.message,
        variant: "destructive"
      })
=======
        description: &quot;The quote request status has been updated&quot;
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'talent', talentId] });
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
    onSuccess: (_, _variables) => {_let _message = "Status updated";
      if (variables.status === 'in_review') {
        message = "Quote marked as viewed";} else if (variables.status === 'responded') {_message = "Quote marked as responded";}
      
      toast({_title: message, _description: "The quote request status has been updated"});
      queryClient.invalidateQueries({_queryKey: ['quotes', _'talent', _talentId]});
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
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
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
      queryClient.invalidateQueries({ queryKey: ['quotes', 'talent', talentId] });
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
      queryClient.invalidateQueries({_queryKey: ['quotes', _'talent', _talentId]});
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: "Failed to update quote: " + error.message, _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

<<<<<<< HEAD
  return {
    quotes: filteredQuotes,
    unreadCount,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    markAsViewed: (id: string) => 
      updateStatusMutation.mutate({ id, status: 'in_review' }),
    markAsResponded: (id: string) => 
      updateStatusMutation.mutate({ id, status: 'responded' }),
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation.mutate({ id, isArchived })}
},
=======
  return {_quotes: filteredQuotes, _unreadCount, _isLoading, _error, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _markAsViewed: (_id: string) => 
      updateStatusMutation.mutate({ id, _status: 'in_review'}),
    markAsResponded: (_id: string) => 
      updateStatusMutation.mutate({_id, _status: 'responded'}),
    toggleArchive: (_id: string, _isArchived: boolean) => 
      toggleArchiveMutation.mutate({_id, _isArchived})};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
