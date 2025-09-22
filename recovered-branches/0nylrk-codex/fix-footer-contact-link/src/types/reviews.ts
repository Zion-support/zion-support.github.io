<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
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
=======
export type ReviewStatus = 'pending' | 'approved' | 'rejected';
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export type ReviewStatus = "pending" | "approved" | "rejected";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface Review {
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Review {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Review {export interface Review {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface Review {export interface Review {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface Review {};
export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {;

export interface Review {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export interface Review {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    avatar_url?: string;
  };
}
<<<<<<< HEAD
export interface ReviewReport {

export interface ReviewReport {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    avatar_url?: string
};
=======
    avatar_url?: string;
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export interface ReviewReport {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export interface ReviewReport {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

export interface ReviewReport {};
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  status: "pending" | "resolved" | "dismissed";
  created_at: string;
  resolved_at?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
