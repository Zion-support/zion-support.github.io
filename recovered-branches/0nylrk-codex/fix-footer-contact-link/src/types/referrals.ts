

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface ReferralCode {
export type ReferralStatus = 'pending' | 'completed' | 'expired';

export interface ReferralCode {;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  id: string;
  user_id: string;
  code: string;

  created_at: string,
  updated_at: string;

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface Referral {

export interface Referral {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface ReferralReward {

export interface ReferralReward {;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;
  created_at: string
  expires_at: string | null
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
