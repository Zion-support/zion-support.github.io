<<<<<<< HEAD


export type ReferralStatus = 'pending' | 'completed' | 'expired';
=======
export type ReferralStatus = 'pending' | 'completed' | 'expired';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface ReferralCode {
  id: string;
  user_id: string;
  code: string;
<<<<<<< HEAD
  created_at: string
  updated_at: string
=======
  created_at: string,
  updated_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
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
  reward_issued: boolean
  reward_issued_at: string | null
=======
  reward_issued: boolean,
  reward_issued_at: string | null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ReferralReward {
  id: string;
  user_id: string;
  referral_id: string;
  reward_type: 'credit' | 'visibility';
  amount: number | null;
<<<<<<< HEAD
  created_at: string
  expires_at: string | null
}
export interface ReferralStats {
  totalReferrals: number;
  pendingReferrals: number;
  completedReferrals: number

  totalRewards: number
=======
  created_at: string,
  expires_at: string | null;
}
export interface ReferralStats {
  total_referrals: number;
  pending_referrals: number;
  completed_referrals: number,
  total_rewards: number;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}