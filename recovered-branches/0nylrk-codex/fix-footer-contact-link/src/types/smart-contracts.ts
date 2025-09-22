export type BlockchainNetwork = "ethereum" | "polygon" | "none";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
export interface SmartContractInfo {

export interface SmartContractInfo {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface SmartContractInfo {;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface EscrowContractDetails {

export interface EscrowContractDetails {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface EscrowContractDetails {
=======
  createdBy: string;
=======
  createdBy: string;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  status: "draft" | "deployed" | "executed" | "cancelled";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

=======
  createdBy: string
  status: 'draft' | 'deployed' | 'executed' | 'cancelled'
;
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export type BlockchainNetwork = 'ethereum' | 'polygon' | 'none';}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface EscrowContractDetails {;

<<<<<<< HEAD
=======
  createdBy: string;
  status: "draft" | "deployed" | "executed" | "cancelled";
}


export interface EscrowContractDetails {;

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface EscrowContractDetails {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
export interface EscrowContractDetails {};
export interface EscrowContractDetails {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
  completionDeadline: string
  arbitrator?: string
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
  completionDeadline: string;
  arbitrator?: string;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8



export interface DeploymentOptions {;

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
export interface DeploymentOptions {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export interface DeploymentOptions {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  completion_deadline: string,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  arbitrator?: string;
=======
  useEscrow: boolean;
  deployToChain: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
<<<<<<< HEAD
=======
  network: BlockchainNetwork;
  walletAddress?: string;
  useEscrow: boolean

  deployToChain: boolean
  arbitrator?: string;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
<<<<<<< HEAD
}  arbitrator?: string;
=======


  arbitrator?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}  arbitrator?: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
