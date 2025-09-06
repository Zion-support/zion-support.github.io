
<<<<<<< HEAD

<<<<<<< HEAD
=======


export interface SmartContractInfo {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
<<<<<<< HEAD
export interface SmartContractInfo {
=======

export interface SmartContractInfo {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
}
<<<<<<< HEAD
export interface EscrowContractDetails {
=======

export interface EscrowContractDetails {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
<<<<<<< HEAD
<<<<<<< HEAD
  completionDeadline: string
  arbitrator?: string
}

=======



export interface DeploymentOptions {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  completionDeadline: string
  arbitrator?: string
}
<<<<<<< HEAD
export interface DeploymentOptions {
=======

export interface DeploymentOptions {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
