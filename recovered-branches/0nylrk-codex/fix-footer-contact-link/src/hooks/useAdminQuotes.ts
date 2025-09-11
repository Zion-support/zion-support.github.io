
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';


import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';


export const useAdminQuotes = () => {;


<<<<<<< HEAD
import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';

export const useAdminQuotes = () => {
export const useAdminQuotes = () => {;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
queryFn: () => quoteRequestService && quoteRequestService.getAll(),
=======

    queryFn: () => quoteRequestService && quoteRequestService.getAll(),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    queryFn: () => quoteRequestService && quoteRequestService.getAll(),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    enabled: true});
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {
      return false
<<<<<<< HEAD

<<<<<<< HEAD
    queryFn: () => quoteRequestService.getAll()
    enabled: true});
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
      const query = searchQuery.toLowerCase();
      if (
        !quote.requester_name.toLowerCase().includes(query) &&
        !quote.project_name.toLowerCase().includes(query) &&
        !quote.project_summary.toLowerCase().includes(query) &&
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query))
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ) {
        return false
      }
    }
    // Date range filter
    if (dateRange?.from) {
<<<<<<< HEAD
<<<<<<< HEAD
      const createdAt = new Date(quote.created_at);
      if (createdAt < dateRange.from) {
=======
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return false
      }
    }
    if (dateRange?.to) {
<<<<<<< HEAD
<<<<<<< HEAD
      const createdAt = new Date(quote.created_at);
      const endDate = new Date(dateRange.to);
      endDate.setHours(23, 59, 59, 999), // End of day
=======
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

    

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return true
  }),

  // Update quote status mutation
  const updateStatusMutation = useMutation({
<<<<<<< HEAD
<<<<<<< HEAD
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    onSuccess: () => {
      toast({
        title: "Status updated"
        description: "The quote request status has been updated"
<<<<<<< HEAD

      });
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error && error.message,
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
<<<<<<< HEAD
        description: "Failed to update status: " + error.message
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        description: "Failed to update status: " + error && error.message,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"
      })
    }
  });
  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
<<<<<<< HEAD
<<<<<<< HEAD
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>
      quoteRequestService.toggleArchive(id, isArchived);
=======

      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>
      quoteRequestService.toggleArchive(id, isArchived);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    onSuccess: (_, variables) => {
      toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived
          ? "The quote request has been archived"
          : "The quote request has been moved back to active quotes"
<<<<<<< HEAD
<<<<<<< HEAD
=======
      });
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
      });
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error && error.message,
<<<<<<< HEAD
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error.message
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService.delete(id),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    onSuccess: () => {
      toast({
        title: "Quote deleted"
        description: "The quote request has been permanently deleted"
      });


    };


<<<<<<< HEAD
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error.message
<<<<<<< HEAD
<<<<<<< HEAD
      });
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error && error.message,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    dateRange;
    setDateRange
    updateStatus: (id: string, status: QuoteStatus) =>
      updateStatusMutation.mutate({ id, status });
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    toggleArchive: (id: string, isArchived: boolean) => 
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    toggleArchive: (id: string, isArchived: boolean) => 

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setDateRange,
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
};
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    date_range;
    setDateRange,
    update_status: (id: string, status: QuoteStatus) =>;
      updateStatusMutation.mutate ({ id, status });
    toggle_archive: (id: string, is_archived: boolean) =>;
      toggleArchiveMutation.mutate ({ id, is_archived });
    delete_quote: (id: string) => delete_mutation.mutate (id)}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
import { useToast } from '@/components/ui/use-toast',;
import type { DateRange } from '@/types/dateRange',;
;
export const useAdminQuotes = () => {;
  const { toast } = useToast(),;
  const queryClient = useQueryClient(),;
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined),;
;
  // Fetch all quote requests;
  const { data:allQuotes = [], isLoading, error } = useQuery({;
    queryKey:['quotesadmin'],;
    queryFn:() => quoteRequestService.getAll(),;
    enabled:true}),;
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
    // Search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase(),;
      if (;
        !quote.requester_name.toLowerCase().includes(query) &&;
        !quote.project_name.toLowerCase().includes(query) &&;
        !quote.project_summary.toLowerCase().includes(query) &&;
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query));
      ) {;
        return false,;
      }
    }
    ;
    // Date range filter;
    if (dateRange?.from) {;
      const createdAt = new Date(quote.created_at),;
      if (createdAt < dateRange.from) {;
        return false,;
      }
    }
    ;
    if (dateRange?.to) {;
      const createdAt = new Date(quote.created_at),;
      const endDate = new Date(dateRange.to),;
      endDate.setHours(23, 59, 59, 999), // End of day;
      if (createdAt > endDate) {;
        return false,;
      }
    }
    ;
    return true,;
  }),;
;
  // Update quote status mutation;
  const updateStatusMutation = useMutation({;
    mutationFn:({ id, status } { id:string, status:QuoteStatus }) => ;
      quoteRequestService.updateStatus(id, status),;
    onSuccess:() => {;
      toast({;
        title:"Status updated",;
        description:"The quote request status has been updated";
      }),;
      queryClient.invalidateQueries({ queryKey:['quotesadmin'] }),;
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
      queryClient.invalidateQueries({ queryKey:['quotesadmin'] }),;
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
  // Delete mutation;
  const deleteMutation = useMutation({;
    mutationFn:(id:string) => quoteRequestService.delete(id),;
    onSuccess:() => {;
      toast({;
        title:"Quote deleted",;
        description:"The quote request has been permanently deleted";
      }),;
      queryClient.invalidateQueries({ queryKey:['quotesadmin'] }),;
    },;
    onError:(error:Error) => {;
      toast({;
        title:"Error",;
        description:"Failed to delete quote:" + error.message,;
        variant:"destructive";
      }),;
    }
  }),;
;
  return {;
    quotes:filteredQuotes,;
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
    updateStatus:(id:string, status:QuoteStatus) => ;
      updateStatusMutation.mutate({ id, status }),;
    toggleArchive:(id:string, isArchived:boolean) => ;
      toggleArchiveMutation.mutate({ id, isArchived }),;
    deleteQuote:(id:string) => deleteMutation.mutate(id)},;},
 //Filter quotes based on selected filters const filteredQuotes = allQuotes.filter ( (quote) => {
  //Status filter if (statusFilter !== 'all' && quote.status !== statusFilter) {
  if (!quote.requester name.toLowerCase () .includes (query) && !quote.project name.toLowerCase () .includes (query) && !quote.project summary.toLowerCase () .includes (query) && ! (quote.talent name && quote.talent name.toLowerCase () .includes (query) ) ) {
  
}return true;
});
//Update quote status mutation 
}
});
//Archive/Unarchive mutation 
}
});
// Delete mutation const deleteMutation = useMutation ({
  mutationFn: (id: string) => quoteRequestService.delete (id), onSuccess: () => {
  toast ({
  
}
});
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
