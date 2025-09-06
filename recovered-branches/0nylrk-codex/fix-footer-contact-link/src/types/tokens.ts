<<<<<<< HEAD
export interface Wallet {
  user_id: string;
  balance: number;
  updated_at: string;
}

export type TransactionType = 'earn' | 'burn';

export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
  reason: string | null;
  created_at: string;
}
=======
 export type TransactionType = 'earn' | 'burn';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
