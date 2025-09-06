<<<<<<< HEAD


<<<<<<< HEAD
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
export interface SmartContractInfo {

export interface SmartContractInfo {;
=======


export interface SmartContractInfo {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
}
<<<<<<< HEAD
=======
export interface EscrowContractDetails {
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
export interface DeploymentOptions {

export interface DeploymentOptions {;
=======



export interface DeploymentOptions {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
