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
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";

interface InterviewCardProps {
  interview: Interview;
=======
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
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";interface InterviewCardProps {
  interview: Interview,
>>>>>>> origin/main
  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
  const isClient = null;
=======
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
  const [isLoading, setIsLoading] = useState(false);import React, { useState } from './react';
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

import React, { useState } from "react";""
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";""
import {Interview} from "@/types/interview";""
import {useAuth} from "@/hooks/useAuth";""
import {useInterviews} from "@/hooks/useInterviews";""
import {format, formatDistanceToNow, isPast, parseISO} from "date-fns";""
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";""
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";""
import {Clock, ExternalLink, MessageSquare, Video, X} from "lucide-react";""
import {toast} from "@/components/ui/use-toast";""
import {InterviewResponseForm} from "./InterviewResponseForm";"
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
</void>
  on_refresh: () => Promise < void>;

}
export /**
 * InterviewCard - Function description;
pr-12325
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
  const interview_date = parseISO (interview.scheduled_date);
  // Format interview date and time;
  const interview_date = parseISO (interview.scheduled_date);"
pr-12325
  const formatted_date = format (interview_date, 'EEEE, MMMM d');
  const formatted_time = format (interview_date, 'h: mm a'),
  // Calculate when interview ends;
  const end_time = new Date (interview_date);
  end_time.set_minutes (end_time.get_minutes () + interview.duration_minutes);
  const formattedEndTime = format (end_time, 'h: mm a'),
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const interview_date = parseISO (interview.scheduled_date);"
  const formatted_date = format (interview_date, 'EEEE, MMMM d');''
  const formatted_time = format (interview_date, 'h: mm a'),'
  // Calculate when interview ends;
  const end_time = new Date (interview_date);
  end_time.set_minutes (end_time.get_minutes () + interview.duration_minutes);'
  const formattedEndTime = format (end_time, 'h: mm a'),''
  const isInterviewPending = interview.status === 'requested';''
  const isInterviewConfirmed = interview.status === 'confirmed';'
  const isInterviewLive = isInterviewConfirmed && !is_past (interview_date) && is_past (new Date (interview_date.get_time () - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = is_past (interview_date);
;
  const getRelativeTime = () =>: any {
    if () {) {
  $2
}
      return `Took place ${formatDistanceToNow (interview_date)} ago`;

  const getRelativeTime = () =>: any {
  // TODO: Implement
    if () {) {
  $2;

  // TODO: Implement
}
    if () {) {
  $2;
}
      return `Took place ${formatDistanceToNow (interview_date)} ago`;

    } else {
  // TODO: Implement
}`;
      return `Starts in ${formatDistanceToNow (interview_date)}`;




pr-12325
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
    }),    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
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

  },
}
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }



'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {'
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status;)
    }),
    

    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
;)'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {'
    setIsLoading (true),
    const success = await respondToInterview (interview.id, {
      interview_id: interview.id,
      status;)
    });
;
    // Check condition;
if ( {) {
  $2;

}
      toast ({}
        title: `Interview ${status}`,
        description: `You have successfully ${status} the interview request.`;)
      });
      setIsResponseDialogOpen (false);
      await on_refresh ();

    } else {
  // TODO: Implement
}

  },
  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),

    
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
        title: "Error",
        description: "Failed to respond to the interview request. Please try again.",
        variant: "destructive";


    if (success) {
      toast({'
        title: "Interview cancelled"","
  description: "The interview has been cancelled successfully.""
      toast ({"
        title: "Error",""
        description: "Failed to respond to the interview request. Please try again.",""
        variant: "destructive";")

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

  },

  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>;
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
      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {;
      toast({;
        title: "Error",,
  description: "Failed to respond to the interview request. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false)
};

  const handleCancelInterview = async () => {;
    setIsLoading(true);
    const success = await cancelInterview(interview && interview.id);

    if (success) {;
      toast({;
        title: "Interview cancelled",,
  description: "The interview has been cancelled successfully.";
      });
      await onRefresh();
    } else {;
      toast({;
        title: "Error",,
  description: "Failed to cancel the interview. Please try again.",;
        variant: "destructive";
      });
    }
    setIsLoading(false)
};

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
>>>>>>> origin/main

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
                {formattedTime} - {formattedEndTime} ({interview && interview.duration_minutes} minutes);          <Badge className="bg-green-600">Confirmed</Badge>;
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
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;            </div>;
          )}
        </div>;
      </CardContent>;
                    Cancel Interview;
                  </AlertDialogAction>;
                </AlertDialogFooter>;
              </AlertDialogContent>;

          ;
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
            <div className="grid grid - cols - 2 gap-2">;
              <Button on_click={() => setIsResponseDialogOpen (true)} disabled={is_loading}>;
                Respond;
              </Button>;
              <Button variant="outline" on_click={() => handleRespondToInterview ('declined')} disabled={is_loading}>;
                Decline;
              </Button>;
            </div>)}
          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
            <>;
              {interview && interview.meeting_link ? (;
                <Button className="w-full" asChild disabled={!isInterviewLive}>;
                  <a href={interview && interview.meeting_link} target="_blank" rel="noopener noreferrer">;
                    <Video className="h-4 w-4 mr-2" /> ;
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}              <AlertDialog>
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
                      onClick={handleCancelInterview}            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}
          />;
        </DialogContent>;
      </Dialog>;
    </Card>;
  );
}
            </>)}
        </div>;
      </CardFooter>;
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text-white">;
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
}  ),; interface InterviewCardProps {
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
      status;)
    }),
    

    if (success) {
      toast({`;
        title: `Interview ${status}``;
        description: `You have successfully ${status} the interview request.`
;)
    setIsLoading (true),
    const success = await respondToInterview (interview.id, {
    });
    // Check condition;

if ( {) {
      toast ({`;
        title: `Interview ${status}`,`;
        description: `You have successfully ${status} the interview request.`;)
      setIsResponseDialogOpen (false);
      await on_refresh ();
  // TODO: Implement
  },

  const handleCancelInterview = async () => {
    const success = await cancelInterview(interview.id),
    


      toast({
        title: "Interview cancelled"","
  description: "The interview has been cancelled successfully.""
      toast ({"
        title: "Error",""
        description: "Failed to respond to the interview request. Please try again.",""
        variant: "destructive";")
    setIsLoading (false);
    setIsLoading (true);
    const success = await cancel_interview (interview.id);
    // Check condition;
        title: "Interview cancelled",""
        description: "The interview has been cancelled successfully.";")
  // TODO: Implement



  const getStatusBadge = () => {
    switch (interview.status) {"
      case 'requested':
        return <Badge className="bg-amber-500">Pending;""
          <Badge className="bg-green-500 animate-pulse">Live Now :""
          <Badge className="bg-green-600">Confirmed,""
        return <Badge variant="destructive">Declined,""
        return <Badge className="bg-blue-500">Rescheduled,""
        return <Badge className="bg-green-700">Completed,""
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled,"
        return <Badge>{interview.status}"
          <Badge className="bg-green-500 animate-pulse">Live Now : ;""
          <Badge className="bg-green-600">Confirmed;""
        return <Badge variant="destructive">Declined;""
        return <Badge className="bg-blue-500">Rescheduled;""
        return <Badge className="bg-green-700">Completed;""
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled;"
        return <Badge>{interview && interview.status};"
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
"
      <CardHeader className="pb-2 relative">;"
        <div className="absolute right-4 top-4">;"
</div>
        </div>;"
        <CardTitle className="text-lg">{interview && interview.title};""
        <p className="text-sm text-muted-foreground">;"
</p>
        </p>;
      ;"
      <CardContent className="pt-2">;"
        <div className="space-y-3">;"
</div>"
          <div className="flex items-start gap-3">;"
            <Clock className="h-4 w-4 mt-0 && 0.5 text-muted-foreground" />;"

            <div>;
              <p className="font-medium">{formattedDate}</p>;""
  onRefresh: () => Promise<void>
</void>"
        return <Badge className="bg-amber-500">Pending,""
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />;"

              </p>;"
              <p className="text-xs text-muted-foreground mt-1">;"
            </div>;
            <div className="flex items-center gap-3">;"
              <Video className="h-4 w-4 text-muted-foreground" />;"

                <p className="font-medium capitalize">{interview && interview.meeting_platform}</p>;"

              </div>;
            </div>;"
            <div className="flex items-start gap-3">;"
</div>"
              <MessageSquare className="h-4 w-4 mt-0 && 0.5 text-muted-foreground" />;"
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;"
            </div>;

        </div>;
      </CardContent>;"
      <CardFooter className="pt-2">;"
        <div className="grid grid-cols-1 gap-2 w-full">;"
            <AlertDialog>;

              <AlertDialogTrigger asChild>;
                <Button variant="outline" size="sm" className="w-full">;"
                  <X className="h-4 w-4 mr-2" /> Cancel Request;"

              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;"

                <AlertDialogHeader>;

                  <AlertDialogTitle>Cancel Interview Request;"
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">"
      <CardHeader className="pb-2 relative">"
        <div className="absolute right-4 top-4">"
        <CardTitle className="text-lg">{interview.title}""
        <p className="text-sm text-muted-foreground">"
      <CardContent className="pt-2">"
        <div className="space-y-3">"
          <div className="flex items-start gap-3">"
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />"

            <div>
              <p className="font-medium">{formattedDate}</p>""
              </p>"
              <p className="text-xs text-muted-foreground mt-1">"
            <div className="flex items-center gap-3">"
              <Video className="h-4 w-4 text-muted-foreground" />"

                <p className="font-medium capitalize">{interview.meeting_platform}</p>"
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />"
              <p className="text-sm line-clamp-2">{interview.notes}</p>"
      <CardFooter className="pt-2">"
        <div className="grid grid-cols-1 gap-2 w-full">"
            <AlertDialog>

              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">"

                
              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">"

                <AlertDialogHeader>

                  <AlertDialogTitle>Cancel Interview Request
                  <AlertDialogDescription>

                  
                
                <AlertDialogFooter>

                  <AlertDialogCancel>Go Back
                  <AlertDialogAction;
                    onClick={handleCancelInterview}
                    disabled={isLoading}"
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90""
                  >

                  
                
              
    <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;"
      <CardHeader className="pb - 2 relative">;"
        <div className="absolute right - 4 top - 4">;"
        <CardTitle className="text - lg">{interview.title};""
        <p className="text - sm text - muted - foreground">;"
      <CardContent className="pt - 2">;"
        <div className="space - y-3">;"
          <div className="flex items - start gap - 3">;"
            <Clock className="h - 4 w - 4 mt - 0.5 text - muted - foreground" />;"

              <p className="font - medium">{formatted_date}</p>;""
              <p className="text - xs text - muted - foreground mt - 1">;"
            <div className="flex items - center gap - 3">;"
              <Video className="h - 4 w - 4 text - muted - foreground" />;"

                <p className="font - medium capitalize">{interview.meeting_platform}</p>;"
            </div>)}"
              <MessageSquare className="h - 4 w - 4 mt - 0.5 text - muted - foreground" />;"
              <p className="text - sm line - clamp - 2">{interview.notes}</p>;"
            </div>)}
      <CardFooter className="pt - 2">;"
        <div className="grid grid - cols - 1 gap - 2 w - full">;"

              <AlertDialogTrigger as_child>;
                <Button variant="outline" size="sm" className="w - full">;"
                  <X className="h - 4 w - 4 mr - 2" /> Cancel Request;"

              <AlertDialogContent className="bg - zion - blue - dark border - zion - blue - light text - white">;"


                  <AlertDialogTitle > Cancel Interview Request;
                  <AlertDialogDescription>;

                <AlertDialogFooter>;


                  <AlertDialogCancel > Go Back;
                    on_click={handleCancelInterview}
                    disabled={is_loading}"
                    className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";"
                  >;

            ;          )}"
            <div className="grid grid-cols-2 gap-2">;"
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={isLoading}>;

              <Button variant="outline" onClick={() => handleRespondToInterview('declined')} disabled={isLoading}>;

            )}
            <div className="grid grid - cols - 2 gap - 2">;"
              <Button on_click={() => setIsResponseDialogOpen (true)} disabled={is_loading}>;

              <Button variant="outline" on_click={() => handleRespondToInterview ('declined')} disabled={is_loading}>;

            <>;
              {interview.meeting_link ? (


          {/* For confirmed interviews */}
          {isInterviewConfirmed && !isInterviewPast && (;
              {interview && interview.meeting_link ? (;
                <Button className="w-full" asChild disabled={!isInterviewLive}>;"
                  <a href={interview && interview.meeting_link} target="_blank" rel="noopener noreferrer">;"
</a>"
                    <Video className="h-4 w-4 mr-2" /> ;"
                    <ExternalLink className="h-3 w-3 ml-2" />;"

                  </a>;
                <Button className="w-full" disabled={!isInterviewLive}>;"
                  <Video className="h-4 w-4 mr-2" />"


                  <Button variant="outline" size="sm" className="w-full mt-2">"
                    <X className="h-4 w-4 mr-2" /> Cancel Interview;"

                  


                    <AlertDialogTitle>Cancel Confirmed Interview

                    
                  


                  <Button variant="outline" size="sm" className="w-full mt-2">;"



                    <AlertDialogTitle>Cancel Confirmed Interview;




      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">;"

          <DialogHeader>;

            <DialogTitle>Respond to Interview Request;
          <InterviewResponseForm;
          <InterviewResponseForm ;
            interview={interview})"
            onConfirm={() => handleRespondToInterview('confirmed')}

            </>)}

        <DialogContent className="sm:max - w-[500px] bg - zion - blue - dark border - zion - blue - light text - white">;"


            <DialogTitle > Respond to Interview Request;
            interview={interview}"
            on_confirm={() => handleRespondToInterview ('confirmed')}

    );
  case 'requested': default: return <Badge> {

</p>  <CardContent className="pt-2" > <div className="space-y-3" > <div className="flex items-start gap-3" > <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" /> <div> </p> </div> </div> <div> <p className="font-medium capitalize" > {"

}</p> </div> </div>) 
}</div>) "
}</div>  <AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full" > <X className="h-4 w-4 mr-2" /> Cancel Request   <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Interview Request <AlertDialogDescription> Are you sure you want to cancel this interview request? This action cannot be undone.   <AlertDialogFooter> <AlertDialogCancel>Go Back <AlertDialogAction onClick= {"

}> Cancel Interview    ) 
}Decline  </div>) 
  isInterviewConfirmed && !isInterviewPast && (<> {)
  interview.meeting link ? () "
}<AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full mt-2" > <X className="h-4 w-4 mr-2" /> Cancel Interview   <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Confirmed Interview <AlertDialogDescription> Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.   <AlertDialogFooter> <AlertDialogCancel>Go Back <AlertDialogAction > Cancel Interview     </>)"
}</div>  <DialogHeader> <DialogTitle>Respond to Interview Request  <InterviewResponseForm interview= {
  interview;
}onConfirm= {"
  () => handleRespondToInterview ('confirmed')
}onClose= {
  () => setIsResponseDialogOpen (false) 
}isLoading= {
  isLoading;
}/>   ) `;
pr-12325
}</div> </CardContent> <AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full" > <X className="h-4 w-4 mr-2" /> Cancel Request </Button> </AlertDialogTrigger> <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to cancel this interview request? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Go Back</AlertDialogCancel> <AlertDialogAction onClick= {"
</AlertDialog>
}> Cancel Interview </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
}Decline </Button> </div>) 
}{}
  /* For confirmed interviews */ }
}{
  isInterviewConfirmed && !isInterviewPast && (<> {}
  interview.meeting link ? (</Button>) }
}<AlertDialog /> <AlertDialogTrigger asChild /> <Button variant=\"outline\" size=\"sm\" className=\"w-full mt-2\"  /> <X className=\"h-4 w-4 mr-2\" /> Cancel Interview </Button> </AlertDialogTrigger> <AlertDialogContent className=\"bg-zion-blue-dark border-zion-blue-light text-white\"  /> <AlertDialogHeader /> <AlertDialogTitle />Cancel Confirmed Interview</AlertDialogTitle> <AlertDialogDescription /> Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter /> <AlertDialogCancel />Go Back</AlertDialogCancel> <AlertDialogAction  /> Cancel Interview </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </>) 
}</div> </CardFooter> <DialogHeader /> <DialogTitle />Respond to Interview Request</DialogTitle> </DialogHeader> <InterviewResponseForm interview= {}
  interview }
}onConfirm= {}
  () = /> handleRespondToInterview ('confirmed') }
}onClose= {}
  () => setIsResponseDialogOpen (false) }
}isLoading= {}
  isLoading }
}/> </DialogContent> </Dialog> </Card>) 
}
  );
}
;
