<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {


import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <>
      <SEO
        title="Application Status Tracker | Zion AI Marketplace"
        description="Track the status of your job applications in the Zion AI marketplace."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
              </CardTitle>
            </CardHeader>
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
<<<<<<< HEAD
<<<<<<< HEAD

function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();

  return (
    <>;
      <SEO
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
=======
function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();
  return (;
    <>;
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace";
        description="Track the status of your job applications in the Zion AI marketplace.";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>;
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
;
function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile(),;
  ;
  return (;
    <>;
      <SEO ;
        title="Application Status Tracker | Zion AI Marketplace" ;
        description="Track the status of your job applications in the Zion AI marketplace." ;
      />;
      ;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' :'3xl'} font-bold`}>Application Status Tracker</h1>;
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="grid grid-cols-1 gap-6">;
          <Card>;
            <CardHeader className="border-b bg-muted/50">;
              <CardTitle className="flex items-center text-lg">;
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;
              </CardTitle>;
            </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <CardContent className={`p-${isMobile ? '3' :'6'}`}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <CardContent className={`p-${isMobile ? '3' :'6'}`}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>;
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );

=======

}
export default function ApplicationStatusTracker() {;
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { ApplicationsTracker } from '@/components / jobs / applications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components / ui / card';
import { Briefcase, Inbox } from './lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { useIsMobile } from '@/hooks / use - mobile';
/**
 * ApplicationStatusTrackerContent - Function description
 */
function ApplicationStatusTrackerContent() {
  const is_mobile = useIsMobile ();
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
}
export default /**
 * ApplicationStatusTracker - Function description
 */
function ApplicationStatusTracker() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

=======
  ),;
  );
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
;
export default function ApplicationStatusTracker() {;
  return (;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <ProtectedRoute>;
      <AppLayout>;
        <ApplicationStatusTrackerContent />;
      </AppLayout>;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
