<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
interface InterviewCardProps {;
  interview: Interview,;
  onRefresh: () => Promise<void>;
}

export function InterviewCard(): any ({ interview, onRefresh }: InterviewCardProps) {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}

export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {;

  const { user } = useAuth();
<<<<<<< HEAD

export /**
 * InterviewCard - Function description
 */
function InterviewCard() {
  }
  const { user } = use_auth ();
  const { respondToInterview, cancel_interview } = use_interviews ();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
;
  const is_talent = user?.id === interview.talent_id;
;
  // Format interview date and time;
  const interview_date = parseISO (interview.scheduled_date);
  const formatted_date = format (interview_date, 'EEEE, MMMM d');'
  const formatted_time = format (interview_date, '"h": mm a'),'
  // Calculate when interview ends;
  const end_time = new Date (interview_date);
  end_time.set_minutes (end_time.get_minutes () + interview.duration_minutes);
  const formattedEndTime = format (end_time, '"h": mm a'),'
  const isInterviewPast = is_past (interview_date);
;
  const getRelativeTime = () =>: any {
    }
    if () {) {
  $2
}

    }
  }

=======
  const [isLoading, setIsLoading] = useState(false);import React, { useState } from './react';'
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
import { InterviewResponseForm } from './InterviewResponseForm';'
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}

  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);

  const { user } = useAuth();

  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

