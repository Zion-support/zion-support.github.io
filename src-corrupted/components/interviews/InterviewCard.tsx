import React, { useState } from './react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { Interview  } from '@/types / interview';
import { use_auth  } from '@/hooks / use_auth';
import { use_interviews  } from '@/hooks / use_interviews';
import { format, formatDistanceToNow, is_past, parseISO  } from './date - fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger  } from '@/components / ui / alert - dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle  } from '@/components / ui / dialog';
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-react'import { toast  } from '@/components / ui / use - toast';
import { InterviewResponseForm  } from './InterviewResponseForm';

import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";
import { toast } from "@/components/ui/use-toast",
import { InterviewResponseForm } from "./InterviewResponseForm",
interface InterviewCardProps {

  interview: Interview

  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {

  const { user } = useAuth()
  const { respondToInterview, cancelInterview } = useInterviews()
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const isClient = user?.id === interview.client_id
  const isTalent = user?.id === interview.talent_id
  const formattedEndTime = format(endTime, 'h: mm a')
  const isInterviewPending = interview.status === 'requested'
  const isInterviewConfirmed = interview.status === 'confirmed'
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>
      default:
        return <Badge>{interview.status}</Badge>
}

  )
}
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
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-react';
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
    
    if (success) {
      toast({
        title: `Interview ${status}`,
        description: `You have successfully ${status} the interview request.`
      }),
      setIsResponseDialogOpen(false),
      await onRefresh()
    } else {
      toast({
        title: "Error",
        description: "Failed to respond to the interview request. Please try again.",
        variant: "destructive"
      })
    }
    setIsLoading(false)
  },

  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
    if (success) {
      toast({
        title: "Interview cancelled",
        description: "The interview has been cancelled successfully."
      }),
      await onRefresh()
    } else {
      toast({
        title: "Error",
        description: "Failed to cancel the interview. Please try again.",
        variant: "destructive"
      })
    }
    setIsLoading(false)
  },

  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>,
      case 'confirmed':
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
  },;
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview.id, {;
      interview_id: interview.id,;
      status;
    }),;
    if (success) {;
      toast({;
        title: `Interview ${status}`,;
        description: `You have successfully ${status} the interview request.`;
      }),;
      setIsResponseDialogOpen(false),;
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
  },;
  const handleCancelInterview = async () => {;
    setIsLoading(true),;
    const success = await cancelInterview(interview.id),;
    if (success) {;
      toast({;
        title: "Interview cancelled",;
        description: "The interview has been cancelled successfully.";
      }),;
      await onRefresh();
    } else {;
      toast({;
        title: "Error",;
        description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false);
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
        return <Badge>{interview.status}</Badge>;
}
  );
}

