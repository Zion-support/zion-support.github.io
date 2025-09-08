


  // Set the first job as selected when jobs are loaded (if any);
  useEffect(() => {;
    if (jobs && jobs.length > 0 && !selectedJobId) {;

      setSelectedJobId(jobs[0].id);
      setSelectedJobTitle(jobs[0].title);
    }
  }, [jobs, selectedJobId]);



  },






              {/* Active Projects Card */}
              <ActiveProjectsCard />
              {/* Upcoming Interviews Card */}

              <UpcomingInterviewsCard />;




                {selectedJobId ? (;
                  <SuggestedTalents jobId={selectedJobId} />;
                ) : (;




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

import { useIsMobile } from "@/hooks/use-mobile",;
function ClientDashboardContent() { return null; }
  const { jobs, isLoading } = useJobs(),;
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;
  const isMobile = useIsMobile(),;


                  </div>)}
    </>);


