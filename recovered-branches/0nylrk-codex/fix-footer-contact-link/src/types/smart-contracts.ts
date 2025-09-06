<<<<<<< HEAD
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';

export interface SmartContractInfo {
  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;
  contractType: 'escrow' | 'milestone' | 'simpleAgreement';
  metadataUrl?: string;
  createdAt: string;
  createdBy: string;
  status: 'draft' | 'deployed' | 'executed' | 'cancelled';
}

export interface EscrowContractDetails {
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
  completionDeadline: string;
  arbitrator?: string;
}

export interface DeploymentOptions {
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean;
  deployToChain: boolean;
}
=======
 export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
