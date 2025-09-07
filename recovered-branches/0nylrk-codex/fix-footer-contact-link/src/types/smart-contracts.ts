export type BlockchainNetwork = "ethereum" | "polygon" | "none";

<<<<<<< HEAD

export interface SmartContractInfo {;


=======
export interface SmartContractInfo {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;
  contractType: "escrow" | "milestone" | "simpleAgreement";
  metadataUrl?: string;
  createdAt: string;
<<<<<<< HEAD
  createdBy: string;
  status: "draft" | "deployed" | "executed" | "cancelled";
}


export interface EscrowContractDetails {;

}
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
  client: string;
=======
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';}

export interface EscrowContractDetails {;

export interface EscrowContractDetails {

export interface EscrowContractDetails {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
  completionDeadline: string;
  arbitrator?: string;
}

<<<<<<< HEAD


export interface DeploymentOptions {;


  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean;
  deployToChain: boolean;
}
=======
export interface DeploymentOptions {;

  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
  arbitrator?: string;}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface DeploymentOptions {
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,
  deployToChain: boolean;

}
;

<<<<<<< HEAD


  arbitrator?: string;
=======
}  arbitrator?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
