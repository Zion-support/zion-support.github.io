
<<<<<<< HEAD


export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {
=======

export interface ReferralCode {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD
=======
  created_at: string,
  updated_at: string;

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export interface Referral {

export interface Referral {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  reward_issued: boolean,
  reward_issued_at: string | null;

}
<<<<<<< HEAD
=======
export interface ReferralReward {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export interface ReferralReward {

export interface ReferralReward {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;
<<<<<<< HEAD

  created_at: string
  expires_at: string | null
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======



export interface ReferralStats {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
}
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
  expires_at: string | null;
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
