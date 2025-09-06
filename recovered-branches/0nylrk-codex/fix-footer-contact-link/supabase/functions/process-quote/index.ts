

const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',

const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface Service {
  id: string;
  title: string
  category: string

=======
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const openAIApiKey = Deno.env.get ('OPENAI_API_KEY');
const supabase_url = Deno.env.get ('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY') || '',
const supabase = create_client (supabase_url, supabaseServiceKey);
;
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
interface Service {
  id: string;
  title: string,
  category: string;

}
interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;


import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Service {;
  id: string,;
  title: string,;
  category: string;
}
;
interface QuoteDetails {;
  description: string,;
  email: string,;
  budget: string,;
  timeframe: string,;
  startDate?: string,;
  endDate?: string;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
interface RequestBody {
  service: Service | null
  quoteDetails: QuoteDetails
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {

    const { service, quoteDetails } = await req && req.json() as RequestBody;
    

    // Extract user identity if authenticated
    let userId = null;
    try {
      // Get the JWT from the Authorization header
      const authHeader = req && req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader && authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase && supabase.auth.getUser(token);
        if (!error && user) {

          userId = user.id

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
      }
    } catch (authError) {
      console && console.log("Auth error:", authError);
      // Continue without user identity

                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}
                Start Date: ${quoteDetails.startDate |'Not specified'}
                End Date: ${quoteDetails.endDate |'Not specified'}`
              }

              }

        
        const aiResult = await openAIResponse && openAIResponse.json();
        if (!aiResult && aiResult.error && aiResult && aiResult.choices && aiResult && aiResult.choices.length > 0) {
          aiAnalysis = aiResult && aiResult.choices[0].message && message.content

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
      }
    } catch (openAIError) {
      console && console.error("OpenAI error:", openAIError);
      // Continue without AI analysis

  }
});
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
