<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import { useAuth  } from '@/hooks/useAuth';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import {useAuth} from '@/hooks/useAuth';
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import { useState  } from 'react';'
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';'
import { quoteRequestService  } from '@/services/quoteRequestService';'
import { useAuth  } from '@/hooks/useAuth';
'
import {useState} from 'react';'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';'
import {quoteRequestService} from '@/services/quoteRequestService';'
import {useAuth} from '@/hooks/useAuth';
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
'
import {useToast} from '@/hooks/use-toast';
export const useTalentQuotes = () => {;

  const { user } = useAuth();
  const { toast } = useToast();
<<<<<<< HEAD
=======


import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
<<<<<<< HEAD
import { useAuth  } from '@/hooks/useAuth';  const { toast } = useToast();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import { useAuth  } from '@/hooks/useAuth';  const { toast } = useToast();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useAuth  } from '@/hooks/useAuth';


<<<<<<< HEAD
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';

import {useToast} from '@/hooks/use-toast';
export const useTalentQuotes = () => {
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';

import {useToast} from '@/hooks/use-toast';
export const useTalentQuotes = () => {;
  const { user } = useAuth();
  const { toast } = useToast();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  // Get the talent's ID (user's ID)
  const talentId = user?.id |'';
  // Fetch quotes for this talent
  const { data: allQuotes = [], isLoading, error } = useQuery({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const queryClient = useQueryClient();'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');'
  // Get the talent's ID (user's ID)'
  const talentId = user?.id |'';
  // Fetch quotes for this talent;
  const { data: allQuotes = [], isLoading, error } = useQuery({'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    queryKey: ['quotestalent', talentId];



    enabled: !!talentId});
  // Count unread quotes;
  const unreadCount = allQuotes && allQuotes.filter('
    quote => quote && quote.status === 'new' && !quote && quote.viewed_at;
  ).length;
<<<<<<< HEAD
=======
    queryKey: ['quotestalent', talentId];

    queryFn: () => quoteRequestService && quoteRequestService.getByTalentId(talentId),

    enabled: !!talentId});
  // Count unread quotes
  const unreadCount = allQuotes && allQuotes.filter(
    quote => quote && quote.status === 'new' && !quote && quote.viewed_at
  ).length;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {
      return false
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import { useAuth } from '@/hooks/useAuth',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
<<<<<<< HEAD
=======
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {}
    // Status filter'
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {}
      return false;
'
import { useState } from 'react',;'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;'
import { quoteRequestService } from '@/services/quoteRequestService',;'
import { useAuth } from '@/hooks/useAuth',;'
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useToast } from '@/hooks/use-toast',;
export const useTalentQuotes = () => {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
<<<<<<< HEAD
  const queryClient = useQueryClient(),;'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;'
  // Get the talent's ID (user's ID);'
  const talentId = user?.id || '',;
  // Fetch quotes for this talent;
  const { data: allQuotes = [], isLoading, error } = useQuery({;'
=======
  const queryClient = useQueryClient(),;
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;
  // Get the talent's ID (user's ID);
  const talentId = user?.id || '',;
  // Fetch quotes for this talent;
  const { data: allQuotes = [], isLoading, error } = useQuery({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    queryKey: ['quotestalent', talentId],;
    queryFn: () => quoteRequestService.getByTalentId(talentId),;
    enabled: !!talentId}),;
  // Count unread quotes;
<<<<<<< HEAD
  const unreadCount = allQuotes.filter(;'
=======
  const unreadCount = allQuotes.filter(;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    quote => quote.status === 'new' && !quote.viewed_at;
  ).length,;
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes.filter((quote) => {;
<<<<<<< HEAD
    // Status filter;'
=======
    // Status filter;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (statusFilter !== 'all' && quote.status !== statusFilter) {;
      return false;


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    // Archive filter
    if (archiveFilter === 'active' && quote && quote.is_archived) {
      return false
    }
    if (archiveFilter === 'archived' && !quote && quote.is_archived) {
      return false
    }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    }
    // Archive filter'
    if (archiveFilter === 'active' && quote && quote.is_archived) {}
      return false;
    }'
    if (archiveFilter === 'archived' && !quote && quote.is_archived) {}
      return false;
    }

    return true;
  });
<<<<<<< HEAD
  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
<<<<<<< HEAD
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    
=======
    queryKey: ['quotestalent', talentId];    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    queryKey: ['quotestalent', talentId];    
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    return true
  });
  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return true
  }),

  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return true
  });
  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    onSuccess: (_, variables) => {
      let message = "Status updated";
      if (variables && variables.status === 'in_review') {
        message = "Quote marked as viewed"
      } else if (variables && variables.status === 'responded') {
        message = "Quote marked as responded"
      }
      toast({
        title: message
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Mark as viewed/responded mutation;
  const updateStatusMutation = useMutation({}
    onSuccess: (_, variables) => {}
      let message = "Status updated";'
      if (variables && variables.status === 'in_review') {"
        message = "Quote marked as viewed"'
      } else if (variables && variables.status === 'responded') {}
"
        message = "Quote marked as responded"
      }
      toast({}
        title: message"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: "The quote request status has been updated"
'
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    };
    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to update status: " + error && error.message,

<<<<<<< HEAD
=======
      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
<<<<<<< HEAD

=======
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error.message
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
=======
        description: "The quote request status has been updated"        variant: "destructive"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        description: "The quote request status has been updated"        variant: "destructive"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        description: "The quote request status has been updated"

      queryClient && queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error && error.message,

        variant: "destructive"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      })
    }
  });
