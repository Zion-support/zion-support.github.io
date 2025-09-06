import { createClient } from "@supabase/supabase-js"
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https: //placeholder.supabase.co",
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key",

export const supabase = createClient(supabaseUrl, supabaseAnonKey),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
