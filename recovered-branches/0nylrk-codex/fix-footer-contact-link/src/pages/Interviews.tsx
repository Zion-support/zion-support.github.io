<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useEffect, useState } from "react";
import {useInterviews} from "@/hooks/useInterviews";
import {Interview} from "@/types/interview";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {InterviewCard} from "@/components/interviews/InterviewCard";
import {Button} from "@/components/ui/button";
import {Calendar, Clock, Video} from "lucide-react";
import {format, isAfter, parseISO, startOfDay} from "date-fns";
function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type

    const loadInterviews = async () => {
      await fetchInterviews()
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    loadInterviews()
  }, []);
  // Filter interviews based on status and date
  const now = new Date();
  const today = startOfDay(now);
  const upcomingInterviews = interviews
    .filter((interview) => {
<<<<<<< HEAD
      const interviewDate = parseISO(interview.scheduled_date);
      return isAfter(interviewDate, now) &&
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },
    
    loadInterviews()
  }, []),

  // Filter interviews based on status and date
  const now = new Date(),
  const today = startOfDay(now),
  
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduled_date),
      return isAfter(interviewDate, now) && 
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ['confirmedrequested'].includes(interview.status)
    })
    .sort((a, b) =>
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
    );
  const pendingInterviews = interviews.filter(interview =>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    interview.status === 'requested'
  );
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date);
    return !isAfter(interviewDate, now) |
      ['completeddeclinedcancelled'].includes(interview.status)
  });
  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
<<<<<<< HEAD
    const grouped: Record<string, Interview[]> = {}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ),
  
  const pendingInterviews = interviews.filter(interview => 
    interview.status === 'requested'
  ),
  
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date),
    return !isAfter(interviewDate, now) || 
      ['completeddeclinedcancelled'].includes(interview.status)
  }),

  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React, { useEffect, useState } from "react";
import {useInterviews} from "@/hooks/useInterviews";
import {Interview} from "@/types/interview";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {InterviewCard} from "@/components/interviews/InterviewCard";
import {Button} from "@/components/ui/button";
import {Calendar, Clock, Video} from "lucide-react";
import {format, isAfter, parseISO, startOfDay} from "date-fns";

function InterviewsContent() {;
=======
import { Calendar, Clock, Video } from "lucide-react";
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    loadInterviews()
  }, []);
  // Filter interviews based on status and date
  const now = new Date();
  const today = startOfDay(now);
  const upcomingInterviews = interviews
    .filter((interview) => {
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
<<<<<<< HEAD

<<<<<<< HEAD
      }
      grouped[dateKey].push(interview)
<<<<<<< HEAD

=======
=======
    return grouped;
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

<<<<<<< HEAD
  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const renderInterviewGroups = (
    groupedInterviews: Record<string, Interview[]>,
  ) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    return Object.entries(groupedInterviews)
      .sort(
        ([dateA], [dateB]) =>
          parseISO(dateA).getTime() - parseISO(dateB).getTime(),
      )
      .map(([date, interviews]) => (
        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {format(parseISO(date), "EEEE, MMMM d, yyyy")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((interview) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


    return grouped;
  };

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {;
    return Object && Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) => ;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <InterviewCard
                key={interview.id}
              <InterviewCard 
                key={interview.id} 
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
function InterviewsContent() {;
  const { interviews, isLoading, fetchInterviews } = useInterviews(),;
  const [activeTab, setActiveTab] = useState("upcoming"),;
  useEffect(() => {;
    // Modified to handle Promise<Interview[]> return type;
    const loadInterviews = async () => {;
      await fetchInterviews();
    },;
    loadInterviews();
  }, []),;
  // Filter interviews based on status and date;
  const now = new Date(),;
  const today = startOfDay(now),;
  const upcomingInterviews = interviews;
    .filter((interview) => {;
      const interviewDate = parseISO(interview.scheduled_date),;
      return isAfter(interviewDate, now) &&;
        ['confirmedrequested'].includes(interview.status);
    });
    .sort((a, b) =>;
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
    ),;
  const pendingInterviews = interviews.filter(interview =>;
    interview.status === 'requested';
  ),;
  const pastInterviews = interviews.filter(interview => {;
    const interviewDate = parseISO(interview.scheduled_date),;
    return !isAfter(interviewDate, now) ||;
      ['completeddeclinedcancelled'].includes(interview.status);
  }),;
  // Group interviews by date;
  const groupInterviewsByDate = (interviews: Interview[]) => {;
    const grouped: Record<string Interview[]> = {},;
    interviews.forEach((interview) => {;
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),;
      if (!grouped[dateKey]) {;
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(interview);
    }),;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

      }
      grouped[dateKey].push(interview);
    });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return grouped;
  };
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);
  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {;
    return Object && Object.entries(groupedInterviews);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    }),;
    return grouped;
