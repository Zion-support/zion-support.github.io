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

  // Fetch quotes for this talent,
const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotestalent', talentId],
    queryFn: () => quoteRequestService.getByTalentId(talentId),
    enabled: !!talentId}),
  // Count unread quotes,
const unreadCount = allQuotes.filter(
    quote => quote.status === 'new' && !quote.viewedat
  ).length,

  // Filter quotes based on selected filters,
const filteredQuotes = allQuotes.filter(_(quote) => {_// Status filter,
if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false
    }
    
    // Archive filter,
if (archiveFilter === 'active' && quote.isarchived) {
      return false
    }
    if (archiveFilter === 'archived' && !quote.isarchived) {
      return false
    }    
    return true
  }),

  // Mark as viewed/responded mutation,
const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: (_, variables) => {
      let message = "Status updated",
      if (variables.status === 'inreview') {
        message = "Quote marked as viewed"
      } else if (variables.status === 'responded') {
        message = "Quote marked as responded"      }
      
      toast({
        title: message,
        description: "The quote request status has been updated"
      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update status: " + error.message,
        variant: "destructive"
      })  const updateStatusMutation = useMutation(_{mutationFn: ({ id, status}: {id: string, status: QuoteStatus}) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: (_, variables) => {let message = "Status updated";
      if (variables.status === 'inreview') {
        message = "Quote marked as viewed"} else if (variables.status === 'responded') {message = "Quote marked as responded"}
      
      toast({title: message, description: "The quote request status has been updated"});
      queryClient.invalidateQueries({queryKey: ['quotes', _'talent', talentId]})
    },
    onError: (error: Error) => {toast({
        title: "Error", description: "Failed to update status: " + error.message, variant: "destructive"})
    }
  }),

  // Archive/Unarchive mutation,
const toggleArchiveMutation = useMutation({
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, variables) => {
      toast({
        title: variables.isArchived ? &quot;Quote archived&quot; : &quot;Quote unarchived&quot;,
        description: variables.isArchived 
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
      })  const toggleArchiveMutation = useMutation(_{mutationFn: ({ id, isArchived}: {id: string, isArchived: boolean}) => 
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, variables) => {toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived", description: variables.isArchived 
          ? "The quote request has been archived" 
          : "The quote request has been moved back to active quotes"});
      queryClient.invalidateQueries({queryKey: ['quotes', _'talent', talentId]})
    },
    onError: (error: Error) => {toast({
        title: "Error", description: "Failed to update quote: " + error.message, variant: "destructive"})
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
      updateStatusMutation.mutate({ id, status: 'inreview' }),
    markAsResponded: (id: string) => 
      updateStatusMutation.mutate({ id, status: 'responded' }),
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation.mutate({ id, isArchived })}
},