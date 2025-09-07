<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),
=======
        // Filter for confirmed interviews in the future
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Filter for confirmed interviews in the future
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
// Filter for confirmed interviews in the future

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
        const upcoming = interviews
=======
        // Filter for confirmed interviews in the future        const upcoming = interviews
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Filter for confirmed interviews in the future;
        const upcoming = interviews;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
          .filter(
            interview =>
              interview.status === 'confirmed' &&
              !isPast(parseISO(interview.scheduled_date))
          )

          .sort(;
            (a, b) =>;
              parseISO(a.scheduled_date).getTime() -;
              parseISO(b.scheduled_date).getTime()          );

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
          .slice(0, 3); // Take only the next 3 interviews
=======

          .slice(0, 3); // Take only the next 3 interviews;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
        setUpcomingInterviews(upcoming)
      } catch (error) {'
        logErrorToProduction('Error loading upcoming interviews:', {}
          data: error;
        })
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
          .sort((a, b) => 
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
          .slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming)
      } catch (error) {'
        logErrorToProduction('Error loading upcoming interviews:', { data: error })
      } finally {}
        setIsLoading(false)
      }
    },

    loadInterviews()
  }, []),

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
  if (isLoading) {
=======



  if (isLoading) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
        <CardHeader>"
          <CardTitle className="text-lg flex items-center">"
            <Video className="h-5 w-5 mr-2 text-zion-purple" />
            Upcoming Interviews;
          </CardTitle>
        </CardHeader>
        <CardContent>"
          <div className="space-y-4">
            {[1, 2].map(i => ("
              <div key={i} className="flex items-center gap-3 animate-pulse">"
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>"
                <div className="flex-1">"
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>"
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>
                </div>
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import Link from "next/link",;
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar",;
import {logErrorToProduction} from '@/utils/productionLogger',;
=======
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
import React, { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInterviews } from '@/hooks/useInterviews';
import { Interview } from '@/types/interview';
import { format, isPast, parseISO } from 'date-fns';
import Link from 'next/link';
import { Calendar, Clock, Video } from 'lucide-react';
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
import { Avatar } from '@/components/ui/avatar';
import { logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function UpcomingInterviewsCard() {;
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
=======
"
import React, { useEffect, useState } from "react",;"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { useInterviews } from "@/hooks/useInterviews",;"
import { Interview } from "@/types/interview",;"
import { format, isPast, parseISO } from "date-fns",;"
import Link from "next/link",;'
import { Calendar, Clock, Video } from 'lucide-react';'
import { Avatar } from '@/components / ui / avatar';'
import { logErrorToProduction } from '@/utils / production_logger';
export /**;
 * UpcomingInterviewsCard - Function description;
 */
function UpcomingInterviewsCard() {}
  const { fetch_interviews } = use_interviews ();
  const [upcoming_interviews, setUpcomingInterviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  useEffect ((, ) => {}
    const load_interviews = async () => {      setIsLoading (true);
      try {}
        const interviews = await fetch_interviews ();
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter (
            interview =>;'
              interview.status === 'confirmed' &&;
              !is_past (parseISO (interview.scheduled_date)));
          .sort (
            (a, b) =>;
              parseISO (a.scheduled_date).get_time () -;
              parseISO (b.scheduled_date).get_time ()          );
          .slice (0, 3); // Take only the next 3 interviews;
        setUpcomingInterviews (upcoming);
      } catch (error) {'
        logErrorToProduction ('Error loading upcoming interviews:', {}
          data: error,
        });
      } finally {}
        setIsLoading (false);
      }
    }

'
import React, { useEffect, useState } from 'react';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';'
import { Button } from '@/components/ui/button';'
import { useInterviews } from '@/hooks/useInterviews';'
import { Interview } from '@/types/interview';'
import { format, isPast, parseISO } from 'date-fns';'
import Link from 'next/link';'
import { Calendar, Clock, Video } from 'lucide-react';'
import { Avatar } from '@/components/ui/avatar';'
import { logErrorToProduction } from '@/utils/productionLogger';
export function UpcomingInterviewsCard() { return null; }
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((,) => {;
    const loadInterviews = async () => {      setIsLoading(true);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
      try {;
        const interviews = await fetchInterviews(),;
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
          .filter(interview =>;
            interview.status === 'confirmed' &&;
            !isPast(parseISO(interview.scheduled_date));
=======
          .filter(;
            interview =>;'
              interview && interview.status === 'confirmed' &&;
              !isPast(parseISO(interview && interview.scheduled_date));
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
          );
          .sort((a, b) =>;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
          );
          .slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming);
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
      } catch (error) {;
        logErrorToProduction('Error loading upcoming interviews:', { data: error });
=======
      } catch (error) {;'
        logErrorToProduction('Error loading upcoming interviews:', {;
          data: error,;
        });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
      } finally {;
        setIsLoading(false);
      }
    },;
    loadInterviews();
  }, []),;
  if (isLoading) {;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
    return (;
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
          <CardTitle className="text-lg flex items-center">;
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          <CardTitle className='text-lg flex items-center'>;
=======
    return ('
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;'
          <CardTitle className='text-lg flex items-center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
    load_interviews ();
  }, []);
  // Check condition;
if ( {) {}
  $2;
}
    return ('
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
        <CardHeader>;'
          <CardTitle className='text - lg flex items - center'>;'
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="space-y-4">;
            {[1, 2].map(i => (;
              <div key={i} className="flex items-center gap-3 animate-pulse">;
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>;
                <div className="flex-1">;
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>;
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>;
                </div>;
              </div>;
            ))}
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
          </div>;
        </CardContent>;
      </Card>;
    );
<<<<<<< HEAD
=======



<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
  }
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
              <Link href="/interviews">Schedule Interview</Link>
=======
  if (upcomingInterviews.length === 0) {}
    return ('
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
        <CardHeader>'
          <CardTitle className='text-lg flex items-center'>'
            <Video className='h-5 w-5 mr-2 text-zion-purple' />
            Upcoming Interviews;
          </CardTitle>
        </CardHeader>
        <CardContent>'
          <div className='text-center py-6'>'
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />'
            <p className='text-sm text-muted-foreground'>
              No upcoming interviews scheduled;
            </p>'
            <Button asChild className='mt-4' variant='outline' size='sm'>'
              <Link href='/interviews'>Schedule Interview</Link>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
            </Button>
          </div>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  }

  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          </div>;
        </CardContent>;
      </Card>;
    );
  }

  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return ('
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;'
          <CardTitle className='text-lg flex items-center'>;'
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;'
          <div className='text-center py-6'>;'
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />;'
            <p className='text-sm text-muted-foreground'>;
              No upcoming interviews scheduled;
            </p>;'
            <Button asChild className='mt-4' variant='outline' size='sm'>;'
              <Link href='/interviews'>Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
  return (



<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            const interviewDate = parseISO(interview.scheduled_date),
            const formattedDate = format(interviewDate, 'EEE, MMM d'),
=======
            const interviewDate = parseISO(interview.scheduled_date),'
            const formattedDate = format(interviewDate, 'EEE, MMM d'),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
            const formattedTime = format(interviewDate, 'h: mm a'),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
<<<<<<< HEAD
            
<<<<<<< HEAD
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
import { Avatar } from '@/components/ui/avatar';
import { logErrorToProduction } from '@/utils/productionLogger';

export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadInterviews = null;
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
            return (
              <div key={interview.id} className="flex items-center gap-3">
=======
            return ("
              <div key={interview.id} className="flex items-center gap-3">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
                      loading="lazy"
                    />
                  ) : (
=======

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>
                  )}
                </Avatar>
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
=======
"
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">"
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>
                  )}
                </Avatar>"
                <div className="flex-1">"
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
                      {interview.title || "Interview"}
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">"
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}"
                    </div>
                  )}
                </Avatar>
                <div className="flex-1">"
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
                      {interview.title || "Interview"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                    </p>
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                    {isStartingSoon && (
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">
                        Soon
                      </span>
=======
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
=======
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                        Soon
                      </span>
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
                    {isStartingSoon && ('
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
                        Soon;
                      </span>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;'
        <CardTitle className='text-lg flex items-center'>;'
          <Video className='h-5 w-5 mr-2 text-zion-purple' />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;'
        <div className='space-y-4'>;
          {upcomingInterviews && upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview && interview.scheduled_date);'
            const formattedDate = format(interviewDate, 'EEE, MMM d');'
            const formattedTime = format(interviewDate, 'h:mm a');
            // Determine if interview is happening soon (within 30,  minutes)            const now = new Date();
            const isStartingSoon =;
              interviewDate && interviewDate.getTime() - now && now.getTime() < 30 * 60 * 1000 &&;
              interviewDate && interviewDate.getTime() > now && now.getTime();
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx

            return ('
              <div key={interview && interview.id} className='flex items-center gap-3'>;'
=======
            return (
              <div key={interview && interview.id} className='flex items-center gap-3'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                <Avatar className='h-10 w-10 bg-zion-purple/10'>;
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (;
                    <img;
                      src={interview && interview.client_avatar || interview && interview.talent_avatar}
                      alt={interview && interview.client_name || interview && interview.talent_name}'
                      loading='lazy'                    />;
                  ) : (;'
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;
                      {(;
                        interview && interview.client_name ||;
                        interview && interview.talent_name ||;'
                        'U';
                      ).charAt(0)}
                    </div>;"
            return (<div key={interview && interview.id} className="flex items-center gap-3">;"
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                    <img;
                      src={interview && interview.client_avatar || interview && interview.talent_avatar || undefined} // Ensure src is string | undefined"
                      alt={interview && interview.client_name || interview && interview.talent_name || "User"} // Ensure alt is string;
                    />;
                  ) : (;"
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;"
                      {(interview && interview.client_name || interview && interview.talent_name || "U").charAt(0)}
                    </div>;
                  )}
                </Avatar>;'
                <div className='flex-1'>;'
                  <div className='flex justify-between items-start'>;'
                    <p className='font-medium line-clamp-1'>;'
                      {interview && interview.title || 'Interview'}
=======
                    <img
                      src={interview && interview.client_avatar || interview && interview.talent_avatar || undefined} // Ensure src is string | undefined
                      alt={interview && interview.client_name || interview && interview.talent_name || "User"} // Ensure alt is string"
                    />;
                  ) : (;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview && interview.client_name || interview && interview.talent_name || "U").charAt(0)}"
                    </div>;
                  )}
                </Avatar>;
                <div className='flex-1'>;
                  <div className='flex justify-between items-start'>;
                    <p className='font-medium line-clamp-1'>;
                      {interview && interview.title || 'Interview'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                    </p>;
                    {isStartingSoon && (;'
                      <span className='text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>;
                        Soon;
                      </span>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    )}
                  </div>
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <div className="flex items-center text-sm text-muted-foreground">"
                    <Clock className="h-3 w-3 mr-1" />"
                      loading="lazy"
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                  <div className="flex items-center text-sm text-muted-foreground">
=======
"
                  <div className="flex items-center text-sm text-muted-foreground">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
                    <Clock className="h-3 w-3 mr-1" />
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
            );
          })}
        </div>
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
=======

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
        
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">
          <Button asChild size="sm" variant="outline" className="w-full">
