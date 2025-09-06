
<<<<<<< HEAD


export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;

export interface Review {
=======

export interface Review {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

export interface ReviewReport {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


export interface ReviewReport {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';

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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  created_at: string,
  resolved_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
