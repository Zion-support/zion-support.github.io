<<<<<<< HEAD
export type ReferralStatus = "pending" | "completed" | "expired";

=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface ReferralCode {

export interface ReferralCode {;

  id: string;
  user_id: string;
  code: string;
<<<<<<< HEAD
  created_at: string;
  updated_at: string;
}


export interface Referral {;

export interface Referral {
=======
}
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}export interface Referral {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export interface Referral {;
export interface Referral {

export interface Referral {;
export interface Referral {
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
  reward_issued: boolean;
  reward_issued_at: string | null;
}


export interface ReferralReward {;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  reward_issued: boolean
  reward_issued_at: string | null
}
export interface ReferralReward {

export interface ReferralReward {;
<<<<<<< HEAD
}
export interface ReferralReward {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: "credit" | "visibility";
  amount: number | null;
  created_at: string;
  expires_at: string | null;
}

<<<<<<< HEAD


export interface ReferralStats {;


=======
export interface ReferralStats {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number;
  totalRewards: number;
}

<<<<<<< HEAD
  expires_at: string | null;
=======
  totalRewards: number  expires_at: string | null;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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



}
=======
}}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
