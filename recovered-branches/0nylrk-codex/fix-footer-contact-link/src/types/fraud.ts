<<<<<<< HEAD
export type FraudSeverity = "safe" | "suspicious" | "dangerous";

=======
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface FraudFlag {
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {;
<<<<<<< HEAD

export interface FraudFlag {
=======
export interface FraudFlag {export interface FraudFlag {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  gpt_explanation?: string;
  is_false_positive?: boolean;
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface FraudStats {;

  gpt_explanation?: string
  is_false_positive?: boolean
}
export interface FraudStats {

export interface FraudStats {;
<<<<<<< HEAD
}
export interface FraudStats {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  total_flags: number;
  pending_flags: number;
  suspicious_count: number;
  dangerous_count: number;
<<<<<<< HEAD
  false_positives: number;
  actioned_count: number;
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
