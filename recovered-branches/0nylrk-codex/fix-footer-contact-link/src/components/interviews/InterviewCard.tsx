
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
import { toast } from "@/components/ui/use-toast",
import { InterviewResponseForm } from "./InterviewResponseForm",
=======
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Interview } from &quot;@/types/interview&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useInterviews } from &quot;@/hooks/useInterviews&quot;;
import { format, formatDistanceToNow, isPast, parseISO } from &quot;date-fns&quot;;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from &quot;@/components/ui/alert-dialog&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { Clock, ExternalLink, MessageSquare, Video, X } from &quot;lucide-react&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { InterviewResponseForm } from &quot;./InterviewResponseForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}

export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {
  const { user } = useAuth(),
  const { respondToInterview, cancelInterview } = useInterviews(),
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  
  const isClient = user?.id === interview.client_id,
  const isTalent = user?.id === interview.talent_id,

  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date),
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),
  const formattedTime = format(interviewDate, 'h: mm a'),

  // Calculate when interview ends
  const endTime = new Date(interviewDate),
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes),
  const formattedEndTime = format(endTime, 'h: mm a'),
  
  const isInterviewPending = interview.status === 'requested',
  const isInterviewConfirmed = interview.status === 'confirmed',
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast(interviewDate),
  
  const getRelativeTime = () => {
    if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`
    } else {
      return `Starts in ${formatDistanceToNow(interviewDate)}`
=======
import React, {_useState} from "react";

interface InterviewCardProps {_interview: Interview;
  onRefresh: () => Promise<void>;}

export function InterviewCard(_{_interview, _onRefresh}: InterviewCardProps) {_const { user} = useAuth();
  const {_respondToInterview, _cancelInterview} = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const _isClient = user?.id === interview.client_id;
  const _isTalent = user?.id === interview.talent_id;

  // Format interview date and time
  const _interviewDate = parseISO(interview.scheduled_date);
  const _formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const _formattedTime = format(interviewDate, 'h:mm a');

  // Calculate when interview ends
  const _endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const _formattedEndTime = format(endTime, 'h:mm a');
  
  const _isInterviewPending = interview.status === 'requested';
  const _isInterviewConfirmed = interview.status === 'confirmed';
  const _isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)); // 5 minutes before
  const _isInterviewPast = isPast(interviewDate);
  
  const _getRelativeTime = () => {_if (isPast(interviewDate)) {
      return `Took place ${formatDistanceToNow(interviewDate)} ago`;
    } else {_return `Starts in ${formatDistanceToNow(interviewDate)}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 
    }),
=======
  const _handleRespondToInterview = async (_status: 'confirmed' | 'declined' | 'rescheduled') => {_setIsLoading(true);
    const _success = await respondToInterview(interview.id, _{ 
      interview_id: interview.id, _status});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (success) {_toast({
        title: `Interview ${status}`,
<<<<<<< HEAD
        description: `You have successfully ${status} the interview request.`
      }),
      setIsResponseDialogOpen(false),
      await onRefresh()
    } else {
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "Failed to respond to the interview request. Please try again.",
        variant: "destructive"
      })
