<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard";
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from "lucide-react";
function HiringTrackerContent() {


<<<<<<< HEAD

=======
  const { jobId } = useParams() as { jobId?: string };
"
  const [activeTab, setActiveTab] = useState<string>("kanban");

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
function HiringTrackerContent() {}
  const { jobId } = useParams() as { jobId?: string }"
  const [activeTab, setActiveTab] = useState<string>("kanban");

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react",
import { useParams } from "react-router-dom",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
<<<<<<< HEAD
import { Briefcase } from "lucide-react",
function HiringTrackerContent() {
  const { jobId } = useParams() as { jobId?: string },
  const [activeTab, setActiveTab] = useState<string>("kanban"),



  return (



}
export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}

=======

import { Briefcase } from "lucide-react",
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
  const [activeTab, setActiveTab] = useState<string>("kanban"),"
</string>
    <>
      <SEO;"
        title="Hiring Tracker | Zion AI Marketplace"""
        description="Manage your candidate pipeline in the Zion AI Marketplace.""
      />

      <AppHeader />
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="flex justify-between items-center mb-8">"
</div>
          <div>
</div>"
            <h1 className="text-3xl font-bold flex items-center">"
</h1>"
              <Briefcase className="mr-2 h-6 w-6 text-primary" />"

            <p className="text-muted-foreground mt-1">"
</p>

        <Tabs;"
          defaultValue="kanban""
          onValueChange={setActiveTab}"
          className="mb-8""
        >

          <TabsList>
            <TabsTrigger value="kanban">Kanban Board""
            <TabsTrigger value="analytics">Analytics"
          <TabsContent value="kanban" className="mt-6">"

            <KanbanBoard jobId={jobId} />

          <TabsContent value="analytics" className="mt-6">"

            <HiringAnalytics jobId={jobId} />

      </main>
      <Footer />

pr-12325
</TabsContent>

            <KanbanBoard jobId={jobId} />
</KanbanBoard>
          </TabsContent>

"
          <TabsContent value="analytics" className="mt-6">"
</TabsContent>

            <HiringAnalytics jobId={jobId} />
</HiringAnalytics>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
</Footer>
    </>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  const [activeTab, setActiveTab] = useState<string>("kanban");
  return (;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <>;
      <SEO
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 

<<<<<<< HEAD
=======
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";

        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 
>>>>>>> origin/cursor/delete-old-data-records-6bba

      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;
              <Briefcase className="mr-2 h-6 w-6 text-primary" />;
              Hiring Pipeline;
            </h1>;
<<<<<<< HEAD

            <p className="text-muted-foreground mt-1">;
              Track and manage your candidates through the hiring process;
            </p>;
          </div>;
        </div>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">;

          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <TabsContent value="analytics" className="mt-6">;
            <HiringAnalytics jobId={jobId} />;

          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;

<<<<<<< HEAD
    </>;
}
export default function HiringTracker() {;
  return (
  );
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}

<<<<<<< HEAD
=======
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
  const [activeTab, setActiveTab] = useState<string>("kanban"),"
</string>
    <>
      <SEO;"
        title="Hiring Tracker | Zion AI Marketplace"""
        description="Manage your candidate pipeline in the Zion AI Marketplace.""
      />

      <AppHeader />
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="flex justify-between items-center mb-8">"
</div>
          <div>
</div>"
            <h1 className="text-3xl font-bold flex items-center">"
</h1>"
              <Briefcase className="mr-2 h-6 w-6 text-primary" />"

            <p className="text-muted-foreground mt-1">"
</p>

        <Tabs;"
          defaultValue="kanban""
          onValueChange={setActiveTab}"
          className="mb-8""
        >

          <TabsList>
            <TabsTrigger value="kanban">Kanban Board""
            <TabsTrigger value="analytics">Analytics"
          <TabsContent value="kanban" className="mt-6">"

            <KanbanBoard jobId={jobId} />

          <TabsContent value="analytics" className="mt-6">"

            <HiringAnalytics jobId={jobId} />

      </main>
      <Footer />

pr-12325
</TabsContent>

            <KanbanBoard jobId={jobId} />
</KanbanBoard>
          </TabsContent>

"
          <TabsContent value="analytics" className="mt-6">"
</TabsContent>

            <HiringAnalytics jobId={jobId} />
</HiringAnalytics>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
</Footer>
    </>


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


    <>;
      <SEO
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 


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


        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">;

          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
          ;
          <TabsContent value="kanban" className="mt-6">;
            <KanbanBoard jobId={jobId} />;
          </TabsContent>;
          ;
          <TabsContent value="kanban" className="mt-6">;
            <KanbanBoard jobId={jobId} />;
          </TabsContent>;
          <TabsContent value="analytics" className="mt-6">;
            <HiringAnalytics jobId={jobId} />;

          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;


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

}

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";"
        description="Manage your candidate pipeline in the Zion AI Marketplace.";" />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py-8">;"
        <div className="flex justify - between items - center mb-8">;"
          <div>;
            <h1 className="text - 3xl font - bold flex items-center">;"
              <Briefcase className="mr - 2 h - 6 w - 6 text-primary" />;"
              Hiring Pipeline;
            </h1>;
            <p className="text - muted - foreground mt-1">;"
        title="Hiring Tracker | Zion AI Marketplace" "
        description="Manage your candidate pipeline in the Zion AI Marketplace." "
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;"
        <div className="flex justify-between items-center mb-8">;"
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;"
              <Briefcase className="mr-2 h-6 w-6 text-primary" />;"
              Hiring Pipeline;
            </h1>;
            <p className="text-muted-foreground mt-1">;          <TabsList>;"
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;"
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;"
          </TabsList>;


