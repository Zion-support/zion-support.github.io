
<<<<<<< HEAD
export interface Wallet {
export interface Wallet {;
  user_id: string;

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;

export interface TokenTransaction {
<<<<<<< HEAD
export interface TokenTransaction {

export interface TokenTransaction {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  reason: string | null,
  created_at: string;

}


export interface Wallet {;

<<<<<<< HEAD
  created_at: string;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
