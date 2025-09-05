import { useEffect, useState, useCallback } from 'react'; // Added useCallback;''
import { supabase } from '@/integrations/supabase/client';''
import { useAuth } from '@/hooks/useAuth';''
 from '@/types/points';'
export function usePoints() {;}
  const { user } = useAuth();
  const [ledger, setLedger] = useState<PointsLedgerEntry[]>([]);
</PointsLedgerEntry>'
import { useEffect, useState, useCallback, supabase } from 'lucide-react'; import { useAuth } from '@/hooks/useAuth'; from '@/types/points'; export function usePoints() {; const { user } = useAuth(); const [ledger,setLedger] = useState<PointsLedgerEntry[]>([]); const [balance,setBalance] = useState(0); const [loading,setLoading] = useState(true); const fetchLedger = useCallback(async () => { if(!user?.id) {; setLedger([]); setBalance(0); setLoading(false); return,} setLoading(true); const { data,error } = await supabase; .from('points_ledger'); .select('*'); .eq('user_id',user.id); .order('created_at',{ ascending: false }); if(!error && data) {; const entries = data as PointsLedgerEntry[]; setLedger(entries); const total = entries.reduce((sum,e) => sum + e.delta,0); setBalance(total),} else if(error) {; console.error("Error fetching ledger:",error); setLedger([]); setBalance(0)} setLoading(false),},[user?.id]); useEffect(() => {}},},[]),[]); fetchLedger(); const interval = setInterval(fetchLedger,30000); return () => clearInterval(interval)},[fetchLedger]); return { ledger,balance,loading,fetchLedger },}"
</PointsLedgerEntry>"