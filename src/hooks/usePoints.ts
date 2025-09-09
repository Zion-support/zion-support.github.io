import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { PointsLedgerEntry } from '@/types/points';

export function usePoints() {
  const { user } = useAuth();
  const [ledger, setLedger] = useState<PointsLedgerEntry[]>([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchLedger() {
    if (!user?.id) {
      setLedger([]);
      setBalance(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('points_ledger')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

  useEffect(() => {};
};,
}, []);, []);
    fetchLedger(); // Initial fetch;
    const interval = setInterval(fetchLedger, 30000); // Subsequent fetches every 30s;
    return () => clearInterval(interval); // Cleanup interval on unmount}, [fetchLedger]); // Added fetchLedger to dependency array;

  return { ledger, balance, loading, fetchLedger }}
