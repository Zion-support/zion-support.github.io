
<<<<<<< HEAD
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
export interface SmartContractInfo {
=======

export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
<<<<<<< HEAD
export interface SmartContractInfo {
=======

export interface SmartContractInfo {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;
  contractType: 'escrow' | 'milestone' | 'simpleAgreement';
  metadataUrl?: string;
  createdAt: string;
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'
}
<<<<<<< HEAD
export interface EscrowContractDetails {
<<<<<<< HEAD
=======
=======
}


export interface EscrowContractDetails {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
  completionDeadline: string
  arbitrator?: string
}
<<<<<<< HEAD
export interface DeploymentOptions {
=======
<<<<<<< HEAD
export interface DeploymentOptions {
=======

export interface DeploymentOptions {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
}
=======
=======
  completion_deadline: string,
  arbitrator?: string;
}
export interface DeploymentOptions {
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,
  deployToChain: boolean;

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
