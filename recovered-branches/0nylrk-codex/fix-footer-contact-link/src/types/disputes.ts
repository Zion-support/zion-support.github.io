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
  milestone_quality: 'Quality of Deliverable';
  delayed_delivery: 'Delayed Delivery';
  scope_change: 'Scope Change Disagreement';
  communication: 'Communication Issues';
  payment: 'Payment Dispute';
