
<<<<<<< HEAD
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface FraudFlag {
=======

export interface FraudFlag {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

  gpt_explanation?: string,
  is_false_positive?: boolean;

}
=======
  gpt_explanation?: string
  is_false_positive?: boolean
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface FraudStats {
=======
}


export interface FraudStats {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  total_flags: number;
  pending_flags: number;
  suspicious_count: number;
  dangerous_count: number;

  false_positives: number,
  actioned_count: number;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
