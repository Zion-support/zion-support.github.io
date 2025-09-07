<<<<<<< HEAD


import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = null;

=======
    <>;
import { SEO } from '@/components/SEO';
import { ApplicationsTracker } from '@/components/jobs/applications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Inbox } from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useIsMobile } from '@/hooks/use-mobile';

function ApplicationStatusTrackerContent() {
  const isMobile = null;
>>>>>>> origin/main
  return (
    <>
origin/cursor/automate-test-improve-and-merge-code-2533
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'

import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  



  return (
    <>
      <SEO 
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
      />


          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">

          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications              </CardTitle>            <CardHeader className="border-b bg-muted/50">

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">


              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
              </CardTitle>
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
    <ProtectedRoute>;
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
}
;
  );
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
