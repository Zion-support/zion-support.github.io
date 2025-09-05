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
}

export type EscrowStatus = OrderStatus;
