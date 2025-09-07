<<<<<<< HEAD
pr-12325
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';

export const useAdminQuotes = () => {

<<<<<<< HEAD
import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';

export const useAdminQuotes = () => {
export const useAdminQuotes = () => {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { toast } = useToast();
  const queryClient = useQueryClient();'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');'
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');'
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  // Fetch all quote requests;
  const { data: allQuotes = [], isLoading, error } = useQuery({'
    queryKey: ['quotesadmin'];
<<<<<<< HEAD
queryFn: () => quoteRequestService && quoteRequestService.getAll(),
=======

<<<<<<< HEAD
=======
    queryFn: () => quoteRequestService && quoteRequestService.getAll(),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    enabled: true});

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    queryKey: ['quotesadmin'],;
    queryFn: () => quoteRequestService.getAll(),;
    enabled: true}),;
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes.filter((quote) => {;

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

      const query = searchQuery && searchQuery.toLowerCase();
      if (
        !quote && quote.requester_name.toLowerCase().includes(query) &&
        !quote && quote.project_name.toLowerCase().includes(query) &&
        !quote && quote.project_summary.toLowerCase().includes(query) &&
        !(quote && quote.talent_name && quote && quote.talent_name.toLowerCase().includes(query))
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
const createdAt = new Date(quote.created_at);
      if (createdAt < dateRange.from) {
      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
const createdAt = new Date(quote.created_at);
      const endDate = new Date(dateRange.to);
      endDate.setHours(23, 59, 59, 999), // End of day
      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (createdAt > endDate) {
        return false
      }
    }

<<<<<<< HEAD
return true
=======
<<<<<<< HEAD
    

    return true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status);
<<<<<<< HEAD
=======
    
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
<<<<<<< HEAD

    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 

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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    onSuccess: () => {
      toast({
        title: "Status updated"
        description: "The quote request status has been updated"

<<<<<<< HEAD
});
=======
      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({

        description: "Failed to update status: " + error && error.message,
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update status: " + error.message
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD
  // Archive/Unarchive mutation;
  const toggleArchiveMutation = useMutation({}
=======
  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
<<<<<<< HEAD
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) =>
      quoteRequestService.toggleArchive(id, isArchived);
=======

      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    onSuccess: (_, variables) => {

      toast({

        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived"
          ? "The quote request has been archived""
          : "The quote request has been moved back to active quotes"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      });
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error.message
=======

<<<<<<< HEAD
"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"

      })
    }
<<<<<<< HEAD

=======
  });
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      })
    }

<<<<<<< HEAD
    mutationFn: (id: string) => quoteRequestService && quoteRequestService.delete(id);

    onSuccess: () => {}
      toast({"
        title: "Quote deleted""
=======
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
    onSuccess: () => {
      toast({
        title: "Quote deleted"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        description: "The quote request has been permanently deleted"

      });

    };

<<<<<<< HEAD
=======

<<<<<<< HEAD
      }),
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    }
    };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error.message
<<<<<<< HEAD

      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to delete quote: " + error && error.message,

=======
<<<<<<< HEAD
      });
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotesadmin'] })
    };
    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to delete quote: " + error && error.message,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"
      })
    }
  });
<<<<<<< HEAD

=======
<<<<<<< HEAD
  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  const [search_query, setSearchQuery] = useState ('');
  const [date_range, setDateRange] = useState < DateRange | undefined>(undefined);
;
  // Fetch all quote requests;

    query_key: ['quotesadmin'];
    query_fn: () => quoteRequestService.get_all (),
    enabled: true});
;
  // Filter quotes based on selected filters;

}
      return false;
    }
    // Archive filter;

}
      return false;
    }
    // Search filter;

        return false;
      }
    }
    // Date range filter;

}
        return false;
      }
    }

}
      const created_at = new Date (quote.created_at);
      const end_date = new Date (date_range.to);
      end_date.set_hours (23, 59, 59, 999), // End of day;

}
        return false;
      }
    }
    return true;
  });
;
  // Update quote status mutation;

        variant: "destructive";
      });
    }
  });
;
  // Archive / Unarchive mutation;

        variant: "destructive";
      });
    }
  });
;
  // Delete mutation;

        variant: "destructive";
      });
    }
  });
;
<<<<<<< HEAD

=======
  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    quotes: filtered_quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
<<<<<<< HEAD

    toggleArchive: (id: string, isArchived: boolean) => 

toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) =>
  return {

    toggleArchive: (id: string, isArchived: boolean) =>
    toggleArchive: (id: string, isArchived: boolean) => 

=======
    toggleArchive: (id: string, isArchived: boolean) =>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    toggleArchive: (id: string, isArchived: boolean) => 
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to delete quote: " + error.message,

        variant: "destructive"
      });
    return true;
  }),;
  // Update quote status mutation;
  const updateStatusMutation = useMutation({;
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>;
      quoteRequestService.updateStatus(id, status),;
    onSuccess: () => {;

        variant: "destructive";
        description: "The quote request status has been updated";")
      }),;"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });'
    },;
    onError: (error: Error) => {;
      toast({;'
        title: "Error",""
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

          : "The quote request has been moved back to active quotes";
      }),;'
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;

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
        title: "Error",""
        description: "Failed to update quote: " + error.message,;""
        variant: "destructive";")

      });
    }
  }),;
  // Delete mutation;
  const deleteMutation = useMutation({;
    mutationFn: (id: string) => quoteRequestService.delete(id),;
    onSuccess: () => {;

        variant: "destructive";
  const deleteMutation = useMutation({;)
    mutationFn: (id: string) => quoteRequestService.delete(id),;
    onSuccess: () => {;

      toast({;"
        title: "Quote deleted",""
        description: "The quote request has been permanently deleted";")
      }),;"
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });'
    },;
    onError: (error: Error) => {;
      toast({;'
        title: "Error",""
        description: "Failed to delete quote: " + error.message,;""
        variant: "destructive";")

      });
    }
  }),;
        title: "Error",""
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
        title: "Quote deleted",""
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

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation.mutate(id)}
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setDateRange,

    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
};
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;
import { useToast } from '@/components/ui/use-toast',;
import type { DateRange } from '@/types/dateRange',;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
