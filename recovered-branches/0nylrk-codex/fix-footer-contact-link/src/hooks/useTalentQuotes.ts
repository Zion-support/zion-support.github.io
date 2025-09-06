import { useState  } from 'react';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { quoteRequestService  } from '@/services/quoteRequestService';
import { useAuth  } from '@/hooks/useAuth';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/hooks/use-toast';
export const useTalentQuotes = null;
