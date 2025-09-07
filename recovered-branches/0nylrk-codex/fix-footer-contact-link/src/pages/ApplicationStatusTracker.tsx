<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
<<<<<<< HEAD
<<<<<<< HEAD
import { Briefcase, Inbox } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { Briefcase, Inbox } from "lucide-react",import { ProtectedRoute } from "@/components/ProtectedRoute";
=======
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Inbox } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();

<<<<<<< HEAD
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
<<<<<<< HEAD
  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Inbox } from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { ProtectedRoute } from "@/components/ProtectedRoute";
=======
import { Briefcase, Inbox } from "lucide-react",import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { AppLayout } from "@/layout/AppLayout";"
import { SEO } from "@/components/SEO";"
import { ApplicationsTracker } from "@/components/jobs/applications";"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";"
import { Briefcase, Inbox } from "lucide-react";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {}
  const isMobile = useIsMobile();

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
    <>
      <SEO"
        title="Application Status Tracker | Zion AI Marketplace""
        description="Track the status of your job applications in the Zion AI marketplace."
      />
"
      <div className="container mx-auto px-4 py-8">"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>"
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>
              Application Status Tracker;
            </h1>"
            <p className="text-muted-foreground mt-1">
              Track where you stand in the hiring process;
            </p>
          </div>
        </div>"
        <div className="grid grid-cols-1 gap-6">
          <Card>"
            <CardHeader className="border-b bg-muted/50">"
              <CardTitle className="flex items-center text-lg">"
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;
              </CardTitle>
            </CardHeader>"`
            <CardContent className={`p-${isMobile ? "3" : "6"}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


<<<<<<< HEAD

=======
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",

function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
    <>
      <SEO
        title="Application Status Tracker | Zion AI Marketplace"
        description="Track the status of your job applications in the Zion AI marketplace."
      />
=======


import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
  );
}

import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";

}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function ApplicationStatusTracker() {
=======
}
export default function ApplicationStatusTracker() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;

function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <>;
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace";
        description="Track the status of your job applications in the Zion AI marketplace.";
      />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="container mx - auto px - 4 py - 8">;
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;
=======
      <div className="container mx - auto px - 4 py-8">;
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb-8">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Application Status Tracker</h1>;
            <p className="text - muted - foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 gap-6">;
          <Card>;
<<<<<<< HEAD
            <CardHeader className="border - b bg - muted / 50">;
              <CardTitle className="flex items - center text - lg">;
                <Inbox className="mr - 2 h - 5 w - 5" /> Your Applications;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="container mx - auto px - 4 py-8">;
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb-8">;
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Application Status Tracker</h1>;
            <p className="text - muted - foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 gap-6">;
          <Card>;
            <CardHeader className="border - b bg-muted / 50">;
              <CardTitle className="flex items - center text-lg">;
                <Inbox className="mr - 2 h - 5 w-5" /> Your Applications;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <CardHeader className="border - b bg-muted / 50">;
              <CardTitle className="flex items - center text-lg">;
                <Inbox className="mr - 2 h - 5 w-5" /> Your Applications;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </CardTitle>;
            </CardHeader>;
            <CardContent className={`p-${is_mobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
=======
    </>);}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </>);}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </>);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default /**
 * ApplicationStatusTracker - Function description
 */
function ApplicationStatusTracker() {
  return (

),;
  );
}
;
export default function ApplicationStatusTracker() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  return (;      <AppLayout>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (;      <AppLayout>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (;
    <ProtectedRoute>;
      <AppLayout>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <ApplicationStatusTrackerContent />;
      </AppLayout>;

    </ProtectedRoute>);
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
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
}
;
export default function ApplicationStatusTracker() {;
  return (;      <AppLayout>;
        <ApplicationStatusTrackerContent />;
      </AppLayout>;
    </ProtectedRoute>);
}

}
}

