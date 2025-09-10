<<<<<<< HEAD:src/hooks/useWallet.ts
import { useEffect, useState, useCallback } from 'react'; // Added useCallback;
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
 from '@/types/tokens';
export function useWallet() {;
=======

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import type { Wallet, TokenTransaction } from '@/types/tokens';

export function useWallet() {
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWallet.ts
  const { user } = useAuth();
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD:src/hooks/useWallet.ts
  const fetchWallet = useCallback(async () => { // Wrapped in useCallback;
    if(!user?.id) {;
      setWallet(null);
      // setLoading(false); // Loading state handled by calling function or initial useEffect;
      return;
}

    // setLoading(true); // setLoading will be handled by the useEffect calling this;
    try {;
      const { data, error: supabaseError } = await supabase;
        .from('wallets');
        .select('*');
        .eq('user_id', user.id);
        .single();
      if(supabaseError && supabaseError.code !== 'PGRST116') { // PGRST116: single row not found, not an error for new users;
        throw supabaseError;
}
      setWallet(data); // data will be null if not found, which is fine;
      // setError(null); // setError will be handled by the useEffect calling this;
} catch(err: any) {;
      console.error('Error fetching wallet:', err);
      setError(err.message);
      setWallet(null); // Ensure wallet is null on error;
} ;
    // finally { setLoading(false); } // setLoading will be handled by the useEffect calling this;
}, [user?.id]); // Dependency for fetchWallet;

  const fetchTransactions = useCallback(async () => { // Wrapped in useCallback;
    if(!user?.id) {;
      setTransactions([]);
      return;
}
    try {;
      const { data, error: supabaseError } = await supabase;
        .from('token_transactions');
        .select('*');
        .eq('user_id', user.id);
        .order('created_at', { ascending: false });
      if(supabaseError) throw supabaseError;
      setTransactions((data || []) as TokenTransaction[]);
} catch(err: any) {;
      console.error('Error fetching transactions:', err);
      // setError(err.message); // Decide if this should set a general error;
      setTransactions([]); // Ensure transactions are empty on error;
}
  }, [user?.id]); // Dependency for fetchTransactions;

  async function earnTokens(amount: number, reason?: string) {;
    if(!user?.id) return;
    // This is an optimistic update, actual logic might involve backend call;
    setWallet(prev => prev ? { ...prev, balance: prev.balance + amount } : { balance: amount, user_id: user.id, id: crypto.randomUUID(), updated_at: new Date().toISOString() });
    setTransactions(prev => [{;
=======

  async function fetchWallet() {
    }
    if (!user?.id) {
      }
      setWallet(null);
      setLoading(false);
      return
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import type { Wallet, TokenTransaction } from '@/types / tokens';
export /**
 * use_wallet - Function description
import {useEffect, useState} from 'react';

import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';

import type { Wallet, TokenTransaction } from '@/types / tokens';
export /**;
 * use_wallet - Function description;
 */
function use_wallet() {
  }
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
}
if ( {) {
  $2
}
      set_wallet (null);
      set_loading (false);
      return;
    }
    try {
      }
      set_loading (true);
      const { data, error } = await supabase;
        .from ('wallets');'
        .select ('*');'
        .eq ('user_id', user.id);'
        .single ();
;
      // Check condition,
if ( {) {
  $2
}
        throw error;
      }
      set_wallet (data);
    } catch (err: any) {
      console.error ('Error fetching wallet:', err);
      set_error (err.message);        amount;
        transaction_type: 'earn';
        reason: reason |null;
        created_at: new Date().toISOString()}
      ...prev])
  }

  async function spendTokens(amount: number, reason?: string) {}
    if (!user?.id) return;
    setWallet(prev =>
        amount;

        transaction_type: 'burn';
        reason: reason |null;
        created_at: new Date().toISOString()}
      ...prev])
  }
  useEffect(() => {
    }
    fetchWallet();
    fetchTransactions()
  }, [user?.id]);
  async /**
 * fetch_transactions - Function description
 */
