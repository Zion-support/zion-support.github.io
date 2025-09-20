import { BriefcaseIcon, PlusCircle, Kanban  } from 'lucide-react',
export default function Page() {
,
  return (<>
      <SEO
        title="Client Dashboard | Zion AI Marketplace"
        description="Manage your jobs and talent requests in the Zion AI Marketplace."
      />

      <main className="container mx - auto px-4 py-8">
        <div
          className={`flex flex - col ${!isMobile ? 'md:flex - row md:justify - between md:items - center' : ''} mb-8 gap-4`}
        >
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font - bold`}>
              My Jobs
            </h1>
            <p className="text-muted - foreground mt-1">
              Manage your job postings and talent applications
            </p>
          </div>
          <div className={`flex gap-2 ${isMobile ? 'flex - col' : ''}`}>
            <Button
              variant="outline"
              asChild
              className={isMobile ? 'w-full justify - center' : ''}
            >
              <Link to="/hiring - tracker">
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline
              </Link>
            </Button>
            <Button asChild className={isMobile ? 'w-full justify - center' : ''}>
              <Link to="/post - job">
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job
              </Link>
            </Button>
          </div>
        </div>

        {/* New Onboarding Steps */}
        <div className="mb-8">
          <ClientOnboardingSteps />
        </div>

        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap-8">
          <div className="lg:col - span -2">
            <Tabs
              defaultValue="all"
              onValueChange={value => setActiveTab (value) }
            >
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : ''}`}>
                <TabsTrigger value="all" className={isMobile ? 'flex - 1' : ''}>
                  All
                </TabsTrigger>
                <TabsTrigger value="new" className={isMobile ? 'flex - 1' : ''}>
                  New
                </TabsTrigger>
                <TabsTrigger
                  value="in_progress"
                  className={isMobile ? 'flex - 1' : ''}
                >
                  Active
                </TabsTrigger>
                <TabsTrigger
                  value="filled"
                  className={isMobile ? 'flex - 1' : ''}
                >
                  Filled
                </TabsTrigger>
                <TabsTrigger
                  value="closed"
                  className={isMobile ? 'flex - 1' : ''}
                >
                  Closed
                </TabsTrigger>
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
            <div className="sticky top - 4 space - y-6">
              {/* Active Projects Card */}
              <ActiveProjectsCard />

              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />

              {/* AI Talent Suggestions */}
              <div>
                <h2 className="text-xl font - semibold mb-4 flex items -center">
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
                  AI Talent Suggestions
                </h2>

                {selectedJobId ? (<SuggestedTalents jobId={selectedJobId} />) : (<div className="bg-muted / 30 border rounded-lg p - 6 text-center">
                    <p className="text-muted -foreground">
                      Select a job to see AI - matched talent suggestions
                    </p>
                  </div>) }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>) ,
}
  return (<ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>) ,
}
