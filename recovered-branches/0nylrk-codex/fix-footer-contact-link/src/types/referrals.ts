
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
=======export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {

export interface ReferralCode {;

=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  user_id: string;
  code: string;

  created_at: string,
  updated_at: string;

}
export interface Referral {

export interface Referral {;

export interface Referral {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
export interface ReferralReward {
}


export interface ReferralReward {;

export interface ReferralReward {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface ReferralReward {
=======
  reward_issued: boolean
  reward_issued_at: string | null
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;



export interface ReferralStats {;


export interface ReferralStats {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export interface ReferralStats {;
  totalReferrals: number,;
  pendingReferrals: number,;
  completedReferrals: number;
  totalRewards: number;
}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