<<<<<<< HEAD
  // Archive/Unarchive mutation
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const toggleArchiveMutation = useMutation({
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const toggleArchiveMutation = useMutation({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })

<<<<<<< HEAD
=======
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>
      quoteRequestService.toggleArchive(id, isArchived);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },
    onError: (error: Error) => {}
      toast({"
        title: "Error","
        description: "Failed to update status: " + error.message,"
=======
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update status: " + error.message,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"
      })
    }
  }),

<<<<<<< HEAD
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({}
=======
  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onSuccess: (_, variables) => {
=======
  const toggleArchiveMutation = useMutation({    onSuccess: (_, variables) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const toggleArchiveMutation = useMutation({    onSuccess: (_, variables) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    onSuccess: (_, variables) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived
          ? "The quote request has been archived"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          : "The quote request has been moved back to active quotes"
      });
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })



    };


    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error.message
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService && quoteRequestService.toggleArchive(id, isArchived);
    onSuccess: (_, variables) => {
      toast({
        title: variables && variables.isArchived ? "Quote archived" : "Quote unarchived",
        description: variables && variables.isArchived 
          ? "The quote request has been archived" 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          : "The quote request has been moved back to active quotes"
<<<<<<< HEAD
<<<<<<< HEAD
      });
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
<<<<<<< HEAD
    }
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

    onSuccess: (_, variables) => {}
      toast({"
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived"
          ? "The quote request has been archived""
          : "The quote request has been moved back to active quotes"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





    };


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    }
    };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onError: (error: Error) => {
      toast({
        title: "Error";
<<<<<<< HEAD
        description: "Failed to update quote: " + error.message
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to update quote: " + error.message;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
=======
          : "The quote request has been moved back to active quotes"    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          : "The quote request has been moved back to active quotes"    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      quoteRequestService && quoteRequestService.toggleArchive(id, isArchived);
    onSuccess: (_, variables) => {}
      toast({"
        title: variables && variables.isArchived ? "Quote archived" : "Quote unarchived",
        description: variables && variables.isArchived "
          ? "The quote request has been archived" "
          : "The quote request has been moved back to active quotes"
      });'
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    };
<<<<<<< HEAD
    onError: (error: Error) => {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Error";
        description: "Failed to update quote: " + error && error.message,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to update quote: " + error && error.message,


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from 'react';
import {use_query, use_mutation, useQueryClient} from '@tanstack / react - query';
import {quoteRequestService} from '@/services / quoteRequestService';
import {use_auth} from '@/hooks / use_auth';
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';
=======
'
import {useState} from 'react';'
import {use_query, use_mutation, useQueryClient} from '@tanstack / react - query';'
import {quoteRequestService} from '@/services / quoteRequestService';'
import {use_auth} from '@/hooks / use_auth';'
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {use_toast} from '@/hooks / use - toast';
export const useTalentQuotes = () =>: any {};
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const query_client = useQueryClient ();'
  const [status_filter, setStatusFilter] = useState < QuoteStatus | 'all'>('all');'
  const [archive_filter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
;'
  // Get the talent's ID (user's ID);'
  const talent_id = user?.id || '';
;
  // Fetch quotes for this talent;
  const { data: all_quotes = [], is_loading, error } = use_query ({'
    query_key: ['quotestalent', talent_id];
    query_fn: () => quoteRequestService.getByTalentId (talent_id),
    enabled: !!talent_id});
;
  // Count unread quotes;
  const unread_count = all_quotes.filter ('
    quote => quote.status === 'new' && !quote.viewed_at).length;
;
  // Filter quotes based on selected filters;
  const filtered_quotes = all_quotes.filter ((quote) => {}
    // Status filter;
    // Check condition;
if ( {) {}
  $2;
}
      return false;
    }
    // Archive filter;
    // Check condition;
if ( {) {}
  $2;
}
      return false;
    }
    // Check condition;
if ( {) {}
  $2;
}
      return false;
    }
    return true;
  });
