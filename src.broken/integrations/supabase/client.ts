<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js',
import { captureException } from '@/lib/sentry',
// Export the createClient function directly for any part of the app that might need to call it.
// However, direct usage of `supabase` instance is preferred.
export { createClient },
=======

// Export the createClient function directly for any part of the app that might need to call it.
// However, direct usage of `supabase` instance is preferred.
export {_createClient};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Export the actual supabase client instance (_which could be SupabaseClient | null)
// This is what AuthProvider and other parts of the app will use.
<<<<<<< HEAD
export const supabase = actualSupabaseClientFromUtils,


// Get actual environment variables
const envSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL,
const envSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

// Fallback credentials
const fallbackSupabaseUrl = 'https: //gnwtggeptzkqnduuthto.supabase.co',
const fallbackSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY',

// Determine if user-provided credentials are valid
const userProvidedUrlIsValid = !!(envSupabaseUrl && envSupabaseUrl.includes('supabase.co') && !envSupabaseUrl.includes('your-project')),
const userProvidedKeyIsValid = !!(envSupabaseAnonKey && envSupabaseAnonKey.startsWith('eyJ') && !envSupabaseAnonKey.includes('your-anon-key')),

export const isUsingUserProvidedSupabaseCredentials = userProvidedUrlIsValid && userProvidedKeyIsValid,

// Determine the credentials to be used (either user-provided or fallback)
const activeSupabaseUrl = isUsingUserProvidedSupabaseCredentials ? envSupabaseUrl : fallbackSupabaseUrl,
const activeSupabaseAnonKey = isUsingUserProvidedSupabaseCredentials ? envSupabaseAnonKey : fallbackSupabaseAnonKey,

// Check if the actual client instance from '@/utils/supabase/client' was successfully initialized.
// A successfully initialized client should not be null and should have an 'auth' property.
const clientInstanceSuccessfullyInitialized = !!(actualSupabaseClientFromUtils && typeof actualSupabaseClientFromUtils.auth !== 'undefined'),
=======
export const _supabase = actualSupabaseClientFromUtils;


// Get actual environment variables
const _envSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const _envSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fallback credentials
const _fallbackSupabaseUrl = 'https://gnwtggeptzkqnduuthto.supabase.co';
const _fallbackSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';

// Determine if user-provided credentials are valid
const _userProvidedUrlIsValid = !!(envSupabaseUrl && envSupabaseUrl.includes('supabase.co') && !envSupabaseUrl.includes('your-project'));
const _userProvidedKeyIsValid = !!(envSupabaseAnonKey && envSupabaseAnonKey.startsWith('eyJ') && !envSupabaseAnonKey.includes('your-anon-key'));

export const _isUsingUserProvidedSupabaseCredentials = userProvidedUrlIsValid && userProvidedKeyIsValid;

// Determine the credentials to be used (either user-provided or fallback)
const _activeSupabaseUrl = isUsingUserProvidedSupabaseCredentials ? envSupabaseUrl : fallbackSupabaseUrl;
const _activeSupabaseAnonKey = isUsingUserProvidedSupabaseCredentials ? envSupabaseAnonKey : fallbackSupabaseAnonKey;

// Check if the actual client instance from '@/utils/supabase/client' was successfully initialized.
// A successfully initialized client should not be null and should have an 'auth' property.
const _clientInstanceSuccessfullyInitialized = !!(actualSupabaseClientFromUtils && typeof actualSupabaseClientFromUtils.auth !== 'undefined');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// isSupabaseConfigured now checks:
// 1. If the active credentials (user-provided or fallback) *appear* to be valid.
// 2. If the Supabase client instance itself was *actually* initialized successfully.
export const _isSupabaseConfigured = !!(
  activeSupabaseUrl &&
  activeSupabaseAnonKey &&
  activeSupabaseUrl.includes('supabase.co') && // Basic check on window.URL format
  activeSupabaseAnonKey.startsWith('eyJ') &&   // Basic check on key format
  clientInstanceSuccessfullyInitialized        // Crucial check on actual client instantiation
),

// Only log in development and when debug is enabled
if (process.env.NODE_ENV === 'development' && process.env.DEBUG_ENV_CONFIG === 'true') {_logDebug('Supabase integration details (src/integrations/supabase/client.ts):', _{ data: {
    activeUrlUsed: `${(activeSupabaseUrl ?? '').substring(0, _30)}...`,
    isSupabaseConfiguredFinal: isSupabaseConfigured,
    credentialsAppearValid: !!(activeSupabaseUrl && activeSupabaseAnonKey && activeSupabaseUrl.includes('supabase.co') && activeSupabaseAnonKey.startsWith('eyJ')),
    clientInstanceInitialized: clientInstanceSuccessfullyInitialized,
    isUsingUserProvided: isUsingUserProvidedSupabaseCredentials,
    envUrlActuallyProvided: !!envSupabaseUrl,
    envKeyActuallyProvided: !!envSupabaseAnonKey,
    actualClientAuthExists: typeof actualSupabaseClientFromUtils?.auth !== 'undefined'
  }})
}


// Enhanced helper function to check online status
<<<<<<< HEAD
async function checkOnline(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine
  }
=======
async function checkOnline(): Promise<boolean> {_if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    return navigator.onLine;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  // Assume online if navigator.onLine is not available (e.g., in Node.js environment for tests)
  return true
}

// Optimized safeFetch for development mode with better error handling
export async function safeFetch(_url: string, _options: RequestInit = {}) {_try {
    // In development, _provide faster mock responses for specific endpoints if needed
    if (process.env.NODE_ENV === 'development' && url.includes('/favorites')) {
<<<<<<< HEAD
      // logDebug(`safeFetch DEV mock for: ${url}`),
      return {
        ok: true,
        status: 200,
        json: async () => ([]),
        text: async () => '[]'} as Response
    }
    
    // Use real fetch for other cases
    return fetch(url, options)
  } catch (error) {
    logWarn('safeFetch: Fetch failed, returning mock error response:', { url, error }),
    return {
      ok: false,
      status: 500, // Or a more appropriate error code like 0 for network error
      json: async () => ({ error: 'Fetch failed due to network or other issue' }),
      text: async () => JSON.stringify({ error: 'Fetch failed due to network or other issue' })} as Response
=======
      // logDebug(`safeFetch DEV mock for: ${url}`);
      return {_ok: true, _status: 200, _json: async () => ([]), _text: async () => '[]'} as Response;
    }
    
    // Use real fetch for other cases
    return fetch(url, options);
  } catch (error) {_logWarn('safeFetch: Fetch failed, _returning mock error response:', _{ url, _error});
    return {_ok: false, _status: 500, _// Or a more appropriate error code like 0 for network error
      json: async () => ({ error: 'Fetch failed due to network or other issue'}),
      text: async () => JSON.stringify({_error: 'Fetch failed due to network or other issue'})} as Response;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

  captureException(lastError),
  throw new Error('Failed to connect to Supabase')
}
