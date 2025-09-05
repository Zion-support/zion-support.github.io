
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
    }
  };

  const _handleRespondToInterview = async (_status: 'confirmed' | 'declined' | 'rescheduled') => {_setIsLoading(true);
    const _success = await respondToInterview(interview.id, _{ 
      interview_id: interview.id, _status});
    
    if (success) {_toast({
        title: `Interview ${status}`,
        description: `You have successfully ${_status} the interview request.`
      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {_toast({
        title: "Error", _description: "Failed to respond to the interview request. Please try again.", _variant: "destructive"});
    }
    setIsLoading(false);
  };

  const _handleCancelInterview = async () => {_setIsLoading(true);
    const _success = await cancelInterview(interview.id);
    
    if (success) {
      toast({
        title: "Interview cancelled", _description: "The interview has been cancelled successfully."});
      await onRefresh();
    } else {_toast({
        title: "Error", _description: "Failed to cancel the interview. Please try again.", _variant: "destructive"});
    }
    setIsLoading(false);
  };

  const _getStatusBadge = () => {_switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':
        return isInterviewLive ? 
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : 
          <Badge className="bg-green-600">Confirmed</Badge>;
      case 'declined':
        return <Badge variant="destructive">Declined</Badge>;
      case 'rescheduled':
        return <Badge className="bg-blue-500">Rescheduled</Badge>;
      case 'completed':
        return <Badge className="bg-green-700">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:
        return <Badge>{interview.status}</Badge>;
    }
  };
  
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
        </p>
      </CardHeader>
      
      <CardContent className="pt-2">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
            <div>
              <p className="font-medium">{_formattedDate}</p>
              <p className="text-sm text-muted-foreground">
                {_formattedTime} - {_formattedEndTime} ({_interview.duration_minutes} minutes)
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {_getRelativeTime()}
              </p>
            </div>
          </div>

          {_interview.meeting_platform && (
            <div className="flex items-center gap-3">
              <Video className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium capitalize">{interview.meeting_platform}</p>
              </div>
            </div>
          )}
          
          {_interview.notes && (
            <div className="flex items-start gap-3">
              <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <p className="text-sm line-clamp-2">{interview.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="grid grid-cols-1 gap-2 w-full">
          {_/* For clients with pending requests */}
          {_isClient && isInterviewPending && (
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
                    disabled={_isLoading}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Cancel Interview
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          
          {_/* For talents with pending requests */}
          {_isTalent && isInterviewPending && (_<div className="grid grid-cols-2 gap-2">
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={_isLoading}>
                Respond
              </Button>
              <Button variant="outline" onClick={_() => handleRespondToInterview('declined')} disabled={_isLoading}>
                Decline
              </Button>
            </div>
          )}
          
          {_/* For confirmed interviews */}
          {_isInterviewConfirmed && !isInterviewPast && (
            <>
              {interview.meeting_link ? (
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
                </Button>
              )}
              
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
                      onClick={_handleCancelInterview} 
                      disabled={_isLoading}
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
      
      {_/* Response dialog for talents */}
      <Dialog open={_isResponseDialogOpen} onOpenChange={_setIsResponseDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">
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
  );
}
