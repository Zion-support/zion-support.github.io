export interface ReferralCode {
export type ReferralStatus = 'pending' | 'completed' | 'expired';

export interface ReferralCode {;
export interface ReferralCode {
  id: string;
  user_id: string;
  code: string;
  created_at: string;
  updated_at: string;

}

<<<<<<< HEAD

  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {

export interface ReferralCode {;

  id: string;
  user_id: string;
  code: string;

<<<<<<< HEAD
=======
  created_at: string,
  updated_at: string;

}
export interface Referral {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string

}export interface Referral {

<<<<<<< HEAD
=======
export interface Referral {;

<<<<<<< HEAD
export interface Referral {

export interface Referral {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

export interface ReferralReward {;

  reward_issued: boolean
  reward_issued_at: string | null
}

export interface ReferralReward {

export interface ReferralReward {;

=======
export interface ReferralReward {
}


export interface ReferralReward {;

<<<<<<< HEAD
  reward_issued: boolean
  reward_issued_at: string | null
}
export interface ReferralReward {

export interface ReferralReward {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  user_id: string;
  referral_id: string;"
  reward_type: "credit" | "visibility";
  amount: number | null;

export interface ReferralStats {;

<<<<<<< HEAD
=======

<<<<<<< HEAD
  created_at: string
  expires_at: string | null
}
export interface ReferralStats {

export interface ReferralStats {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  totalReferrals: number;
  pendingReferrals: number;

<<<<<<< HEAD
=======
  totalRewards: number
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  created_at: string,

  expires_at: string | null;

}

  expires_at: string | null;
  totalRewards: number  expires_at: string | null;
}

<<<<<<< HEAD
  expires_at: string | null;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export interface ReferralStats {;
  totalReferrals: number,;
  pendingReferrals: number,;
  completedReferrals: number;
  totalRewards: number;
}
;

}

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
