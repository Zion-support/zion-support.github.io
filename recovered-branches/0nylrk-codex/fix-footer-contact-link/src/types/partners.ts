
;

export interface PartnerProfile {


export interface PartnerProfile {;

<<<<<<< HEAD
export interface PartnerProfile {

export interface PartnerProfile {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;

<<<<<<< HEAD
    linkedin?: string
    [key: string]: string | undefined
=======
    linkedin?: string,
    [key: string]: string | undefined;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }

  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;

<<<<<<< HEAD
export interface PartnerSettings {
=======
  updated_at: string,
  commission_rate?: number;

}
export interface PartnerSettings {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


export interface PartnerSettings {;

  id: string;
  commission_rate: number;

  fraud_threshold: number,
  is_payouts_enabled: boolean;

}
export interface PartnerReferralLink {
}


export interface PartnerReferralLink {;

<<<<<<< HEAD
  updated_at: string

  commission_rate?: number
}
export interface PartnerSettings {

export interface PartnerSettings {;
  id: string;
  commission_rate: number;

  fraud_threshold: number

  is_payouts_enabled: boolean
}
export interface PartnerReferralLink {

export interface PartnerReferralLink {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;

<<<<<<< HEAD
export interface PartnerPayout {
=======
  conversions: number,
  created_at: string;

}
export interface PartnerPayout {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


export interface PartnerPayout {;

<<<<<<< HEAD
  conversions: number

  created_at: string
}
export interface PartnerPayout {

export interface PartnerPayout {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;

<<<<<<< HEAD
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

=======
  created_at: string,
  completed_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
