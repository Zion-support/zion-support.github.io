<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export type DisputeStatus = $2;
export type ResolutionType = $2;
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

export type DisputeReason = $2;
export const disputeReasonLabels: Record<DisputeReason, string> = {
  milestone_quality: 'Quality of Deliverable',
  delayed_delivery: 'Delayed Delivery',
  scope_change: 'Scope Change Disagreement',
  communication: 'Communication Issues',
  payment: 'Payment Dispute',
  contract_terms: 'Contract Terms Disagreement',
  other: 'Other Issue'},
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
;

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

<<<<<<< HEAD
export interface DisputeMessage {;

export interface Dispute {
=======
<<<<<<< HEAD
export interface DisputeMessage {;

export interface Dispute {
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    title?: string,
    scope_summary?: string;
  }
  client_profile?: {
=======
<<<<<<< HEAD


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
    title?: string,
    scope_summary?: string;
  }
  client_profile?: {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    display_name: string,
    avatar_url?: string;
  }
  talent_profile?: {
    display_name: string,
    avatar_url?: string;

  }
}

export interface DisputeMessage {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id: string;
  dispute_id: string;
  user_id: string;
  message: string;
  created_at: string;
  is_admin_note: boolean;
<<<<<<< HEAD

export interface DisputeAttachment {;

  id: string;
  dispute_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;

;
export const disputeReasonLabels: Record < DisputeReason, string> = {};
export const disputeReasonLabels: Record<DisputeReason, string> = {;

=======
<<<<<<< HEAD

export interface DisputeAttachment {;

=======
  user_profile?: {

<<<<<<< HEAD


export interface DisputeAttachment {;


    display_name: string
    avatar_url?: string
  }
}
export interface DisputeAttachment {

export interface DisputeAttachment {;
=======
    display_name: string,
    avatar_url?: string;

  }
}



export interface DisputeAttachment {;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  dispute_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
<<<<<<< HEAD
;
export const disputeReasonLabels: Record < DisputeReason, string> = {

=======

;
<<<<<<< HEAD
export const disputeReasonLabels: Record < DisputeReason, string> = {};
export const disputeReasonLabels: Record<DisputeReason, string> = {;

=======
export const disputeReasonLabels: Record < DisputeReason, string> = {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export const disputeReasonLabels: Record<DisputeReason, string> = {;

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
  | 'contract_terms';
  | 'other';
export const disputeReasonLabels: Record<DisputeReason, string> = {

export const disputeReasonLabels: Record<DisputeReason, string> = {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  milestone_quality: 'Quality of Deliverable';
  delayed_delivery: 'Delayed Delivery';
  scope_change: 'Scope Change Disagreement';
  communication: 'Communication Issues';
  payment: 'Payment Dispute';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  contract_terms: 'Contract Terms Disagreement',

other: 'Other Issue'};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  contract_terms: 'Contract Terms Disagreement',
'
other: 'Other Issue'};

'
  contract_terms: 'Contract Terms Disagreement',
'
other: 'Other Issue'};

  contract_terms: 'Contract Terms Disagreement',

other: 'Other Issue'};

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  contract_terms: 'Contract Terms Disagreement'
other: 'Other Issue'}

  contract_terms: 'Contract Terms Disagreement',
other: 'Other Issue'};
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
export type DisputeReason =;'
  | 'milestone_quality';'
  | 'delayed_delivery';'
  | 'scope_change';'
  | 'communication';'
  | 'payment';'
  | 'contract_terms';'
  | 'other',;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const disputeReasonLabels: Record<DisputeReason string> = {;'
  milestone_quality: 'Quality of Deliverable',;'
  delayed_delivery: 'Delayed Delivery',;'
  scope_change: 'Scope Change Disagreement',;'
  communication: 'Communication Issues',;'
  payment: 'Payment Dispute',;'
  contract_terms: 'Contract Terms Disagreement',;'
<<<<<<< HEAD
  other: 'Other Issue'};
=======
  other: 'Other Issue'};
=======
export const disputeReasonLabels: Record<DisputeReason string> = {;
  milestone_quality: 'Quality of Deliverable',;
  delayed_delivery: 'Delayed Delivery',;
  scope_change: 'Scope Change Disagreement',;
  communication: 'Communication Issues',;
  payment: 'Payment Dispute',;
  contract_terms: 'Contract Terms Disagreement',;
  other: 'Other Issue'};


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
