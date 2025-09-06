

=======
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
export interface SmartContractInfo {

export interface SmartContractInfo {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  client: string;
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
  completionDeadline: string
  arbitrator?: string
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
