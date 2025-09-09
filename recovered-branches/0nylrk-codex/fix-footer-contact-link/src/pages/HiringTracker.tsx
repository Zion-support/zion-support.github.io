import { useState } from "react",
import { useParams } from "react-router-dom",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
  return (
    <>
      <SEO
        title="Hiring Tracker | Zion AI Marketplace"
        description="Manage your candidate pipeline in the Zion AI Marketplace."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Hiring Pipeline
            </h1>
            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process

import { useState } from "react";""
import { useParams } from "react-router-dom";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard";""
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { Briefcase } from "lucide-react";"
function HiringTrackerContent() {
  const { jobId } = useParams() as { jobId?: string };
"
  const [activeTab, setActiveTab] = useState<string>("kanban");"
</string>"
  const [activeTab, setActiveTab] = useState<string>("kanban");"
</string>"
  const [activeTab, setActiveTab] = useState<string>("kanban"),"
</string>
    <>
      <SEO;"
        title="Hiring Tracker | Zion AI Marketplace"""
        description="Manage your candidate pipeline in the Zion AI Marketplace.""

      />
</SEO>
      <AppHeader />

</AppHeader>"
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="flex justify-between items-center mb-8">"
</div>
          <div>
</div>"
            <h1 className="text-3xl font-bold flex items-center">"
</h1>"
              <Briefcase className="mr-2 h-6 w-6 text-primary" />"
</Briefcase>
            </h1>"
            <p className="text-muted-foreground mt-1">"
</p>
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="kanban"
          onValueChange={setActiveTab}
          className="mb-8"
        >
          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
}

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  );
}

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
  const [activeTab, setActiveTab] = useState<string>("kanban");  return (
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py-8">;
        <div className="flex justify - between items - center mb-8">;
          <div>;
            <h1 className="text - 3xl font - bold flex items-center">;
              <Briefcase className="mr - 2 h - 6 w - 6 text-primary" />;
              Hiring Pipeline;
            </h1>;
            <p className="text - muted - foreground mt-1">;
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;
              <Briefcase className="mr-2 h-6 w-6 text-primary" />;
              Hiring Pipeline;
            </h1>;
            <p className="text-muted-foreground mt-1">;          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
