export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review',

export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS',

export interface FraudEvent {
  id: string,
  userId: string | null,
  source: MonitoredSource,
  content: string | null,

export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED',

export interface StoredFraudRecord extends FraudEvent {
  heuristic: HeuristicEvaluation,
  gpt?: GptClassification,
  autoHidden: boolean,
  status: FraudReviewStatus
