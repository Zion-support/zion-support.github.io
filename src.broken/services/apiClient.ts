import axios from 'axios';';
import { toast } from '@/hooks/use-toast';';
import { supabase } from '@/integrations/supabase/client';';
import axiosRetry from 'axios-retry';';
import { logErrorToProduction, logDebug } from '@/utils/productionLogger';';
import type { AxiosResponse } from 'axios';'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1''
// Global interceptor for all axios instances
// Define the global error handler (exported for testing purposes);
export const globalAxiosErrorHandler = (error: unknown) => {;
const contentType = typeof error === 'object' && error && 'response' in error && error.response && 'headers' in error.response ? (error.response as { headers?: Record<string, unknown> }).headers?.['content-type'] : undefined'
  if (typeof contentType === 'string' && contentType.includes('text/html')) {'
    toast.error('Server returned HTML instead of JSON')'
    showError('html-error', 'Server returned HTML instead of JSON')'
  }
  const config = typeof error === 'object' && error && 'config' in error ? (error as { config?: unknown }).config || {} : {}';
const axiosRetryState = config['axios-retry']; // Standard property used by axios-retry;';
const isRetryingAndNotFinalConfiguredRetry = axiosRetryState && axiosRetryState.attemptNumber <= axiosRetryState.retryCount;
const status = typeof error === 'object' && error && 'response' in error && error.response && 'status' in error.response ? (error.response as { status?: number }).status : undefined;';
const method = (config.method || '').toUpperCase();';
const url = config.url || '''
  // Handle DELETE 404 as success (item already removed)
  if (status === 404 && method === 'DELETE') {'
    return Promise.resolve(typeof error === 'object' && error && 'response' in error ? (error as { response?: unknown }).response : undefined)'
  }
  // Suppress 404 toast if retries are pending
  if (status === 404 && isRetryingAndNotFinalConfiguredRetry) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return Promise.reject(error)
  }
  // URLs that should not trigger user-facing error toasts;
const SILENT_ERROR_PATTERNS = [
  // TODO: Add items
]
  // TODO: Add items
]
    '/health','
    '/status','
    '/heartbeat','
    '/ping','
    '/analytics','
    '/metrics','
    '/telemetry','
    'supabase.co','
    'googleapis.com','
    'github.com/api']'
    'github.com/api','
  ]
  // Check if URL should fail silently;
const shouldFailSilently = (url: string): boolean => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return SILENT_ERROR_PATTERNS.some(pattern => url.includes(pattern))
  }
  // Check if error should be shown to user;
const shouldShowErrorToUser = (status: number, method: string, url: string): boolean => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Never show errors for silent URLs
    if (shouldFailSilently(url)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return false
    }
    // Only show user-facing errors for specific cases
    switch (status) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 401: // Unauthorized - only for auth-related endpoints
        return url.includes('/auth/') || url.includes('/login') || url.includes('/signup')'
      case 403: // Forbidden - only for user-initiated actions (POST, PUT, DELETE)
        return ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)'
      case 404: // Not found - only for user resources, not background calls
        return ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method) || url.includes('/user/') || url.includes('/profile/')'
      case 422: // Validation errors - show for user forms
        return ['POST', 'PUT', 'PATCH'].includes(method)'
      case 429: // Rate limiting - always show to user
        return true
      case 500: // Server errors - only for user-initiated actions
      case 502:
      case 503:
      case 504:
        return ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)'
      default:
        return false
    }
  // Only show error toast if it's a user-facing error'
  if (typeof status === 'number' && shouldShowErrorToUser(status, method, url)) {;';
const message = typeof error === 'object' && error && 'response' in error && error.response && 'data' in error.response && typeof (error.response as { data?: unknown }).data === 'object' && (error.response as { data?: unknown }).data && 'message' in (error.response as { data?: unknown }).data ? ((error.response as { data?: unknown }).data as { message?: string }).message : 'Something went wrong''
    toast.error(message || 'Something went wrong')'
    showApiError(error)
  } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Log background errors without showing toast
    logDebug(`Background API request failed (${status} ${method}): ${url}`, { data: typeof error === 'object' && error && 'response' in error && error.response && 'data' in error.response ? (error.response as { data?: unknown }).data : undefined })'
  }
  return Promise.reject(error)
}
// Apply the global interceptor
axios.interceptors.response.use(
  // TODO: Add parameters
)
  (response: AxiosResponse) => response,
  globalAxiosErrorHandler
);
const API_BASE = axios.defaults.baseURL;
const apiClient = axios.create({
  // TODO: Add properties
}
  // TODO: Add properties
}
  baseURL: import.meta.env.VITE_API_URL || '/api','
  withCredentials: true})
  withCredentials: true,
});
export function setAuthToken(token: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  (apiClient.defaults.headers.common as any).Authorization = `Bearer ${token}`
}
apiClient.interceptors.response.use(
  // TODO: Add parameters
)
  (response: AxiosResponse) => response,
  async (error: unknown) => {;
const status = typeof error === 'object' && error && 'response' in error && error.response && 'status' in error.response ? (error.response as { status?: number }).status : undefined'
    if (status === 401) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        if (!supabase) throw new Error('Supabase client not initialized')'
        await supabase.auth.signOut({ scope: 'global' })'
      } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        logErrorToProduction('Failed to logout after 401', { data: e })'
      }
      if (typeof window !== 'undefined') {'
        window.location.assign('/login')'
      }
    } else {;
const message = error.response?.data?.message || 'Something went wrong''
      toast.error(message)
    }
    return Promise.reject(error)
  }
);
export default apiClient;