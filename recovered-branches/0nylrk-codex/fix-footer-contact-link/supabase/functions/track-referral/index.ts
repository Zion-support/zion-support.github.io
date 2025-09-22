<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",
import {corsHeaders} from "../_shared/cors ;
console && console.log("Track Referral function started!");
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;

import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
// // // console.log("Track Referral function started!"),

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })

  const { refCode, userId, email } = await req && req.json();'
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');

  // Create Supabase client;
  const supabase = createClient('
    Deno && Deno.env.get('SUPABASE_URL') ?? '';'
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  // Get request data
  const { refCode, userId, email } = await req.json();
  const ipAddress = req.headers.get('x-forwarded-for') |req.headers.get('cf-connecting-ip');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Create Supabase client
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '';
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
=======
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })

  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');

  // Create Supabase client
  const supabase = createClient(
    Deno && Deno.env.get('SUPABASE_URL') ?? '';
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",;
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",;
import {corsHeaders} from "../_shared/cors ;
console && console.log("Track Referral function started!");
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })  );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase

import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",""
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",""
import {corsHeaders} from "../_shared/cors ;""
console && console.log("Track Referral function started!");""
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",""
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;""
import {corsHeaders} from "../_shared/cors.ts";""
console.log("Track Referral function started!");""
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",""
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",""
import { corsHeaders } from "../_shared/cors.ts",""
// // // console.log("Track Referral function started!"),"
serve(async (req) => {
  // Handle CORS pre-flight request;"
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  const { refCode, userId, email } = await req && req.json();
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');
  // Create Supabase client;
  const supabase = createClient()
    Deno && Deno.env.get('SUPABASE_URL') ?? ;
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? 
  );
  try {
  // TODO: Implement
}
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: refError } = await supabase;
pr-12325
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();

    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);

