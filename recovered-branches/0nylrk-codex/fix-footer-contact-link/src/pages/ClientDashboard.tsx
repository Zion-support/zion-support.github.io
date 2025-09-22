<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState, useEffect} from "react";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {JobsList} from "@/components/jobs/JobsList";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Link} from "react-router-dom";
import {JobStatus} from "@/types/jobs";
import {SEO} from "@/components/SEO";
import {BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {SuggestedTalents} from "@/components/jobs/SuggestedTalents";
import {useJobs} from "@/hooks/useJobs";
import {ClientOnboardingSteps} from "@/components/onboarding/ClientOnboardingSteps";
import {ActiveProjectsCard} from "@/components/projects/ActiveProjectsCard";
import {UpcomingInterviewsCard} from "@/components/interviews/UpcomingInterviewsCard";
import {useIsMobile} from "@/hooks/use-mobile";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function ClientDashboardContent() {;

=======
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");
  const { jobs, isLoading } = useJobs();
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const isMobile = useIsMobile();
  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs && jobs.length > 0 && !selectedJobId) {;
      setSelectedJobId(jobs[0].id);
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { JobsList } from "@/components/jobs/JobsList",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Link } from "react-router-dom",
import { JobStatus } from "@/types/jobs",
import { SEO } from "@/components/SEO",
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from "lucide-react",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents",
import { useJobs } from "@/hooks/useJobs",
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps",
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard",
<<<<<<< HEAD
<<<<<<< HEAD
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { JobsList } from "@/components/jobs/JobsList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { JobStatus } from "@/types/jobs";
<<<<<<< HEAD
=======
import { useState, useEffect } from "react";"
import { AppHeader } from "@/layout/AppHeader";"
import { Footer } from "@/components/Footer";"
import { JobsList } from "@/components/jobs/JobsList";"
import { Button } from "@/components/ui/button";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { Link } from "react-router-dom";"
import { JobStatus } from "@/types/jobs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SEO } from "@/components/SEO";
import {}
=======
import { SEO } from "@/components/SEO";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  Kanban,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Video,
} from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents";
import { useJobs } from "@/hooks/useJobs";
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps";
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard";
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { useIsMobile } from "@/hooks/use-mobile";
=======
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",import { useIsMobile } from "@/hooks/use-mobile";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",import { useIsMobile } from "@/hooks/use-mobile";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useIsMobile } from "@/hooks/use-mobile";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");
=======
  Video,";
} from "lucide-react";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents";"
import { useJobs } from "@/hooks/useJobs";"
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps";"
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard";"
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";"
import { useIsMobile } from "@/hooks/use-mobile";
function ClientDashboardContent() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { jobs, isLoading } = useJobs();

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const isMobile = useIsMobile();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs && jobs.length > 0 && !selectedJobId) {;

      setSelectedJobId(jobs[0].id);
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]);



<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useIsMobile } from "@/hooks/use-mobile",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),
=======
function ClientDashboardContent() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { jobs, isLoading } = useJobs(),
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),
  const isMobile = useIsMobile(),

<<<<<<< HEAD
=======
  // Set the first job as selected when jobs are loaded (if any)
  useEffect(() => {}
    if (jobs.length > 0 && !selectedJobId) {}
      setSelectedJobId(jobs[0].id),
      setSelectedJobTitle(jobs[0].title)
    }

