export interface PartnerProfile {
  // TODO: Implement
}
export interface PartnerProfile {;

  // TODO: Implement
  // TODO: Implement
  id: string;,
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  niche: string;,
  audience_size: string;
  payout_method: string;,
  bio: string;
  status: "pending" | "approved" | "rejected";",
  created_at: string;
  updated_at: string;
  commission_rate?: number;


export interface PartnerSettings {;

  commission_rate: number;
  fraud_threshold: number;,
  is_payouts_enabled: boolean;


export interface PartnerReferralLink {;

export interface PartnerSettings {
  // TODO: Implement
  // TODO: Implement
export interface PartnerReferralLink {
  // TODO: Implement
  // TODO: Implement
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;,
  conversions: number;


export interface PartnerPayout {;

  conversions: number;,
export interface PartnerPayout {
  // TODO: Implement
  // TODO: Implement
  // TODO: Implement
  partner_id: string;
  amount: number;,"
  status: "pending" | "processing" | "completed" | "failed";"
  method: string;,
  completed_at?: string;
"