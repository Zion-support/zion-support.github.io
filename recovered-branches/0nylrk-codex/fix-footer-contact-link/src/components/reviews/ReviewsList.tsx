


interface ReviewsListProps {

  reviews: Review[];
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}

export function ReviewsList({
  reviews
  isLoading
  onReportReview