=======
        "
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">"
          <Button asChild size="sm" variant="outline" className="w-full">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
            <Link href="/interviews">
              View All Interviews;
            </Link>
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
          </Button>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                  </div>;
                </div>;
              </div>;
            );
          })}
        </div>;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
'
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>;'
          <Button asChild size='sm' variant='outline' className='w-full'>;'
          <div className='space - y-4'>;
            {[1, 2].map (index => ('
              <div key={i} className='flex items - center gap - 3 animate - pulse'>;'
                <div className='w - 10 h - 10 bg - zion - blue - light / 30 rounded - full'></div>;'
                <div className='flex - 1'>;'
                  <div className='h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2'></div>;'
=======
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>;
          <Button asChild size='sm' variant='outline' className='w-full'>;
          <div className='space - y-4'>;
            {[1, 2].map (index => (
              <div key={interview.id} className="flex items-center gap-3">"
                <Avatar className="h-10 w-10 bg-zion-purple/10">"

                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}

                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">"
</img>
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
                    </p>"
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
</span>





        <div className='space-y-4'>;
              interviewDate && interviewDate.getTime() - now && now.getTime() < 30 * 60 * 1000 &&;
              interviewDate && interviewDate.getTime() > now && now.getTime();

              <div key={interview && interview.id} className='flex items-center gap-3'>;
                <Avatar className='h-10 w-10 bg-zion-purple/10'>;

                      src={interview && interview.client_avatar || interview && interview.talent_avatar}
                      alt={interview && interview.client_name || interview && interview.talent_name}
                      loading='lazy'                    />;
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;
            return (<div key={interview && interview.id} className="flex items-center gap-3">;"
                <Avatar className="h-10 w-10 bg-zion-purple/10">;"

                      src={interview && interview.client_avatar || interview && interview.talent_avatar || undefined} // Ensure src is string | undefined;"
                      alt={interview && interview.client_name || interview && interview.talent_name || "User"} // Ensure alt is string;"
                    />;
</img>"
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;"
                ;"
                <div className='flex-1'>;
                  <div className='flex justify-between items-start'>;
                    <p className='font-medium line-clamp-1'>;
                      <span className='text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>;
                      </span>;

                  <div className="flex items-center text-sm text-muted-foreground">"
                    <Clock className="h-3 w-3 mr-1" />"

        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">"
          <Button asChild size="sm" variant="outline" className="w-full">"
            <Link href="/interviews">"



        </div>;"
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>;
          <Button asChild size='sm' variant='outline' className='w-full'>;

          <div className='space - y-4'>;
pr-12325
              <div key={i} className='flex items - center gap - 3 animate - pulse'>;
                <div className='w - 10 h - 10 bg - zion - blue - light / 30 rounded - full'></div>;
                <div className='flex - 1'>;
                  <div className='h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2'></div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                  <div className='h - 3 w - 1/2 bg - zion - blue - light / 30 rounded'></div>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return ('
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
        <CardHeader>;'
          <CardTitle className='text - lg flex items - center'>;'
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;'
          <div className='text - center py - 6'>;'
            <Calendar className='h - 10 w - 10 mx - auto mb - 2 text - muted - foreground' />;'
            <p className='text - sm text - muted - foreground'>;
              No upcoming interviews scheduled;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
            </p>;'
            <Button as_child className='mt - 4' variant='outline' size='sm'>;'
              <Link href='/interviews'>Schedule Interview</Link>;
=======
            </p>;
            <Button as_child className='mt - 4' variant='outline' size='sm'>;
              <Link href='/interviews' />Schedule Interview</Link>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
            </Button>;
          </div>;
        </CardContent>;
      </Card>);
  }
  return ('
    <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
      <CardHeader>;'
        <CardTitle className='text - lg flex items - center'>;'
          <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;'
        <div className='space - y-4'>;
          {upcoming_interviews.map (interview => {}
            const interview_date = parseISO (interview.scheduled_date);'
            const formatted_date = format (interview_date, 'EEE, MMM d');'
            const formatted_time = format (interview_date, 'h:mm a');
            // Determine if interview is happening soon (within 30,  minutes)            const now = new Date ();
            const isStartingSoon =;
              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
            return ('
              <div key={interview.id} className='flex items - center gap - 3'>;'
                <Avatar className='h - 10 w - 10 bg - zion - purple / 10'>;
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                      alt={interview.client_name || interview.talent_name}'
=======
                      alt={interview.client_name || interview.talent_name}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                      loading='lazy'                    />) : ('
                    <div className='flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium'>;
                      {(
                        interview.client_name ||;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                        interview.talent_name ||;'
                        'U').char_at (0)}
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
                        interview.talent_name ||;
                        'U').char_at (0)}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                    </div>;
            return (<div key={interview.id} className="flex items - center gap-3">;
                <Avatar className="h - 10 w - 10 bg - zion-purple / 10">;
=======
                    </div>;"
            return (<div key={interview.id} className="flex items - center gap - 3">;"
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined;"
                      alt={interview.client_name || interview.talent_name || "User"} // Ensure alt is string;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                    />) : (
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font-medium">;
=======
                    />) : ("
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
                      {(interview.client_name || interview.talent_name || "U").char_at (0)}
                    </div>)}
                </Avatar>;'
                <div className='flex - 1'>;'
                  <div className='flex justify - between items - start'>;'
                    <p className='font - medium line - clamp - 1'>;'
                      {interview.title || 'Interview'}
=======
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;
                      {(interview.client_name || interview.talent_name || "U").char_at (0)}"
                    </div>)}
                </Avatar>;
                <div className='flex - 1'>;
                  <div className='flex justify - between items - start'>;
                    <p className='font - medium line - clamp - 1'>;
                      {interview.title || 'Interview'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
                    </p>;
                    {isStartingSoon && ('
                      <span className='text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse'>;
                        Soon;
                      </span>)}
                  </div>;'
                  <div className='flex items - center text - sm text - muted - foreground'>;'
                    <Clock className='h - 3 w - 3 mr - 1' />;
                    {formatted_date} at {formatted_time}
                  </div>;
                </div>;
              </div>);
          })}
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
        </div>;'
        <div className='mt - 4 pt - 3 border - t border - zion - blue - light / 40'>;'
          <Button as_child size='sm' variant='outline' className='w - full'>;'
            <Link href='/interviews'>View All Interviews</Link>;
=======
        </div>;
        <div className='mt - 4 pt - 3 border - t border - zion - blue - light / 40'>;
          <Button as_child size='sm' variant='outline' className='w - full'>;
            <Link href='/interviews' />View All Interviews</Link>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
          </Button>;
        </div>;
      </CardContent>;
}
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx

    </Card>);
}
}

