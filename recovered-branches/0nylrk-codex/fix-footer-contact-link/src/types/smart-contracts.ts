



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
export interface EscrowContractDetails {
}
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;



export interface DeploymentOptions {;


export interface DeploymentOptions {;
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
}
;



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
