import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // In environments without envs (build, tests), export a minimal mock to avoid crashes
  // while still surfacing a clear error if actually used.
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing; exporting mock client');
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({} as ReturnType<typeof createClient>);

