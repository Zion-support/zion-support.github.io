<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts

<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
=======

<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.38.0";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TokenRequest {
  userId: string;
  amount: number
  reason?: string
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts


const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const serviceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

========
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const serviceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
const supabase = createClient(supabaseUrl, serviceKey);
=======


=======
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const supabase = createClient(supabaseUrl, serviceKey);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.0",
=======
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.38.0";
=======
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.0",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TokenRequest {
  userId: string,
  amount: number,
  reason?: string
}

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, serviceKey),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {
import { serve } from 'https: //deno.land / std@0.177.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.38.0';
interface TokenRequest {
  user_id: string;
  amount: number,
  reason?: string;
}
const supabase_url = Deno.env.get ("SUPABASE_URL") as string;
const service_key = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") as string;
const supabase = create_client (supabase_url, service_key);
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response ('ok', {
      headers: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
<<<<<<< HEAD
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

=======


========
        'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'POST, OPTIONSAccess - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}});
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
  const url = new URL(req && req.url);
  const action = url && url.pathname.split('/').pop();
  const { userId, amount, reason } = await req && req.json() as TokenRequest;
  if (!userId || !amount) {
    return new Response(JSON && JSON.stringify({ error: 'Missing parameters' }), { status: 400 })
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
<<<<<<< HEAD
  }
  const url = new URL(req.url);
  const action = url.pathname.split('/').pop();
  const { userId, amount, reason } = await req.json() as TokenRequest;
  if (!userId |!amount) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  if (action === 'earn') {
    return await changeBalance(userId, amount, 'earn', reason)
  } else if (action === 'burn') {
<<<<<<< HEAD
    return await changeBalance(userId, -Math && Math.abs(amount), 'burn', reason)
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts


  return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), { status: 400 })

========
  return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), { status: 400 })
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
});
async function changeBalance(userId: string, delta: number, type: 'earn' | 'burn', reason?: string) {
  try {
=======
    return await changeBalance(userId, -Math.abs(amount), 'burn', reason)
  }
  return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 })
});
async function changeBalance(userId: string, delta: number, type: 'earn' | 'burn', reason?: string) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { data: wallet, error: walletError } = await supabase
    .from('wallets')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (walletError && walletError.code !== 'PGRST116') {
<<<<<<< HEAD
    return new Response(JSON && JSON.stringify({ error: walletError && walletError.message }), { status: 500 })
=======
    return new Response(JSON.stringify({ error: walletError.message }), { status: 500 })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  let balance = wallet?.balance |0;
  balance += delta;
  if (balance < 0) balance = 0;
  if (wallet) {
    const { error } = await supabase
      .from('wallets')
      .update({ balance, updated_at: new Date().toISOString() })
      .eq('user_id', userId);
<<<<<<< HEAD
    if (error) return new Response(JSON && JSON.stringify({ error: error && error.message }), { status: 500 })
=======
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } else {
    const { error } = await supabase
      .from('wallets')
      .insert({ user_id: userId, balance });
<<<<<<< HEAD
    if (error) return new Response(JSON && JSON.stringify({ error: error && error.message }), { status: 500 })
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
  const { error: txError } = await supabase && supabase.from('token_transactions').insert({
    user_id: userId;
    amount: Math && Math.abs(delta);
    transaction_type: type,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts

    reason});
  if (txError) return new Response(JSON && JSON.stringify({ error: txError && txError.message }), { status: 500 });


========
    reason});
  if (txError) return new Response(JSON && JSON.stringify({ error: txError && txError.message }), { status: 500 });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
  return new Response(JSON && JSON.stringify({ success: true, balance }), { status: 200 })
=======
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
  const { error: txError } = await supabase.from('token_transactions').insert({
    user_id: userId;
    amount: Math.abs(delta);
    transaction_type: type
    reason});
  if (txError) return new Response(JSON.stringify({ error: txError.message }), { status: 500 });

  return new Response(JSON.stringify({ success: true, balance }), { status: 200 })
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.0",;
interface TokenRequest {;
  userId: string,;
  amount: number,;
  reason?: string;
<<<<<<< HEAD

}
  const url = new URL (req.url);
  const action = url.pathname.split ('/').pop ();
  const { user_id, amount, reason } = await req.json () as TokenRequest;
;
  // Check condition
if ( {) {
  $2
}
    return new Response (JSON.stringify ({ error: 'Missing parameters' }), { status: 400 });
  }
  // Check condition
if ( {) {
  $2
}
    return await change_balance (user_id, amount, 'earn', reason);
  } else // Check condition
if ( {) {
  $2
}
    return await change_balance (user_id, -Math.abs (amount), 'burn', reason);
  }
  return new Response (JSON.stringify ({ error: 'Invalid action' }), { status: 400 });
});
;
async /**
 * change_balance - Function description
 */
