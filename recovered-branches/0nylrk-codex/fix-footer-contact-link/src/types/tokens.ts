export interface Wallet {
  user_id: string;

export interface TokenTransaction {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
  reason: string | null;
  created_at: string;

}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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



=======
export type TransactionType = "earn" | "burn";"

export interface TokenTransaction {

  user_id: string;

export interface Wallet {
export interface Wallet {;
  user_id: string;

  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
  balance: number,  updated_at: string;
}


export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
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
}
;
}