=======
        title: &quot;Error&quot;,
        description: &quot;Failed to respond to the interview request. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        description: `You have successfully ${_status} the interview request.`
      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {_toast({
        title: "Error", _description: "Failed to respond to the interview request. Please try again.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    setIsLoading(false)
  },

<<<<<<< HEAD
  const handleCancelInterview = async () => {
    setIsLoading(true),
    const success = await cancelInterview(interview.id),
    
    if (success) {
      toast({
<<<<<<< HEAD
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
=======
        title: &quot;Interview cancelled&quot;,
        description: &quot;The interview has been cancelled successfully.&quot;
      });
      await onRefresh();
    } else {
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to cancel the interview. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _handleCancelInterview = async () => {_setIsLoading(true);
    const _success = await cancelInterview(interview.id);
    
    if (success) {
      toast({
        title: "Interview cancelled", _description: "The interview has been cancelled successfully."});
      await onRefresh();
    } else {_toast({
        title: "Error", _description: "Failed to cancel the interview. Please try again.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    setIsLoading(false)
  },

  const _getStatusBadge = () => {_switch (interview.status) {
      case 'requested':
<<<<<<< HEAD
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
=======
        return <Badge className=&quot;bg-amber-500&quot;>Pending</Badge>;
      case 'confirmed':
        return isInterviewLive ? 
          <Badge className=&quot;bg-green-500 animate-pulse&quot;>Live Now</Badge> : 
          <Badge className=&quot;bg-green-600&quot;>Confirmed</Badge>;
      case 'declined':
        return <Badge variant=&quot;destructive&quot;>Declined</Badge>;
      case 'rescheduled':
        return <Badge className=&quot;bg-blue-500&quot;>Rescheduled</Badge>;
      case 'completed':
        return <Badge className=&quot;bg-green-700&quot;>Completed</Badge>;
      case 'cancelled':
        return <Badge variant=&quot;outline&quot; className=&quot;border-destructive text-destructive&quot;>Cancelled</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      default:
        return <Badge>{interview.status}</Badge>
    }
  },
  
<<<<<<< HEAD
  const getOtherPartyName = () => {
    if (isClient) {
      return interview.talent_name || 'Talent'
    } else {
      return interview.client_name || 'Client'
    }
  },

  return (
    <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2 relative&quot;>
        <div className=&quot;absolute right-4 top-4&quot;>
          {getStatusBadge()}
        </div>
        <CardTitle className=&quot;text-lg&quot;>{interview.title}</CardTitle>
        <p className=&quot;text-sm text-muted-foreground&quot;>
          with {getOtherPartyName()}
=======
  const _getOtherPartyName = () => {_if (isClient) {
      return interview.talent_name || 'Talent';} else {_return interview.client_name || 'Client';}
  };

  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2 relative">
        <div className="absolute right-4 top-4">
          {_getStatusBadge()}
        </div>
        <CardTitle className="text-lg">{_interview.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          with {_getOtherPartyName()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </p>
      </CardHeader>
      
      <CardContent className=&quot;pt-2&quot;>
        <div className=&quot;space-y-3&quot;>
          <div className=&quot;flex items-start gap-3&quot;>
            <Clock className=&quot;h-4 w-4 mt-0.5 text-muted-foreground&quot; />
            <div>
<<<<<<< HEAD
              <p className=&quot;font-medium&quot;>{formattedDate}</p>
              <p className=&quot;text-sm text-muted-foreground&quot;>
                {formattedTime} - {formattedEndTime} ({interview.duration_minutes} minutes)
              </p>
              <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
                {getRelativeTime()}
=======
              <p className="font-medium">{_formattedDate}</p>
              <p className="text-sm text-muted-foreground">
                {_formattedTime} - {_formattedEndTime} ({_interview.duration_minutes} minutes)
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {_getRelativeTime()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            </div>
          </div>

<<<<<<< HEAD
          {interview.meeting_platform && (
            <div className=&quot;flex items-center gap-3&quot;>
              <Video className=&quot;h-4 w-4 text-muted-foreground&quot; />
=======
          {_interview.meeting_platform && (
            <div className="flex items-center gap-3">
              <Video className="h-4 w-4 text-muted-foreground" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div>
                <p className=&quot;font-medium capitalize&quot;>{interview.meeting_platform}</p>
              </div>
            </div>
          )}
          
<<<<<<< HEAD
          {interview.notes && (
            <div className=&quot;flex items-start gap-3&quot;>
              <MessageSquare className=&quot;h-4 w-4 mt-0.5 text-muted-foreground&quot; />
              <p className=&quot;text-sm line-clamp-2&quot;>{interview.notes}</p>
=======
          {_interview.notes && (
            <div className="flex items-start gap-3">
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <p className="text-sm line-clamp-2">{interview.notes}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          )}
        </div>
      </CardContent>
      
<<<<<<< HEAD
      <CardFooter className=&quot;pt-2&quot;>
        <div className=&quot;grid grid-cols-1 gap-2 w-full&quot;>
          {/* For clients with pending requests */}
          {isClient && isInterviewPending && (
=======
      <CardFooter className="pt-2">
        <div className="grid grid-cols-1 gap-2 w-full">
          {_/* For clients with pending requests */}
          {_isClient && isInterviewPending && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;w-full&quot;>
                  <X className=&quot;h-4 w-4 mr-2&quot; /> Cancel Request
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
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
<<<<<<< HEAD
                    disabled={isLoading}
                    className=&quot;bg-destructive text-destructive-foreground hover:bg-destructive/90&quot;
=======
                    disabled={_isLoading}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Cancel Interview
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          
<<<<<<< HEAD
          {/* For talents with pending requests */}
          {isTalent && isInterviewPending && (
            <div className=&quot;grid grid-cols-2 gap-2&quot;>
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={isLoading}>
                Respond
              </Button>
              <Button variant=&quot;outline&quot; onClick={() => handleRespondToInterview('declined')} disabled={isLoading}>
=======
          {_/* For talents with pending requests */}
          {_isTalent && isInterviewPending && (_<div className="grid grid-cols-2 gap-2">
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={_isLoading}>
                Respond
              </Button>
              <Button variant="outline" onClick={_() => handleRespondToInterview('declined')} disabled={_isLoading}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Decline
              </Button>
            </div>
          )}
          
          {_/* For confirmed interviews */}
          {_isInterviewConfirmed && !isInterviewPast && (
            <>
              {interview.meeting_link ? (
<<<<<<< HEAD
                <Button className=&quot;w-full&quot; asChild disabled={!isInterviewLive}>
                  <a href={interview.meeting_link} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                    <Video className=&quot;h-4 w-4 mr-2&quot; /> 
                    {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                    <ExternalLink className=&quot;h-3 w-3 ml-2&quot; />
                  </Link>
                </Button>
              ) : (
                <Button className=&quot;w-full&quot; disabled={!isInterviewLive}>
                  <Video className=&quot;h-4 w-4 mr-2&quot; /> 
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
=======
                <Button className="w-full" asChild disabled={!isInterviewLive}>
                  <a href={_interview.meeting_link} target="_blank" rel="noopener noreferrer">
                    <Video className="h-4 w-4 mr-2" /> 
                    {_isInterviewLive ? 'Join Now' : 'Join Meeting'}
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </Button>
              ) : (
                <Button className="w-full" disabled={_!isInterviewLive}>
                  <Video className="h-4 w-4 mr-2" /> 
                  {_isInterviewLive ? 'Join Now' : 'Join Meeting'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Button>
              )}
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;w-full mt-2&quot;>
                    <X className=&quot;h-4 w-4 mr-2&quot; /> Cancel Interview
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;>
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
                      disabled={isLoading}
                      className=&quot;bg-destructive text-destructive-foreground hover:bg-destructive/90&quot;
=======
                      onClick={_handleCancelInterview} 
                      disabled={_isLoading}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
      
<<<<<<< HEAD
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>
        <DialogContent className=&quot;sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white&quot;>
=======
      {_/* Response dialog for talents */}
      <Dialog open={_isResponseDialogOpen} onOpenChange={_setIsResponseDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <DialogHeader>
            <DialogTitle>Respond to Interview Request</DialogTitle>
          </DialogHeader>
          <InterviewResponseForm 
            interview={_interview}
            onConfirm={_() => handleRespondToInterview('confirmed')}
            onClose={_() => setIsResponseDialogOpen(false)}
            isLoading={_isLoading}
          />
        </DialogContent>
      </Dialog>
    </Card>
  )
}
