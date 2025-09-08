import { useState, useEffect } from "react";
import { JobsList } from "@/components/jobs/JobsList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BriefcaseIcon, PlusCircle, Kanban } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents";
import { useJobs } from "@/hooks/useJobs";
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps";
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard";
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";
import { useIsMobile } from "@/hooks/use-mobile";
function ClientDashboardContent() {
    const [activeTab, setActiveTab] = useState("all");
    const { jobs, isLoading } = useJobs();
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [selectedJobTitle, setSelectedJobTitle] = useState("");
    const isMobile = useIsMobile();
    // Set the first job as selected when jobs are loaded (if any)
    useEffect(() => {
        if (jobs.length > 0 && !selectedJobId) {
            setSelectedJobId(jobs[0].id);
            setSelectedJobTitle(jobs[0].title);
        }
    }, [jobs, selectedJobId]);
    const handleJobSelect = (jobId, jobTitle) => {
        setSelectedJobId(jobId);
        setSelectedJobTitle(jobTitle);
    };
    return (<>
      <SEOHead title="Client Dashboard | Zion AI Marketplace" description="Manage your jobs and talent requests in the Zion AI Marketplace."/>
      
      <main className="container mx-auto px-4 py-8">
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : ''} mb-8 gap-4`}>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>
          </div>
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}>
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : ''}>
              <Link to="/hiring-tracker">
                <Kanban className="h-4 w-4 mr-2"/> Hiring Pipeline
              </Link>
            </Button>
            <Button asChild className={isMobile ? 'w-full justify-center' : ''}>
              <Link to="/post-job">
                <PlusCircle className="h-4 w-4 mr-2"/> Post New Job
              </Link>
            </Button>
          </div>
        </div>









