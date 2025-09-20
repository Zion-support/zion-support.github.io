
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
    linkedin?: string;
    [key: string]: string | undefined
  },
=======
    linkedin?: string
    [key: string]: string | undefined
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
<<<<<<< HEAD
  updated_at: string;
=======
  updated_at: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  commission_rate?: number
}
export interface PartnerSettings {
  id: string;
  commission_rate: number;
<<<<<<< HEAD
  fraud_threshold: number;
=======
  fraud_threshold: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  is_payouts_enabled: boolean
}
export interface PartnerReferralLink {
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
<<<<<<< HEAD
  conversions: number;
=======
  conversions: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  created_at: string
}
export interface PartnerPayout {
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;
<<<<<<< HEAD
  created_at: string;
=======
  created_at: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  completed_at?: string
}