
export interface Wallet {
  user_id: string;
<<<<<<< HEAD
  balance: number;
  updated_at: string
}

export type TransactionType = any;
=======
  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
  reason: string | null
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  created_at: string
}