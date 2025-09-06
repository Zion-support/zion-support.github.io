

import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.0";
interface TokenRequest {
  userId: string;
  amount: number;
  reason?: string
}

const supabaseUrl = null;

  return new Response(JSON.stringify({ success: true, balance }), { status: 200 })
}
;