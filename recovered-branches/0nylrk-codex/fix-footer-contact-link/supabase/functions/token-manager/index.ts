

interface TokenRequest {_userId: string;
  amount: number;
  reason?: string;}

const _supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const _serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const _supabase = createClient(supabaseUrl, serviceKey);

serve(_async (req) => {_if (req.method === 'OPTIONS') {
    return new Response('ok', _{
      headers: {
        'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Methods': 'POST, _OPTIONS', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'}});
  }

  const _url = new window.URL(req.url);
  const _action = url.pathname.split('/').pop();
  const {_userId, _amount, _reason} = await req.json() as TokenRequest;

  if (!userId || !amount) {_return new Response(JSON.stringify({ error: 'Missing parameters'}), {_status: 400});
  }

  if (action === 'earn') {_return await changeBalance(userId, _amount, _'earn', _reason);} else if (action === 'burn') {_return await changeBalance(userId, _-Math.abs(amount), _'burn', _reason);}

  return new Response(JSON.stringify({_error: 'Invalid action'}), {_status: 400});
});

async function changeBalance(_userId: string, _delta: number, _type: 'earn' | 'burn', _reason?: string) {_const { data: wallet, _error: walletError} = await supabase
    .from('wallets')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (walletError && walletError.code !== 'PGRST116') {_return new Response(JSON.stringify({ error: walletError.message}), {_status: 500});
  }

  let _balance = wallet?.balance || 0;
  balance += delta;
  if (balance < 0) balance = 0;

  if (wallet) {_const { error} = await supabase
      .from('wallets')
      .update({_balance, _updated_at: new Date().toISOString()})
      .eq('user_id', userId);
    if (error) return new Response(JSON.stringify({_error: error.message}), {_status: 500});
  } else {_const { error} = await supabase
      .from('wallets')
      .insert({_user_id: userId, _balance});
    if (error) return new Response(JSON.stringify({_error: error.message}), {_status: 500});
  }

  const {_error: txError} = await supabase.from('token_transactions').insert({_user_id: userId, _amount: Math.abs(delta), _transaction_type: type, _reason});
  if (txError) return new Response(JSON.stringify({_error: txError.message}), {_status: 500});

  return new Response(JSON.stringify({_success: true, _balance}), {_status: 200});
}
