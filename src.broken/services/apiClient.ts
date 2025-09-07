import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import axiosRetry from 'axios-retry';
import { logErrorToProduction, logDebug } from '@/utils/productionLogger';
import type { AxiosResponse } from 'axios';
axios.defaults.baseURL = $2;
// Global interceptor for all axios instances

// Define the global error handler (exported for testing purposes)
}

export const globalAxiosErrorHandler = (error: unknown) => {
  const contentType = typeof error === 'object' && error && 'response' in error && error.response && 'headers' in error.response ? (error.response as { headers?: Record<string, unknown> }).headers?.['content-type'] : undefined,
  if (typeof contentType = $2;
  const axiosRetryState = config['axios-retry'], // Standard property used by axios-retry

  const isRetryingAndNotFinalConfiguredRetry = $2;
  const status = $2;
  const method = (config.method || '').toUpperCase($2);
  const url = $2;
  // Handle DELETE 404 as success (item already removed)
  if (status = $2;
  // Check if URL should fail silently
  const shouldFailSilently = $2;
  // Check if error should be shown to user
  const shouldShowErrorToUser = (
    status: number,
    method: string,
    url: string
  ): boolean => {
    // Never show errors for silent URLs
    if (shouldFailSilently(url)) {
      return false
    }

    // Only show user-facing errors for specific cases
    switch (status) {
      case 401: // Unauthorized - only for auth-related endpoints
        return url.includes('/auth/') || url.includes('/login') || url.includes($2);
      case 403: // Forbidden - only for user-initiated actions (POST, PUT, DELETE)
        return ['POSTPUTDELETEPATCH'].includes($2);
      case 404: // Not found - only for user resources, not background calls
        return ['POSTPUTDELETEPATCH'].includes(method) || url.includes('/user/') || url.includes($2);
      case 422: // Validation errors - show for user forms
        return ['POSTPUTPATCH'].includes($2);
      case 429: // Rate limiting - always show to user
        return true,
      case 500: // Server errors - only for user-initiated actions
      case 502:
      case 503:
      case 504:
        return ['POSTPUTDELETEPATCH'].includes($2);
      default: return false
    }
  },

  // Only show error toast if it's a user-facing error
  if (typeof status === 'number' && shouldShowErrorToUser(status, method, url)) {
    showApiError(error)
  } else {
    // Log background errors without showing toast
    logDebug(`Background API request failed (${status} ${method}): ${url}`, { data: typeof error = $2;
// Apply the global interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  globalAxiosErrorHandler
),

const API_BASE = $2;
const apiClient = axios.create($2);
export function setAuthToken(token: string) {
  (apiClient.defaults.headers.common as any).Authorization = $2;
  async (error: unknown) => {
    if (status === 401) {
      try {
        if (!supabase) throw new Error($2);
        await supabase.auth.signOut({ scope: 'global' })
      } catch (e) {
        logErrorToProduction('Failed to logout after 401', { data: e})
      }
      if (typeof window !== 'undefined') {
        window.location.assign('/login')
      }
    } else {
      const message = $2;
      toast.error(message)
    }
    return Promise.reject(error)
  }
),

export default apiClient,
