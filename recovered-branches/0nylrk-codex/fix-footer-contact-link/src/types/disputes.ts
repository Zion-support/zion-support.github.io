
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';''
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;'
;

export interface Dispute {

  // TODO: Implement
}
export interface Dispute {;

export interface Dispute {
  // TODO: Implement
}
  id: string;,
  project_id: string;
  milestone_id?: string;
  raised_by: string;,
  reason_code: string;
  description: string;,
  created_at: string;
  updated_at: string;
  resolved_at?: string;
  resolution_summary?: string;
  status: DisputeStatus;,
  resolution_type: ResolutionType;
  project?: {

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

  }
}



export interface DisputeMessage {;


export interface DisputeMessage {
  // TODO: Implement
}
  id: string;,

  dispute_id: string;
  user_id: string;,
  message: string;
  created_at: string;,
  is_admin_note: boolean;
  user_profile?: {

    display_name: string,
    avatar_url?: string;}
}
  }
}

export interface DisputeAttachment {;



export interface DisputeAttachment {
  // TODO: Implement
}
  id: string;,

  dispute_id: string;
  uploaded_by: string;,
  file_name: string;
  file_path: string;,
  file_type: string;

  file_size: number;,
  created_at: string,
  url?: string;
}
export type DisputeReason =;'
  | 'milestone_quality';''
  | 'delayed_delivery';''
  | 'scope_change';''
  | 'communication';''
  | 'payment';''
  | 'contract_terms';''
  | 'other';'
;
export const disputeReasonLabels: Record < DisputeReason, string> = {

;
export const disputeReasonLabels: Record < DisputeReason, string> = {



export const disputeReasonLabels: Record<DisputeReason, string> = {;
</DisputeReason>
export const disputeReasonLabels: Record<DisputeReason, string> = {
</DisputeReason>

export const disputeReasonLabels: Record<DisputeReason, string> = {;
</DisputeReason>
export const disputeReasonLabels: Record<DisputeReason string> = {;
</DisputeReason>'

