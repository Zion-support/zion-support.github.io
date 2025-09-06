<<<<<<< HEAD
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from "lucide-react",
=======
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Inbox } from "lucide-react";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();

<<<<<<< HEAD

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",




function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <>
      <SEO
        title="Application Status Tracker | Zion AI Marketplace"
        description="Track the status of your job applications in the Zion AI marketplace."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>
              Application Status Tracker
            </h1>
            <p className="text-muted-foreground mt-1">
              Track where you stand in the hiring process
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
              </CardTitle>
            </CardHeader>
            <CardContent className={`p-${isMobile ? "3" : "6"}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
=======
  );
}

<<<<<<< HEAD
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";
=======


=======
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>;
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;

        <div className="grid grid-cols-1 gap-6">;
          <Card>;
            <CardHeader className="border-b bg-muted/50">;
              <CardTitle className="flex items-center text-lg">;
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;
              </CardTitle>;
            </CardHeader>;
            <CardContent className={`p-${isMobile ? '3' :'6'}`}>;
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>;
;
  return (
    <>;
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace";
        description="Track the status of your job applications in the Zion AI marketplace.";
      />;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Application Status Tracker</h1>;
            <p className="text - muted - foreground mt - 1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 gap - 6">;
          <Card>;
            <CardHeader className="border - b bg - muted / 50">;
              <CardTitle className="flex items - center text - lg">;
                <Inbox className="mr - 2 h - 5 w - 5" /> Your Applications;
              </CardTitle>;
            </CardHeader>;
            <CardContent className={`p-${is_mobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>);
=======
<<<<<<< HEAD
<<<<<<< HEAD

function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();

  return (
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  );
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
export default /**
 * ApplicationStatusTracker - Function description
 */
function ApplicationStatusTracker() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
  ),;
  );
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
;
export default function ApplicationStatusTracker() {;
  return (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    <ProtectedRoute>;
      <AppLayout>;
        <ApplicationStatusTrackerContent />;
      </AppLayout>;
<<<<<<< HEAD
    </ProtectedRoute>);
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

    </ProtectedRoute>);
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </ProtectedRoute>;
  ),;
} function ApplicationStatusTrackerContent () {
  const isMobile = useIsMobile ();
Application Status Tracker | Zion AI Marketplace"description=" Track the status of your job applications in the Zion AI marketplace."/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"> <div> <h1 className= {
  `text-$ {
  isMobile ? '2xl' : '3xl' 
}font-bold` 
}>Application Status Tracker</h1> <p className=" text-muted-foreground mt-1">Track where you stand in the hiring process</p> </div> </div> <div className=" grid grid-cols-1 gap-6"> <Card> <CardHeader className=" border-b bg-muted/50"> <CardTitle className=" flex items-center text-lg"> <Inbox className=" mr-2 h-5 w-5" /> Your Applications </CardTitle> </CardHeader> <CardContent className= {
  `p-$ {
  isMobile ? '3' : '6' 
}` 
}> <ApplicationsTracker /> </CardContent> </Card> </div> </div> </>) 
}export default function ApplicationStatusTracker () {
  return (<ProtectedRoute> <AppLayout> <ApplicationStatusTrackerContent /> </AppLayout> </ProtectedRoute> 
    </ProtectedRoute>;
  );
}
;
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  )
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </ProtectedRoute>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
