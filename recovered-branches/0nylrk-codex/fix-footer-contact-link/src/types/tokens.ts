
export interface Wallet {;
<<<<<<< HEAD
  user_id: string;
  balance: number,
  updated_at: string
}

export type TransactionType = 'earn' | 'burn';

export interface TokenTransaction {;
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
  reason: string | null,
  created_at: string
}
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
  transaction_type: TransactionType,;
  reason: string | null;
  created_at: string;
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
