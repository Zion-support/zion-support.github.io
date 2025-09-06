

interface Transaction {
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
  currency: string,
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,


