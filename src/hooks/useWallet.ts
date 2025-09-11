import { useEffect, useState, useCallback } from 'react';
import { useAuth } from './useAuth';

interface Wallet {
  id: string;
  user_id: string;
  balance: number;
  updated_at: string;
}

interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: 'earn' | 'burn';
  reason?: string;
  created_at: string;
}

export function useWallet() {
  const { user } = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWallet = useCallback(async () => {
    if (!user?.id) {
      setWallet(null);
      return;
    }

    try {
      // Mock wallet data - replace with actual API call
      const mockWallet: Wallet = {
        id: '1',
        user_id: user.id,
        balance: 1000,
        updated_at: new Date().toISOString()
      };
      
      setWallet(mockWallet);
    } catch (err: any) {
      console.error('Error fetching wallet:', err);
      setError(err.message);
      setWallet(null);
    }
  }, [user?.id]);

  const fetchTransactions = useCallback(async () => {
    if (!user?.id) {
      setTransactions([]);
      return;
    }

    try {
      // Mock transactions data - replace with actual API call
      const mockTransactions: TokenTransaction[] = [
        {
          id: '1',
          user_id: user.id,
          amount: 100,
          transaction_type: 'earn',
          reason: 'Welcome bonus',
          created_at: new Date().toISOString()
        }
      ];
      
      setTransactions(mockTransactions);
    } catch (err: any) {
      console.error('Error fetching transactions:', err);
      setTransactions([]);
    }
  }, [user?.id]);

  const earnTokens = async (amount: number, reason?: string) => {
    if (!user?.id) return;

    setWallet(prev => prev ? { 
      ...prev, 
      balance: prev.balance + amount 
    } : {
      balance: amount,
      user_id: user.id,
      id: crypto.randomUUID(),
      updated_at: new Date().toISOString()
    });

    setTransactions(prev => [{
      id: crypto.randomUUID(),
      user_id: user.id,
      amount,
      transaction_type: 'earn',
      reason: reason || null,
      created_at: new Date().toISOString()
    }, ...prev]);
  };

  const spendTokens = async (amount: number, reason?: string) => {
    if (!user?.id) return;

    setWallet(prev => prev ? { 
      ...prev, 
      balance: Math.max(0, prev.balance - amount) 
    } : null);

    setTransactions(prev => [{
      id: crypto.randomUUID(),
      user_id: user.id,
      amount: -amount,
      transaction_type: 'burn',
      reason: reason || null,
      created_at: new Date().toISOString()
    }, ...prev]);
  };

  useEffect(() => {
    async function loadData() {
      if (user?.id) {
        setLoading(true);
        setError(null);
        await Promise.all([fetchWallet(), fetchTransactions()]);
        setLoading(false);
      } else {
        setWallet(null);
        setTransactions([]);
        setLoading(false);
        setError(null);
      }
    }

    loadData();
  }, [user?.id, fetchWallet, fetchTransactions]);

  return {
    wallet,
    transactions,
    loading,
    error,
    fetchWallet,
    fetchTransactions,
    earnTokens,
    spendTokens
  };
}