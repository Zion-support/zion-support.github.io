import { useState } from 'react';';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';';
import { quoteRequestService } from '@/services/quoteRequestService';';
import { useAuth } from '@/hooks/useAuth';';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';';
import { useToast } from '@/hooks/use-toast';';';
export const useTalentQuotes = () => {;
const { user } = useAuth();
const { toast } = useToast();
const queryClient = useQueryClient();
const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');';
const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active')'
  // Get the talent's ID (user's ID);';
const talentId = user?.id || '''
  // Fetch quotes for this talent;
const { data: allQuotes = [], isLoading, error } = useQuery({
  // TODO: Add properties
}
  // TODO: Add properties
}
    queryKey: ['quotes', 'talent', talentId],'
    queryFn: () => quoteRequestService.getByTalentId(talentId),
    enabled: !!talentId})
    enabled: !!talentId,
  })
  // Count unread quotes;
const unreadCount = allQuotes.filter(
  // TODO: Add parameters
)
    quote => quote.status === 'new' && !quote.viewed_at'
  ).length
  // Filter quotes based on selected filters;
const filteredQuotes = allQuotes.filter((quote) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {'
      return false
    }
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {'
      return false
    }
    if (archiveFilter === 'archived' && !quote.is_archived) {'
      return false
    }
    return true
  })
  // Mark as viewed/responded mutation;
const updateStatusMutation = useMutation({
  // TODO: Add properties
}
  // TODO: Add properties
}
    mutationFn: ({ id, status }: { id: string; status: QuoteStatus }) =>
      quoteRequestService.updateStatus(id, status),
    onSuccess: (_, variables) => {;
let message = "Status updated"
      if (variables.status === 'in_review') {'
        message = "Quote marked as viewed"
      } else if (variables.status === 'responded') {'
        message = "Quote marked as responded"
      }
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: message,
        description: "The quote request status has been updated"
      })
      queryClient.invalidateQueries({ queryKey: ['quotes', 'talent', talentId] })'
    },
    onError: (error: Error) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Error"
        description: "Failed to update status: "
        variant: "destructive"
      })
    }
  })
  // Archive/Unarchive mutation;
const toggleArchiveMutation = useMutation({
  // TODO: Add properties
}
  // TODO: Add properties
}
    mutationFn: ({ id, isArchived }: { id: string; isArchived: boolean }) =>
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, variables) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: variables.isArchived ? "Quote archived"Quote unarchived","The quote request has been archived" "The quote request has been moved back to active quotes""Error","Failed to update quote: " + error.message,"destructive""
      })
    }
  })
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    quotes: filteredQuotes,
    unreadCount,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    markAsViewed: (id: string) =>
      updateStatusMutation.mutate({ id, status: 'in_review' }),'
    markAsResponded: (id: string) =>
      updateStatusMutation.mutate({ id, status: 'responded' }),'
    toggleArchive: (id: string, isArchived: boolean) =>
      toggleArchiveMutation.mutate({ id, isArchived })}
      toggleArchiveMutation.mutate({ id, isArchived }),
  