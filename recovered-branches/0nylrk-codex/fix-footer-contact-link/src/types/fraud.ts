<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface FraudFlag {
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface FraudFlag {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD

  gpt_explanation?: string,
  is_false_positive?: boolean;

}
<<<<<<< HEAD
=======
export interface FraudStats {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  gpt_explanation?: string
  is_false_positive?: boolean
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface FraudStats {

export interface FraudStats {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
export interface FraudStats {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  total_flags: number;
  pending_flags: number;
  suspicious_count: number;
  dangerous_count: number;
<<<<<<< HEAD

<<<<<<< HEAD
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
;
=======
  false_positives: number,
  actioned_count: number;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
