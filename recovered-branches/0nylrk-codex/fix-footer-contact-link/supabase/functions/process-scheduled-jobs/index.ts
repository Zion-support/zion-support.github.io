import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0";
const corsHeaders = null;
          read: false
        })
      }
    }
    
    return contentData
  } catch (error) {
    console.error(`Error processing ${contentType} generation:`, error)
  }
}
;