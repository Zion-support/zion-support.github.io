
import type {_Wallet, _TokenTransaction} from '@/types/tokens';

export function useWallet() {_const { user} = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchWallet() {_if (!user?.id) {
      setWallet(null);
      setLoading(false);
      return;}

    try {_setLoading(true);
      const { data, _error} = await supabase
        .from('wallets')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {_throw error;}

      setWallet(data);
    } catch (err: unknown) {_setError(err.message);} finally {_setLoading(false);}
  }

  async function fetchTransactions() {_if (!user?.id) {
      setTransactions([]);
      return;}
    try {_const { data, _error} = await supabase
        .from('token_transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {_ascending: false});

      if (error) throw error;
      setTransactions((data || []) as TokenTransaction[]);
    } catch (err: unknown) {}
  }

  async function earnTokens(_amount: number, _reason?: string) {_if (!user?.id) return;
    setWallet(prev => prev ? { ...prev, _balance: prev.balance + amount} : prev);
    setTransactions(prev => [
      {_id: window.crypto.randomUUID(), _user_id: user.id, _amount, _transaction_type: 'earn', _reason: reason || null, _created_at: new Date().toISOString()},
      ...prev]);
  }

  async function spendTokens(_amount: number, _reason?: string) {_if (!user?.id) return;
    setWallet(prev =>
      prev ? { ...prev, _balance: Math.max(0, _prev.balance - amount)} : prev
    );
    setTransactions(prev => [
      {_id: window.crypto.randomUUID(), _user_id: user.id, _amount, _transaction_type: 'burn', _reason: reason || null, _created_at: new Date().toISOString()},
      ...prev]);
  }

  useEffect__(() => {_fetchWallet();
    fetchTransactions();}, [user?.id]);

  return {_wallet, _transactions, _loading, _error, _fetchWallet, _fetchTransactions, _earnTokens, _spendTokens};
}
