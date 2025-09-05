
<<<<<<< HEAD
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous',;
;
export interface FraudFlag {;
  id:string,;
  user_id:string,;
  user_email?:string,;
  content_type:'signup' | 'job' | 'message' | 'quote' | 'review',;
  content_id:string,;
  content_excerpt:string,;
  severity:FraudSeverity,;
  reason:string,;
  timestamp:string,;
  ip_address?:string,;
  status:'pending' | 'reviewed' | 'ignored' | 'actioned',;
  reviewed_by?:string,;
  reviewed_at?:string,;
  action_taken?:'none' | 'warning' | 'suspension' | 'ban',;
  gpt_classification?:string,;
  gpt_explanation?:string,;
  is_false_positive?:boolean;
}
;
export interface FraudStats {;
  total_flags:number,;
  pending_flags:number,;
  suspicious_count:number,;
  dangerous_count:number,;
  false_positives:number,;
  actioned_count:number;
}
=======
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous',

export interface FraudFlag {
  id: string,
  userid: string,
  useremail?: string,
  contenttype: 'signup' | 'job' | 'message' | 'quote' | 'review',
  contentid: string,
  contentexcerpt: string,
  severity: FraudSeverity,
  reason: string,
  timestamp: string,
  ipaddress?: string,
  status: 'pending' | 'reviewed' | 'ignored' | 'actioned',
  reviewedby?: string,
  reviewedat?: string,
  actiontaken?: 'none' | 'warning' | 'suspension' | 'ban',
  gptclassification?: string,
  gptexplanation?: string,
  isfalse_positive?: boolean
}

export interface FraudStats {
  totalflags: number,
  pendingflags: number,
  suspiciouscount: number,
  dangerouscount: number,
  falsepositives: number,
  actionedcount: number
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
