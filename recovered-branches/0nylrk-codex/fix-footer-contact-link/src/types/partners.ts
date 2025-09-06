
<<<<<<< HEAD
=======
;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export interface PartnerProfile {


export interface PartnerProfile {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;

    linkedin?: string,
    [key: string]: string | undefined;
  }

  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;

  updated_at: string,
  commission_rate?: number;

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface PartnerSettings {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface PartnerSettings {

export interface PartnerSettings {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  commission_rate: number;

  fraud_threshold: number,
  is_payouts_enabled: boolean;

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface PartnerReferralLink {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface PartnerReferralLink {

export interface PartnerReferralLink {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;

  conversions: number,
  created_at: string;

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface PartnerPayout {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface PartnerPayout {

export interface PartnerPayout {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
  created_at: string,
  completed_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
