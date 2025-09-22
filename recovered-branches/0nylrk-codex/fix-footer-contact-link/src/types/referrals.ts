<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {
export type ReferralStatus = 'pending' | 'completed' | 'expired';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export interface ReferralCode {;
export interface ReferralCode {
  id: string;
  user_id: string;
  code: string;
  created_at: string;
  updated_at: string;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface ReferralCode {

=======
export interface ReferralCode {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface ReferralCode {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  user_id: string;
  code: string;
created_at: string;
  updated_at: string;
<<<<<<< HEAD

}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface Referral {

export interface Referral {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}export interface Referral {
=======

export interface Referral {;

export interface Referral {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export interface Referral {;
export interface Referral {

export interface Referral {};
export interface Referral {;
export interface Referral {
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Referral {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  referrer_id: string;
  referred_id: string | null;
  referral_code: string;
  status: ReferralStatus;
  ip_address: string | null;
  email: string | null;
  referred_user_type: string | null;
  referrer_user_type: string | null;
  created_at: string;
  completed_at: string | null;
<<<<<<< HEAD
<<<<<<< HEAD

  reward_issued: boolean,
  reward_issued_at: string | null;

}
export interface ReferralReward {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  reward_issued: boolean;
  reward_issued_at: string | null;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export interface ReferralReward {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  reward_issued: boolean
  reward_issued_at: string | null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface ReferralReward {

export interface ReferralReward {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  reward_issued: boolean;
  reward_issued_at: string | null;
}
export interface ReferralReward {};
export interface ReferralReward {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export interface ReferralReward {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  user_id: string;
  referral_id: string;"
  reward_type: "credit" | "visibility";
  amount: number | null;
created_at: string
  expires_at: string | null
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export interface ReferralStats {;

<<<<<<< HEAD

<<<<<<< HEAD
export interface ReferralStats {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export interface ReferralStats {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  totalReferrals: number;
  pendingReferrals: number;
completedReferrals: number

totalRewards: number
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  created_at: string,
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  expires_at: string | null;
=======
  completedReferrals: number;
  totalRewards: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

=======
expires_at: string | null;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  expires_at: string | null;
  totalRewards: number  expires_at: string | null;
}

;
export interface ReferralStats {;
  totalReferrals: number,;
  pendingReferrals: number,;
  completedReferrals: number;
  totalRewards: number;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
}}

export type ReferralStatus = "pending" | "completed" | "expired";"
export interface ReferralCode {
  // TODO: Implement
}
export interface ReferralCode {;

  id: string;,

  user_id: string;
  code: string;,
  created_at: string;

  updated_at: string;

export interface Referral {;

export interface Referral {
  // TODO: Implement
  // TODO: Implement
}

export interface Referral {;
export interface Referral {
  // TODO: Implement
  referrer_id: string;
  referred_id: string | null;,
  referral_code: string;
  status: ReferralStatus;,
  ip_address: string | null;
  email: string | null;,
  referred_user_type: string | null;
  referrer_user_type: string | null;,
  created_at: string;

  completed_at: string | null;,
  reward_issued: boolean;
  reward_issued_at: string | null;

export interface ReferralReward {;

  reward_issued: boolean;,
export interface ReferralReward {
  // TODO: Implement
  // TODO: Implement
  referral_id: string;,"
  reward_type: "credit" | "visibility";"
  amount: number | null;,
  expires_at: string | null;

export interface ReferralStats {;
  created_at: string;
  expires_at: string | null;

}
export interface ReferralStats {;

  totalReferrals: number;,
  pendingReferrals: number;
  completedReferrals: number;,
  totalRewards: number;

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
