

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  id: string;
  review_id: string;
  reporter_id: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';

  resolved_at?: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
