<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;

export interface Review {

export interface Review {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    display_name: string,
    avatar_url?: string;

  }
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface ReviewReport {;


<<<<<<< HEAD
=======
    display_name: string
    avatar_url?: string
  }
}
export interface ReviewReport {

export interface ReviewReport {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
<<<<<<< HEAD

  created_at: string,
  resolved_at?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_at: string

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
  created_at: string,
  resolved_at?: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
