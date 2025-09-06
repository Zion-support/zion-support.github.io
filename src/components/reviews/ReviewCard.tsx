<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Star, Flag, User } from 'lucide-react'

import { Review } from '@/types/reviews'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {  Dialog,  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import {  Dialog,  Dialog,
=======

import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from 'lucide-react'
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  Dialog,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",
interface ReviewCardProps {
  review: Review,
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

=======
  DialogTrigger,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
interface ReviewCardProps {
  review: Review
onReport: (reviewId: string, reason: string) => Promise<boolean>
}export function ReviewCard ({
  review, onReport
}: ReviewCardProps) {
  const handleReport = async () => {
  if (!reportReason.trim () ) return;
setIsReporting (true)
const success = await onReport (review.id, reportReason)
setIsReporting (false)
if (success) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState(""),
  const [isReporting, setIsReporting] = useState(false),
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),
  
  const handleReport = async () => {
<<<<<<< HEAD
    if (!reportReason.trim()) return,
    
    setIsReporting(true),
    const success = await onReport(review.id, reportReason),
    setIsReporting(false),
    
=======
    if (!reportReason.trim()) return;
    setIsReporting(true)
    const success = await onReport(review.id, reportReason)
    setIsReporting(false)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (success) {
      setReportReason(""),
      setIsReportDialogOpen(false)
    }
  },
  
  const renderStars = (rating?: number) => {
<<<<<<< HEAD
    if (!rating) return null,
    
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
<<<<<<< HEAD

          />
        ))}
      </div>
    )

=======
>>>>>>>           />
        ))}
=======
    if (!rating) return null
    return (
      <div className='flex'>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
<<<<<<< HEAD
=======

import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from 'lucide-react'
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
=======
          />
        ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
    )
  }
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
<<<<<<< HEAD
          />
        ))}
      </div>
    )
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const getInitials = (name: string,) => {
    return name
      .split(" ")
      .map((n,) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }
<<<<<<< HEAD

=======
  },
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",
interface ReviewCardProps {
  review: Review,
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
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
    
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
        ))}
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }
=======
  },
  
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const getInitials = (name: string,) => {
    return name
      .split(" ")
      .map((n,) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }
=======
<<<<<<< HEAD
  },
  
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>>   return (
=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <AvatarFallback className='bg-muted'>
                <User className='h-4 w-4' />              </AvatarFallback>  }
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
<<<<<<< HEAD
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
<<<<<<< HEAD
=======
>>>>>>>               <AvatarFallback className="bg-muted">
ursor/fix-website-loading-errors-and-merge-6662
        ))}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              <AvatarFallback className="bg-muted">
>>>>>>>                 <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
<<<<<<< HEAD

              )}
            </Avatar>
          )}

=======
                  {review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : '??'}                </AvatarFallback>
              )}
            </Avatar>
          )}
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
                  {review.reviewer_profile?.display_name ?
                    getInitials(review.reviewer_profile.display_name) : "??"}
>>>>>>>               )}
            </Avatar>
          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div>
            <div className='font-medium'>
              {review.is_anonymous
                ? 'Anonymous'
                : review.reviewer_profile?.display_name |'User'}
            </div>
            <div className='text-sm text-muted-foreground'>
              {formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true
              })}
            </div>
          </div>
<<<<<<< HEAD

          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