import { AppLayout } from "@/layout/AppLayout";""
import { SEO } from "@/components/SEO";""
import { ApplicationsTracker } from "@/components/jobs/applications";""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";""
import { Briefcase, Inbox } from "lucide-react";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { useIsMobile } from "@/hooks/use-mobile";"
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();

  return (
    <>
      <SEO;"
        title="Application Status Tracker | Zion AI Marketplace"""
        description="Track the status of your job applications in the Zion AI marketplace.""
      />

"
      <div className="container mx-auto px-4 py-8">"
</div>"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">"
</div>
          <div>
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>"
</h1>
            </h1>"
            <p className="text-muted-foreground mt-1">"
</p>
        <div className="grid grid-cols-1 gap-6">"
          <Card>
            <CardHeader className="border-b bg-muted/50">"
              <CardTitle className="flex items-center text-lg">"
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;"

            "`;
            <CardContent className={`p-${isMobile ? "3" : "6"}`}>"

              <ApplicationsTracker />

    </>)
  );
}
import {AppLayout} from "@/layout/AppLayout";""
import {SEO} from "@/components/SEO";""
import {ApplicationsTracker} from "@/components/jobs/applications";""
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";""
import {Briefcase, Inbox} from "lucide-react";""
import {ProtectedRoute} from "@/components/ProtectedRoute";""
import {useIsMobile} from "@/hooks/use-mobile";"
export default function ApplicationStatusTracker() {
    <ProtectedRoute>

      <AppLayout>

        <ApplicationStatusTrackerContent />




</AppLayout>

        <ApplicationStatusTrackerContent />
</ApplicationStatusTrackerContent>
      </AppLayout>

    </ProtectedRoute>
    <ProtectedRoute>
</ProtectedRoute>
      <AppLayout>
</AppLayout>
        <ApplicationStatusTrackerContent />
</ApplicationStatusTrackerContent>
      </AppLayout>
    </ProtectedRoute>
  )
}
;
    </ProtectedRoute>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

}
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
";
import { AppLayout } from "@/layout/AppLayout",;"
import { SEO } from "@/components/SEO",;"
import { ApplicationsTracker } from "@/components/jobs/applications",;"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
import { Briefcase, Inbox } from "lucide-react",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { useIsMobile } from "@/hooks/use-mobile",;

}
;
export default function ApplicationStatusTracker() { return null; }
}


    </ProtectedRoute>);
}

"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <ProtectedRoute>;

      <AppLayout>;

        <ApplicationStatusTrackerContent />;

      ;)
    ;"
Application Status Tracker | Zion AI Marketplace"description=" Track the status of your job applications in the Zion AI marketplace."/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"> <div> <h1 className= {"
}>Application Status Tracker</h1> <p className=" text-muted-foreground mt-1">Track where you stand in the hiring process</p> </div> </div> <div className=" grid grid-cols-1 gap-6"> <Card> <CardHeader className=" border-b bg-muted/50"> <CardTitle className=" flex items-center text-lg"> <Inbox className=" mr-2 h-5 w-5" /> Your Applications   <CardContent className= {"`;
  `p-$ {"
  isMobile ? '3' : '6`;
}` 
}> <ApplicationsTracker />   </div> </div> </>) 

  return (<ProtectedRoute> <AppLayout> <ApplicationStatusTrackerContent />   
    ;



    )
    );`;
pr-12325
}> <ApplicationsTracker /> </CardContent> </Card> </div> </div> </>) 
</ApplicationsTracker>
  return (<ProtectedRoute> <AppLayout> <ApplicationStatusTrackerContent /> </AppLayout> </ProtectedRoute> 
    </ProtectedRoute>;
    <ProtectedRoute>
</ProtectedRoute>
      <AppLayout>
</AppLayout>
        <ApplicationStatusTrackerContent />
</ApplicationStatusTrackerContent>
      </AppLayout>
    </ProtectedRoute>)
    </ProtectedRoute>);'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
