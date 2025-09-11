
<<<<<<< HEAD
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
<<<<<<< HEAD
}


export interface Referral {;

<<<<<<< HEAD
export interface Referral {

export interface Referral {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD

  reward_issued: boolean,
  reward_issued_at: string | null;

}
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
=======
export interface ReferralReward {
=======
  reward_issued: boolean
  reward_issued_at: string | null
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;



export interface ReferralStats {;


<<<<<<< HEAD
<<<<<<< HEAD
  created_at: string
  expires_at: string | null
}
export interface ReferralStats {

export interface ReferralStats {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  created_at: string,
  expires_at: string | null;
}

<<<<<<< HEAD
  expires_at: string | null;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  expires_at: string | null;
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
