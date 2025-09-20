import React from 'react';
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
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>
              Application Status Tracker
            </h1>
            <p className='text-muted-foreground mt-1'>
              Track where you stand in the hiring process
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Briefcase className='w-5 h-5' />
                Applied
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>0</p>
              <p className='text-sm text-muted-foreground'>Applications submitted</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Inbox className='w-5 h-5' />
                Under Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>0</p>
              <p className='text-sm text-muted-foreground'>Applications being reviewed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Briefcase className='w-5 h-5' />
                Interviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>0</p>
              <p className='text-sm text-muted-foreground'>Interview scheduled</p>
            </CardContent>
          </Card>
        </div>

        <div className='mt-8'>
          <ApplicationsTracker />
        </div>
      </div>
    </>
  );
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  );
}