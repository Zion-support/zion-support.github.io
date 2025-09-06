import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = $2;
export const supabaseAnonKey = $2;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
export const checkOnline = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false
  }
  try {
    const controller = new AbortController($2);
    const id = setTimeout(() => controller.abort(), 3000),
    await fetch($2);
    clearTimeout($2);
    return true
  } catch {
    return false
  }
},

// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error('No internet connection')
  }
  try {
    return await fetch(input, init)
  } catch (err) {
    // Log the original error for debugging
    console.error($2);
    throw new Error('Failed to connect to Supabase')
  }
},

export const supabase = createClient($2);
// Helper function to get profiles table
export const getFromProfiles = () => supabase.from($2);