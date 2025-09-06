<<<<<<< HEAD
<<<<<<< HEAD
=======
  const isMobile = null;
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <>;
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'

<<<<<<< HEAD
  const isMobile = useIsMobile();



  
ursor/fix-website-loading-errors-and-merge-6662
import { SEO } from '@/components/SEO'
import { ApplicationsTracker } from '@/components/jobs/applications'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
  const isMobile = null;
  const isMobile = useIsMobile()


<<<<<<< HEAD
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  



  return (
    <>
      <SEO 
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
      />
<<<<<<< HEAD
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
ursor/fix-website-loading-errors-and-merge-6662
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>
          </div>
        </div>
<<<<<<< HEAD
        <div className='grid grid-cols-1 gap-6'>
          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="border-b bg-muted/50">
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
            </CardHeader>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
}
export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>

  )
}
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
};

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <ProtectedRoute>;
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD

  );
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { SEO } from '@/components / SEO';
import { ApplicationsTracker } from '@/components / jobs / applications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components / ui / card';
import { Briefcase, Inbox } from 'lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { useIsMobile } from '@/hooks / use - mobile';
/**
 * ApplicationStatusTrackerContent - Function description
 */
function ApplicationStatusTrackerContent() {
  const is_mobile = useIsMobile ();
  return (
    <>;
      <SEO;
        title='Application Status Tracker | Zion AI Marketplace';
        description='Track the status of your job applications in the Zion AI marketplace.';
      />;
      <div className='container mx - auto px - 4 py - 8'>;
        <div className='flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8'>;
          <div>;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>;
              Application Status Tracker;
            </h1>;
            <p className='text - muted - foreground mt - 1'>;
              Track where you stand in the hiring process;
            </p>;
          </div>;
        </div>;
        <div className='grid grid - cols - 1 gap - 6'>;
          <Card>;
            <CardHeader className='border - b bg - muted / 50'>;
              <CardTitle className='flex items - center text - lg'>;
                <Inbox className='mr - 2 h - 5 w - 5' /> Your Applications              </CardTitle>            <CardHeader className="border - b bg - muted / 50">;
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
    <ProtectedRoute>;
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>);
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
