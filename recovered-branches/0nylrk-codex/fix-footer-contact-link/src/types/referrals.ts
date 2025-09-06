<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
export interface ReferralCode {
export type ReferralStatus = 'pending' | 'completed' | 'expired';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export interface ReferralCode {;
export interface ReferralCode {
  id: string;
  user_id: string;
  code: string;
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {

export interface ReferralCode {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  user_id: string;
  code: string;

  created_at: string,
  updated_at: string;

}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface Referral {

export interface Referral {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Referral {
}


export interface Referral {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface Referral {

export interface Referral {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Referral {

export interface Referral {;
export interface Referral {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

  reward_issued: boolean,
  reward_issued_at: string | null;

}
export interface ReferralReward {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface ReferralReward {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  reward_issued: boolean
  reward_issued_at: string | null
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface ReferralReward {

export interface ReferralReward {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface ReferralReward {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;
<<<<<<< HEAD
  created_at: string
  expires_at: string | null
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



export interface ReferralStats {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
  created_at: string
  expires_at: string | null
}
export interface ReferralStats {

export interface ReferralStats {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export type ReferralStatus = 'pending' | 'completed' | 'expired',;
export interface ReferralCode {;
  id: string,;
  user_id: string,;
  code: string,;
  created_at: string,;
  updated_at: string;
}
;
export interface Referral {;
  id: string,;
  referrer_id: string,;
  referred_id: string | null,;
  referral_code: string,;
  status: ReferralStatus,;
  ip_address: string | null,;
  email: string | null,;
  referred_user_type: string | null,;
  referrer_user_type: string | null,;
  created_at: string,;
  completed_at: string | null,;
  reward_issued: boolean,;
  reward_issued_at: string | null;
}
;
export interface ReferralReward {;
  id: string,;
  user_id: string,;
  referral_id: string,;
  reward_type: 'credit' | 'visibility',;
  amount: number | null,;
  created_at: string,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  created_at: string,
  expires_at: string | null;
}

<<<<<<< HEAD
=======
  expires_at: string | null;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  expires_at: string | null;
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
