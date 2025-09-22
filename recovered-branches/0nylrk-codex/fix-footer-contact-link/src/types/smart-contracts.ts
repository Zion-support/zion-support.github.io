export type BlockchainNetwork = "ethereum" | "polygon" | "none";

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
export interface SmartContractInfo {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface SmartContractInfo {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export interface SmartContractInfo {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  transactionHash?: string;
  networkName?: BlockchainNetwork;
  blockNumber?: number;
  deployedAddress?: string;"
  contractType: "escrow" | "milestone" | "simpleAgreement";
  metadataUrl?: string;
  createdAt: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'

;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  status: "draft" | "deployed" | "executed" | "cancelled";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
=======
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface EscrowContractDetails {;

export interface EscrowContractDetails {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
export interface EscrowContractDetails {};
export interface EscrowContractDetails {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  client: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  client: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talent: string;
  amount: number;
  currency: string;
  deliverables: string;
completionDeadline: string
  arbitrator?: string
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export interface DeploymentOptions {;

<<<<<<< HEAD

<<<<<<< HEAD
export interface DeploymentOptions {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  completion_deadline: string,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  arbitrator?: string;
=======
  useEscrow: boolean;
  deployToChain: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

=======
  arbitrator?: string;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean;
  deployToChain: boolean;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface DeploymentOptions {
=======
export interface DeploymentOptions {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface SmartContractInfo {;

}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  network: BlockchainNetwork;
  wallet_address?: string;
  use_escrow: boolean,}
  deployToChain: boolean;}
}
;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
