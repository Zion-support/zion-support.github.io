
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;




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



  totalReferrals: number;
  pendingReferrals: number;

  completedReferrals: number

  totalRewards: number

  created_at: string,
  expires_at: string | null;
}


  expires_at: string | null;
}


;
export interface ReferralStats {;
  totalReferrals: number,;
  pendingReferrals: number,;
  completedReferrals: number;
  totalRewards: number;
}
;



