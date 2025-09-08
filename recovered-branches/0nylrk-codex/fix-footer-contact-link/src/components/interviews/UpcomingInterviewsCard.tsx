  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);      setIsLoading(true);
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();

    },

    loadInterviews()
  }, []),

import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, Clock, Video } from "lucide-react",;

import { Avatar } from "@/components/ui/avatar",;
export function UpcomingInterviewsCard() { return null; }
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;

          );
          .slice(0, 3), // Take only the next 3 interviews;

        setUpcomingInterviews(upcoming);
      } catch (error) {;
        console && console.error("Error loading upcoming interviews:", error);
      } finally {;
        setIsLoading(false);
      }
    };


  if (isLoading) {;

    return (    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;"
          <CardTitle className="text-lg flex items-center">;"
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;"
          <div className="space-y-4">;
            {[1, 2].map(i => (;"
              <div key={i} className="flex items-center gap-3 animate-pulse">;"
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>;"
                <div className="flex-1">;"
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>;"
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>;
                </div>;
              </div>;    return (    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;"
          <CardTitle className="text-lg flex items-center">;"
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;"
          <div className="text-center py-6">;"
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />;"
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>;"
            <Button asChild className="mt-4" variant="outline" size="sm">;"
              <Link to="/interviews">Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
  return (
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews;
        </CardTitle>
      </CardHeader>
      <CardContent>"
        <div className="space-y-4">
          {upcomingInterviews.map(interview => {                    </div>;
                  )}
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
                      {interview && interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;                        Soon;
                      </span>;
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;

                    <Clock className="h-3 w-3 mr-1" />;
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
            );
          })}
