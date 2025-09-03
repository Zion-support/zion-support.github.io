<<<<<<< HEAD
interface ProfileRatingsProps { userId: string;
   averageRating?: number;
   ratingCount?: number  } export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({})
=======
<<<<<<< HEAD
interface ProfileRatingsProps {;
=======
<<<<<<< HEAD
import {Record } from 'lucide-react';
interface ProfileRatingsProps {userId: string;
   averageRating?: number;
   ratingCount?: number} export function ProfileRatings({userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record <number, number" >>({})
}
=======
import { Record } from 'lucide-react';
interface ProfileRatingsProps {
>>>>>>> main
  userId: string;
<<<<<<< HEAD
   averageRating?: number;
<<<<<<< HEAD
   ratingCount?: number} export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record <number, number" >>({})
}"
=======
   ratingCount?: number} export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {} const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record<;<number, number>>({});
=======
<<<<<<< HEAD
   averageRating?: number;""
   ratingCount?: number} export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record <number, number"" >>({}),
}
""
=======
   averageRating?: number;'
   ratingCount?: number} export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record <number, number  >>({}),
}
'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