<<<<<<< HEAD
  }, [jobs, selectedJobId]),


  const handleJobSelect = (jobId: string, jobTitle: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)

  },

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }, [jobs, selectedJobId]);
  }, [jobs, selectedJobId]),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    (setSelectedJobId(jobId), setSelectedJobTitle(jobTitle));
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    (setSelectedJobId(jobId), setSelectedJobTitle(jobTitle))
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    (setSelectedJobId(jobId), setSelectedJobTitle(jobTitle))
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    (setSelectedJobId(jobId), setSelectedJobTitle(jobTitle));
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>
      <SEO"
        title="Client Dashboard | Zion AI Marketplace""
        description="Manage your jobs and talent requests in the Zion AI Marketplace."
      />
      <AppHeader />"
      <main className="container mx-auto px-4 py-8">
        <div"
          className={`flex flex-col ${!isMobile ? "md:flex-row md:justify-between md:items-center" : ""} mb-8 gap-4`}
        >
          <div>"`
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>
              My Jobs;
            </h1>"
            <p className="text-muted-foreground mt-1">
              Manage your job postings and talent applications;
            </p>
          </div>"`
          <div className={`flex gap-2 ${isMobile ? "flex-col" : ""}`}>
            <Button"
              variant="outline"
              asChild"
              className={isMobile ? "w-full justify-center" : ""}
            >"
              <Link to="/hiring-tracker">"
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>
            </Button>"
            <Button asChild className={isMobile ? "w-full justify-center" : ""}>"
              <Link to="/post-job">"
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;
              </Link>
            </Button>
          </div>
        </div>
        {/* New Onboarding Steps */}"
        <div className="mb-8">
          <ClientOnboardingSteps />
        </div>"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
          <div className="lg:col-span-2">
            <Tabs"
              defaultValue="all"
              onValueChange={(value) =>"
                setActiveTab(value as JobStatus | "all")
              }
            >"`
              <TabsList className={`mb-6 ${isMobile ? "w-full" : ""}`}>"
                <TabsTrigger value="all" className={isMobile ? "flex-1" : ""}>
                  All;
                </TabsTrigger>"
                <TabsTrigger value="new" className={isMobile ? "flex-1" : ""}>
                  New;
                </TabsTrigger>
                <TabsTrigger"
                  value="in_progress""
                  className={isMobile ? "flex-1" : ""}
                >
                  Active;
                </TabsTrigger>
                <TabsTrigger"
                  value="filled""
                  className={isMobile ? "flex-1" : ""}
                >
                  Filled;
                </TabsTrigger>
                <TabsTrigger"
                  value="closed""
                  className={isMobile ? "flex-1" : ""}
                >
                  Closed;
                </TabsTrigger>
              </TabsList>
"
              <TabsContent value="all" className="mt-0">
                <JobsList onSelectJob={handleJobSelect} />
              </TabsContent>"
              <TabsContent value="new" className="mt-0">"
                <JobsList filter="new" onSelectJob={handleJobSelect} />
              </TabsContent>"
              <TabsContent value="in_progress" className="mt-0">"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />
              </TabsContent>"
              <TabsContent value="filled" className="mt-0">"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />
              </TabsContent>"
              <TabsContent value="closed" className="mt-0">"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />

import { useState, useEffect } from "react";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { JobsList } from "@/components/jobs/JobsList";""
import { Button } from "@/components/ui/button";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { Link } from "react-router-dom";""
import { JobStatus } from "@/types/jobs";""
import { SEO } from "@/components/SEO";"
import {
  // TODO: Implement
}
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  Kanban,
  Video,"
} from "lucide-react";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents";""
import { useJobs } from "@/hooks/useJobs";""
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps";""
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard";""
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";""
import { useIsMobile } from "@/hooks/use-mobile";"
function ClientDashboardContent() {"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");"
</JobStatus>
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
</string>"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");"
</string>"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),"
</JobStatus>
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),
</string>"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),"
</string>
    <>
      <SEO;"
        title="Client Dashboard | Zion AI Marketplace"""
        description="Manage your jobs and talent requests in the Zion AI Marketplace.""

      />
</SEO>
      <AppHeader />

</AppHeader>"
      <main className="container mx-auto px-4 py-8">"
</main>
        <div;"
          className={`flex flex-col ${!isMobile ? "md:flex-row md:justify-between md:items-center" : ""} mb-8 gap-4`}"
        >
</div>
          <div>
</div>"
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>"
</h1>
            </h1>"
            <p className="text-muted-foreground mt-1">"
</p>
            </p>
          </div>"
          <div className={`flex gap-2 ${isMobile ? "flex-col" : ""}`}>"
</div>
            <Button;"
              variant="outline""
              asChild;"
              className={isMobile ? "w-full justify-center" : ""}"
            >
</Button>"
              <Link to="/hiring-tracker">"
</Link>"
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;"
</Kanban>
              </Link>
            </Button>"
            <Button asChild className={isMobile ? "w-full justify-center" : ""}>"
</Button>"
              <Link to="/post-job">"
</Link>"
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;"
</PlusCircle>
              </Link>
            </Button>
          </div>
        </div>"
        <div className="mb-8">"
</div>
          <ClientOnboardingSteps />
</ClientOnboardingSteps>
        </div>"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
</div>"
          <div className="lg:col-span-2">"
