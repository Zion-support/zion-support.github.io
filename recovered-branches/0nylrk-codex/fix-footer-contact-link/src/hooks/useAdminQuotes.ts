<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
=======
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';
<<<<<<< HEAD

export const useAdminQuotes = () => {
=======
export const useAdminQuotes = () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';


import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';


export const useAdminQuotes = () => {;


>>>>>>> main
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  // Fetch all quote requests
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotesadmin'];
<<<<<<< HEAD
    queryFn: () => quoteRequestService.getAll()
    enabled: true});
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false
=======

    queryFn: () => quoteRequestService && quoteRequestService.getAll(),

    enabled: true});
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
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
import { useToast } from '@/components/ui/use-toast',;
import type { DateRange } from '@/types/dateRange',;
export const useAdminQuotes = () => {;
  const { toast } = useToast(),;
  const queryClient = useQueryClient(),;
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined),;
  // Fetch all quote requests;
  const { data: allQuotes = [], isLoading, error } = useQuery({;
    queryKey: ['quotesadmin'],;
    queryFn: () => quoteRequestService.getAll(),;
    enabled: true}),;
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
<<<<<<< HEAD
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !quote.requester_name.toLowerCase().includes(query) &&
        !quote.project_name.toLowerCase().includes(query) &&
        !quote.project_summary.toLowerCase().includes(query) &&
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query))
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


    


    // Search filter
    if (searchQuery) {
      const query = searchQuery && searchQuery.toLowerCase();
      if (
        !quote && quote.requester_name.toLowerCase().includes(query) &&
        !quote && quote.project_name.toLowerCase().includes(query) &&
        !quote && quote.project_summary.toLowerCase().includes(query) &&
        !(quote && quote.talent_name && quote && quote.talent_name.toLowerCase().includes(query))
>>>>>>> main
      ) {
        return false
      }
    }
    // Date range filter
    if (dateRange?.from) {
<<<<<<< HEAD
      const createdAt = new Date(quote.created_at);
      if (createdAt < dateRange.from) {
=======
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
>>>>>>> main
        return false
      }
    }
    if (dateRange?.to) {
<<<<<<< HEAD
      const createdAt = new Date(quote.created_at);
      const endDate = new Date(dateRange.to);
      endDate.setHours(23, 59, 59, 999), // End of day
=======
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
>>>>>>> main
      if (createdAt > endDate) {
        return false
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

=======

    

>>>>>>> main
=======
;
    // Search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase(),;
      if (;
        !quote.requester_name.toLowerCase().includes(query) &&;
        !quote.project_name.toLowerCase().includes(query) &&;
        !quote.project_summary.toLowerCase().includes(query) &&;
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query));
      ) {;
        return false;
      }
    }
;
    // Date range filter;
    if (dateRange?.from) {;
      const createdAt = new Date(quote.created_at),;
      if (createdAt < dateRange.from) {;
        return false;
      }
    }
;
    if (dateRange?.to) {;
      const createdAt = new Date(quote.created_at),;
      const endDate = new Date(dateRange.to),;
      endDate.setHours(23, 59, 59, 999), // End of day;
      if (createdAt > endDate) {;
        return false;
      }
    }
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
    return true
  }),

  // Update quote status mutation
  const updateStatusMutation = useMutation({
<<<<<<< HEAD
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
    onSuccess: () => {
      toast({
        title: "Status updated"
        description: "The quote request status has been updated"
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
<<<<<<< HEAD
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error.message
=======

      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
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
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })

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
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
<<<<<<< HEAD
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error.message
=======
      });
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })

    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService && quoteRequestService.toggleArchive(id, isArchived);
    onSuccess: (_, variables) => {
      toast({
        title: variables && variables.isArchived ? "Quote archived" : "Quote unarchived",
        description: variables && variables.isArchived 
          ? "The quote request has been archived" 
          : "The quote request has been moved back to active quotes"
      });
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error && error.message,

>>>>>>> main
        variant: "destructive"
      })
    }
  });
=======
<<<<<<< HEAD
=======

>>>>>>> main
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
      })
    }
  }),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService.delete(id),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);
>>>>>>> main
    onSuccess: () => {
      toast({
        title: "Quote deleted"
        description: "The quote request has been permanently deleted"
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      });


    };


