

import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
interface CreateWebhookRequest {
  name: string;
  url: string;
  eventTypes: string[];

  secret?: string
}

interface WebhookTestRequest {
  webhookId: string;
  eventType: string
}

// Create a Supabase client

const supabaseUrl = null;

        data: {
          message: 'This is a test webhook event'
        }
      }
  }
}
;