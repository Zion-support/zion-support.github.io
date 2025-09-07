export interface Wallet {
export interface Wallet {;

  user_id: string;

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

  user_id: string;

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
  balance: number,  updated_at: string;

}

<<<<<<< HEAD
=======
export interface TokenTransaction {
<<<<<<< HEAD
export interface TokenTransaction {

export interface TokenTransaction {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD
  reason: string | null

<<<<<<< HEAD
=======
  created_at: string
}
export interface Wallet {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

  reason: string | null;
  created_at: string;

}
;
=======
  transaction_type: TransactionType,;
  reason: string | null;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  reason: string | null,
  created_at: string;

}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
;
export type TransactionType = 'earn' | 'burn',;
export interface TokenTransaction {;
  id: string,;
  user_id: string,;
  amount: number,;
  transaction_type: TransactionType,;  created_at: string;
}
;
}

  // TODO: Implement
}
  user_id: string;,
  balance: number;
  updated_at: string;

<<<<<<< HEAD
export type TransactionType = "earn" | "burn";"

export interface TokenTransaction {
  // TODO: Implement
  id: string;,
  user_id: string;
  amount: number;,
  transaction_type: TransactionType;

  reason: string | null;,
  created_at: string;
;

export interface Wallet {;
=======
<<<<<<< HEAD
  created_at: string;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
