
<<<<<<< HEAD
=======
export interface Wallet {
export interface Wallet {;
  user_id: string;

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;

export interface TokenTransaction {
<<<<<<< HEAD
=======
export interface TokenTransaction {

export interface TokenTransaction {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD

=======
  reason: string | null

  created_at: string
}
export interface Wallet {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  reason: string | null,
  created_at: string;

}


export interface Wallet {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_at: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
