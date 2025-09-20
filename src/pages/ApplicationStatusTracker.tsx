interface Service {
id: string;,
name: string;
}

import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Inbox } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from '@/components/Header';
import { useAuth } from '@/hooks/useAuth';

function ApplicationStatusTrackerContent() {
<<<<<<< HEAD
  const isMobile = useIsMobile();
  const { user } = useAuth();
  
  return (
    <>
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'
      />
      <Header />
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Application Status Tracker</h1>
          <p className='text-gray-300'>
            Monitor the progress of your job applications and stay updated on their status.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <Card className='bg-white/10 backdrop-blur-sm border-white/20'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-white'>Total Applications</CardTitle>
              <Briefcase className='h-4 w-4 text-blue-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-white'>12</div>
              <p className='text-xs text-gray-300'>+2 from last week</p>
            </CardContent>
          </Card>

          <Card className='bg-white/10 backdrop-blur-sm border-white/20'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-white'>Under Review</CardTitle>
              <Inbox className='h-4 w-4 text-yellow-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-white'>5</div>
              <p className='text-xs text-gray-300'>Pending response</p>
            </CardContent>
          </Card>

          <Card className='bg-white/10 backdrop-blur-sm border-white/20'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-white'>Interviews</CardTitle>
              <Briefcase className='h-4 w-4 text-green-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-white'>3</div>
              <p className='text-xs text-gray-300'>Scheduled this week</p>
            </CardContent>
          </Card>
        </div>

        <ApplicationsTracker />
      </div>
</>
  )
    </>
  );
=======
const isMobile = null;
return (
<>;
<SEO;
title="Application Status Tracker | Zion AI Marketplace";
description="Track the status of your job applications in the Zion AI marketplace.";
/>;
<div className="container mx-auto px-4 py-8">;
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
<div>;
<h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>;
Application Status Tracker;
</h1>;
<p className="text-muted-foreground mt-1">;
Track where you stand in the hiring process;
</p>;
</div>;
</div>;
<div className="grid grid-cols-1 gap-6">;
<Card>;
<CardHeader className="border-b bg-muted/50">;
<CardTitle className="flex items-center text-lg">;
<Inbox className="mr-2 h-5 w-5" /> Your Applications              </CardTitle>            <CardHeader className="border-b bg-muted/50">;
<CardTitle className="flex items-center text-lg">;
<Inbox className="mr-2 h-5 w-5" /> Your Applications;
</CardTitle>;
</CardHeader>;
<CardContent className={`p-${isMobile ? "3" : "6"}`}>;
<ApplicationsTracker />;
</CardContent>;
</Card>;
</div>;
</div>;
</>;
)
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}

export default function ApplicationStatusTracker() {
<<<<<<< HEAD
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  );
=======
return (
<ProtectedRoute>;
<ApplicationStatusTrackerContent />;
</ProtectedRoute>;
)
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}