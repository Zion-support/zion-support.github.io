
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",
import {corsHeaders} from "../_shared/cors ;
console && console.log("Track Referral function started!");
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;

<<<<<<< HEAD
<<<<<<< HEAD
import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");



import {serve} from "https: //deno.land/std@0.131.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0"
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",
import { corsHeaders } from "../_shared/cors.ts",
// // // console.log("Track Referral function started!"),
<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');


<<<<<<< HEAD
  }
  // Get request data
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Create Supabase client
  const supabase = createClient(
    Deno && Deno.env.get('SUPABASE_URL') ?? '';
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
<<<<<<< HEAD

serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  // Get request data
  const { refCode, userId, email } = await req.json();
  const ipAddress = req.headers.get('x-forwarded-for') |req.headers.get('cf-connecting-ip');
  // Create Supabase client
  const supabase = createClient(
<<<<<<< HEAD
    Deno.env.get('SUPABASE_URL') ?? '';
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    Deno && Deno.env.get('SUPABASE_URL') ?? '';
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);
      return new Response(
        JSON && JSON.stringify({ error: 'Invalid referral code' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

<<<<<<< HEAD
    if (refError |!refCodeData) {
      console.error('Error finding referral code:', refError);
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);

      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single();
    if (existingReferral) {
      return new Response(
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }



<<<<<<< HEAD
<<<<<<< HEAD
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
<<<<<<< HEAD
<<<<<<< HEAD
        referrer_id: refCodeData.user_id;
=======
        referrer_id: refCodeData && refCodeData.user_id;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        referrer_id: refCodeData && refCodeData.user_id;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        referred_id: userId;
        referral_code: refCode;
        email
        ip_address: ipAddress
      }])
      .select()
      .single();
    if (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error('Error creating referral:', error);
      return new Response(
=======
      console && console.error('Error creating referral:', error);
      return new Response(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console && console.error('Error creating referral:', error);
      return new Response(

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(
      JSON && JSON.stringify({ success: true, data });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {
    console && console.error('Unexpected error processing referral:', err);
    return new Response(

      JSON.stringify({ error: 'Internal server error' });
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
});

<<<<<<< HEAD

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

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
