import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { quoteRequestService } from '@/services/quoteRequestService';
import { useAuth } from '@/hooks/useAuth';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/hooks/use-toast';
export const useTalentQuotes = () => {
  const { user } = useAuth($2);
  const { toast } = useToast($2);
  const queryClient = useQueryClient($2);
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),

  // Get the talent's ID (user's ID)
  const talentId = $2;
  // Fetch quotes for this talent
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotestalent', talentId],
    queryFn: () => quoteRequestService.getByTalentId($2);
    enabled: !!talentId}),

  // Count unread quotes
  const unreadCount = $2;
  // Filter quotes based on selected filters
  const filteredQuotes = $2;
  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus}) => 
      quoteRequestService.updateStatus($2);
    onSuccess: (_, variables) => {
      let message = $2;
      if (variables.status === 'in_review') {
        message = "Quote marked as viewed"
      } else if (variables.status === 'responded') {
        message = "Quote marked as responded"
      }
      
      toast($2);
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update status: " + error.message,
        variant: "destructive"
      })
    }
  }),

  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean}) => 
      quoteRequestService.toggleArchive($2);
    onSuccess: (_, variables) => {
      toast($2);
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
      })
    }
  }),

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
      updateStatusMutation.mutate($2);
    markAsResponded: (id: string) => 
      updateStatusMutation.mutate($2);
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation.mutate({ id, isArchived })}
},