<<<<<<< HEAD
  },;
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),;
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),;
  const pastGrouped = groupInterviewsByDate(pastInterviews),;
  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {;
    return Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) =>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  };

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {;
    return Object && Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) => ;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        parseISO(dateA).getTime() - parseISO(dateB).getTime();
      );
      .map(([date, interviews]) => (;
        <div key={date} className="mb-8">;
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
            <Calendar className="h-5 w-5 mr-2" />;
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
<<<<<<< HEAD
            {interviews.map((interview) => (;
              <InterviewCard;
                key={interview.id} ;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            {interviews && interviews.map((interview) => (;
              <InterviewCard
                key={interview && interview.id} 

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              <InterviewCard 
                key={interview.id} 

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            {interviews && interviews.map((interview) => (;
              <InterviewCard
                key={interview && interview.id} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      }
      grouped[dateKey].push(interview);
    });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <InterviewCard
                key={interview.id}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews();
                }}
              />;
            ))}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      ))
=======
  }
  },
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      ));
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      ))
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======  return (
    <>
      <SEO
        title="Interviews | Zion AI Marketplace"
        description="Manage your scheduled interviews with clients and talent"
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interviews</h1>
            <p className="text-muted-foreground mt-1">
              Schedule and manage your video interviews
            </p>
          </div>
        </div>

        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
                  {upcomingInterviews.length}
                </span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
                  {pendingInterviews.length}
                </span>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="pending" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="past" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">Your interview history will appear here.</p>
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;
  );
}
export default function Interviews() {
  return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </div>;
        </div>;
      ));
  };

  return (
    <>;
      <SEO
        title="Interviews | Zion AI Marketplace" 
        description="Manage your scheduled interviews with clients and talent" 
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Interviews</h1>;
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>;
          </div>;
        </div>;

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">;
          <TabsList className="mb-6">;
            <TabsTrigger value="upcoming" className="flex items-center">;
              <Clock className="h-4 w-4 mr-2" />;
              Upcoming;
              {upcomingInterviews && upcomingInterviews.length > 0 && (;
                <span className="ml-2 bg-primary rounded-full px-2 py-0 && 0.5 text-xs">;
                  {upcomingInterviews && upcomingInterviews.length}
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value="pending">;
              Pending;
              {pendingInterviews && pendingInterviews.length > 0 && (;
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0 && 0.5 text-xs">;
                  {pendingInterviews && pendingInterviews.length}
                </span>;
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">
                  No upcoming interviews
                </h3>
                <p className="text-muted-foreground mb-6">
                  You don't have any scheduled interviews coming up.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">
                  No pending interviews
                </h3>
                <p className="text-muted-foreground mb-6">
                  You don't have any interview requests that need your
                  attention.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">
                  Your interview history will appear here.
                </p>
              </div>
            )}
<<<<<<< HEAD



=======
=======
            )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useEffect, useState } from './react';
import { use_interviews } from '@/hooks / use_interviews';
import { Interview } from '@/types / interview';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { InterviewCard } from '@/components / interviews / InterviewCard';
import { Button } from '@/components / ui / button';
import { Calendar, Clock, Video } from './lucide-react';
import { format, is_after, parseISO, startOfDay } from './date - fns';
/**
 * InterviewsContent - Function description
 */
function InterviewsContent() {
  const { interviews, is_loading, fetch_interviews } = use_interviews ();
  const [active_tab, setActiveTab] = useState ("upcoming");
;
  useEffect (() => {
    // Modified to handle Promise < Interview[]> return type;
    const load_interviews = async () => {
      await fetch_interviews ();
    }
;
    load_interviews ();
  }, []);
;
  // Filter interviews based on status and date;
  const now = new Date ();
  const today = startOfDay (now);
;
  const upcoming_interviews = interviews;
    .filter ((interview) => {
      const interview_date = parseISO (interview.scheduled_date);
      return is_after (interview_date, now) &&;
        ['confirmedrequested'].includes (interview.status);
    });
    .sort ((a, b) =>;
      parseISO (a.scheduled_date).get_time () - parseISO (b.scheduled_date).get_time ());
;
  const pending_interviews = interviews.filter (interview =>;
    interview.status === 'requested');
;
  const past_interviews = interviews.filter (interview => {
    const interview_date = parseISO (interview.scheduled_date);
    return !is_after (interview_date, now) ||;
      ['completeddeclinedcancelled'].includes (interview.status);
  });
;
  // Group interviews by date;
  const groupInterviewsByDate = (interviews: Interview[]) =>: any {
    const grouped: Record < string, Interview[]> = {}
;
    interviews.for_each ((interview) => {
      const date_key = format (parseISO (interview.scheduled_date), 'yyyy - MM - dd');
      // Check condition
if ( {) {
  $2
}
        grouped[date_key] = [];
      }
      grouped[date_key].push (interview);
    });
;
    return grouped;
  }
;
  const upcoming_grouped = groupInterviewsByDate (upcoming_interviews);
  const pending_grouped = groupInterviewsByDate (pending_interviews);
  const past_grouped = groupInterviewsByDate (past_interviews);
;
  const renderInterviewGroups = (grouped_interviews: Record < string, Interview[]>) =>: any {
    return Object.entries (grouped_interviews);
      .sort (([date_a], [date_b]) =>;
        parseISO (date_a).get_time () - parseISO (date_b).get_time ());
      .map (([date, interviews]) => (
        <div key={date} className="mb - 8">;
          <h3 className="text - lg font - medium text - white mb - 4 flex items - center">;
            <Calendar className="h - 5 w - 5 mr - 2" />;
            {format (parseISO (date), 'EEEE, MMMM d, yyyy')}
          </h3>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
            {interviews.map ((interview) => (
              <InterviewCard;
                key={interview.id}
                interview={interview}
                on_refresh={async () => {
                  await fetch_interviews ();
                }}
              />))}
          </div>;
        </div>));
  }
;
  return (
    <>;
      <SEO;
        title="Interviews | Zion AI Marketplace";
        description="Manage your scheduled interviews with clients and talent";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="flex justify - between items - center mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold">Interviews</h1>;
            <p className="text - muted - foreground mt - 1">Schedule and manage your video interviews</p>;
          </div>;
        </div>;
        <Tabs default_value={active_tab} onValueChange={setActiveTab} className="space - y-8">;
          <TabsList className="mb - 6">;
            <TabsTrigger value="upcoming" className="flex items - center">;
              <Clock className="h - 4 w - 4 mr - 2" />;
              Upcoming;
              {upcoming_interviews.length > 0 && (
                <span className="ml - 2 bg - primary rounded - full px - 2 py - 0.5 text - xs">;
                  {upcoming_interviews.length}
                </span>)}
            </TabsTrigger>;
            <TabsTrigger value="pending">;
              Pending;
              {pending_interviews.length > 0 && (
                <span className="ml - 2 bg - amber - 500 rounded - full px - 2 py - 0.5 text - xs">;
                  {pending_interviews.length}
                </span>)}
            </TabsTrigger>;
            <TabsTrigger value="past">Past</TabsTrigger>;
          </TabsList>;
          <TabsContent value="upcoming" className="space - y-6">;
            {is_loading ? (
              <div className="flex justify - center py - 12">;
                <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full"></div>;
              </div>) : upcoming_interviews.length > 0 ? (
              renderInterviewGroups (upcoming_grouped)) : (
              <div className="text - center py - 12 bg - zion - blue - dark / 40 rounded - lg border border - zion - blue - light">;
                <Video className="h - 12 w - 12 mx - auto text - muted - foreground mb - 4" />;
                <h3 className="text - xl font - medium mb - 2">No upcoming interviews</h3>;
                <p className="text - muted - foreground mb - 6">You don't have any scheduled interviews coming up.</p>;
              </div>)}
          </TabsContent>;
          <TabsContent value="pending" className="space - y-6">;
            {is_loading ? (
              <div className="flex justify - center py - 12">;
                <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full"></div>;
              </div>) : pending_interviews.length > 0 ? (
              renderInterviewGroups (pending_grouped)) : (
              <div className="text - center py - 12 bg - zion - blue - dark / 40 rounded - lg border border - zion - blue - light">;
                <Clock className="h - 12 w - 12 mx - auto text - muted - foreground mb - 4" />;
                <h3 className="text - xl font - medium mb - 2">No pending interviews</h3>;
                <p className="text - muted - foreground mb - 6">You don't have any interview requests that need your attention.</p>;
              </div>)}
          </TabsContent>;
          <TabsContent value="past" className="space - y-6">;
            {is_loading ? (
              <div className="flex justify - center py - 12">;
                <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full"></div>;
              </div>) : past_interviews.length > 0 ? (
              renderInterviewGroups (past_grouped)) : (
              <div className="text - center py - 12 bg - zion - blue - dark / 40 rounded - lg border border - zion - blue - light">;
                <Calendar className="h - 12 w - 12 mx - auto text - muted - foreground mb - 4" />;
                <h3 className="text - xl font - medium mb - 2">No past interviews</h3>;
                <p className="text - muted - foreground">Your interview history will appear here.</p>;
              </div>)}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            {interviews.map((interview) => (;
              <InterviewCard ;
                key={interview.id} ;
                interview={interview}
                onRefresh={async () => {;
                  await fetchInterviews(),;
                }}
              />;
            ))}
          </div>;
        </div>;
      )),;
  },;
