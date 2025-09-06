export interface PartnerProfile {

<<<<<<< HEAD

export interface PartnerProfile {;

export interface PartnerProfile {
=======
export interface PartnerProfile {;
export interface PartnerProfile {export interface PartnerProfile {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export interface PartnerProfile {;
export interface PartnerProfile {
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
<<<<<<< HEAD
    [key: string]: string | undefined;
  };
=======
    [key: string]: string | undefined
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
<<<<<<< HEAD
  updated_at: string;
  commission_rate?: number;
}


export interface PartnerSettings {;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  commission_rate: number;
  fraud_threshold: number;
  is_payouts_enabled: boolean;
}

<<<<<<< HEAD

export interface PartnerReferralLink {;

  updated_at: string

  commission_rate?: number
}
=======
export interface PartnerReferralLink {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface PartnerSettings {

export interface PartnerSettings {;
export interface PartnerSettings {
  id: string;
  commission_rate: number;
}
export interface PartnerReferralLink {

export interface PartnerReferralLink {;
<<<<<<< HEAD
export interface PartnerReferralLink {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
<<<<<<< HEAD
  conversions: number;
  created_at: string;
}


export interface PartnerPayout {;

  conversions: number
=======
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {  conversions: number
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  created_at: string
}
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {
  id: string;
  partner_id: string;
  amount: number;
  status: "pending" | "processing" | "completed" | "failed";
  method: string;
  created_at: string;
  completed_at?: string;
}
