export interface PartnerProfile {


export interface PartnerProfile {;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface PartnerProfile {

export interface PartnerProfile {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface PartnerProfile {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
<<<<<<< HEAD

<<<<<<< HEAD
    linkedin?: string,
    [key: string]: string | undefined;
=======
    linkedin?: string
    [key: string]: string | undefined
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
<<<<<<< HEAD

<<<<<<< HEAD
  updated_at: string,
  commission_rate?: number;

}
export interface PartnerSettings {
=======
=======
export interface PartnerSettings {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface PartnerSettings {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  commission_rate: number;

  fraud_threshold: number,
  is_payouts_enabled: boolean;

}
export interface PartnerReferralLink {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface PartnerReferralLink {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  updated_at: string

  commission_rate?: number
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface PartnerSettings {

export interface PartnerSettings {;
export interface PartnerSettings {
  id: string;
  commission_rate: number;
}
export interface PartnerReferralLink {

export interface PartnerReferralLink {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface PartnerReferralLink {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
<<<<<<< HEAD

<<<<<<< HEAD
  conversions: number,
  created_at: string;

}
export interface PartnerPayout {
=======
=======
export interface PartnerPayout {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface PartnerPayout {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  conversions: number

  created_at: string
}
export interface PartnerPayout {

export interface PartnerPayout {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;
<<<<<<< HEAD

<<<<<<< HEAD
  created_at: string,
  completed_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_at: string

  completed_at?: string
}
;
export interface PartnerProfile {;
  id: string,;
  user_id: string,;
  name: string,;
  website?: string,;
  social_media?: {;
    twitter?: string,;
    instagram?: string,;
    youtube?: string,;
    linkedin?: string,;
    [key: string]: string | undefined;
  },;
  niche: string,;
  audience_size: string,;
  payout_method: string,;
  bio: string,;
  status: 'pending' | 'approved' | 'rejected',;
  created_at: string,;
  updated_at: string,;
  commission_rate?: number;
}
;
export interface PartnerSettings {;
  id: string,;
  commission_rate: number,;
  fraud_threshold: number,;
  is_payouts_enabled: boolean;
}
;
export interface PartnerReferralLink {;
  id: string,;
  name: string,;
  url: string,;
  campaign?: string,;
  source?: string,;
  clicks: number,;
  conversions: number,;
  created_at: string;
}
;
export interface PartnerPayout {;
  id: string,;
  partner_id: string,;
  amount: number,;
  status: 'pending' | 'processing' | 'completed' | 'failed',;
  method: string,;
  created_at: string;
  completed_at?: string;
}
;
  created_at: string,
  completed_at?: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
