import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
}</div> </div> <div className="mb-4"> <p className="text-sm whitespace-pre-wrap"> {review.review text}</p> </div> {"
  (review.communication rating |review.quality rating |review.timeliness rating |review.would work again !== undefined) && (<div className="border-t pt-3 mt-3"> <div className="flex flex-wrap gap-2" > {"
  review.communication rating && (<Badge variant="outline" className="flex gap-1 items-center"> Communication <span className="ml-1 text-yellow-500" > {
  review.communication rating}/5</span> </Badge>) "
}Quality <span className="ml-1 text-yellow-500" > {review.quality rating}/5</span> </Badge>) "
}Timeliness <span className="ml-1 text-yellow-500" > {review.timeliness rating}/5</span> </Badge>)
}{
  review.would work again !== undefined && (<Badge </Badge>)
}</div> </div>) "
