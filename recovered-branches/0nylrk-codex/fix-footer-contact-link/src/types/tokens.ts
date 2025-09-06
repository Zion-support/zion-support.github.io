export interface Wallet {
  user_id: string;
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  transaction_type: TransactionType;
}