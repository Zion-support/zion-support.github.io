import { supabase } from '@/integrations/supabase/client';
import type { OrderStatus } from '@/lib/orderStatusMachine';

export async function holdInEscrow(params: {
  amount: number;
  currency?: string;
  providerAccountId: string;
  orderId: string;
}) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
