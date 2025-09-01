import React from 'react';
import { JobPostingForm } from '@/components / jobs';
export default function Page() {
 max - w-4xl`}
      >
        <Card className="border shadow-md">
          <CardHeader>
            <CardTitle
              className={`text-${isMobile ? '2xl' : '3xl'} font - bold`}
            >
              Post a Job
            </CardTitle>
            <CardDescription>
              {' '}
              Fill out the form below to post your job and find the perfect
              talent.</CardDescription>
          </CardHeader>
          <CardContent>
            <JobPostingForm />
          </CardContent>
        </Card>
      </main>

      {/* Add extra bottom padding on mobile to account for the bottom nav */}
      {isMobile && <div className="h-16"></div>}
    </>) ;
}
