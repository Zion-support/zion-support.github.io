
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
=======

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const supabase = createClient(supabaseUrl, supabaseServiceKey);
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Parse the URL to get the tracking parameters

serve(async (req) => {
  // Parse the URL to get the tracking parameters
=======


=======  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"
  const campaignId = url.searchParams.get("cid");
  const userId = url.searchParams.get("uid");
  const redirectUrl = url.searchParams.get("redirect");
  }
});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
