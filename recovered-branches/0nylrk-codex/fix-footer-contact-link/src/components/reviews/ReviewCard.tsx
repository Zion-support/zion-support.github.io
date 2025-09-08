


interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}


import {useState} from "react";
import {formatDistanceToNow} from "date-fns";
import {Star, Flag, User} from "lucide-react";
import {Review} from "@/types/reviews";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Textarea} from "@/components/ui/textarea";
interface ReviewCardProps {;
  review: Review,;




  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;

    

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star

            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
);
  }
    );
  }
    )
  },
  

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()


                <AvatarImage
                  {review.reviewer_profile?.display_name ? 

                </AvatarFallback>;

          


{review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : "??"}
                </AvatarFallback>
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>;

              )}
            </Avatar>
          )}


              <Badge variant="outline" className="flex gap - 1 items - center">;
                Communication;
                <span className="ml - 1 text - yellow - 500">;

                </span>;
              </Badge>)}
            {review.timeliness_rating && (
              <Badge variant="outline" className="flex gap - 1 items - center">;
                Timeliness;
                <span className="ml - 1 text - yellow - 500">;
                  {review.timeliness_rating}/5;
                </span>;
              </Badge>)}

          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (

              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">
                  {review.communication_rating}/5
                </span>
              </Badge>
            )}

            {review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">
                  {review.quality_rating}/5
                </span>
              </Badge>
            )}

            {review.timeliness_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">
                  {review.timeliness_rating}/5
                </span>
              </Badge>
            )}

            {review.would_work_again !== undefined && (
              <Badge
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {review.would_work_again
                  ? "Would work again"

                  : "Would not work again"}
              </Badge>
            )}
{(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
        review.would_work_again !== undefined) && (



