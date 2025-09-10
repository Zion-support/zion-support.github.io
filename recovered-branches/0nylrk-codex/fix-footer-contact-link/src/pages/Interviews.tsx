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
import { Calendar, Clock, Video } from "lucide-react";
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
import { Calendar, Clock, Video } from "lucide-react",
import { format, isAfter, parseISO, startOfDay } from "date-fns",

function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews(),
  const [activeTab, setActiveTab] = useState("upcoming"),
  
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type

    const loadInterviews = async () => {
      await fetchInterviews()
        ['confirmedrequested'].includes(interview.status)
    })
    .sort((a, b) =>
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
    interview.status === 'requested'
  );
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date);
    return !isAfter(interviewDate, now) |
      ['completeddeclinedcancelled'].includes(interview.status)
  });
  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
    return Object.entries(groupedInterviews)
      .sort(([dateA], [dateB]) =>
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((interview) => (
import React, { useEffect, useState } from "react",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { InterviewCard } from "@/components/interviews/InterviewCard",;
import { Button } from "@/components/ui/button",;
import { Calendar, Clock, Video } from "lucide-react",;
import { format, isAfter, parseISO, startOfDay } from "date-fns",;
;
function InterviewsContent() {;
  const { interviews, isLoading, fetchInterviews } = useInterviews(),;
  const [activeTab, setActiveTab] = useState("upcoming"),;
  ;
  useEffect(() => {;
    // Modified to handle Promise<Interview[]> return type;
    const loadInterviews = async () => {;
      await fetchInterviews(),;
    },;
    ;
    loadInterviews(),;
  }, []),;
;
  // Filter interviews based on status and date;
  const now = new Date(),;
  const today = startOfDay(now),;
  ;
  const upcomingInterviews = interviews;
    .filter((interview) => {;
      const interviewDate = parseISO(interview.scheduled_date),;
      return isAfter(interviewDate, now) && ;
        ['confirmedrequested'].includes(interview.status),;
    });
    .sort((a, b) => ;
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
    ),;
  ;
  const pendingInterviews = interviews.filter(interview => ;
    interview.status === 'requested';
  ),;
  ;
  const pastInterviews = interviews.filter(interview => {;
    const interviewDate = parseISO(interview.scheduled_date),;
    return !isAfter(interviewDate, now) || ;
      ['completeddeclined', 'cancelled'].includes(interview.status),;
  }),;
;
  // Group interviews by date;
  const groupInterviewsByDate = (interviews:Interview[]) => {;
    const grouped:Record<string Interview[]> = {},;
    ;
    interviews.forEach((interview) => {;
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),;
      if (!grouped[dateKey]) {;
        grouped[dateKey] = [],;
      }
      grouped[dateKey].push(interview),;
    }),;    return grouped
};

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

  const renderInterviewGroups = (
    groupedInterviews: Record<string, Interview[]>,
  ) => {
}
return Object.entries(groupedInterviews);
      .sort(
        ([dateA], [dateB]) =>
          parseISO(dateA).getTime() - parseISO(dateB).getTime(),
      )
      .map(([date, interviews]) => (
        <div key={date} className="mb-8">"
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">"
            <Calendar className="h-5 w-5 mr-2" />"
            {format(parseISO(date), "EEEE, MMMM d, yyyy")}"
          </h3>
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-4">"
            {interviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                interview={interview}
                onRefresh={async () => {}
                  await fetchInterviews();
                }}
              />;
            ))}
          </div>
        </div>
      ))
};

            ) : (

              </div>
            )}
          </TabsContent>"
          <TabsContent value="pending" className="space-y-6">
            {isLoading ? ("
              <div className="flex justify-center py-12">"
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
            ) : (

              </div>
            )}
