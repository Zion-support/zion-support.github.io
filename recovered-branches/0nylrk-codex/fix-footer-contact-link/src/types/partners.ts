



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

;

export interface PartnerProfile {


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

export interface PartnerSettings {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  id: string;
  commission_rate: number;

  fraud_threshold: number,
  is_payouts_enabled: boolean;

}

export interface PartnerReferralLink {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  id: string;
  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;

  conversions: number,
  created_at: string;

}

export interface PartnerPayout {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  id: string;
  partner_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: string;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  created_at: string,
  completed_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

