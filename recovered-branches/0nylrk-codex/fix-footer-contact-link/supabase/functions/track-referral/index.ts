
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",
import { corsHeaders } from "../_shared/cors.ts",
// // // console.log("Track Referral function started!"),
=======
import { serve } from &quot;https://deno.land/std@0.131.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.20.0&quot;;
import { corsHeaders } from &quot;../_shared/cors.ts&quot;;

// console.log(&quot;Track Referral function started!&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13


serve(_async (req) => {_// Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
<<<<<<< HEAD
    return new Response('ok', { headers: corsHeaders })
  }

  // Get request data
  const { refCode, userId, email } = await req.json(),
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),
=======
    return new Response('ok', _{ headers: corsHeaders});
  }

  // Get request data
  const {_refCode, _userId, _email} = await req.json();
  const _ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Create Supabase client
  const _supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  ),

  try {_// Look up the referrer from the referral code
    const { data: refCodeData, _error: refError} = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single(),

<<<<<<< HEAD
    if (refError || !refCodeData) {
      console.error('Error finding referral code:', refError),
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
=======
    if (refError || !refCodeData) {_return new Response(
        JSON.stringify({ error: 'Invalid referral code'}),
        {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 400 }
      );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Check if this user has already been referred
    const {_data: existingReferral} = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single(),

<<<<<<< HEAD
    if (existingReferral) {
      return new Response(
        JSON.stringify({ message: 'User already has a referral' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
=======
    if (existingReferral) {_return new Response(
        JSON.stringify({ message: 'User already has a referral'}),
        {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 200 }
      );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Create the referral record
    const {_data, _error} = await supabase
      .from('referrals')
      .insert([{_referrer_id: refCodeData.user_id, _referred_id: userId, _referral_code: refCode, _email, _ip_address: ipAddress}])
      .select()
      .single(),

<<<<<<< HEAD
    if (error) {
      console.error('Error creating referral:', error),
      return new Response(
        JSON.stringify({ error: 'Failed to create referral' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
    
  } catch (err) {
    console.error('Unexpected error processing referral:', err),
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
=======
    if (error) {_return new Response(
        JSON.stringify({ error: 'Failed to create referral'}),
        {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 500 }
      );
    }

    return new Response(
      JSON.stringify({_success: true, _data}),
      {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 200 }
    );
    
  } catch (err) {_return new Response(
      JSON.stringify({ error: 'Internal server error'}),
      {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 500 }
    );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
