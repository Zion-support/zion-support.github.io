import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Inbox } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
    const isMobile = useIsMobile();
    return (<>
        <SEO
          title="Application Status Tracker | Zion AI Marketplace"
          description="Track the status of your job applications in the Zion AI marketplace."
              />

        <ApplicationStatusTrackerContent />;

    </ProtectedRoute>)}


export { ApplicationStatusTrackerContent, ApplicationStatusTracker }
export { ApplicationStatusTrackerContent, ApplicationStatusTracker }
export { ApplicationStatusTrackerContent, ApplicationStatusTracker }
export { ApplicationStatusTrackerContent, ApplicationStatusTracker }
export { ApplicationStatusTrackerContent, ApplicationStatusTracker }