
import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from '@/types/dateRange';

export const useAdminQuotes = () => {
export const useAdminQuotes = () => {;    enabled: true});
  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes && allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote && quote.status !== statusFilter) {
      return false    return true
  });
  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) =>     mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
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

    };
    onError: (error: Error) => {
      toast({
        title: "Error",
  description: "Failed to update status: " + error && error.message,    onSuccess: (_, variables) => {
      toast({

        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived"
          ? "The quote request has been archived""
          : "The quote request has been moved back to active quotes"
      });
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
      toast({;
        title: "Status updated",,
  description: "The quote request status has been updated";
      }),;
      queryClient.invalidateQueries({ queryKey: ['quotesadmin'] });
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",,
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
        variant: "destructive";
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
<<<<<<< HEAD
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

    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation && updateStatusMutation.mutate({ id, status });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived });
    deleteQuote: (id: string) => deleteMutation && deleteMutation.mutate(id)}
};
