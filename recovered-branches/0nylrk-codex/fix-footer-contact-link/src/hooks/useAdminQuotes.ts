import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';


pr-12325
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';

export const useAdminQuotes = () => {
export const useAdminQuotes = () => {;
  const { toast } = useToast();
  const queryClient = useQueryClient();'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');'
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  // Fetch all quote requests;
  const { data: allQuotes = [], isLoading, error } = useQuery({'
    queryKey: ['quotesadmin'];

    enabled: true});

export const useAdminQuotes = () => {;    enabled: true});
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

queryFn: () => quoteRequestService && quoteRequestService.getAll(),
    enabled: true});
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {
      return false

import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
import { useToast } from '@/components/ui/use-toast',;

import type { DateRange } from '@/types/dateRange',;
export const useAdminQuotes = () => {;
  const { toast } = useToast(),;
  const queryClient = useQueryClient(),;'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;'
  const [searchQuery, setSearchQuery] = useState(''),;
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined),;
  // Fetch all quote requests;
  const { data: allQuotes = [], isLoading, error } = useQuery({;'
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
// Status filter;'
    if (statusFilter !== 'all' && quote.status !== statusFilter) {;
      return false;

    }
    // Archive filter'
    if (archiveFilter === 'active' && quote && quote.is_archived) {}
      return false;
    }'
    if (archiveFilter === 'archived' && !quote && quote.is_archived) {}
      return false;
    }
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
    // Search filter
    if (searchQuery) {
      const query = searchQuery && searchQuery.toLowerCase();
      if (
        !quote && quote.requester_name.toLowerCase().includes(query) &&
        !quote && quote.project_name.toLowerCase().includes(query) &&
        !quote && quote.project_summary.toLowerCase().includes(query) &&
        !(quote && quote.talent_name && quote && quote.talent_name.toLowerCase().includes(query))
) {}
        return false;
      }
    }
    // Date range filter;
    if (dateRange?.from) {}
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {}
        return false;
      }
    }
    if (dateRange?.to) {}
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day;
      if (createdAt > endDate) {}
        return false;
      }
    }
      ) {
        return false
      }
    }
    // Date range filter
    if (dateRange?.from) {
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
const createdAt = new Date(quote.created_at);
      if (createdAt < dateRange.from) {
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
        return false
      }
    }
    if (dateRange?.to) {
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
const createdAt = new Date(quote.created_at);
      const endDate = new Date(dateRange.to);
      endDate.setHours(23, 59, 59, 999), // End of day
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
      if (createdAt > endDate) {
        return false
      }
    }

return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);

      return false    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>     mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 

import {useState} from 'react';''
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';''
import {quoteRequestService} from '@/services/quoteRequestService';''
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';''
import { useToast } from '@/components/ui/use-toast';''
import type { DateRange } from '@/types/dateRange';'
export const useAdminQuotes = () => {;

'
import {useState} from 'react';''
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';''
import {quoteRequestService} from '@/services/quoteRequestService';''
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';''
import { useToast } from '@/components/ui/use-toast';''
import type { DateRange } from '@/types/dateRange';'
export const useAdminQuotes = () => {
export const useAdminQuotes = () => {;
  const { toast } = useToast();
  const queryClient = useQueryClient();'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');'
</QuoteStatus>'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');''
  const [searchQuery, setSearchQuery] = useState('');'
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
</DateRange>'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;'
</QuoteStatus>'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;''
  const [searchQuery, setSearchQuery] = useState(''),;'
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined),;
</DateRange>
      if (createdAt < dateRange && dateRange.from) {
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
        return false;
      }
    }
    if (dateRange?.to) {
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day;
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day;
      if (createdAt > endDate) {
        return false;
      }
    }

    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);

