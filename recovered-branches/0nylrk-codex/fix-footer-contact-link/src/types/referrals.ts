
<<<<<<< HEAD
=======

  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {

export interface ReferralCode {;

  id: string;
  user_id: string;
  code: string;

  created_at: string,
  updated_at: string;

}
export interface Referral {
}


export interface Referral {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface Referral {

export interface Referral {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface ReferralReward {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  reward_issued: boolean
  reward_issued_at: string | null
}
export interface ReferralReward {

export interface ReferralReward {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;



export interface ReferralStats {;


<<<<<<< HEAD
=======
  created_at: string
  expires_at: string | null
}
export interface ReferralStats {

export interface ReferralStats {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  created_at: string,
  expires_at: string | null;
}

<<<<<<< HEAD
=======
  expires_at: string | null;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export interface ReferralStats {;
  totalReferrals: number,;
  pendingReferrals: number,;
  completedReferrals: number;
  totalRewards: number;
}
;


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
