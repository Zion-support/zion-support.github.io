<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from "lucide-react",
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
<<<<<<< HEAD
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
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const handleReport = async () => {;
    if (!reportReason && reportReason.trim()) return;
    setIsReporting(true);
    const success = await onReport(review && review.id, reportReason);
    setIsReporting(false);
    if (success) {;
      setReportReason("");
      setIsReportDialogOpen(false);
    }
  };
  const renderStars = (rating?: number) => {;
    if (!rating) return null;



    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
import { useState  } from './react';
import { formatDistanceToNow  } from './date - fns';
import { Star, Flag, User  } from './lucide-react';
import { Review  } from '@/types / reviews';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import {
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from "lucide-react",
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
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
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",

  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

<<<<<<< HEAD
<<<<<<< HEAD
export function ReviewCard({ review, onReport }: ReviewCardProps) {;
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
export function ReviewCard({ review, onReport }: ReviewCardProps) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
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
  const [reportReason, setReportReason] = useState(""),
  const [isReporting, setIsReporting] = useState(false),
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),
  
  const handleReport = async () => {
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleReport = async () => {;
    if (!reportReason && reportReason.trim()) return;


    setIsReporting(true);
    const success = await onReport(review && review.id, reportReason);
    setIsReporting(false);


    if (success) {;
      setReportReason("");
      setIsReportDialogOpen(false);
    }
  };

  const renderStars = (rating?: number) => {;
    if (!rating) return null;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}

      </div>

    )
  },
  


  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

import { useState  } from './react';
import { formatDistanceToNow  } from './date - fns';
import { Star, Flag, User  } from './lucide-react';
import { Review  } from '@/types / reviews';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components / ui / dialog';
import { Textarea  } from '@/components / ui / textarea';
interface ReviewCardProps {
  review: Review;
  on_report: (review_id: string, reason: string) => Promise < boolean>;
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
  const render_stars = (rating?: number) =>: any {
    // Check condition
if (return null) {
  $2
}
=======
  const renderStars = (rating?: number) => {
    if (!rating) return null;
  const [reportReason, setReportReason] = useState(""),
  const [isReporting, setIsReporting] = useState(false),
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),
  
  const handleReport = async () => {
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
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map ((star) => (
          <Star;
            key={star}
<<<<<<< HEAD
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;

    
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
<<<<<<< HEAD
);
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
      </div>;
    );
  };
  const getInitials = (name: string) => {;

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
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
      .substring(0, 2),;
  },;
  ;
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

      .substring(0, 2)
  },
  

<<<<<<< HEAD
.substring(0, 2);
  }
      .substring(0, 2);
  }
=======
      .substring(0, 2);
  }
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      .substring(0, 2)
  },
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : "??"}
                </AvatarFallback>
                  {review.reviewer_profile?.display_name ? 
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
                  {review.reviewer_profile?.display_name ? 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    getInitials(review.reviewer_profile.display_name) : "??"}

                </AvatarFallback>;
              )}
            </Avatar>;
          )}
<<<<<<< HEAD


          


{review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : "??"}
                </AvatarFallback>
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>;

              )}
            </Avatar>
          )}

=======

                  {review.reviewer_profile?.display_name ? 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>;
              )}
            </Avatar>
          )}
          
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>
            <div className="font-medium">
              {review.is_anonymous
                ? "Anonymous"
<<<<<<< HEAD
<<<<<<< HEAD

              {formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true
              })}
            </div>
          </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                : review.reviewer_profile?.display_name |"User"}
            </div>
            <div className="text-sm text-muted-foreground">


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
        <div className="flex">;
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
        <div className="flex">
: review.reviewer_profile?.display_name |"User"}
            </div>
            <div className="text-sm text-muted-foreground">
{formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true
              })}
            </div>
          </div>

          {renderStars(review.rating)}

          {renderStars(review.rating)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
        </div>
        <div className="flex">

          {renderStars(review.rating)}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <div className="flex">{renderStars(review.rating)}</div>
      </div>
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
              )}
            </Avatar>;
          )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        review.would_work_again !== undefined) && (
        <div className="border - t pt - 3 mt - 3">;
          <div className="flex flex - wrap gap - 2">;
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (

        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
            {review.communication_rating && (

        review.would_work_again !== undefined) && (
        <div className="border - t pt - 3 mt - 3">;
          <div className="flex flex - wrap gap - 2">;
            {review.communication_rating && (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {review.communication_rating && (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {review.communication_rating && (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {review.would_work_again !== undefined && (
              <Badge;
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg - green - 100 text - green - 800 hover:bg - green - 200" : "bg - gray - 100 text - gray - 800 hover:bg - gray - 200"}`}
              >;
                {review.would_work_again;
                  ? "Would work again";
                  : "Would not work again"}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>;
            <div className="font-medium">;
              {review && review.is_anonymous ? "Anonymous" : review && review.reviewer_profile?.display_name || "User"}
            </div>;
            <div className="text-sm text-muted-foreground">;
              {formatDistanceToNow(new Date(review && review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex">;
          {renderStars(review && review.rating)}
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="mb-4">;
        <p className="text-sm whitespace-pre-wrap">{review && review.review_text}</p>;
      </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className="mb-4">;
        <p className="text-sm whitespace-pre-wrap">{review && review.review_text}</p>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {(review && review.communication_rating || review && review.quality_rating || review && review.timeliness_rating || review && review.would_work_again !== undefined) && (;
        <div className="border-t pt-3 mt-3">;
          <div className="flex flex-wrap gap-2">;
            {review && review.communication_rating && (;
              <Badge variant="outline" className="flex gap-1 items-center">;
                Communication;
                <span className="ml-1 text-yellow-500">{review && review.communication_rating}/5</span>;
              </Badge>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
{(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
        review.would_work_again !== undefined) && (
      {(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
        review.would_work_again !== undefined) && (
      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
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
          </div>;
        </div>;
          </div>;
        </div>;
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
If you believe this review violates our community guidelines
                please provide details below.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              placeholder="Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="min-h-[100px]"
            />

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsReportDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleReport}
disabled={!reportReason.trim() |isReporting}
              >
                {isReporting ? "Submitting..." : "Submit Report"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;


<<<<<<< HEAD
      )}


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
      <div className="mt-3 flex justify-end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger asChild>;
            <Button variant="ghost" size="sm" className="text-muted-foreground">;
              <Flag className="h-3 w-3 mr-1" />;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
          </div>;
        </div>)}
      <div className="mt - 3 flex justify - end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger as_child>;
            <Button variant="ghost" size="sm" className="text - muted - foreground">;
              <Flag className="h - 3 w - 3 mr - 1" />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Report;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
<<<<<<< HEAD
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
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<< HEAD
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

  )
}

<<<<<<< HEAD
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
}
  );
}
}
;

  );
}
  )
}
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </div>);
}
  )
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
