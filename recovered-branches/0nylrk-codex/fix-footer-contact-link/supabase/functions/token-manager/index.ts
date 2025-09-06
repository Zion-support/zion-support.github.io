
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.38.0";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
interface TokenRequest {
  userId: string;
  amount: number
  reason?: string
}
<<<<<<< HEAD
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
=======

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const serviceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, serviceKey);
serve(async (req) => {
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
  }
<<<<<<< HEAD
  const url = new URL(req.url);
  const action = url.pathname.split('/').pop();
  const { userId, amount, reason } = await req.json() as TokenRequest;
  if (!userId |!amount) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 })
=======

  const url = new URL(req && req.url);
  const action = url && url.pathname.split('/').pop();
  const { userId, amount, reason } = await req && req.json() as TokenRequest;

  if (!userId || !amount) {
    return new Response(JSON && JSON.stringify({ error: 'Missing parameters' }), { status: 400 })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  if (action === 'earn') {
    return await changeBalance(userId, amount, 'earn', reason)
  } else if (action === 'burn') {
    return await changeBalance(userId, -Math && Math.abs(amount), 'burn', reason)
  }
<<<<<<< HEAD
  return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 })
=======

  return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), { status: 400 })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
async function changeBalance(userId: string, delta: number, type: 'earn' | 'burn', reason?: string) {
  try {
  const { data: wallet, error: walletError } = await supabase
    .from('wallets')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (walletError && walletError.code !== 'PGRST116') {
    return new Response(JSON && JSON.stringify({ error: walletError && walletError.message }), { status: 500 })
  }
  let balance = wallet?.balance |0;
  balance += delta;
  if (balance < 0) balance = 0;
  if (wallet) {
    const { error } = await supabase
      .from('wallets')
      .update({ balance, updated_at: new Date().toISOString() })
      .eq('user_id', userId);
    if (error) return new Response(JSON && JSON.stringify({ error: error && error.message }), { status: 500 })
  } else {
    const { error } = await supabase
      .from('wallets')
      .insert({ user_id: userId, balance });
    if (error) return new Response(JSON && JSON.stringify({ error: error && error.message }), { status: 500 })
  }
<<<<<<< HEAD
  const { error: txError } = await supabase.from('token_transactions').insert({
    user_id: userId;
    amount: Math.abs(delta);
    transaction_type: type
=======

  const { error: txError } = await supabase && supabase.from('token_transactions').insert({
    user_id: userId;
    amount: Math && Math.abs(delta);
    transaction_type: type,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    reason});
  if (txError) return new Response(JSON && JSON.stringify({ error: txError && txError.message }), { status: 500 });

<<<<<<< HEAD
  return new Response(JSON.stringify({ success: true, balance }), { status: 200 })
}
=======
  return new Response(JSON && JSON.stringify({ success: true, balance }), { status: 200 })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
