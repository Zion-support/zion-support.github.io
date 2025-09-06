
<<<<<<< HEAD

  user_id: string;

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

export interface TokenTransaction {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;

<<<<<<< HEAD
  created_at: string
}

  user_id: string,;
  balance: number,;
  updated_at: string;
}
;
export type TransactionType = 'earn' | 'burn',;
export interface TokenTransaction {;
  id: string,;
  user_id: string,;
  amount: number,;
  transaction_type: TransactionType,;
  reason: string | null;
=======
  reason: string | null,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  created_at: string;

}
<<<<<<< HEAD
;

=======
=======


export interface Wallet {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
