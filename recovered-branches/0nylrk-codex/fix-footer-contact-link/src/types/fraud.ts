
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