=======
ursor/fix-website-loading-errors-and-merge-6662
import { Star, Flag, User } from 'lucide-react';
import { Review } from '@/types / reviews';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import {  Dialog,  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components / ui / dialog';
import { Textarea } from '@/components / ui / textarea';
interface ReviewCardProps {
  review: Review;
on_report: (review_id: string, reason: string) => Promise < boolean>;
}export /**
 * ReviewCard - Function description
 */
function ReviewCard() {
  const handle_report = async () => {
  if () return) {
  $2
}
setIsReporting (true);
const success = await on_report (review.id, report_reason);
setIsReporting (false);
// Check condition
if ( {) {
  $2
}
export /**
 * ReviewCard - Function description
 */
function ReviewCard() {
  const [report_reason, setReportReason] = useState ('');
  const [is_reporting, setIsReporting] = useState (false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState (false);
  const handle_report = async () => {
    if () return) {
  $2
}
    setIsReporting (true);
    const success = await on_report (review.id, report_reason);
    setIsReporting (false);
    // Check condition
if ( {) {
  $2
}
      setReportReason ('');
      setIsReportDialogOpen (false);
    }
  }
  const render_stars = (rating?: number) =>: any {
    // Check condition
if (return null) {
  $2
}
    return (
      <div className='flex'>;
        {[1, 2, 3, 4, 5].map (star => (
          <Star;
            key={star}
            className={`h - 4 w - 4 ${star <= rating ? 'fill - yellow - 400 text - yellow - 400' : 'text - gray - 300'}`}
          />))}
      </div>);
  }
  const get_initials = (name: string) =>: any {
    return name;
      .split (' ');
      .map (number => n[0]);
      .join ('')            className={`h - 4 w - 4 ${star <= rating ? "fill - yellow - 400 text - yellow - 400" : "text - gray - 300"}`}
          />))}
      </div>);
  },
  const get_initials = (name: string, ) =>: any {
    return name;
      .split (" ");
      .map ((n, ) => n[0]);
      .join ("");
      .toUpperCase ();
      .substring (0, 2);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return (

    <div className='border rounded - lg p - 4 bg - card'>;
      <div className='flex justify - between items - start mb - 3'>;
        <div className='flex items - center gap - 3'>;
          {review.is_anonymous ? (

  }
      </div>;
    );
  },;

  const getInitials = (name: string,) => {;
    return name;
      .split(" ");
      .map((n,) => n[0]);
      .join("");
      .toUpperCase();
      .substring(0, 2);
  };

  return (


              )}
            </Avatar>;
          )}

    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
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

                <AvatarImage src={review && review.reviewer_profile.avatar_url} alt={review && review.reviewer_profile.display_name} />;
              ) : (;
                <AvatarFallback>;
                  {review && review.reviewer_profile?.display_name ? ;
                    getInitials(review && review.reviewer_profile.display_name) : "??"}

                </AvatarFallback>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  }

  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <AvatarFallback className="bg-muted">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
<<<<<<< HEAD
                  {review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : '??'}                </AvatarFallback>
              )}
            </Avatar>
          )}
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
                  {review.reviewer_profile?.display_name ?
                    getInitials(review.reviewer_profile.display_name) : "??"}
=======
                  {review.reviewer_profile?.display_name ? 
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { Star, Flag, User } from 'lucide-react';
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
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )}
            </Avatar>
          )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div>
            <div className='font-medium'>
              {review.is_anonymous
                ? 'Anonymous'
                : review.reviewer_profile?.display_name |'User'}
            </div>
            <div className='text-sm text-muted-foreground'>
              {formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true
              })}
            </div>
          </div>
