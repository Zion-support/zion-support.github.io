
<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface ReferralCode {
export type ReferralStatus = 'pending' | 'completed' | 'expired';

export interface ReferralCode {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  user_id: string;
  code: string;

  created_at: string,
  updated_at: string;

}
<<<<<<< HEAD
=======
export interface Referral {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface Referral {

export interface Referral {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

  reward_issued: boolean,
  reward_issued_at: string | null;

}
<<<<<<< HEAD
=======
export interface ReferralReward {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  reward_issued: boolean
  reward_issued_at: string | null
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface ReferralReward {

export interface ReferralReward {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;
<<<<<<< HEAD
  created_at: string
  expires_at: string | null
}
export interface ReferralStats {

export interface ReferralStats {;
=======



export interface ReferralStats {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
