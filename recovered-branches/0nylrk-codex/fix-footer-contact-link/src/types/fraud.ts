export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
export interface FraudFlag {


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
