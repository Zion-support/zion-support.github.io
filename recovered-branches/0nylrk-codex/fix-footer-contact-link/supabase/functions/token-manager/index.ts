
<<<<<<< HEAD
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
}
=======
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.0",interface TokenRequest {
  userId: string,
  amount: number,
  reason?: string
}

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, serviceKey),
interface TokenRequest {_userId: string;
  amount: number;
  reason?: string;}

const _supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const _serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const _supabase = createClient(supabaseUrl, serviceKey);

serve(_async (req) => {_if (req.method === 'OPTIONS') {
    return new Response('ok', _{
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
  }

  const url = new URL(req.url),
  const action = url.pathname.split('/').pop(),
  const { userId, amount, reason } = await req.json() as TokenRequest,

  if (!userId || !amount) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 })
  }

  if (action === 'earn') {
    return await changeBalance(userId, amount, 'earn', reason)
  } else if (action === 'burn') {
    return await changeBalance(userId, -Math.abs(amount), 'burn', reason)
  }

  return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 })
}),
async function changeBalance(_userId: string, _delta: number, _type: 'earn' | 'burn', _reason?: string) {_const { data: wallet, _error: walletError} = await supabase
    .from('wallets')
    .select('*')
    .eq('user_id', userId)
    .single(),

  if (walletError && walletError.code !== 'PGRST116') {
    return new Response(JSON.stringify({ error: walletError.message }), { status: 500 })
  }

  let balance = wallet?.balance || 0,
  balance += delta,
  if (balance < 0) balance = 0,
  if (wallet) {_const { error} = await supabase
      .from('wallets')
      .update({ balance, updated_at: new Date().toISOString() })
      .eq('user_id', userId),
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  } else {
    const { error } = await supabase
      .from('wallets')
      .insert({ user_id: userId, balance }),
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }

  const { error: txError } = await supabase.from('token_transactions').insert({
    user_id: userId,
    amount: Math.abs(delta),
    transaction_type: type,
    reason}),
  if (txError) return new Response(JSON.stringify({ error: txError.message }), { status: 500 }),

  return new Response(JSON.stringify({ success: true, balance }), { status: 200 })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
