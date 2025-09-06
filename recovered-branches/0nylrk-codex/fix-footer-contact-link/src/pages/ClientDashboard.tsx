<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx

<<<<<<< HEAD

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

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
function ClientDashboardContent() {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");
  const { jobs, isLoading } = useJobs();
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const isMobile = useIsMobile();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx


  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs && jobs.length > 0 && !selectedJobId) {;

========
  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs && jobs.length > 0 && !selectedJobId) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
      setSelectedJobId(jobs[0].id);
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");
  const { jobs, isLoading } = useJobs();

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const isMobile = useIsMobile();
import { useIsMobile } from "@/hooks/use-mobile",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),
  const { jobs, isLoading } = useJobs(),
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),
  const isMobile = useIsMobile(),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Set the first job as selected when jobs are loaded (if any)
  useEffect(() => {
    if (jobs.length > 0 && !selectedJobId) {
      setSelectedJobId(jobs[0].id),
      setSelectedJobTitle(jobs[0].title)
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)
=======

  }, [jobs, selectedJobId]),


  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [jobs, selectedJobId]);
  }, [jobs, selectedJobId]),

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

<<<<<<< HEAD
=======

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleJobSelect = (jobId: string, jobTitle: string) => {;
    setSelectedJobId(jobId),;
    setSelectedJobTitle(jobTitle);
  };
<<<<<<< HEAD
  return (
    <>;
      <SEO
        title="Client Dashboard | Zion AI Marketplace" 
        description="Manage your jobs and talent requests in the Zion AI Marketplace." 
=======
  return (;
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link to="/hiring-tracker">;
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;
=======
            <Button asChild className={isMobile ? 'w-full justify-center' :''}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link to="/post-job">;
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* New Onboarding Steps */}
        <div className="mb-8">;
          <ClientOnboardingSteps />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div>;
            <div className="sticky top-4 space-y-6">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {/* Active Projects Card */}
              <ActiveProjectsCard />;
<<<<<<< HEAD
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;
=======
              ;
              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {/* AI Talent Suggestions */}
              <div>;
                <h2 className="text-xl font-semibold mb-4 flex items-center">;
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />;
                  AI Talent Suggestions;
                </h2>;
<<<<<<< HEAD
                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) : (;
=======
                ;
                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">;
                    <p className="text-muted-foreground">;
                      Select a job to see AI-matched talent suggestions;
                    </p>;
                  </div>;
                )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
<<<<<<< HEAD
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
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
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx


=======

;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
export default function ClientDashboard() {;
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx

;

<<<<<<< HEAD
=======

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;
    </>;
  ),;
}
=======
}
export default function ClientDashboard() {
  return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
export default function ClientDashboard() {;
  return (;
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>;
<<<<<<< HEAD
  ),;
} //Set the first job as selected when jobs are loaded (if any) useEffect ( () => {
  if (jobs.length > 0 && !selectedJobId) {
  setSelectedJobId (jobs[0].id);
setSelectedJobTitle (jobs[0].title) 
}
}, [jobs, selectedJobId]);
const handleJobSelect = (jobId: string, jobTitle: string) => {
  setSelectedJobId (jobId);
setSelectedJobTitle (jobTitle) 
};
Client Dashboard | Zion AI Marketplace"description=" Manage your jobs and talent requests in the Zion AI Marketplace."/> <AppHeader /> <main className="container mx-auto px-4 py-8"> <div className= {
  `flex flex-col $ {
  !isMobile ? 'md:flex-row md:justify-between md:items-center' : '' 
}mb-8 gap-4` 
}> <div> <h1 className= {
  `text-$ {
  isMobile ? '2xl': '3xl' 
}font-bold` 
}>My Jobs</h1> <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p> </div> <div className= {
  `flex gap-2 $ {
  isMobile ? 'flex-col': '' 
}` 
}> <Button variant="outline"asChild className= {
  isMobile ? 'w-full justify-center': '' 
}> <Link to="/hiring-tracker"> <Kanban className="h-4 w-4 mr-2"/> Hiring Pipeline </Link> </Button> <Button asChild className= {
  isMobile ? 'w-full justify-center': '' 
}> <Link to="/post-job"> <PlusCircle className="h-4 w-4 mr-2"/> Post New Job </Link> </Button> </div> </div> {
  /* New Onboarding Steps */ 
}<div className="mb-8"> <ClientOnboardingSteps /> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> </TabsContent> </Tabs> </div> <div> <div className="sticky top-4 space-y-6"> {
  /* Active Projects Card */ 
}<ActiveProjectsCard /> {
  /* Upcoming Interviews Card */ 
}<UpcomingInterviewsCard /> {
  /* AI Talent Suggestions */ 
}<div> <h2 className="text-xl font-semibold mb-4 flex items-center"> <BriefcaseIcon className="mr-2 h-5 w-5 text-primary"/> AI Talent Suggestions </h2> {
  selectedJobId ? (<SuggestedTalents jobId= {
  selectedJobId 
}/>) : (<div className="bg-muted/30 border rounded-lg p-6 text-center"> <p className="text-muted-foreground"> Select a job to see AI-matched talent suggestions </p> </div>) 
}</div> </div> </div> </div> </main> <Footer /> </>) 
}export default function ClientDashboard () {
  return (<ProtectedRoute> <ClientDashboardContent /> </ProtectedRoute> 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ClientDashboard.tsx
=======
  );
}
;
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
