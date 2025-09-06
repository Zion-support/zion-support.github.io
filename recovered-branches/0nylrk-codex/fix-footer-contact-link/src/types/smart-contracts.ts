

<<<<<<< HEAD
=======


export interface SmartContractInfo {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
}

=======

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
=======
}


export interface EscrowContractDetails {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
<<<<<<< HEAD
  completionDeadline: string
  arbitrator?: string
}

=======



export interface DeploymentOptions {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
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
=======
=======
  completion_deadline: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
