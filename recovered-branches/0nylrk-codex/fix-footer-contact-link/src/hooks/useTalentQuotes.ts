<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import { useAuth  } from '@/hooks/useAuth';
=======
=======


>>>>>>> main
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import {useAuth} from '@/hooks/useAuth';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';

import {useToast} from '@/hooks/use-toast';
export const useTalentQuotes = () => {;
=======


import type { QuoteRequest, QuoteStatus } from '@/types/quotes';

import {useToast} from '@/hooks/use-toast';
export const useTalentQuotes = () => {
>>>>>>> main
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  // Get the talent's ID (user's ID)
  const talentId = user?.id |'';
  // Fetch quotes for this talent
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotestalent', talentId];
<<<<<<< HEAD
    queryFn: () => quoteRequestService.getByTalentId(talentId)
    enabled: !!talentId});
  // Count unread quotes
  const unreadCount = allQuotes.filter(
    quote => quote.status === 'new' && !quote.viewed_at
  ).length;
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false
=======

    queryFn: () => quoteRequestService && quoteRequestService.getByTalentId(talentId),

    enabled: !!talentId});
  // Count unread quotes
  const unreadCount = allQuotes && allQuotes.filter(
    quote => quote && quote.status === 'new' && !quote && quote.viewed_at
  ).length;
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {
      return false

>>>>>>> main
=======
import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import { useAuth } from '@/hooks/useAuth',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
import { useToast } from '@/hooks/use-toast',;
export const useTalentQuotes = () => {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const queryClient = useQueryClient(),;
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;
  // Get the talent's ID (user's ID);
  const talentId = user?.id || '',;
  // Fetch quotes for this talent;
  const { data: allQuotes = [], isLoading, error } = useQuery({;
    queryKey: ['quotestalent', talentId],;
    queryFn: () => quoteRequestService.getByTalentId(talentId),;
    enabled: !!talentId}),;
  // Count unread quotes;
  const unreadCount = allQuotes.filter(;
    quote => quote.status === 'new' && !quote.viewed_at;
  ).length,;
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes.filter((quote) => {;
    // Status filter;
    if (statusFilter !== 'all' && quote.status !== statusFilter) {;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {
      return false
    }
    if (archiveFilter === 'archived' && !quote.is_archived) {
      return false
    }
<<<<<<< HEAD
    return true
  });
  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    // Archive filter
    if (archiveFilter === 'active' && quote && quote.is_archived) {
      return false
    }
    if (archiveFilter === 'archived' && !quote && quote.is_archived) {
      return false
    }

    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);

=======

>>>>>>> main
    
    return true
  }),

  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    onSuccess: (_, variables) => {
      let message = "Status updated",
      if (variables.status === 'in_review') {
        message = "Quote marked as viewed"
      } else if (variables.status === 'responded') {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    onSuccess: (_, variables) => {
      let message = "Status updated";
      if (variables && variables.status === 'in_review') {
        message = "Quote marked as viewed"
      } else if (variables && variables.status === 'responded') {
>>>>>>> main
        message = "Quote marked as responded"
      }
      toast({
        title: message
        description: "The quote request status has been updated"
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
<<<<<<< HEAD
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error.message
=======

      queryClient && queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error && error.message,

>>>>>>> main
        variant: "destructive"
      })
    }
  });
  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
<<<<<<< HEAD
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>
      quoteRequestService.toggleArchive(id, isArchived);
=======
=======

      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })

>>>>>>> main
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
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
    onSuccess: (_, variables) => {
      toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived
          ? "The quote request has been archived"
          : "The quote request has been moved back to active quotes"
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      });
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })


    };


