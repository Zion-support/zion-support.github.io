
<<<<<<< HEAD

import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';


import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';


export const useAdminQuotes = () => {;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';

export const useAdminQuotes = () => {
<<<<<<< HEAD
export const useAdminQuotes = () => {;
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  // Fetch all quote requests
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotesadmin'];

    queryFn: () => quoteRequestService && quoteRequestService.getAll(),

    enabled: true});
=======
export const useAdminQuotes = () => {;    enabled: true});
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {
<<<<<<< HEAD
      return false

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
      ) {
        return false
      }
    }
    // Date range filter
    if (dateRange?.from) {
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
        return false
      }
    }
    if (dateRange?.to) {
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
      if (createdAt > endDate) {
        return false
      }
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
    



    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
=======
      return false    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>     mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      quoteRequestService && quoteRequestService.updateStatus(id, status);
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
    onSuccess: () => {
      toast({
        title: "Status updated"
        description: "The quote request status has been updated"

<<<<<<< HEAD
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error && error.message,

        variant: "destructive"
      })
    }
  });
  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({

      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })

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


    onSuccess: (_, variables) => {
=======
    };
    onError: (error: Error) => {
      toast({
        title: "Error",
  description: "Failed to update status: " + error && error.message,    onSuccess: (_, variables) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived
          ? "The quote request has been archived"
          : "The quote request has been moved back to active quotes"
      });
<<<<<<< HEAD
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

        variant: "destructive"
      })
    }
  });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
      })
    }
  }),


  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService.delete(id),
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);
    onSuccess: () => {
      toast({
        title: "Quote deleted"
        description: "The quote request has been permanently deleted"
      });


    };


    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error.message
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error && error.message,
        variant: "destructive"
      })
    }
  });
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

  return {
    toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) => 


    toggleArchive: (id: string, isArchived: boolean) => 

    },
=======
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })        variant: "destructive"
      })
    }
  });      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error",
  description: "Failed to delete quote: " + error && error.message,        variant: "destructive"
      })
    }
  });    },
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title: "Status updated",;
        description: "The quote request status has been updated";
=======
        title: "Status updated",,
  description: "The quote request status has been updated";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
<<<<<<< HEAD
        title: "Error",;
        description: "Failed to update status: " + error.message,;
=======
        title: "Error",,
  description: "Failed to update status: " + error.message,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",;
        description: variables.isArchived;
=======
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",,
  description: variables.isArchived;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          ? "The quote request has been archived";
          : "The quote request has been moved back to active quotes";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
<<<<<<< HEAD
        title: "Error",;
        description: "Failed to update quote: " + error.message,;
=======
        title: "Error",,
  description: "Failed to update quote: " + error.message,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        variant: "destructive";
      });
    }
  }),;
  // Delete mutation;
  const deleteMutation = useMutation({;
    mutationFn: (id: string) => quoteRequestService.delete(id),;
    onSuccess: () => {;
      toast({;
<<<<<<< HEAD
        title: "Quote deleted",;
        description: "The quote request has been permanently deleted";
=======
        title: "Quote deleted",,
  description: "The quote request has been permanently deleted";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
<<<<<<< HEAD
        title: "Error",;
        description: "Failed to delete quote: " + error.message,;
=======
        title: "Error",,
  description: "Failed to delete quote: " + error.message,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
}

<<<<<<< HEAD
    setDateRange,
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
};
<<<<<<< HEAD
    date_range;
    setDateRange,
    update_status: (id: string, status: QuoteStatus) =>;
      updateStatusMutation.mutate ({ id, status });
    toggle_archive: (id: string, is_archived: boolean) =>;
      toggleArchiveMutation.mutate ({ id, is_archived });
    delete_quote: (id: string) => delete_mutation.mutate (id)}
}
;
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
