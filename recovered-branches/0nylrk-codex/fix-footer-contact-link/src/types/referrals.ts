
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export type ReferralStatus = 'pending' | 'completed' | 'expired';
export interface ReferralCode {
=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';

export interface ReferralCode {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
<<<<<<< HEAD
export interface Referral {
=======

export interface Referral {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {
=======

export interface ReferralCode {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  user_id: string;
  code: string;

  created_at: string,
  updated_at: string;

}
export interface Referral {
=======
}


export interface Referral {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
  reward_issued: boolean
  reward_issued_at: string | null
}
<<<<<<< HEAD
export interface ReferralReward {
=======

export interface ReferralReward {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  reward_issued: boolean,
  reward_issued_at: string | null;

}
export interface ReferralReward {
=======
}


export interface ReferralReward {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;
<<<<<<< HEAD
  created_at: string
  expires_at: string | null
}
<<<<<<< HEAD
export interface ReferralStats {
=======

export interface ReferralStats {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



export interface ReferralStats {;


>>>>>>> main
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
<<<<<<< HEAD
}
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
  expires_at: string | null;
}
=======
=======
  created_at: string,
  expires_at: string | null;
}

>>>>>>> main
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
