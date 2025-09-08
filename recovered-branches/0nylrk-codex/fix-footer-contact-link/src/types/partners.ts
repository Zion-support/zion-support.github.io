<<<<<<< HEAD

export interface PartnerProfile {


=======

export interface PartnerProfile {

export interface PartnerProfile {;

export interface PartnerProfile {;

export interface PartnerProfile {
export interface PartnerProfile {export interface PartnerProfile {

export interface PartnerProfile {;
export interface PartnerProfile {


>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  // TODO: Implement
}
export interface PartnerProfile {;

  // TODO: Implement
}

export interface PartnerProfile {;
export interface PartnerProfile {
  // TODO: Implement
  id: string;,
pr-12325
  user_id: string;
  name: string;
  website?: string;
  social_media?: {}
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
  commission_rate?: number;
}


export interface PartnerSettings {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  commission_rate: number;
  fraud_threshold: number;
  is_payouts_enabled: boolean;
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
  // TODO: Implement
}
  id: string;,
  commission_rate: number;
}
export interface PartnerReferralLink {
  // TODO: Implement
}
export interface PartnerReferralLink {;
export interface PartnerReferralLink {

  id: string;
  // TODO: Implement
}
  id: string;,

  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
  conversions: number;
  created_at: string;
}

}

export interface PartnerPayout {;

<<<<<<< HEAD



=======

export interface PartnerPayout {};
export interface PartnerPayout {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  partner_id: string;
  amount: number;"
  status: "pending" | "processing" | "completed" | "failed";
  method: string;
  created_at: string;
  completed_at?: string;
}
