
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

  status: 'draft' | 'deployed' | 'executed' | 'cancelled'

;

  status: "draft" | "deployed" | "executed" | "cancelled";

}

export interface EscrowContractDetails {
}


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





