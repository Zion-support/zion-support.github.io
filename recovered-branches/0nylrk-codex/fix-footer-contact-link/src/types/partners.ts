
<<<<<<< HEAD
<<<<<<< HEAD

=======
;

export interface PartnerProfile {
=======


export interface PartnerProfile {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export interface PartnerProfile {
=======

export interface PartnerProfile {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;

<<<<<<< HEAD
    linkedin?: string,
    [key: string]: string | undefined;
=======
    linkedin?: string
    [key: string]: string | undefined
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }

  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;

<<<<<<< HEAD
  updated_at: string,
  commission_rate?: number;

}
<<<<<<< HEAD

=======
export interface PartnerSettings {
=======
}


export interface PartnerSettings {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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


export interface PartnerReferralLink {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  updated_at: string

  commission_rate?: number
}
<<<<<<< HEAD
export interface PartnerSettings {
=======

export interface PartnerSettings {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  commission_rate: number;

  fraud_threshold: number

  is_payouts_enabled: boolean
}
<<<<<<< HEAD
export interface PartnerReferralLink {
=======

export interface PartnerReferralLink {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;

<<<<<<< HEAD
  conversions: number,
  created_at: string;

}
<<<<<<< HEAD

=======
export interface PartnerPayout {
=======
}


export interface PartnerPayout {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  conversions: number

  created_at: string
}
<<<<<<< HEAD
export interface PartnerPayout {
=======

export interface PartnerPayout {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  created_at: string

  completed_at?: string
}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
  created_at: string,
  completed_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
