<<<<<<< HEAD
return (
    <>;
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'

  const isMobile = useIsMobile();



  const isMobile = useIsMobile()
<<<<<<< HEAD

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

import { SEO } from "@/components/SEO",
import { ApplicationsTracker } from "@/components/jobs/applications",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Briefcase, Inbox } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useIsMobile } from "@/hooks/use-mobile",
function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile(),
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <>
      <SEO 
        title="Application Status Tracker | Zion AI Marketplace" 
        description="Track the status of your job applications in the Zion AI marketplace." 
      />
<<<<<<< HEAD
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Application Status Tracker</h1>
            <p className="text-muted-foreground mt-1">Track where you stand in the hiring process</p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 gap-6'>
          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
    <ProtectedRoute>
=======
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>

  )

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
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <ProtectedRoute>;
      <ApplicationStatusTrackerContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD

  );
}

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
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