<<<<<<< HEAD
=======
    <ProtectedRoute>;

      <HiringTrackerContent />;

} Hiring Tracker | Zion AI Marketplace"description=" Manage your candidate pipeline in the Zion AI Marketplace."/> <AppHeader /> <main className=" container mx-auto px-4 py-8"> <div className=" flex justify-between items-center mb-8"> <div> <h1 className=" text-3xl font-bold flex items-center"> <Briefcase className=" mr-2 h-6 w-6 text-primary"/> Hiring Pipeline </h1> <p className=" text-muted-foreground mt-1"> Track and manage your candidates through the hiring process </p> </div> </div> <TabsList> <TabsTrigger value=" kanban">Kanban Board <TabsTrigger value=" analytics" >Analytics    </main> <Footer /> </>)"

  return (<ProtectedRoute> <HiringTrackerContent />  )"
pr-12325
</HiringTrackerContent>)
    </ProtectedRoute>);
}


  ),;
}
;
export default function HiringTracker() {;
  return (;
    <ProtectedRoute>;

</ProtectedRoute>
      <HiringTrackerContent />;
    </ProtectedRoute>;
  ),;
} Hiring Tracker | Zion AI Marketplace"description=" Manage your candidate pipeline in the Zion AI Marketplace."/> <AppHeader /> <main className=" container mx-auto px-4 py-8"> <div className=" flex justify-between items-center mb-8"> <div> <h1 className=" text-3xl font-bold flex items-center"> <Briefcase className=" mr-2 h-6 w-6 text-primary"/> Hiring Pipeline </h1> <p className=" text-muted-foreground mt-1"> Track and manage your candidates through the hiring process </p> </div> </div> <TabsList> <TabsTrigger value=" kanban">Kanban Board</TabsTrigger> <TabsTrigger value=" analytics" >Analytics</TabsTrigger> </TabsList> </TabsContent> </Tabs> </main> <Footer /> </>) 
}export default function HiringTracker () {
  return (<ProtectedRoute> <HiringTrackerContent /> </ProtectedRoute> 
;

>>>>>>> origin/cursor/delete-old-data-records-6bba
