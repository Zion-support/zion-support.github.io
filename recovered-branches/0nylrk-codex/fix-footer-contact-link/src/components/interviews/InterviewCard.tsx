<<<<<<< HEAD
<<<<<<< HEAD


import React, { useState } from "react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Interview } from "@/types/interview",
import { useAuth } from "@/hooks/useAuth",
import { useInterviews } from "@/hooks/useInterviews",
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Interview} from "@/types/interview";
import {useAuth} from "@/hooks/useAuth";
import {useInterviews} from "@/hooks/useInterviews";
import {format, formatDistanceToNow, isPast, parseISO} from "date-fns";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Clock, ExternalLink, MessageSquare, Video, X} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {InterviewResponseForm} from "./InterviewResponseForm";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Interview } from "@/types/interview",
import { useAuth } from "@/hooks/useAuth",
import { useInterviews } from "@/hooks/useInterviews",
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react",
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h: mm a')
  // Calculate when interview ends
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a')
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast(interviewDate);
  const getRelativeTime = () => {
    if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}

export function InterviewCard(): any ({ interview, onRefresh }: InterviewCardProps) {;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}

export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  
  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;

  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h: mm a'),

  // Calculate when interview ends
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a'),
  
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast(interviewDate);
  
  const getRelativeTime = () => {
    if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {
      return `Starts in ${formatDistanceToNow(interviewDate)}`
    }
  };
import React, { useState } from "react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Interview } from "@/types/interview",
import { useAuth } from "@/hooks/useAuth",
import { useInterviews } from "@/hooks/useInterviews",
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react",
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {

  interview: Interview

  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {
=======
import React, { useState } from "react";"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Badge} from "@/components/ui/badge";"
import {Interview} from "@/types/interview";"
import {useAuth} from "@/hooks/useAuth";"
import {useInterviews} from "@/hooks/useInterviews";"
import {format, formatDistanceToNow, isPast, parseISO} from "date-fns";"
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";"
import {Clock, ExternalLink, MessageSquare, Video, X} from "lucide-react";"
import {toast} from "@/components/ui/use-toast";"
import {InterviewResponseForm} from "./InterviewResponseForm";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD

  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h: mm a')
  // Calculate when interview ends
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a')
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast(interviewDate);
  const getRelativeTime = () => {
    if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {
      return `Starts in ${formatDistanceToNow(interviewDate)}`
    }
  }
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true)
    const success = await respondToInterview(interview.id, {
      interview_id: interview.id
      status
    });
import { toast } from "@/components/ui/use-toast",
import { InterviewResponseForm } from "./InterviewResponseForm",
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
import React, { useState } from "react",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Interview } from "@/types/interview",;
import { useAuth } from "@/hooks/useAuth",;
import { useInterviews } from "@/hooks/useInterviews",;
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns",;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { InterviewResponseForm } from "./InterviewResponseForm",;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState } from './react';
=======
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);import React, { useState } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [isLoading, setIsLoading] = useState(false);import React, { useState } from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const [isLoading, setIsLoading] = useState(false);


import React, { useState } from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Interview } from '@/types / interview';
import { use_auth } from '@/hooks / use_auth';
import { use_interviews } from '@/hooks / use_interviews';
import { format, formatDistanceToNow, is_past, parseISO } from './date - fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components / ui / alert - dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components / ui / dialog';
import { Clock, ExternalLink, MessageSquare, Video, X } from './lucide-react';
import { toast } from '@/components / ui / use - toast';
=======

import React, { useState } from './react';'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import { Interview } from '@/types / interview';'
import { use_auth } from '@/hooks / use_auth';'
import { use_interviews } from '@/hooks / use_interviews';'
import { format, formatDistanceToNow, is_past, parseISO } from './date - fns';'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components / ui / alert - dialog';'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components / ui / dialog';'
import { Clock, ExternalLink, MessageSquare, Video, X } from './lucide-react';'
import { toast } from '@/components / ui / use - toast';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { InterviewResponseForm } from './InterviewResponseForm';
interface InterviewCardProps {}
  interview: Interview,
  on_refresh: () => Promise < void>;
}
export /**;
 * InterviewCard - Function description;
 */
function InterviewCard() {}
  const { user } = use_auth ();
  const { respondToInterview, cancel_interview } = use_interviews ();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
;
  const is_client = user?.id === interview.client_id;
  const is_talent = user?.id === interview.talent_id;
