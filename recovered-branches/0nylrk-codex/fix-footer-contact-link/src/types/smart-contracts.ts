;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
}
export interface EscrowContractDetails {
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
}