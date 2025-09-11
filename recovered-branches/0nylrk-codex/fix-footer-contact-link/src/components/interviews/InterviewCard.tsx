
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
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}

export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}

export function InterviewCard(): any ({ interview, onRefresh }: InterviewCardProps) {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
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
import { InterviewResponseForm } from './InterviewResponseForm';
interface InterviewCardProps {
  interview: Interview,
  on_refresh: () => Promise < void>;
}
export /**
 * InterviewCard - Function description
 */
function InterviewCard() {
  const { user } = use_auth ();
  const { respondToInterview, cancel_interview } = use_interviews ();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
;
  const is_client = user?.id === interview.client_id;
  const is_talent = user?.id === interview.talent_id;
;
  // Format interview date and time;
  const interview_date = parseISO (interview.scheduled_date);
  const formatted_date = format (interview_date, 'EEEE, MMMM d');
  const formatted_time = format (interview_date, 'h: mm a'),
  // Calculate when interview ends;
  const end_time = new Date (interview_date);
  end_time.set_minutes (end_time.get_minutes () + interview.duration_minutes);
  const formattedEndTime = format (end_time, 'h: mm a'),
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !is_past (interview_date) && is_past (new Date (interview_date.get_time () - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = is_past (interview_date);
;
  const getRelativeTime = () =>: any {
    if () {) {
  $2
}
      return `Took place ${formatDistanceToNow (interview_date)} ago`;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } else {
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
    

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
    }),
    
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading (true),
    const success = await respondToInterview (interview.id, {
      interview_id: interview.id,
      status;
    });
;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: `Interview ${status}`,
        description: `You have successfully ${status} the interview request.`;
      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
    } else {
<<<<<<< HEAD
=======


  },

  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    


    if (success) {
      toast({
        title: "Interview cancelled"
        description: "The interview has been cancelled successfully."
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast ({
        title: "Error",
        description: "Failed to respond to the interview request. Please try again.",
        variant: "destructive";
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
  const isClient = user?.id === interview && interview.client_id;
  const isTalent = user?.id === interview && interview.talent_id;
  // Format interview date and time;
  const interviewDate = parseISO(interview && interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h: mm a'),;
  // Calculate when interview ends;
  const endTime = new Date(interviewDate);
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a'),;
  const isInterviewPending = interview && interview.status === 'requested';
  const isInterviewConfirmed = interview && interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate && interviewDate.getTime() - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = isPast(interviewDate);
  const getRelativeTime = () => {;
    if (isPast(interviewDate)) {;
      return `Took place ${formatDistanceToNow(interviewDate)} ago`;
    } else {;
      return `Starts in ${formatDistanceToNow(interviewDate)}`;
    }
  };

        return isInterviewLive ? 
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : 
          <Badge className="bg-green-600">Confirmed</Badge>,

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

  };

  },;

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview && interview.id, { ;
      interview_id: interview && interview.id, ;
      status ;
    });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (success) {;
      toast({;
        title: `Interview ${status}`,;
        description: `You have successfully ${status} the interview request.`;
      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
  };
  const handleCancelInterview = async () => {;
    setIsLoading(true);
    const success = await cancelInterview(interview && interview.id);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (success) {;
      toast({;
        title: "Interview cancelled",;
        description: "The interview has been cancelled successfully.";
      });
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const getStatusBadge = () => {;
    switch (interview && interview.status) {;
      case 'requested':;
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':;
        return isInterviewLive ? ;
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : ;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Badge className="bg-green-600">Confirmed</Badge>;
      case 'declined':;
        return <Badge variant="destructive">Declined</Badge>;
      case 'rescheduled':;
        return <Badge className="bg-blue-500">Rescheduled</Badge>;
      case 'completed':;
        return <Badge className="bg-green-700">Completed</Badge>;
      case 'cancelled':;
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:;
        return <Badge>{interview && interview.status}</Badge>;
    }
<<<<<<< HEAD
  };
=======

  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const getOtherPartyName = () => {;
    if (isClient) {;
      return interview && interview.talent_name || 'Talent';
    } else {;
      return interview && interview.client_name || 'Client';
<<<<<<< HEAD
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
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}
;
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {;
  const { user } = useAuth(),;
  const { respondToInterview, cancelInterview } = useInterviews(),;
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const isClient = user?.id === interview.client_id,;
  const isTalent = user?.id === interview.talent_id,;
  // Format interview date and time;
  const interviewDate = parseISO(interview.scheduled_date),;
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),;
  const formattedTime = format(interviewDate, 'h: mm a'),;
  // Calculate when interview ends;
  const endTime = new Date(interviewDate),;
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes),;
  const formattedEndTime = format(endTime, 'h: mm a'),;
  const isInterviewPending = interview.status === 'requested',;
  const isInterviewConfirmed = interview.status === 'confirmed',;
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = isPast(interviewDate),;
  const getRelativeTime = () => {;
    if (isPast(interviewDate)) {;
      return `Took place ${formatDistanceToNow(interviewDate)} ago`;
    } else {;
      return `Starts in ${formatDistanceToNow(interviewDate)}`;
    }
  },

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
    }),
    
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
      }),
      setIsResponseDialogOpen(false),
      await onRefresh()
    } else {
      toast({
        title: "Error"
        description: "Failed to respond to the interview request. Please try again."
        variant: "destructive"
      })
    }
    setIsLoading(false)
  }
  const handleCancelInterview = async () => {
    setIsLoading(true);
    const success = await cancelInterview(interview.id);
  },

  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
    if (success) {
      toast({
        title: "Interview cancelled"
        description: "The interview has been cancelled successfully."
      }),
      await onRefresh()
    } else {
      toast({
        title: "Error"
        description: "Failed to cancel the interview. Please try again."
        variant: "destructive"
      })
    }
    setIsLoading(false)
  }
  },

  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
<<<<<<< HEAD
        return <Badge className="bg-amber-500">Pending</Badge>,
=======
        return <Badge className="bg-amber-500">Pending</Badge>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case 'confirmed':
        return isInterviewLive ?
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> :
          <Badge className="bg-green-600">Confirmed</Badge>;
        return isInterviewLive ? 
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : 
          <Badge className="bg-green-600">Confirmed</Badge>,
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
  },;
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview.id, {;
      interview_id: interview.id,;
      status;
    }),;
