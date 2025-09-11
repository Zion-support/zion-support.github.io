
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
    onboarding_status.response_received;
/**
 * ClientDashboardContent - Function description
 */
function ClientDashboardContent() {

  const [active_tab, setActiveTab] = useState < JobStatus | "all">("all");
  const { jobs, is_loading } = use_jobs ();
  const [selectedJobId, setSelectedJobId] = useState < string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState < string>("");
  const is_mobile = useIsMobile ();
  const onboarding_status = useOnboardingStatus ();
  const show_advanced =;
    onboarding_status.job_posted &&;
    onboarding_status.invite_sent &&;
    onboarding_status.response_received;
  // Set the first job as selected when jobs are loaded (if any);
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      const first_job = jobs[0];
      // Check condition
if ( {) {
  $2
}
        setSelectedJobId (first_job.id);
        setSelectedJobTitle (first_job.title);
      }
    }
  }, [jobs, selectedJobId]);
  const handleJobSelect = (job_id: string, job_title: string) =>: any {
    setSelectedJobId (job_id);    setSelectedJobTitle (job_title);
  }
  return (
    <>;
      <SEO;
        title="Client Dashboard | Zion AI Marketplace";
        description="Manage your jobs and talent requests in the Zion AI Marketplace.";
      />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className={`flex flex - col ${!is_mobile ? 'md:flex - row md:justify - between md:items - center' : ''} mb - 8 gap - 4`}>;
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>My Jobs</h1>;
            <p className="text - muted - foreground mt - 1">Manage your job postings and talent applications</p>;
          </div>;
          <div className={`flex gap - 2 ${is_mobile ? 'flex - col' : ''}`}>;
            <Button variant="outline" as_child className={is_mobile ? 'w - full justify - center' : ''}>;
              <Link href="/hiring - tracker">;
                <Kanban className="h - 4 w - 4 mr - 2" /> Hiring Pipeline;
              </Link>;
            </Button>;
            <Button as_child className={is_mobile ? 'w - full justify - center' : ''}>;
              <Link href="/post - job">;
                <PlusCircle className="h - 4 w - 4 mr - 2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;

        {/* New Onboarding Steps */}
        <div className="mb-8">
          <ClientOnboardingSteps />
          {showAdvanced && (
            <div className="mt-6">
              <AdvancedOnboardingSteps />
            </div>
          )}
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

        {/* New Onboarding Steps */}
        <div className="mb - 8">;
          <ClientOnboardingSteps />;
          {show_advanced && (
            <div className="mt - 6">;
              <AdvancedOnboardingSteps />;
            </div>)}
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
          <div className="lg:col - span - 2">;
            <Tabs default_value="all" onValueChange={(value, ) => setActiveTab (value as JobStatus | "all")}>;
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
    </>
  )
}

        </div>;

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="lg:col-span-2">;
            <Tabs defaultValue="all" onValueChange={(value,) => setActiveTab(value as JobStatus | "all")}>;
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

  return (<ProtectedRoute> <ClientDashboardContent /> </ProtectedRoute> '"};
;

          <div>
            <div className="sticky top-4 space-y-6">

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

export default /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
  return (
    <ProtectedRoute>;
      <ClientDashboardContent />;
    </ProtectedRoute>);
}, [jobs, selectedJobId]);
return (<> <SEO title="Client Dashboard | Zion AI Marketplace" description="Manage your jobs and talent requests in the Zion AI Marketplace." /> <main className="container mx - auto px - 4 py - 8"> <div className= {
  `flex flex - col $ {
  !is_mobile ? 'md:flex - row md:justify - between md:items - center' : '';
}mb - 8 gap - 4`;
}> <div> <h1 className= {
  `text-$ {';
  is_mobile ? '2xl': '3xl';
}font - bold` ";
}>My Jobs</h1> <p className="text - muted - foreground mt - 1">Manage your job postings and talent applications</p> </div> <div className= {
  `flex gap - 2 $ {';
  is_mobile ? 'flex - col': '';
}` ";
}> <Button variant="outline" as_child className= {';
  is_mobile ? 'w - full justify - center': '' ";
}> <Link href="/hiring - tracker"> <Kanban className="h - 4 w - 4 mr - 2" /> Hiring Pipeline </Link> </Button> <Button as_child className= {';
  is_mobile ? 'w - full justify - center': '' ";
}> <Link href="/post - job"> <PlusCircle className="h - 4 w - 4 mr - 2" /> Post New Job </Link> </Button> </div> </div> {
  /* New Onboarding Steps */ ";
}<div className="mb - 8"> <ClientOnboardingSteps /> {";
  show_advanced && (<div className="mt - 6"> <AdvancedOnboardingSteps /> </div>) ";
}</div> <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8"> </TabsContent> </Tabs> </div> <div> <div className="sticky top - 4 space - y-6"> {
  /* Active Projects Card */;
}<ActiveProjectsCard /> {
  /* Upcoming Interviews Card */;
}<UpcomingInterviewsCard /> {
  /* AI Talent Suggestions */ ";
}<div> <h2 className="text - xl font - semibold mb - 4 flex items - center"> <BriefcaseIcon className="mr - 2 h - 5 w - 5 text - primary" /> AI Talent Suggestions </h2> {
  selectedJobId ? (<SuggestedTalents job_id= {
  selectedJobId ";
}/>) : (<div className="bg - muted / 30 border rounded - lg p - 6 text - center"> <p className="text - muted - foreground"> Select a job to see AI - matched talent suggestions </p> </div>);
}</div> </div> </div> </div> </main> </>);
}export default /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
  return (<ProtectedRoute> <ClientDashboardContent /> </ProtectedRoute> '"}
}

