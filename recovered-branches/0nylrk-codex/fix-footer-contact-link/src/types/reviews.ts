<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type ReviewStatus = "pending" | "approved" | "rejected";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface Review {
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Review {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Review {export interface Review {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
export interface ReviewReport {

export interface ReviewReport {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface ReviewReport {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
    display_name: string
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    avatar_url?: string
};
}

export interface ReviewReport {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface ReviewReport {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export interface ReviewReport {export interface ReviewReport {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
<<<<<<< HEAD
<<<<<<< HEAD
  status: 'pending' | 'resolved' | 'dismissed';
<<<<<<< HEAD

  resolved_at?: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
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
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  status: "pending" | "resolved" | "dismissed";
  created_at: string;
  resolved_at?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  status: 'pending' | 'resolved' | 'dismissed';}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