=======

  };

=======
  },;

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview && interview.id, { ;
      interview_id: interview && interview.id, ;
      status ;
    });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (success) {;
      toast({;
        title: `Interview ${status}`,;
        description: `You have successfully ${status} the interview request.`;
<<<<<<< HEAD
      }),;
      setIsResponseDialogOpen(false),;
=======
      });
      setIsResponseDialogOpen(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
<<<<<<< HEAD
  },;
  const handleCancelInterview = async () => {;
    setIsLoading(true),;
    const success = await cancelInterview(interview.id),;
=======
  };

  const handleCancelInterview = async () => {;
    setIsLoading(true);
    const success = await cancelInterview(interview && interview.id);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (success) {;
      toast({;
        title: "Interview cancelled",;
        description: "The interview has been cancelled successfully.";
<<<<<<< HEAD
      }),;
=======
      });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
<<<<<<< HEAD
  },;
  const getStatusBadge = () => {;
    switch (interview.status) {;
      case 'requested':;
        return <Badge className="bg-amber-500">Pending</Badge>,;
      case 'confirmed':;
        return isInterviewLive ?;
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> :;
          <Badge className="bg-green-600">Confirmed</Badge>,;
      case 'declined':;
        return <Badge variant="destructive">Declined</Badge>,;
      case 'rescheduled':;
        return <Badge className="bg-blue-500">Rescheduled</Badge>,;
      case 'completed':;
        return <Badge className="bg-green-700">Completed</Badge>,;
      case 'cancelled':;
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>,;
      default:;
        <CardTitle className="text-lg">{interview.title}</CardTitle>;
        <p className="text-sm text-muted-foreground">;
          with {getOtherPartyName()}
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
=======
=======
  };

  const getStatusBadge = () => {;
    switch (interview && interview.status) {;
      case 'requested':;
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':;
        return isInterviewLive ? ;
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Badge className="bg-green-600">Confirmed</Badge>;
      case 'declined':;
        return <Badge variant="destructive">Declined</Badge>;
      case 'rescheduled':;
        return <Badge className="bg-blue-500">Rescheduled</Badge>;
      case 'completed':;
        return <Badge className="bg-green-700">Completed</Badge>;
      case 'cancelled':;
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:;
        return <Badge>{interview && interview.status}</Badge>;
    }

  };

  const getOtherPartyName = () => {;
    if (isClient) {;
      return interview && interview.talent_name || 'Talent';
    } else {;
      return interview && interview.client_name || 'Client';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>;
              <p className="text-xs text-muted-foreground mt-1">;
                {getRelativeTime()}
              </p>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
          {interview.meeting_platform && (;
            <div className="flex items-center gap-3">;
              <Video className="h-4 w-4 text-muted-foreground" />;
              <div>;
                <p className="font-medium capitalize">{interview.meeting_platform}</p>;
              </div>;
            </div>;
          )}
          ;
          {interview.notes && (;
            <div className="flex items-start gap-3">;
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />;
              <p className="text-sm line-clamp-2">{interview.notes}</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          {interview && interview.meeting_platform && (;
            <div className="flex items-center gap-3">;
              <Video className="h-4 w-4 text-muted-foreground" />;
              <div>;
                <p className="font-medium capitalize">{interview && interview.meeting_platform}</p>;
              </div>;
            </div>;
          )}

          {interview && interview.notes && (;
            <div className="flex items-start gap-3">;
              <MessageSquare className="h-4 w-4 mt-0 && 0.5 text-muted-foreground" />;
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          )}
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardFooter className="pt-2">;
        <div className="grid grid-cols-1 gap-2 w-full">;
          {/* For clients with pending requests */}
          {isClient && isInterviewPending && (;
            <AlertDialog>;
              <AlertDialogTrigger asChild>;
                <Button variant="outline" size="sm" className="w-full">;
                  <X className="h-4 w-4 mr-2" /> Cancel Request;
                </Button>;
              </AlertDialogTrigger>;
              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                <AlertDialogHeader>;
                  <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
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
  }
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <p className="text-xs text-muted-foreground mt-1">
                {getRelativeTime()}
              </p>
            </div>
          </div>
          {interview.meeting_platform && (
            <div className="flex items-center gap-3">
              <Video className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium capitalize">{interview.meeting_platform}</p>
              </div>
            </div>
          )}
          {interview.notes && (
            <div className="flex items-start gap-3">
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <p className="text-sm line-clamp-2">{interview.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="grid grid-cols-1 gap-2 w-full">
          {/* For clients with pending requests */}
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <AlertDialogDescription>;
                    Are you sure you want to cancel this interview request? This action cannot be undone.;
                  </AlertDialogDescription>;
                </AlertDialogHeader>;
                <AlertDialogFooter>;
<<<<<<< HEAD
                  <AlertDialogCancel>Go Back</AlertDialogCancel>;
                  <AlertDialogAction ;
                    onClick={handleCancelInterview} ;
                    disabled={isLoading}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
                  >;
=======

                  <AlertDialogCancel > Go Back</AlertDialogCancel>;
                  <AlertDialogAction;
                    on_click={handleCancelInterview}
                    disabled={is_loading}
                    className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
                  >;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Cancel Interview;
                  </AlertDialogAction>;
                </AlertDialogFooter>;
              </AlertDialogContent>;

<<<<<<< HEAD
;

<<<<<<< HEAD
;
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          
;
<<<<<<< HEAD
            </AlertDialog>;          )}
          ;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======

;

=======
          
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* For talents with pending requests */}
          {isTalent && isInterviewPending && (;
            <div className="grid grid-cols-2 gap-2">;
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={isLoading}>;
                Respond;
              </Button>;
              <Button variant="outline" onClick={() => handleRespondToInterview('declined')} disabled={isLoading}>;
                Decline;
              </Button>;
            </div>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (
            <>;
              {interview.meeting_link ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
            <>;
              {interview && interview.meeting_link ? (;
                <Button className="w-full" asChild disabled={!isInterviewLive}>;
                  <a href={interview && interview.meeting_link} target="_blank" rel="noopener noreferrer">;
                    <Video className="h-4 w-4 mr-2" /> ;
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" disabled={!isInterviewLive}>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <ExternalLink className="h-3 w-3 ml-2" />;
                  </a>;
                </Button>;
              ) : (;
                <Button className="w-full" disabled={!isInterviewLive}>;
                  <Video className="h-4 w-4 mr-2" /> ;

                  <Video className="h-4 w-4 mr-2" /> 

                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}


              


<<<<<<< HEAD
                  <Video className="h-4 w-4 mr-2" />
                  <Video className="h-4 w-4 mr-2" /> 
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>
              )}
              
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <Video className="h-4 w-4 mr-2" />
                  <Video className="h-4 w-4 mr-2" /> 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}
              
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <X className="h-4 w-4 mr-2" /> Cancel Interview
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Go Back</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleCancelInterview}
<<<<<<< HEAD
<<<<<<< HEAD
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}
          ;
          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
            <>;
              {interview.meeting_link ? (;
                <Button className="w-full" asChild disabled={!isInterviewLive}>;
                  <a href={interview.meeting_link} target="_blank" rel="noopener noreferrer">;
                    <Video className="h-4 w-4 mr-2" /> ;
                    {isInterviewLive ? 'Join Now' :'Join Meeting'}
                    <ExternalLink className="h-3 w-3 ml-2" />;
                  </a>;
                </Button>;
              ) :(;
                <Button className="w-full" disabled={!isInterviewLive}>;
                  <Video className="h-4 w-4 mr-2" /> ;
                  {isInterviewLive ? 'Join Now' :'Join Meeting'}
                </Button>;
              )}
              ;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <AlertDialog>;
                <AlertDialogTrigger asChild>;
                  <Button variant="outline" size="sm" className="w-full mt-2">;
                    <X className="h-4 w-4 mr-2" /> Cancel Interview;
                  </Button>;
                </AlertDialogTrigger>;
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                  <AlertDialogHeader>;
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                <Button className="w - full" as_child disabled={!isInterviewLive}>;
                  <a href={interview.meeting_link} target="_blank" rel="noopener noreferrer">;
                    <Video className="h - 4 w - 4 mr - 2" />;
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                    <ExternalLink className="h - 3 w - 3 ml - 2" />;
                  </a>;
                </Button>) : (
                <Button className="w - full" disabled={!isInterviewLive}>;
                  <Video className="h - 4 w - 4 mr - 2" />;
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>)}
              <AlertDialog>;
                <AlertDialogTrigger as_child>;
                  <Button variant="outline" size="sm" className="w - full mt - 2">;
                    <X className="h - 4 w - 4 mr - 2" /> Cancel Interview;
                  </Button>;
                </AlertDialogTrigger>;
                <AlertDialogContent className="bg - zion - blue - dark border - zion - blue - light text - white">;
                  <AlertDialogHeader>;
                    <AlertDialogTitle > Cancel Confirmed Interview</AlertDialogTitle>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <AlertDialogDescription>;
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.;
                    </AlertDialogDescription>;
                  </AlertDialogHeader>;
                  <AlertDialogFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <AlertDialogCancel>Go Back</AlertDialogCancel>;
                    <AlertDialogAction ;
                      onClick={handleCancelInterview} ;
                      disabled={isLoading}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
                    >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <AlertDialogCancel > Go Back</AlertDialogCancel>;
                    <AlertDialogAction;
                      on_click={handleCancelInterview}
                      disabled={is_loading}
                      className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
                    >;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      Cancel Interview;
                    </AlertDialogAction>;
                  </AlertDialogFooter>;
                </AlertDialogContent>;
              </AlertDialog>;
<<<<<<< HEAD
<<<<<<< HEAD
                      disabled={isLoading}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Cancel Interview
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          )}
        </div>
      </CardFooter>
=======

        </div>;
      </CardFooter>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">
          <DialogHeader>
            <DialogTitle>Respond to Interview Request</DialogTitle>
          </DialogHeader>
<<<<<<< HEAD
            </>;          )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </CardFooter>;
      ;
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">;
          <DialogHeader>;
            <DialogTitle>Respond to Interview Request</DialogTitle>;
          </DialogHeader>;

          <InterviewResponseForm 

<<<<<<< HEAD
          <InterviewResponseForm ;
          <InterviewResponseForm
          <InterviewResponseForm 
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <InterviewResponseForm
          <InterviewResponseForm 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />
        </DialogContent>
      </Dialog>
    </Card>
  )
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </DialogContent>;
      </Dialog>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </>)}
        </div>;
      </CardFooter>;
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text - white">;
          <DialogHeader>;
            <DialogTitle > Respond to Interview Request</DialogTitle>;
          </DialogHeader>;
          <InterviewResponseForm;
            interview={interview}
            on_confirm={() => handleRespondToInterview ('confirmed')}
            on_close={() => setIsResponseDialogOpen (false)}
            is_loading={is_loading}
          />;
        </DialogContent>;
      </Dialog>;
    </Card>);
