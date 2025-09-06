<<<<<<< HEAD

import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",
import {corsHeaders} from "../_shared/cors ;
console && console.log("Track Referral function started!");
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;

import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");



import {serve} from "https: //deno.land/std@0.131.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0"
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",
import { corsHeaders } from "../_shared/cors.ts",
// // // console.log("Track Referral function started!"),



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');


<<<<<<< HEAD
=======
  }
  // Get request data
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Create Supabase client
  const supabase = createClient(
    Deno && Deno.env.get('SUPABASE_URL') ?? '';
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
<<<<<<< HEAD
=======

serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  // Get request data
  const { refCode, userId, email } = await req.json();
  const ipAddress = req.headers.get('x-forwarded-for') |req.headers.get('cf-connecting-ip');
  // Create Supabase client
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '';
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();
<<<<<<< HEAD


    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);

=======
    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return new Response(
        JSON && JSON.stringify({ error: 'Invalid referral code' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

<<<<<<< HEAD
=======
    if (refError |!refCodeData) {
      console.error('Error finding referral code:', refError);
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
import { corsHeaders } from "../_shared/cors.ts",;
// // // console.log("Track Referral function started!"),;
serve(async (req) => {;
  // Handle CORS pre-flight request;
  if (req.method === 'OPTIONS') {;
    return new Response('ok', { headers: corsHeaders });
  }
;
  // Get request data;
  const { refCode, userId, email } = await req.json(),;
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;
  // Create Supabase client;
  const supabase = createClient(;
    Deno.env.get('SUPABASE_URL') ?? '',;
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  ),;
  try {;
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: refError } = await supabase;
      .from('referral_codes');
      .select('user_id');
      .eq('code', refCode);
      .single(),;
    if (refError || !refCodeData) {;
      console.error('Error finding referral code:', refError),;
      return new Response(;
        JSON.stringify({ error: 'Invalid referral code' }),;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single();
    if (existingReferral) {
      return new Response(
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        JSON.stringify({ message: 'User already has a referral' });
;
    // Check if this user has already been referred;
    const { data: existingReferral } = await supabase;
      .from('referrals');
      .select('id');
      .eq('referred_id', userId);
      .single(),;
    if (existingReferral) {;
      return new Response(;
        JSON.stringify({ message: 'User already has a referral' }),;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
<<<<<<< HEAD
        referrer_id: refCodeData && refCodeData.user_id;
=======
        referrer_id: refCodeData.user_id;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        referred_id: userId;
        referral_code: refCode;
        email
        ip_address: ipAddress
      }])
      .select()
      .single();
    if (error) {
<<<<<<< HEAD
      console && console.error('Error creating referral:', error);
      return new Response(

=======
      console.error('Error creating referral:', error);
      return new Response(
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        JSON.stringify({ error: 'Failed to create referral' });
;
    // Create the referral record;
    const { data, error } = await supabase;
      .from('referrals');
      .insert([{;
        referrer_id: refCodeData.user_id,;
        referred_id: userId,;
        referral_code: refCode,;
        email,;
        ip_address: ipAddress;
      }]);
      .select();
      .single(),;
    if (error) {;
      console.error('Error creating referral:', error),;
      return new Response(;
        JSON.stringify({ error: 'Failed to create referral' }),;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }



    return new Response(
      JSON && JSON.stringify({ success: true, data });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {
    console && console.error('Unexpected error processing referral:', err);
    return new Response(

      JSON.stringify({ error: 'Internal server error' });

        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {
    console.error('Unexpected error processing referral:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' });
;
    return new Response(;
      JSON.stringify({ success: true, data }),;
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (err) {;
    console.error('Unexpected error processing referral:', err),;
    return new Response(;
      JSON.stringify({ error: 'Internal server error' }),;


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
});
<<<<<<< HEAD


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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


import { serve } from "https://deno.land/std@0.131.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.20.0",;
import { corsHeaders } from "../_shared/cors.ts",;
;
// // // console.log("Track Referral function started!"),;
;
serve(async (req) => {;
  // Handle CORS pre-flight request;
  if (req.method === 'OPTIONS') {;
    return new Response('ok', { headers:corsHeaders }),;
  }
;
  // Get request data;
  const { refCode, userId, email } = await req.json(),;
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;
;
  // Create Supabase client;
  const supabase = createClient(;
    Deno.env.get('SUPABASE_URL') ?? '',;
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  ),;
;
  try {;
    // Look up the referrer from the referral code;
    const { data:refCodeData, error:refError } = await supabase;
      .from('referral_codes');
      .select('user_id');
      .eq('code', refCode);
      .single(),;
;
    if (refError || !refCodeData) {;
      console.error('Error finding referral code:', refError),;
      return new Response(;
        JSON.stringify({ error:'Invalid referral code' }),;
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:400 }
      ),;
    }
;
    // Check if this user has already been referred;
    const { data:existingReferral } = await supabase;
      .from('referrals');
      .select('id');
      .eq('referred_id', userId);
      .single(),;
;
    if (existingReferral) {;
      return new Response(;
        JSON.stringify({ message:'User already has a referral' }),;
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:200 }
      ),;
    }
;
    // Create the referral record;
    const { data, error } = await supabase;
      .from('referrals');
      .insert([{;
        referrer_id:refCodeData.user_id,;
        referred_id:userId,;
        referral_code:refCode,;
        email,;
        ip_address:ipAddress;
      }]);
      .select();
      .single(),;
;
    if (error) {;
      console.error('Error creating referral:', error),;
      return new Response(;
        JSON.stringify({ error:'Failed to create referral' }),;
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:500 }
      ),;
    }
;
    return new Response(;
      JSON.stringify({ success:true, data }),;
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:200 }
    ),;
    ;
  } catch (err) {;
    console.error('Unexpected error processing referral:', err),;
    return new Response(;
      JSON.stringify({ error:'Internal server error' }),;
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:500 }
    ),;
  }
}),; //Handle CORS pre-flight request if (req.method === 'OPTIONS') {
  //Create Supabase client const supabase = createClient (Deno.env.get ('SUPABASE URL') ?? '';
Deno.env.get ('SUPABASE SERVICE ROLE KEY') ?? '');
try {
  //Look up the referrer from the referral code const {
  data: refCodeData, error: refError 
}= await supabase .from ('referral codes') .select ('user id') .eq ('code', refCode) .single ();
}//Check if this user has already been referred const {
  data: existingReferral 
}= await supabase .from ('referrals') .select ('id') .eq ('referred id', userId) .single ();
}// Create the referral record const {
  data, error 
}= await supabase .from ('referrals') .insert ([ {
  referrer id: refCodeData.user id, referred id: userId, referral code: refCode, email, ip address: ipAddress 
}]) .select () .single ();
}
});

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
