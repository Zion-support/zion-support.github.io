<<<<<<< HEAD
export type TokenSymbol = 'ZION$';

export type TokenTransactionType =
  | 'earn'
  | 'burn'
  | 'issue'
  | 'revoke'
  | 'redeem';

export interface TokenTransaction {
  id: string;
  userId: string;
  type: TokenTransactionType;
  amount: number; // positive integer tokens
  reason: string;
  metadata?: Record<string, any>;
  createdAt: string; // ISO timestamp
}

export interface Wallet {
  userId: string;
  balance: number; // current token balance
}

export interface TokenConfig {
  symbol: TokenSymbol;
  usdPerToken: number; // e.g., 0.05 means 100 ZION$ = $5
  earnRules: Record<string, number>; // action -> tokens
  burnRules: Record<string, number>; // feature -> tokens
}

export interface WalletSummary {
  wallet: Wallet;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
=======
export type TokenSymbol = "ZION$";
export type TokenTransactionType = | "earn" | "burn" | "issue" | "revoke" | "redeem";
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
