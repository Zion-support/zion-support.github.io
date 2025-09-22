>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface PartnerProfile {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface PartnerProfile {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface PartnerProfile {;

export interface PartnerProfile {
export interface PartnerProfile {export interface PartnerProfile {

export interface PartnerProfile {;
export interface PartnerProfile {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface PartnerProfile {};
export interface PartnerProfile {;

export interface PartnerProfile {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    [key: string]: string | undefined

  niche: string;
  audience_size: string;
  payout_method: string;
  bio: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
<<<<<<< HEAD
<<<<<<< HEAD
  updated_at: string;
  commission_rate?: number;
<<<<<<< HEAD

}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  updated_at: string;
  commission_rate?: number;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export interface PartnerReferralLink {;

export interface PartnerSettings {

export interface PartnerSettings {;
export interface PartnerSettings {
  id: string;
  commission_rate: number;

}

export interface PartnerSettings {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  id: string;,

  commission_rate: number;
  fraud_threshold: number;,
  is_payouts_enabled: boolean;
<<<<<<< HEAD
}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface PartnerReferralLink {

export interface PartnerReferralLink {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

export interface PartnerReferralLink {;

export interface PartnerSettings {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export interface PartnerSettings {};
export interface PartnerSettings {;
export interface PartnerSettings {};
  id: string;
  commission_rate: number;
}
export interface PartnerReferralLink {};
export interface PartnerReferralLink {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface PartnerReferralLink {;

updated_at: string
export interface PartnerReferralLink {;

  updated_at: string;
  commission_rate?: number;
}
export interface PartnerSettings {
  // TODO: Implement
}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  // TODO: Implement
}
  id: string;,

  name: string;
  url: string;
  campaign?: string;
  source?: string;
  clicks: number;
<<<<<<< HEAD
<<<<<<< HEAD
  conversions: number;
  created_at: string;
<<<<<<< HEAD

export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {  conversions: number

  created_at: string
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

=======
export interface PartnerPayout {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface PartnerPayout {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface PartnerPayout {;
export interface PartnerPayout {  conversions: number

export interface PartnerPayout {};
export interface PartnerPayout {;
export interface PartnerPayout {

export interface PartnerPayout {;
export interface PartnerPayout {
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface PartnerPayout {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  partner_id: string;
  amount: number;"
  status: "pending" | "processing" | "completed" | "failed";
  method: string;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  created_at: string

  completed_at?: string
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  created_at: string;
  completed_at?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
}
    [key: string]: string | undefined;
  };
  niche: string;,
  audience_size: string;
  payout_method: string;,
  bio: string;
  status: "pending" | "approved" | "rejected";",
  created_at: string;
  updated_at: string;
  commission_rate?: number;

export interface PartnerSettings {;

  commission_rate: number;
  fraud_threshold: number;,
  is_payouts_enabled: boolean;

export interface PartnerReferralLink {;

export interface PartnerSettings {
  // TODO: Implement
  // TODO: Implement
export interface PartnerReferralLink {
  // TODO: Implement
  // TODO: Implement
  url: string;
  campaign?: string;
  source?: string;

  clicks: number;,
  conversions: number;

export interface PartnerPayout {;

  conversions: number;,
export interface PartnerPayout {
  // TODO: Implement
  // TODO: Implement
}

export interface PartnerPayout {;
export interface PartnerPayout {
  // TODO: Implement
  partner_id: string;

  amount: number;,"
  status: "pending" | "processing" | "completed" | "failed";"
  method: string;,
  completed_at?: string;
"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
