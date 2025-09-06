 // Export the actual supabase client instance (which could be SupabaseClient | null) // This is what AuthProvider and other parts of the app will use. // isSupabaseConfigured now checks: // 1. If the active credentials (user-provided or fallback) *appear* to be valid. // 2. If the Supabase client instance itself was *actually* initialized successfully.
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

}) 
}// Enhanced helper function to check online status // Assume online if navigator.onLine is not available (e.g., in Node.js environment for tests) return true 
}// Optimized safeFetch for development mode with better error handling export async function safeFetch (url: string, options: RequestInit = {
  
}) {
  try {
  // In development, provide faster mock responses for specific endpoints if needed if (process.env.NODE ENV === 'development' && url.includes ('/favorites') ) {
  

}captureException (lastError);
throw new Error ('Failed to connect to Supabase') 