import React, { useState } from './react';

    if (success) {

    } else {
      return `Starts in ${formatDistanceToNow (interview_date)}`;
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading(true),
    const success = await respondToInterview(interview.id, { 
      interview_id: interview.id, 
      status 


<<<<<<< HEAD
    if (success) {
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`


=======
      toast({
        title: `Interview ${status}`
        description: `You have successfully ${status} the interview request.`
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
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
<<<<<<< HEAD

      });
      setIsResponseDialogOpen (false);
      await on_refresh ();
    } else {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {
  const { user } = useAuth($2);
  const { respondToInterview, cancelInterview } = useInterviews($2);
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState($2);
  const [isLoading, setIsLoading] = useState($2);
  const isClient = $2;
  const isTalent = $2;
  // Format interview date and time
  const interviewDate = parseISO($2);
  const formattedDate = format($2);
  const formattedTime = format($2);
  // Calculate when interview ends
  const endTime = new Date($2);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes),
  const formattedEndTime = format($2);
  const isInterviewPending = $2;
  const isInterviewConfirmed = $2;
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before
  const isInterviewPast = isPast($2);
  const getRelativeTime = $2;
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {
    setIsLoading($2);
    const success = await respondToInterview($2);
    if (success) {
      toast($2);
      setIsResponseDialogOpen($2);
      await onRefresh()
    } else {
      toast({
        title: "Error"
        description: "Failed to respond to the interview request. Please try again."
        variant: "destructive"
      })
    }
    setIsLoading(false)
  },

  const handleCancelInterview = async () => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setIsLoading(true),
    const success = await cancelInterview(interview.id),

      toast({
        title: "Interview cancelled"
        description: "The interview has been cancelled successfully."

      toast ({
        title: "Error",
        description: "Failed to respond to the interview request. Please try again.",
        variant: "destructive";


      });
    }
    setIsLoading (false);
  }
;
<<<<<<< HEAD

  const handleCancelInterview = async () => {}

=======
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======

    } else {
      toast({
        title: "Error"
        description: "Failed to cancel the interview. Please try again."
        variant: "destructive"
      })
    }
    setIsLoading(false)
  },


  const getStatusBadge = () => {
    switch (interview.status) {
      case 'requested':
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'confirmed':


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const isClient = user?.id === interview && interview.client_id;
  const isTalent = user?.id === interview && interview.talent_id;
  // Format interview date and time;

  const formattedTime = format(interviewDate, 'h: mm a'),;
  // Calculate when interview ends;
  const endTime = new Date(interviewDate);

<<<<<<< HEAD
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a'),;
  const isInterviewPending = interview && interview.status === 'requested';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const isInterviewConfirmed = interview && interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate && interviewDate.getTime() - 5 * 60000)), // 5 minutes before;
  const isInterviewPast = isPast(interviewDate);
  const getRelativeTime = () => {;

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

<<<<<<< HEAD

  };


  },;

'
  const handleRespondToInterview = async (status: 'confirmed' | 'declined' | 'rescheduled') => {;
    setIsLoading(true),;
    const success = await respondToInterview(interview && interview.id, { ;
      interview_id: interview && interview.id, ;

      status ;
    });



=======

  },;
    }
    setIsLoading(true),;
      }
      "interview_id": interview && interview.id, ;
      status ;
    });
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (success) {;

      });
      setIsResponseDialogOpen(false);
      await onRefresh();
    } else {;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (success) {;

        variant: "destructive";
      });
    }
    setIsLoading(false);
  };

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const getStatusBadge = () => {;
    switch (interview && interview.status) {;'
      case 'requested':;"
        return <Badge className="bg-amber-500">Pending</Badge>;'
      case 'confirmed':;
        return isInterviewLive ? ;"
          <Badge className="bg-green-500 animate-pulse">Live Now</Badge> : ;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
  };
  const getOtherPartyName = () => {;
    if (isClient) {;
      return interview && interview.talent_name || 'Talent';
    } else {;
      return interview && interview.client_name || 'Client';
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

              </p>;
              <p className="text-xs text-muted-foreground mt-1">;
                {getRelativeTime()}
              </p>;
            </div>;
          </div>;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:;
        return <Badge>{interview && interview.status}</Badge>;
    }
    }
  }


<<<<<<< HEAD
          {interview && interview.notes && (;
            <div className="flex items-start gap-3">;
              <MessageSquare className="h-4 w-4 mt-0 && 0.5 text-muted-foreground" />;
              <p className="text-sm line-clamp-2">{interview && interview.notes}</p>;

            </div>;
          )}
        </div>;
      </CardContent>;



      <CardFooter className="pt-2">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="grid grid-cols-1 gap-2 w-full">;
          {/* For clients with pending requests */}
          {isClient && isInterviewPending && (;
            <AlertDialog>;

<<<<<<< HEAD
              <AlertDialogTrigger asChild>;
                <Button variant="outline" size="sm" className="w-full">;
                  <X className="h-4 w-4 mr-2" /> Cancel Request;
                </Button>;
              </AlertDialogTrigger>;
              <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                <AlertDialogHeader>;
                  <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
;

  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2 relative">

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

              <p className="text-xs text-muted-foreground mt-1">
                {getRelativeTime()}
              </p>
            </div>
          </div>

                <p className="font-medium capitalize">{interview.meeting_platform}</p>
              </div>
            </div>
          )}

              <p className="text-sm line-clamp-2">{interview.notes}</p>
            </div>
          )}
        </div>

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

                  <AlertDialogDescription>;
                    Are you sure you want to cancel this interview request? This action cannot be undone.;
                  </AlertDialogDescription>;
                </AlertDialogHeader>;
                <AlertDialogFooter>;

                  <AlertDialogCancel>Go Back</AlertDialogCancel>;
                  <AlertDialogAction ;
                    onClick={handleCancelInterview} ;
                    disabled={isLoading}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
                  >;
                    Cancel Interview;
                  </AlertDialogAction>;
                </AlertDialogFooter>;
              </AlertDialogContent>;

;





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}

                    <ExternalLink className="h-3 w-3 ml-2" />;
                  </a>;
                </Button>;
              ) : (;"
                <Button className="w-full" disabled={!isInterviewLive}>;"
                  <Video className="h-4 w-4 mr-2" /> ;

"
                  <Video className="h-4 w-4 mr-2" /> 

                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>;
              )}

                  <Video className="h-4 w-4 mr-2" /> 
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>
              )}

<<<<<<< HEAD


=======
                  <Video className="h-4 w-4 mr-2" />
                  <Video className="h-4 w-4 mr-2" /> 
                  {isInterviewLive ? 'Join Now' : 'Join Meeting'}
                </Button>
              )}
              
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <AlertDialog>

                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <X className="h-4 w-4 mr-2" /> Cancel Interview

                  </Button>
                </AlertDialogTrigger>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Go Back</AlertDialogCancel>


              <AlertDialog>;
                <AlertDialogTrigger asChild>;"
                  <Button variant="outline" size="sm" className="w-full mt-2">;"
                    <X className="h-4 w-4 mr-2" /> Cancel Interview;
                  </Button>;
                </AlertDialogTrigger>;"
                <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white">;
                  <AlertDialogHeader>;
                    <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba



                    <AlertDialogDescription>;
                      Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified.;
                    </AlertDialogDescription>;
                  </AlertDialogHeader>;
                  <AlertDialogFooter>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

<AlertDialogCancel>Go Back</AlertDialogCancel>;
                    <AlertDialogAction ;
                      onClick={handleCancelInterview} ;
                      disabled={isLoading}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
                    >;

                      Cancel Interview;
                    </AlertDialogAction>;
                  </AlertDialogFooter>;
                </AlertDialogContent>;
              </AlertDialog>;

<<<<<<< HEAD
            </>;          )}


=======
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
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">
          <DialogHeader>
            <DialogTitle>Respond to Interview Request</DialogTitle>
          </DialogHeader>
          <InterviewResponseForm
        </div>;
      </CardFooter>;
      ;
      {/* Response dialog for talents */}
      <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>;

        <DialogContent className="sm:max-w-[500px] bg-zion-blue-dark border-zion-blue-light text-white">;
          <DialogHeader>;
            <DialogTitle>Respond to Interview Request</DialogTitle>;
          </DialogHeader>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
            interview={interview}
            onConfirm={() => handleRespondToInterview('confirmed')}
            onClose={() => setIsResponseDialogOpen(false)}
            isLoading={isLoading}

<<<<<<< HEAD

=======
          />
        </DialogContent>
      </Dialog>
    </Card>
  )
}
          />;
        </DialogContent>;
      </Dialog>;
    </Card>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </>)}
        </div>;
      </CardFooter>;
      {/* Response dialog for talents */}

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
<<<<<<< HEAD

    </Card>);




=======
    </Card>);

    </Card>);

>>>>>>> origin/cursor/delete-old-data-records-6bba
