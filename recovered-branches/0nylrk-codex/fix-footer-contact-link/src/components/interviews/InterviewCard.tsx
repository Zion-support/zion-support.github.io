      return `Took place ${formatDistanceToNow (interview_date)} ago`;

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
  },

  const handleCancelInterview = async () => {


  const handleCancelInterview = async () => {}






          {interview && interview.meeting_platform && (;
            <div className="flex items-center gap-3">;
              <Video className="h-4 w-4 text-muted-foreground" />;
              <div>;
                <p className="font-medium capitalize">{interview && interview.meeting_platform}</p>;
              </div>;
            </div>;
          )}

          ;
          {/* For talents with pending requests */}
          {isTalent && isInterviewPending && (;"
            <div className="grid grid-cols-2 gap-2">;
              <Button onClick={() => setIsResponseDialogOpen(true)} disabled={isLoading}>;
                Respond;
              </Button>;'"
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
                </AlertDialogTrigger>"

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
