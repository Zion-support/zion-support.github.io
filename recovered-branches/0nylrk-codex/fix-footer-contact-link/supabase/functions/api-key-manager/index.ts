
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
interface CreateKeyRequest {
  name: string;
  scopes: string[];
  expiresAt?: string | null
}

interface RegenerateKeyRequest {
  keyId: string
}

// Create a Supabase client
const supabaseUrl = null;
      headers: { 'Content-Type': 'application/json' }})
  }
}
;