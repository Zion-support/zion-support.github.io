import { SEO } from '@/components/SEO';
import { ApplicationsTracker } from '@/components/jobs/applications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Inbox } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";

function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'
      />
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
  );origin/main
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  );origin/main
}