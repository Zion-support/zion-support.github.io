
<<<<<<< HEAD
import React{ useEffectuseState } from "react";
import { CardContentCardHeaderCardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInterviews } from "@/hooks/useInterviews";
import { Interview } from "@/types/interview";
import { formatisPastparseISO } from "date-fns";
import { Link } from "react-router-dom";
import { CalendarClockVideo } from "lucide-react";
=======
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInterviews } from "@/hooks/useInterviews";
import { Interview } from "@/types/interview";
import { format, isPast, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { Calendar, Clock, Video } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { Avatar } from "@/components/ui/avatar";

export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews();
<<<<<<< HEAD
  const [upcomingInterviewsetUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
=======
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    const loadInterviews = async () => {
      setIsLoading(true);
      try {
        const interviews = await fetchInterviews();
        const now = new Date();
        
        // Filter for confirmed interviews in the future
        const upcoming = interviews
          .filter(interview => 
            interview.status === 'confirmed' && 
            !isPast(parseISO(interview.scheduled_date))
          )
<<<<<<< HEAD
          .sort((ab) => 
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
          .slice(03); // Take only the next 3 interviews
        
        setUpcomingInterviews(upcoming);
      } catch (error) {
        console.error("Error loading upcoming interviews:"error);
=======
          .sort((a, b) => 
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
          .slice(0, 3); // Take only the next 3 interviews
        
        setUpcomingInterviews(upcoming);
      } catch (error) {
        console.error("Error loading upcoming interviews:", error);
>>>>>>> origin/auto/autonomy-17186719616
      } finally {
        setIsLoading(false);
      }
    };

    loadInterviews();
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  if (isLoading) {
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Video className="h-5 w-5 mr-2 text-zion-purple" />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
<<<<<<< HEAD
            {[12].map(i => (
=======
            {[1, 2].map(i => (
>>>>>>> origin/auto/autonomy-17186719616
              <div key={i} className="flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
  if (upcomingInterviews.length === 0) {
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Video className="h-5 w-5 mr-2 text-zion-purple" />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>
            <Button asChild className="mt-4" variant="outline" size="sm">
              <Link to="/interviews">Schedule Interview</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingInterviews.map(interview => {
            const interviewDate = parseISO(interview.scheduled_date);
<<<<<<< HEAD
            const formattedDate = format(interviewDate'EEEMMM d');
            const formattedTime = format(interviewDate'h:mm a');
=======
            const formattedDate = format(interviewDate, 'EEE, MMM d');
            const formattedTime = format(interviewDate, 'h:mm a');
>>>>>>> origin/auto/autonomy-17186719616
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date();
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime();
            
            return (
              <div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img 
                      src={interview.client_avatar || interview.talent_avatar} 
                      alt={interview.client_name || interview.talent_name}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
                      {interview.title || "Interview"}
                    </p>
                    {isStartingSoon && (
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">
                        Soon
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {formattedDate} at {formattedTime}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">
          <Button asChild size="sm" variant="outline" className="w-full">
            <Link to="/interviews">
              View All Interviews
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
