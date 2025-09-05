<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client',
import type { OrderStatus } from '@/lib/orderStatusMachine',
export async function holdInEscrow(params: {
  amount: number,
  currency?: string,
  providerAccountId: string,
  orderId: string
}) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'hold', ...params }}),
  if (error) throw error,
  return data as { paymentIntentId: string }
}

export async function releaseEscrow(paymentIntentId: string) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'release', paymentIntentId }}),
  if (error) throw error,
  return data as { message: string }
}

export async function disputeOrder(orderId: string) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'dispute', orderId }}),
  if (error) throw error,
  return data as { message: string }
=======
import type {_OrderStatus} from '@/lib/orderStatusMachine';

export async function holdInEscrow(_params: {_amount: number;
  currency?: string;
  providerAccountId: string;
  orderId: string;}) {_const { data, _error} = await supabase.functions.invoke('escrow-service', {_body: { action: 'hold', _...params}});
  if (error) throw error;
  return data as {_paymentIntentId: string};
}

export async function releaseEscrow(_paymentIntentId: string) {_const { data, _error} = await supabase.functions.invoke('escrow-service', {_body: { action: 'release', _paymentIntentId}});
  if (error) throw error;
  return data as {_message: string};
}

export async function disputeOrder(_orderId: string) {_const { data, _error} = await supabase.functions.invoke('escrow-service', {_body: { action: 'dispute', _orderId}});
  if (error) throw error;
  return data as {_message: string};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export type EscrowStatus = OrderStatus,
