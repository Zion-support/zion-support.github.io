import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Inbox } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
            <CardContent className={`p-${isMobile ? "3" : "6"}`}>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

export default function ApplicationStatusTracker() {

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  )
}

import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {ApplicationsTracker} from "@/components/jobs/applications";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Briefcase, Inbox} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useIsMobile} from "@/hooks/use-mobile";

>>>>>>> origin/cursor/delete-old-data-records-6bba

import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
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
}
export default /**
 * ApplicationStatusTracker - Function description
 */
function ApplicationStatusTracker() {
  return (

<<<<<<< HEAD
=======
),;
  );
}
;
export default function ApplicationStatusTracker() {;
>>>>>>> origin/cursor/delete-old-data-records-6bba


    <ProtectedRoute>;
      <AppLayout>;

        <ApplicationStatusTrackerContent />;
      </AppLayout>;

<<<<<<< HEAD

    </ProtectedRoute>);

}
=======
    </ProtectedRoute>);

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
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