</div>
            <Tabs;"
              defaultValue="all""
              onValueChange={(value) =>
</Tabs>"
              <TabsList className={`mb-6 ${isMobile ? "w-full" : ""}`}>"
</TabsList>"
                <TabsTrigger value="all" className={isMobile ? "flex-1" : ""}>"
</TabsTrigger>
                </TabsTrigger>"
                <TabsTrigger value="new" className={isMobile ? "flex-1" : ""}>"
</TabsTrigger>
                </TabsTrigger>
                <TabsTrigger;"
                  value="in_progress"""
                  className={isMobile ? "flex-1" : ""}"
                >
</TabsTrigger>
                </TabsTrigger>
                <TabsTrigger;"
                  value="filled"""
                  className={isMobile ? "flex-1" : ""}"
                >
</TabsTrigger>
                </TabsTrigger>
                <TabsTrigger;"
                  value="closed"""
                  className={isMobile ? "flex-1" : ""}"
                >
</TabsTrigger>
                </TabsTrigger>
              </TabsList>
"
              <TabsContent value="all" className="mt-0">"
</TabsContent>
                <JobsList onSelectJob={handleJobSelect} />
</JobsList>
              </TabsContent>"
              <TabsContent value="new" className="mt-0">"
</TabsContent>"
                <JobsList filter="new" onSelectJob={handleJobSelect} />"
</JobsList>
              </TabsContent>"
              <TabsContent value="in_progress" className="mt-0">"
</TabsContent>"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />"
</JobsList>
              </TabsContent>"
              <TabsContent value="filled" className="mt-0">"
</TabsContent>"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />"
</JobsList>
              </TabsContent>"
              <TabsContent value="closed" className="mt-0">"
</TabsContent>"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />"
</JobsList>
              </TabsContent>
            </Tabs>
          </div>

          <div>"
            <div className="sticky top-4 space-y-6">
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Active Projects Card */}
              <ActiveProjectsCard />;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState, useEffect } from "react",;
              {/* Active Projects Card */}
              <ActiveProjectsCard />;

              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;

              {/* AI Talent Suggestions */}
              <div>;
                <h2 className="text-xl font-semibold mb-4 flex items-center">;
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />;
                  AI Talent Suggestions;
                </h2>;

                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) : (;
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">;
                    <p className="text-muted-foreground">;
                      Select a job to see AI-matched talent suggestions;
                    </p>;
                  </div>;
                )}
import { useState, useEffect } from './react';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { JobsList } from '@/components / jobs / JobsList';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Link } from './react-router-dom';
import { JobStatus } from '@/types / jobs';
import { SEO } from '@/components / SEO';
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from './lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { SuggestedTalents } from '@/components / jobs / SuggestedTalents';
import { use_jobs } from '@/hooks / use_jobs';
import { ClientOnboardingSteps } from '@/components / onboarding / ClientOnboardingSteps';
import { ActiveProjectsCard } from '@/components / projects / ActiveProjectsCard';
import { UpcomingInterviewsCard } from '@/components / interviews / UpcomingInterviewsCard';
import { useIsMobile } from '@/hooks / use - mobile';
/**
 * ClientDashboardContent - Function description
 */
function ClientDashboardContent() {
  const [active_tab, setActiveTab] = useState < JobStatus | "all">("all");
  const { jobs, is_loading } = use_jobs ();
  const [selectedJobId, setSelectedJobId] = useState < string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState < string>("");
  const is_mobile = useIsMobile ();
;
  // Set the first job as selected when jobs are loaded (if any);
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      setSelectedJobId (jobs[0].id);
      setSelectedJobTitle (jobs[0].title);
    }
  }, [jobs, selectedJobId]);
;
  const handleJobSelect = (job_id: string, job_title: string) =>: any {
    setSelectedJobId (job_id),
    setSelectedJobTitle (job_title);
  }
;
  return (
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py-8">;
        <div className={`flex flex - col ${!is_mobile ? 'md:flex - row md:justify - between md:items - center' : ''} mb - 8 gap - 4`}>;
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>My Jobs</h1>;
            <p className="text - muted - foreground mt-1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap - 2 ${is_mobile ? 'flex - col' : ''}`}>;
            <Button variant="outline" as_child className={is_mobile ? 'w - full justify - center' : ''}>;
              <Link to="/hiring - tracker">;
                <Kanban className="h - 4 w - 4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;
            <Button as_child className={is_mobile ? 'w - full justify - center' : ''}>;
              <Link to="/post - job">;
                <PlusCircle className="h - 4 w - 4 mr-2" /> Post New Job;import { useState, useEffect } from "react",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { JobsList } from "@/components/jobs/JobsList",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Link } from "react-router-dom",;