>>>>>>> main
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error.message
<<<<<<< HEAD
=======
=======
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error && error.message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD
  return {
    quotes: filteredQuotes;
    isLoading;
    error;
    statusFilter;
    setStatusFilter;
    archiveFilter;
    setArchiveFilter;
    searchQuery;
    setSearchQuery;
    dateRange;
    setDateRange
    updateStatus: (id: string, status: QuoteStatus) =>
      updateStatusMutation.mutate({ id, status });
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
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';
import {use_toast} from '@/components / ui / use - toast';
import type { DateRange } from '@/types / date_range';
export const useAdminQuotes = () =>: any {
  const { toast } = use_toast ();
  const query_client = useQueryClient ();
  const [status_filter, setStatusFilter] = useState < QuoteStatus | 'all'>('all');
  const [archive_filter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [search_query, setSearchQuery] = useState ('');
  const [date_range, setDateRange] = useState < DateRange | undefined>(undefined);
;
  // Fetch all quote requests;
  const { data: all_quotes = [], is_loading, error } = use_query ({
    query_key: ['quotesadmin'];
    query_fn: () => quoteRequestService.get_all (),
    enabled: true});
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
    // Search filter;
    // Check condition
if ( {) {
  $2
}
      const query = search_query.toLowerCase ();
      if (.includes (query) &&) {
  $2
}
        !quote.project_name.toLowerCase ().includes (query) &&;
        !quote.project_summary.toLowerCase ().includes (query) &&;
        !(quote.talent_name && quote.talent_name.toLowerCase ().includes (query))) {
        return false;
      }
    }
    // Date range filter;
    // Check condition
if ( {) {
  $2
}
      const created_at = new Date (quote.created_at);
      // Check condition
if ( {) {
  $2
}
        return false;
      }
    }
    // Check condition
if ( {) {
  $2
}
      const created_at = new Date (quote.created_at);
      const end_date = new Date (date_range.to);
      end_date.set_hours (23, 59, 59, 999), // End of day;
      // Check condition
if ( {) {
  $2
}
        return false;
      }
    }
    return true;
  });
;
  // Update quote status mutation;
  const updateStatusMutation = use_mutation ({
    mutation_fn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.update_status (id, status);
    on_success: () => {
      toast ({
        title: "Status updated",
        description: "The quote request status has been updated";
      });
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
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
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
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
  // Delete mutation;
  const delete_mutation = use_mutation ({
    mutation_fn: (id: string) => quoteRequestService.delete (id);
    on_success: () => {
      toast ({
        title: "Quote deleted",
        description: "The quote request has been permanently deleted";
      });
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
    }
    on_error: (error: Error) => {
      toast ({
        title: "Error";
        description: "Failed to delete quote: " + error.message,
        variant: "destructive";
      });
    }
  });
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    quotes: filtered_quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;


    toggleArchive: (id: string, isArchived: boolean) => 

>>>>>>> main
=======
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to delete quote: " + error.message,
        variant: "destructive"
      })
;
    return true;
  }),;
  // Update quote status mutation;
  const updateStatusMutation = useMutation({;
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.updateStatus(id, status),;
    onSuccess: () => {;
      toast({;
        title: "Status updated",;
        description: "The quote request status has been updated";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
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
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",;
        description: "Failed to update quote: " + error.message,;
        variant: "destructive";
      });
    }
  }),;
  // Delete mutation;
  const deleteMutation = useMutation({;
    mutationFn: (id: string) => quoteRequestService.delete(id),;
    onSuccess: () => {;
      toast({;
        title: "Quote deleted",;
        description: "The quote request has been permanently deleted";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",;
        description: "Failed to delete quote: " + error.message,;
        variant: "destructive";
      });
    }
  }),;
  return {;
    quotes: filteredQuotes,;
    isLoading,;
    error,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    searchQuery,;
    setSearchQuery,;
    dateRange,;
    setDateRange,;
    updateStatus: (id: string, status: QuoteStatus) =>;
      updateStatusMutation.mutate({ id, status }),;
    toggleArchive: (id: string, isArchived: boolean) =>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
}

<<<<<<< HEAD
=======
=======
    setDateRange,
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    date_range;
    setDateRange,
    update_status: (id: string, status: QuoteStatus) =>;
      updateStatusMutation.mutate ({ id, status });
    toggle_archive: (id: string, is_archived: boolean) =>;
      toggleArchiveMutation.mutate ({ id, is_archived });
    delete_quote: (id: string) => delete_mutation.mutate (id)}
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
