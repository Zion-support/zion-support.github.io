export interface PartnerProfile {

  // TODO: Implement
}
export interface PartnerProfile {;

export interface PartnerProfile {
  // TODO: Implement
}

export interface PartnerProfile {;
export interface PartnerProfile {
  // TODO: Implement
}
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
}


export interface PartnerSettings {;

  id: string;,

  commission_rate: number;
  fraud_threshold: number;,
  is_payouts_enabled: boolean;
}
export interface PartnerReferralLink {;


  updated_at: string;
  commission_rate?: number;
}
export interface PartnerSettings {
  // TODO: Implement
}
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
export interface PartnerReferralLink {
  // TODO: Implement
}
  id: string;,

  name: string;
  url: string;
  campaign?: string;
  source?: string;

  clicks: number;,
  conversions: number;
  created_at: string;
}


export interface PartnerPayout {;

  conversions: number;,
  created_at: string;
}
export interface PartnerPayout {
  // TODO: Implement
}
export interface PartnerPayout {;
export interface PartnerPayout {
  // TODO: Implement
}

export interface PartnerPayout {;
export interface PartnerPayout {
  // TODO: Implement
}
  id: string;,
  partner_id: string;

  amount: number;,"
  status: "pending" | "processing" | "completed" | "failed";"
  method: string;,
  created_at: string;
  completed_at?: string;
}
"

