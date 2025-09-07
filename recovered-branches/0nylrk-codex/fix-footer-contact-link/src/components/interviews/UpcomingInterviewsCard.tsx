<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
<<<<<<< HEAD
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;
    const loadInterviews = async () => {;
=======

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
import { Calendar, Clock, Video } from "lucide-react","
import { Avatar } from "@/components/ui/avatar","
export function UpcomingInterviewsCard() {
}
const { fetchInterviews } = useInterviews(),;
const [isLoading, setIsLoading] = useState(true),;
  const [isLoading, setIsLoading] = useState(true);      setIsLoading(true);
=======

import React, { useEffect, useState } from "react",

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import { Link } from "react-router-dom",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Calendar, Clock, Video } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
export function UpcomingInterviewsCard() {};
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),

  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();

        const interviews = await fetchInterviews(),
        const now = new Date(),

        const interviews = await fetchInterviews();
        const now = new Date();
        const interviews = await fetchInterviews(),
        const now = new Date(),

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsLoading(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();
<<<<<<< HEAD
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  const { fetchInterviews } = useInterviews($2);
=======
  const { fetchInterviews } = useInterviews();
>>>>>>> merged-prs-20250907-203621
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { Calendar, Clock, Video } from "lucide-react",
import { Avatar } from "@/components/ui/avatar",
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  useEffect(() => {

    const loadInterviews = async () => {
      setIsLoading(true),
      try {
<<<<<<< HEAD
        const interviews = await fetchInterviews(),
        const now = new Date(),
        
        const interviews = await fetchInterviews();
        const now = new Date();
        const interviews = await fetchInterviews(),
        const now = new Date(),
        
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        const interviews = await fetchInterviews(),
        const now = new Date(),

        const interviews = await fetchInterviews();
        const now = new Date();
        const interviews = await fetchInterviews(),
        const now = new Date(),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        // Filter for confirmed interviews in the future
        const upcoming = interviews

          .filter(interview =>
            interview.status === 'confirmed' &&
            !isPast(parseISO(interview.scheduled_date))
          )
          .sort((a, b) =>
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
          .slice(0, 3), // Take only the next 3 interviews
        setUpcomingInterviews(upcoming)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { fetch_interviews } = use_interviews ();
  const [upcoming_interviews, setUpcomingInterviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  useEffect (() => {
    const load_interviews = async () => {
      setIsLoading (true);
      try {
        const interviews = await fetch_interviews ();
        const now = new Date ();
;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      } catch (error) {

        console.error("Error loading upcoming interviews:", error)
      } finally {}
        setIsLoading(false)
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
    loadInterviews()
  }, []);
    }
    loadInterviews()
  }, []);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },

    loadInterviews()
  }, []),
<<<<<<< HEAD
<<<<<<< HEAD
=======

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

  return($2);
            const formattedDate = format($2);
            const formattedTime = format($2);
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date($2);
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime($2);
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";"
import { Button } from "@/components/ui/button",;"
import { useInterviews } from "@/hooks/useInterviews",;"
import { Interview } from "@/types/interview",;"
import { format, isPast, parseISO } from "date-fns",;"
import { Link } from "react-router-dom",;"
import { Calendar, Clock, Video } from "lucide-react",;"
import { Avatar } from "@/components/ui/avatar",;"
export function UpcomingInterviewsCard() {;
  }
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (isLoading) {
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
      try {;
        const interviews = await fetchInterviews(),;
        const now = new Date(),;
<<<<<<< HEAD
=======

        console.error ("Error loading upcoming interviews:", error);
      } finally {}
        setIsLoading (false);
      }
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview => ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            interview && interview.status === 'confirmed' && ;
            !isPast(parseISO(interview && interview.scheduled_date));
          );
          .sort((a, b) => ;
            parseISO(a && a.scheduled_date).getTime() - parseISO(b && b.scheduled_date).getTime();
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
    return (

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
        console.error("Error loading upcoming interviews:", error);
      } finally {;
        setIsLoading(false);
      }
    },;
    loadInterviews();
  }, []),;
  if (isLoading) {;
    return (;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          );
          .slice(0, 3), // Take only the next 3 interviews;

        setUpcomingInterviews(upcoming);
      } catch (error) {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    loadInterviews();
  }, []);

  if (isLoading) {;

    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  if (upcomingInterviews && upcomingInterviews.length === 0) {;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            ))}

          </div>;
        </CardContent>;
      </Card>;
    );
  }

