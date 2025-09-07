<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;

export interface Review {
<<<<<<< HEAD
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;

<<<<<<< HEAD
=======
=======

export interface Review {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  reviewer_profile?: {}
    display_name: string;

<<<<<<< HEAD
    avatar_url?: string
};

}

export interface ReviewReport {;

  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;

  status: "pending" | "resolved" | "dismissed";
  created_at: string;
  resolved_at?: string;
}
=======
<<<<<<< HEAD
    avatar_url?: string
};
=======
<<<<<<< HEAD


export interface ReviewReport {;

>>>>>>> merged-prs-20250907-203621

    display_name: string
    avatar_url?: string
  }
}
export interface ReviewReport {

export interface ReviewReport {;
=======
    display_name: string,
    avatar_url?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export interface ReviewReport {;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
<<<<<<< HEAD
=======
  status: 'pending' | 'resolved' | 'dismissed';
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  status: "pending" | "resolved" | "dismissed";
  created_at: string;
  resolved_at?: string;
<<<<<<< HEAD
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
