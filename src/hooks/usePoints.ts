import { useCallback, useEffect, useMemo, useState } from 'react';

export interface PointsLedgerEntry {
  id: string;
  type: 'earn' | 'redeem';
  points: number;
  description?: string;
  createdAt: string;
}

export interface UsePointsResult {
  ledger: PointsLedgerEntry[];
  balance: number;
  loading: boolean;
  fetchLedger: () => Promise<void>;
}

export function usePoints(): UsePointsResult {
  const [ledger, setLedger] = useState<PointsLedgerEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLedger = useCallback(async () => {
    setLoading(true);
    try {
      const demo: PointsLedgerEntry[] = [
        { id: 'p1', type: 'earn', points: 120, description: 'Signup bonus', createdAt: new Date().toISOString() },
        { id: 'p2', type: 'earn', points: 80, description: 'Read Trusted GenAI article', createdAt: new Date().toISOString() },
        { id: 'p3', type: 'redeem', points: -50, description: 'Redeemed for discount', createdAt: new Date().toISOString() }
      ];
      setLedger(demo);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchLedger();
  }, [fetchLedger]);

  const balance = useMemo(() => ledger.reduce((sum, e) => sum + e.points, 0), [ledger]);

  return { ledger, balance, loading, fetchLedger };
}

export default usePoints;