;
  return (;
    <>;
      <SEO ;
        title="Interviews | Zion AI Marketplace" ;
        description="Manage your scheduled interviews with clients and talent" ;
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Interviews</h1>;
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>;
          </div>;
        </div>;
;
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">;
          <TabsList className="mb-6">;
            <TabsTrigger value="upcoming" className="flex items-center">;
              <Clock className="h-4 w-4 mr-2" />;
              Upcoming;
              {upcomingInterviews.length > 0 && (;
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">;
                  {upcomingInterviews.length}
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value="pending">;
              Pending;
              {pendingInterviews.length > 0 && (;
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">;
                  {pendingInterviews.length}
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value="past">Past</TabsTrigger>;
          </TabsList>;
          ;
          <TabsContent value="upcoming" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) :upcomingInterviews.length > 0 ? (;
              renderInterviewGroups(upcomingGrouped);
            ) :(;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>;
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>;
              </div>;
            )}
          </TabsContent>;
          ;
          <TabsContent value="pending" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) :pendingInterviews.length > 0 ? (;
              renderInterviewGroups(pendingGrouped);
            ) :(;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>;
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>;
              </div>;
            )}
          </TabsContent>;
          ;
          <TabsContent value="past" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) :pastInterviews.length > 0 ? (;
              renderInterviewGroups(pastGrouped);
            ) :(;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>;
                <p className="text-muted-foreground">Your interview history will appear here.</p>;
              </div>;
            )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
<<<<<<< HEAD
    </>;
  );
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

export default function Interviews() {
  return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
<<<<<<< HEAD


=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}
;

<<<<<<< HEAD
<<<<<<< HEAD
export default function Interviews() {;
  return (
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>;
  );
}

;
<<<<<<< HEAD
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </>);
}
export default /**
 * Interviews - Function description
 */
function Interviews() {
  return (
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </>;
  ),;
}
;
export default function Interviews() {;
  return (;
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>;
  );
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
