
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from &quot;react&quot;;
import { useInterviews } from &quot;@/hooks/useInterviews&quot;;
import { Interview } from &quot;@/types/interview&quot;;
import { AppHeader } from &quot;@/layout/AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { InterviewCard } from &quot;@/components/interviews/InterviewCard&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Calendar, Clock, Video } from &quot;lucide-react&quot;;
import { format, isAfter, parseISO, startOfDay } from &quot;date-fns&quot;;

function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState(&quot;upcoming&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {
      await fetchInterviews()
    },
=======
import React, {_useEffect, _useState} from "react";

function InterviewsContent() {_const { interviews, _isLoading, _fetchInterviews} = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  useEffect__(() => {_// Modified to handle Promise<Interview[]> return type
    const _loadInterviews = async () => {
      await fetchInterviews();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    loadInterviews()
  }, []),

  // Filter interviews based on status and date
<<<<<<< HEAD
  const now = new Date(),
  const today = startOfDay(now),
  
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduled_date),
      return isAfter(interviewDate, now) && 
        ['confirmedrequested'].includes(interview.status)
    })
    .sort((a, b) => 
=======
  const _now = new Date();
  const _today = startOfDay(now);
  
  const _upcomingInterviews = interviews
    .filter(_(interview) => {_const _interviewDate = parseISO(interview.scheduled_date);
      return isAfter(interviewDate, _now) && 
        ['confirmed', _'requested'].includes(interview.status);})
    .sort(_(a, _b) => 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
    ),
  
  const _pendingInterviews = interviews.filter(interview => 
    interview.status === 'requested'
  ),
  
<<<<<<< HEAD
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date),
    return !isAfter(interviewDate, now) || 
      ['completeddeclinedcancelled'].includes(interview.status)
  }),

  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
      grouped[dateKey].push(interview)
    }),
=======
  const _pastInterviews = interviews.filter(interview => {_const _interviewDate = parseISO(interview.scheduled_date);
    return !isAfter(interviewDate, _now) || 
      ['completed', _'declined', _'cancelled'].includes(interview.status);});

  // Group interviews by date
  const _groupInterviewsByDate = (_interviews: Interview[]) => {_const grouped: Record<string, _Interview[]> = {};
    
    interviews.forEach(_(interview) => {_const _dateKey = format(parseISO(interview.scheduled_date), _'yyyy-MM-dd');
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];}
      grouped[dateKey].push(interview);
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return grouped
  },
  
<<<<<<< HEAD
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
              <InterviewCard 
                key={interview.id} 
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews()
                }}
=======
  const _upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const _pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const _pastGrouped = groupInterviewsByDate(pastInterviews);

  const _renderInterviewGroups = (_groupedInterviews: Record<string, _Interview[]>) => {_return Object.entries(groupedInterviews)
      .sort(_([dateA], _[dateB]) => 
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(_([date, _interviews]) => (
        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {_format(parseISO(date), _'EEEE, _MMMM d, _yyyy')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_interviews.map(_(interview) => (_<InterviewCard 
                key={interview.id} 
                interview={_interview}
                onRefresh={_async () => {
                  await fetchInterviews();}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            ))}
          </div>
        </div>
      ))
  },

  return (
    <>
      <SEO 
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

<<<<<<< HEAD
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className=&quot;space-y-8&quot;>
          <TabsList className=&quot;mb-6&quot;>
            <TabsTrigger value=&quot;upcoming&quot; className=&quot;flex items-center&quot;>
              <Clock className=&quot;h-4 w-4 mr-2&quot; />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className=&quot;ml-2 bg-primary rounded-full px-2 py-0.5 text-xs&quot;>
=======
        <Tabs defaultValue={_activeTab} onValueChange={_setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {_upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value=&quot;pending&quot;>
              Pending
<<<<<<< HEAD
              {pendingInterviews.length > 0 && (
                <span className=&quot;ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs&quot;>
=======
              {_pendingInterviews.length > 0 && (
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value=&quot;past&quot;>Past</TabsTrigger>
          </TabsList>
          
<<<<<<< HEAD
          <TabsContent value=&quot;upcoming&quot; className=&quot;space-y-6&quot;>
            {isLoading ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full&quot;></div>
=======
          <TabsContent value="upcoming" className="space-y-6">
            {_isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
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
          
<<<<<<< HEAD
          <TabsContent value=&quot;pending&quot; className=&quot;space-y-6&quot;>
            {isLoading ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full&quot;></div>
=======
          <TabsContent value="pending" className="space-y-6">
            {_isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
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
          
<<<<<<< HEAD
          <TabsContent value=&quot;past&quot; className=&quot;space-y-6&quot;>
            {isLoading ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full&quot;></div>
=======
          <TabsContent value="past" className="space-y-6">
            {_isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
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

export default function Interviews() {_return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