;
  // Mark as viewed / responded mutation;
  const updateStatusMutation = use_mutation ({}
    mutation_fn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.update_status (id, status);
    on_success: (_, variables) => {"
      let message = "Status updated";
      // Check condition;
if ( {) {}
  $2;
}"
        message = "Quote marked as viewed";
      } else // Check condition;
if ( {) {}
  $2;
}"
        message = "Quote marked as responded";
      }
      toast ({}
        title: message,"
        description: "The quote request status has been updated";
      });'
      query_client.invalidate_queries ({ query_key: ['quotestalent', talent_id] });
    }
    on_error: (error: Error) => {}
      toast ({"
        title: "Error";"
        description: "Failed to update status: " + error.message,"
        variant: "destructive";
      });
    }
  });
;
  // Archive / Unarchive mutation;
  const toggleArchiveMutation = use_mutation ({}
    mutation_fn: ({ id, is_archived }: { id: string, is_archived: boolean }) =>;
      quoteRequestService.toggle_archive (id, is_archived);
    on_success: (_, variables) => {}
      toast ({"
        title: variables.is_archived ? "Quote archived" : "Quote unarchived",
        description: variables.is_archived;"
          ? "The quote request has been archived";"
          : "The quote request has been moved back to active quotes";
      });'
      query_client.invalidate_queries ({ query_key: ['quotestalent', talent_id] });
    }
    on_error: (error: Error) => {}
      toast ({"
        title: "Error";"
        description: "Failed to update quote: " + error.message,"
        variant: "destructive";
      });
    }
  });
;

  return {}
    quotes: filtered_quotes;
    unread_count;
    is_loading;
    error;
    status_filter;
    setStatusFilter;


  return {}
    toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) => 


    toggleArchive: (id: string, isArchived: boolean) => 

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },
=======
        title: "Error",
  description: "Failed to update quote: " + error && error.message,
        variant: "destructive"
      })
    }
  });    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        title: "Error",
  description: "Failed to update quote: " + error && error.message,
        variant: "destructive"
      })
    }
  });    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        description: "Failed to update quote: " + error && error.message,
        variant: "destructive"
      })
    }
  });
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
  return {
    quotes: filtered_quotes;
    unread_count;
    is_loading;
    error;
    status_filter;
    setStatusFilter;


    toggleArchive: (id: string, isArchived: boolean) => 

  return {
    toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) => 


    toggleArchive: (id: string, isArchived: boolean) => 

    },
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
=======

    },
    onError: (error: Error) => {}
      toast({"
        title: "Error","
        description: "Failed to update quote: " + error.message,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
      })
;
    return true;
  }),;
  // Mark as viewed/responded mutation;
  const updateStatusMutation = useMutation({;
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.updateStatus(id, status),;
    onSuccess: (_, variables) => {;"
      let message = "Status updated",;'
      if (variables.status === 'in_review') {;"
        message = "Quote marked as viewed";'
      } else if (variables.status === 'responded') {;"
        message = "Quote marked as responded";
      }
;
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD
        title: message,,
  description: "The quote request status has been updated";
=======
        title: message,;
        description: "The quote request status has been updated";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;
      toast({;
<<<<<<< HEAD
        title: "Error",,
  description: "Failed to update status: " + error.message,;
=======
        title: message,;"
        description: "The quote request status has been updated";
      }),;'
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;
      toast({;"
        title: "Error",;"
        description: "Failed to update status: " + error.message,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: "Failed to update status: " + error.message,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      });
    }
  }),;
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({;
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>;
      quoteRequestService.toggleArchive(id, isArchived),;
    onSuccess: (_, variables) => {;
<<<<<<< HEAD
      toast({;
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",;
        description: variables.isArchived;
          ? "The quote request has been archived";
=======
      toast({;"
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",;
        description: variables.isArchived;"
          ? "The quote request has been archived";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          : "The quote request has been moved back to active quotes";
      }),;'
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Error",,
  description: "Failed to update quote: " + error.message,;
=======
      toast({;"
        title: "Error",;"
        description: "Failed to update quote: " + error.message,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: "Failed to update quote: " + error.message,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    markAsViewed: (id: string) =>;'
      updateStatusMutation.mutate({ id, status: 'in_review' }),;
    markAsResponded: (id: string) =>;'
      updateStatusMutation.mutate({ id, status: 'responded' });
    toggleArchive: (id: string, isArchived: boolean) =>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toggleArchiveMutation.mutate({ id, isArchived })}
}

=======
<<<<<<< HEAD
=======
=======
      toggleArchiveMutation.mutate({ id, isArchived })}
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      toggleArchiveMutation.mutate({ id, isArchived })}
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toggleArchiveMutation.mutate({ id, isArchived })}
}

      toggleArchiveMutation.mutate({ id, isArchived })}
}

      toggleArchiveMutation.mutate({ id, isArchived })}
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      toggleArchiveMutation.mutate({ id, isArchived })}
}
      toggleArchiveMutation.mutate({ id, isArchived })}
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


      toggleArchiveMutation.mutate({ id, isArchived })}
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setArchiveFilter,
    markAsViewed: (id: string) => '
      updateStatusMutation && updateStatusMutation.mutate({ id, status: 'in_review' });
    markAsResponded: (id: string) => '
      updateStatusMutation && updateStatusMutation.mutate({ id, status: 'responded' });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived })}
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    archive_filter;
    setArchiveFilter,
    markAsViewed: (id: string) =>;'
      updateStatusMutation.mutate ({ id, status: 'in_review' });
    markAsResponded: (id: string) =>;'
      updateStatusMutation.mutate ({ id, status: 'responded' });
    toggle_archive: (id: string, is_archived: boolean) =>;
      toggleArchiveMutation.mutate ({ id, is_archived })}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import { useAuth } from '@/hooks/useAuth',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
