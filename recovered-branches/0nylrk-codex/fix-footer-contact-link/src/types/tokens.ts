
<<<<<<< HEAD
export interface Wallet {
export interface Wallet {;
  user_id: string;

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
export interface TokenTransaction {

export interface TokenTransaction {;
=======
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;

export interface TokenTransaction {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;

  created_at: string
}
<<<<<<< HEAD
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
  created_at: string;

}
;
=======
=======


export interface Wallet {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
