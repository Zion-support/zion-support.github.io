
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import Link from "next/link",
import { Calendar, Clock, Video } from 'lucide-react'
import { Avatar } from "@/components/ui/avatar",
import {logErrorToProduction} from '@/utils/productionLogger',export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  useEffect(() => {
    const loadInterviews = async () => {
      setIsLoading(true),
      try {
        const interviews = await fetchInterviews(),
import React, {useEffect, useState} from "react";
import Link from "next/link";

export function UpcomingInterviewsCard() {const { fetchInterviews} = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect_(() => {const loadInterviews = async () => {
      setIsLoading(true);
      try {
        const interviews = await fetchInterviews();
        
        // Filter for confirmed interviews in the future,
const upcoming = interviews
          .filter(interview => 
            interview.status === 'confirmed' && 
            !isPast(parseISO(interview.scheduleddate))
          )
          .sort(_(a, b) => 
            parseISO(a.scheduleddate).getTime() - parseISO(b.scheduleddate).getTime()
          )
          .slice(0, 3), // Take only the next 3 interviews,
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
      <Card className=&quot;bg-zion-blue-dark/40 border-zion-blue-light&quot;>        <CardHeader>
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
                  <div className=&quot;h-3 w-1/2 bg-zion-blue-light/30 rounded&quot;></div>                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (upcomingInterviews.length === 0) {
    return (
      <Card className=&quot;bg-zion-blue-dark/40 border-zion-blue-light&quot;>        <CardHeader>
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
            const interviewDate = parseISO(interview.scheduleddate),
            const formattedDate = format(interviewDate, 'EEE, MMM d'),
            const formattedTime = format(interviewDate, 'h: mm a'),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon =               interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
            
            return (
              <div key={interview.id} className=&quot;flex items-center gap-3&quot;>
                <Avatar className=&quot;h-10 w-10 bg-zion-purple/10&quot;>
                  {interview.clientavatar || interview.talentavatar ? (
                    <img,
src={interview.clientavatar || interview.talentavatar}
                      alt={interview.clientname || interview.talentname}
                      loading=&quot;lazy&quot;
                    />
                  ) : (
                    <div className=&quot;flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium&quot;>
                      {(interview.clientname || interview.talentname || &quot;U&quot;).charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className=&quot;flex-1&quot;>
                  <div className=&quot;flex justify-between items-start&quot;>
                    <p className=&quot;font-medium line-clamp-1&quot;>
                      {interview.title || &quot;Interview&quot}
                    </p>
                    {isStartingSoon && (
                      <span className=&quot;text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse&quot;>                        Soon
                      </span>
                    )}
                  </div>
                  <div className=&quot;flex items-center text-sm text-muted-foreground&quot;>
                    <Clock className=&quot;h-3 w-3 mr-1&quot; />
                    {formattedDate} at {formattedTime}                  </div>
                </div>
              </div>
            )
          })}
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
}
