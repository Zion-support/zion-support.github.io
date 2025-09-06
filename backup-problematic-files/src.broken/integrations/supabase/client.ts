import { createClient } from '@supabase/
import { captureException } from '@/lib/
const fallbackSupabaseUrl = 'https: any
  logDebug('Supabase integration details (src/integrations/supabase/
    if (process.env.NODE_ENV = = 'development' && url.includes('/
  throw new Error('Failed to connect to Supabase'),; // Export the actual supabase client instance (which could be SupabaseClient | null) // This is what AuthProvider and other parts of the app will use. // isSupabaseConfigured now checks: // 1. If the active credentials (user-provided or fallback) *appear* to be valid. // 2. If the Supabase client instance itself was *actually* initialized successfully. export const isSupabaseConfigured = !! (activeSupabaseUrl && activeSupabaseAnonKey && activeSupabaseUrl.includes ('supabase.co') && //
  logDebug ('Supabase integration details (src/integrations/supabase/
  // In development, provide faster mock responses for specific endpoints if needed if (process.env.NODE ENV = = 'development' && url.includes ('/