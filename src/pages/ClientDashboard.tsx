import Link from "next/link";

function ClientDashboardContent() {_const [activeTab, _setActiveTab] = useState<JobStatus | "all">("all");
  const { jobs, _isLoading} = useJobs();
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const _isMobile = useIsMobile();
  const _onboardingStatus = useOnboardingStatus();
  const _showAdvanced =
    onboardingStatus.jobPosted &&
    onboardingStatus.inviteSent &&
    onboardingStatus.responseReceived;

  // Set the first job as selected when jobs are loaded (if any)
  useEffect__(() => {_if (jobs.length > 0 && !selectedJobId) {
      const _firstJob = jobs[0];
      if (firstJob) {
        setSelectedJobId(firstJob.id);
        setSelectedJobTitle(firstJob.title);}
    }
  }, [jobs, selectedJobId]);

  const _handleJobSelect = (_jobId: string, _jobTitle: string) => {_setSelectedJobId(jobId);
    setSelectedJobTitle(jobTitle);};

  return (
    <>
      <SEO 
        title="Client Dashboard | Zion AI Marketplace" 
        description="Manage your jobs and talent requests in the Zion AI Marketplace." 
      />
      <main className="container mx-auto px-4 py-8">
        <div className={_`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>
          <div>
            <h1 className={_`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>
          </div>
          <div className={_`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>
            <Button variant="outline" asChild className={_isMobile ? 'w-full justify-center' : ''}>
              <Link href="/hiring-tracker">
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline
              </Link>
            </Button>
            <Button asChild className={_isMobile ? 'w-full justify-center' : ''}>
              <Link href="/post-job">
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job
              </Link>
            </Button>
          </div>
        </div>

        {_/* New Onboarding Steps */}
        <div className="mb-8">
          <ClientOnboardingSteps />
          {_showAdvanced && (
            <div className="mt-6">
              <AdvancedOnboardingSteps />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" onValueChange={_(_value) => setActiveTab(value as JobStatus | "all")}>
              <TabsList className={_`mb-6 ${isMobile ? 'w-full' : ''}`}>
                <TabsTrigger value="all" className={_isMobile ? 'flex-1' : ''}>All</TabsTrigger>
                <TabsTrigger value="new" className={_isMobile ? 'flex-1' : ''}>New</TabsTrigger>
                <TabsTrigger value="in_progress" className={_isMobile ? 'flex-1' : ''}>Active</TabsTrigger>
                <TabsTrigger value="filled" className={_isMobile ? 'flex-1' : ''}>Filled</TabsTrigger>
                <TabsTrigger value="closed" className={_isMobile ? 'flex-1' : ''}>Closed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <JobsList onSelectJob={_handleJobSelect} />
              </TabsContent>
              <TabsContent value="new" className="mt-0">
                <JobsList filter="new" onSelectJob={_handleJobSelect} />
              </TabsContent>
              <TabsContent value="in_progress" className="mt-0">
                <JobsList filter="in_progress" onSelectJob={_handleJobSelect} />
              </TabsContent>
              <TabsContent value="filled" className="mt-0">
                <JobsList filter="filled" onSelectJob={_handleJobSelect} />
              </TabsContent>
              <TabsContent value="closed" className="mt-0">
                <JobsList filter="closed" onSelectJob={_handleJobSelect} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="sticky top-4 space-y-6">
              {_/* Active Projects Card */}
              <ActiveProjectsCard />
              
              {_/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />
              
              {_/* AI Talent Suggestions */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
                  AI Talent Suggestions
                </h2>
                
                {_selectedJobId ? (
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
  );
}

export default function ClientDashboard() {_return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>
  );}
