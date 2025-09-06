<<<<<<< HEAD

<<<<<<< HEAD
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from "lucide-react",
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {


import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
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
=======

import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;

function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();

  return (
    <>;
      <SEO
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
      />;

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
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>;
  );
<<<<<<< HEAD
}
=======

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
<<<<<<< HEAD
}
;
export default function ApplicationStatusTracker() {;
  return (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <ProtectedRoute>;
      <AppLayout>;
        <ApplicationStatusTrackerContent />;
      </AppLayout>;
<<<<<<< HEAD
    </ProtectedRoute>;
  );
}
;
}

    </ProtectedRoute>);
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
    </ProtectedRoute>);
}
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
