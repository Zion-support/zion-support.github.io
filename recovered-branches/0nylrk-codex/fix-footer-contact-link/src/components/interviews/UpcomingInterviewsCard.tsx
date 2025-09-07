<<<<<<< HEAD


import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import { Link } from "react-router-dom",
=======
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

  const { fetchInterviews } = useInterviews();import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import { Link } from "react-router-dom",;
>>>>>>> origin/main
import { Calendar, Clock, Video } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  useEffect(() => {
    const loadInterviews = null;

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
=======
import { Calendar, Clock, Video } from "lucide-react",;
import { Avatar } from "@/components/ui/avatar",;
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);      setIsLoading(true);
      try {;
        const interviews = await fetchInterviews();
        const now = new Date();

import React, { useEffect, useState } from "react";""
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {useInterviews} from "@/hooks/useInterviews";""
import {Interview} from "@/types/interview";""
import {format, isPast, parseISO} from "date-fns";""
import {Link} from "react-router-dom";""
import {Calendar, Clock, Video} from "lucide-react";""
import {Avatar} from "@/components/ui/avatar";"
export function UpcomingInterviewsCard() {;

  const { fetchInterviews } = useInterviews();"
import React, { useEffect, useState } from "react",""
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { useInterviews } from "@/hooks/useInterviews",""
import { Interview } from "@/types/interview",""
import { format, isPast, parseISO } from "date-fns",""
import { Link } from "react-router-dom",""
import { Calendar, Clock, Video } from "lucide-react";""
import { Avatar } from "@/components/ui/avatar";"
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),


  const [upcoming_interviews, setUpcomingInterviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    const load_interviews = async () => {
      setIsLoading (true);
      try {
  // TODO: Implement
}
        const interviews = await fetch_interviews ();
        const now = new Date ();
      } catch (error) {"
        console.error("Error loading upcoming interviews:", error)"
      } finally {
  // TODO: Implement
        setIsLoading(false)
pr-12325
      }


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

        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter (interview =>;
            interview.status === 'confirmed' &&;
            !is_past (parseISO (interview.scheduled_date)));
          .sort ((a, b) =>;
            parseISO (a.scheduled_date).get_time () - parseISO (b.scheduled_date).get_time ());
          .slice (0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews (upcoming);
        console.error ("Error loading upcoming interviews:", error);
      } finally {
        setIsLoading (false);
      }
    }

          );
          .slice(0, 3), // Take only the next 3 interviews;

        setUpcomingInterviews(upcoming);
      } catch (error) {;
        console && console.error("Error loading upcoming interviews:", error);
      } finally {;
        setIsLoading(false);
      }
    };

    loadInterviews();
  }, []);

  if (isLoading) {;

    return (    return (
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
              </div>;    return (    return (
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
    );
  }
  return (
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingInterviews.map(interview => {                    </div>;
>>>>>>> origin/main
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
                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
                    </div>)}
                  <div className="flex justify - between items - start">;"
                    <p className="font - medium line - clamp - 1">;"
                      <span className="text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse">;"
                      </span>)}
                  <div className="flex items - center text - sm text - muted - foreground">;"
                    <Clock className="h - 3 w - 3 mr - 1" />;"

              </div>);
        <div className="mt - 4 pt - 3 border - t border - zion - blue - light / 40">;"
          <Button as_child size="sm" variant="outline" className="w - full">;"
            <Link to="/interviews">;"

const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]> ([]);
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews   <CardContent> </div> </div>) )"
}</div>  ) "
}<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews   <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link to="/interviews" >Schedule Interview  </div>   return (<Card className="bg-zion-blue-dark/40 border-zion-blue-light" > <CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews   <CardContent> interviewDate.getTime () - now.getTime () < 30 * 60 * 1000 && interviewDate.getTime () > now.getTime ();"
return (<img src= {
  interview.client avatar || interview.talent avatar;
}alt= {
  interview.client name || interview.talent name;)
}/>) : (Soon </span>) 
</img>
}</div> </div> </div> </div>) "
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews   </div>  )""
pr-12325
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link to="/interviews" > View All Interviews </Link> </Button> </div> </CardContent> </Card>)""

