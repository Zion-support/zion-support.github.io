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
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",import { useIsMobile } from "@/hooks/use-mobile";
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all");

  const { jobs, isLoading } = useJobs();

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const isMobile = useIsMobile();
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),

  const { jobs, isLoading } = useJobs(),
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),
  const isMobile = useIsMobile(),

  // Set the first job as selected when jobs are loaded (if any)
  useEffect(() => {
    if (jobs.length > 0 && !selectedJobId) {
      setSelectedJobId(jobs[0].id),
      setSelectedJobTitle(jobs[0].title)
    }

  }, [jobs, selectedJobId]),

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    (setSelectedJobId(jobId), setSelectedJobTitle(jobTitle))
};

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)


  },
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


              {/* AI Talent Suggestions */}
              <div>;
                <h2 className="text-xl font-semibold mb-4 flex items-center">;
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />;
                  AI Talent Suggestions;
                </h2>;
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
  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs.length > 0 && !selectedJobId) {;
      setSelectedJobId(jobs[0].id),;
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]),;
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>;
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;export default /**
 * ClientDashboard - Function description

 */
function ClientDashboard() {}
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>);
}
