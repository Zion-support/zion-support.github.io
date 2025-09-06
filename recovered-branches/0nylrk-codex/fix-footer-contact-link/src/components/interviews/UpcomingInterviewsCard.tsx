<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

<<<<<<< HEAD

import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import { Link } from "react-router-dom",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect, useState } from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useInterviews} from "@/hooks/useInterviews";
import {Interview} from "@/types/interview";
import {format, isPast, parseISO} from "date-fns";
import {Link} from "react-router-dom";
import {Calendar, Clock, Video} from "lucide-react";
import {Avatar} from "@/components/ui/avatar";
export function UpcomingInterviewsCard() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {;
    const loadInterviews = async () => {;

========
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;
    const loadInterviews = async () => {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
      setIsLoading(true);
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, Clock, Video } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { Calendar, Clock, Video } from "lucide-react",
import { Avatar } from "@/components/ui/avatar",
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  useEffect(() => {

    const loadInterviews = async () => {
      setIsLoading(true),
      try {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
        const interviews = await fetchInterviews();
        const now = new Date();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        const interviews = await fetchInterviews(),
        const now = new Date(),
        
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        const interviews = await fetchInterviews();
        const now = new Date();
        const interviews = await fetchInterviews(),
        const now = new Date(),
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
import React, { useEffect, useState } from './react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { use_interviews } from '@/hooks / use_interviews';
import { Interview } from '@/types / interview';
import { format, is_past, parseISO } from './date - fns';
import { Link } from './react-router-dom';
import { Calendar, Clock, Video } from './lucide-react';
import { Avatar } from '@/components / ui / avatar';
export /**
 * UpcomingInterviewsCard - Function description
 */
function UpcomingInterviewsCard() {
  const { fetch_interviews } = use_interviews ();
  const [upcoming_interviews, setUpcomingInterviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    const load_interviews = async () => {
      setIsLoading (true);
      try {
        const interviews = await fetch_interviews ();
        const now = new Date ();
;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      } catch (error) {
        console.error("Error loading upcoming interviews:", error)
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
    }
    loadInterviews()
  }, []);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    }
    loadInterviews()
  }, []);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },

    loadInterviews()
  }, []),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
            {[1, 2].map(i => (
              <div key={i} className="flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, Clock, Video } from "lucide-react",;
import { Avatar } from "@/components/ui/avatar",;
export function UpcomingInterviewsCard() {;
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
      try {;
        const interviews = await fetchInterviews(),;
        const now = new Date(),;
<<<<<<< HEAD

        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter (interview =>;
            interview.status === 'confirmed' &&;
            !is_past (parseISO (interview.scheduled_date)));
          .sort ((a, b) =>;
            parseISO (a.scheduled_date).get_time () - parseISO (b.scheduled_date).get_time ());
          .slice (0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews (upcoming);
      } catch (error) {
        console.error ("Error loading upcoming interviews:", error);
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview => ;
            interview && interview.status === 'confirmed' && ;
            !isPast(parseISO(interview && interview.scheduled_date));
          );
          .sort((a, b) => ;
            parseISO(a && a.scheduled_date).getTime() - parseISO(b && b.scheduled_date).getTime();
=======
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview =>;
            interview.status === 'confirmed' &&;
            !isPast(parseISO(interview.scheduled_date));
          );
          .sort((a, b) =>;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          );
          .slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming);
      } catch (error) {;
<<<<<<< HEAD
        console && console.error("Error loading upcoming interviews:", error);
      } finally {;
        setIsLoading(false);
      }
    };
    loadInterviews();
  }, []);
  if (isLoading) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
    return (
=======

import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, Clock, Video } from "lucide-react",;
import { Avatar } from "@/components/ui/avatar",;
;
export function UpcomingInterviewsCard() {;
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
      try {;
        const interviews = await fetchInterviews(),;
        const now = new Date(),;
        ;
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview => ;
            interview.status === 'confirmed' && ;
            !isPast(parseISO(interview.scheduled_date));
          );
          .sort((a, b) => ;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
          );
          .slice(0, 3), // Take only the next 3 interviews;
        ;
        setUpcomingInterviews(upcoming),;
      } catch (error) {;
        console.error("Error loading upcoming interviews:", error),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    loadInterviews(),;
  }, []),;
;
  if (isLoading) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        console.error("Error loading upcoming interviews:", error);
      } finally {;
        setIsLoading(false);
      }
    },;
    loadInterviews();
  }, []),;
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ))}
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
<<<<<<< HEAD

=======


  if (upcomingInterviews && upcomingInterviews.length === 0) {;

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (upcomingInterviews.length === 0) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
  if (upcomingInterviews && upcomingInterviews.length === 0) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
    return (
=======
    ),;
  }
;
  if (upcomingInterviews.length === 0) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
              <Link to="/interviews">Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    );
  }
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

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
    )
  }
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            const interviewDate = parseISO(interview.scheduled_date);
            const formattedDate = format(interviewDate, 'EEE, MMM d');
            const formattedTime = format(interviewDate, 'h: mm a')
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date();
            const isStartingSoon =
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime();

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            const interviewDate = parseISO(interview.scheduled_date),
            const formattedDate = format(interviewDate, 'EEE, MMM d'),
            const formattedTime = format(interviewDate, 'h: mm a'),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
            
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            return (
              <div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar |interview.talent_avatar}
                      alt={interview.client_name |interview.talent_name}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name |interview.talent_name |"U").charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
                      {interview.title |"Interview"}
                    </p>
                    {isStartingSoon && (
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">
                        Soon
                      </span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {formattedDate} at {formattedTime}
                  </div>
                </div>
              </div>
            )
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
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
========
=======
    ),;
  }
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-lg flex items-center">;
          <Video className="h-5 w-5 mr-2 text-zion-purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