function change_balance() {
  const { data: wallet, error: wallet_error } = await supabase;
    .from ('wallets');
    .select ('*');
    .eq ('user_id', user_id);
    .single ();
;
  // Check condition
if ( {) {
  $2
}
    return new Response (JSON.stringify ({ error: wallet_error.message }), { status: 500 });
  }
  let balance = wallet?.balance || 0;
  balance += delta;
  // Check condition
if (balance = 0) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const { error } = await supabase;

=======
}
;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,;
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,;
const supabase = createClient(supabaseUrl, serviceKey),;
serve(async (req) => {;
  if (req.method === 'OPTIONS') {;
    return new Response('ok', {;
      headers: {;
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}});
  }
;
  const url = new URL(req.url),;
  const action = url.pathname.split('/').pop(),;
  const { userId, amount, reason } = await req.json() as TokenRequest,;
  if (!userId || !amount) {;
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
  }
;
  if (action === 'earn') {;
    return await changeBalance(userId, amount, 'earn', reason);
  } else if (action === 'burn') {;
    return await changeBalance(userId, -Math.abs(amount), 'burn', reason);
  }
;
  return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
}),;
async function changeBalance(userId: string, delta: number, type: 'earn' | 'burn', reason?: string) {;
  const { data: wallet, error: walletError } = await supabase;
    .from('wallets');
    .select('*');
    .eq('user_id', userId);
    .single(),;
  if (walletError && walletError.code !== 'PGRST116') {;
    return new Response(JSON.stringify({ error: walletError.message }), { status: 500 });
  }
;
  let balance = wallet?.balance || 0,;
  balance += delta,;
  if (balance < 0) balance = 0,;
  if (wallet) {;
    const { error } = await supabase;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      .from('wallets');
      .update({ balance, updated_at: new Date().toISOString() });
      .eq('user_id', userId),;
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  } else {;
    const { error } = await supabase;
      .from('wallets');
      .insert({ user_id: userId, balance }),;
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
;
  const { error: txError } = await supabase.from('token_transactions').insert({;
    user_id: userId,;
    amount: Math.abs(delta),;
    transaction_type: type,;
    reason}),;
  if (txError) return new Response(JSON.stringify({ error: txError.message }), { status: 500 });
  return new Response(JSON.stringify({ success: true, balance }), { status: 200 });
<<<<<<< HEAD

<<<<<<< HEAD
}
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
  } else {
    const { error } = await supabase;
      .from ('wallets');
      .insert ({ user_id: user_id, balance });
    if (return new Response (JSON.stringify ({ error: error.message }), { status: 500 })) {
  $2
}
  }
  const { error: tx_error } = await supabase.from ('token_transactions').insert ({
    user_id: user_id;
    amount: Math.abs (delta);
    transaction_type: type,
    reason});
  if (return new Response (JSON.stringify ({ error: tx_error.message }), { status: 500 })) {
  $2
}
  return new Response (JSON.stringify ({ success: true, balance }), { status: 200 });
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import { serve } from "https://deno.land/std@0.177.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0",;
;
interface TokenRequest {;
  userId:string,;
  amount:number,;
  reason?:string;
}
;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,;
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,;
const supabase = createClient(supabaseUrl, serviceKey),;
;
serve(async (req) => {;
  if (req.method === 'OPTIONS') {;
    return new Response('ok', {;
      headers:{;
        'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'POST, OPTIONSAccess-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'}}),;
  }
;
  const url = new URL(req.url),;
  const action = url.pathname.split('/').pop(),;
  const { userId, amount, reason } = await req.json() as TokenRequest,;
;
  if (!userId || !amount) {;
    return new Response(JSON.stringify({ error:'Missing parameters' }), { status:400 }),;
  }
;
  if (action === 'earn') {;
    return await changeBalance(userId, amount, 'earn', reason),;
  } else if (action === 'burn') {;
    return await changeBalance(userId, -Math.abs(amount), 'burn', reason),;
  }
;
  return new Response(JSON.stringify({ error:'Invalid action' }), { status:400 }),;
}),;
;
async function changeBalance(userId:string, delta:number, type:'earn' | 'burn', reason?:string) {;
  const { data:wallet, error:walletError } = await supabase;
    .from('wallets');
    .select('*');
    .eq('user_id', userId);
    .single(),;
;
  if (walletError && walletError.code !== 'PGRST116') {;
    return new Response(JSON.stringify({ error:walletError.message }), { status:500 }),;
  }
;
  let balance = wallet?.balance || 0,;
  balance += delta,;
  if (balance < 0) balance = 0,;
;
  if (wallet) {;
    const { error } = await supabase;
      .from('wallets');
      .update({ balance, updated_at:new Date().toISOString() });
      .eq('user_id', userId),;
    if (error) return new Response(JSON.stringify({ error:error.message }), { status:500 }),;
  } else {;
    const { error } = await supabase;
      .from('wallets');
      .insert({ user_id:userId, balance }),;
    if (error) return new Response(JSON.stringify({ error:error.message }), { status:500 }),;
  }
;
  const { error:txError } = await supabase.from('token_transactions').insert({;
    user_id:userId,;
    amount:Math.abs(delta),;
    transaction_type:type,;
    reason}),;
  if (txError) return new Response(JSON.stringify({ error:txError.message }), { status:500 }),;
;
  return new Response(JSON.stringify({ success:true, balance }), { status:200 }),;
} interface TokenRequest {
  userId: string;
amount: number;
reason?: string 
}if (req.method === 'OPTIONS') {
  return new Response ('ok', {
  headers: {
  async function changeBalance (userId: string, delta: number, type: 'earn' | 'burn', reason?: string) {
  const {
  data: wallet, error: walletError 
}= await supabase .from ('wallets') .select ('*') .eq ('user id', userId) .single ();
if (wallet) {
  const {
  error 
}= await supabase .from ('wallets') 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/token-manager/index.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
