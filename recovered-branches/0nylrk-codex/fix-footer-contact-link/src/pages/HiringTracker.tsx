<<<<<<< HEAD

import {useState} from "react";
import {useParams} from "react-router-dom";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {KanbanBoard} from "@/components/hiring-tracker/KanbanBoard";
import {HiringAnalytics} from "@/components/hiring-tracker/HiringAnalytics";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {Briefcase} from "lucide-react";
function HiringTrackerContent() {
  const { jobId } = useParams() as { jobId?: string }
  const [activeTab, setActiveTab] = useState<string>("kanban");
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
<<<<<<< HEAD
<<<<<<< HEAD

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
            </p>
          </div>
        </div>
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
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
  )
}
export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}
=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const [activeTab, setActiveTab] = useState<string>("kanban");
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
=======
<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
      <SEO
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
<<<<<<< HEAD
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
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { useState } from './react';
import { use_params } from './react-router-dom';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { KanbanBoard } from '@/components / hiring - tracker / KanbanBoard';
import { HiringAnalytics } from '@/components / hiring - tracker / HiringAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { Briefcase } from './lucide-react';
/**
 * HiringTrackerContent - Function description
 */
function HiringTrackerContent() {
  const { job_id } = use_params () as { job_id?: string }
  const [active_tab, setActiveTab] = useState < string>("kanban");
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
;
<<<<<<< HEAD
=======
  return (
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="flex justify - between items - center mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold flex items - center">;
              <Briefcase className="mr - 2 h - 6 w - 6 text - primary" />;
              Hiring Pipeline;
            </h1>;
            <p className="text - muted - foreground mt - 1">;
              Track and manage your candidates through the hiring process;
            </p>;
          </div>;
        </div>;
        <Tabs default_value="kanban" onValueChange={setActiveTab} className="mb - 8">;
          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
          <TabsContent value="kanban" className="mt - 6">;
            <KanbanBoard job_id={job_id} />;
          </TabsContent>;
          <TabsContent value="analytics" className="mt - 6">;
            <HiringAnalytics job_id={job_id} />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>);
}
export default /**
 * HiringTracker - Function description
 */
function HiringTracker() {
  return (
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
