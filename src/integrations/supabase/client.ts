import { createClient } from '@supabase/supabase-js';
import { supabaseStorageAdapter } from './safeStorageAdapter';

interface SupabaseClient {
  auth: {
    signUp: (credentials: any) => Promise<any>;
    signIn: (credentials: any) => Promise<any>;
    signOut: () => Promise<any>;
    user: () => any;
    onAuthStateChange: (callback: any) => any;
  };
  from: (table: string) => any;
  storage: {
    from: (bucket: string) => any;
  };
}

// Create Supabase client with proper configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: supabaseStorageAdapter,
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey
    }
  }

  try {
    // Try a lightweight request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'HEAD',
        signal: controller.signal,
        headers: {
          'apikey': supabaseAnonKey,
        },
      });
      return response.ok;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return false;
  }
}

// Enhanced retry configuration
const RETRY_COUNT = 3;
const INITIAL_RETRY_DELAY = 1000;
const MAX_RETRY_DELAY = 10000;

// Enhanced fetch with improved retry mechanism
export const safeFetch: typeof fetch = async (input, init) => {
  let lastError: Error | null = null;
  let delay = INITIAL_RETRY_DELAY;

  for (let attempt = 0; attempt < RETRY_COUNT; attempt++) {
    try {
      if (!(await checkOnline())) {
        throw new Error('No internet connection');
      }

      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
        headers: {
          ...init?.headers,
          'x-retry-attempt': attempt.toString(),
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (err: any) {
      lastError = err;
      console.error(`Attempt ${attempt + 1} failed:`, err);

      // Don't retry if it's a CORS error
      if (err.message.includes('CORS')) {
        throw new Error('CORS error: Unable to access Supabase. Please check your CORS configuration.');
      }

      // Don't retry if it's an abort error
      if (err.name === 'AbortError') {
        throw new Error('Request timeout. Please try again.');
      }

      // Don't retry on the last attempt
      if (attempt === RETRY_COUNT - 1) {
        break;
      }

      // Wait before retrying with exponential backoff and jitter
      const jitter = Math.random() * 200;
      await new Promise(resolve => setTimeout(resolve, Math.min(delay + jitter, MAX_RETRY_DELAY)));
      delay *= 2;
    }
  }

  // If all retries failed, throw a user-friendly error
  throw new Error(
    lastError?.message === 'Failed to fetch'
      ? 'Unable to connect to Supabase. Please check your internet connection.'
      : lastError?.message || 'An unexpected error occurred'
  );
};

// Create Supabase client with enhanced fetch
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { 
    fetch: safeFetch,
    headers: {
      'X-Client-Info': 'supabase-js-web',
    }
  },
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
    autoRefreshToken: true,
    storage: window.localStorage,
  }
});

  if (!headers.has('apikey')) {
    headers.set('apikey', supabaseAnonKey);
  }

  const maxRetries = 3;
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await api({
        url,
        method: options.method as any,
        data: (options as any).body,
        headers: Object.fromEntries(headers.entries()),
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      lastError = error;
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }

  captureException(lastError);
  throw new Error('Failed to connect to Supabase');
}