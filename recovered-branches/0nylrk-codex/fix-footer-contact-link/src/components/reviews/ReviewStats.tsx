

interface ReviewStatsProps {

  averageRating: number,
  totalReviews: number,

  // Format the average rating to one decimal place

}
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {







              {totalReviews} {totalReviews === 1 ? "review" :"reviews"}


                {ratingDistribution[rating] |0}


    </div>;
  );
}
