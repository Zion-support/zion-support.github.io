<<<<<<< HEAD
export type ReviewStatus = "pending" | "approved" | "rejected";

=======
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface Review {
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;
<<<<<<< HEAD

export interface Review {
=======
export interface Review {export interface Review {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  project_id: string;
  reviewer_id: string;
  reviewee_id: string;
  rating: number;
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
<<<<<<< HEAD
    avatar_url?: string;
  };
}



export interface ReviewReport {;


export interface ReviewReport {
=======
    avatar_url?: string
};
}

export interface ReviewReport {;

export interface ReviewReport {export interface ReviewReport {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
<<<<<<< HEAD
  status: "pending" | "resolved" | "dismissed";
  created_at: string;
  resolved_at?: string;
}
=======
  status: 'pending' | 'resolved' | 'dismissed';}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
