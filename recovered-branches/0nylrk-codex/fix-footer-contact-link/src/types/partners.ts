export interface PartnerProfile {
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}
export interface PartnerSettings {
  id: string;
  commission_rate: number;
}
export interface PartnerReferralLink {
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
}
export interface PartnerPayout {
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;
}