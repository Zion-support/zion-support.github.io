export interface Wallet {

export interface Wallet {;


  user_id: string;



  balance: number,

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