<<<<<<< HEAD
          {upcomingInterviews && upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview && interview.scheduled_date);
            const formattedDate = format(interviewDate, 'EEE, MMM d');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
            const formattedTime = format(interviewDate, 'h: mm a'),;
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date();
            const isStartingSoon = ;
              interviewDate && interviewDate.getTime() - now && now.getTime() < 30 * 60 * 1000 &&;
              interviewDate && interviewDate.getTime() > now && now.getTime();
            return (
              <div key={interview && interview.id} className="flex items-center gap-3">;
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (;
                    <img
                      src={interview && interview.client_avatar || interview && interview.talent_avatar} 
                      alt={interview && interview.client_name || interview && interview.talent_name}
                    />;
                  ) : (;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview && interview.client_name || interview && interview.talent_name || "U").charAt(0)}
=======
          {upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview.scheduled_date),;
            const formattedDate = format(interviewDate, 'EEE, MMM d'),;
            const formattedTime = format(interviewDate, 'h:mm a'),;
            ;
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date(),;
            const isStartingSoon = ;
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&;
              interviewDate.getTime() > now.getTime(),;
            ;
            return (;
              <div key={interview.id} className="flex items-center gap-3">;
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {interview.client_avatar || interview.talent_avatar ? (;
                    <img ;
                      src={interview.client_avatar || interview.talent_avatar} ;
                      alt={interview.client_name || interview.talent_name}
                    />;
                  ) :(;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </div>;
                  )}
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
<<<<<<< HEAD
                      {interview && interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
=======
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        Soon;
                      </span>;
                    )}
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;
                    <Clock className="h-3 w-3 mr-1" />;
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
            );
          })}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
        </div>;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
;
    load_interviews ();
  }, []);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
        <CardHeader>;
          <CardTitle className="text - lg flex items - center">;
            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className="space - y-4">;
            {[1, 2].map (index => (
              <div key={i} className="flex items - center gap - 3 animate - pulse">;
                <div className="w - 10 h - 10 bg - zion - blue - light / 30 rounded - full"></div>;
                <div className="flex - 1">;
                  <div className="h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2"></div>;
                  <div className="h - 3 w - 1/2 bg - zion - blue - light / 30 rounded"></div>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
        <CardHeader>;
          <CardTitle className="text - lg flex items - center">;
            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className="text - center py - 6">;
            <Calendar className="h - 10 w - 10 mx - auto mb - 2 text - muted - foreground" />;
            <p className="text - sm text - muted - foreground">No upcoming interviews scheduled</p>;
            <Button as_child className="mt - 4" variant="outline" size="sm">;
              <Link to="/interviews">Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
      <CardHeader>;
        <CardTitle className="text - lg flex items - center">;
          <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          {upcoming_interviews.map (interview => {
            const interview_date = parseISO (interview.scheduled_date);
            const formatted_date = format (interview_date, 'EEE, MMM d');
            const formatted_time = format (interview_date, 'h: mm a'),
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date ();
            const isStartingSoon =;
              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
;
            return (
              <div key={interview.id} className="flex items - center gap - 3">;
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;
                      {(interview.client_name || interview.talent_name || "U").char_at (0)}
                    </div>)}
                </Avatar>;
                <div className="flex - 1">;
                  <div className="flex justify - between items - start">;
                    <p className="font - medium line - clamp - 1">;
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (
                      <span className="text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse">;
                        Soon;
                      </span>)}
                  </div>;
                  <div className="flex items - center text - sm text - muted - foreground">;
                    <Clock className="h - 3 w - 3 mr - 1" />;
                    {formatted_date} at {formatted_time}
                  </div>;
                </div>;
              </div>);
          })}
        </div>;
        <div className="mt - 4 pt - 3 border - t border - zion - blue - light / 40">;
          <Button as_child size="sm" variant="outline" className="w - full">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

========
=======
            ),;
          })}
        </div>;
        ;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
            <Link to="/interviews">;
              View All Interviews;
            </Link>;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
    </Card>);
=======
    </Card>;
  ),; export function UpcomingInterviewsCard () {
  const {
  fetchInterviews 
}= useInterviews ();
const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
  const loadInterviews = async () => {
  setIsLoading (true);
try {
  const interviews = await fetchInterviews ();
const now = new Date ();
}finally {
  setIsLoading (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
}, []);
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> </div> </div>) ) 
}</div> </CardContent> </Card>) 
}<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link to="/interviews" >Schedule Interview</Link> </Button> </div> </CardContent> </Card> return (<Card className="bg-zion-blue-dark/40 border-zion-blue-light" > <CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> interviewDate.getTime () - now.getTime () < 30 * 60 * 1000 && interviewDate.getTime () > now.getTime ();
return (<img src= {
  interview.client avatar || interview.talent avatar 
}alt= {
  interview.client name || interview.talent name 
}/>) : (Soon </span>) 
}</div> </div> </div> </div>) 
}) 
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews </Link> </Button> </div> </CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/UpcomingInterviewsCard.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
