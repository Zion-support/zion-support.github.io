
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import Link from "next/link",
import { Calendar, Clock, Video } from 'lucide-react'
import { Avatar } from "@/components/ui/avatar",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useEffect, useState } from &quot;react&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useInterviews } from &quot;@/hooks/useInterviews&quot;;
import { Interview } from &quot;@/types/interview&quot;;
import { format, isPast, parseISO } from &quot;date-fns&quot;;
import Link from &quot;next/link&quot;;
import { Calendar, Clock, Video } from 'lucide-react'
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  useEffect(() => {
    const loadInterviews = async () => {
      setIsLoading(true),
      try {
        const interviews = await fetchInterviews(),
        
        // Filter for confirmed interviews in the future
        const upcoming = interviews
          .filter(interview => 
            interview.status === 'confirmed' && 
            !isPast(parseISO(interview.scheduled_date))
          )
          .sort((a, b) => 
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
          .slice(0, 3), // Take only the next 3 interviews
        
        setUpcomingInterviews(upcoming)
      } catch (error) {
        logErrorToProduction('Error loading upcoming interviews:', { data: error })
      } finally {
        setIsLoading(false)
      }
    },

    loadInterviews()
  }, []),

  if (isLoading) {
    return (
      <Card className=&quot;bg-zion-blue-dark/40 border-zion-blue-light&quot;>
        <CardHeader>
          <CardTitle className=&quot;text-lg flex items-center&quot;>
            <Video className=&quot;h-5 w-5 mr-2 text-zion-purple&quot; />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=&quot;space-y-4&quot;>
            {[1, 2].map(i => (
              <div key={i} className=&quot;flex items-center gap-3 animate-pulse&quot;>
                <div className=&quot;w-10 h-10 bg-zion-blue-light/30 rounded-full&quot;></div>
                <div className=&quot;flex-1&quot;>
                  <div className=&quot;h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2&quot;></div>
                  <div className=&quot;h-3 w-1/2 bg-zion-blue-light/30 rounded&quot;></div>
                </div>
              </div>
=======
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import Link from "next/link",;
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar",;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function UpcomingInterviewsCard() {;
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
      try {;
        const interviews = await fetchInterviews(),;
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview =>;
            interview.status === 'confirmed' &&;
            !isPast(parseISO(interview.scheduled_date));
          );
          .sort((a, b) =>;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
          );
          .slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming);
      } catch (error) {;
        logErrorToProduction('Error loading upcoming interviews:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    },;
    loadInterviews();
  }, []),;
  if (isLoading) {;
    return (;
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-lg flex items-center">;
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className="space-y-4">;
            {[1, 2].map(i => (;
              <div key={i} className="flex items-center gap-3 animate-pulse">;
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>;
                <div className="flex-1">;
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>;
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>;
                </div>;
              </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }
<<<<<<< HEAD

  if (upcomingInterviews.length === 0) {
    return (
      <Card className=&quot;bg-zion-blue-dark/40 border-zion-blue-light&quot;>
        <CardHeader>
          <CardTitle className=&quot;text-lg flex items-center&quot;>
            <Video className=&quot;h-5 w-5 mr-2 text-zion-purple&quot; />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=&quot;text-center py-6&quot;>
            <Calendar className=&quot;h-10 w-10 mx-auto mb-2 text-muted-foreground&quot; />
            <p className=&quot;text-sm text-muted-foreground&quot;>No upcoming interviews scheduled</p>
            <Button asChild className=&quot;mt-4&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
              <Link href=&quot;/interviews&quot;>Schedule Interview</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className=&quot;bg-zion-blue-dark/40 border-zion-blue-light&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-lg flex items-center&quot;>
          <Video className=&quot;h-5 w-5 mr-2 text-zion-purple&quot; />
          Upcoming Interviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-4&quot;>
          {upcomingInterviews.map(interview => {
            const interviewDate = parseISO(interview.scheduled_date),
            const formattedDate = format(interviewDate, 'EEE, MMM d'),
            const formattedTime = format(interviewDate, 'h: mm a'),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
            
            return (
              <div key={interview.id} className=&quot;flex items-center gap-3&quot;>
                <Avatar className=&quot;h-10 w-10 bg-zion-purple/10&quot;>
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading=&quot;lazy&quot;
                    />
                  ) : (
                    <div className=&quot;flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium&quot;>
                      {(interview.client_name || interview.talent_name || &quot;U&quot;).charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className=&quot;flex-1&quot;>
                  <div className=&quot;flex justify-between items-start&quot;>
                    <p className=&quot;font-medium line-clamp-1&quot;>
                      {interview.title || &quot;Interview&quot;}
                    </p>
                    {isStartingSoon && (
                      <span className=&quot;text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse&quot;>
                        Soon
                      </span>
                    )}
                  </div>
                  <div className=&quot;flex items-center text-sm text-muted-foreground&quot;>
                    <Clock className=&quot;h-3 w-3 mr-1&quot; />
=======
;
  if (upcomingInterviews.length === 0) {;
    return (;
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-lg flex items-center">;
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className="text-center py-6">;
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />;
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>;
            <Button asChild className="mt-4" variant="outline" size="sm">;
              <Link href="/interviews">Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
;
  return (;
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-lg flex items-center">;
          <Video className="h-5 w-5 mr-2 text-zion-purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview.scheduled_date),;
            const formattedDate = format(interviewDate, 'EEE, MMM d'),;
            const formattedTime = format(interviewDate, 'h: mm a'),;
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date();
            const isStartingSoon =;
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&;
              interviewDate.getTime() > now.getTime();
            return (;
              <div key={interview.id} className="flex items-center gap-3">;
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {interview.client_avatar || interview.talent_avatar ? (;
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading="lazy";
                    />;
                  ) : (;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>;
                  )}
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
                        Soon;
                      </span>;
                    )}
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;
                    <Clock className="h-3 w-3 mr-1" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
            );
          })}
<<<<<<< HEAD
        </div>
        
        <div className=&quot;mt-4 pt-3 border-t border-zion-blue-light/40&quot;>
          <Button asChild size=&quot;sm&quot; variant=&quot;outline&quot; className=&quot;w-full&quot;>
            <Link href=&quot;/interviews&quot;>
              View All Interviews
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
=======
        </div>;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
            <Link href="/interviews">;
              View All Interviews;
            </Link>;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;