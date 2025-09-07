
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

          <div>
</div>"
            <div className="sticky top-4 space-y-6">"
</div>"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;"
</JobStatus>
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
</string>"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;"
</string>
    <>;
      <SEO;"
        title="Client Dashboard | Zion AI Marketplace"""
        description="Manage your jobs and talent requests in the Zion AI Marketplace.""

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>;'
</div>
          <div>;
</div>'
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;''
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;"
          </div>;"
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>;'
</div>'
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>;'
</Button>'
              <Link to="/hiring-tracker">;"
</Link>"
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;"
</Kanban>
              </Link>;
            </Button>;"
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>;'
</Button>'
              <Link to="/post-job">;"
</Link>"
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;"
</PlusCircle>
              </Link>;
            </Button>;
          </div>;
        </div>;"
        <div className="mb-8">;"
</div>
          <ClientOnboardingSteps />;
</ClientOnboardingSteps>
        </div>;"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
</div>"
          <div className="lg:col-span-2">;"
</div>"
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>;"
</Tabs>"
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : ''}`}>;'
</TabsList>'
                <TabsTrigger value="all" className={isMobile ? 'flex-1' : ''}>All</TabsTrigger>;''
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : ''}>New</TabsTrigger>;''
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : ''}>Active</TabsTrigger>;''
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : ''}>Filled</TabsTrigger>;''
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : ''}>Closed</TabsTrigger>;'
              </TabsList>;'
              <TabsContent value="all" className="mt-0">;"
</TabsContent>
                <JobsList onSelectJob={handleJobSelect} />;
</JobsList>
              </TabsContent>;"
              <TabsContent value="new" className="mt-0">;"
</TabsContent>"
                <JobsList filter="new" onSelectJob={handleJobSelect} />;"
</JobsList>
              </TabsContent>;"
              <TabsContent value="in_progress" className="mt-0">;"
</TabsContent>"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;"
</JobsList>
              </TabsContent>;"
              <TabsContent value="filled" className="mt-0">;"
</TabsContent>"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;"
</JobsList>
              </TabsContent>;"
              <TabsContent value="closed" className="mt-0">;"
</TabsContent>"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;"
</JobsList>
              </TabsContent>;
            </Tabs>;
          </div>;
          <div>;
</div>"
            <div className="sticky top-4 space-y-6">;"
</div>
              <ActiveProjectsCard />
</ActiveProjectsCard>
              <UpcomingInterviewsCard />
</UpcomingInterviewsCard>
              <div>
</div>"
                <h2 className="text-xl font-semibold mb-4 flex items-center">"
</h2>"
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />"
</BriefcaseIcon>
                </h2>
                  <SuggestedTalents jobId={selectedJobId} />
</SuggestedTalents>"
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">"
</div>"
                    <p className="text-muted-foreground">"
</p>
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
</Footer>
    </>
  );
}

export default function ClientDashboard() {
  return (
    <ProtectedRoute>
</ProtectedRoute>
      <ClientDashboardContent />
</ClientDashboardContent>
    </ProtectedRoute>
    <ProtectedRoute>;
</ProtectedRoute>
      <ClientDashboardContent />;
</ClientDashboardContent>)
    </ProtectedRoute>);
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;
</Footer>
    </>;
  ),;
}
}
() {
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

