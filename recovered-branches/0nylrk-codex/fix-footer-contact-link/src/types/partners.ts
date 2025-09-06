
<<<<<<< HEAD
export interface PartnerProfile {
=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface PartnerProfile {
=======


export interface PartnerProfile {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  user_id: string;
  name: string;
  website?: string;
  social_media?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;

    linkedin?: string
    [key: string]: string | undefined
  }

  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;

  updated_at: string

  commission_rate?: number
}
<<<<<<< HEAD
export interface PartnerSettings {
<<<<<<< HEAD
=======
=======
}


export interface PartnerSettings {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  commission_rate: number;

  fraud_threshold: number

  is_payouts_enabled: boolean
}
<<<<<<< HEAD
export interface PartnerReferralLink {
<<<<<<< HEAD
=======
=======
}


export interface PartnerReferralLink {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;

  conversions: number

  created_at: string
}
<<<<<<< HEAD
export interface PartnerPayout {
<<<<<<< HEAD
=======
=======
}


export interface PartnerPayout {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;

<<<<<<< HEAD
  created_at: string

  completed_at?: string
}
=======
  created_at: string,
  completed_at?: string;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
