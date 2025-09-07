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

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
</string>"
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),"

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),"
</string>
    <>
      <SEO;"
        title="Client Dashboard | Zion AI Marketplace"""
        description="Manage your jobs and talent requests in the Zion AI Marketplace.""
      />

      <AppHeader />
"
      <main className="container mx-auto px-4 py-8">"
</main>
        <div;"
          className={`flex flex-col ${!isMobile ? "md:flex-row md:justify-between md:items-center" : ""} mb-8 gap-4`}"
        >
</div>
          <div>
</div>"`;
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>"
</h1>
            </h1>"
            <p className="text-muted-foreground mt-1">"
</p>
          <div className={`flex gap-2 ${isMobile ? "flex-col" : ""}`}>"
            <Button;"
              variant="outline""
              asChild;"
              className={isMobile ? "w-full justify-center" : ""}"
              <Link to="/hiring-tracker">"
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;"

              
            <Button asChild className={isMobile ? "w-full justify-center" : ""}>"
              <Link to="/post-job">"
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;"

              
            
        </div>"
        <div className="mb-8">"
          <ClientOnboardingSteps />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
          <div className="lg:col-span-2">"
            <Tabs;"
              defaultValue="all""
              onValueChange={(value) =>
"`;
              <TabsList className={`mb-6 ${isMobile ? "w-full" : ""}`}>"
                <TabsTrigger value="all" className={isMobile ? "flex-1" : ""}>"

                <TabsTrigger value="new" className={isMobile ? "flex-1" : ""}>"

                
                <TabsTrigger;"
                  value="in_progress"""
                  className={isMobile ? "flex-1" : ""}"

                
                  value="filled"""

                
                  value="closed"""

                
              
              <TabsContent value="all" className="mt-0">"

                <JobsList onSelectJob={handleJobSelect} />

              <TabsContent value="new" className="mt-0">"
                <JobsList filter="new" onSelectJob={handleJobSelect} />"

              <TabsContent value="in_progress" className="mt-0">"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />"

              <TabsContent value="filled" className="mt-0">"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />"

              <TabsContent value="closed" className="mt-0">"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />"

              
            

            <div className="sticky top-4 space-y-6">"
  const [activeTab, setActiveTab] = useState<JobStatus | "all">("all"),;"

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null),;
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(""),;"
    <>;
      />;

      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;"
</main>"`;
        <div className={`flex flex-col ${!isMobile ? 'md:flex-row md:justify-between md:items-center' : } mb-8 gap-4`}>;
          <div>;
</div>`;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>My Jobs</h1>;
            <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p>;"
          </div>;"`;
          <div className={`flex gap-2 ${isMobile ? 'flex-col' : }`}>;
            <Button variant="outline" asChild className={isMobile ? 'w-full justify-center' : }>;

              <Link to="/hiring-tracker">;"

              ;
            ;"
            <Button asChild className={isMobile ? 'w-full justify-center' : }>;

              <Link to="/post-job">;"

          </div>;
        </div>;"
        <div className="mb-8">;"
          <ClientOnboardingSteps />;

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
          <div className="lg:col-span-2">;"
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as JobStatus | "all")}>;"
              <TabsList className={`mb-6 ${isMobile ? 'w-full' : }`}>;

                <TabsTrigger value="all" className={isMobile ? 'flex-1' : }>All;
                <TabsTrigger value="new" className={isMobile ? 'flex-1' : }>New;
                <TabsTrigger value="in_progress" className={isMobile ? 'flex-1' : }>Active;
                <TabsTrigger value="filled" className={isMobile ? 'flex-1' : }>Filled;
                <TabsTrigger value="closed" className={isMobile ? 'flex-1' : }>Closed;
              <TabsContent value="all" className="mt-0">;"

                <JobsList onSelectJob={handleJobSelect} />;

              <TabsContent value="new" className="mt-0">;"
                <JobsList filter="new" onSelectJob={handleJobSelect} />;"

              <TabsContent value="in_progress" className="mt-0">;"
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;"

              <TabsContent value="filled" className="mt-0">;"
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;"

              <TabsContent value="closed" className="mt-0">;"
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;"

            <div className="sticky top-4 space-y-6">;"
              <ActiveProjectsCard />

              <UpcomingInterviewsCard />

                <h2 className="text-xl font-semibold mb-4 flex items-center">"
</h2>"
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />"

                </h2>
                  <SuggestedTalents jobId={selectedJobId} />
                  <div className="bg-muted/30 border rounded-lg p-6 text-center">"
                    <p className="text-muted-foreground">"
      <Footer />

    </>
  );

export default function ClientDashboard() {
  return (
    <ProtectedRoute>

      <ClientDashboardContent />

    
    <ProtectedRoute>;

      <ClientDashboardContent />;
)
      </main>;
      <Footer />;

    </>;
  ),;
() {


    


    ;)"`;