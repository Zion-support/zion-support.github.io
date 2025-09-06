<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from "lucide-react",
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
<<<<<<< HEAD

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
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
  onReport: (reviewId: string, reason: string) => Promise<boolean>;
}
export function ReviewCard(): any ({ review, onReport }: ReviewCardProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);


  const handleReport = async () => {;
    if (!reportReason && reportReason.trim()) return;


    setIsReporting(true);
    const success = await onReport(review && review.id, reportReason);
    setIsReporting(false);


========
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const handleReport = async () => {;
    if (!reportReason && reportReason.trim()) return;
    setIsReporting(true);
    const success = await onReport(review && review.id, reportReason);
    setIsReporting(false);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
    if (success) {;
      setReportReason("");
      setIsReportDialogOpen(false);
    }
  };
  const renderStars = (rating?: number) => {;
    if (!rating) return null;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

      </div>

    )
  },
  


  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
import { useState  } from './react';
import { formatDistanceToNow  } from './date - fns';
import { Star, Flag, User  } from './lucide-react';
import { Review  } from '@/types / reviews';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import {
=======
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {

  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogTrigger,
} from '@/components / ui / dialog';
import { Textarea  } from '@/components / ui / textarea';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ReviewCardProps {
  review: Review;
  on_report: (review_id: string, reason: string) => Promise < boolean>;
}
<<<<<<< HEAD

export function ReviewCard({ review, onReport }: ReviewCardProps) {

  const handleReport = async () => {
=======
DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",

interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  const handleReport = async () => {
    if (!reportReason.trim()) return;
    setIsReporting(true);
    const success = await onReport(review.id, reportReason);
    setIsReporting(false);
    if (success) {
      setReportReason("");
      setIsReportDialogOpen(false);
    }
}
  const renderStars = (rating?: number) => {
    if (!rating) return null;
  
  const handleReport = async () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!reportReason.trim()) return,
    
    setIsReporting(true),
    const success = await onReport(review.id, reportReason),
    setIsReporting(false),
    
    if (success) {
      setReportReason(""),
      setIsReportDialogOpen(false)
    }
  },
  
  const renderStars = (rating?: number) => {
    if (!rating) return null,

<<<<<<< HEAD
=======
export /**
 * ReviewCard - Function description
 */
function ReviewCard() {
  const [report_reason, setReportReason] = useState ("");
  const [is_reporting, setIsReporting] = useState (false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState (false);
;
  const handle_report = async () => {
    if () return) {
  $2
}
    setIsReporting (true);
    const success = await on_report (review.id, report_reason);
    setIsReporting (false);
;
    // Check condition
if ( {) {
  $2
}
      setReportReason ("");
      setIsReportDialogOpen (false);
    }
  }
;
  const render_stars = (rating?: number) =>: any {
    // Check condition
if (return null) {
  $2
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map ((star) => (
          <Star;
            key={star}
<<<<<<< HEAD
=======
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
<<<<<<< HEAD

=======
);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
<<<<<<< HEAD

=======
            className={`h - 4 w - 4 ${star <= rating ? "fill - yellow - 400 text - yellow - 400" : "text - gray - 300"}`}
          />))}
      </div>);
  }
;
  const get_initials = (name: string) =>: any {
    return name;
      .split (" ");
      .map ((n) => n[0]);
      .join ("");
      .toUpperCase ();
      .substring (0, 2);
  }
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
  return (
    <div className="border rounded - lg p - 4 bg - card">;
      <div className="flex justify - between items - start mb - 3">;
        <div className="flex items - center gap - 3">;
          {review.is_anonymous ? (
            <Avatar>;
              <AvatarFallback className="bg - muted">;
                <User className="h - 4 w - 4" />;
              </AvatarFallback>;
            </Avatar>) : (
            <Avatar>;
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage;
                  src={review.reviewer_profile.avatar_url}
                  alt={review.reviewer_profile.display_name}
                />) : (
                <AvatarFallback>;
                  {review.reviewer_profile?.display_name;
                    ? get_initials (review.reviewer_profile.display_name);
                    : "??"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
      </div>;
    );
  };
  const getInitials = (name: string) => {;
=======

import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { Star, Flag, User } from "lucide-react",;
import { Review } from "@/types/reviews",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Textarea } from "@/components/ui/textarea",;
;
interface ReviewCardProps {;
  review:Review,;
  onReport:(reviewId:string, reason:string) => Promise<boolean>;
}
;
export function ReviewCard({ review, onReport } ReviewCardProps) {;
  const [reportReason, setReportReason] = useState(""),;
  const [isReporting, setIsReporting] = useState(false),;
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),;
  ;
  const handleReport = async () => {;
    if (!reportReason.trim()) return,;
    ;
    setIsReporting(true),;
    const success = await onReport(review.id, reportReason),;
    setIsReporting(false),;
    ;
    if (success) {;
      setReportReason(""),;
      setIsReportDialogOpen(false),;
    }
  },;
  ;
  const renderStars = (rating?:number) => {;
    if (!rating) return null,;
    ;
    return (;
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star;
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" :"text-gray-300"}`}
          />;
        ))}
      </div>;
    ),;
  },;
  ;
  const getInitials = (name:string) => {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
<<<<<<< HEAD
      .substring(0, 2);
  };
  return (
    <div className="border rounded-lg p-4 bg-card">;
      <div className="flex justify-between items-start mb-3">;
        <div className="flex items-center gap-3">;
          {review && review.is_anonymous ? (;
=======
      .substring(0, 2),;
  },;
  ;
  return (;
    <div className="border rounded-lg p-4 bg-card">;
      <div className="flex justify-between items-start mb-3">;
        <div className="flex items-center gap-3">;
          {review.is_anonymous ? (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Avatar>;
              <AvatarFallback className="bg-muted">;
                <User className="h-4 w-4" />;
              </AvatarFallback>;
            </Avatar>;
<<<<<<< HEAD
          ) : (;
            <Avatar>;
              {review && review.reviewer_profile?.avatar_url ? (;
                <AvatarImage src={review && review.reviewer_profile.avatar_url} alt={review && review.reviewer_profile.display_name} />;
              ) : (;
                <AvatarFallback>;
                  {review && review.reviewer_profile?.display_name ? ;
                    getInitials(review && review.reviewer_profile.display_name) : "??"}
=======

      .substring(0, 2)
  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
.substring(0, 2);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
              <AvatarFallback className="bg-muted">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage
                  src={review.reviewer_profile.avatar_url}
                  alt={review.reviewer_profile.display_name}
                />
              ) : (
                <AvatarFallback>
<<<<<<< HEAD

<<<<<<< HEAD
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { Star, Flag, User } from "lucide-react",;
import { Review } from "@/types/reviews",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Textarea } from "@/components/ui/textarea",;
interface ReviewCardProps {;
  review: Review,;
  onReport: (reviewId: string, reason: string) => Promise<boolean>;
}
;
export function ReviewCard({ review, onReport }: ReviewCardProps) {;
  const [reportReason, setReportReason] = useState(""),;
  const [isReporting, setIsReporting] = useState(false),;
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),;
  const handleReport = async () => {;
    if (!reportReason.trim()) return,;
    setIsReporting(true),;
    const success = await onReport(review.id, reportReason),;
    setIsReporting(false),;
    if (success) {;
      setReportReason(""),;
      setIsReportDialogOpen(false);
    }
  },;
  const renderStars = (rating?: number) => {;
    if (!rating) return null,;
    return (;
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star;
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
      </div>;
    );
  };
  const getInitials = (name: string) => {;
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
      .substring(0, 2);
  };
  return (;
    <div className="border rounded-lg p-4 bg-card">;
      <div className="flex justify-between items-start mb-3">;
        <div className="flex items-center gap-3">;
          {review.is_anonymous ? (;
            <Avatar>;
              <AvatarFallback className="bg-muted">;
                <User className="h-4 w-4" />;
              </AvatarFallback>;
            </Avatar>;
          ) : (;
            <Avatar>;
              {review.reviewer_profile?.avatar_url ? (;
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />;
              ) : (;
                <AvatarFallback>;
                  {review.reviewer_profile?.display_name ?;
=======
                  {review.reviewer_profile?.display_name ? 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                    getInitials(review.reviewer_profile.display_name) : "??"}

                </AvatarFallback>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              )}
            </Avatar>;
          )}

<<<<<<< HEAD
=======

          


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
{review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : "??"}
                </AvatarFallback>
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>;

              )}
            </Avatar>
          )}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
            <div className="font-medium">
              {review.is_anonymous
                ? "Anonymous"
<<<<<<< HEAD
                : review.reviewer_profile?.display_name |"User"}
            </div>
            <div className="text-sm text-muted-foreground">

<<<<<<< HEAD
          {renderStars(review.rating)}

=======

              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
        <div className="flex">;
=======
        </div>
        <div className="flex">

          {renderStars(review.rating)}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
: review.reviewer_profile?.display_name |"User"}
            </div>
            <div className="text-sm text-muted-foreground">
{formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true
              })}
            </div>
          </div>

          {renderStars(review.rating)}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        <div className="flex">{renderStars(review.rating)}</div>
      </div>
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
              )}
            </Avatar>;
          )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
                </AvatarFallback>)}
            </Avatar>)}
          <div>;
            <div className="font - medium">;
              {review.is_anonymous;
                ? "Anonymous";
                : review.reviewer_profile?.display_name || "User"}
            </div>;
            <div className="text - sm text - muted - foreground">;
              {formatDistanceToNow (new Date (review.created_at), {
                add_suffix: true,
              })}
            </div>;
          </div>;
        </div>;
        <div className="flex">{render_stars (review.rating)}</div>;
      </div>;
      <div className="mb - 4">;
        <p className="text - sm whitespace - pre - wrap">{review.review_text}</p>;
      </div>;
      {(review.communication_rating ||;
        review.quality_rating ||;
        review.timeliness_rating ||;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

        review.would_work_again !== undefined) && (
        <div className="border - t pt - 3 mt - 3">;
          <div className="flex flex - wrap gap - 2">;
=======

      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {review.communication_rating && (

========
        review.would_work_again !== undefined) && (
        <div className="border - t pt - 3 mt - 3">;
          <div className="flex flex - wrap gap - 2">;
            {review.communication_rating && (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
              <Badge variant="outline" className="flex gap - 1 items - center">;
                Communication;
                <span className="ml - 1 text - yellow - 500">;
                  {review.communication_rating}/5;
                </span>;
              </Badge>)}
            {review.quality_rating && (
              <Badge variant="outline" className="flex gap - 1 items - center">;
                Quality;
                <span className="ml - 1 text - yellow - 500">;
                  {review.quality_rating}/5;
                </span>;
              </Badge>)}
            {review.timeliness_rating && (
              <Badge variant="outline" className="flex gap - 1 items - center">;
                Timeliness;
                <span className="ml - 1 text - yellow - 500">;
                  {review.timeliness_rating}/5;
                </span>;
              </Badge>)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
            {review.would_work_again !== undefined && (
              <Badge;
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg - green - 100 text - green - 800 hover:bg - green - 200" : "bg - gray - 100 text - gray - 800 hover:bg - gray - 200"}`}
              >;
                {review.would_work_again;
                  ? "Would work again";
                  : "Would not work again"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
          <div>;
            <div className="font-medium">;
              {review && review.is_anonymous ? "Anonymous" : review && review.reviewer_profile?.display_name || "User"}
            </div>;
            <div className="text-sm text-muted-foreground">;
              {formatDistanceToNow(new Date(review && review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
        <div className="flex">;
          {renderStars(review && review.rating)}
        </div>;
      </div>;
      <div className="mb-4">;
        <p className="text-sm whitespace-pre-wrap">{review && review.review_text}</p>;
      </div>;
      {(review && review.communication_rating || review && review.quality_rating || review && review.timeliness_rating || review && review.would_work_again !== undefined) && (;
        <div className="border-t pt-3 mt-3">;
          <div className="flex flex-wrap gap-2">;
            {review && review.communication_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Communication;
                <span className="ml-1 text-yellow-500">{review && review.communication_rating}/5</span>;
              </Badge>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

<<<<<<< HEAD
=======
{(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
        review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
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
</div>
        </div>

      )}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}

      <div className="mt-3 flex justify-end">
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Flag className="h-3 w-3 mr-1" />
              Report
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>
<<<<<<< HEAD
                If you believe this review violates our community guidelines
=======
If you believe this review violates our community guidelines
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                please provide details below.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              placeholder="Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="min-h-[100px]"
            />
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsReportDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleReport}
<<<<<<< HEAD
                disabled={!reportReason.trim() |isReporting}
=======
disabled={!reportReason.trim() |isReporting}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                {isReporting ? "Submitting..." : "Submit Report"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>

<<<<<<< HEAD
=======
            {review && review.quality_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Quality;
                <span className="ml-1 text-yellow-500">{review && review.quality_rating}/5</span>;
              </Badge>;
            )}

            {review && review.timeliness_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Timeliness;
                <span className="ml-1 text-yellow-500">{review && review.timeliness_rating}/5</span>;
              </Badge>;
            )}

            {review && review.would_work_again !== undefined && (;
              <Badge
                variant={review && review.would_work_again ? "default" : "secondary"}
                className={`${review && review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>;
                {review && review.would_work_again ? "Would work again" : "Would not work again"}
              </Badge>;

            )}


          </div>;
        </div>;
=======
=======
          </div>;
        </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}


========
            {review && review.quality_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Quality;
                <span className="ml-1 text-yellow-500">{review && review.quality_rating}/5</span>;
              </Badge>;
            )}
            {review && review.timeliness_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Timeliness;
                <span className="ml-1 text-yellow-500">{review && review.timeliness_rating}/5</span>;
              </Badge>;
            )}
            {review && review.would_work_again !== undefined && (;
              <Badge
                variant={review && review.would_work_again ? "default" : "secondary"}
                className={`${review && review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>;
                {review && review.would_work_again ? "Would work again" : "Would not work again"}
              </Badge>;
            )}
          </div>;
        </div>;
      )}
=======
          ) :(;
            <Avatar>;
              {review.reviewer_profile?.avatar_url ? (;
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />;
              ) :(;
                <AvatarFallback>;
                  {review.reviewer_profile?.display_name ? ;
                    getInitials(review.reviewer_profile.display_name) :"??"}
                </AvatarFallback>;              )}
            </Avatar>;
          )}
          ;
          <div>;
            <div className="font-medium">;
              {review.is_anonymous ? "Anonymous" :review.reviewer_profile?.display_name || "User"}
            </div>;
            <div className="text-sm text-muted-foreground">;
              {formatDistanceToNow(new Date(review.created_at), { addSuffix:true })}
            </div>;
          </div>;
        </div>;
        ;
        <div className="flex">;
          {renderStars(review.rating)}
        </div>;
      </div>;
      ;
      <div className="mb-4">;
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>;
      </div>;
      ;
      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (;
        <div className="border-t pt-3 mt-3">;
          <div className="flex flex-wrap gap-2">;
            {review.communication_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Communication;
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>;
              </Badge>;
            )}
            ;
            {review.quality_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Quality;
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>;
              </Badge>;
            )}
            ;
            {review.timeliness_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Timeliness;
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>;
              </Badge>;
            )}
            ;
            {review.would_work_again !== undefined && (;
              <Badge ;
                variant={review.would_work_again ? "default" :"secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" :"bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >;
                {review.would_work_again ? "Would work again" :"Would not work again"}
              </Badge>;            )}
          </div>;
        </div>;
      )}
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
      <div className="mt-3 flex justify-end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger asChild>;
            <Button variant="ghost" size="sm" className="text-muted-foreground">;
              <Flag className="h-3 w-3 mr-1" />;
<<<<<<< HEAD
              </Badge>)}
          </div>;
        </div>)}
      <div className="mt - 3 flex justify - end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger as_child>;
            <Button variant="ghost" size="sm" className="text - muted - foreground">;
              <Flag className="h - 3 w - 3 mr - 1" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
              Report;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
              <DialogTitle > Report Review</DialogTitle>;
              <DialogDescription>;
                If you believe this review violates our community guidelines,
                please provide details below.;
              </DialogDescription>;
            </DialogHeader>;
            <Textarea;
              placeholder="Why are you reporting this review?";
              value={report_reason}
              on_change={(e) => setReportReason (e.target.value)}
              className="min - h-[100px]";
            />;
            <DialogFooter>;
              <Button;
                variant="outline";
                on_click={() => setIsReportDialogOpen (false)}
              >;
                Cancel;
              </Button>;
              <Button;
                on_click={handle_report}
                disabled={!report_reason.trim () || is_reporting}
              >;
                {is_reporting ? "Submitting..." : "Submit Report"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
=======
              <DialogTitle>Report Review</DialogTitle>;
              <DialogDescription>;
                If you believe this review violates our community guidelines, please provide details below.;
              </DialogDescription>;
            </DialogHeader>;
            ;
            <Textarea;
              placeholder="Why are you reporting this review?";
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="min-h-[100px]";
            />;
            ;
            <DialogFooter>;
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>;
                Cancel;
              </Button>;
              <Button ;
                onClick={handleReport} ;
                disabled={!reportReason.trim() || isReporting}
              >;
                {isReporting ? "Submitting..." :"Submit Report"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
    </div>);
=======
    </div>;
  ),; import {
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
DialogTitle;
interface ReviewCardProps {
  review: Review;
onReport: (reviewId: string, reason: string) => Promise<boolean> 
}export function ReviewCard ({
  review, onReport 
}: ReviewCardProps) {
  const handleReport = async () => {
  if (!reportReason.trim () ) return;
setIsReporting (true);
const success = await onReport (review.id, reportReason);
setIsReporting (false);
if (success) {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx

=======

  )
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const renderStars = (rating?: number) => {
  if (!rating) return null;
return (<div className="flex" > {
  [1, 2, 3, 4, 5].map ( (star) => (<Star key= {
  star 
}className= {
  `h-4 w-4 $ {
  star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300" 
}` 
}
}</div>) 
};
return (<div className="border rounded-lg p-4 bg-card"> <div className="flex justify-between items-start mb-3"> <div className="flex items-center gap-3"> {
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg-muted"> <User className="h-4 w-4" /> </AvatarFallback> </Avatar>) : (<Avatar> {
  review.reviewer profile?.avatar url ? (<AvatarImage src= {
  review.reviewer profile.avatar url 
}alt= {
  review.reviewer profile.display name 
}/>) : (<AvatarFallback> {
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : "??" 
}</AvatarFallback>) 
}</Avatar>) 
}<div> </div> <div className="text-sm text-muted-foreground"> {
  formatDistanceToNow (new Date (review.created at), {
  addSuffix: true 
}) 
}</div> </div> </div> <div className="flex"> {
  renderStars (review.rating) 
}</div> </div> <div className="mb-4"> <p className="text-sm whitespace-pre-wrap"> {
  review.review text 
}</p> </div> {
  (review.communication rating || review.quality rating || review.timeliness rating || review.would work again !== undefined) && (<div className="border-t pt-3 mt-3"> <div className="flex flex-wrap gap-2" > {
  review.communication rating && (<Badge variant="outline" className="flex gap-1 items-center"> Communication <span className="ml-1 text-yellow-500" > {
  review.communication rating 
}/5</span> </Badge>) 
}Quality <span className="ml-1 text-yellow-500" > {
  review.quality rating 
}/5</span> </Badge>) 
}Timeliness <span className="ml-1 text-yellow-500" > {
  review.timeliness rating 
}/5</span> </Badge>) 
}{
  review.would work again !== undefined && (<Badge </Badge>) 
}</div> </div>) 
}<DialogTrigger asChild> <Button variant="ghost" size="sm" className="text-muted-foreground"> <Flag className="h-3 w-3 mr-1" /> Report </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Report Review</DialogTitle> <DialogDescription> If you believe this review violates our community guidelines, please provide details below. </DialogDescription> </DialogHeader> <Textarea Cancel </Button> <Button onClick= {
  handleReport 
}disabled= {
  !reportReason.trim () || isReporting 
}> </Button> </DialogFooter> </DialogContent> </Dialog> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewCard.tsx
=======
  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
