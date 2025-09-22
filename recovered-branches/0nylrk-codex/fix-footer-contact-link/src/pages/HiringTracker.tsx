<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const { jobId } = useParams() as { jobId?: string };
"
  const [activeTab, setActiveTab] = useState<string>("kanban");

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {Briefcase} from "lucide-react";
function HiringTrackerContent() {
  const { jobId } = useParams() as { jobId?: string }
  const [activeTab, setActiveTab] = useState<string>("kanban");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { useParams } from "react-router-dom",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
=======
"
import { useState } from "react","
import { useParams } from "react-router-dom","
import { AppHeader } from "@/layout/AppHeader","
import { Footer } from "@/components/Footer","
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard","
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { SEO } from "@/components/SEO","
import { ProtectedRoute } from "@/components/ProtectedRoute","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Briefcase } from "lucide-react",
function HiringTrackerContent() {}
  const { jobId } = useParams() as { jobId?: string },"
  const [activeTab, setActiveTab] = useState<string>("kanban"),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
)
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    <>;
      <SEO
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace."
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  );
}

;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
=======

  return (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <SEO;"
        title="Hiring Tracker | Zion AI Marketplace";"
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
<<<<<<< HEAD
          </TabsList>;
          <TabsContent value="kanban" className="mt - 6">;
            <KanbanBoard job_id={job_id} />;
          </TabsContent>;"
          <TabsContent value="analytics" className="mt - 6">;
            <HiringAnalytics job_id={job_id} />;

          ;
      </main>;
      <Footer />;
)
    </>);

;

}
export default /**;
 * HiringTracker - Function description;
 */
function HiringTracker() {}
  return (
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <ProtectedRoute>;

      <HiringTrackerContent />;

} Hiring Tracker | Zion AI Marketplace"description=" Manage your candidate pipeline in the Zion AI Marketplace."/> <AppHeader /> <main className=" container mx-auto px-4 py-8"> <div className=" flex justify-between items-center mb-8"> <div> <h1 className=" text-3xl font-bold flex items-center"> <Briefcase className=" mr-2 h-6 w-6 text-primary"/> Hiring Pipeline </h1> <p className=" text-muted-foreground mt-1"> Track and manage your candidates through the hiring process </p> </div> </div> <TabsList> <TabsTrigger value=" kanban">Kanban Board <TabsTrigger value=" analytics" >Analytics    </main> <Footer /> </>)"

  return (<ProtectedRoute> <HiringTrackerContent />  )"
pr-12325
</HiringTrackerContent>)
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <p className="text-muted-foreground mt-1">;          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</HiringTrackerContent>
    </ProtectedRoute>;"
} Hiring Tracker | Zion AI Marketplace"description=" Manage your candidate pipeline in the Zion AI Marketplace."/> <AppHeader /> <main className=" container mx-auto px-4 py-8"> <div className=" flex justify-between items-center mb-8"> <div> <h1 className=" text-3xl font-bold flex items-center"> <Briefcase className=" mr-2 h-6 w-6 text-primary"/> Hiring Pipeline </h1> <p className=" text-muted-foreground mt-1"> Track and manage your candidates through the hiring process </p> </div> </div> <TabsList> <TabsTrigger value=" kanban">Kanban Board</TabsTrigger> <TabsTrigger value=" analytics" >Analytics</TabsTrigger> </TabsList> </TabsContent> </Tabs> </main> <Footer /> </>)"
</AppHeader>
  return (<ProtectedRoute> <HiringTrackerContent /> </ProtectedRoute> )"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
