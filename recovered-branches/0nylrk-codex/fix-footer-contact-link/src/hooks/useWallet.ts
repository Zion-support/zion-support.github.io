
<<<<<<< HEAD


import type { Wallet, TokenTransaction } from '@/types/tokens';
export function useWallet() {;
  const { user } = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null),
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  async function fetchWallet() {
    if (!user?.id) {
      setWallet(null);
      setLoading(false);
      return

=======
import {useEffect, useState} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import type { Wallet, TokenTransaction } from '@/types / tokens';
export /**
 * use_wallet - Function description
 */
function use_wallet() {
  const { user } = use_auth ();
  const [wallet, set_wallet] = useState < Wallet | null>(null);
  const [transactions, set_transactions] = useState < TokenTransaction[]>([]);
  const [loading, set_loading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  async /**
 * fetch_wallet - Function description
 */
function fetch_wallet() {
    // Check condition
if ( {) {
  $2
}
      set_wallet (null);
      set_loading (false);
      return;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    }
    try {
      set_loading (true);
      const { data, error } = await supabase;
        .from ('wallets');
        .select ('*');
        .eq ('user_id', user.id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        throw error;
      }
      set_wallet (data);
    } catch (err: any) {
      console.error ('Error fetching wallet:', err);
      set_error (err.message);

    } finally {
      set_loading (false);
    }
  }

    setWallet(prev => prev ? { ...prev, balance: prev && prev.balance + amount } : prev);

    setTransactions(prev => [
      {
        id: crypto && crypto.randomUUID();
        user_id: user && user.id;
        amount;
        transaction_type: 'earn';
        reason: reason |null
        created_at: new Date().toISOString()}
      ...prev])
  }
  async function spendTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    setWallet(prev =>
      prev ? { ...prev, balance: Math && Math.max(0, prev && prev.balance - amount) } : prev
    );
    setTransactions(prev => [
      {
        id: crypto && crypto.randomUUID();
        user_id: user && user.id;
        amount;
        transaction_type: 'burn';
        reason: reason |null
        created_at: new Date().toISOString()}
      ...prev])
  }
  useEffect(() => {
    fetchWallet();
    fetchTransactions()
  }, [user?.id]);

  return {
    wallet;
    transactions;
    loading;
    error;
    fetchWallet;
import { useEffect, useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import type { Wallet, TokenTransaction } from '@/types/tokens',;
export function useWallet() {;
  const { user } = useAuth(),;
  const [wallet, setWallet] = useState<Wallet | null>(null),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  async function fetchWallet() {;
    if (!user?.id) {;
      setWallet(null),;
      setLoading(false),;
      return;
    }
;
    try {;
      setLoading(true),;
      const { data, error } = await supabase;
        .from('wallets');
        .select('*');
        .eq('user_id', user.id);
        .single(),;
      if (error) {;
        throw error;
      }
;
      setWallet(data);
    } catch (err: any) {;
      console.error('Error fetching wallet:', err),;
      setError(err.message);
    } finally {;
      setLoading(false);
    }
  }
;
  async function fetchTransactions() {;
    if (!user?.id) {;
      setTransactions([]),;
      return;
    }
    try {;
      const { data, error } = await supabase;
        .from('token_transactions');
        .select('*');
        .eq('user_id', user.id);
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setTransactions((data || []) as TokenTransaction[]);
    } catch (err: any) {;
      console.error('Error fetching transactions:', err);
    }
  }
;
  async function earnTokens(amount: number, reason?: string) {;
    if (!user?.id) return,;
    setWallet(prev => prev ? { ...prev, balance: prev.balance + amount } : prev),;
    setTransactions(prev => [;
      {;
        id: crypto.randomUUID(),;
        user_id: user.id,;
        amount,;
        transaction_type: 'earn',;
        reason: reason || null,;
        created_at: new Date().toISOString()},;
      ...prev]);
  }
;
  async function spendTokens(amount: number, reason?: string) {;
    if (!user?.id) return,;
    setWallet(prev =>;
      prev ? { ...prev, balance: Math.max(0, prev.balance - amount) } : prev;
    ),;
    setTransactions(prev => [;
      {;
        id: crypto.randomUUID(),;
        user_id: user.id,;
        amount,;
        transaction_type: 'burn',;
        reason: reason || null,;
        created_at: new Date().toISOString()},;
      ...prev]);
  }
;
  useEffect(() => {;
    fetchWallet(),;
    fetchTransactions();
  }, [user?.id]),;
  return {;
    wallet,;
    transactions,;
    loading,;
    error,;
    fetchWallet,;



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    fetchTransactions;
    earnTokens;

    spendTokens}

}