export interface Wallet {
  user_id: string;
<<<<<<< HEAD

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
=======
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD
  reason: string | null

  created_at: string
=======
  reason: string | null,
  created_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}