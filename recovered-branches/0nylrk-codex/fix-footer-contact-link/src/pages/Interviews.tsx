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
import { Calendar, Clock, Video } from "lucide-react";
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews($2);
  const [activeTab, setActiveTab] = useState($2);
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = $2;
    loadInterviews()
  }, []),
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> origin/chore/fix-lint-and-merge
function InterviewsContent() {

  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
  
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
>>>>>>> merged-prs-20250907-203621

    const loadInterviews = async () => {
      await fetchInterviews()

<<<<<<< HEAD
=======

<<<<<<< HEAD
    }
    loadInterviews()
  }, []);
  // Filter interviews based on status and date
<<<<<<< HEAD
  const now = new Date($2);
  const today = startOfDay($2);
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO($2);
      return isAfter(interviewDate, now) && 
=======
  const now = new Date();
  const today = startOfDay(now);
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduled_date);
      return isAfter(interviewDate, now) &&
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    loadInterviews()
  }, []);
  // Filter interviews based on status and date
  const now = new Date();
  const today = startOfDay(now);
  const upcomingInterviews = interviews
    .filter((interview) => {
<<<<<<< HEAD

<<<<<<< HEAD
      }
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');'
=======
=======
      const interviewDate = parseISO(interview.scheduled_date),
      return isAfter(interviewDate, now) && 
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
        ['confirmedrequested'].includes(interview.status)
    })
    .sort((a, b) =>
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
<<<<<<< HEAD
    ),
  
  const pendingInterviews = interviews.filter($2);
  const pastInterviews = interviews.filter($2);
    return !isAfter(interviewDate, now) || 
      ['completeddeclinedcancelled'].includes(interview.status)
  }),

  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string, Interview[]> = {},
    
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD
    );
  const pendingInterviews = interviews.filter(interview =>
    interview.status === 'requested'
  );
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date);
    return !isAfter(interviewDate, now) |
      ['completeddeclinedcancelled'].includes(interview.status)
  });
  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string, Interview[]> = {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ),
  
  const pendingInterviews = interviews.filter(interview => 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
    const grouped: Record<string Interview[]> = {},
    

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
      grouped[dateKey].push(interview)
<<<<<<< HEAD
    }),
    
    return grouped
  },
  
  const upcomingGrouped = groupInterviewsByDate($2);
  const pendingGrouped = groupInterviewsByDate($2);
  const pastGrouped = groupInterviewsByDate($2);
  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {
    return Object.entries(groupedInterviews)
=======
    });
    return grouped
  }
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);
  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');
>>>>>>> origin/chore/fix-lint-and-merge
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
<<<<<<< HEAD
return Object.entries(groupedInterviews);
>>>>>>> merged-prs-20250907-203621
      .sort(([dateA], [dateB]) =>
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
<<<<<<< HEAD
=======

=======

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

  const { interviews, isLoading, fetchInterviews } = useInterviews();

  const [activeTab, setActiveTab] = useState("upcoming");
import { Calendar, Clock, Video } from "lucide-react",
import { format, isAfter, parseISO, startOfDay } from "date-fns",

  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {

      await fetchInterviews();
    };

    loadInterviews();

  }, []);

  // Filter interviews based on status and date;
  const now = new Date();
  const today = startOfDay(now);

  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduled_date);
      return (
        isAfter(interviewDate, now) &&
        ["confirmedrequested"].includes(interview.status)
      );
    })
    .sort(
      (a, b) =>
        parseISO(a.scheduled_date).getTime() -
        parseISO(b.scheduled_date).getTime(),
    );

  const pendingInterviews = interviews.filter(
    (interview) => interview.status === "requested",
  );

  const pastInterviews = interviews.filter((interview) => {
    const interviewDate = parseISO(interview.scheduled_date);
    return (
      !isAfter(interviewDate, now) ||
      ["completeddeclinedcancelled"].includes(interview.status)
    );
  });

    });

  // Group interviews by date;
  const groupInterviewsByDate = (interviews: Interview[]) => {;
    const grouped: Record<string, Interview[]> = {};

    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), "yyyy-MM-dd");
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

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
<<<<<<< HEAD
    }),;
=======
    });

      }
      grouped[dateKey].push(interview)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }),
    
    return grouped
  },
  
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),
  const pastGrouped = groupInterviewsByDate(pastInterviews),

  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return Object.entries(groupedInterviews)
      .sort(([dateA], [dateB]) =>
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
>>>>>>> merged-prs-20250907-203621
        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
<<<<<<< HEAD
          <div className = $2;
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((interview) => (
<<<<<<< HEAD
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

      }
      grouped[dateKey].push(interview);
    });
    return grouped;
  };
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);
  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {;
    return Object && Object.entries(groupedInterviews);

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
    ;
    return grouped,;
  },;
  ;
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),;
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),;
  const pastGrouped = groupInterviewsByDate(pastInterviews),;
