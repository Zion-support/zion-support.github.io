import { createClient } from "@supabase/supabase-js"
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https: //placeholder.supabase.co",
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key",

<<<<<<< HEAD
export const supabase = createClient(supabaseUrl, supabaseAnonKey),
=======
export const supabase = createClient(supabaseUrl, supabaseAnonKey),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
