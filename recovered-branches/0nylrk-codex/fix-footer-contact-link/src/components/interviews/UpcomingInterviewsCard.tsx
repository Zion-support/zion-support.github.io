<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import { Link } from "react-router-dom",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  const { fetchInterviews } = useInterviews();
=======
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true);
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useEffect, useState } from "react",
=======

<<<<<<< HEAD
  const { fetchInterviews } = useInterviews();import React, { useEffect, useState } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  const { fetchInterviews } = useInterviews();import React, { useEffect, useState } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { fetchInterviews } = useInterviews();
import React, { useEffect, useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import { Link } from "react-router-dom",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Calendar, Clock, Video } from "lucide-react";
=======
import React, { useEffect, useState } from "react";"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {useInterviews} from "@/hooks/useInterviews";"
import {Interview} from "@/types/interview";"
import {format, isPast, parseISO} from "date-fns";"
import {Link} from "react-router-dom";"
import {Calendar, Clock, Video} from "lucide-react";"
import {Avatar} from "@/components/ui/avatar";
export function UpcomingInterviewsCard() { return null; }
import React, { useEffect, useState } from "react","
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { useInterviews } from "@/hooks/useInterviews","
import { Interview } from "@/types/interview","
import { format, isPast, parseISO } from "date-fns","
import { Link } from "react-router-dom",";
import { Calendar, Clock, Video } from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Avatar } from "@/components/ui/avatar";
export function UpcomingInterviewsCard() {};
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);"
import { Calendar, Clock, Video } from "lucide-react","
import { Avatar } from "@/components/ui/avatar",
<<<<<<< HEAD
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

  useEffect(() => {;
    const loadInterviews = async () => {;

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

<<<<<<< HEAD
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);      setIsLoading(true);
=======
export function UpcomingInterviewsCard() {}
  const { fetchInterviews } = useInterviews(),;
;
      setIsLoading(true);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  useEffect(() => {;
    const loadInterviews = async () => {;

      setIsLoading(true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




  useEffect(() => {}
    const loadInterviews = async () => {}
      setIsLoading(true),
<<<<<<< HEAD
      try {
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


  useEffect(() => {

    const loadInterviews = async () => {
      setIsLoading(true),
      try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        const interviews = await fetchInterviews(),
        const now = new Date(),
        


<<<<<<< HEAD
=======
        const interviews = await fetchInterviews(),
        const now = new Date(),
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        const interviews = await fetchInterviews();
        const now = new Date();
        const interviews = await fetchInterviews(),
        const now = new Date(),
        
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        // Filter for confirmed interviews in the future
        const upcoming = interviews
=======
      try {}
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        // Filter for confirmed interviews in the future
        const upcoming = interviews
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          .filter(interview =>
            interview.status === 'confirmed' &&
            !isPast(parseISO(interview.scheduled_date))
          )
          .sort((a, b) =>
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
<<<<<<< HEAD
          .slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming)
'
import React, { useEffect, useState } from './react';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { use_interviews } from '@/hooks / use_interviews';'
import { Interview } from '@/types / interview';'
import { format, is_past, parseISO } from './date - fns';'
import { Link } from './react-router-dom';'
import { Calendar, Clock, Video } from './lucide-react';'
import { Avatar } from '@/components / ui / avatar';
export /**;
 * UpcomingInterviewsCard - Function description;
 */
function UpcomingInterviewsCard() {}
=======
          .slice(0, 3), // Take only the next 3 interviews
        setUpcomingInterviews(upcoming)

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { fetch_interviews } = use_interviews ();
  const [upcoming_interviews, setUpcomingInterviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
<<<<<<< HEAD
  useEffect (() => {}
    const load_interviews = async () => {}
      setIsLoading (true);
      try {}
        const interviews = await fetch_interviews ();
        const now = new Date ();
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      } catch (error) {
=======

      } catch (error) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        console.error("Error loading upcoming interviews:", error)
      } finally {}
        setIsLoading(false)
      }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
    loadInterviews()
  }, []);
    }
    loadInterviews()
  }, []);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  useEffect (() => {
    const load_interviews = async () => {
      setIsLoading (true);
      try {
        const interviews = await fetch_interviews ();
        const now = new Date ();
;
      } catch (error) {
        console.error("Error loading upcoming interviews:", error)
      } finally {
        setIsLoading(false)
      }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    },

    loadInterviews()
  }, []),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (isLoading) {
    return (
=======

  if (isLoading) {}
    return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, Clock, Video } from "lucide-react",;
=======
"
import React, { useEffect, useState } from "react",;"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { useInterviews } from "@/hooks/useInterviews",;"
import { Interview } from "@/types/interview",;"
import { format, isPast, parseISO } from "date-fns",;"
import { Link } from "react-router-dom",;"
import { Calendar, Clock, Video } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Avatar } from "@/components/ui/avatar",;
export function UpcomingInterviewsCard() { return null; }
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
<<<<<<< HEAD
=======
      } catch (error) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        console.error ("Error loading upcoming interviews:", error);
      } finally {}
        setIsLoading (false);
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview => ;'
=======

        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview => ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            interview && interview.status === 'confirmed' && ;
            !isPast(parseISO(interview && interview.scheduled_date));
          );
          .sort((a, b) => ;
            parseISO(a && a.scheduled_date).getTime() - parseISO(b && b.scheduled_date).getTime();
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
    return (    return (
=======
    return (
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    return (
    return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            ))}
=======
              </div>;



            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }


  if (upcomingInterviews && upcomingInterviews.length === 0) {;




  if (upcomingInterviews.length === 0) {
    return (
  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
    ),;
  }
;
  if (upcomingInterviews.length === 0) {;
    return (;
    return (
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>;
        </CardContent>;
      </Card>;
    );
  }




  if (upcomingInterviews.length === 0) {}
    return (
<<<<<<< HEAD
=======
  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
    ),;
  }
;
  if (upcomingInterviews.length === 0) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
              </div>;    return (    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              </div>;    return (    return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    );
  }
  return (

    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
=======
"
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>"
        <CardTitle className="text-lg flex items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews;
        </CardTitle>
      </CardHeader>
      <CardContent>"
        <div className="space-y-4">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {upcomingInterviews.map(interview => {
<<<<<<< HEAD
=======
            const interviewDate = parseISO(interview.scheduled_date);
            const formattedDate = format(interviewDate, 'EEE, MMM d');
            const formattedTime = format(interviewDate, 'h: mm a')
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date();
            const isStartingSoon =
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
=======
            const interviewDate = parseISO(interview.scheduled_date),
            const formattedDate = format(interviewDate, 'EEE, MMM d'),
=======
          {upcomingInterviews.map(interview => {}
            const interviewDate = parseISO(interview.scheduled_date),'
            const formattedDate = format(interviewDate, 'EEE, MMM d'),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          {upcomingInterviews.map(interview => {

            const interviewDate = parseISO(interview.scheduled_date),
            const formattedDate = format(interviewDate, 'EEE, MMM d'),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            const formattedTime = format(interviewDate, 'h: mm a'),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
            


    );
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            return (
              <div key={interview.id} className="flex items-center gap-3">
=======

            return ("
              <div key={interview.id} className="flex items-center gap-3">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
    ),;
  }
;
  return (;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;"
        <CardTitle className="text-lg flex items-center">;"
=======
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
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-lg flex items-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Video className="h-5 w-5 mr-2 text-zion-purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent>;"
        <div className="space-y-4">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <CardContent>;
        <div className="space-y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </div>;
=======
          {upcomingInterviews.map(interview => {                    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          {upcomingInterviews.map(interview => {                    </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const [isLoading, setIsLoading] = useState(true);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  )}
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
                      {interview && interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
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
                    )}
                      <span className="text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;                        Soon;
                      </span>;
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;
=======

                        Soon;
                      </span>;


          {upcomingInterviews && upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview && interview.scheduled_date);'
            const formattedDate = format(interviewDate, 'EEE, MMM d');

                    )}
                  </div>;"
                  <div className="flex items-center text-sm text-muted-foreground">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <Clock className="h-3 w-3 mr-1" />;
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
            );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          })}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        </div>;
"
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;"
          <Button asChild size="sm" variant="outline" className="w-full">;

=======
          })}

        </div>;

        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    load_interviews ();
  }, []);
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
        <CardHeader>;"
          <CardTitle className="text - lg flex items - center">;"
=======
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;

  if (isLoading) {
    return ("
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">"

        <CardHeader>
"
          <CardTitle className="text-lg flex items-center">"
            <Video className="h-5 w-5 mr-2 text-zion-purple" />"

        <CardContent>
          <div className="space-y-4">"
</div>"
              <div key={i} className="flex items-center gap-3 animate-pulse">"
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>""
                <div className="flex-1">"
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>""
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>"
                </div>
              </div>)
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;"

        <CardHeader>;
<<<<<<< HEAD
          <CardTitle className="text - lg flex items - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
<<<<<<< HEAD
        <CardContent>;"
          <div className="space - y-4">;
            {[1, 2].map (index => ("
              <div key={i} className="flex items - center gap - 3 animate - pulse">;"
                <div className="w - 10 h - 10 bg - zion - blue - light / 30 rounded - full"></div>;"
                <div className="flex - 1">;"
                  <div className="h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2"></div>;"
=======
        <CardContent>;
          <div className="space - y-4">;
            {[1, 2].map (index => (
              <div key={i} className="flex items - center gap - 3 animate - pulse">;
                <div className="w - 10 h - 10 bg - zion - blue - light / 30 rounded - full"></div>;
                <div className="flex - 1">;
                  <div className="h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2"></div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <div className="h - 3 w - 1/2 bg - zion - blue - light / 30 rounded"></div>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>);
  }
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
        <CardHeader>;"
          <CardTitle className="text - lg flex items - center">;"
=======
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
        <CardHeader>;
          <CardTitle className="text - lg flex items - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
<<<<<<< HEAD
        <CardContent>;"
          <div className="text - center py - 6">;"
            <Calendar className="h - 10 w - 10 mx - auto mb - 2 text - muted - foreground" />;"
            <p className="text - sm text - muted - foreground">No upcoming interviews scheduled</p>;"
            <Button as_child className="mt - 4" variant="outline" size="sm">;"
=======
        <CardContent>;
          <div className="text - center py - 6">;
            <Calendar className="h - 10 w - 10 mx - auto mb - 2 text - muted - foreground" />;
            <p className="text - sm text - muted - foreground">No upcoming interviews scheduled</p>;
            <Button as_child className="mt - 4" variant="outline" size="sm">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Link to="/interviews">Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>);
  }
<<<<<<< HEAD
  return ("
    <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
      <CardHeader>;"
        <CardTitle className="text - lg flex items - center">;"
=======
  return (
    <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;
      <CardHeader>;
        <CardTitle className="text - lg flex items - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent>;"
        <div className="space - y-4">;
          {upcoming_interviews.map (interview => {}
            const interview_date = parseISO (interview.scheduled_date);'
            const formatted_date = format (interview_date, 'EEE, MMM d');'
=======
      <CardContent>;
        <div className="space - y-4">;
          {upcoming_interviews.map (interview => {
            const interview_date = parseISO (interview.scheduled_date);
            const formatted_date = format (interview_date, 'EEE, MMM d');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            const formatted_time = format (interview_date, 'h: mm a'),
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date ();
            const isStartingSoon =;
              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
;
<<<<<<< HEAD
            return ("
              <div key={interview.id} className="flex items - center gap - 3">;"
=======
            return (
              <div key={interview.id} className="flex items - center gap - 3">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
<<<<<<< HEAD
                    />) : ("
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
                      {(interview.client_name || interview.talent_name || "U").char_at (0)}
                    </div>)}
                </Avatar>;"
                <div className="flex - 1">;"
                  <div className="flex justify - between items - start">;"
                    <p className="font - medium line - clamp - 1">;"
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && ("
                      <span className="text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse">;
                        Soon;
                      </span>)}
                  </div>;"
                  <div className="flex items - center text - sm text - muted - foreground">;"
=======
=======
          <CardTitle className="text-lg flex items-center">;"
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;"

        <CardContent>;
          <div className="space-y-4">;"
              <div key={i} className="flex items-center gap-3 animate-pulse">;"
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>;""
                <div className="flex-1">;"
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>;""
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>;"
                </div>;
      ;"


          <div className="text-center py-6">;"
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />;"
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>;""
            <Button asChild className="mt-4" variant="outline" size="sm">;"
              <Link to="/interviews">Schedule Interview;"


              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),


    );
  return (
              <div key={interview.id} className="flex items-center gap-3">"
                <Avatar className="h-10 w-10 bg-zion-purple/10">"

                    <img;
                      src={interview.client_avatar |interview.talent_avatar}
                      alt={interview.client_name |interview.talent_name}
                    />
</img>"
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">"
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
</p>
                    </p>"
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">"
</span>
                      </span>"


              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&;
              interviewDate.getTime() > now.getTime(),;
            return (;"
              <div key={interview.id} className="flex items-center gap-3">;"
                <Avatar className="h-10 w-10 bg-zion-purple/10">;"

                    <img ;
                      src={interview.client_avatar || interview.talent_avatar} ;
                      alt={interview.client_name || interview.talent_name}
                    />;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;"
                  <div className="flex justify-between items-start">;"
                    <p className="font-medium line-clamp-1">;"
                    </p>;"
                      <span className="text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;"
                      </span>;
                  </div>;"
                  <div className="flex items-center text-sm text-muted-foreground">;"
                    <Clock className="h-3 w-3 mr-1" />;"

        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;"
          <Button asChild size="sm" variant="outline" className="w-full">;"
      <Card className="bg - zion - blue - dark / 40 border - zion - blue - light">;"

          <CardTitle className="text - lg flex items - center">;"
            <Video className="h - 5 w - 5 mr - 2 text - zion - purple" />;"

          <div className="space - y-4">;"
              <div key={i} className="flex items - center gap - 3 animate - pulse">;"
                <div className="w - 10 h - 10 bg - zion - blue - light / 30 rounded - full"></div>;""
                <div className="flex - 1">;"
                  <div className="h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2"></div>;""
                  <div className="h - 3 w - 1/2 bg - zion - blue - light / 30 rounded"></div>;"
                </div>;)
              </div>))}
      );"


          <div className="text - center py - 6">;"
            <Calendar className="h - 10 w - 10 mx - auto mb - 2 text - muted - foreground" />;"
            <p className="text - sm text - muted - foreground">No upcoming interviews scheduled</p>;""
            <Button as_child className="mt - 4" variant="outline" size="sm">;"


              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
              <div key={interview.id} className="flex items - center gap - 3">;"
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;"

                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
                    </div>)}
                  <div className="flex justify - between items - start">;"
                    <p className="font - medium line - clamp - 1">;"
                      <span className="text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse">;"
                      </span>)}
<<<<<<< HEAD
                  </div>;
                  <div className="flex items - center text - sm text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <Clock className="h - 3 w - 3 mr - 1" />;
                    {formatted_date} at {formatted_time}
                  </div>;
                </div>;
=======
                  <div className="flex items - center text - sm text - muted - foreground">;"
                    <Clock className="h - 3 w - 3 mr - 1" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>);
          })}
<<<<<<< HEAD
        </div>;"
        <div className="mt - 4 pt - 3 border - t border - zion - blue - light / 40">;"
          <Button as_child size="sm" variant="outline" className="w - full">;


            );
          })}
