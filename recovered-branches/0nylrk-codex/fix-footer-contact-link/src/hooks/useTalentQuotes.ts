
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import { useAuth  } from '@/hooks/useAuth';


import {useState} from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {quoteRequestService} from '@/services/quoteRequestService';
import {useAuth} from '@/hooks/useAuth';

<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query',;
import { quoteRequestService } from '@/services/quoteRequestService',;
import { useAuth } from '@/hooks/useAuth',;
import type { QuoteRequest, QuoteStatus } from '@/types/quotes',;

import { useToast } from '@/hooks/use-toast',;
export const useTalentQuotes = () => {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;

    queryKey: ['quotestalent', talentId],;
    queryFn: () => quoteRequestService.getByTalentId(talentId),;
    enabled: !!talentId}),;
  // Count unread quotes;

    quote => quote.status === 'new' && !quote.viewed_at;
  ).length,;
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes.filter((quote) => {;

    if (statusFilter !== 'all' && quote.status !== statusFilter) {;
      return false;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======

    }
    // Archive filter'
    if (archiveFilter === 'active' && quote && quote.is_archived) {}
      return false;
    }'
    if (archiveFilter === 'archived' && !quote && quote.is_archived) {}
      return false;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba



    return true
  }),

  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),

<<<<<<< HEAD



=======
    return true
  });
  // Mark as viewed/responded mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: QuoteStatus }) => 
      quoteRequestService && quoteRequestService.updateStatus(id, status);


>>>>>>> origin/cursor/delete-old-data-records-6bba
    onSuccess: (_, variables) => {
      let message = "Status updated";
      if (variables && variables.status === 'in_review') {
        message = "Quote marked as viewed"
      } else if (variables && variables.status === 'responded') {
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        message = "Quote marked as responded"
      }
      toast({
        title: message


<<<<<<< HEAD
      });

=======
        description: "The quote request status has been updated"
'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      queryClient && queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })
    };
    onError: (error: Error) => {}
      toast({"
        title: "Error";"
        description: "Failed to update status: " + error && error.message,

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        variant: "destructive"

      })
    }
  });

<<<<<<< HEAD
  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({

=======

      }),
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] })

>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
    onError: (error: Error) => {}
      toast({"
        title: "Error","
        description: "Failed to update status: " + error.message,"

        variant: "destructive"
      })
    }
  }),

    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    onSuccess: (_, variables) => {

      toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived"
        description: variables.isArchived
          ? "The quote request has been archived"
<<<<<<< HEAD

          : "The quote request has been moved back to active quotes"

=======


          : "The quote request has been moved back to active quotes"

    };


    onError: (error: Error) => {
      toast({
        title: "Error";


>>>>>>> origin/cursor/delete-old-data-records-6bba
    mutationFn: ({ id, isArchived }: { id: string, isArchived: boolean }) => 

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
        title: "Error";
        description: "Failed to update quote: " + error && error.message,

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

  return {

=======


  return {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    quotes: filtered_quotes;
    unread_count;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

    toggleArchive: (id: string, isArchived: boolean) =>

    toggleArchive: (id: string, isArchived: boolean) => 


<<<<<<< HEAD

=======
    toggleArchive: (id: string, isArchived: boolean) => 
    },
>>>>>>> origin/cursor/delete-old-data-records-6bba
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,

        variant: "destructive"
      });
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

      }),;
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;
      toast({;

        variant: "destructive";
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
      queryClient.invalidateQueries({ queryKey: ['quotestalent', talentId] });
    },;
    onError: (error: Error) => {;

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
=======

      toggleArchiveMutation.mutate({ id, isArchived })}
}

      toggleArchiveMutation.mutate({ id, isArchived })}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba




    setArchiveFilter,
    markAsViewed: (id: string) => '
      updateStatusMutation && updateStatusMutation.mutate({ id, status: 'in_review' });
    markAsResponded: (id: string) => '
      updateStatusMutation && updateStatusMutation.mutate({ id, status: 'responded' });
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation && toggleArchiveMutation.mutate({ id, isArchived })}
};


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



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
