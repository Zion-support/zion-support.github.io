<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface Wallet {
export interface Wallet {;
  user_id: string;

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;

export interface TokenTransaction {
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface TokenTransaction {

export interface TokenTransaction {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  reason: string | null

  created_at: string
}
export interface Wallet {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  reason: string | null,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  created_at: string;

}
;


export interface Wallet {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_at: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