<<<<<<< HEAD
  if (upcomingInterviews.length === 0) {}
    return (

=======
<<<<<<< HEAD
  if (upcomingInterviews.length === 0) {}
    return (

=======

  if (upcomingInterviews && upcomingInterviews.length === 0) {;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  if (upcomingInterviews.length === 0) {
<<<<<<< HEAD
  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
    ),;
  }
;
  if (upcomingInterviews.length === 0) {;
    return (;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
    );
  }
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews;
        </CardTitle>
      </CardHeader>
      <CardContent>"
        <div className="space-y-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          {upcomingInterviews.map(interview => {
<<<<<<< HEAD
            const interviewDate = parseISO(interview.scheduled_date);
            const formattedDate = format(interviewDate, 'EEE, MMM d');
            const formattedTime = format(interviewDate, 'h: mm a')
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date();
            const isStartingSoon =
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            const formattedTime = format(interviewDate, 'h: mm a'),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    );
  }
  return (

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            return (
              <div key={interview.id} className="flex items-center gap-3">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar |interview.talent_avatar}
                      alt={interview.client_name |interview.talent_name}
                    />
                  ) : ("
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">"
                      {(interview.client_name |interview.talent_name |"U").charAt(0)}
                    </div>
<<<<<<< HEAD
                  )}
                </Avatar>"
                <div className="flex-1">"
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
                      {interview.title |"Interview"}
                    </p>
                    {isStartingSoon && ("
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">
                        Soon;
                      </span>

    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;"
        <CardTitle className="text-lg flex items-center">;"

          <Video className="h-5 w-5 mr-2 text-zion-purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;

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

                  )}
=======
                  )}
                </Avatar>"
                <div className="flex-1">"
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
                      {interview.title |"Interview"}
                    </p>
                    {isStartingSoon && ("
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">
                        Soon;
                      </span>
<<<<<<< HEAD

    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;"
        <CardTitle className="text-lg flex items-center">;"

          <Video className="h-5 w-5 mr-2 text-zion-purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;

          {upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview.scheduled_date),;
            const formattedDate = format(interviewDate, 'EEE, MMM d'),;
            const formattedTime = format(interviewDate, 'h:mm a'),;
            ;
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
    ),;
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
            const formattedTime = format(interviewDate, 'h:mm a'),;
            ;
=======
=======
            const formattedTime = format(interviewDate, 'h: mm a'),;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
                    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
<<<<<<< HEAD
                      {interview && interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
=======
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <span className="text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
{interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
                        Soon;
                      </span>;
          {upcomingInterviews && upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview && interview.scheduled_date);
            const formattedDate = format(interviewDate, 'EEE, MMM d');
<<<<<<< HEAD
=======
=======
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
                        Soon;
                      </span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    )}
                      <span className="text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;                        Soon;
                      </span>;
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;

                    <Clock className="h-3 w-3 mr-1" />;
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        </div>;
"
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;"
          <Button asChild size="sm" variant="outline" className="w-full">;

<<<<<<< HEAD
=======
=======
        </div>;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
    load_interviews ();
  }, []);
;

            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;

                  <div className="h - 3 w - 1/2 bg - zion - blue - light / 30 rounded"></div>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>);
  }

            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;

              <Link to="/interviews">Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>);
  }

          <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;

            const formatted_time = format (interview_date, 'h: mm a'),
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date ();
            const isStartingSoon =;
              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
;

                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}

                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
                    </div>)}
                  <div className="flex justify - between items - start">;"
                    <p className="font - medium line - clamp - 1">;"
                      <span className="text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse">;"
                      </span>)}

              </div>);
          })}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        </div>;
        <div className="mt - 4 pt - 3 border - t border - zion - blue - light / 40">;
          <Button as_child size="sm" variant="outline" className="w - full">;
            ),;
          })}
        </div>;
        ;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Link to="/interviews">;
              View All Interviews;
            </Link>;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  setIsLoading (false) 
}

}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};

return (<img src= {
  interview.client avatar || interview.talent avatar;
}alt= {
  interview.client name || interview.talent name;)
}/>) : (Soon </span>) 
}</div> </div> </div> </div>) 
}) 

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews </Link> </Button> </div> </CardContent> </Card>) 
}
}
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
