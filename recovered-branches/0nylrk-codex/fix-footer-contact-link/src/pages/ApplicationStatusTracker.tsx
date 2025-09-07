<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Briefcase, Inbox } from "lucide-react",
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile($2);
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
=======
<<<<<<< HEAD
=======
import { Briefcase, Inbox } from "lucide-react",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();

import { ProtectedRoute } from "@/components/ProtectedRoute";

import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {}
  const isMobile = useIsMobile();

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {

  const isMobile = useIsMobile();

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>
              Application Status Tracker
            </h1>
            <p className="text-muted-foreground mt-1">
              Track where you stand in the hiring process
            </p>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
              </CardTitle>
            </CardHeader>
<<<<<<< HEAD
            <CardContent className={`p-${isMobile ? "3" : "6"}`}>
=======
<<<<<<< HEAD
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
=======
            <CardContent className={`p-${isMobile ? "3" : "6"}`}>
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
<<<<<<< HEAD
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

export default function ApplicationStatusTracker() {

=======
<<<<<<< HEAD
  )
}

=======
  );
}

<<<<<<< HEAD

}
>>>>>>> merged-prs-20250907-203621
export default function ApplicationStatusTracker() {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
;
=======
=======
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();
  return (;
    <>;
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace";
        description="Track the status of your job applications in the Zion AI marketplace.";
      />;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

      />;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>;
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="grid grid-cols-1 gap-6">;
          <Card>;
            <CardHeader className="border-b bg-muted/50">;
              <CardTitle className="flex items-center text-lg">;
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;
              </CardTitle>;
            </CardHeader>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            <CardContent className={`p-${isMobile ? '3' :'6'}`}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
export default function ApplicationStatusTracker() {;
  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

;
  return (

    <>;
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace";
        description="Track the status of your job applications in the Zion AI marketplace.";
      />;

          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Application Status Tracker</h1>;
            <p className="text - muted - foreground mt-1">Track where you stand in the hiring process</p>;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 gap-6">;
          <Card>;

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

              </CardTitle>;
            </CardHeader>;
            <CardContent className={`p-${is_mobile ? '3' : '6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;

    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  );

export default /**
 * ApplicationStatusTracker - Function description
 */
function ApplicationStatusTracker() {
  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
  ),;
  );
}
;
export default function ApplicationStatusTracker() {;
  return (;
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
),;
  );
}
;
export default function ApplicationStatusTracker() {;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <ProtectedRoute>;
      <AppLayout>;

        <ApplicationStatusTrackerContent />;
      </AppLayout>;

<<<<<<< HEAD
    </ProtectedRoute>);

}
=======
<<<<<<< HEAD


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
=======
    </ProtectedRoute>);

}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