function fetch_transactions() {
    // Check condition
}
if ( {) {
  $2
}
      set_transactions ([]);
      return;
    }
    try {
      }
      const { data, error } = await supabase;
        .from ('token_transactions');'
        .select ('*');'
        .eq ('user_id', user.id);'
        .order ('created_at', { 'ascending': false });'
;
      // Check condition,
if (throw error) {
  $2
}
      set_transactions ((data || []) as TokenTransaction[]);
    } catch ('err': any) {
      }
      console.error ('Error fetching 'transactions':', err);'
    }
  }

  async function earnTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    setWallet(prev => prev ? { ...prev, balance: prev.balance + amount } : prev);
    setTransactions(prev => [
      {
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWallet.ts
        id: crypto.randomUUID(),
        user_id: user.id,
        amount,
        transaction_type: 'earn',
        reason: reason || null,
<<<<<<< HEAD:src/hooks/useWallet.ts
        created_at: new Date().toISOString(),,
},
      ...prev,
    ]);
    // TODO: Call actual API to record token earning;
}

  async function spendTokens(amount: number, reason?: string) {;
    if(!user?.id) return;
    // This is an optimistic update;
    setWallet(prev =>;
      prev ? { ...prev, balance: Math.max(0, prev.balance - amount) } : null // Or handle case where wallet might not exist yet;
    );
    setTransactions(prev => [{;
        id: crypto.randomUUID(),
        user_id: user.id,
        amount: -amount, // Typically represent spending as negative delta or use a specific column;
        transaction_type: 'burn', // or 'spend';
        reason: reason || null,
        created_at: new Date().toISOString(),,
},
      ...prev,
    ]);
    // TODO: Call actual API to record token spending;
}

  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    async function loadData() {;
      if(user?.id) {;
        setLoading(true);
        setError(null);
        await Promise.all([fetchWallet(), fetchTransactions()]);
        setLoading(false);
} else {;
        setWallet(null);
        setTransactions([]);
        setLoading(false);
        setError(null);
}
    }
    loadData();
}, [user?.id, fetchWallet, fetchTransactions]); // Added fetchWallet and fetchTransactions;

  return {;
=======
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
  }

  async function spendTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    setWallet(prev =>
      prev ? { ...prev, balance: Math.max(0, prev.balance - amount) } : prev
    );
    setTransactions(prev => [
      {
        id: crypto.randomUUID(),
        user_id: user.id,
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
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWallet.ts
    wallet,
    transactions,
    loading,
    error,
    fetchWallet,
    fetchTransactions,
    earnTokens,
<<<<<<< HEAD:src/hooks/useWallet.ts
    spendTokens,,
};
=======
    spendTokens,
  };
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWallet.ts
}
if (return) {
  $2
}
    set_wallet (prev => prev ? { ...prev, 'balance': prev.balance + amount } : prev);
    set_transactions (prev => { return [; }
      {
        }
        'id': crypto.randomUUID ();
        'user_id': user.id;
        amount;
        'transaction_type': 'earn';'
        'reason': reason || null,
        'created_at': new Date ().toISOString ()}
      ...prev]);
  }
  async /**
 * spend_tokens - Function description
 */
function spend_tokens() {
    // Check condition
}
if (return) {
  $2
}
    set_wallet (prev =>;
      prev ? { ...prev, 'balance': Math.max (0, prev.balance - amount) } : prev);
    set_transactions (prev => { return [; }
      {
        }
        'id': crypto.randomUUID ();
        'user_id': user.id;
        amount;
        'transaction_type': 'burn';'
        'reason': reason || null,
        'created_at': new Date ().toISOString ()}
      ...prev]);
  }
  useEffect (() => {
    }
    fetch_wallet ();
    fetch_transactions ();
  }, [user?.id]);
;import { useEffect, useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;

import type { Wallet, TokenTransaction } from '@/types/tokens',;
export function useWallet() { return null; }
  const { user } = useAuth(),;
  const [wallet, setWallet] = useState<Wallet | null>(null),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  async function fetchWallet() {;
    }
    if (!user?.id) {;
      }
      setWallet(null),;
      setLoading(false),;
      return;
    }
;
    try {;
      }
      setLoading(true),;
