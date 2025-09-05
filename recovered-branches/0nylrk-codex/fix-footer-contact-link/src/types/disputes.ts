
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed',
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null,

<<<<<<< HEAD
export interface Dispute {
  id: string,
  project_id: string,
  milestone_id?: string,
  raised_by: string,
  reason_code: string,
  description: string,
  created_at: string,
  updated_at: string,
  resolved_at?: string,
  resolution_summary?: string,
  status: DisputeStatus,
  resolution_type: ResolutionType,
  project?: {
    title?: string,
    scope_summary?: string
  },
  client_profile?: {
    display_name: string,
    avatar_url?: string
  },
  talent_profile?: {
    display_name: string,
    avatar_url?: string
  }
}

export interface DisputeMessage {
  id: string,
  dispute_id: string,
  user_id: string,
  message: string,
  created_at: string,
  is_admin_note: boolean,
  user_profile?: {
    display_name: string,
    avatar_url?: string
  }
}

export interface DisputeAttachment {
  id: string,
  dispute_id: string,
  uploaded_by: string,
  file_name: string,
  file_path: string,
  file_type: string,
  file_size: number,
  created_at: string,
  url?: string
}
=======
export interface Dispute {_id: string;
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
    title?: string;
    scope_summary?: string;};
  client_profile?: {_display_name: string;
    avatar_url?: string;};
  talent_profile?: {_display_name: string;
    avatar_url?: string;};
}

export interface DisputeMessage {_id: string;
  dispute_id: string;
  user_id: string;
  message: string;
  created_at: string;
  is_admin_note: boolean;
  user_profile?: {
    display_name: string;
    avatar_url?: string;};
}

export interface DisputeAttachment {_id: string;
  dispute_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
  created_at: string;
  url?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type DisputeReason = 
  | 'milestone_quality'
  | 'delayed_delivery'
  | 'scope_change'
  | 'communication'
  | 'payment'
  | 'contract_terms'
  | 'other',

<<<<<<< HEAD
export const disputeReasonLabels: Record<DisputeReason string> = {
  milestone_quality: 'Quality of Deliverable',
  delayed_delivery: 'Delayed Delivery',
  scope_change: 'Scope Change Disagreement',
  communication: 'Communication Issues',
  payment: 'Payment Dispute',
  contract_terms: 'Contract Terms Disagreement',
  other: 'Other Issue'},
=======
export const disputeReasonLabels: Record<DisputeReason, string> = {_milestone_quality: 'Quality of Deliverable', _delayed_delivery: 'Delayed Delivery', _scope_change: 'Scope Change Disagreement', _communication: 'Communication Issues', _payment: 'Payment Dispute', _contract_terms: 'Contract Terms Disagreement', _other: 'Other Issue'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
