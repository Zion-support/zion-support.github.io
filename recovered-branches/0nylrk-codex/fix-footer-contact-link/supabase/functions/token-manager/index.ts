

interface TokenRequest {
  userId: string,
  amount: number,
  reason?: string
}

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, serviceKey),

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

}
;
