<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

import {serve} from "https: //deno.land/std@0.131.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0"
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",
import {corsHeaders} from "../_shared/cors ;
console && console.log("Track Referral function started!");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;

import {corsHeaders} from "../_shared/cors.ts";
console.log("Track Referral function started!");
<<<<<<< HEAD


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",
import { corsHeaders } from "../_shared/cors.ts",
=======

import {serve} from "https: //deno && deno.land/std@0 && 0.131.0/http/server && server.ts","
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.20.0",";
import {corsHeaders} from "../_shared/cors ;"
console && console.log("Track Referral function started!");




"
import {serve} from "https: //deno.land/std@0.131.0/http/server.ts",";
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.20.0",;
"
import {corsHeaders} from "../_shared/cors.ts";"
console.log("Track Referral function started!");"
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0","
import { corsHeaders } from "../_shared/cors.ts","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// // // console.log("Track Referral function started!"),




<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
serve(async (req) => {
  // Handle CORS pre-flight request
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
serve(async (req) => {};
  // Handle CORS pre-flight request;
  if (req && req.method === 'OPTIONS') {'
    return new Response('ok', { headers: corsHeaders })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const { refCode, userId, email } = await req && req.json();'
  const ipAddress = req && req.headers.get('x-forwarded-for') || req && req.headers.get('cf-connecting-ip');





  // Create Supabase client;
  const supabase = createClient('
    Deno && Deno.env.get('SUPABASE_URL') ?? '';'
    Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();
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
<<<<<<< HEAD
=======
    if (refError |!refCodeData) {
      console.error('Error finding referral code:', refError);
      return new Response(
<<<<<<< HEAD
        JSON && JSON.stringify({ error: 'Invalid referral code' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
=======
=======


      return new Response('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        JSON.stringify({ error: 'Invalid referral code' });
"
import { serve } from "https: //deno.land/std@0.131.0/http/server.ts",;"
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.20.0",;"
import { corsHeaders } from "../_shared/cors.ts",;"
// // // console.log("Track Referral function started!"),;
serve(async (req) => {;
  // Handle CORS pre-flight request;'
  if (req.method === 'OPTIONS') {;'
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

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
<<<<<<< HEAD
    }
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')
=======


'
        JSON && JSON.stringify({ error: 'Invalid referral code' });'
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Check if this user has already been referred;
    const { data: existingReferral } = await supabase'
      .from('referrals')'
      .select('id')'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .eq('referred_id', userId)
      .single();
    if (existingReferral) {}
      return new Response(


'
        JSON.stringify({ message: 'User already has a referral' });
=======
;
    // Check if this user has already been referred;
    const { data: existingReferral } = await supabase;'
      .from('referrals');'
      .select('id');'
      .eq('referred_id', userId);
      .single(),;
    if (existingReferral) {;
      return new Response(;'
        JSON.stringify({ message: 'User already has a referral' }),;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======




'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



'
        JSON && JSON.stringify({ message: 'User already has a referral' });'
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        JSON && JSON.stringify({ message: 'User already has a referral' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
;
    // Create the referral record;
    const { data, error } = await supabase;'
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
    if (error) {;'
      console.error('Error creating referral:', error),;
      return new Response(;'
        JSON.stringify({ error: 'Failed to create referral' }),;


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

=======
    }        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

        JSON && JSON.stringify({ message: 'User already has a referral' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

        JSON && JSON.stringify({ message: 'User already has a referral' });
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        JSON && JSON.stringify({ error: 'Failed to create referral' });
=======
'
        JSON && JSON.stringify({ error: 'Failed to create referral' });'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
    return new Response(;
      JSON.stringify({ success: true, data }),;'
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (err) {;'
    console.error('Unexpected error processing referral:', err),;
    return new Response(;'
      JSON.stringify({ error: 'Internal server error' }),;
<<<<<<< HEAD
      JSON && JSON.stringify({ error: 'Internal server error' });      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
      JSON && JSON.stringify({ error: 'Internal server error' });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
;
  // Get request data;
  const { refCode, userId, email } = await req.json(),;'
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),;
;
  // Create Supabase client;
  const supabase = createClient(;'
    Deno.env.get('SUPABASE_URL') ?? '',;'
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
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
      ),;
    }
;
    // Create the referral record;
    const { data, error } = await supabase;'
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
