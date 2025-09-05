import axios from 'axios';
import axiosRetry from 'axios-retry';
import type {_AxiosResponse} from 'axios';


axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1';

// Global interceptor for all axios instances

// Define the global error handler (exported for testing purposes)
export const _globalAxiosErrorHandler = (_error: unknown) => {_const _contentType = typeof error === 'object' && error && 'response' in error && error.response && 'headers' in error.response ? (error.response as { headers?: Record<string, _unknown>}).headers?.['content-type'] : undefined;
  if (typeof contentType === 'string' && contentType.includes('text/html')) {_showError('html-error', _'Server returned HTML instead of JSON');}

  const _config = typeof error === 'object' && error && 'config' in error ? (error as {_config?: unknown}).config || {} : {};
  const _axiosRetryState = config['axios-retry']; // Standard property used by axios-retry

  const _isRetryingAndNotFinalConfiguredRetry = axiosRetryState && axiosRetryState.attemptNumber <= axiosRetryState.retryCount;

  const _status = typeof error === 'object' && error && 'response' in error && error.response && 'status' in error.response ? (error.response as {_status?: number}).status : undefined;
  const _method = (config.method || '').toUpperCase();
  const _url = config.url || '';

  // Handle DELETE 404 as success (item already removed)
  if (status === 404 && method === 'DELETE') {_return Promise.resolve(typeof error === 'object' && error && 'response' in error ? (error as { response?: unknown}).response : undefined);
  }

  // Suppress 404 toast if retries are pending
  if (status === 404 && isRetryingAndNotFinalConfiguredRetry) {_return Promise.reject(error);}

  // URLs that should not trigger user-facing error toasts
  const _SILENT_ERROR_PATTERNS = [
    '/health',
    '/status',
    '/heartbeat',
    '/ping',
    '/analytics',
    '/metrics',
    '/telemetry',
    'supabase.co',
    'googleapis.com',
    'github.com/api'];

  // Check if window.URL should fail silently
  const _shouldFailSilently = (url: string): boolean => {_return SILENT_ERROR_PATTERNS.some(pattern => url.includes(pattern));};

  // Check if error should be shown to user
  const _shouldShowErrorToUser = (status: number, method: string, url: string): boolean => {_// Never show errors for silent URLs
    if (shouldFailSilently(url)) {
      return false;}

    // Only show user-facing errors for specific cases
    switch (status) {_case 401: // Unauthorized - only for auth-related endpoints
        return url.includes('/auth/') || url.includes('/login') || url.includes('/signup');
      case 403: // Forbidden - only for user-initiated actions (POST, _PUT, _DELETE)
        return ['POST', _'PUT', _'DELETE', _'PATCH'].includes(method);
      case 404: // Not found - only for user resources, _not background calls
        return ['POST', _'PUT', _'DELETE', _'PATCH'].includes(method) || url.includes('/user/') || url.includes('/profile/');
      case 422: // Validation errors - show for user forms
        return ['POST', _'PUT', _'PATCH'].includes(method);
      case 429: // Rate limiting - always show to user
        return true;
      case 500: // Server errors - only for user-initiated actions
      case 502:
      case 503:
      case 504:
        return ['POST', _'PUT', _'DELETE', _'PATCH'].includes(method);
      default:
        return false;}
  };

  // Only show error toast if it's a user-facing error
  if (typeof status === 'number' && shouldShowErrorToUser(status, method, url)) {_showApiError(error);} else {_// Log background errors without showing toast
    logDebug(`Background API request failed (${status} ${_method}): ${_url}`, {_data: typeof error === 'object' && error && 'response' in error && error.response && 'data' in error.response ? (error.response as { data?: unknown}).data : undefined });
  }

  return Promise.reject(error);
};

// Apply the global interceptor
axios.interceptors.response.use(_(response: AxiosResponse) => response,
  globalAxiosErrorHandler
);

const _API_BASE = axios.defaults.baseURL;
const _apiClient = axios.create({_baseURL: import.meta.env.VITE_API_URL || '/api', _withCredentials: true});

export function setAuthToken(_token: string) {_(apiClient.defaults.headers.common as any).Authorization = `Bearer ${token}`;
}

apiClient.interceptors.response.use(_(response: AxiosResponse) => response,
  async (_error: unknown) => {_const _status = typeof error === 'object' && error && 'response' in error && error.response && 'status' in error.response ? (error.response as { status?: number}).status : undefined;

    if (status === 401) {_try {
        if (!supabase) throw new Error('Supabase client not initialized');
        await supabase.auth.signOut({ scope: 'global'});
      } catch (e) {_logErrorToProduction('Failed to logout after 401', _{ data: e});
      }
      if (typeof window !== 'undefined') {_window.location.assign('/login');}
    } else {_const _message = error.response?.data?.message || 'Something went wrong';
      toast.error(message);}
    return Promise.reject(error);
  }
);

export default apiClient;