>>>>>>> main
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error.message
<<<<<<< HEAD
=======
=======
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService && quoteRequestService.toggleArchive(id, isArchived);
    onSuccess: (_, variables) => {
      toast({
        title: variables && variables.isArchived ? "Quote archived" : "Quote unarchived",
        description: variables && variables.isArchived 
          ? "The quote request has been archived" 
          : "The quote request has been moved back to active quotes"
      });
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error && error.message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD
  return {
    quotes: filteredQuotes;
    unreadCount;
    isLoading;
    error;
    statusFilter;
    setStatusFilter;
    archiveFilter;
    setArchiveFilter
    markAsViewed: (id: string) =>
      updateStatusMutation.mutate({ id, status: 'in_review' });
    markAsResponded: (id: string) =>
      updateStatusMutation.mutate({ id, status: 'responded' });
<<<<<<< HEAD
    toggleArchive: (id: string, isArchived: boolean) =>
=======
    toggleArchive: (id: string, isArchived: boolean) => 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
import {useState} from 'react';
import {use_query, use_mutation, useQueryClient} from '@tanstack / react - query';
import {quoteRequestService} from '@/services / quoteRequestService';
import {use_auth} from '@/hooks / use_auth';
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';
import {use_toast} from '@/hooks / use - toast';
export const useTalentQuotes = () =>: any {
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const query_client = useQueryClient ();
  const [status_filter, setStatusFilter] = useState < QuoteStatus | 'all'>('all');
  const [archive_filter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
;
  // Get the talent's ID (user's ID);
  const talent_id = user?.id || '';
;
  // Fetch quotes for this talent;
  const { data: all_quotes = [], is_loading, error } = use_query ({
    query_key: ['quotestalent', talent_id];
    query_fn: () => quoteRequestService.getByTalentId (talent_id),
    enabled: !!talent_id});
;
  // Count unread quotes;
  const unread_count = all_quotes.filter (
    quote => quote.status === 'new' && !quote.viewed_at).length;
;
  // Filter quotes based on selected filters;
  const filtered_quotes = all_quotes.filter ((quote) => {
    // Status filter;
    // Check condition
if ( {) {
  $2
}
      return false;
    }
    // Archive filter;
    // Check condition
if ( {) {
  $2
}
      return false;
    }
    // Check condition
if ( {) {
  $2
}
      return false;
    }
    return true;
  });
;
  // Mark as viewed / responded mutation;
  const updateStatusMutation = use_mutation ({
    mutation_fn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.update_status (id, status);
    on_success: (_, variables) => {
      let message = "Status updated";
      // Check condition
if ( {) {
  $2
}
        message = "Quote marked as viewed";
      } else // Check condition
if ( {) {
  $2
}
        message = "Quote marked as responded";
      }
      toast ({
        title: message,
        description: "The quote request status has been updated";
      });
      query_client.invalidate_queries ({ query_key: ['quotestalent', talent_id] });
    }
    on_error: (error: Error) => {
      toast ({
        title: "Error";
        description: "Failed to update status: " + error.message,
        variant: "destructive";
      });
    }
  });
;
  // Archive / Unarchive mutation;
  const toggleArchiveMutation = use_mutation ({
    mutation_fn: ({ id, is_archived }: { id: string, is_archived: boolean }) =>;
      quoteRequestService.toggle_archive (id, is_archived);
    on_success: (_, variables) => {
      toast ({
        title: variables.is_archived ? "Quote archived" : "Quote unarchived",
        description: variables.is_archived;
          ? "The quote request has been archived";
          : "The quote request has been moved back to active quotes";
      });
      query_client.invalidate_queries ({ query_key: ['quotestalent', talent_id] });
    }
    on_error: (error: Error) => {
      toast ({
        title: "Error";
        description: "Failed to update quote: " + error.message,
        variant: "destructive";
      });
    }
  });
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    quotes: filtered_quotes;
    unread_count;
    is_loading;
    error;
    status_filter;
    setStatusFilter;


    toggleArchive: (id: string, isArchived: boolean) => 

>>>>>>> main
=======
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
      })
;
    return true;
  }),;
  // Mark as viewed/responded mutation;
  const updateStatusMutation = useMutation({;
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.updateStatus(id, status),;
    onSuccess: (_, variables) => {;
      let message = "Status updated",;
      if (variables.status === 'in_review') {;
        message = "Quote marked as viewed";
      } else if (variables.status === 'responded') {;
        message = "Quote marked as responded";
      }
;
      toast({;
        title: message,;
        description: "The quote request status has been updated";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",;
        description: "Failed to update status: " + error.message,;
        variant: "destructive";
      });
    }
  }),;
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({;
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>;
      quoteRequestService.toggleArchive(id, isArchived),;
    onSuccess: (_, variables) => {;
      toast({;
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",;
        description: variables.isArchived;
          ? "The quote request has been archived";
          : "The quote request has been moved back to active quotes";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",;
        description: "Failed to update quote: " + error.message,;
        variant: "destructive";
      });
    }
  }),;
  return {;
    quotes: filteredQuotes,;
    unreadCount,;
    isLoading,;
    error,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    markAsViewed: (id: string) =>;
      updateStatusMutation.mutate({ id, status: 'in_review' }),;
    markAsResponded: (id: string) =>;
      updateStatusMutation.mutate({ id, status: 'responded' });
    toggleArchive: (id: string, isArchived: boolean) =>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      toggleArchiveMutation.mutate({ id, isArchived })}
}

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      toggleArchiveMutation.mutate({ id, isArchived })}
}

=======
    setArchiveFilter,
    markAsViewed: (id: string) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status: 'in_review' });
    markAsResponded: (id: string) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status: 'responded' });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived })}
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    archive_filter;
    setArchiveFilter,
    markAsViewed: (id: string) =>;
      updateStatusMutation.mutate ({ id, status: 'in_review' });
    markAsResponded: (id: string) =>;
      updateStatusMutation.mutate ({ id, status: 'responded' });
    toggle_archive: (id: string, is_archived: boolean) =>;
      toggleArchiveMutation.mutate ({ id, is_archived })}
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
