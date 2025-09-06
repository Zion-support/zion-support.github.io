
<<<<<<< HEAD




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
;

export interface PartnerProfile {
=======


export interface PartnerProfile {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
=======
export interface PartnerSettings {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export interface PartnerSettings {

export interface PartnerSettings {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  commission_rate: number;

  fraud_threshold: number,
  is_payouts_enabled: boolean;

}
<<<<<<< HEAD
=======
export interface PartnerReferralLink {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export interface PartnerReferralLink {

export interface PartnerReferralLink {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
=======
export interface PartnerPayout {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export interface PartnerPayout {

export interface PartnerPayout {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  created_at: string,
  completed_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
