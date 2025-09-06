



export interface SmartContractInfo {;


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

;
export interface SmartContractInfo {
  id: string;
  transaction_hash?: string;
  network_name?: BlockchainNetwork;
  block_number?: number;
  deployed_address?: string;
  contract_type: 'escrow' | 'milestone' | 'simple_agreement';
  metadata_url?: string;
  created_at: string;
  created_by: string,
  status: 'draft' | 'deployed' | 'executed' | 'cancelled';

}
export interface EscrowContractDetails {
}


export interface EscrowContractDetails {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;



export interface DeploymentOptions {;


<<<<<<< HEAD
=======
  completionDeadline: string
  arbitrator?: string
}
export interface DeploymentOptions {

export interface DeploymentOptions {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
=======
=======
}
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none',;
export interface SmartContractInfo {;
  id: string,;
  transactionHash?: string,;
  networkName?: BlockchainNetwork,;
  blockNumber?: number,;
  deployedAddress?: string,;
  contractType: 'escrow' | 'milestone' | 'simpleAgreement',;
  metadataUrl?: string,;
  createdAt: string,;
  createdBy: string,;
  status: 'draft' | 'deployed' | 'executed' | 'cancelled';
}
;
export interface EscrowContractDetails {;
  client: string,;
  talent: string,;
  amount: number,;
  currency: string,;
  deliverables: string,;
  completionDeadline: string,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  arbitrator?: string;
}
;
export interface DeploymentOptions {;
  network: BlockchainNetwork,;
  walletAddress?: string,;
  useEscrow: boolean;
  deployToChain: boolean;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