import { JobStatus } from "@/types/jobs",;
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents",;
import { useJobs } from "@/hooks/useJobs",;
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps",;
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard",;
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;
=======
"
import { useState, useEffect } from "react",;"
import { AppHeader } from "@/layout/AppHeader",;"
import { Footer } from "@/components/Footer",;"
import { JobsList } from "@/components/jobs/JobsList",;"
import { Button } from "@/components/ui/button",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Link } from "react-router-dom",;"
import { JobStatus } from "@/types/jobs",;"
import { SEO } from "@/components/SEO",;"
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from "lucide-react",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents",;"
import { useJobs } from "@/hooks/useJobs",;"
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps",;"
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard",;"
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useIsMobile } from "@/hooks/use-mobile",;
function ClientDashboardContent() { return null; }
  const { jobs, isLoading } = useJobs(),;
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;
  const isMobile = useIsMobile(),;
  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs.length > 0 && !selectedJobId) {;
      setSelectedJobId(jobs[0].id),;
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleJobSelect = (jobId: string, jobTitle: string) => {;
    setSelectedJobId(jobId),;
    setSelectedJobTitle(jobTitle);
  };

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
    <>;
      <SEO
        title="Client Dashboard | Zion AI Marketplace" 
        description="Manage your jobs and talent requests in the Zion AI Marketplace." 
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
return (;
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      />;
      <AppHeader />;"
      <main className="container mx-auto px-4 py-8">;`
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>;
          <div>;'`
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;"
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;
<<<<<<< HEAD
          </div>;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          </div>;'`
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;
"
              <Link to="/hiring-tracker">;"
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;
'
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;"
              <Link to="/post-job">;"
=======
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;
import { useState, useEffect } from "react",;
import { AppHeader } from "@/layout/AppHeader", ;
import { Footer } from "@/components/Footer",;
import { JobsList } from "@/components/jobs/JobsList",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Link } from "react-router-dom",;
import { JobStatus } from "@/types/jobs",;
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents",;
import { useJobs } from "@/hooks/useJobs",;
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps",;
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard",;
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;
import { useIsMobile } from "@/hooks/use-mobile",;
;
function ClientDashboardContent() {;
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;
  const { jobs, isLoading } = useJobs(),;
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;
  const isMobile = useIsMobile(),;
;
  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs.length > 0 && !selectedJobId) {;
      setSelectedJobId(jobs[0].id),;
      setSelectedJobTitle(jobs[0].title),;
    }
  }, [jobs, selectedJobId]),;
;
  const handleJobSelect = (jobId:string, jobTitle:string) => {;
    setSelectedJobId(jobId),;
    setSelectedJobTitle(jobTitle);
  },;
;
  return (;
    <>;
      <SEO ;
        title="Client Dashboard | Zion AI Marketplace" ;
        description="Manage your jobs and talent requests in the Zion AI Marketplace." ;
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' :''} mb-8 gap-4`}>;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' :'3xl'} font-bold`}>My Jobs</h1>;
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' :''}`}>;
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' :''}>;
              <Link to="/hiring-tracker">;
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;
<Button asChild className={isMobile ? 'w-full justify-center' :''}>;
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;
              <Link to="/post-job">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
        {/* New Onboarding Steps */}"
        <div className="mb-8">;
          <ClientOnboardingSteps />;
        </div>;