;
  const renderInterviewGroups = (groupedInterviews:Record<string Interview[]>) => {;
    return Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) => ;
    return grouped;
  },;
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),;
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),;
  const pastGrouped = groupInterviewsByDate(pastInterviews),;
  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {;
    return Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) =>;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    return grouped;
  };
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);
  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {;
    return Object && Object.entries(groupedInterviews);

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

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {;
    return Object && Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) => ;
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
            {interviews && interviews.map((interview) => (;
              <InterviewCard
                key={interview && interview.id} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <InterviewCard 
                key={interview.id} 

<<<<<<< HEAD
=======
            {interviews && interviews.map((interview) => (;
              <InterviewCard
                key={interview && interview.id} 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                interview={interview}
                onRefresh={async () => {}
                  await fetchInterviews();
                }}
              />;
            ))}
<<<<<<< HEAD
=======


  },


<<<<<<< HEAD
            {interviews.map((interview) => (;
              <InterviewCard;
                key={interview.id} ;
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews()
                }}
              />
            ))}
          </div>
        </div>
      ))
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> merged-prs-20250907-203621
  return (
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
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>
<<<<<<< HEAD
          </div>
        </div>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>
        </div>

  return (

    <>
      <SEO"
        title="Interviews | Zion AI Marketplace""
        description="Manage your scheduled interviews with clients and talent"
      />
      <AppHeader />"
      <main className="container mx-auto px-4 py-8">"
        <div className="flex justify-between items-center mb-8">
          <div>"
            <h1 className="text-3xl font-bold">Interviews</h1>"
            <p className="text-muted-foreground mt-1">

            </p>
          </div>
        </div>

        <Tabs;
          defaultValue={activeTab}
          onValueChange={setActiveTab}"
          className="space-y-8"
        >"
          <TabsList className="mb-6">"
            <TabsTrigger value="upcoming" className="flex items-center">"
              <Clock className="h-4 w-4 mr-2" />
              Upcoming;
              {upcomingInterviews.length > 0 && ("
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                  {upcomingInterviews.length}
                </span>
<<<<<<< HEAD

              )}
            </TabsTrigger>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
                  {pendingInterviews.length}
                </span>
<<<<<<< HEAD
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
=======

              )}
            </TabsTrigger>

            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>"
          <TabsContent value="upcoming" className="space-y-6">
            {isLoading ? ("
              <div className="flex justify-center py-12">"
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
<<<<<<< HEAD
            ) : (
<<<<<<< HEAD
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
=======

=======
            ) : ("
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">"
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />"
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>"
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>
              </div>
            )}
          </TabsContent>"
          <TabsContent value="pending" className="space-y-6">
            {isLoading ? ("
              <div className="flex justify-center py-12">"
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
<<<<<<< HEAD
            ) : (
<<<<<<< HEAD
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
=======

=======
            ) : ("
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">"
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />"
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>'"
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>
              </div>
            )}
          </TabsContent>"
          <TabsContent value="past" className="space-y-6">
            {isLoading ? ("
              <div className="flex justify-center py-12">"
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
<<<<<<< HEAD
            ) : (
<<<<<<< HEAD
=======

=======
            ) : ("
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">"
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />"
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>"
                <p className="text-muted-foreground">Your interview history will appear here.</p>
>>>>>>> origin/chore/fix-lint-and-merge
              </div>
            )}

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

=======
<<<<<<< HEAD
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
                  {pendingInterviews.length}
                </span>
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
>>>>>>> merged-prs-20250907-203621
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">Your interview history will appear here.</p>
              </div>
            )}
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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>;
        </div>;
      ));
  };
  return (
    <>;
<<<<<<< HEAD

=======
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
            </TabsTrigger>;
            <TabsTrigger value="past">Past</TabsTrigger>;
          </TabsList>;
          <TabsContent value="upcoming" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) : upcomingInterviews && upcomingInterviews.length > 0 ? (;
              renderInterviewGroups(upcomingGrouped);
            ) : (;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>;
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>;
              </div>;
            )}
          </TabsContent>;
          <TabsContent value="pending" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) : pendingInterviews && pendingInterviews.length > 0 ? (;
              renderInterviewGroups(pendingGrouped);
            ) : (;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>;
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>;
              </div>;
            )}
          </TabsContent>;
          <TabsContent value="past" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) : pastInterviews && pastInterviews.length > 0 ? (;
              renderInterviewGroups(pastGrouped);
            ) : (;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>;
                <p className="text-muted-foreground">Your interview history will appear here.</p>;
              </div>;
            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Interviews</h1>;
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>;
          </div>;
        </div>;
<<<<<<< HEAD

=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">;
          <TabsList className="mb-6">;
            <TabsTrigger value="upcoming" className="flex items-center">;
              <Clock className="h-4 w-4 mr-2" />;
              Upcoming;
<<<<<<< HEAD

=======
              {upcomingInterviews.length > 0 && (;
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">;
                  {upcomingInterviews.length}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value="pending">;
              Pending;
<<<<<<< HEAD

=======
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
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;

}
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;

          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );

}

          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;

  );
}
;

export default function Interviews() {;
  return (
    <ProtectedRoute>;
      <InterviewsContent />;

    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
;

    </>;
  );
}
;
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;

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
    </>;
  ),;
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
