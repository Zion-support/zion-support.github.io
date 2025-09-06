export type TokenSymbol = "ZION$",

export type TokenTransactionType =
  | "earn"
  | "burn"
  | "issue"
  | "revoke"
  | "redeem",

export interface TokenTransaction {
  id: string,
  userId: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens
  reason: string,
