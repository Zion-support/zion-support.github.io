export interface PartnerProfile {;
export interface PartnerProfile {export interface PartnerProfile {

export interface PartnerProfile {;
export interface PartnerProfile {
  id: string;
  // TODO: Implement
}
export interface PartnerProfile {;

  // TODO: Implement
}

export interface PartnerProfile {;
export interface PartnerProfile {
  // TODO: Implement
  id: string;,
pr-12325
  user_id: string;
  name: string;
  website?: string;
  social_media?: {}
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    [key: string]: string | undefined
};
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  id: string;
  commission_rate: number;
  fraud_threshold: number;
  is_payouts_enabled: boolean;
}

export interface PartnerReferralLink {;

export interface PartnerSettings {

export interface PartnerSettings {;
export interface PartnerSettings {
  // TODO: Implement
}
  id: string;,
  commission_rate: number;
}
export interface PartnerReferralLink {
  // TODO: Implement
}
export interface PartnerReferralLink {;
  id: string;
  // TODO: Implement
}
  id: string;,

  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {  conversions: number

  created_at: string
}
export interface PartnerPayout {

export interface PartnerPayout {};
export interface PartnerPayout {;
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {
  id: string;
  partner_id: string;
  amount: number;"
  status: "pending" | "processing" | "completed" | "failed";
  method: string;
  created_at: string;
  completed_at?: string;
}
