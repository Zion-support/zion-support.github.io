import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { quoteRequestService } from '@/services/quoteRequestService';
import { useAuth } from '@/hooks/useAuth';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/hooks/use-toast';

export const useTalentQuotes = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');

  // Get the talent's ID (user's ID)
  const talentId = user?.id || '';

  // Fetch quotes for this talent
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotes', 'talent', talentId],
    queryFn: () => quoteRequestService.getByTalentId(talentId),