<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </Card>);
}
}
;)))))
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
;
<<<<<<< HEAD:src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/interviews/UpcomingInterviewsCard.tsx
=======
                </div>;)
              </div>))}
      );





          <div className='text - center py - 6'>;
            <Calendar className='h - 10 w - 10 mx - auto mb - 2 text - muted - foreground' />;

            <p className='text - sm text - muted - foreground'>;
            <Button as_child className='mt - 4' variant='outline' size='sm'>;






              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
              <div key={interview.id} className='flex items - center gap - 3'>;
                <Avatar className='h - 10 w - 10 bg - zion - purple / 10'>;

                      alt={interview.client_name || interview.talent_name})
                      loading='lazy'                    />) : (
                    <div className='flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium'>;
            return (<div key={interview.id} className="flex items - center gap - 3">;"
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;"

                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined;"
                      alt={interview.client_name || interview.talent_name || "User"} // Ensure alt is string;")
                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
                    </div>)}
                  <div className='flex justify - between items - start'>;
                    <p className='font - medium line - clamp - 1'>;
                      <span className='text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse'>;
                      </span>)}
                  <div className='flex items - center text - sm text - muted - foreground'>;
                    <Clock className='h - 3 w - 3 mr - 1' />;

              </div>);
        <div className='mt - 4 pt - 3 border - t border - zion - blue - light / 40'>;
          <Button as_child size='sm' variant='outline' className='w - full'>;

            <Link href='/interviews'>View All Interviews;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/interviews/UpcomingInterviewsCard.tsx
