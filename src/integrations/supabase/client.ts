import { createClient } from '@supabase/supabase-js';
import api from '@/lib/api';

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

// Mock implementation
const createMockSupabaseClient = (): SupabaseClient => ({
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: supabaseStorageAdapter,
  },
});

// Helper function to access profiles table
export const getFromProfiles = () => supabase.from('profiles');

export async function checkOnline(): Promise<boolean> {
  try {
    return typeof navigator !== 'undefined' && navigator.onLine;
  } catch {
    return false;
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
    
    // Use real fetch for other cases
    return fetch(url, options);
  } catch (error) {
    logWarn('safeFetch: Fetch failed, returning mock error response:', { url, error });
    return {
      ok: false,
      status: 500, // Or a more appropriate error code like 0 for network error
      json: async () => ({ error: 'Fetch failed due to network or other issue' }),
      text: async () => JSON.stringify({ error: 'Fetch failed due to network or other issue' }),
    } as Response;
  }
}

  captureException(lastError);
  throw new Error('Failed to connect to Supabase');
}
