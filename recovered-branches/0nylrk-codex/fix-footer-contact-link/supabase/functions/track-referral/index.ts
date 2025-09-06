<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",
import {corsHeaders} from "../_shared/cors ;
console && console.log("Track Referral function started!");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
=======


import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");

=======

<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.131.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0"
=======
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",
import { corsHeaders } from "../_shared/cors.ts",
// // // console.log("Track Referral function started!"),
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts

<<<<<<< HEAD
=======
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');


========
  }
  // Get request data
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
  // Create Supabase client
  const supabase = createClient(
    Deno && Deno.env.get('SUPABASE_URL') ?? '';
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
<<<<<<< HEAD
  }
  // Get request data
  const { refCode, userId, email } = await req.json();
  const ipAddress = req.headers.get('x-forwarded-for') |req.headers.get('cf-connecting-ip');
  // Create Supabase client
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '';
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts


    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);

========
    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
      return new Response(
        JSON && JSON.stringify({ error: 'Invalid referral code' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
=======

=======
    if (refError |!refCodeData) {
      console.error('Error finding referral code:', refError);
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single();
    if (existingReferral) {
      return new Response(
<<<<<<< HEAD

        JSON.stringify({ message: 'User already has a referral' });

=======
        JSON.stringify({ message: 'User already has a referral' });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
<<<<<<< HEAD
        referrer_id: refCodeData && refCodeData.user_id;
=======
        referrer_id: refCodeData.user_id;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

        JSON.stringify({ error: 'Failed to create referral' });

=======
      console.error('Error creating referral:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to create referral' });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return new Response(
      JSON && JSON.stringify({ success: true, data });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {
    console && console.error('Unexpected error processing referral:', err);
    return new Response(

      JSON.stringify({ error: 'Internal server error' });

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return new Response(
      JSON.stringify({ success: true, data });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {
    console.error('Unexpected error processing referral:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
});
<<<<<<< HEAD

=======
<<<<<<< HEAD


========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/track-referral/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
