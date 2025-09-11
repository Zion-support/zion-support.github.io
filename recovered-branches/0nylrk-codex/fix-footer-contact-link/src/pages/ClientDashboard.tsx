
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
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",
import { useIsMobile } from "@/hooks/use-mobile";
function ClientDashboardContent() {
=======
function ClientDashboardContent() {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
function ClientDashboardContent() {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");
  const { jobs, isLoading } = useJobs();

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const isMobile = useIsMobile();
<<<<<<< HEAD
<<<<<<< HEAD
import { useIsMobile } from "@/hooks/use-mobile",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs && jobs.length > 0 && !selectedJobId) {;

      setSelectedJobId(jobs[0].id);
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]);



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),
  const { jobs, isLoading } = useJobs(),
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),
  const isMobile = useIsMobile(),

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Set the first job as selected when jobs are loaded (if any)
  useEffect(() => {
    if (jobs.length > 0 && !selectedJobId) {
      setSelectedJobId(jobs[0].id),
      setSelectedJobTitle(jobs[0].title)
    }
<<<<<<< HEAD

  }, [jobs, selectedJobId]),


  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)

  },

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [jobs, selectedJobId]);
  }, [jobs, selectedJobId]),

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)
  }
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <>
      <SEO
        title="Client Dashboard | Zion AI Marketplace"
        description="Manage your jobs and talent requests in the Zion AI Marketplace."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>
          </div>
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>
              <Link to="/hiring-tracker">
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline
              </Link>
            </Button>
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>
              <Link to="/post-job">
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job
              </Link>
            </Button>
          </div>
        </div>
        {/* New Onboarding Steps */}
        <div className="mb-8">
          <ClientOnboardingSteps />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : ''}`}>
                <TabsTrigger value="all" className={isMobile ? 'flex-1' : ''}>All</TabsTrigger>
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : ''}>New</TabsTrigger>
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : ''}>Active</TabsTrigger>
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : ''}>Filled</TabsTrigger>
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : ''}>Closed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <JobsList onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value="new" className="mt-0">
                <JobsList filter="new" onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value="in_progress" className="mt-0">
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value="filled" className="mt-0">
                <JobsList filter="filled" onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value="closed" className="mt-0">
                <JobsList filter="closed" onSelectJob={handleJobSelect} />
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <div className="sticky top-4 space-y-6">
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from "react",;
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
import { useIsMobile } from "@/hooks/use-mobile",;
function ClientDashboardContent() {;
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;
  const { jobs, isLoading } = useJobs(),;
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleJobSelect = (jobId: string, jobTitle: string) => {;
    setSelectedJobId(jobId),;
    setSelectedJobTitle(jobTitle);
  };
<<<<<<< HEAD
<<<<<<< HEAD
  return (;
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <>;
      <SEO
        title="Client Dashboard | Zion AI Marketplace" 
        description="Manage your jobs and talent requests in the Zion AI Marketplace." 
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>;
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link to="/hiring-tracker">;
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;
<<<<<<< HEAD
            <Button asChild className={isMobile ? 'w-full justify-center' :''}>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;
              <Link to="/post-job">;
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* New Onboarding Steps */}
        <div className="mb-8">;
          <ClientOnboardingSteps />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;
              </TabsContent>;
            </Tabs>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>;
            <div className="sticky top-4 space-y-6">;



<<<<<<< HEAD
<<<<<<< HEAD
              {/* Active Projects Card */}
              <ActiveProjectsCard />;
              ;
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;
              ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Active Projects Card */}
              <ActiveProjectsCard />;

              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* AI Talent Suggestions */}
              <div>;
                <h2 className="text-xl font-semibold mb-4 flex items-center">;
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />;
                  AI Talent Suggestions;
                </h2>;
<<<<<<< HEAD
<<<<<<< HEAD
                ;
                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) :(;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) : (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">;
                    <p className="text-muted-foreground">;
                      Select a job to see AI-matched talent suggestions;
                    </p>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                )}
          <div>;
            <div className="sticky top-4 space-y-6">;
              {/* Active Projects Card */}
              <ActiveProjectsCard />
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />
              {/* AI Talent Suggestions */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
                  AI Talent Suggestions
                </h2>
                {selectedJobId ? (
                  <SuggestedTalents jobId={selectedJobId} />
                ) : (
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">
                    <p className="text-muted-foreground">
                      Select a job to see AI-matched talent suggestions
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;

<<<<<<< HEAD
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;

export default function ClientDashboard() {;
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>;
  );
}

<<<<<<< HEAD
=======
;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </>);
}
export default /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;
    </>;
  ),;
}
}
export default function ClientDashboard() {
  return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>
  )
}
;
export default function ClientDashboard() {;
  return (;
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>;
  );
}
;
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
