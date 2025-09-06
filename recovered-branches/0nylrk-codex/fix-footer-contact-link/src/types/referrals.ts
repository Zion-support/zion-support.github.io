<<<<<<< HEAD
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
=======
export type ReferralStatus = "pending" | "completed" | "expired";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

export interface ReferralCode {

export interface ReferralCode {;

  id: string;
  user_id: string;
  code: string;
<<<<<<< HEAD
}
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
=======
  created_at: string;
  updated_at: string;
}


export interface Referral {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface Referral {

export interface Referral {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface Referral {

export interface Referral {;
export interface Referral {
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
  reward_issued: boolean;
  reward_issued_at: string | null;
}


export interface ReferralReward {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  reward_issued: boolean
  reward_issued_at: string | null
}
export interface ReferralReward {

export interface ReferralReward {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface ReferralReward {
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: "credit" | "visibility";
  amount: number | null;
  created_at: string;
  expires_at: string | null;
}



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
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number;
  totalRewards: number;
}

<<<<<<< HEAD
  totalRewards: number
=======
<<<<<<< HEAD
=======
  expires_at: string | null;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
}
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
