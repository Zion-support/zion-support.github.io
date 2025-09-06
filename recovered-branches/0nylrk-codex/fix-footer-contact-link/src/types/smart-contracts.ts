

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
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
}
<<<<<<< HEAD
export interface EscrowContractDetails {
}


export interface EscrowContractDetails {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;



export interface DeploymentOptions {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
  completionDeadline: string
  arbitrator?: string
}
export interface DeploymentOptions {

export interface DeploymentOptions {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
