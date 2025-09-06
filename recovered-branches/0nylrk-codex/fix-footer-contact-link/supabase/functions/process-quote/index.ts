

const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',

const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Service {
  id: string;
  title: string
  category: string

}
interface RequestBody {
  service: Service | null
  quoteDetails: QuoteDetails
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { service, quoteDetails } = await req.json() as RequestBody;
    // Extract user identity if authenticated
    let userId = null;
    try {
      // Get the JWT from the Authorization header
      const authHeader = req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (!error && user) {
          userId = user.id

        }
      }
    } catch (authError) {
      // // // console.log("Auth error:", authError),
      // Continue without user identity

                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}

                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}
                Start Date: ${quoteDetails.startDate |'Not specified'}
                End Date: ${quoteDetails.endDate |'Not specified'}`
              }

        }
      }
    } catch (openAIError) {
      console.error("OpenAI error:", openAIError),
      // Continue without AI analysis

  }
});
