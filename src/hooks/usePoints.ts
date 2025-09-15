import { useCallback, useEffect, useState } from 'react';

interface LedgerEntry {
	date: string;
	points: number;
	description: string;
}

interface UsePointsResult {
	ledger: LedgerEntry[];
	balance: number;
	loading: boolean;
	fetchLedger: () => Promise<void>;
}

export function usePoints(): UsePointsResult {
	const [ledger, setLedger] = useState<LedgerEntry[]>([]);
	const [balance, setBalance] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchLedger = useCallback(async () => {
		setLoading(true);
		try {
			// Placeholder implementation; replace with real API integration
			const sample: LedgerEntry[] = [
				{ date: new Date().toISOString(), points: 100, description: 'Welcome bonus' }
			];
			setLedger(sample);
			setBalance(sample.reduce((sum, e) => sum + e.points, 0));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		void fetchLedger();
	}, [fetchLedger]);

	return { ledger, balance, loading, fetchLedger };
}

export default usePoints;