;
  // Format interview date and time;
  const interview_date = parseISO (interview.scheduled_date);'
  const formatted_date = format (interview_date, 'EEEE, MMMM d');'
  const formatted_time = format (interview_date, 'h: mm a'),
  // Calculate when interview ends;
  const end_time = new Date (interview_date);
  end_time.set_minutes (end_time.get_minutes () + interview.duration_minutes);'
  const formattedEndTime = format (end_time, 'h: mm a'),'
  const isInterviewPending = interview.status === 'requested';'
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !is_past (interview_date) && is_past (new Date (interview_date.get_time () - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = is_past (interview_date);
;
  const getRelativeTime = () =>: any {}
    if () {) {}
  $2;
}
      return `Took place ${formatDistanceToNow (interview_date)} ago`;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    } else {}`
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, {
      interview_id: interview.id,
      status
    }),
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (success) {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    } else {
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }




  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
<<<<<<< HEAD
    }),    if (success) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    }),
    

    if (success) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
;
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
=======
    

    if (success) {}
      toast({}`
        title: `Interview ${status}``
        description: `You have successfully ${status} the interview request.`

;'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsLoading (true),
    const success = await respondToInterview (interview.id, {}
      interview_id: interview.id,
      status;
    });
;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({}`
        title: `Interview ${status}`,`
        description: `You have successfully ${status} the interview request.`;
<<<<<<< HEAD
      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      toast({
        title: "Error"
        description: "Failed to respond to the interview request. Please try again."
        variant: "destructive"
      })
    }
    setIsLoading(false)

<<<<<<< HEAD
      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },

  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (success) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


    if (success) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({
        title: "Interview cancelled"
        description: "The interview has been cancelled successfully."
      toast ({
        title: "Error",
        description: "Failed to respond to the interview request. Please try again.",
        variant: "destructive";
<<<<<<< HEAD
      });
    }
<<<<<<< HEAD
    setIsLoading(false)

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
    } else {}
      toast ({"
        title: "Error","
        description: "Failed to respond to the interview request. Please try again.","
        variant: "destructive";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      });
    }
    setIsLoading (false);
  }
;
  const handleCancelInterview = async () => {}
    setIsLoading (true);
    const success = await cancel_interview (interview.id);
;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Interview cancelled","
        description: "The interview has been cancelled successfully.";
      });
      await on_refresh ();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    setIsLoading (false);
  }
;
  const handleCancelInterview = async () => {
    setIsLoading (true);
    const success = await cancel_interview (interview.id);
;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Interview cancelled",
        description: "The interview has been cancelled successfully.";
      });
      await on_refresh ();
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } else {


  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    } else {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const isClient = user?.id === interview && interview.client_id;
  const isTalent = user?.id === interview && interview.talent_id;

  // Format interview date and time;
<<<<<<< HEAD
  const interviewDate = parseISO(interview && interview.scheduled_date);'
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');'
=======
  const interviewDate = parseISO(interview && interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const formattedTime = format(interviewDate, 'h: mm a'),;

  // Calculate when interview ends;
  const endTime = new Date(interviewDate);
<<<<<<< HEAD
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);'
  const formattedEndTime = format(endTime, 'h: mm a'),;
'
  const isInterviewPending = interview && interview.status === 'requested';'
=======
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a'),;

  const isInterviewPending = interview && interview.status === 'requested';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const isInterviewConfirmed = interview && interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate && interviewDate.getTime() - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = isPast(interviewDate);

  const getRelativeTime = () => {;
<<<<<<< HEAD
    if (isPast(interviewDate)) {;`
      return `Took place ${formatDistanceToNow(interviewDate)} ago`;
    } else {;`
=======
    if (isPast(interviewDate)) {;
      return `Took place ${formatDistanceToNow(interviewDate)} ago`;
    } else {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return `Starts in ${formatDistanceToNow(interviewDate)}`;
    }
  };


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return isInterviewLive ? 
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : 
          <Badge className="bg-green-600">Confirmed</Badge>,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case 'declined':
        return <Badge variant="destructive">Declined</Badge>,
      case 'rescheduled':
        return <Badge className="bg-blue-500">Rescheduled</Badge>,
      case 'completed':
        return <Badge className="bg-green-700">Completed</Badge>,
      case 'cancelled':
=======
        return isInterviewLive ? "
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : "
          <Badge className="bg-green-600">Confirmed</Badge>,
'
      case 'declined':"
        return <Badge variant="destructive">Declined</Badge>,'
      case 'rescheduled':"
        return <Badge className="bg-blue-500">Rescheduled</Badge>,'
      case 'completed':"
        return <Badge className="bg-green-700">Completed</Badge>,'
      case 'cancelled':"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>,
      default:
        return <Badge>{interview.status}</Badge>
<<<<<<< HEAD
    }
  }
  const getOtherPartyName = () => {
    if (isClient) {
      return interview.talent_name |'Talent'
    } else {
      return interview.client_name |'Client'
    }
  }
  };
=======

  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },;
'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview && interview.id, { ;
      interview_id: interview && interview.id, ;
      status ;
    });

    if (success) {;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: `Interview ${status}`,,
  description: `You have successfully ${status} the interview request.`;
=======
      toast({;`
        title: `Interview ${status}`,;`
        description: `You have successfully ${status} the interview request.`;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: `Interview ${status}`,;
        description: `You have successfully ${status} the interview request.`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Error",,
  description: "Failed to respond to the interview request. Please try again.",;
=======
      toast({;"
        title: "Error",;"
        description: "Failed to respond to the interview request. Please try again.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: "Failed to respond to the interview request. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      });
    }
    setIsLoading(false);
  };

  const handleCancelInterview = async () => {;
    setIsLoading(true);
    const success = await cancelInterview(interview && interview.id);

    if (success) {;
<<<<<<< HEAD
      toast({;
        title: "Interview cancelled",;
        description: "The interview has been cancelled successfully.";
      });
      await onRefresh();
    } else {;
      toast({;
<<<<<<< HEAD
        title: "Error",,
  description: "Failed to cancel the interview. Please try again.",;
=======
      toast({;"
        title: "Interview cancelled",;"
        description: "The interview has been cancelled successfully.";
      });
      await onRefresh();
    } else {;
      toast({;"
        title: "Error",;"
        description: "Failed to cancel the interview. Please try again.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: "Failed to cancel the interview. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      });
    }
    setIsLoading(false);
  };

  const getStatusBadge = () => {;
    switch (interview && interview.status) {;'
      case 'requested':;"
        return <Badge className="bg-amber-500">Pending</Badge>;'
      case 'confirmed':;
        return isInterviewLive ? ;"
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : ;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <Badge className="bg-green-600">Confirmed</Badge>;
      case 'declined':;
        return <Badge variant="destructive">Declined</Badge>;
      case 'rescheduled':;
        return <Badge className="bg-blue-500">Rescheduled</Badge>;
      case 'completed':;
        return <Badge className="bg-green-700">Completed</Badge>;
      case 'cancelled':;
=======
"
          <Badge className="bg-green-600">Confirmed</Badge>;'
      case 'declined':;"
        return <Badge variant="destructive">Declined</Badge>;'
      case 'rescheduled':;"
        return <Badge className="bg-blue-500">Rescheduled</Badge>;'
      case 'completed':;"
        return <Badge className="bg-green-700">Completed</Badge>;'
      case 'cancelled':;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:;
        return <Badge>{interview && interview.status}</Badge>;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  };

  const getOtherPartyName = () => {;
    if (isClient) {;
      return interview && interview.talent_name || 'Talent';
    } else {;
      return interview && interview.client_name || 'Client';

    }

  },




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2 relative">;
        <div className="absolute right-4 top-4">;
          {getStatusBadge()}
        </div>;
        <CardTitle className="text-lg">{interview && interview.title}</CardTitle>;
        <p className="text-sm text-muted-foreground">;
          with {getOtherPartyName()}

        </p>;
      </CardHeader>;

      <CardContent className="pt-2">;
        <div className="space-y-3">;
          <div className="flex items-start gap-3">;
            <Clock className="h-4 w-4 mt-0 && 0.5 text-muted-foreground" />;
            <div>;
              <p className="font-medium">{formattedDate}</p>;
              <p className="text-sm text-muted-foreground">;
                {formattedTime} - {formattedEndTime} ({interview && interview.duration_minutes} minutes);
    }
  }
  return (

  
  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;

  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h: mm a'),

  // Calculate when interview ends
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a'),
  
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast(interviewDate);
  
  const getRelativeTime = () => {
    if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {
      return `Starts in ${formatDistanceToNow(interviewDate)}`
    }
  };
import React, { useState } from "react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Interview } from "@/types/interview",
import { useAuth } from "@/hooks/useAuth",
import { useInterviews } from "@/hooks/useInterviews",
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react",
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {

  interview: Interview

  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h: mm a')
  // Calculate when interview ends
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a')
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast(interviewDate);
  const getRelativeTime = () => {
    if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}

export function InterviewCard(): any ({ interview, onRefresh }: InterviewCardProps) {;

  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    } else {
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
    }),
    
    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
  },

  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
    if (success) {
      toast({
        title: "Interview cancelled"
        description: "The interview has been cancelled successfully."
  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>,
      case 'confirmed':
      case 'declined':
        return <Badge variant="destructive">Declined</Badge>,
      case 'rescheduled':
        return <Badge className="bg-blue-500">Rescheduled</Badge>,
      case 'completed':
        return <Badge className="bg-green-700">Completed</Badge>,
      case 'cancelled':
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>,
      default:
        return <Badge>{interview.status}</Badge>
  }
  };

  };

  },;

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview && interview.id, { ;
      interview_id: interview && interview.id, ;
      status ;
    });

    if (success) {;
      toast({;
        title: `Interview ${status}`,;
        description: `You have successfully ${status} the interview request.`;
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
    if (success) {;
      toast({;
        title: "Interview cancelled",;
        description: "The interview has been cancelled successfully.";
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
    } else {
      });
    }
    setIsLoading (false);
  }
;
  const handleCancelInterview = async () => {
    setIsLoading (true);
    const success = await cancel_interview (interview.id);
;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Interview cancelled",
        description: "The interview has been cancelled successfully.";
      });
      await on_refresh ();
    } else {
          <Badge className="bg-green-600">Confirmed</Badge>;
      case 'declined':;
        return <Badge variant="destructive">Declined</Badge>;
      case 'rescheduled':;
        return <Badge className="bg-blue-500">Rescheduled</Badge>;
      case 'completed':;
        return <Badge className="bg-green-700">Completed</Badge>;
      case 'cancelled':;
=======
  };

  const getOtherPartyName = () => {;
    if (isClient) {;'
      return interview && interview.talent_name || 'Talent';
    } else {;'
      return interview && interview.client_name || 'Client';
"
import React, { useState } from "react","
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge","
import { Interview } from "@/types/interview","
import { useAuth } from "@/hooks/useAuth","
import { useInterviews } from "@/hooks/useInterviews","
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns","
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog","
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog","
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react",";
import { toast } from "@/components/ui/use-toast";"
import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {}
  interview: Interview;
  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {};
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;
  // Format interview date and time;
  const interviewDate = parseISO(interview.scheduled_date);'
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');'
  const formattedTime = format(interviewDate, 'h: mm a')
  // Calculate when interview ends;
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);'
  const formattedEndTime = format(endTime, 'h: mm a')'
  const isInterviewPending = interview.status === 'requested';'
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = isPast(interviewDate);
  const getRelativeTime = () => {}
    if (isPast(interviewDate)) {}`
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {}
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}