"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
          <div className="lg:col-span-2">;"
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>;'`
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : ''}`}>;'"
                <TabsTrigger value="all" className={isMobile ? 'flex-1' : ''}>All</TabsTrigger>;'"
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : ''}>New</TabsTrigger>;'"
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : ''}>Active</TabsTrigger>;'"
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : ''}>Filled</TabsTrigger>;'"
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : ''}>Closed</TabsTrigger>;
              </TabsList>;
"
              <TabsContent value="all" className="mt-0">;
                <JobsList onSelectJob={handleJobSelect} />;
              </TabsContent>;"
              <TabsContent value="new" className="mt-0">;"
                <JobsList filter="new" onSelectJob={handleJobSelect} />;
              </TabsContent>;"
              <TabsContent value="in_progress" className="mt-0">;"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;
              </TabsContent>;"
              <TabsContent value="filled" className="mt-0">;"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;
              </TabsContent>;"
              <TabsContent value="closed" className="mt-0">;"
=======
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {/* New Onboarding Steps */}
        <div className="mb-8">;
          <ClientOnboardingSteps />;
        </div>;

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="lg:col-span-2">;
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>;
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : ''}`}>;
                <TabsTrigger value="all" className={isMobile ? 'flex-1' : ''}>All</TabsTrigger>;
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : ''}>New</TabsTrigger>;
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : ''}>Active</TabsTrigger>;
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : ''}>Filled</TabsTrigger>;
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : ''}>Closed</TabsTrigger>;
              </TabsList>;

;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="lg:col-span-2">;
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>;
              <TabsList className={`mb-6 ${isMobile ? 'w-full' :''}`}>;
                <TabsTrigger value="all" className={isMobile ? 'flex-1' :''}>All</TabsTrigger>;
                <TabsTrigger value="new" className={isMobile ? 'flex-1' :''}>New</TabsTrigger>;
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' :''}>Active</TabsTrigger>;
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' :''}>Filled</TabsTrigger>;
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' :''}>Closed</TabsTrigger>;
              </TabsList>;
              ;
              <TabsContent value="all" className="mt-0">;
                <JobsList onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="new" className="mt-0">;
                <JobsList filter="new" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="in_progress" className="mt-0">;
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="filled" className="mt-0">;
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="closed" className="mt-0">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;
              </TabsContent>;
            </Tabs>;
          </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div>;
            <div className="sticky top-4 space-y-6">;

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Active Projects Card */}
              <ActiveProjectsCard />

              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />

<<<<<<< HEAD
<<<<<<< HEAD



              {/* AI Talent Suggestions */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div>;
                <h2 className="text-xl font-semibold mb-4 flex items-center">;
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />;
                  AI Talent Suggestions;
                </h2>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) : (;
<<<<<<< HEAD
=======
                ;
                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) :(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">;
                    <p className="text-muted-foreground">;
                      Select a job to see AI-matched talent suggestions;
                    </p>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
                )}
          <div>;
            <div className="sticky top-4 space-y-6">;
              {/* Active Projects Card */}
              <ActiveProjectsCard />
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />
              {/* AI Talent Suggestions */}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
=======
              <div>"
                <h2 className="text-xl font-semibold mb-4 flex items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
                  AI Talent Suggestions;
=======
=======
;
          <div>;
            <div className="sticky top-4 space-y-6">;

              {/* Active Projects Card */}
              <ActiveProjectsCard />;
              ;
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;
              ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* AI Talent Suggestions */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
                  AI Talent Suggestions
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </h2>

                {selectedJobId ? (
                  <SuggestedTalents jobId={selectedJobId} />
<<<<<<< HEAD
                ) : ("
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">"
                    <p className="text-muted-foreground">
                      Select a job to see AI-matched talent suggestions;
                    </p>
                  </div>
                )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                ) : (
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">
                    <p className="text-muted-foreground">
                      Select a job to see AI-matched talent suggestions
                    </p>
                  </div>
                )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from './react';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { JobsList } from '@/components / jobs / JobsList';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Link } from './react-router-dom';
import { JobStatus } from '@/types / jobs';
import { SEO } from '@/components / SEO';
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from './lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { SuggestedTalents } from '@/components / jobs / SuggestedTalents';
import { use_jobs } from '@/hooks / use_jobs';
import { ClientOnboardingSteps } from '@/components / onboarding / ClientOnboardingSteps';
import { ActiveProjectsCard } from '@/components / projects / ActiveProjectsCard';
import { UpcomingInterviewsCard } from '@/components / interviews / UpcomingInterviewsCard';
import { useIsMobile } from '@/hooks / use - mobile';
/**
 * ClientDashboardContent - Function description
=======
  );
}

export default function ClientDashboard() {
  return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>
  );
}
export default /**
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;export default /**
 * ClientDashboard - Function description
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
 */
