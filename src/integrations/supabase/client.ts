import { createClient } from '@supabase/supabase-js';
import { supabaseStorageAdapter } from './safeStorageAdapter';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
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
};

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

  captureException(lastError);
  throw new Error('Failed to connect to Supabase');
}