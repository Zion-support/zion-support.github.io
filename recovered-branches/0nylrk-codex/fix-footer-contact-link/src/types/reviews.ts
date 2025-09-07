export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
export interface Review {
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;

export interface Review {
export interface Review {export interface Review {
  id: string;
  project_id: string;
  reviewer_id: string;
  reviewee_id: string;
  rating: number;
export type ReviewStatus = "pending" | "approved" | "rejected";"
export interface Review {
  // TODO: Implement
}"
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
export interface Review {;

  // TODO: Implement
}
  id: string;,
  project_id: string;
  reviewer_id: string;,
  reviewee_id: string;
  rating: number;,
pr-12325
  review_text: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
  is_anonymous: boolean;
  status: ReviewStatus;
  created_at: string;
  updated_at: string;
  is_visible: boolean;
  report_count: number;
  reviewer_profile?: {
    display_name: string;
    avatar_url?: string;
  };
}

export interface ReviewReport {;

display_name: string
    avatar_url?: string
};
}

export interface ReviewReport {;
export interface ReviewReport {

export interface ReviewReport {export interface ReviewReport {
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';}
  is_anonymous: boolean;,
  status: ReviewStatus;
  created_at: string;,
  updated_at: string;
  is_visible: boolean;,
  report_count: number;
  reviewer_profile?: {
    display_name: string;
    avatar_url?: string;
  };



export interface ReviewReport {;


export interface ReviewReport {
  // TODO: Implement
  review_id: string;
  reporter_id: string;,
  reason: string;
  status: "pending" | "resolved" | "dismissed";",
  created_at: string;
  resolved_at?: string;
}
"
pr-12325
