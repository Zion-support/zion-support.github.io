
<<<<<<< HEAD
export interface Wallet {
  user_id: string,
  balance: number,
  updated_at: string
}
=======
export interface Wallet {_user_id: string;
  balance: number;
  updated_at: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type TransactionType = 'earn' | 'burn',

<<<<<<< HEAD
export interface TokenTransaction {
  id: string,
  user_id: string,
  amount: number,
  transaction_type: TransactionType,
  reason: string | null,
  created_at: string
}
=======
export interface TokenTransaction {_id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
  reason: string | null;
  created_at: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
