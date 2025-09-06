<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface Review {
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface Review {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface ReviewReport {

export interface ReviewReport {;
=======



export interface ReviewReport {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface ReviewReport {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
<<<<<<< HEAD

<<<<<<< HEAD
  resolved_at?: string
}
export type ReviewStatus = 'pending' | 'approved' | 'rejected',;
export interface Review {;
  id: string,;
  project_id: string,;
  reviewer_id: string,;
  reviewee_id: string,;
  rating: number,;
  review_text: string,;
  communication_rating?: number,;
  quality_rating?: number,;
  timeliness_rating?: number,;
  would_work_again?: boolean,;
  is_anonymous: boolean,;
  status: ReviewStatus,;
  created_at: string,;
  updated_at: string,;
  is_visible: boolean,;
  report_count: number,;
  reviewer_profile?: {;
    display_name: string,;
    avatar_url?: string;
  }
}
;
export interface ReviewReport {;
  id: string,;
  review_id: string,;
  reporter_id: string,;
  reason: string,;
  status: 'pending' | 'resolved' | 'dismissed',;
  created_at: string;
  resolved_at?: string;
}
;
=======
  created_at: string,
  resolved_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