;
    // Search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase(),;
      if (;)
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
      quoteRequestService.updateStatus(id, status),

    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      return false    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>     mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      return false    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>     mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 


    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 

    return true;
  });
  // Update quote status mutation;
  const updateStatusMutation = useMutation({)
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
    onSuccess: () => {
      toast({
        title: "Status updated"
        description: "The quote request status has been updated"

});
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error && error.message,

"
        variant: "destructive"
      })
    }
  });
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({}
    },
    onError: (error: Error) => {}
      toast({"
        title: "Error","
        description: "Failed to update status: " + error.message,"
        variant: "destructive"
      })
    }
  }),

  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({}
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),

    onSuccess: (_, variables) => {
        title: "Error",
  description: "Failed to update status: " + error && error.message,    onSuccess: (_, variables) => {
        title: "Error",
  description: "Failed to update status: " + error && error.message,    onSuccess: (_, variables) => {
      toast({

    onSuccess: (_, variables) => {}
      toast({"
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived"
          ? "The quote request has been archived""
          : "The quote request has been moved back to active quotes"
});
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })


    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService && quoteRequestService.toggleArchive(id, isArchived);
    onSuccess: (_, variables) => {}
      toast({"
        title: variables && variables.isArchived ? "Quote archived" : "Quote unarchived",
        description: variables && variables.isArchived "
          ? "The quote request has been archived" "
          : "The quote request has been moved back to active quotes"
      });'
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to update quote: " + error && error.message,

"
        variant: "destructive"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })        variant: "destructive"
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
}),

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);

    onSuccess: () => {}
      toast({"
        title: "Quote deleted""
        description: "The quote request has been permanently deleted"
}),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
      });

    };



}),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error.message

    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to delete quote: " + error.message;
'
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to delete quote: " + error && error.message,

"
});
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

      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
}
import {useState} from 'react';
import {use_query, use_mutation, useQueryClient} from '@tanstack / react - query';
import {quoteRequestService} from '@/services / quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';
import {use_toast} from '@/components / ui / use - toast';

import type { DateRange } from '@/types / date_range';
export const useAdminQuotes = () =>: any {};
  const { toast } = use_toast ();
  const query_client = useQueryClient ();'
  const [status_filter, setStatusFilter] = useState < QuoteStatus | 'all'>('all');'
  const [archive_filter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');'
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
const { data: all_quotes = [], is_loading, error } = use_query ({'
    query_key: ['quotesadmin'];
    query_fn: () => quoteRequestService.get_all (),
    enabled: true});
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
    // Search filter;
// Check condition;
if ( {) {}
  $2;
}
      const query = search_query.toLowerCase ();
      if (.includes (query) &&) {}
  $2;
}
        !quote.project_name.toLowerCase ().includes (query) &&;
        !quote.project_summary.toLowerCase ().includes (query) &&;
        !(quote.talent_name && quote.talent_name.toLowerCase ().includes (query))) {}
        return false;
      }
    }
    // Date range filter;
// Check condition;
if ( {) {}
  $2;
}
      const created_at = new Date (quote.created_at);
      // Check condition;
if ( {) {}
  $2;
}
        return false;
      }
    }
// Check condition;
if ( {) {}
  $2;
}
      const created_at = new Date (quote.created_at);
      const end_date = new Date (date_range.to);
      end_date.set_hours (23, 59, 59, 999), // End of day;
// Check condition;
if ( {) {}
  $2;
}
        return false;
      }
    }
    return true;
  });
;
  // Update quote status mutation;
const updateStatusMutation = use_mutation ({}
    mutation_fn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.update_status (id, status);
    on_success: () => {}
      toast ({"
        title: "Status updated","
        description: "The quote request status has been updated";
      });'
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
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
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
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
  // Delete mutation;
const delete_mutation = use_mutation ({}
    mutation_fn: (id: string) => quoteRequestService.delete (id);
    on_success: () => {}
      toast ({"
        title: "Quote deleted","
        description: "The quote request has been permanently deleted";
      });'
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
    }
    on_error: (error: Error) => {}
      toast ({"
        title: "Error";"
        description: "Failed to delete quote: " + error.message,"
        variant: "destructive";
      });
    }
  });
;
return {}
    quotes: filtered_quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;

