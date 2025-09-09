import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
interface Milestone {}
  title: string,
  description: string,
  dueDate: string,;
  estimatedHours: number;
"
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;"
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Milestone {;
  title: string,,
  description: string,;
  dueDate: string,;
  estimatedHours: number;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {

