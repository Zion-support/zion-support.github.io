import { useState, useEffect } from 'react';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  chainId: number | null;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    chainId: null,
  });

  const connect = async () => {
    try {
      // Mock wallet connection
      setWalletState({
        isConnected: true,
        address: '0x1234567890123456789012345678901234567890',
        balance: '1.5',
        chainId: 1,
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  async function fetchTransactions() {
    if (!user?.id) {
      setTransactions([]);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('token_transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTransactions((data || []) as TokenTransaction[]);
    } catch (err: any) {
      console.error('Error fetching transactions:', err);
    }
  }

  async function earnTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    const currentUserId = user.id; // Added line
    setWallet(prev => prev ? { ...prev, balance: prev.balance + amount } : prev);
    setTransactions(prev => [
      {
        id: crypto.randomUUID(),
        user_id: currentUserId, // Replaced user.id
        amount,
        transaction_type: 'earn',
        reason: reason || null,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
  }

  async function spendTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    const currentUserId = user.id; // Added line
    setWallet(prev =>
      prev ? { ...prev, balance: Math.max(0, prev.balance - amount) } : prev
    );
    setTransactions(prev => [
      {
        id: crypto.randomUUID(),
        user_id: currentUserId, // Replaced user.id
        amount,
        transaction_type: 'burn',
        reason: reason || null,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
  }

  useEffect(() => {
    fetchWallet();
    fetchTransactions();
  }, [user?.id]);

  return {
    ...walletState,
    connect,
    disconnect,
  };
};