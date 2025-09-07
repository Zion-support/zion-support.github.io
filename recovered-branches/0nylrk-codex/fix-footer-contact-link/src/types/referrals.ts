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
  // TODO: Implement
  referrer_id: string;
  referred_id: string | null;,
  referral_code: string;
  status: ReferralStatus;,
  ip_address: string | null;
  email: string | null;,
  referred_user_type: string | null;
  referrer_user_type: string | null;,
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


  totalReferrals: number;,
  pendingReferrals: number;
  completedReferrals: number;,
  totalRewards: number;


;
  totalReferrals: number,;
  pendingReferrals: number,;



"