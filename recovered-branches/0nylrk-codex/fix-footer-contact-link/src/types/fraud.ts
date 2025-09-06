<<<<<<< HEAD
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
=======
export type FraudSeverity = "safe" | "suspicious" | "dangerous";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

export interface FraudFlag {
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {;
<<<<<<< HEAD
export interface FraudFlag {
=======
<<<<<<< HEAD
export interface FraudFlag {
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface FraudFlag {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  user_id: string;
  user_email?: string;
  content_type: "signup" | "job" | "message" | "quote" | "review";
  content_id: string;
  content_excerpt: string;
  severity: FraudSeverity;
  reason: string;
  timestamp: string;
  ip_address?: string;
  status: "pending" | "reviewed" | "ignored" | "actioned";
  reviewed_by?: string;
  reviewed_at?: string;
  action_taken?: "none" | "warning" | "suspension" | "ban";
  gpt_classification?: string;
<<<<<<< HEAD
=======
  gpt_explanation?: string;
  is_false_positive?: boolean;
}


export interface FraudStats {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  gpt_explanation?: string
  is_false_positive?: boolean
}
export interface FraudStats {

export interface FraudStats {;
}
export interface FraudStats {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  total_flags: number;
  pending_flags: number;
  suspicious_count: number;
  dangerous_count: number;
<<<<<<< HEAD
=======
  false_positives: number;
  actioned_count: number;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
