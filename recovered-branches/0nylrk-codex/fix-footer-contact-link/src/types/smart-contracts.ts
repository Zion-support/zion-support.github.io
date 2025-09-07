export type BlockchainNetwork = "ethereum" | "polygon" | "none";

export interface SmartContractInfo {;


export type BlockchainNetwork = "ethereum" | "polygon" | "none";"

export interface SmartContractInfo {;


pr-12325
  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;
  contractType: "escrow" | "milestone" | "simpleAgreement";
  metadataUrl?: string;
  createdAt: string;
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';}
  deployedAddress?: string;"
  contractType: "escrow" | "milestone" | "simpleAgreement";"
  metadataUrl?: string;
  createdAt: string;,
  createdBy: string;"
  status: "draft" | "deployed" | "executed" | "cancelled";"
}

pr-12325

export interface EscrowContractDetails {;

export interface EscrowContractDetails {

export interface EscrowContractDetails {;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;

  deployedAddress?: string;"
  contractType: "escrow" | "milestone" | "simpleAgreement";"
  metadataUrl?: string;
  createdAt: string;,
  createdBy: string;"
  status: "draft" | "deployed" | "executed" | "cancelled";"
}



export interface EscrowContractDetails {;
export interface EscrowContractDetails {

  // TODO: Implement
}
export interface EscrowContractDetails {;
  client: string;,

  talent: string;
  amount: number;,
  currency: string;

  deliverables: string;,
  completionDeadline: string;
  arbitrator?: string;

}

export interface DeploymentOptions {;
  network: BlockchainNetwork;
  walletAddress?: string;

  deployToChain: boolean
  arbitrator?: string;}
export interface DeploymentOptions {
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,
  deployToChain: boolean;

}
;

}  arbitrator?: string;
}
;
export interface DeploymentOptions {;
  network: BlockchainNetwork,;
  walletAddress?: string,;
  useEscrow: boolean;
  deployToChain: boolean;
}
;
  // TODO: Implement
  client: string;,
  talent: string;
  amount: number;,
  currency: string;
  deliverables: string;,
  completionDeadline: string;
  arbitrator?: string;



export interface DeploymentOptions {;


  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean;,
  deployToChain: boolean;
export interface DeploymentOptions {
  // TODO: Implement
  wallet_address?: string;
  use_escrow: boolean,

;



  network: BlockchainNetwork,;
  walletAddress?: string,;
"
pr-12325
  useEscrow: boolean;,
  deployToChain: boolean;
}

export interface DeploymentOptions {
  // TODO: Implement
}
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,}
  deployToChain: boolean;}
}
;
}  arbitrator?: string;
}
;
export interface DeploymentOptions {;
  network: BlockchainNetwork,;
  walletAddress?: string,;

  useEscrow: boolean;,
  deployToChain: boolean;
}
;
}
"

