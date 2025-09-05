import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { quoteRequestService } from '@/services/quoteRequestService';
import { useAuth } from '@/hooks/useAuth';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/hooks/use-toast';

export const useTalentQuotes = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');

  // Get the talent's ID (user's ID)
  const talentId = user?.id || '';

  // Fetch quotes for this talent
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotes', 'talent', talentId],
    queryFn: () => quoteRequestService.getByTalentId(talentId),
    enabled: !!talentId});

  // Count unread quotes
  const unreadCount = allQuotes.filter(
    quote => quote.status === 'new' && !quote.viewed_at
  ).length;

  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false;
    }
    
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {
      return false;
    }
    if (archiveFilter === 'archived' && !quote.is_archived) {
      return false;
    }
    
    return true;
  });

  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: (_, variables) => {
      let message = &quot;Status updated&quot;;
      if (variables.status === 'in_review') {
        message = &quot;Quote marked as viewed&quot;;
      } else if (variables.status === 'responded') {
        message = &quot;Quote marked as responded&quot;;
      }
      
      toast({
        title: message,
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
    }
  });

  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
    mutationFn: ({ id, isArchived }: { id: string; isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, variables) => {
      toast({
        title: variables.isArchived ? &quot;Quote archived&quot; : &quot;Quote unarchived&quot;,
        description: variables.isArchived 
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
    }
  });

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
      toggleArchiveMutation.mutate({ id, isArchived })};
};