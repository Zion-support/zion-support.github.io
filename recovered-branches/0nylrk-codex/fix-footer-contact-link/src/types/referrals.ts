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

export type ReferralStatus = 'pending' | 'completed' | 'expired';
;

export interface ReferralCode {

export interface ReferralCode {;

  id: string;
  user_id: string;
  code: string;


}
  id: string;
  user_id: string;
  code: string;
  created_at: string
  updated_at: string

}export interface Referral {


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


export interface ReferralReward {;

  reward_issued: boolean

  id: string;
  user_id: string;
  referral_id: string;"
  reward_type: "credit" | "visibility";
  amount: number | null;

export interface ReferralStats {;


  totalReferrals: number;
  pendingReferrals: number;

  created_at: string,

  expires_at: string | null;

}

  expires_at: string | null;
  totalRewards: number  expires_at: string | null;
}

;
export interface ReferralStats {;
  totalReferrals: number,;
  pendingReferrals: number,;
  completedReferrals: number;
  totalRewards: number;
}
;

}


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
