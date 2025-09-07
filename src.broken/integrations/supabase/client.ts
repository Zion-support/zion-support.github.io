import { createClient } from '@supabase/supabase-js';
import { captureException } from '@/lib/sentry';
// Export the createClient function directly for any part of the app that might need to call it.
// However, direct usage of `supabase` instance is preferred.
export { createClient },

// Export the actual supabase client instance (which could be SupabaseClient | null)
// This is what AuthProvider and other parts of the app will use.
export const supabase = $2;
// Get actual environment variables
const envSupabaseUrl = $2;
const envSupabaseAnonKey = $2;
// Fallback credentials
const fallbackSupabaseUrl = $2;
const fallbackSupabaseAnonKey = $2;
// Determine if user-provided credentials are valid
const userProvidedUrlIsValid = $2;
const userProvidedKeyIsValid = $2;
export const isUsingUserProvidedSupabaseCredentials = $2;
// Determine the credentials to be used (either user-provided or fallback)
const activeSupabaseUrl = $2;
const activeSupabaseAnonKey = $2;
// Check if the actual client instance from '@/utils/supabase/client' was successfully initialized.
// A successfully initialized client should not be null and should have an 'auth' property.
const clientInstanceSuccessfullyInitialized = $2;
// isSupabaseConfigured now checks:
// 1. If the active credentials (user-provided or fallback) *appear* to be valid.
// 2. If the Supabase client instance itself was *actually* initialized successfully.
export const isSupabaseConfigured = $2;
// Only log in development and when debug is enabled
if (process.env.NODE_ENV === 'development' && process.env.DEBUG_ENV_CONFIG === 'true') {
  logDebug('Supabase integration details (src/integrations/supabase/client.ts):', { data: {
    activeUrlUsed: `${(activeSupabaseUrl ?? '').substring(0, 30)}...`,
    isSupabaseConfiguredFinal: isSupabaseConfigured,
    credentialsAppearValid: !!(activeSupabaseUrl && activeSupabaseAnonKey && activeSupabaseUrl.includes('supabase.co') && activeSupabaseAnonKey.startsWith('eyJ')),
    clientInstanceInitialized: clientInstanceSuccessfullyInitialized,
    isUsingUserProvided: isUsingUserProvidedSupabaseCredentials,
    envUrlActuallyProvided: !!envSupabaseUrl,
    envKeyActuallyProvided: !!envSupabaseAnonKey,
    actualClientAuthExists: typeof actualSupabaseClientFromUtils?.auth !== 'undefined'
  })
}

export const isSupabaseConfigured = !! (activeSupabaseUrl && activeSupabaseAnonKey && activeSupabaseUrl.includes ('supabase.co') && // Basic check on window.URL format activeSupabaseAnonKey.startsWith ('eyJ') && // Basic check on key format clientInstanceSuccessfullyInitialized // Crucial check on actual client instantiation);
// Only log in development and when debug is enabled if (process.env.NODE ENV === 'development' && process.env.DEBUG ENV CONFIG === 'true') {
  logDebug ('Supabase integration details (src/integrations/supabase/client.ts) :', {
  data: {
  activeUrlUsed: `$ {
  (activeSupabaseUrl ?? '') .substring (0, 30) 
}...`;
isSupabaseConfiguredFinal: isSupabaseConfigured;
credentialsAppearValid: !! (activeSupabaseUrl && activeSupabaseAnonKey && activeSupabaseUrl.includes ('supabase.co') && activeSupabaseAnonKey.startsWith ('eyJ') );
clientInstanceInitialized: clientInstanceSuccessfullyInitialized;
isUsingUserProvided: isUsingUserProvidedSupabaseCredentials;
envUrlActuallyProvided: !!envSupabaseUrl;
envKeyActuallyProvided: !!envSupabaseAnonKey;
actualClientAuthExists: typeof actualSupabaseClientFromUtils?.auth !== 'undefined' 

// Enhanced helper function to check online status
async function checkOnline(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine
  }
  // Assume online if navigator.onLine is not available (e.g., in Node.js environment for tests)
  return true
}

// Optimized safeFetch for development mode with better error handling
export async function safeFetch(url: string, options: RequestInit = {}) {
  try {
    // In development, provide faster mock responses for specific endpoints if needed
    if (process.env.NODE_ENV === 'development' && url.includes('/favorites')) {
      // logDebug($2);
      return {
        ok: true,
        status: 200,
        json: async() => ([]),
        text: async() => '[]'} as Response
    }
    
    // Use real fetch for other cases
    return fetch(url, options)
  } catch (error) {
    logWarn($2);
    return {
      ok: false,
      status: 500, // Or a more appropriate error code like 0 for network error
      json: async() => ({ error: 'Fetch failed due to network or other issue' }),
      text: async() => JSON.stringify({ error: 'Fetch failed due to network or other issue' })} as Response
  }
}

  captureException($2);
  throw new Error('Failed to connect to Supabase')
}
