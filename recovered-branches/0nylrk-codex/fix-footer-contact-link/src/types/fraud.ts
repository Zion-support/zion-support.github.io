<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type FraudSeverity = "safe" | "suspicious" | "dangerous";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export type FraudSeverity = "safe" | "suspicious" | "dangerous";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface FraudFlag {
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface FraudFlag {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface FraudFlag {export interface FraudFlag {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface FraudFlag {export interface FraudFlag {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface FraudFlag {};
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {;


export interface FraudFlag {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export interface FraudFlag {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  user_id: string;
  user_email?: string;"
  content_type: "signup" | "job" | "message" | "quote" | "review";
=======

}
  id: string;,
  user_id: string;
  user_email?: string;
  content_type: "signup" | "job" | "message" | "quote" | "review";",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  content_id: string;
  content_excerpt: string;,
  severity: FraudSeverity;
  reason: string;,
  timestamp: string;
  ip_address?: string;"
<<<<<<< HEAD
  status: "pending" | "reviewed" | "ignored" | "actioned";
  reviewed_by?: string;
  reviewed_at?: string;"
  action_taken?: "none" | "warning" | "suspension" | "ban";
=======
  status: "pending" | "reviewed" | "ignored" | "actioned";"
  reviewed_by?: string;
  reviewed_at?: string;"
  action_taken?: "none" | "warning" | "suspension" | "ban";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  gpt_classification?: string;
<<<<<<< HEAD
<<<<<<< HEAD

  gpt_explanation?: string,
  is_false_positive?: boolean;

}
export interface FraudStats {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  gpt_explanation?: string;
  is_false_positive?: boolean;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


export interface FraudStats {;

<<<<<<< HEAD
<<<<<<< HEAD
  gpt_explanation?: string
  is_false_positive?: boolean
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface FraudStats {

export interface FraudStats {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface FraudStats {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  gpt_explanation?: string;
  is_false_positive?: boolean;
}
export interface FraudStats {};
export interface FraudStats {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export interface FraudStats {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  total_flags: number;
=======
export interface FraudStats {
  // TODO: Implement
  // TODO: Implement
  total_flags: number;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  pending_flags: number;
  suspicious_count: number;,
  dangerous_count: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  actioned_count: number
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

  false_positives: number,
  actioned_count: number;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  false_positives: number

  actioned_count: number
}
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous',;
export interface FraudFlag {;
  id: string,;
  user_id: string,;
  user_email?: string,;
  content_type: 'signup' | 'job' | 'message' | 'quote' | 'review',;
  content_id: string,;
  content_excerpt: string,;
  severity: FraudSeverity,;
  reason: string,;
  timestamp: string,;
  ip_address?: string,;
  status: 'pending' | 'reviewed' | 'ignored' | 'actioned',;
  reviewed_by?: string,;
  reviewed_at?: string,;
  action_taken?: 'none' | 'warning' | 'suspension' | 'ban',;
  gpt_classification?: string,;
  gpt_explanation?: string,;
  is_false_positive?: boolean;
}
;
export interface FraudStats {;
  total_flags: number,;
  pending_flags: number,;
  suspicious_count: number,;
  dangerous_count: number,;
  false_positives: number;
  actioned_count: number;
}
<<<<<<< HEAD
;
  false_positives: number,
  actioned_count: number;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  false_positives: number;
  actioned_count: number;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  false_positives: number;
  actioned_count: number;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  false_positives: number;,
  actioned_count: number;
"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
