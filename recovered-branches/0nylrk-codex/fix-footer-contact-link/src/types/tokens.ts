

export interface Wallet {
export interface Wallet {;
  user_id: string;






  balance: number,
  updated_at: string;
}
export type TransactionType = 'earn' | 'burn';


;

export interface TokenTransaction {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;


  created_at: string
}




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




