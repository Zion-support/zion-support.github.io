<<<<<<< HEAD


export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
=======
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface Dispute {
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
<<<<<<< HEAD
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
=======
    title?: string,
    scope_summary?: string;
  }
  client_profile?: {
    display_name: string,
    avatar_url?: string;
  }
  talent_profile?: {
    display_name: string,
    avatar_url?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
export interface DisputeMessage {
  id: string;
  dispute_id: string;
  user_id: string;
  message: string;
  created_at: string;
  is_admin_note: boolean;
  user_profile?: {
<<<<<<< HEAD
    display_name: string
    avatar_url?: string
=======
    display_name: string,
    avatar_url?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
export interface DisputeAttachment {
  id: string;
  dispute_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
<<<<<<< HEAD
  created_at: string
  url?: string
}
export type DisputeReason =
  | 'milestone_quality'
  | 'delayed_delivery'
  | 'scope_change'
  | 'communication'
  | 'payment'
  | 'contract_terms'
  | 'other';
export const disputeReasonLabels: Record<DisputeReason, string> = {
=======
  created_at: string,
  url?: string;
}
export type DisputeReason =;
  | 'milestone_quality';
  | 'delayed_delivery';
  | 'scope_change';
  | 'communication';
  | 'payment';
  | 'contract_terms';
  | 'other';
;
export const disputeReasonLabels: Record < DisputeReason, string> = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
other: 'Other Issue'}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
