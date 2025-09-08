export type ReviewStatus = "pending" | "approved" | "rejected";

export interface Review {
<<<<<<< HEAD


export interface Review {;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    avatar_url?: string;
    avatar_url?: string
};
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

export interface ReviewReport {;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: "pending" | "resolved" | "dismissed";
  created_at: string;
  resolved_at?: string;
}
