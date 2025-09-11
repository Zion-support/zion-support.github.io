
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
function ClientDashboardContent() {;
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



  }, [jobs, selectedJobId]),


  const handleJobSelect = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId)
    setSelectedJobTitle(jobTitle)

  },

=======
  const handleJobSelect = (jobId: string, jobTitle: string) => {;
    setSelectedJobId(jobId),;
    setSelectedJobTitle(jobTitle);
  };
  return (
    <>;
      <SEO
        title="Client Dashboard | Zion AI Marketplace" 
        description="Manage your jobs and talent requests in the Zion AI Marketplace." 


              {/* Upcoming Interviews Card */}
              <UpcomingInterviewsCard />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