"
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
            );
          })}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Link to="/interviews">;
              View All Interviews;
            </Link>;
          </Button>;
        </div>;
      </CardContent>;

<<<<<<< HEAD

    </Card>;
  ),; export function UpcomingInterviewsCard () {}
  const {};
  fetchInterviews;
}= useInterviews ();
const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {}
  const loadInterviews = async () => {}
  setIsLoading (true);
try {}
  const interviews = await fetchInterviews ();
const now = new Date ();
}finally {}
=======
    </Card>);
}

}
;
    </Card>;
  ),; export function UpcomingInterviewsCard () {
  const {
  fetchInterviews 
}= useInterviews ();
        <div className="mt - 4 pt - 3 border - t border - zion - blue - light / 40">;"
          <Button as_child size="sm" variant="outline" className="w - full">;"
            <Link to="/interviews">;"

const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]> ([]);
<<<<<<< HEAD
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
  const loadInterviews = async () => {
  setIsLoading (true);
try {
  const interviews = await fetchInterviews ();
const now = new Date ();
}finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  setIsLoading (false) 
}

}
;

};
<<<<<<< HEAD
}, []);"
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> </div> </div>) ) 
}</div> </CardContent> </Card>) "
}<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link to="/interviews" >Schedule Interview</Link> </Button> </div> </CardContent> </Card> return (<Card className="bg-zion-blue-dark/40 border-zion-blue-light" > <CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> interviewDate.getTime () - now.getTime () < 30 * 60 * 1000 && interviewDate.getTime () > now.getTime ();
return (<img src= {}
  interview.client avatar || interview.talent avatar;
}alt= {}
  interview.client name || interview.talent name;
}/>) : (Soon </span>) 
}</div> </div> </div> </div>) 
}) "
=======
}, []);
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> </div> </div>) ) 
}</div> </CardContent> </Card>) 
}<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link to="/interviews" >Schedule Interview</Link> </Button> </div> </CardContent> </Card> return (<Card className="bg-zion-blue-dark/40 border-zion-blue-light" > <CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> interviewDate.getTime () - now.getTime () < 30 * 60 * 1000 && interviewDate.getTime () > now.getTime ();
=======
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews   <CardContent> </div> </div>) )"
}</div>  ) "
}<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews   <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link to="/interviews" >Schedule Interview  </div>   return (<Card className="bg-zion-blue-dark/40 border-zion-blue-light" > <CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews   <CardContent> interviewDate.getTime () - now.getTime () < 30 * 60 * 1000 && interviewDate.getTime () > now.getTime ();"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
return (<img src= {
  interview.client avatar || interview.talent avatar;
}alt= {
  interview.client name || interview.talent name;)
}/>) : (Soon </span>) 
}</div> </div> </div> </div>) 
}) 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews </Link> </Button> </div> </CardContent> </Card>) 
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          })}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</img>
}</div> </div> </div> </div>) "
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews   </div>  )""
pr-12325
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews </Link> </Button> </div> </CardContent> </Card>)""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
