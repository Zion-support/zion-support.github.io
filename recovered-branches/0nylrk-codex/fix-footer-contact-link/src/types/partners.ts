<<<<<<< HEAD

=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface PartnerProfile {
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
  }

=======
    linkedin?: string,
    [key: string]: string | undefined;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
<<<<<<< HEAD

  updated_at: string

  commission_rate?: number
=======
  updated_at: string,
  commission_rate?: number;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface PartnerSettings {
  id: string;
  commission_rate: number;
<<<<<<< HEAD

  fraud_threshold: number

  is_payouts_enabled: boolean
=======
  fraud_threshold: number,
  is_payouts_enabled: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface PartnerReferralLink {
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
<<<<<<< HEAD

  conversions: number

  created_at: string
=======
  conversions: number,
  created_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface PartnerPayout {
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;
<<<<<<< HEAD

  created_at: string

  completed_at?: string
=======
  created_at: string,
  completed_at?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}