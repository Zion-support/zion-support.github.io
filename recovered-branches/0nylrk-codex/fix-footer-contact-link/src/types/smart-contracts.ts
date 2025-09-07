<<<<<<< HEAD
=======
<<<<<<< HEAD


export type BlockchainNetwork = $2;
export interface SmartContractInfo {
  id: string,
  transactionHash?: string,
  networkName?: BlockchainNetwork,
  blockNumber?: number,
  deployedAddress?: string,
  contractType: 'escrow' | 'milestone' | 'simpleAgreement',
  metadataUrl?: string,
  createdAt: string,
  createdBy: string,
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type BlockchainNetwork = "ethereum" | "polygon" | "none";

  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;"
  contractType: "escrow" | "milestone" | "simpleAgreement";
  metadataUrl?: string;
  createdAt: string;

  createdBy: string
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'

;

  status: "draft" | "deployed" | "executed" | "cancelled";

<<<<<<< HEAD
=======
}
<<<<<<< HEAD

export interface EscrowContractDetails {;

export interface EscrowContractDetails {

}
export interface EscrowContractDetails {};
export interface EscrowContractDetails {;

=======
export interface EscrowContractDetails {
}


export interface EscrowContractDetails {;

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

export interface EscrowContractDetails {;

export interface EscrowContractDetails {

<<<<<<< HEAD
=======
export interface EscrowContractDetails {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  client: string;

  talent: string;
  amount: number;
  currency: string;
  deliverables: string;

export interface DeploymentOptions {;

<<<<<<< HEAD
=======

<<<<<<< HEAD
  completionDeadline: string
  arbitrator?: string
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
export interface EscrowContractDetails {};
export interface EscrowContractDetails {;

  client: string;

  talent: string;
  amount: number;
  currency: string;
  deliverables: string;

export interface DeploymentOptions {;

  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean

  completion_deadline: string,

  arbitrator?: string;

}

export interface DeploymentOptions {

<<<<<<< HEAD
=======
export interface DeploymentOptions {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  completion_deadline: string,

  arbitrator?: string;

}

export interface DeploymentOptions {

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,}
  deployToChain: boolean;}
}
;

}
;
export interface DeploymentOptions {;
  network: BlockchainNetwork,;
  walletAddress?: string,;

<<<<<<< HEAD
  useEscrow: boolean;,
  deployToChain: boolean;
}
;
=======
<<<<<<< HEAD
  useEscrow: boolean;,
  deployToChain: boolean;
}
;
=======

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
