
import React, { useEffect, useState } from "react",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { InterviewCard } from "@/components/interviews/InterviewCard",
import { Button } from "@/components/ui/button",
import { Calendar, Clock, Video } from "lucide-react",
import { format, isAfter, parseISO, startOfDay } from "date-fns",

function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews(),
  const [activeTab, setActiveTab] = useState("upcoming"),  
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type,
const loadInterviews = async () => {
      await fetchInterviews()
    },
import React, {useEffect, useState} from "react";

function InterviewsContent() {const { interviews, isLoading, fetchInterviews} = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  useEffect_(() => {_// Modified to handle Promise<Interview[]> return type,
const loadInterviews = async () => {
      await fetchInterviews()};
    
    loadInterviews()
  }, []),

  // Filter interviews based on status and date,
const now = new Date(),
  const today = startOfDay(now),
  
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduleddate),
      return isAfter(interviewDate, now) && 
        ['confirmedrequested'].includes(interview.status)
    })
    .sort((a, b) =>       parseISO(a.scheduleddate).getTime() - parseISO(b.scheduleddate).getTime()
    ),
  
  const pendingInterviews = interviews.filter(interview => 
    interview.status === 'requested'
  ),
  
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduleddate),
    return !isAfter(interviewDate, now) || 
      ['completeddeclinedcancelled'].includes(interview.status)
  }),

  // Group interviews by date,
const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduleddate), 'yyyy-MM-dd'),
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
      grouped[dateKey].push(interview)
    }),    
    return grouped
  },
  
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),
  const pastGrouped = groupInterviewsByDate(pastInterviews),

  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {
    return Object.entries(groupedInterviews)
      .sort(([dateA], [dateB]) => 
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
        <div key={date} className=&quot;mb-8&quot;>
          <h3 className=&quot;text-lg font-medium text-white mb-4 flex items-center&quot;>
            <Calendar className=&quot;h-5 w-5 mr-2&quot; />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {interviews.map((interview) => (
              <InterviewCard,
key={interview.id} 
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews()
                }}              />
            ))}
          </div>
        </div>
      ))
  },

  return (
    <>
      <SEO,
title=&quot;Interviews | Zion AI Marketplace&quot; 
        description=&quot;Manage your scheduled interviews with clients and talent&quot; 
      />
      <AppHeader />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex justify-between items-center mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold&quot;>Interviews</h1>
            <p className=&quot;text-muted-foreground mt-1&quot;>Schedule and manage your video interviews</p>
          </div>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className=&quot;space-y-8&quot;>
          <TabsList className=&quot;mb-6&quot;>
            <TabsTrigger value=&quot;upcoming&quot; className=&quot;flex items-center&quot;>
              <Clock className=&quot;h-4 w-4 mr-2&quot; />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className=&quot;ml-2 bg-primary rounded-full px-2 py-0.5 text-xs&quot;>                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value=&quot;pending&quot;>
              Pending
              {pendingInterviews.length > 0 && (
                <span className=&quot;ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs&quot;>                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value=&quot;past&quot;>Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;upcoming&quot; className=&quot;space-y-6&quot;>
            {isLoading ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full&quot;></div>              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className=&quot;text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light&quot;>
                <Video className=&quot;h-12 w-12 mx-auto text-muted-foreground mb-4&quot; />
                <h3 className=&quot;text-xl font-medium mb-2&quot;>No upcoming interviews</h3>
                <p className=&quot;text-muted-foreground mb-6&quot;>You don't have any scheduled interviews coming up.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value=&quot;pending&quot; className=&quot;space-y-6&quot;>
            {isLoading ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full&quot;></div>              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className=&quot;text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light&quot;>
                <Clock className=&quot;h-12 w-12 mx-auto text-muted-foreground mb-4&quot; />
                <h3 className=&quot;text-xl font-medium mb-2&quot;>No pending interviews</h3>
                <p className=&quot;text-muted-foreground mb-6&quot;>You don't have any interview requests that need your attention.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value=&quot;past&quot; className=&quot;space-y-6&quot;>
            {isLoading ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full&quot;></div>              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className=&quot;text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light&quot;>
                <Calendar className=&quot;h-12 w-12 mx-auto text-muted-foreground mb-4&quot; />
                <h3 className=&quot;text-xl font-medium mb-2&quot;>No past interviews</h3>
                <p className=&quot;text-muted-foreground&quot;>Your interview history will appear here.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
}

export default function Interviews() {return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  )
}