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
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';}
export interface EscrowContractDetails {;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
  completionDeadline: string;
  arbitrator?: string;
}

export interface DeploymentOptions {;

  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
  arbitrator?: string;}
export interface DeploymentOptions {


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

}  arbitrator?: string;
}
;
export interface DeploymentOptions {;
  network: BlockchainNetwork,;
  walletAddress?: string,;





