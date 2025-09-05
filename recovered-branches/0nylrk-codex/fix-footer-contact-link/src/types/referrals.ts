
export type ReferralStatus = 'pending' | 'completed' | 'expired',;
;
export interface ReferralCode {;
  id:string,;
  user_id:string,;
  code:string,;
  created_at:string,;
  updated_at:string;
}
;
export interface Referral {;
  id:string,;
  referrer_id:string,;
  referred_id:string | null,;
  referral_code:string,;
  status:ReferralStatus,;
  ip_address:string | null,;
  email:string | null,;
  referred_user_type:string | null,;
  referrer_user_type:string | null,;
  created_at:string,;
  completed_at:string | null,;
  reward_issued:boolean,;
  reward_issued_at:string | null;
}
;
export interface ReferralReward {;
  id:string,;
  user_id:string,;
  referral_id:string,;
  reward_type:'credit' | 'visibility',;
  amount:number | null,;
  created_at:string,;
  expires_at:string | null;
}
<<<<<<< HEAD
;
export interface ReferralStats {;
  totalReferrals:number,;
  pendingReferrals:number,;
  completedReferrals:number,;
  totalRewards:number;
}
=======

export interface ReferralStats {
  totalReferrals: number,
  pendingReferrals: number,
  completedReferrals: number,
  totalRewards: number
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
