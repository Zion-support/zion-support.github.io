
export interface Wallet {_user_id: string;
  balance: number;
  updated_at: string;}

export type TransactionType = 'earn' | 'burn';

export interface TokenTransaction {_id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
  reason: string | null;
  created_at: string;}
