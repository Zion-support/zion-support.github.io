
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
        <div className="grid grid-cols-1 gap-6">;
          <Card>;
            <CardHeader className="border-b bg-muted/50">;
              <CardTitle className="flex items-center text-lg">;
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;
              </CardTitle>;
            </CardHeader>;
            <CardContent className={`p-${isMobile ? '3' :'6'}`}>;
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>;
  ),;
}
;
export default function ApplicationStatusTracker() {;
  return (;
    <ProtectedRoute>;
      <AppLayout>;
        <ApplicationStatusTrackerContent />;
      </AppLayout>;
    </ProtectedRoute>;
  ),;
}
=======
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from "lucide-react",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),

function ApplicationStatusTrackerContent() {_const _isMobile = useIsMobile();
  
  return (
    <>
      <SEO 
        title=&quot;Application Status Tracker | Zion AI Marketplace&quot; 
        description=&quot;Track the status of your job applications in the Zion AI marketplace.&quot; 
      />
      
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8&quot;>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className=&quot;text-muted-foreground mt-1&quot;>Track where you stand in the hiring process</p>
          </div>
        </div>

        <div className=&quot;grid grid-cols-1 gap-6&quot;>
          <Card>
            <CardHeader className=&quot;border-b bg-muted/50&quot;>
              <CardTitle className=&quot;flex items-center text-lg&quot;>
                <Inbox className=&quot;mr-2 h-5 w-5&quot; /> Your Applications
              </CardTitle>
            </CardHeader>
            <CardContent className={_`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default function ApplicationStatusTracker() {_return (
    <ProtectedRoute>
      <AppLayout>
        <ApplicationStatusTrackerContent />
      </AppLayout>
    </ProtectedRoute>
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
