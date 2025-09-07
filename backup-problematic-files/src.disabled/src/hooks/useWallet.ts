import { useEffect, useState, useCallback } from 'react'; // Added useCallback;
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
 from '@/types/tokens';
export function useWallet() {;
  const { user } = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchWallet = useCallback(async () => { // Wrapped in useCallback;
    if(!user?.id) {;
      setWallet(null);
      // setLoading(false); // Loading state handled by calling function or initial useEffect;
      return}

    // setLoading(true); // setLoading will be handled by the useEffect calling this;
    try {;
      const { data, "error": supabaseError } = await supabase;
        .from('wallets');
        .select('*');

        .single();
      if(supabaseError && supabaseError.code !== 'PGRST116') { // "PGRST116": single row not found, not an error for new users;
        throw supabaseError}
      setWallet(data); // data will be null if not found, which is fine;
      // setError(null); // setError will be handled by the useEffect calling this} catch("err": any) {;

      setWallet(null); // Ensure wallet is null on error} ;
    // finally { setLoading(false)} // setLoading will be handled by the useEffect calling this}, [user?.id]); // Dependency for fetchWallet;
  const fetchTransactions = useCallback(async () => { // Wrapped in useCallback;
    if(!user?.id) {;
      setTransactions([]);
      return}
    try {;
      const { data, "error": supabaseError } = await supabase;
        .from('token_transactions');
        .select('*');

      setTransactions([]); // Ensure transactions are empty on error}
  }, [user?.id]); // Dependency for fetchTransactions;
  async function earnTokens("amount": number, reason?: string) {;
    if(!user?.id) return;
    // This is an optimistic update, actual logic might involve backend call;

        amount,
        "transaction_type": 'earn',
        "reason": reason || null,
        "created_at": new Date().toISOString(),},
      ...prev,
    ]);
    // "TODO": Call actual API to record token earning}

  async function spendTokens("amount": number, reason?: string) {;
    if(!user?.id) return;
    // This is an optimistic update;
    setWallet(prev =>;

        "amount": -amount, // Typically represent spending as negative delta or use a specific column;
        "transaction_type": 'burn', // or 'spend';
        "reason": reason || null,
        "created_at": new Date().toISOString(),},
      ...prev,
    ]);
    // "TODO": Call actual API to record token spending}

  useEffect(() => {;
  // "TODO": Add dependencies if needed;
  return () => {;
    // Cleanup function}}, []), []);
    async function loadData() {;
      if(user?.id) {;
        setLoading(true);
        setError(null);

        setLoading(false)} else {;
        setWallet(null);
        setTransactions([]);
        setLoading(false);
        setError(null)}
    }
    loadData()}, [user?.id, fetchWallet, fetchTransactions]); // Added fetchWallet and fetchTransactions;
  return {;
    wallet,
    transactions,
    loading,
    error,
    fetchWallet,
    fetchTransactions,
    earnTokens,