
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0";
import { corsHeaders } from "../_shared/cors.ts";
console.log($2);
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders})
  }

  // Get request data
  const { refCode, userId, email } = await req.json($2);
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get($2);
  // Create Supabase client
  const supabase = $2;
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  ),

  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError} = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single($2);
    if (refError || !refCodeData) {
      console.error($2);
      return new Response($2);
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400}
      )
    }

    // Check if this user has already been referred
    const { data: existingReferral} = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single($2);
    if (existingReferral) {
      return new Response($2);
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200}
      )
    }

    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        referrer_id: refCodeData.user_id,
        referred_id: userId,
        referral_code: refCode,
        email,
        ip_address: ipAddress}])
      .select()
      .single($2);
    if (error) {
      console.error($2);
      return new Response($2);
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500}
      )
    }

    return new Response($2);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200}
    )
    
  } catch (err) {
    console.error($2);
    return new Response($2);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500}
    )
  }
}),
