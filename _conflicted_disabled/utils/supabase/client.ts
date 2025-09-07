<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
=======
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = $2;
const supabaseAnonKey = $2;
export const supabase = createClient($2);
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
