 interface TokenRequest {
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