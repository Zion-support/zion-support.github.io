
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
;

export interface Dispute {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;

export interface Dispute {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

export interface Dispute {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Dispute {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';'
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed' | null;
;

export interface Dispute {}
export interface Dispute {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  project?: {

<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
export interface DisputeMessage {

export interface DisputeMessage {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


=======
  project?: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface DisputeMessage {;



<<<<<<< HEAD
export interface DisputeMessage {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface DisputeMessage {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

export interface Dispute {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
export interface DisputeMessage {export interface DisputeMessage {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface Dispute {
export interface DisputeMessage {;

export interface DisputeMessage {export interface DisputeMessage {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export interface DisputeMessage {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export interface DisputeMessage {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  dispute_id: string;
  user_id: string;
  message: string;
  created_at: string;
  is_admin_note: boolean;
<<<<<<< HEAD
  user_profile?: {

    display_name: string,
    avatar_url?: string;

  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface DisputeAttachment {

export interface DisputeAttachment {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
  user_profile?: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface DisputeAttachment {;

<<<<<<< HEAD


<<<<<<< HEAD
export interface DisputeAttachment {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface DisputeAttachment {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface DisputeAttachment {export interface DisputeAttachment {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



export interface DisputeAttachment {;

<<<<<<< HEAD
export interface DisputeAttachment {export interface DisputeAttachment {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export interface DisputeAttachment {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export interface DisputeAttachment {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  dispute_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
export const disputeReasonLabels: Record < DisputeReason, string> = {};
export const disputeReasonLabels: Record<DisputeReason, string> = {;


<<<<<<< HEAD
export const disputeReasonLabels: Record<DisputeReason, string> = {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

;
export const disputeReasonLabels: Record < DisputeReason, string> = {



export const disputeReasonLabels: Record<DisputeReason, string> = {;

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

export const disputeReasonLabels: Record<DisputeReason, string> = {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  milestone_quality: 'Quality of Deliverable';
  delayed_delivery: 'Delayed Delivery';
  scope_change: 'Scope Change Disagreement';
  communication: 'Communication Issues';
  payment: 'Payment Dispute';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  contract_terms: 'Contract Terms Disagreement'
other: 'Other Issue'}


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  contract_terms: 'Contract Terms Disagreement',

other: 'Other Issue'};
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

'
  milestone_quality: 'Quality of Deliverable';'
  delayed_delivery: 'Delayed Delivery';'
  scope_change: 'Scope Change Disagreement';'
  communication: 'Communication Issues';'
  payment: 'Payment Dispute';
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  contract_terms: 'Contract Terms Disagreement',
'
other: 'Other Issue'};



'
  contract_terms: 'Contract Terms Disagreement',
'
other: 'Other Issue'};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  contract_terms: 'Contract Terms Disagreement',

other: 'Other Issue'};
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


  contract_terms: 'Contract Terms Disagreement',

other: 'Other Issue'};
export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
export const disputeReasonLabels: Record<DisputeReason string> = {;'
  milestone_quality: 'Quality of Deliverable',;'
  delayed_delivery: 'Delayed Delivery',;'
  scope_change: 'Scope Change Disagreement',;'
  communication: 'Communication Issues',;'
  payment: 'Payment Dispute',;'
  contract_terms: 'Contract Terms Disagreement',;'
  other: 'Other Issue'};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
