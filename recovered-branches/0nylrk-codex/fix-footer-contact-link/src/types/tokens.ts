
  balance: number
  updated_at: string
}
export type TransactionType = 'earn' | 'burn';
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';
;

export interface TokenTransaction {
export interface TokenTransaction {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
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
  reason: string | null,
  created_at: string;

}


export interface Wallet {;

  created_at: string
}
=======


export interface Wallet {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
