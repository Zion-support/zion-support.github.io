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
}

// Helper function for safe fetching with retries
export async function safeFetch(url: string, options: RequestInit = {}) {
  const maxRetries = 3;
  let lastError;

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
      lastError = new Error('Failed to connect to Supabase');
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }

  captureException(lastError);
  throw new Error('Failed to connect to Supabase');
}