return {}
    toggleArchive: (id: string, isArchived: boolean) => 

toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) =>
  return {
    toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) => 

    toggleArchive: (id: string, isArchived: boolean) => 

    },
    },
  });    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to delete quote: " + error.message,

    },
    onError: (error: Error) => {}
      toast({"
        title: "Error","
        description: "Failed to delete quote: " + error.message,"
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
        title: "Status updated",,
  description: "The quote request status has been updated";
      }),;
export const useAdminQuotes = () => {;

export const useAdminQuotes = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');

  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [searchQuery, setSearchQuery] = useState();
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all'),;

  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active'),;
  const [searchQuery, setSearchQuery] = useState(),;
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined),;

      if (createdAt < dateRange && dateRange.from) {
      const createdAt = new Date(quote && quote.created_at);
        return false;
      }
    if (dateRange?.to) {
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day;
      if (createdAt > endDate) {

;
    // Search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase(),;
      if (;)
        !quote.requester_name.toLowerCase().includes(query) &&;
        !quote.project_name.toLowerCase().includes(query) &&;
        !quote.project_summary.toLowerCase().includes(query) &&;
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query));
      ) {;
    // Date range filter;
    if (dateRange?.from) {;
      const createdAt = new Date(quote.created_at),;
      if (createdAt < dateRange.from) {;
    if (dateRange?.to) {;
      const endDate = new Date(dateRange.to),;
      endDate.setHours(23, 59, 59, 999), // End of day;
      if (createdAt > endDate) {;

    return true;
  });
  // Update quote status mutation;
  const updateStatusMutation = useMutation({)
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);
      quoteRequestService.updateStatus(id, status),
    onSuccess: () => {
      toast({

      toast({'
        title: "Status updated"","
  description: "The quote request status has been updated"")"
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
        title: "Error";","
  description: "Failed to update status: " + error && error.message,""
        variant: "destructive"")
      })
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({
)
      }),"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    },
        title: "Error",""
        description: "Failed to update status: " + error.message,""
  }),

  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({)
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),

    onSuccess: (_, variables) => {
      toast({"
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"",
  description: variables.isArchived;"
          ? "The quote request has been archived"""
          : "The quote request has been moved back to active quotes"")
      });"
      quoteRequestService && quoteRequestService.toggleArchive(id, isArchived);
        title: variables && variables.isArchived ? "Quote archived" : "Quote unarchived","
        description: variables && variables.isArchived;"
  description: "Failed to update quote: " + error && error.message,""
        variant: "destructive"")

      })
    }
  });    },
    onError: (error: Error) => {

      toast({"
        title: "Error",""
        description: "Failed to update quote: " + error.message,""

  // Delete mutation;
  const deleteMutation = useMutation({)
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);
  // Delete mutation;
    mutationFn: (id: string) => quoteRequestService.delete(id),
  // Delete mutation;
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);,
        title: "Quote deleted"","
  description: "The quote request has been permanently deleted"")

  description: "Failed to delete quote: " + error.message;")"
  description: "Failed to delete quote: " + error && error.message,""
import {use_query, use_mutation, useQueryClient} from '@tanstack / react - query';
import {quoteRequestService} from '@/services / quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';
import {use_toast} from '@/components / ui / use - toast';
import type { DateRange } from '@/types / date_range';
export const useAdminQuotes = () =>: any {
  // TODO: Implement
  const { toast } = use_toast ();
  const query_client = useQueryClient ();
  const [status_filter, setStatusFilter] = useState < QuoteStatus | 'all'>('all');
  const [archive_filter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [search_query, setSearchQuery] = useState ();
  const [date_range, setDateRange] = useState < DateRange | undefined>(undefined);
  // Fetch all quote requests;
  const { data: all_quotes = [], is_loading, error } = use_query ({
    query_key: ['quotesadmin'];',)
  query_fn: () => quoteRequestService.get_all (),
    enabled: true});
  // Filter quotes based on selected filters;
  const filtered_quotes = all_quotes.filter ((quote) => {
    // Status filter;
    // Check condition;
if ( {) {
  $2;
    // Archive filter;
    // Check condition;
    // Check condition;
    // Search filter;
    // Check condition;
      const query = search_query.toLowerCase ();
      if (.includes (query) &&) {
        !quote.project_name.toLowerCase ().includes (query) &&;
        !quote.project_summary.toLowerCase ().includes (query) &&;
        !(quote.talent_name && quote.talent_name.toLowerCase ().includes (query))) {
    // Date range filter;
    // Check condition;
      const created_at = new Date (quote.created_at);
      // Check condition;
    // Check condition;
      const end_date = new Date (date_range.to);
      end_date.set_hours (23, 59, 59, 999), // End of day;
      // Check condition;
  // Update quote status mutation;
  const updateStatusMutation = use_mutation ({)
    mutation_fn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.update_status (id, status);
    on_success: () => {
      toast ({
        title: "Status updated",""
        description: "The quote request status has been updated";")
      query_client.invalidate_queries ({ query_key: ['quotesadmin'] });
    on_error: (error: Error) => {
        variant: "destructive";")
  // Archive / Unarchive mutation;
  const toggleArchiveMutation = use_mutation ({)
    mutation_fn: ({ id, is_archived }: { id: string, is_archived: boolean }) =>;
      quoteRequestService.toggle_archive (id, is_archived);
    on_success: (_, variables) => {
      toast ({"
        title: variables.is_archived ? "Quote archived" : "Quote unarchived","
        description: variables.is_archived;"
          ? "The quote request has been archived";""
          : "The quote request has been moved back to active quotes";")
  // Delete mutation;
  const delete_mutation = use_mutation ({)
    mutation_fn: (id: string) => quoteRequestService.delete (id);,
        title: "Quote deleted",""
        description: "The quote request has been permanently deleted";")
  description: "Failed to delete quote: " + error.message,""
  return {
  // TODO: Implement
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

  // TODO: Implement
    toggleArchive: (id: string, isArchived: boolean) =>,
  toggleArchive: (id: string, isArchived: boolean) => ,

  }),;
  // Update quote status mutation;
    },
    onError: (error: Error) => {
      toast({"
        title: "Error",""
        description: "Failed to delete quote: " + error.message,""
        variant: "destructive"")

      })
;
    return true;
  }),;
  // Update quote status mutation;

  const updateStatusMutation = useMutation({;)
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.updateStatus(id, status),;
    onSuccess: () => {;
      toast({;"
        title: "Status updated",;""
      }),;"
pr-12325
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",,
  description: "Failed to update status: " + error.message,;
        title: "Error",,
  description: "Failed to update status: " + error.message,;
        variant: "destructive";
        description: "The quote request status has been updated";")
      }),;"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });'
    },;
    onError: (error: Error) => {;
      toast({;'
        title: "Error",;""
        description: "Failed to update status: " + error.message,;""
        variant: "destructive";")

      });
    }
  }),;
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({;
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>;
      quoteRequestService.toggleArchive(id, isArchived),;
    onSuccess: (_, variables) => {;
toast({;
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",,
  description: variables.isArchived;
          ? "The quote request has been archived";
          : "The quote request has been moved back to active quotes";
      }),;'
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
toast({;
        title: "Error",,
  description: "Failed to update quote: " + error.message,;
        title: "Error",,
  description: "Failed to update quote: " + error.message,;
        variant: "destructive";

  const toggleArchiveMutation = useMutation({;)
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>;
      quoteRequestService.toggleArchive(id, isArchived),;
    onSuccess: (_, variables) => {;
      toast({;"
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",;"
        description: variables.isArchived;"
          ? "The quote request has been archived";""
          : "The quote request has been moved back to active quotes";")
      }),;"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });'
    },;
    onError: (error: Error) => {;
      toast({;'
        title: "Error",;""
        description: "Failed to update quote: " + error.message,;""
        variant: "destructive";")

      });
    }
  }),;
  // Delete mutation;
  const deleteMutation = useMutation({;
    mutationFn: (id: string) => quoteRequestService.delete(id),;
    onSuccess: () => {;
toast({;
        title: "Quote deleted",,
  description: "The quote request has been permanently deleted";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",,
  description: "Failed to delete quote: " + error.message,;
        title: "Error",,
  description: "Failed to delete quote: " + error.message,;
        variant: "destructive";
  const deleteMutation = useMutation({;)
    mutationFn: (id: string) => quoteRequestService.delete(id),;
    onSuccess: () => {;

      toast({;"
        title: "Quote deleted",;""
        description: "The quote request has been permanently deleted";")
      }),;"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });'
    },;
    onError: (error: Error) => {;
      toast({;'
        title: "Error",;""
        description: "Failed to delete quote: " + error.message,;""
        variant: "destructive";")

      });
    }
  }),;
        title: "Error",;""
        description: "Failed to update status: " + error.message,;""
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({;)
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>;
      quoteRequestService.toggleArchive(id, isArchived),;
    onSuccess: (_, variables) => {;
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",;"
        description: "Failed to update quote: " + error.message,;""
  // Delete mutation;
  const deleteMutation = useMutation({;)
    mutationFn: (id: string) => quoteRequestService.delete(id),;
        title: "Quote deleted",;""
        description: "Failed to delete quote: " + error.message,;""
pr-12325
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
    setDateRange,;}
    updateStatus: (id: string, status: QuoteStatus) =>;}
      updateStatusMutation.mutate({ id, status }),;
    toggleArchive: (id: string, isArchived: boolean) =>;


      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
}

    setDateRange,
    setDateRange,
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
};
    date_range;

      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}

    setDateRange,
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
    date_range;
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
  const { toast } = useToast(),;
  const queryClient = useQueryClient(),;

        return false,;
    return true,;
  // Update quote status mutation;
    mutationFn:({ id, status } { id:string, status:QuoteStatus }) => ;
    onSuccess:() => {;
        title:"Status updated",;""
        description:"The quote request status has been updated";")
      queryClient.invalidateQueries({ queryKey:['quotesadmin'] }),;
    onError:(error:Error) => {;
        title:"Error",;""
        description:"Failed to update status:" + error.message,;""
        variant:"destructive";")
  // Archive/Unarchive mutation;
    mutationFn:({ id, isArchived } { id:string, isArchived:boolean }) => ;
    onSuccess:(_, variables) => {;
        title:variables.isArchived ? "Quote archived" :"Quote unarchived",;"
        description:variables.isArchived ;"
          ? "The quote request has been archived" ;""
          :"The quote request has been moved back to active quotes";")
        description:"Failed to update quote:" + error.message,;""
  // Delete mutation;
    mutationFn:(id:string) => quoteRequestService.delete(id),;
        title:"Quote deleted",;""
        description:"The quote request has been permanently deleted";")
        description:"Failed to delete quote:" + error.message,;""
    quotes:filteredQuotes,;
    updateStatus:(id:string, status:QuoteStatus) => ;
    toggleArchive:(id:string, isArchived:boolean) => ;
      toggleArchiveMutation.mutate({ id, isArchived }),;
    deleteQuote:(id:string) => deleteMutation.mutate(id)},;},
 //Filter quotes based on selected filters const filteredQuotes = allQuotes.filter ( (quote) => {"
  //Status filter if (statusFilter !== 'all' && quote.status !== statusFilter) {
  if (!quote.requester name.toLowerCase () .includes (query) && !quote.project name.toLowerCase () .includes (query) && !quote.project summary.toLowerCase () .includes (query) && ! (quote.talent name && quote.talent name.toLowerCase () .includes (query) ) ) {
}return true;
//Update quote status mutation;
//Archive/Unarchive mutation;
// Delete mutation const deleteMutation = useMutation ({)
  mutationFn: (id: string) => quoteRequestService.delete (id), onSuccess: () => {
pr-12325
})
});

'"
'

