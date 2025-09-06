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
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}

export function InterviewCard(): any ({ interview, onRefresh }: InterviewCardProps) {;

  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);


import React, { useState } from './react';
=======
  const [isLoading, setIsLoading] = useState(false);import React, { useState } from './react';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    } else {
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
<<<<<<< HEAD
    }),
    

    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
;
=======
    }),    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  },

  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
<<<<<<< HEAD


    if (success) {
      toast({
        title: "Interview cancelled"
        description: "The interview has been cancelled successfully."
      toast ({
=======
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
  }
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
        title: `Interview ${status}`,,
  description: `You have successfully ${status} the interview request.`;
      await onRefresh();
    } else {;
      toast({;
        title: "Error",,
  description: "Failed to respond to the interview request. Please try again.",;      toast ({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

  },



=======
  },

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':

<<<<<<< HEAD
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


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

    if (success) {;
      toast({;
<<<<<<< HEAD
        title: `Interview ${status}`,;
        description: `You have successfully ${status} the interview request.`;
=======
        title: `Interview ${status}`,,
  description: `You have successfully ${status} the interview request.`;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {;
      toast({;
<<<<<<< HEAD
        title: "Error",;
        description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
  };
=======
        title: "Error",,
  description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false)
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  const handleCancelInterview = async () => {;
    setIsLoading(true);
    const success = await cancelInterview(interview && interview.id);

    if (success) {;
      toast({;
<<<<<<< HEAD
        title: "Interview cancelled",;
        description: "The interview has been cancelled successfully.";
=======
        title: "Interview cancelled",,
  description: "The interview has been cancelled successfully.";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      });
      await onRefresh();
    } else {;
      toast({;
<<<<<<< HEAD
        title: "Error",;
        description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
  };
=======
        title: "Error",,
  description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false)
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  const getStatusBadge = () => {;
    switch (interview && interview.status) {;
      case 'requested':;
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':;
        return isInterviewLive ? ;
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : ;
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

  const getOtherPartyName = () => {;
    if (isClient) {;
      return interview && interview.talent_name || 'Talent';
    } else {;
      return interview && interview.client_name || 'Client';

    }

  },




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
                {formattedTime} - {formattedEndTime} ({interview && interview.duration_minutes} minutes);          <Badge className="bg-green-600">Confirmed</Badge>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    }
  }

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
<<<<<<< HEAD
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;
            </div>;
          )}
        </div>;
      </CardContent>;

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

;
                  <AlertDialogDescription>;
                    Are you sure you want to cancel this interview request? This action cannot be undone.;
                  </AlertDialogDescription>;
                </AlertDialogHeader>;
                <AlertDialogFooter>;

                  <AlertDialogCancel > Go Back</AlertDialogCancel>;
                  <AlertDialogAction;
                    on_click={handleCancelInterview}
                    disabled={is_loading}
                    className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
                  >;

=======
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;            </div>;
          )}
        </div>;
      </CardContent>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    Cancel Interview;
                  </AlertDialogAction>;
                </AlertDialogFooter>;
              </AlertDialogContent>;

<<<<<<< HEAD


;

;
;
          
;
            </AlertDialog>;          )}
          ;
          
;
=======
          ;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

            </AlertDialog>)}
          {/* For talents with pending requests */}
          {is_talent && isInterviewPending && (
<<<<<<< HEAD
            <div className="grid grid - cols - 2 gap - 2">;
=======
            <div className="grid grid - cols - 2 gap-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              <Button on_click={() => setIsResponseDialogOpen (true)} disabled={is_loading}>;
                Respond;
              </Button>;
              <Button variant="outline" on_click={() => handleRespondToInterview ('declined')} disabled={is_loading}>;
                Decline;
              </Button>;
            </div>)}
<<<<<<< HEAD

          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (
            <>;
              {interview.meeting_link ? (


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
            <>;
              {interview && interview.meeting_link ? (;
                <Button className="w-full" asChild disabled={!isInterviewLive}>;
                  <a href={interview && interview.meeting_link} target="_blank" rel="noopener noreferrer">;
                    <Video className="h-4 w-4 mr-2" /> ;
<<<<<<< HEAD
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
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
              


              <AlertDialog>
=======
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}              <AlertDialog>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
                    <AlertDialogDescription>;
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.;
                    </AlertDialogDescription>;
                  </AlertDialogHeader>;
                  <AlertDialogFooter>;

                    <AlertDialogCancel > Go Back</AlertDialogCancel>;
                    <AlertDialogAction;
                      on_click={handleCancelInterview}
                      disabled={is_loading}
                      className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
                    >;

                      Cancel Interview;
                    </AlertDialogAction>;
                  </AlertDialogFooter>;
                </AlertDialogContent>;
              </AlertDialog>;

        </div>;
      </CardFooter>;

      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">;
          <DialogHeader>;
            <DialogTitle>Respond to Interview Request</DialogTitle>;
          </DialogHeader>;

          <InterviewResponseForm

          <InterviewResponseForm 

          <InterviewResponseForm ;
          <InterviewResponseForm
          <InterviewResponseForm 
            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}

=======
                      onClick={handleCancelInterview}            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          />;
        </DialogContent>;
      </Dialog>;
    </Card>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            </>)}
        </div>;
      </CardFooter>;
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
<<<<<<< HEAD
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text - white">;
=======
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text-white">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}

  ),; interface InterviewCardProps {
=======
}  ),; interface InterviewCardProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
