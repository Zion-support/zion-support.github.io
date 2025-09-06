
<<<<<<< HEAD
<<<<<<< HEAD

export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
export interface Dispute {
=======
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;

export interface Dispute {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  project_id: string;
  milestone_id?: string;
  raised_by: string;
  reason_code: string;
  description: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
  resolution_summary?: string;
  status: DisputeStatus;
  resolution_type: ResolutionType;
  project?: {
    title?: string
    scope_summary?: string
  }
  client_profile?: {
    display_name: string
    avatar_url?: string
  }
  talent_profile?: {
    display_name: string
    avatar_url?: string
  }
}
<<<<<<< HEAD
export interface DisputeMessage {
=======

export interface DisputeMessage {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  dispute_id: string;
  user_id: string;
  message: string;
  created_at: string;
  is_admin_note: boolean;
  user_profile?: {
    display_name: string
    avatar_url?: string
  }
}
<<<<<<< HEAD
export interface DisputeAttachment {
=======

export interface DisputeAttachment {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  dispute_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
  created_at: string
  url?: string
}
export type DisputeReason =
  | 'milestone_quality'
  | 'delayed_delivery'
  | 'scope_change'
  | 'communication'
  | 'payment'
  | 'contract_terms';
  | 'other';
<<<<<<< HEAD
export const disputeReasonLabels: Record<DisputeReason, string> = {
=======

export const disputeReasonLabels: Record<DisputeReason, string> = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  milestone_quality: 'Quality of Deliverable';
  delayed_delivery: 'Delayed Delivery';
  scope_change: 'Scope Change Disagreement';
  communication: 'Communication Issues';
  payment: 'Payment Dispute';
<<<<<<< HEAD
  contract_terms: 'Contract Terms Disagreement'
other: 'Other Issue'}

=======
  contract_terms: 'Contract Terms Disagreement',
other: 'Other Issue'};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed',;
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null,;
export interface Dispute {;
  id: string,;
  project_id: string,;
  milestone_id?: string,;
  raised_by: string,;
  reason_code: string,;
  description: string,;
  created_at: string,;
  updated_at: string,;
  resolved_at?: string,;
  resolution_summary?: string,;
  status: DisputeStatus,;
  resolution_type: ResolutionType,;
  project?: {;
    title?: string,;
    scope_summary?: string;
  },;
  client_profile?: {;
    display_name: string,;
    avatar_url?: string;
  },;
  talent_profile?: {;
    display_name: string,;
    avatar_url?: string;
  }
}
;
export interface DisputeMessage {;
  id: string,;
  dispute_id: string,;
  user_id: string,;
  message: string,;
  created_at: string,;
  is_admin_note: boolean,;
  user_profile?: {;
    display_name: string,;
    avatar_url?: string;
  }
}
;
export interface DisputeAttachment {;
  id: string,;
  dispute_id: string,;
  uploaded_by: string,;
  file_name: string,;
  file_path: string,;
  file_type: string,;
  file_size: number,;
  created_at: string,;
  url?: string;
}
;
export type DisputeReason =;
  | 'milestone_quality';
  | 'delayed_delivery';
  | 'scope_change';
  | 'communication';
  | 'payment';
  | 'contract_terms';
  | 'other',;
export const disputeReasonLabels: Record<DisputeReason string> = {;
  milestone_quality: 'Quality of Deliverable',;
  delayed_delivery: 'Delayed Delivery',;
  scope_change: 'Scope Change Disagreement',;
  communication: 'Communication Issues',;
  payment: 'Payment Dispute',;
  contract_terms: 'Contract Terms Disagreement',;
  other: 'Other Issue'};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
