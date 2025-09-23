export type TrustMetricInputs = {
  completionRate: number, // 0-1
  onboardingCompletionRate?: number, // 0-1
  feedbackAverage: number, // 0-5
  feedbackQualityScore?: number, // 0-1 derived from review text richness
  averageResponseHours: number, // average reply time in hours
  accountAgeDays: number,
  sentimentScore: number, // -1 to 1 from AI sentiment
  disputeFlags: number, // count of disputes
  verifiedReviewRatio?: number, // 0-1
  endorsements?: number, // community endorsements count
  flags?: number, // community flags count
},

export type TrustWeights = $2;
  onboardingCompletionRate: number,
  feedbackAverage: number,
  feedbackQualityScore: number,
  responseTime: number, // inverse weight
  accountLongevity: number,
  sentimentScore: number,
  disputeFlags: number, // negative weight
  verifiedReviewRatio: number,
  endorsements: number,
  flags: number, // negative weight
},

export type TrustScoreBreakdown = {
  total: number, // 0-100
  components: {
    key: keyof TrustWeights,
    raw: number,
    weighted: number}[],
  normalizedInputs: Required<TrustMetricInputs>,
  riskLevel: 'High Trust' | 'Moderate Trust' | 'Risk Alert',
  reasonSummary?: string,
  communityVerified: boolean,
  updatedAt: string},

export type TrustPeerReview = $2;
  reviewerId: string,
  type: 'endorse' | 'flag',
  note?: string,
  createdAt: string},

export type TrustAppeal = $2;
  message: string,
  contactEmail?: string,
  createdAt: string},