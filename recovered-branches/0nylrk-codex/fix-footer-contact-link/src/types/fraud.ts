export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
export interface FraudFlag {
<<<<<<< HEAD


export interface FraudFlag {;
export interface FraudFlag {export interface FraudFlag {
  id: string;
  user_id: string;
  user_email?: string;"
  content_type: "signup" | "job" | "message" | "quote" | "review";

  content_id: string;
  content_excerpt: string;,
  severity: FraudSeverity;
  reason: string;,
  timestamp: string;
  ip_address?: string;"

  gpt_classification?: string;
  gpt_explanation?: string;
  is_false_positive?: boolean;
}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface FraudStats {;

  gpt_explanation?: string
  is_false_positive?: boolean
}
export interface FraudStats {

export interface FraudStats {;
  total_flags: number;

  pending_flags: number;

  suspicious_count: number;
  dangerous_count: number;
