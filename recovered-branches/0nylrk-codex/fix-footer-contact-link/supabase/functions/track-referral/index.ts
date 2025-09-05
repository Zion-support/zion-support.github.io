



serve(_async (req) => {_// Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', _{ headers: corsHeaders});
  }

  // Get request data
  const {_refCode, _userId, _email} = await req.json();
  const _ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip');

  // Create Supabase client
  const _supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  try {_// Look up the referrer from the referral code
    const { data: refCodeData, _error: refError} = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();

    if (refError || !refCodeData) {_return new Response(
        JSON.stringify({ error: 'Invalid referral code'}),
        {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 400 }
      );
    }

    // Check if this user has already been referred
    const {_data: existingReferral} = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single();

    if (existingReferral) {_return new Response(
        JSON.stringify({ message: 'User already has a referral'}),
        {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}, status: 200 }
      );
    }

    // Create the referral record
    const {_data, _error} = await supabase
      .from('referrals')
      .insert([{_referrer_id: refCodeData.user_id, _referred_id: userId, _referral_code: refCode, _email, _ip_address: ipAddress}])
      .select()
      .single();

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
  }
});
