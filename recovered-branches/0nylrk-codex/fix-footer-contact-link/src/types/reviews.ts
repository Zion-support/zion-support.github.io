<<<<<<< HEAD


export type ReviewStatus = 'pending' | 'approved' | 'rejected';
=======
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface Review {
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
<<<<<<< HEAD
    display_name: string
    avatar_url?: string
=======
    display_name: string,
    avatar_url?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
export interface ReviewReport {
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
<<<<<<< HEAD
  created_at: string

  resolved_at?: string
=======
  created_at: string,
  resolved_at?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}