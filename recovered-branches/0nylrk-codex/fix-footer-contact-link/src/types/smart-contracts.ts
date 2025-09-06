






export interface SmartContractInfo {;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;






export interface DeploymentOptions {;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

