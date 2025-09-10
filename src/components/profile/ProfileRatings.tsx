import { _useState, useEffect } from 'react';
import { _Star  } from 'lucide-react';
import { _ReviewStats } from '@/components/reviews/ReviewStats';
import { _ReviewsList } from '@/components/reviews/ReviewsList';
import { _useReviews } from '@/hooks/useReviews';
import { _Button } from '@/components/ui/button';
import { _Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
;
export function ProfileRatings("props": "any) {;
  const { reviews", isLoading, fetchUserReviews, reportReview } = useReviews();
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
  // Calculate rating distribution;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
"}, []);
    if(reviews.length > 0) {;
      const "distribution": "Recor d<number", number> = { "1": "0", "2": "0", "3": "0", "4": "0", "5": "0 "};
      ;
      reviews.forEach((review) => {;
        if(review.rating >= 1 && review.rating <= 5) {;
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });
      ;export function ProfileRatings(props: any) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({}
    );