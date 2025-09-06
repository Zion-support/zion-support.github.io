<<<<<<< HEAD


  return (
    <>;
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'

  const isMobile = useIsMobile();


=======
<<<<<<< HEAD
import { SEO } from '@/components/SEO'
import { ApplicationsTracker } from '@/components/jobs/applications'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
function ApplicationStatusTrackerContent() {
<<<<<<< HEAD
  const isMobile = null;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  const isMobile = useIsMobile()
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <>
      <SEO 
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
      />


      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>
          </div>
        </div>
<<<<<<< HEAD



=======
<<<<<<< HEAD
        <div className='grid grid-cols-1 gap-6'>
<<<<<<< HEAD
          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

        <div className="grid grid-cols-1 gap-6">
          <Card>
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </CardTitle>
            </CardHeader>
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>

  );
}


export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
<<<<<<< HEAD
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>

=======
<<<<<<< HEAD
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  )
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  )

      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
};
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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

      <div className='container mx-auto px-4 py-8'>;
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>;
          <div>;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>;
              Application Status Tracker;
            </h1>;
            <p className='text-muted-foreground mt-1'>;
              Track where you stand in the hiring process;
            </p>;
          </div>;
        </div>;

        <div className='grid grid-cols-1 gap-6'>;
          <Card>;
            <CardHeader className='border-b bg-muted/50'>;
              <CardTitle className='flex items-center text-lg'>;
                <Inbox className='mr-2 h-5 w-5' /> Your Applications              </CardTitle>            <CardHeader className="border-b bg-muted/50">;
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

export default function ApplicationStatusTracker() {;
  return (
    <ProtectedRoute>;
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD

  );
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