=======
          
          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
        <div className="flex">;
          {renderStars(review.rating)}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        </div>
        <div className='flex'>{renderStars(review.rating)}</div>
      </div>
      <div className='mb-4'>
        <p className='text-sm whitespace-pre-wrap'>{review.review_text}</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      {(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
=======
      {(review.communication_rating ||
        review.quality_rating ||
        review.timeliness_rating ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        review.would_work_again !== undefined) && (
        <div className='border-t pt-3 mt-3'>
          <div className='flex flex-wrap gap-2'>
            {review.communication_rating && (
<<<<<<< HEAD


      
=======
              <Badge variant='outline' className='flex gap-1 items-center'>
                Communication
                <span className='ml-1 text-yellow-500'>
                  {review.communication_rating}/5
                </span>
<<<<<<< HEAD
=======
      
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Badge>
            )}

            {review.quality_rating && (
              <Badge variant='outline' className='flex gap-1 items-center'>
                Quality
                <span className='ml-1 text-yellow-500'>
                  {review.quality_rating}/5
                </span>
              </Badge>
            )}

            {review.timeliness_rating && (
              <Badge variant='outline' className='flex gap-1 items-center'>
                Timeliness
                <span className='ml-1 text-yellow-500'>
                  {review.timeliness_rating}/5
                </span>
              </Badge>
            )}
<<<<<<< HEAD
              <Badge variant='outline' className='flex gap - 1 items - center'>;
                Communication;
                <span className='ml - 1 text - yellow - 500'>;
                  {review.communication_rating}/5;
                </span>;
              </Badge>)}
            {review.quality_rating && (
              <Badge variant='outline' className='flex gap - 1 items - center'>;
                Quality;
                <span className='ml - 1 text - yellow - 500'>;
                  {review.quality_rating}/5;
                </span>;
              </Badge>)}
            {review.timeliness_rating && (
              <Badge variant='outline' className='flex gap - 1 items - center'>;
                Timeliness;
                <span className='ml - 1 text - yellow - 500'>;
                  {review.timeliness_rating}/5;
                </span>;
              </Badge>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {review.would_work_again !== undefined && (
              <Badge
                variant={review.would_work_again ? 'default' : 'secondary'}
                className={`${review.would_work_again ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}              >
                {review.would_work_again
                  ? 'Would work again'
                  : 'Would not work again'}              </Badge>
                {review.would_work_again ? "Would work again" : "Would not work again"}
<<<<<<< HEAD

>>>>>>>           

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>
        <div className="flex">
          {renderStars(review.rating)}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>


      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>

          <div>;
            <div className="font - medium">;
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
            </div>;
            <div className="text - sm text - muted - foreground">;
              {formatDistanceToNow (new Date (review.created_at), { add_suffix: true })}
            </div>;
          </div>;
        </div>;
        <div className="flex">;
          {renderStars(review.rating)}
<<<<<<< HEAD

        </div>
=======
>>>>>>>         </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className='flex'>{renderStars(review.rating)}</div>
      </div>
      <div className='mb-4'>
        <p className='text-sm whitespace-pre-wrap'>{review.review_text}</p>
      </div>
<<<<<<< HEAD

=======
      {(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        review.would_work_again !== undefined) && (
        <div className='border-t pt-3 mt-3'>
          <div className='flex flex-wrap gap-2'>
            {review.communication_rating && (
              <Badge variant='outline' className='flex gap-1 items-center'>
                Communication
                <span className='ml-1 text-yellow-500'>
                  {review.communication_rating}/5
                </span>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <div>
=======
          
          <div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>
        <div className="flex">
          {renderStars(review.rating)}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
=======
>>>>>>>       {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>
<<<<<<< HEAD
<<<<<<< HEAD

              </Badge>
            )}
            {review.quality_rating && (

              </Badge>
            )}
            {review.timeliness_rating && (

              </Badge>
            )}
            {review.would_work_again !== undefined && (

=======
>>>>>>>               </Badge>
            )}
            {review.quality_rating && (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              </Badge>
            )}
            {review.quality_rating && (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Badge variant='outline' className='flex gap-1 items-center'>
                Quality
                <span className='ml-1 text-yellow-500'>
                  {review.quality_rating}/5
                </span>
<<<<<<< HEAD
              </Badge>
            )}
            {review.timeliness_rating && (
=======
=======
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              </Badge>
            )}
            {review.timeliness_rating && (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Badge variant='outline' className='flex gap-1 items-center'>
                Timeliness
                <span className='ml-1 text-yellow-500'>
                  {review.timeliness_rating}/5
                </span>
<<<<<<< HEAD
              </Badge>
            )}
            {review.would_work_again !== undefined && (
=======
=======
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              </Badge>
            )}
            {review.would_work_again !== undefined && (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Badge
                variant={review.would_work_again ? 'default' : 'secondary'}
                className={`${review.would_work_again ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}              >
                {review.would_work_again
                  ? 'Would work again'
                  : 'Would not work again'}              </Badge>
                {review.would_work_again ? "Would work again" : "Would not work again"}
          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name |"User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>
        <div className="flex">
          {renderStars(review.rating)}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>
      {(review.communication_rating |review.quality_rating |review.timeliness_rating |review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>
              </Badge>
            )}
            {review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
              </Badge>
            )}
            {review.timeliness_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
              </Badge>
            )}
            {review.would_work_again !== undefined && (
              <Badge
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {review.would_work_again ? "Would work again" : "Would not work again"}
              </Badge>
            )}
          </div>
        </div>
      )}
<<<<<<< HEAD

      <div className='mt-3 flex justify-end'>
=======
<<<<<<< HEAD
              </Badge>
            )}
            {review.quality_rating && (

              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>

              </Badge>
            )}
            {review.timeliness_rating && (

              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>

              </Badge>
            )}
            {review.would_work_again !== undefined && (

              <Badge 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
              <Badge 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {review.would_work_again ? "Would work again" : "Would not work again"}
<<<<<<< HEAD



          <div>;
            <div className='font-medium'>;
              {review && review.is_anonymous;
                ? 'Anonymous';
                : review && review.reviewer_profile?.display_name || 'User'}
            </div>;
            <div className='text-sm text-muted-foreground'>;
              {formatDistanceToNow(new Date(review && review.created_at), {;
                addSuffix: true,;
              })}
            </div>;
          </div>;
        </div>;

        <div className='flex'>{renderStars(review && review.rating)}</div>;
      </div>;

      <div className='mb-4'>;
        <p className='text-sm whitespace-pre-wrap'>{review && review.review_text}</p>;
      </div>;

      {(review && review.communication_rating ||;
        review && review.quality_rating ||;
        review && review.timeliness_rating ||;
        review && review.would_work_again !== undefined) && (;
        <div className='border-t pt-3 mt-3'>;
          <div className='flex flex-wrap gap-2'>;
            {review && review.communication_rating && (;
              <Badge variant='outline' className='flex gap-1 items-center'>;
                Communication;
                <span className='ml-1 text-yellow-500'>;
                  {review && review.communication_rating}/5;
                </span>;
              </Badge>;
=======
              </Badge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </div>
        </div>
      )}
<<<<<<< HEAD





>>>>>>>       <div className='mt-3 flex justify-end'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className='mt-3 flex justify-end'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='ghost' size='sm' className='text-muted-foreground'>
              <Flag className='h-3 w-3 mr-1' />              Report
      <div className="mt-3 flex justify-end">
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Flag className="h-3 w-3 mr-1" />
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="mt-3 flex justify-end">
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Flag className="h-3 w-3 mr-1" />
<<<<<<< HEAD

              Report
<<<<<<< HEAD

=======
>>>>>>>             </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              Report
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
>>>>>>>           </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                If you believe this review violates our community guidelines
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                If you believe this review violates our community guidelines
=======
                If you believe this review violates our community guidelines,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                please provide details below.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              placeholder='Why are you reporting this review?'              value={reportReason}
              onChange={e => setReportReason(e.target.value)}
              className='min-h-[100px]'
              placeholder="Why are you reporting this review?"
              value = {reportReason,}
              onChange = {(e,) => setReportReason(e.target.value),}
<<<<<<< HEAD
<<<<<<< HEAD

=======
              className="min-h-[100px]"
            />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="min-h-[100px]"
            />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                If you believe this review violates our community guidelines, please provide details below.
              </DialogDescription>
            </DialogHeader>
            
            <Textarea
              placeholder="Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD

              className="min-h-[100px]"
            />

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                Cancel
              </Button>

=======
>>>>>>>               className="min-h-[100px]"
            />
            
>>>>>>>             <DialogFooter>
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleReport}
                disabled={!reportReason.trim() |isReporting}              >
                {isReporting ? 'Submitting...' : 'Submit Report'}              </Button>                {isReporting ? "Submitting..." : "Submit Report"}
>>>>>>>               </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
}</div>)
      </div>;
    </div>;
  );
}</div>) ;
};"
return (<div className="border rounded-lg p-4 bg-card"> <div className="flex justify-between items-start mb-3"> <div className="flex items-center gap-3"> {"
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg-muted"> <User className="h-4 w-4" /> </AvatarFallback> </Avatar>) : (<Avatar> {
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="min-h-[100px]"
            />
            
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                Cancel
              </Button>
<<<<<<< HEAD



=======
<<<<<<< HEAD
              <Button
                onClick={handleReport}
                disabled={!reportReason.trim() |isReporting}              >
                {isReporting ? 'Submitting...' : 'Submit Report'}              </Button>                {isReporting ? "Submitting..." : "Submit Report"}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button 
                onClick={handleReport} 
                disabled={!reportReason.trim() || isReporting}
              >
                {isReporting ? "Submitting..." : "Submit Report"}
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
      </div>
    </div>
  )
<<<<<<< HEAD
}</div>)
=======
<<<<<<< HEAD
      </div>;
    </div>;
  );
}</div>) ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};"
return (<div className="border rounded-lg p-4 bg-card"> <div className="flex justify-between items-start mb-3"> <div className="flex items-center gap-3"> {"
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg-muted"> <User className="h-4 w-4" /> </AvatarFallback> </Avatar>) : (<Avatar> {
  review.reviewer profile?.avatar url ? (<AvatarImage src= {
  review.reviewer profile.avatar url
=======
<<<<<<< HEAD
                disabled={!reportReason && reportReason.trim() || isReporting}>;
                {isReporting ? 'Submitting...' : 'Submit Report'}              </Button>                {isReporting ? "Submitting..." : "Submit Report"}
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
    </div>;
  );

              <DialogTitle > Report Review</DialogTitle>;
              <DialogDescription>;
                If you believe this review violates our community guidelines,
                please provide details below.;
              </DialogDescription>;
            </DialogHeader>;
            <Textarea;
              placeholder='Why are you reporting this review?'              value={report_reason}
              on_change={e => setReportReason (e.target.value)}
              className='min - h-[100px]';
              placeholder="Why are you reporting this review?";
              value = {report_reason, }
              on_change = {(e, ) => setReportReason (e.target.value), }
              className="min - h-[100px]";
            />;
            <DialogFooter>;
              <Button;
                variant='outline';
                on_click={() => setIsReportDialogOpen (false)}
              >;
                Cancel;
              </Button>;
              <Button;
                on_click={handle_report}
                disabled={!report_reason.trim () || is_reporting}              >;
                {is_reporting ? 'Submitting...' : 'Submit Report'}              </Button>                {is_reporting ? "Submitting..." : "Submit Report"}
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
    </div>);
}</div>);
}";
return (<div className="border rounded - lg p - 4 bg - card"> <div className="flex justify - between items - start mb - 3"> <div className="flex items - center gap - 3"> {";
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg - muted"> <User className="h - 4 w - 4" /> </AvatarFallback> </Avatar>) : (<Avatar> {
>>>>>>>   review.reviewer profile?.avatar url ? (<AvatarImage src= {
  review.reviewer profile.avatar url;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}alt= {
  review.reviewer profile.display name;
}/>) : (<AvatarFallback> {";
  review.reviewer profile?.display name ? get_initials (review.reviewer profile.display name) : "??";
}</AvatarFallback>);
}</Avatar>) ";
}<div> </div> <div className="text - sm text - muted - foreground"> {
  formatDistanceToNow (new Date (review.created at), {
  add_suffix: true;
}) ";
}</div> </div> </div> <div className="flex"> {
  render_stars (review.rating) ";
}</div> </div> <div className="mb - 4"> <p className="text - sm whitespace - pre - wrap"> {
  review.review text;
}</p> </div> {";
  (review.communication rating || review.quality rating || review.timeliness rating || review.would work again !== undefined) && (<div className="border - t pt - 3 mt - 3"> <div className="flex flex - wrap gap - 2" > {";
  review.communication rating && (<Badge variant="outline" className="flex gap - 1 items - center"> Communication <span className="ml - 1 text - yellow - 500" > {
  review.communication rating;
}/5</span> </Badge>) ";
}Quality <span className="ml - 1 text - yellow - 500" > {
  review.quality rating;
}/5</span> </Badge>) ";
}Timeliness <span className="ml - 1 text - yellow - 500" > {
  review.timeliness rating;
}/5</span> </Badge>);
}{
  review.would work again !== undefined && (<Badge </Badge>);
}</div> </div>) ";
}<DialogTrigger as_child> <Button variant="ghost" size="sm" className="text - muted - foreground"> <Flag className="h - 3 w - 3 mr - 1" /> Report </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle > Report Review</DialogTitle> <DialogDescription> If you believe this review violates our community guidelines, please provide details below. </DialogDescription> </DialogHeader> <Textarea Cancel </Button> <Button on_click={
  handle_report;
}disabled= {
  !report_reason.trim () || is_reporting;
}> </Button> </DialogFooter> </DialogContent> </Dialog> </div> </div>);
}"}
<<<<<<< HEAD

=======
}
;
>>>>>>> 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      </div>
    </div>
  )
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
