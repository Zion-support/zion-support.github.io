
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
;
export interface SmartContractInfo {;
  id:string;
  transactionHash?:string;
  networkName?:BlockchainNetwork;
  blockNumber?:number;
  deployedAddress?:string;
  contractType:'escrow' | 'milestone' | 'simpleAgreement';
  metadataUrl?:string;
  createdAt:string;
  createdBy:string;
  status:'draft' | 'deployed' | 'executed' | 'cancelled';
}
;
export interface EscrowContractDetails {;
  client:string;
  talent:string;
  amount:number;
  currency:string;
  deliverables:string;
  completionDeadline:string;
  arbitrator?:string;
}
;
export interface DeploymentOptions {;
  network:BlockchainNetwork;
  walletAddress?:string;
  useEscrow:boolean;
  deployToChain:boolean;
} export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
