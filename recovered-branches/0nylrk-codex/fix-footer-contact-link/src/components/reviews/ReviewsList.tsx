import { Review } from "@/types/reviews";"
import { ReviewCard } from "./ReviewCard";
interface ReviewsListProps {}
  reviews: Review[];
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}



      </div>
    );
  }

  if (reviews.length === 0) {}
    return ("
      <div className="text-center py-8 border rounded-lg bg-muted/20">"
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>"
        <p className="text-muted-foreground">
          Once reviews are submitted and approved, they will appear here.
        </p>
      </div>
    );
  }


  return (

  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="text - center py - 8 border rounded - lg bg - muted / 20">;"
        <h3 className="text - lg font - medium mb - 1">No Reviews Yet</h3>;"
        <p className="text - muted - foreground">;
          Once reviews are submitted and approved, they will appear here.;
        </p>;
      </div>);
  }
  return ("
    <div className="space - y-4">;
      {reviews.map ((review) => (
        <ReviewCard key={review.id} review={review} on_report={onReportReview} />))}
    </div>);
}




}
;


"