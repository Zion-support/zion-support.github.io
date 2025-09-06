
<<<<<<< HEAD
<<<<<<< HEAD

export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
export interface FraudFlag {
=======
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  user_id: string;
  user_email?: string;
  content_type: 'signup' | 'job' | 'message' | 'quote' | 'review';
  content_id: string;
  content_excerpt: string;
  severity: FraudSeverity;
  reason: string;
  timestamp: string;
  ip_address?: string;
  status: 'pending' | 'reviewed' | 'ignored' | 'actioned';
  reviewed_by?: string;
  reviewed_at?: string;
  action_taken?: 'none' | 'warning' | 'suspension' | 'ban';
  gpt_classification?: string;
  gpt_explanation?: string
  is_false_positive?: boolean
}
<<<<<<< HEAD
export interface FraudStats {
=======

export interface FraudStats {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  total_flags: number;
  pending_flags: number;
  suspicious_count: number;
  dangerous_count: number;
  false_positives: number

  actioned_count: number
}
=======
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
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
