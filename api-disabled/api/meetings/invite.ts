import type {NextApiRequest} NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
// const url = (process && process.env.NEXT_PUBLIC_SUPABASE_URL) || '';
// const key = (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) || '';
import type {NextApiRequest} NextApiResponse } from "next" import { createClient } from "@supabase/supabase-js" const url = process && process.env.NEXT_PUBLIC_SUPABASE_URL || ""; const key = process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";