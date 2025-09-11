
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;

export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;

  created_at: string
}
=======


export interface Wallet {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
