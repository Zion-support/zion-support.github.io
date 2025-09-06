;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
;
export interface SmartContractInfo {
  id: string;
  transaction_hash?: string;
  network_name?: BlockchainNetwork;
  block_number?: number;
  deployed_address?: string;
  contract_type: 'escrow' | 'milestone' | 'simple_agreement';
  metadata_url?: string;
  created_at: string;
  created_by: string,
  status: 'draft' | 'deployed' | 'executed' | 'cancelled';
}
export interface EscrowContractDetails {
}


export interface EscrowContractDetails {;

  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
  completion_deadline: string,
  arbitrator?: string;
}
export interface DeploymentOptions {
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,
  deployToChain: boolean;
}
