
<<<<<<< HEAD
<<<<<<< HEAD

export interface Review {
=======

export interface Review {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

    display_name: string,
    avatar_url?: string;

  }
}
<<<<<<< HEAD
export interface ReviewReport {
=======

export interface ReviewReport {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';

  created_at: string,
  resolved_at?: string;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