export function InterviewCard(): any ({ interview, onRefresh }: InterviewCardProps) {;

  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    } else {}`
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }
'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {}
    setIsLoading(true),
    const success = await respondToInterview(interview.id, {}
      interview_id: interview.id, 
      status;
    }),
    
    if (success) {}
      toast({}`
        title: `Interview ${status}``
        description: `You have successfully ${status} the interview request.`
  },

  const handleCancelInterview = async () => {}
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
    if (success) {}
      toast({"
        title: "Interview cancelled""
        description: "The interview has been cancelled successfully."
  const getStatusBadge = () => {}
    switch (interview.status) {'
      case 'requested':"
        return <Badge className="bg-amber-500">Pending</Badge>,'
      case 'confirmed':'
      case 'declined':"
        return <Badge variant="destructive">Declined</Badge>,'
      case 'rescheduled':"
        return <Badge className="bg-blue-500">Rescheduled</Badge>,'
      case 'completed':"
        return <Badge className="bg-green-700">Completed</Badge>,'
      case 'cancelled':"
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>,
      default:
        return <Badge>{interview.status}</Badge>
  }
  };

  };

  },;
'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview && interview.id, { ;
      interview_id: interview && interview.id, ;
      status ;
    });

    if (success) {;
      toast({;`
        title: `Interview ${status}`,;`
        description: `You have successfully ${status} the interview request.`;
      await onRefresh();
    } else {;
      toast({;"
        title: "Error",;"
        description: "Failed to respond to the interview request. Please try again.",;"
        variant: "destructive";
      });
    }
    setIsLoading(false);
    if (success) {;
      toast({;"
        title: "Interview cancelled",;"
        description: "The interview has been cancelled successfully.";
      await onRefresh();
    } else {;
      toast({;"
        title: "Error",;"
        description: "Failed to cancel the interview. Please try again.",;"
        variant: "destructive";
      });
    }
    setIsLoading(false);
      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
    } else {}
      });
    }
    setIsLoading (false);
  }
;
  const handleCancelInterview = async () => {}
    setIsLoading (true);
    const success = await cancel_interview (interview.id);
;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Interview cancelled","
        description: "The interview has been cancelled successfully.";
      });
      await on_refresh ();
    } else {"
          <Badge className="bg-green-600">Confirmed</Badge>;'
      case 'declined':;"
        return <Badge variant="destructive">Declined</Badge>;'
      case 'rescheduled':;"
        return <Badge className="bg-blue-500">Rescheduled</Badge>;'
      case 'completed':;"
        return <Badge className="bg-green-700">Completed</Badge>;'
      case 'cancelled':;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:;
        return <Badge>{interview && interview.status}</Badge>;
    }
    }
  }

  return ("
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
      <CardHeader className="pb-2 relative">;"
        <div className="absolute right-4 top-4">;
          {getStatusBadge()}
        </div>;"
        <CardTitle className="text-lg">{interview && interview.title}</CardTitle>;"
        <p className="text-sm text-muted-foreground">;
          with {getOtherPartyName()}
<<<<<<< HEAD
        </p>;
      </CardHeader>;
      ;
      <CardContent className="pt-2">;
        <div className="space-y-3">;
          <div className="flex items-start gap-3">;
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />;
            <div>;
              <p className="font-medium">{formattedDate}</p>;
              <p className="text-sm text-muted-foreground">;
                {formattedTime} - {formattedEndTime} ({interview.duration_minutes} minutes);
              </p>;
              <p className="text-xs text-muted-foreground mt-1">;
                {getRelativeTime()}
              </p>;
            </div>;
          </div>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
          {interview && interview.notes && (;
            <div className="flex items-start gap-3">;
              <MessageSquare className="h-4 w-4 mt-0 && 0.5 text-muted-foreground" />;
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;
            </div>;
          )}
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

            </div>;
          )}
        </div>;
      </CardContent>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
      <CardFooter className="pt-2">;"
=======

      <CardFooter className="pt-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="grid grid-cols-1 gap-2 w-full">;
          {/* For clients with pending requests */}
          {isClient && isInterviewPending && (;
            <AlertDialog>;
<<<<<<< HEAD
              <AlertDialogTrigger asChild>;"
                <Button variant="outline" size="sm" className="w-full">;"
                  <X className="h-4 w-4 mr-2" /> Cancel Request;
                </Button>;
              </AlertDialogTrigger>;"
              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                <AlertDialogHeader>;
                  <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      toast ({
        title: "Error",
        description: "Failed to cancel the interview. Please try again.",
        variant: "destructive";
      });
    }
    setIsLoading (false);
  }
;
  const getStatusBadge = () =>: any {
    switch (interview.status) {
      case 'requested':;
        return <Badge className="bg - amber - 500">Pending</Badge>;
      case 'confirmed':;
        return isInterviewLive ?;
          <Badge className="bg - green - 500 animate - pulse">Live Now</Badge> :;
          <Badge className="bg - green - 600">Confirmed</Badge>;
      case 'declined':;
        return <Badge variant="destructive">Declined</Badge>;
      case 'rescheduled':;
        return <Badge className="bg - blue - 500">Rescheduled</Badge>;
      case 'completed':;
        return <Badge className="bg - green - 700">Completed</Badge>;
      case 'cancelled':;
        return <Badge variant="outline" className="border - destructive text - destructive">Cancelled</Badge>;
      default:;
        return <Badge>{interview.status}</Badge>;
    }
  }
;
  const getOtherPartyName = () =>: any {
    // Check condition
if ( {) {
  $2
}
      return interview.talent_name || 'Talent';
    } else {
      return interview.client_name || 'Client';
    }
<<<<<<< HEAD
  },

=======
=======
        return <Badge>{interview.status}</Badge>;
    }
  };
  const getOtherPartyName = () => {;
    if (isClient) {;
      return interview.talent_name || 'Talent';
    } else {;
      return interview.client_name || 'Client';
    }
  },
=======
      return interview.client_name || 'Client';
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  }
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2 relative">
=======


  }
;
  return ("
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">"
      <CardHeader className="pb-2 relative">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="absolute right-4 top-4">
          {getStatusBadge()}
        </div>"
        <CardTitle className="text-lg">{interview.title}</CardTitle>"
        <p className="text-sm text-muted-foreground">
          with {getOtherPartyName()}
        </p>
      </CardHeader>"
      <CardContent className="pt-2">"
        <div className="space-y-3">"
          <div className="flex items-start gap-3">"
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
            <div>"
              <p className="font-medium">{formattedDate}</p>"
              <p className="text-sm text-muted-foreground">
                {formattedTime} - {formattedEndTime} ({interview.duration_minutes} minutes)
              </p>"
=======
              <AlertDialogTrigger asChild>;
                <Button variant="outline" size="sm" className="w-full">;
                  <X className="h-4 w-4 mr-2" /> Cancel Request;
                </Button>;
              </AlertDialogTrigger>;
              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                <AlertDialogHeader>;
                  <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle>;

  }
;
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2 relative">
        <div className="absolute right-4 top-4">
          {getStatusBadge()}
        </div>
        <CardTitle className="text-lg">{interview.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          with {getOtherPartyName()}
        </p>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
            <div>
              <p className="font-medium">{formattedDate}</p>
              <p className="text-sm text-muted-foreground">
                {formattedTime} - {formattedEndTime} ({interview.duration_minutes} minutes)
              </p>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <p className="text-xs text-muted-foreground mt-1">
                {getRelativeTime()}
              </p>
            </div>
          </div>
<<<<<<< HEAD
          {interview.meeting_platform && ("
            <div className="flex items-center gap-3">"
              <Video className="h-4 w-4 text-muted-foreground" />
              <div>"
=======
          {interview.meeting_platform && (
            <div className="flex items-center gap-3">
              <Video className="h-4 w-4 text-muted-foreground" />
              <div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <p className="font-medium capitalize">{interview.meeting_platform}</p>
              </div>
            </div>
          )}
<<<<<<< HEAD
          {interview.notes && ("
            <div className="flex items-start gap-3">"
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />"
=======
          {interview.notes && (
            <div className="flex items-start gap-3">
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <p className="text-sm line-clamp-2">{interview.notes}</p>
            </div>
          )}
        </div>
<<<<<<< HEAD
      </CardContent>"
      <CardFooter className="pt-2">"
        <div className="grid grid-cols-1 gap-2 w-full">
          {/* For clients with pending requests */}
<<<<<<< HEAD
=======
      </CardContent>
      <CardFooter className="pt-2">
        <div className="grid grid-cols-1 gap-2 w-full">
          {/* For clients with pending requests */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {isClient && isInterviewPending && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  <X className="h-4 w-4 mr-2" /> Cancel Request
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to cancel this interview request? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go Back</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleCancelInterview}
                    disabled={isLoading}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Cancel Interview
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
;
<<<<<<< HEAD
          
;
=======
=======
  }
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
      <CardHeader className="pb - 2 relative">;
        <div className="absolute right - 4 top - 4">;
          {getStatusBadge ()}
        </div>;
        <CardTitle className="text - lg">{interview.title}</CardTitle>;
        <p className="text - sm text - muted - foreground">;
          with {getOtherPartyName ()}
        </p>;
      </CardHeader>;
      <CardContent className="pt - 2">;
        <div className="space - y-3">;
          <div className="flex items - start gap - 3">;
            <Clock className="h - 4 w - 4 mt - 0.5 text - muted - foreground" />;
            <div>;
              <p className="font - medium">{formatted_date}</p>;
              <p className="text - sm text - muted - foreground">;
                {formatted_time} - {formattedEndTime} ({interview.duration_minutes} minutes);
              </p>;
              <p className="text - xs text - muted - foreground mt - 1">;
                {getRelativeTime ()}
              </p>;
            </div>;
          </div>;
          {interview.meeting_platform && (
            <div className="flex items - center gap - 3">;
              <Video className="h - 4 w - 4 text - muted - foreground" />;
              <div>;
                <p className="font - medium capitalize">{interview.meeting_platform}</p>;
              </div>;
            </div>)}
          {interview.notes && (
            <div className="flex items - start gap - 3">;
              <MessageSquare className="h - 4 w - 4 mt - 0.5 text - muted - foreground" />;
              <p className="text - sm line - clamp - 2">{interview.notes}</p>;
            </div>)}
        </div>;
      </CardContent>;
      <CardFooter className="pt - 2">;
        <div className="grid grid - cols - 1 gap - 2 w - full">;
          {/* For clients with pending requests */}
          {is_client && isInterviewPending && (
            <AlertDialog>;
              <AlertDialogTrigger as_child>;
                <Button variant="outline" size="sm" className="w - full">;
                  <X className="h - 4 w - 4 mr - 2" /> Cancel Request;
                </Button>;
              </AlertDialogTrigger>;
              <AlertDialogContent className="bg - zion - blue - dark border - zion - blue - light text - white">;
                <AlertDialogHeader>;
                  <AlertDialogTitle > Cancel Interview Request</AlertDialogTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


;

=======

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <AlertDialogDescription>;
                    Are you sure you want to cancel this interview request? This action cannot be undone.;
                  </AlertDialogDescription>;
                </AlertDialogHeader>;
                <AlertDialogFooter>;

<<<<<<< HEAD

<<<<<<< HEAD
=======
                  <AlertDialogCancel>Go Back</AlertDialogCancel>;
                  <AlertDialogAction ;
                    onClick={handleCancelInterview} ;
                    disabled={isLoading}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
                  >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <AlertDialogCancel > Go Back</AlertDialogCancel>;
                  <AlertDialogAction;
                    on_click={handleCancelInterview}
                    disabled={is_loading}
                    className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
                  >;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    Cancel Interview;
                  </AlertDialogAction>;
                </AlertDialogFooter>;
              </AlertDialogContent>;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
          
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;

;
;
          
;
            </AlertDialog>;          )}
          ;
<<<<<<< HEAD


          
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {/* For talents with pending requests */}
          {isTalent && isInterviewPending && (;"
            <div className="grid grid-cols-2 gap-2">;
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={isLoading}>;
                Respond;
              </Button>;'"
              <Button variant="outline" onClick={() => handleRespondToInterview('declined')} disabled={isLoading}>;
                Decline;
              </Button>;
<<<<<<< HEAD
            </div>;
          )}

            </AlertDialog>)}
          {/* For talents with pending requests */}
          {is_talent && isInterviewPending && (
            <div className="grid grid - cols - 2 gap - 2">;
              <Button on_click={() => setIsResponseDialogOpen (true)} disabled={is_loading}>;
                Respond;
              </Button>;
              <Button variant="outline" on_click={() => handleRespondToInterview ('declined')} disabled={is_loading}>;
                Decline;
              </Button>;
            </div>)}

          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (
            <>;
              {interview.meeting_link ? (


          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
            <>;
              {interview && interview.meeting_link ? (;
                <Button className="w-full" asChild disabled={!isInterviewLive}>;
                  <a href={interview && interview.meeting_link} target="_blank" rel="noopener noreferrer">;
                    <Video className="h-4 w-4 mr-2" /> ;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
<<<<<<< HEAD
=======
          {/* For talents with pending requests */}
          {isTalent && isInterviewPending && (
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={isLoading}>
                Respond
              </Button>
              <Button variant="outline" onClick={() => handleRespondToInterview('declined')} disabled={isLoading}>
                Decline
              </Button>
            </div>
          )}
          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (
            <>
              {interview.meeting_link ? (
                <Button className="w-full" asChild disabled={!isInterviewLive}>
                  <a href={interview.meeting_link} target="_blank" rel="noopener noreferrer">
                    <Video className="h-4 w-4 mr-2" />
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" disabled={!isInterviewLive}>
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (
            <>;
              {interview.meeting_link ? (

          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
            <>;
              {interview && interview.meeting_link ? (;"
                <Button className="w-full" asChild disabled={!isInterviewLive}>;"
                  <a href={interview && interview.meeting_link} target="_blank" rel="noopener noreferrer">;"
                    <Video className="h-4 w-4 mr-2" /> ;'
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <ExternalLink className="h-3 w-3 ml-2" />;
                  </a>;
                </Button>;
              ) : (;"
                <Button className="w-full" disabled={!isInterviewLive}>;"
                  <Video className="h-4 w-4 mr-2" /> ;

"
                  <Video className="h-4 w-4 mr-2" /> 

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                    <ExternalLink className="h-3 w-3 ml-2" />;
                  </a>;
                </Button>;
              ) : (;
                <Button className="w-full" disabled={!isInterviewLive}>;
                  <Video className="h-4 w-4 mr-2" /> ;


                  <Video className="h-4 w-4 mr-2" /> 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}
              
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
                  <Video className="h-4 w-4 mr-2" />
                  <Video className="h-4 w-4 mr-2" /> 
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>
              )}
              
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <AlertDialog>
=======
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}              <AlertDialog>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}              <AlertDialog>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


              <AlertDialog>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <X className="h-4 w-4 mr-2" /> Cancel Interview
=======



              <AlertDialog>
                <AlertDialogTrigger asChild>"
                  <Button variant="outline" size="sm" className="w-full mt-2">"
                    <X className="h-4 w-4 mr-2" /> Cancel Interview;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </Button>
                </AlertDialogTrigger>"
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Go Back</AlertDialogCancel>
<<<<<<< HEAD
                    <AlertDialogAction
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      onClick={handleCancelInterview}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                    <AlertDialogAction;
                      onClick={handleCancelInterview}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              <AlertDialog>;
                <AlertDialogTrigger asChild>;"
                  <Button variant="outline" size="sm" className="w-full mt-2">;"
                    <X className="h-4 w-4 mr-2" /> Cancel Interview;
                  </Button>;
                </AlertDialogTrigger>;"
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                  <AlertDialogHeader>;
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>;



'
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      onClick={handleCancelInterview}
              <AlertDialog>;
                <AlertDialogTrigger asChild>;
                  <Button variant="outline" size="sm" className="w-full mt-2">;
                    <X className="h-4 w-4 mr-2" /> Cancel Interview;
                  </Button>;
                </AlertDialogTrigger>;
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                  <AlertDialogHeader>;
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>;
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <AlertDialogDescription>;
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.;
                    </AlertDialogDescription>;
                  </AlertDialogHeader>;
                  <AlertDialogFooter>;

<<<<<<< HEAD

=======
                    <AlertDialogCancel > Go Back</AlertDialogCancel>;
                    <AlertDialogAction;
                      on_click={handleCancelInterview}
                      disabled={is_loading}
                      className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
                    >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                      Cancel Interview;
                    </AlertDialogAction>;
                  </AlertDialogFooter>;
                </AlertDialogContent>;
              </AlertDialog>;

<<<<<<< HEAD
      {/* Response dialog for talents */}
<<<<<<< HEAD
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">
          <DialogHeader>
            <DialogTitle>Respond to Interview Request</DialogTitle>
          </DialogHeader>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            </>;          )}
        </div>;
      </CardFooter>;
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
=======
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        </div>;
      </CardFooter>;

      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">;
          <DialogHeader>;
            <DialogTitle>Respond to Interview Request</DialogTitle>;
          </DialogHeader>;

<<<<<<< HEAD


          <InterviewResponseForm;
          <InterviewResponseForm ;
<<<<<<< HEAD
          <InterviewResponseForm
          <InterviewResponseForm 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
          />
        </DialogContent>
      </Dialog>
    </Card>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                      onClick={handleCancelInterview}            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      onClick={handleCancelInterview}            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <InterviewResponseForm;
          <InterviewResponseForm;
            interview={interview}'
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <InterviewResponseForm

          <InterviewResponseForm 

          <InterviewResponseForm ;
          <InterviewResponseForm
          <InterviewResponseForm 
            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          />;
        </DialogContent>;
      </Dialog>;
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </>)}
        </div>;
      </CardFooter>;
      {/* Response dialog for talents */}
<<<<<<< HEAD
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
<<<<<<< HEAD
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text-white">;
=======
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;"
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text - white">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text - white">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <DialogHeader>;
            <DialogTitle > Respond to Interview Request</DialogTitle>;
          </DialogHeader>;
          <InterviewResponseForm;
            interview={interview}'
            on_confirm={() => handleRespondToInterview ('confirmed')}
            on_close={() => setIsResponseDialogOpen (false)}
            is_loading={is_loading}
          />;
        </DialogContent>;
      </Dialog>;
    </Card>);
<<<<<<< HEAD
<<<<<<< HEAD
}  ),; interface InterviewCardProps {
=======




  ),; interface InterviewCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

  ),; interface InterviewCardProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  interview: Interview;
onRefresh: () => Promise<void> 
}export function InterviewCard ({};
  interview, onRefresh;
}: InterviewCardProps) {}
  const {}
  user;
}= useAuth ();
const {}
  respondToInterview, cancelInterview;
}= useInterviews ();
const [isResponseDialogOpen, setIsResponseDialogOpen] = useState (false);
const [isLoading, setIsLoading] = useState (false);
const isClient = user?.id === interview.client id;
const isTalent = user?.id === interview.talent id;
//Format interview date and time const interviewDate = parseISO (interview.scheduled date);'
const formattedDate = format (interviewDate, 'EEEE, MMMM d');'
const formattedTime = format (interviewDate, 'h: mm a');
//Calculate when interview ends const endTime = new Date (interviewDate);
endTime.setMinutes (endTime.getMinutes () + interview.duration minutes);'
const formattedEndTime = format (endTime, 'h: mm a');'
const isInterviewPending = interview.status === 'requested';'
const isInterviewConfirmed = interview.status === 'confirmed';
const isInterviewLive = isInterviewConfirmed && !isPast (interviewDate) && isPast (new Date (interviewDate.getTime () - 5 * 60000) ), //5 minutes before const isInterviewPast = isPast (interviewDate);
const getRelativeTime = () => {}
  if (isPast (interviewDate) ) {}`
  return `Took place $ {}
  formatDistanceToNow (interviewDate) `
}ago` 
}else {}`
  return `Starts in $ {}
  formatDistanceToNow (interviewDate) `
}` 
}
;

<<<<<<< HEAD
};
if (success) {
  toast ({
  title: `Interview $ {
  status 
}`;
}setIsLoading (false) 
};
}setIsLoading (false) 
};
const getStatusBadge = () => {
  switch (interview.status) {
  case 'requested': default: return <Badge> {
  interview.status 
}</Badge> 
}
};
</p> </CardHeader> <CardContent className="pt-2" > <div className="space-y-3" > <div className="flex items-start gap-3" > <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" /> <div> </p> </div> </div> <div> <p className="font-medium capitalize" > {
  interview.meeting platform 
}</p> </div> </div>) 
}</div>) 
}</div> </CardContent> <AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full" > <X className="h-4 w-4 mr-2" /> Cancel Request </Button> </AlertDialogTrigger> <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to cancel this interview request? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Go Back</AlertDialogCancel> <AlertDialogAction onClick= {
  handleCancelInterview 
}> Cancel Interview </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
}Decline </Button> </div>) 
}{
  /* For confirmed interviews */ 
}{
  isInterviewConfirmed && !isInterviewPast && (<> {
  interview.meeting link ? (</Button>) 
}<AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full mt-2" > <X className="h-4 w-4 mr-2" /> Cancel Interview </Button> </AlertDialogTrigger> <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Go Back</AlertDialogCancel> <AlertDialogAction > Cancel Interview </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </>) 
}</div> </CardFooter> <DialogHeader> <DialogTitle>Respond to Interview Request</DialogTitle> </DialogHeader> <InterviewResponseForm interview= {
  interview 
}onConfirm= {
  () => handleRespondToInterview ('confirmed') 
}onClose= {
  () => setIsResponseDialogOpen (false) 
}isLoading= {
  isLoading 
}/> </DialogContent> </Dialog> </Card>) 
}
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
