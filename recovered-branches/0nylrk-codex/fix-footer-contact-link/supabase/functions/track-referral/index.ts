

import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })

=======
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');


  // Create Supabase client
  const supabase = createClient(
    Deno && Deno.env.get('SUPABASE_URL') ?? '';
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );
  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();


    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);

      return new Response(
        JSON && JSON.stringify({ error: 'Invalid referral code' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single();
    if (existingReferral) {
      return new Response(

        JSON.stringify({ message: 'User already has a referral' });

        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        referrer_id: refCodeData && refCodeData.user_id;
        referred_id: userId;
        referral_code: refCode;
        email
        ip_address: ipAddress
      }])
      .select()
      .single();
    if (error) {
      console && console.error('Error creating referral:', error);
      return new Response(

        JSON.stringify({ error: 'Failed to create referral' });

        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return new Response(
      JSON && JSON.stringify({ success: true, data });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {
    console && console.error('Unexpected error processing referral:', err);
    return new Response(

      JSON.stringify({ error: 'Internal server error' });

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
});
