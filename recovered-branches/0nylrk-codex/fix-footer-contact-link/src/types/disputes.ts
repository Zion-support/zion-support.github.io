
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
;

export interface Dispute {
export interface Dispute {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


export interface DisputeMessage {;


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
export interface DisputeMessage {

export interface DisputeMessage {;
=======
=======    title?: string,
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



export interface DisputeAttachment {;


    display_name: string
    avatar_url?: string
  }
}
export interface DisputeAttachment {

export interface DisputeAttachment {;
=======
=======    display_name: string,
    avatar_url?: string;

  }
}



export interface DisputeAttachment {;


=======
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

=======

export const disputeReasonLabels: Record<DisputeReason, string> = {;

=======

=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  contract_terms: 'Contract Terms Disagreement',

other: 'Other Issue'};

  contract_terms: 'Contract Terms Disagreement',
other: 'Other Issue'};
=======
==============
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
