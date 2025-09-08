export type BlockchainNetwork = "ethereum" | "polygon" | "none";


export interface SmartContractInfo {;


  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;"
  contractType: "escrow" | "milestone" | "simpleAgreement";
  metadataUrl?: string;
  createdAt: string;
  createdBy: string;
  status: "draft" | "deployed" | "executed" | "cancelled";
}


export interface EscrowContractDetails {;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  client: string;

  talent: string;
  amount: number;
  currency: string;
  deliverables: string;

export interface DeploymentOptions {;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean;
  deployToChain: boolean;
}

export interface DeploymentOptions {

>>>>>>> origin/cursor/delete-old-data-records-6bba

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


<<<<<<< HEAD



=======
  useEscrow: boolean;,
  deployToChain: boolean;
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
