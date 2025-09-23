import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import axiosRetry from 'axios-retry';
import { logErrorToProduction, logDebug } from '@/utils/productionLogger';
import type { AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1';

// Global interceptor for all axios instances

// Define the global error handler (exported for testing purposes)
export const globalAxiosErrorHandler = (error: unknown) => {
  const contentType = typeof error === 'object' && error && 'response' in error && error.response && 'headers' in error.response ? (error.response as { headers?: Record<string, unknown> }).headers?.['content-type'] : undefined;
  if (typeof contentType === 'string' && contentType.includes('text/html')) {
