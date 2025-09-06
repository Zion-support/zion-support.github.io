import { serve } from 'https: //deno.land / std@0.131.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.20.0';,
import { cors_headers } from '../_shared / cors.ts';
console.log ("Track Referral function started!");
;
serve (async (req) => {
  // Handle CORS pre - flight request;
  // Check condition
if ( {) {
  $2
}
    return new Response ('ok', { headers: cors_headers });
  }
  // Get request data;
  const { ref_code, user_id, email } = await req.json ();
  const ip_address = req.headers.get ('x - forwarded - for') || req.headers.get ('cf - connecting - ip');
;
  // Create Supabase client;
  const supabase = create_client (
    Deno.env.get ('SUPABASE_URL') ?? '';
    Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY') ?? '');
;
  try {
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: ref_error } = await supabase;
      .from ('referral_codes');
      .select ('user_id');
      .eq ('code', ref_code);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error finding referral code:', ref_error);
      return new Response (
        JSON.stringify ({ error: 'Invalid referral code' });
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 400 }
      );
    }
    // Check if this user has already been referred;
    const { data: existing_referral } = await supabase;
      .from ('referrals');
      .select ('id');
      .eq ('referred_id', user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({ message: 'User already has a referral' });
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 200 }
      );
    }
    // Create the referral record;
    const { data, error } = await supabase;
      .from ('referrals');
      .insert ([{
        referrer_id: refCodeData.user_id;
        referred_id: user_id;
        referral_code: ref_code;
        email,
        ip_address: ip_address;
      }]);
      .select ();
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error creating referral:', error);
      return new Response (
        JSON.stringify ({ error: 'Failed to create referral' });
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 500 }
      );
    }
    return new Response (
      JSON.stringify ({ success: true, data });
      { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 200 }
    );
  } catch (err) {
    console.error ('Unexpected error processing referral:', err);
    return new Response (
      JSON.stringify ({ error: 'Internal server error' });
      { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 500 }
    );
  }
});
;