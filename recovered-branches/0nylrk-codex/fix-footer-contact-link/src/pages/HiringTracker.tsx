
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useParams } from "react-router-dom",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { Briefcase } from "lucide-react",
function HiringTrackerContent() {
  const { jobId } = useParams() as { jobId?: string },
  const [activeTab, setActiveTab] = useState<string>("kanban"),
=======
import { useState } from &quot;react&quot;;
import { useParams } from &quot;react-router-dom&quot;;
import { AppHeader } from &quot;@/layout/AppHeader&quot;; 
import { Footer } from &quot;@/components/Footer&quot;;
import { KanbanBoard } from &quot;@/components/hiring-tracker/KanbanBoard&quot;;
import { HiringAnalytics } from &quot;@/components/hiring-tracker/HiringAnalytics&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { Briefcase } from &quot;lucide-react&quot;;

function HiringTrackerContent() {
  const { jobId } = useParams() as { jobId?: string };
  const [activeTab, setActiveTab] = useState<string>(&quot;kanban&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <SEO 
        title=&quot;Hiring Tracker | Zion AI Marketplace&quot; 
        description=&quot;Manage your candidate pipeline in the Zion AI Marketplace.&quot; 
      />
      <AppHeader />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex justify-between items-center mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold flex items-center&quot;>
              <Briefcase className=&quot;mr-2 h-6 w-6 text-primary&quot; />
              Hiring Pipeline
            </h1>
            <p className=&quot;text-muted-foreground mt-1&quot;>
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>

        <Tabs defaultValue=&quot;kanban&quot; onValueChange={setActiveTab} className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;kanban&quot;>Kanban Board</TabsTrigger>
            <TabsTrigger value=&quot;analytics&quot;>Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;kanban&quot; className=&quot;mt-6&quot;>
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
          <TabsContent value=&quot;analytics&quot; className=&quot;mt-6&quot;>
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
=======
import { useState } from "react",;
import { useParams } from "react-router-dom",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",;
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { Briefcase } from "lucide-react",;
function HiringTrackerContent() {;
  const { jobId } = useParams() as { jobId?: string },;
  const [activeTab, setActiveTab] = useState<string>("kanban");
  return (;
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;
              <Briefcase className="mr-2 h-6 w-6 text-primary" />;
              Hiring Pipeline;
            </h1>;
            <p className="text-muted-foreground mt-1">;
              Track and manage your candidates through the hiring process;
            </p>;
          </div>;
        </div>;
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">;
          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
          <TabsContent value="kanban" className="mt-6">;
            <KanbanBoard jobId={jobId} />;
          </TabsContent>;
          <TabsContent value="analytics" className="mt-6">;
            <HiringAnalytics jobId={jobId} />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export default function HiringTracker() {;
  return (;
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
}
;