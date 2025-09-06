
<<<<<<< HEAD
=======
export interface Wallet {;
  user_id:string;
  balance:number;
  updated_at:string;
}
;
export type TransactionType = 'earn' | 'burn';
;
export interface TokenTransaction {;
  id:string;
  user_id:string;
  amount:number;
  transaction_type:TransactionType;
  reason:string | null;
  created_at:string;
} export type TransactionType = 'earn' | 'burn';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