if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });      return new Response(
        JSON && JSON.stringify({ error: 'Invalid referral code' });
=======

  );
  try {}
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: refError } = await supabase'
      .from('referral_codes')'
      .select('user_id')'
      .eq('code', refCode)
      .single();

      return new Response('
        JSON && JSON.stringify({ error: 'Invalid referral code' });'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
        JSON.stringify({ error: 'Invalid referral code' });
"
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",;"
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",;"
import { corsHeaders } from "../_shared/cors.ts",;"
// // // console.log("Track Referral function started!"),;
serve(async (req) => {;
  // Handle CORS pre-flight request;'
  if (req.method === 'OPTIONS') {;'
=======

if (refError |!refCodeData) {
      console.error('Error finding referral code:', refError);
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' });
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
import { corsHeaders } from "../_shared/cors.ts",;
// // // console.log("Track Referral function started!"),;
serve(async (req) => {;
  // Handle CORS pre-flight request;
  if (req.method === 'OPTIONS') {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return new Response('ok', { headers: corsHeaders });
  }
;
  // Get request data;
const { refCode, userId, email } = await req.json(),;'
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;
  // Create Supabase client;
  const supabase = createClient(;'
    Deno.env.get('SUPABASE_URL') ?? '',;'
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  ),;
  try {;
    // Look up the referrer from the referral code;
const { data: refCodeData, error: refError } = await supabase;'
      .from('referral_codes');'
      .select('user_id');'
      .eq('code', refCode);
      .single(),;
    if (refError || !refCodeData) {;'
      console.error('Error finding referral code:', refError),;
      return new Response(;'
        JSON.stringify({ error: 'Invalid referral code' }),;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    const { data: refCodeData, error: refError } = await supabase;
      .from('referral_codes');
      .select('user_id');
      .eq('code', refCode);
      .single(),;
    if (refError || !refCodeData) {;
      console.error('Error finding referral code:', refError),;
      return new Response(;
        JSON.stringify({ error: 'Invalid referral code' }),;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

        JSON && JSON.stringify({ error: 'Invalid referral code' });
=======

'
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
<<<<<<< HEAD
    }
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')

      .eq('referred_id', userId)
      .single();
    if (existingReferral) {}
      return new Response(

'
        JSON.stringify({ message: 'User already has a referral' });

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      .eq('referred_id', userId)
      .single();
    if (existingReferral) {
      return new Response(

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Create the referral record
    const { data, error } = await supabase
=======
    // Create the referral record;
    const { data, error } = await supabase'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .from('referrals')
      .insert([{}
        referrer_id: refCodeData && refCodeData.user_id;

        referred_id: userId;
        referral_code: refCode;
        email;
        ip_address: ipAddress;
      }])
      .select()
      .single();
    if (error) {}
'
      console && console.error('Error creating referral:', error);
      return new Response(
'
        JSON.stringify({ error: 'Failed to create referral' });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
{ headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      )
    }
        JSON && JSON.stringify({ message: 'User already has a referral' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }
    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        referrer_id: refCodeData && refCodeData.user_id;
referrer_id: refCodeData.user_id;
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

console.error('Error creating referral:', error);
      return new Response(
      console && console.error('Error creating referral:', error);
      return new Response(
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

        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    }        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        JSON && JSON.stringify({ message: 'User already has a referral' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        JSON && JSON.stringify({ error: 'Failed to create referral' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return new Response(
      JSON && JSON.stringify({ success: true, data });'
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (err) {'
    console && console.error('Unexpected error processing referral:', err);
    return new Response('
      JSON.stringify({ error: 'Internal server error' });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
{ headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    )
      JSON && JSON.stringify({ error: 'Internal server error' });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
      JSON && JSON.stringify({ error: 'Internal server error' });
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      JSON && JSON.stringify({ error: 'Internal server error' });      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
      JSON && JSON.stringify({ error: 'Internal server error' });
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",""
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",""
import {corsHeaders} from "../_shared/cors ;""
console && console.log("Track Referral function started!");""
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",""
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;""
import {corsHeaders} from "../_shared/cors.ts";""
console.log("Track Referral function started!");""
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",""
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",""
import { corsHeaders } from "../_shared/cors.ts",""
// // // console.log("Track Referral function started!"),"
serve(async (req) => {
  // Handle CORS pre-flight request;"
  if (req && req.method === 'OPTIONS') {''
    return new Response('ok', { headers: corsHeaders })'
  const { refCode, userId, email } = await req && req.json();'
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');'
  // Create Supabase client;
  const supabase = createClient()'
    Deno && Deno.env.get('SUPABASE_URL') ?? '';''
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '''
  );
  try {
  // TODO: Implement
}
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: refError } = await supabase;'
      .from('referral_codes')''
      .select('user_id')''
      .eq('code', refCode)'
      .single();

    if (refError || !refCodeData) {'
      console && console.error('Error finding referral code:', refError);'
      return new Response()'
        JSON && JSON.stringify({ error: 'Invalid referral code' });''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }'
      )
    }

      return new Response()'
        JSON.stringify({ error: 'Invalid referral code' });''
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",;""
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",;""
import { corsHeaders } from "../_shared/cors.ts",;""
// // // console.log("Track Referral function started!"),;"
serve(async (req) => {;
  // Handle CORS pre-flight request;"
  if (req.method === 'OPTIONS') {;''
    return new Response('ok', { headers: corsHeaders });'
  }
;
  // Get request data;
  const { refCode, userId, email } = await req.json(),;'
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;'
  // Create Supabase client;
  const supabase = createClient(;)'
    Deno.env.get('SUPABASE_URL') ?? '',;''
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';'
  ),;
  try {;
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: refError } = await supabase;'
      .from('referral_codes');''
      .select('user_id');''
      .eq('code', refCode);'
      .single(),;
    if (refError || !refCodeData) {;'
      console.error('Error finding referral code:', refError),;'
      return new Response(;)'
        JSON.stringify({ error: 'Invalid referral code' }),;''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }'
      )
    }

'
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }'
      )
    }

'
        JSON && JSON.stringify({ error: 'Invalid referral code' });''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }'
      )
    }
    // Check if this user has already been referred;
    const { data: existingReferral } = await supabase;'
      .from('referrals')''
      .select('id')''
      .eq('referred_id', userId)'
      .single();
    if (existingReferral) {
      return new Response(
)'
        JSON.stringify({ message: 'User already has a referral' });'
;
    // Check if this user has already been referred;
    const { data: existingReferral } = await supabase;'
      .from('referrals');''
      .select('id');''
      .eq('referred_id', userId);'
      .single(),;
    if (existingReferral) {;
      return new Response(;)'
        JSON.stringify({ message: 'User already has a referral' }),;''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }'
      )
    }

'
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }'
      )
    }
'
        JSON && JSON.stringify({ message: 'User already has a referral' });''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }'
      )
    }
    // Create the referral record;
    const { data, error } = await supabase;'
      .from('referrals')'
      .insert([{
        referrer_id: refCodeData && refCodeData.user_id;,
  referrer_id: refCodeData && refCodeData.user_id;
        referred_id: userId;,
  referral_code: refCode;
        email;
        ip_address: ipAddress;)]
      }])
      .select()
      .single();
    if (error) {'
      console && console.error('Error creating referral:', error);'
      return new Response(
)'
      console && console.error('Error creating referral:', error);'
      return new Response()'
        JSON.stringify({ error: 'Failed to create referral' });'
;
    // Create the referral record;
    const { data, error } = await supabase;'
      .from('referrals');'
      .insert([{;
        referrer_id: refCodeData.user_id,;
        referred_id: userId,;
        referral_code: refCode,;
        email,;
        ip_address: ipAddress;)]
      }]);
      .select();
      .single(),;
    if (error) {;'
      console.error('Error creating referral:', error),;'
      return new Response(;)'
        JSON.stringify({ error: 'Failed to create referral' }),;''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }'
      )
    }

'
        JSON && JSON.stringify({ error: 'Failed to create referral' });''
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }'

      )
    }
    return new Response()
      JSON && JSON.stringify({ success: true, data });'
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }'
    )

  } catch (err) {'
    console && console.error('Unexpected error processing referral:', err);'
    return new Response()'
      JSON.stringify({ error: 'Internal server error' });'

;
    return new Response(;)
      JSON.stringify({ success: true, data }),;'
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }'
    );

  } catch (err) {;'
    console.error('Unexpected error processing referral:', err),;'
    return new Response(;)'
      JSON.stringify({ error: 'Internal server error' }),;''
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }'
    )'
      JSON && JSON.stringify({ error: 'Internal server error' });''
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }'
    )
  }
});
;

import { serve } from "https://deno.land/std@0.131.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.20.0",;
=======
"
import { serve } from "https://deno.land/std@0.131.0/http/server.ts",;"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.20.0",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { corsHeaders } from "../_shared/cors.ts",;
;"
// // // console.log("Track Referral function started!"),;
;
serve(async (req) => {;
  // Handle CORS pre-flight request;'
  if (req.method === 'OPTIONS') {;'
    return new Response('ok', { headers:corsHeaders }),;
  }

    if (refError || !refCodeData) {
      console && console.error('Error finding referral code:', refError);
      return new Response()
        JSON && JSON.stringify({ error: 'Invalid referral code' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )

        JSON.stringify({ error: 'Invalid referral code' });
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",;""
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",;""
import { corsHeaders } from "../_shared/cors.ts",;""
// // // console.log("Track Referral function started!"),;"
serve(async (req) => {;
  // Handle CORS pre-flight request;"
  if (req.method === 'OPTIONS') {;
    return new Response('ok', { headers: corsHeaders });
pr-12325
;
  // Get request data;
  const { refCode, userId, email } = await req.json(),;'
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;
;
  // Create Supabase client;
  const supabase = createClient(;'
    Deno.env.get('SUPABASE_URL') ?? '',;'
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
'
import { serve } from 'https: //deno.land / std@0.131.0 / http / server.ts';,''
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.20.0';,''
import { cors_headers } from '../_shared / cors.ts';''
console.log ("Track Referral function started!");"
;
serve (async (req) => {
  // Handle CORS pre - flight request;
  // Check condition;
if ( {) {
  $2;
}"
    return new Response ('ok', { headers: cors_headers });'
  }
  // Get request data;
  const { ref_code, user_id, email } = await req.json ();'
  const ip_address = req.headers.get ('x - forwarded - for') || req.headers.get ('cf - connecting - ip');'
;
  // Create Supabase client;
  const supabase = create_client ()'
    Deno.env.get ('SUPABASE_URL') ?? '';''
    Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY') ?? '');'
;
  try {
  // TODO: Implement
}
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: ref_error } = await supabase;'
      .from ('referral_codes');''
      .select ('user_id');''
      .eq ('code', ref_code);'
      .single ();
;
    // Check condition;
if ( {) {
  $2;
}'
      console.error ('Error finding referral code:', ref_error);'
      return new Response ()'
        JSON.stringify ({ error: 'Invalid referral code' });''
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 400 }'
      );
    }
    // Check if this user has already been referred;
    const { data: existing_referral } = await supabase;'
      .from ('referrals');''
      .select ('id');''
      .eq ('referred_id', user_id);'
      .single ();
;
    // Check condition;
if ( {) {
  $2;
}
      return new Response ()'
        JSON.stringify ({ message: 'User already has a referral' });''
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 200 }'
      );
    }
    // Create the referral record;
    const { data, error } = await supabase;'
      .from ('referrals');'
      .insert ([{
        referrer_id: refCodeData.user_id;,
  referred_id: user_id;
        referral_code: ref_code;
        email,
        ip_address: ip_address;)]
      }]);
      .select ();
      .single ();
;
    // Check condition;
if ( {) {
  $2;
}'
      console.error ('Error creating referral:', error);'
      return new Response ()'
        JSON.stringify ({ error: 'Failed to create referral' });''
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 500 }'
      );
    }
    return new Response ()
      JSON.stringify ({ success: true, data });'
      { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 200 }'
    );
  } catch (err) {'
    console.error ('Unexpected error processing referral:', err);'
    return new Response ()'
      JSON.stringify ({ error: 'Internal server error' });''
      { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 500 }'
    );
  }
});
;

'
import { serve } from "https://deno.land/std@0.131.0/http/server.ts",;""
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.20.0",;""
import { corsHeaders } from "../_shared/cors.ts",;"
;"
// // // console.log("Track Referral function started!"),;"
;
serve(async (req) => {;
  // Handle CORS pre-flight request;"
  if (req.method === 'OPTIONS') {;''
    return new Response('ok', { headers:corsHeaders }),;'

  }
;
  // Get request data;
  const { refCode, userId, email } = await req.json(),;'
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;'
;
  // Create Supabase client;
  const supabase = createClient(;)'
    Deno.env.get('SUPABASE_URL') ?? '',;''
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';'
  ),;
;

  try {;
    // Look up the referrer from the referral code;
const { data:refCodeData, error:refError } = await supabase;'
      .from('referral_codes');'
      .select('user_id');'
      .eq('code', refCode);
      .single(),;
;
    if (refError || !refCodeData) {;'
      console.error('Error finding referral code:', refError),;
      return new Response(;'
        JSON.stringify({ error:'Invalid referral code' }),;'
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:400 }
    const { data:refCodeData, error:refError } = await supabase;'
      .from('referral_codes');''
      .select('user_id');''
      .eq('code', refCode);'
      .single(),;
;
    if (refError || !refCodeData) {;'
      console.error('Error finding referral code:', refError),;'
      return new Response(;)'
        JSON.stringify({ error:'Invalid referral code' }),;''
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:400 }'

      ),;
    }
;
    // Check if this user has already been referred;
    const { data:existingReferral } = await supabase;'
      .from('referrals');'
      .select('id');'
      .eq('referred_id', userId);
      .single(),;
;
    if (existingReferral) {;
      return new Response(;'
        JSON.stringify({ message:'User already has a referral' }),;'
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:200 }
    const { data:existingReferral } = await supabase;'
      .from('referrals');''
      .select('id');''
      .eq('referred_id', userId);'
      .single(),;
;

    if (existingReferral) {;
      return new Response(;)'
        JSON.stringify({ message:'User already has a referral' }),;''
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:200 }'

      ),;
    }
;
    // Create the referral record;
    const { data, error } = await supabase;'
      .from('referrals');
    const { data, error } = await supabase;'
      .from('referrals');'
      .insert([{;
        referrer_id:refCodeData.user_id,;
        referred_id:userId,;
        referral_code:refCode,;

        email,;
        ip_address:ipAddress;
        ip_address:ipAddress;)]

      }]);
      .select();
      .single(),;
;
    if (error) {;'
      console.error('Error creating referral:', error),;
      return new Response(;'
        JSON.stringify({ error:'Failed to create referral' }),;'
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:500 }
      ),;
    }
;
    return new Response(;
      JSON.stringify({ success:true, data }),;'
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:200 }
    ),;
    ;
  } catch (err) {;'
    console.error('Unexpected error processing referral:', err),;
    return new Response(;'
      JSON.stringify({ error:'Internal server error' }),;'
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:500 }
    ),;
  }'
}),; //Handle CORS pre-flight request if (req.method === 'OPTIONS') {'
  //Create Supabase client const supabase = createClient (Deno.env.get ('SUPABASE URL') ?? '';'
Deno.env.get ('SUPABASE SERVICE ROLE KEY') ?? '');
try {}
  //Look up the referrer from the referral code const {}
  data: refCodeData, error: refError '
}= await supabase .from ('referral codes') .select ('user id') .eq ('code', refCode) .single ();
}//Check if this user has already been referred const {}
  data: existingReferral '
}= await supabase .from ('referrals') .select ('id') .eq ('referred id', userId) .single ();
}// Create the referral record const {}
  data, error '
}= await supabase .from ('referrals') .insert ([ {}
  referrer id: refCodeData.user id, referred id: userId, referral code: refCode, email, ip address: ipAddress;
}]) .select () .single ();
}
});
    if (refError || !refCodeData) {;
      console.error('Error finding referral code:', refError),;
      return new Response(;)
        JSON.stringify({ error: 'Invalid referral code' }),;

    // Check if this user has already been referred;
    const { data: existingReferral } = await supabase;
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
    if (existingReferral) {
      return new Response(
        JSON.stringify({ message: 'User already has a referral' });
    // Check if this user has already been referred;
      .from('referrals');
      .select('id');
      .eq('referred_id', userId);
    if (existingReferral) {;
        JSON.stringify({ message: 'User already has a referral' }),;
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }

        JSON && JSON.stringify({ message: 'User already has a referral' });
    // Create the referral record;
    const { data, error } = await supabase;
      .insert([{
        referrer_id: refCodeData && refCodeData.user_id;,
  referrer_id: refCodeData && refCodeData.user_id;
        referred_id: userId;,
  referral_code: refCode;
        email;
        ip_address: ipAddress;)]
      }])
      .select()
    if (error) {
      console && console.error('Error creating referral:', error);
        JSON.stringify({ error: 'Failed to create referral' });
    // Create the referral record;
      .insert([{;
        referrer_id: refCodeData.user_id,;
        referred_id: userId,;
        referral_code: refCode,;
        email,;
      }]);
      .select();
    if (error) {;
      console.error('Error creating referral:', error),;
        JSON.stringify({ error: 'Failed to create referral' }),;
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }

        JSON && JSON.stringify({ error: 'Failed to create referral' });
      JSON && JSON.stringify({ success: true, data });
  } catch (err) {
    console && console.error('Unexpected error processing referral:', err);
      JSON.stringify({ error: 'Internal server error' });
      JSON.stringify({ success: true, data }),;
  } catch (err) {;
    console.error('Unexpected error processing referral:', err),;
      JSON.stringify({ error: 'Internal server error' }),;
      JSON && JSON.stringify({ error: 'Internal server error' });
});

import { serve } from 'https: //deno.land / std@0.131.0 / http / server.ts';,;
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.20.0';,;
import { cors_headers } from '../_shared / cors.ts';
console.log ("Track Referral function started!");"
serve (async (req) => {
  // Handle CORS pre - flight request;
  // Check condition;
if ( {) {
  $2;
}"
    return new Response ('ok', { headers: cors_headers });
  // Get request data;
  const { ref_code, user_id, email } = await req.json ();
  const ip_address = req.headers.get ('x - forwarded - for') || req.headers.get ('cf - connecting - ip');
  // Create Supabase client;
  const supabase = create_client ()
    Deno.env.get ('SUPABASE_URL') ?? ;
    Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY') ?? );
  // TODO: Implement
    // Look up the referrer from the referral code;
    const { data: refCodeData, error: ref_error } = await supabase;
      .from ('referral_codes');
      .select ('user_id');
      .eq ('code', ref_code);
      .single ();
    // Check condition;
      console.error ('Error finding referral code:', ref_error);
      return new Response ()
        JSON.stringify ({ error: 'Invalid referral code' });
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 400 }
    // Check if this user has already been referred;
    const { data: existing_referral } = await supabase;
      .from ('referrals');
      .select ('id');
      .eq ('referred_id', user_id);
    // Check condition;
        JSON.stringify ({ message: 'User already has a referral' });
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 200 }
    // Create the referral record;
      .insert ([{
        referrer_id: refCodeData.user_id;,
  referred_id: user_id;
        referral_code: ref_code;
        email,
        ip_address: ip_address;)]
      .select ();
    // Check condition;
      console.error ('Error creating referral:', error);
        JSON.stringify ({ error: 'Failed to create referral' });
        { headers: { ...cors_headers, 'Content - Type': 'application / json' }, status: 500 }
      JSON.stringify ({ success: true, data });
    console.error ('Unexpected error processing referral:', err);
      JSON.stringify ({ error: 'Internal server error' });

import { serve } from "https://deno.land/std@0.131.0/http/server.ts",;""
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.20.0",;""
import { corsHeaders } from "../_shared/cors.ts",;"
;"
// // // console.log("Track Referral function started!"),;"
  // Handle CORS pre-flight request;"
    return new Response('ok', { headers:corsHeaders }),;
  // Get request data;
  // Create Supabase client;
    // Look up the referrer from the referral code;
    const { data:refCodeData, error:refError } = await supabase;
        JSON.stringify({ error:'Invalid referral code' }),;
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:400 }
    // Check if this user has already been referred;
    const { data:existingReferral } = await supabase;
        JSON.stringify({ message:'User already has a referral' }),;
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:200 }
    // Create the referral record;
        referrer_id:refCodeData.user_id,;
        referred_id:userId,;
        referral_code:refCode,;
        ip_address:ipAddress;)]
        JSON.stringify({ error:'Failed to create referral' }),;
        { headers:{ ...corsHeaders, 'Content-Type':'application/json' }, status:500 }
      JSON.stringify({ success:true, data }),;
      JSON.stringify({ error:'Internal server error' }),;
}),; //Handle CORS pre-flight request if (req.method === 'OPTIONS') {
  //Create Supabase client const supabase = createClient (Deno.env.get ('SUPABASE URL') ?? ;
Deno.env.get ('SUPABASE SERVICE ROLE KEY') ?? );
  // TODO: Implement
  //Look up the referrer from the referral code const {
  // TODO: Implement
  data: refCodeData, error: refError;
}= await supabase .from ('referral codes') .select ('user id') .eq ('code', refCode) .single ();
}//Check if this user has already been referred const {
  // TODO: Implement
  data: existingReferral;
}= await supabase .from ('referrals') .select ('id') .eq ('referred id', userId) .single ();
}// Create the referral record const {
  // TODO: Implement
  data, error;
}= await supabase .from ('referrals') .insert ([ {
  referrer id: refCodeData.user id, referred id: userId, referral code: refCode, email, ip address: ipAddress;)]
}]) .select () .single ();

pr-12325
'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