import { useToast } from '@/hooks/use-toast',;
;
export const useTalentQuotes = () => {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const queryClient = useQueryClient(),;
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;
;
  // Get the talent's ID (user's ID);
  const talentId = user?.id || '',;
;
  // Fetch quotes for this talent;
  const { data:allQuotes = [], isLoading, error } = useQuery({;
    queryKey:['quotestalent', talentId],;
    queryFn:() => quoteRequestService.getByTalentId(talentId),;
    enabled:!!talentId}),;
;
  // Count unread quotes;
  const unreadCount = allQuotes.filter(;
    quote => quote.status === 'new' && !quote.viewed_at;
  ).length,;
;
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes.filter((quote) => {;
    // Status filter;
    if (statusFilter !== 'all' && quote.status !== statusFilter) {;
      return false,;
    }
    ;
    // Archive filter;
    if (archiveFilter === 'active' && quote.is_archived) {;
      return false,;
    }
    if (archiveFilter === 'archived' && !quote.is_archived) {;
      return false,;
    }
    ;
    return true,;
  }),;
;
  // Mark as viewed/responded mutation;
  const updateStatusMutation = useMutation({;
    mutationFn:({ id, status } { id:string, status:QuoteStatus }) => ;
      quoteRequestService.updateStatus(id, status),;
    onSuccess:(_, variables) => {;
      let message = "Status updated",;
      if (variables.status === 'in_review') {;
        message = "Quote marked as viewed",;
      } else if (variables.status === 'responded') {;
        message = "Quote marked as responded",;
      }
      ;
      toast({;
        title:message,;
        description:"The quote request status has been updated";
      }),;
      queryClient.invalidateQueries({ queryKey:['quotestalent', talentId] }),;
    },;
    onError:(error:Error) => {;
      toast({;
        title:"Error",;
        description:"Failed to update status:" + error.message,;
        variant:"destructive";
      }),;
    }
  }),;
;
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({;
    mutationFn:({ id, isArchived } { id:string, isArchived:boolean }) => ;
      quoteRequestService.toggleArchive(id, isArchived),;
    onSuccess:(_, variables) => {;
      toast({;
        title:variables.isArchived ? "Quote archived" :"Quote unarchived",;
        description:variables.isArchived ;
          ? "The quote request has been archived" ;
          :"The quote request has been moved back to active quotes";
      }),;
      queryClient.invalidateQueries({ queryKey:['quotestalent', talentId] }),;
    },;
    onError:(error:Error) => {;
      toast({;
        title:"Error",;
        description:"Failed to update quote:" + error.message,;
        variant:"destructive";
      }),;
    }
  }),;
;
  return {;
    quotes:filteredQuotes,;
    unreadCount,;
    isLoading,;
    error,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    markAsViewed:(id:string) => ;
      updateStatusMutation.mutate({ id, status:'in_review' }),;
    markAsResponded:(id:string) => ;
      updateStatusMutation.mutate({ id, status:'responded' }),;
    toggleArchive:(id:string, isArchived:boolean) => ;
      toggleArchiveMutation.mutate({ id, isArchived })},;},
 //Count unread quotes const unreadCount = allQuotes.filter (quote => quote.status === 'new' && !quote.viewed at) .length;
//Filter quotes based on selected filters const filteredQuotes = allQuotes.filter ( (quote) => {
  //Status filter if (statusFilter !== 'all' && quote.status !== statusFilter) {
  return true;
});
//Mark as viewed/responded mutation 
}toast ({
  title: message;
}
});
//Archive/Unarchive mutation 
}
});
      toggleArchiveMutation.mutate({ id, isArchived })}
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
