<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { JobsList } from "@/components/jobs/JobsList",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import Link from "next/link",
import { JobStatus } from "@/types/jobs",
import { SEO } from "@/components/SEO",
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents",
import { useJobs } from "@/hooks/useJobs",
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps",
import { AdvancedOnboardingSteps } from "@/components/onboarding/AdvancedOnboardingSteps",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard",
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",
import { useIsMobile } from "@/hooks/use-mobile",
function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),
  const { jobs, isLoading } = useJobs(),
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),
  const isMobile = useIsMobile(),
  const onboardingStatus = useOnboardingStatus(),
=======
import { useState, useEffect } from &quot;react&quot;;
import { JobsList } from &quot;@/components/jobs/JobsList&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import Link from &quot;next/link&quot;;
import { JobStatus } from &quot;@/types/jobs&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from 'lucide-react'
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { SuggestedTalents } from &quot;@/components/jobs/SuggestedTalents&quot;;
import { useJobs } from &quot;@/hooks/useJobs&quot;;
import { ClientOnboardingSteps } from &quot;@/components/onboarding/ClientOnboardingSteps&quot;;
import { AdvancedOnboardingSteps } from &quot;@/components/onboarding/AdvancedOnboardingSteps&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { ActiveProjectsCard } from &quot;@/components/projects/ActiveProjectsCard&quot;;
import { UpcomingInterviewsCard } from &quot;@/components/interviews/UpcomingInterviewsCard&quot;;
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;;

function ClientDashboardContent() {
  const [activeTab, setActiveTab] = useState<JobStatus | &quot;all&quot;>(&quot;all&quot;);
  const { jobs, isLoading } = useJobs();
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("&quot;);
  const isMobile = useIsMobile();
  const onboardingStatus = useOnboardingStatus();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const showAdvanced =
    onboardingStatus.jobPosted &&
    onboardingStatus.inviteSent &&
    onboardingStatus.responseReceived,

  // Set the first job as selected when jobs are loaded (if any)
  useEffect(() => {
    if (jobs.length > 0 && !selectedJobId) {
      const firstJob = jobs[0],
      if (firstJob) {
        setSelectedJobId(firstJob.id),
        setSelectedJobTitle(firstJob.title)
      }
    }
  }, [jobs, selectedJobId]),

  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId),
    setSelectedJobTitle(jobTitle)
  },

  return (
    <>
      <SEO 
        title=&quot;Client Dashboard | Zion AI Marketplace&quot; 
        description=&quot;Manage your jobs and talent requests in the Zion AI Marketplace." 
      />
      <main className="container mx-auto px-4 py-8">
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>
          </div>
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>
              <Link href="/hiring-tracker">
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline
              </Link>
            </Button>
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>
              <Link href="/post-job">
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job
              </Link>
            </Button>
          </div>
        </div>

=======
import { useState, useEffect } from "react",;
import { JobsList } from "@/components/jobs/JobsList",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import Link from "next/link",;
import { JobStatus } from "@/types/jobs",;
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents",;
import { useJobs } from "@/hooks/useJobs",;
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps",;
import { AdvancedOnboardingSteps } from "@/components/onboarding/AdvancedOnboardingSteps",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard",;
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;
import { useIsMobile } from "@/hooks/use-mobile",;
function ClientDashboardContent() {;
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;
  const { jobs, isLoading } = useJobs(),;
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;
  const isMobile = useIsMobile(),;
  const onboardingStatus = useOnboardingStatus(),;
  const showAdvanced =;
    onboardingStatus.jobPosted &&;
    onboardingStatus.inviteSent &&;
    onboardingStatus.responseReceived,;
  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs.length > 0 && !selectedJobId) {;
      const firstJob = jobs[0],;
      if (firstJob) {;
        setSelectedJobId(firstJob.id),;
        setSelectedJobTitle(firstJob.title);
      }
    }
  }, [jobs, selectedJobId]),;
  const handleJobSelect = (jobId: string, jobTitle: string) => {;
    setSelectedJobId(jobId),;
    setSelectedJobTitle(jobTitle);
  };
  return (;
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
      />;
      <main className="container mx-auto px-4 py-8">;
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>;
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;
              <Link href="/hiring-tracker">;
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;
              <Link href="/post-job">;
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {/* New Onboarding Steps */}
        <div className="mb-8">;
          <ClientOnboardingSteps />;
          {showAdvanced && (;
            <div className="mt-6">;
              <AdvancedOnboardingSteps />;
            </div>;
          )}
<<<<<<< HEAD
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2&quot;>
            <Tabs defaultValue=&quot;all&quot; onValueChange={(value) => setActiveTab(value as JobStatus | &quot;all")}>
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : ''}`}>
                <TabsTrigger value="all" className={isMobile ? 'flex-1' : ''}>All</TabsTrigger>
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : ''}>New</TabsTrigger>
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : ''}>Active</TabsTrigger>
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : ''}>Filled</TabsTrigger>
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : ''}>Closed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0&quot;>
                <JobsList onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value=&quot;new" className="mt-0&quot;>
                <JobsList filter=&quot;new&quot; onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value=&quot;in_progress" className="mt-0&quot;>
                <JobsList filter=&quot;in_progress&quot; onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value=&quot;filled" className="mt-0&quot;>
                <JobsList filter=&quot;filled&quot; onSelectJob={handleJobSelect} />
              </TabsContent>
              <TabsContent value=&quot;closed" className="mt-0&quot;>
                <JobsList filter=&quot;closed" onSelectJob={handleJobSelect} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="sticky top-4 space-y-6">
=======
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
          <div>;
            <div className="sticky top-4 space-y-6">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
    </>;
  );
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