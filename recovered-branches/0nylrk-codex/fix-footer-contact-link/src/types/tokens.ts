export interface Wallet {
  user_id: string;
<<<<<<< HEAD
  balance: number;
  updated_at: string;
=======

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
  balance: number,  updated_at: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export type TransactionType = "earn" | "burn";

export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
<<<<<<< HEAD
  reason: string | null;
  created_at: string;
}
;


export interface Wallet {;

  created_at: string;
=======
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
  transaction_type: TransactionType,;  created_at: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
}
