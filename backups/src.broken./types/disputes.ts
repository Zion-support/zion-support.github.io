export interface Dispute {
  id: string;
  transactionId: string;
  complainantId: string;
  respondentId: string;
  reason: string;
  description: string;
  evidence: string[];
  status: DisputeStatus;
  resolution?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export type DisputeStatus = 
  | 'pending'
  | 'under_review'
  | 'resolved'
  | 'escalated'
  | 'cancelled';

export interface DisputeResolution {
  id: string;
  disputeId: string;
  resolution: string;
  resolutionType: 'refund' | 'partial_refund' | 'no_action' | 'service_redelivery';
  amount?: number;
  resolvedBy: string;
  resolvedAt: string;
}