function ClientDashboardContent() {
  const [active_tab, setActiveTab] = useState < JobStatus | "all">("all");
  const { jobs, is_loading } = use_jobs ();
  const [selectedJobId, setSelectedJobId] = useState < string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState < string>("");
  const is_mobile = useIsMobile ();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  // Set the first job as selected when jobs are loaded (if any);
  useEffect (() => {
    // Check condition
if ( {) {
  $2
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
<<<<<<< HEAD
=======
      setSelectedJobId (jobs[0].id);
      setSelectedJobTitle (jobs[0].title);
    }
  }, [jobs, selectedJobId]);
;
  const handleJobSelect = (job_id: string, job_title: string) =>: any {
    setSelectedJobId (job_id),
    setSelectedJobTitle (job_title);
  }
;
  return (
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className={`flex flex - col ${!is_mobile ? 'md:flex - row md:justify - between md:items - center' : ''} mb - 8 gap - 4`}>;
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>My Jobs</h1>;
            <p className="text - muted - foreground mt - 1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap - 2 ${is_mobile ? 'flex - col' : ''}`}>;
            <Button variant="outline" as_child className={is_mobile ? 'w - full justify - center' : ''}>;
              <Link to="/hiring - tracker">;
                <Kanban className="h - 4 w - 4 mr - 2" /> Hiring Pipeline;
              </Link>;
            </Button>;
            <Button as_child className={is_mobile ? 'w - full justify - center' : ''}>;
              <Link to="/post - job">;
                <PlusCircle className="h - 4 w - 4 mr - 2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
        {/* New Onboarding Steps */}
        <div className="mb - 8">;
          <ClientOnboardingSteps />;
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
          <div className="lg:col - span - 2">;
            <Tabs default_value="all" onValueChange={(value) => setActiveTab (value as JobStatus | "all")}>;
              <TabsList className={`mb - 6 ${is_mobile ? 'w - full' : ''}`}>;
                <TabsTrigger value="all" className={is_mobile ? 'flex - 1' : ''}>All</TabsTrigger>;
                <TabsTrigger value="new" className={is_mobile ? 'flex - 1' : ''}>New</TabsTrigger>;
                <TabsTrigger value="in_progress" className={is_mobile ? 'flex - 1' : ''}>Active</TabsTrigger>;
                <TabsTrigger value="filled" className={is_mobile ? 'flex - 1' : ''}>Filled</TabsTrigger>;
                <TabsTrigger value="closed" className={is_mobile ? 'flex - 1' : ''}>Closed</TabsTrigger>;
              </TabsList>;
              <TabsContent value="all" className="mt - 0">;
                <JobsList onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="new" className="mt - 0">;
                <JobsList filter="new" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="in_progress" className="mt - 0">;
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="filled" className="mt - 0">;
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="closed" className="mt - 0">;
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;
              </TabsContent>;
            </Tabs>;
          </div>;
          <div>;
            <div className="sticky top - 4 space - y-6">;
              {/* Active Projects Card */}
              <ActiveProjectsCard />;
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;
              {/* AI Talent Suggestions */}
              <div>;
                <h2 className="text - xl font - semibold mb - 4 flex items - center">;
                  <BriefcaseIcon className="mr - 2 h - 5 w - 5 text - primary" />;
                  AI Talent Suggestions;
                </h2>;
                {selectedJobId ? (
                  <SuggestedTalents job_id={selectedJobId} />) : (
                  <div className="bg - muted / 30 border rounded - lg p - 6 text - center">;
                    <p className="text - muted - foreground">;
                      Select a job to see AI - matched talent suggestions;
                    </p>;
                  </div>)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

;

export default function ClientDashboard() {;
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}

export default function ClientDashboard() {}
  return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
export default /**
=======
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;export default /**
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;export default /**
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
 * ClientDashboard - Function description
=======
export default /**;
 * ClientDashboard - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function ClientDashboard() {}
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>;
            </div>;
import { useState, useEffect } from "react";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { JobsList } from "@/components/jobs/JobsList";""
import { Button } from "@/components/ui/button";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { Link } from "react-router-dom";""
import { JobStatus } from "@/types/jobs";""
import { SEO } from "@/components/SEO";"
import {
  // TODO: Implement
}
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  Kanban,
  Video,"
} from "lucide-react";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents";""
import { useJobs } from "@/hooks/useJobs";""
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps";""
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard";""
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";""
import { useIsMobile } from "@/hooks/use-mobile";"
function ClientDashboardContent() {"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");"

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
</div>"
            <div className="sticky top-4 space-y-6">"
</div>"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;"
</JobStatus>
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
</string>"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),"

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),"
</string>
    <>
      <SEO;"
        title="Client Dashboard | Zion AI Marketplace"""
        description="Manage your jobs and talent requests in the Zion AI Marketplace.""
      />

      <AppHeader />
"
      <main className="container mx-auto px-4 py-8">"
</main>
        <div;"
          className={`flex flex-col ${!isMobile ? "md:flex-row md:justify-between md:items-center" : ""} mb-8 gap-4`}"
        >

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>;'
</div>
          <div>
</div>"`;
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>"
</h1>
            </h1>"
            <p className="text-muted-foreground mt-1">"
</p>
          <div className={`flex gap-2 ${isMobile ? "flex-col" : ""}`}>"
            <Button;"
              variant="outline""
              asChild;"
              className={isMobile ? "w-full justify-center" : ""}"
              <Link to="/hiring-tracker">"
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;"

            <Button asChild className={isMobile ? "w-full justify-center" : ""}>"
              <Link to="/post-job">"
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;"

        </div>"
        <div className="mb-8">"
          <ClientOnboardingSteps />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
          <div className="lg:col-span-2">"
            <Tabs;"
              defaultValue="all""
              onValueChange={(value) =>
"`;
              <TabsList className={`mb-6 ${isMobile ? "w-full" : ""}`}>"
                <TabsTrigger value="all" className={isMobile ? "flex-1" : ""}>"

                <TabsTrigger value="new" className={isMobile ? "flex-1" : ""}>"

                <TabsTrigger;"
                  value="in_progress"""
                  className={isMobile ? "flex-1" : ""}"

                  value="filled"""

                  value="closed"""

              <TabsContent value="all" className="mt-0">"

                <JobsList onSelectJob={handleJobSelect} />

              <TabsContent value="new" className="mt-0">"
                <JobsList filter="new" onSelectJob={handleJobSelect} />"

              <TabsContent value="in_progress" className="mt-0">"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />"

              <TabsContent value="filled" className="mt-0">"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />"

              <TabsContent value="closed" className="mt-0">"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />"


            <div className="sticky top-4 space-y-6">"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;"

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;"
    <>;
      />;

      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;"
</main>"`;
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : } mb-8 gap-4`}>;
          <div>;
</div>`;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;"
          </div>;"`;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : }`}>;
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : }>;

              <Link to="/hiring-tracker">;"

              ;
            ;"
            <Button asChild className={isMobile ? 'w-full justify-center' : }>;

              <Link to="/post-job">;"

          </div>;
        </div>;"
        <div className="mb-8">;"
          <ClientOnboardingSteps />;

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
          <div className="lg:col-span-2">;"
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>;"
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : }`}>;

                <TabsTrigger value="all" className={isMobile ? 'flex-1' : }>All;
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : }>New;
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : }>Active;
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : }>Filled;
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : }>Closed;
              <TabsContent value="all" className="mt-0">;"

                <JobsList onSelectJob={handleJobSelect} />;

              <TabsContent value="new" className="mt-0">;"
                <JobsList filter="new" onSelectJob={handleJobSelect} />;"

              <TabsContent value="in_progress" className="mt-0">;"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;"

              <TabsContent value="filled" className="mt-0">;"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;"

              <TabsContent value="closed" className="mt-0">;"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;"

            <div className="sticky top-4 space-y-6">;"
              <ActiveProjectsCard />

              <UpcomingInterviewsCard />

                <h2 className="text-xl font-semibold mb-4 flex items-center">"
</h2>"
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />"

                </h2>
                  <SuggestedTalents jobId={selectedJobId} />
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">"
                    <p className="text-muted-foreground">"
      <Footer />

    </>
  );

export default function ClientDashboard() {
  return (
    <ProtectedRoute>

      <ClientDashboardContent />

    <ProtectedRoute>;

      <ClientDashboardContent />;
    </ProtectedRoute>;
  );
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
)
      </main>;
      <Footer />;

    </>;
  ),;
() {




    ;)"`;
pr-12325
  return (
    <ProtectedRoute>
</ProtectedRoute>
      <ClientDashboardContent />
</ClientDashboardContent>
    </ProtectedRoute>
    <ProtectedRoute>;
</ProtectedRoute>
      <ClientDashboardContent />;
</ClientDashboardContent>
    </ProtectedRoute>;)"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