<<<<<<< HEAD
  ),; interface InterviewCardProps {
  interview: Interview;
onRefresh: () => Promise<void> 
}export function InterviewCard ({
  interview, onRefresh 
}: InterviewCardProps) {
  const {
  user 
}= useAuth ();
const {
  respondToInterview, cancelInterview 
}= useInterviews ();
const [isResponseDialogOpen, setIsResponseDialogOpen] = useState (false);
const [isLoading, setIsLoading] = useState (false);
const isClient = user?.id === interview.client id;
const isTalent = user?.id === interview.talent id;
//Format interview date and time const interviewDate = parseISO (interview.scheduled date);
const formattedDate = format (interviewDate, 'EEEE, MMMM d');
const formattedTime = format (interviewDate, 'h: mm a');
//Calculate when interview ends const endTime = new Date (interviewDate);
endTime.setMinutes (endTime.getMinutes () + interview.duration minutes);
const formattedEndTime = format (endTime, 'h: mm a');
const isInterviewPending = interview.status === 'requested';
const isInterviewConfirmed = interview.status === 'confirmed';
const isInterviewLive = isInterviewConfirmed && !isPast (interviewDate) && isPast (new Date (interviewDate.getTime () - 5 * 60000) ), //5 minutes before const isInterviewPast = isPast (interviewDate);
const getRelativeTime = () => {
  if (isPast (interviewDate) ) {
  return `Took place $ {
  formatDistanceToNow (interviewDate) 
}ago` 
}else {
  return `Starts in $ {
  formatDistanceToNow (interviewDate) 
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
