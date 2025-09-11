



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
}
export interface EscrowContractDetails {
}


export interface EscrowContractDetails {;

export interface EscrowContractDetails {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface EscrowContractDetails {
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;



export interface DeploymentOptions {;


export interface DeploymentOptions {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
}
;



<<<<<<< HEAD
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
