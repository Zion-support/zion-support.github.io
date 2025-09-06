export interface Wallet {
  user_id: string;
<<<<<<< HEAD

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
  balance: number,
=======
  balance: number;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  updated_at: string;
}

export type TransactionType = "earn" | "burn";

export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD
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
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  reason: string | null;
  created_at: string;
}
;


export interface Wallet {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  created_at: string;
}
;
}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
