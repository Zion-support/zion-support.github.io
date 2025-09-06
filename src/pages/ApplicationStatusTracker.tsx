<<<<<<< HEAD
<<<<<<< HEAD


=======
  const isMobile = null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
<<<<<<< HEAD

=======
  
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { SEO } from '@/components/SEO'
import { ApplicationsTracker } from '@/components/jobs/applications'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
<<<<<<< HEAD
  const isMobile = null;
=======
  const isMobile = useIsMobile()
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
>>>>>>>     <>
      <SEO 
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
      />
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
>>>>>>>           <div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
=======
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
>>>>>>>             <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className='grid grid-cols-1 gap-6'>
<<<<<<< HEAD
          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications

=======
          <Card>
<<<<<<< HEAD
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications
>>>>>>>               <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
>>>>>>>               </CardTitle>
ursor/fix-website-loading-errors-and-merge-6662
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <CardHeader className="border-b bg-muted/50">
=======
          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications              </CardTitle>            <CardHeader className="border-b bg-muted/50">
=======

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </CardTitle>
>>>>>>>             </CardHeader>
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
}
export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { SEO } from "@/components/SEO",;
import { ApplicationsTracker } from "@/components/jobs/applications",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Briefcase, Inbox } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useIsMobile } from "@/hooks/use-mobile",;
function ApplicationStatusTrackerContent() {;
  const isMobile = useIsMobile();
  return (;
    <>;
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace";
        description="Track the status of your job applications in the Zion AI marketplace.";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
}
;
export default function ApplicationStatusTracker() {;
  return (;
    <ProtectedRoute>;
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
