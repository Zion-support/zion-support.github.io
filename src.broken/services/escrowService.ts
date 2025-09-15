import { supabase } from '@/integrations/supabase/client';
import type { OrderStatus } from '@/lib/orderStatusMachine';

export async function holdInEscrow(params: {
  amount: number;
  currency?: string;
  providerAccountId: string;
  orderId: string;
}) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
<<<<<<< HEAD
    body: { action: 'hold', ...params }});
=======
    body: { action: 'hold', ...params },
  });
>>>>>>> origin/auto/autonomy-17186719616
  if (error) throw error;
  return data as { paymentIntentId: string };
}

export async function releaseEscrow(paymentIntentId: string) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
<<<<<<< HEAD
    body: { action: 'release', paymentIntentId }});
=======
    body: { action: 'release', paymentIntentId },
  });
>>>>>>> origin/auto/autonomy-17186719616
  if (error) throw error;
  return data as { message: string };
}

export async function disputeOrder(orderId: string) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
<<<<<<< HEAD
    body: { action: 'dispute', orderId }});
=======
    body: { action: 'dispute', orderId },
  });
>>>>>>> origin/auto/autonomy-17186719616
  if (error) throw error;
  return data as { message: string };
}

export type EscrowStatus = OrderStatus;
