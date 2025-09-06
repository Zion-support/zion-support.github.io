import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInterviews } from '@/hooks/useInterviews';
import { Interview } from '@/types/interview';
import { format, isPast, parseISO } from 'date-fns';
import Link from 'next/link';
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { logErrorToProduction } from '@/utils/productionLogger';

export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadInterviews = null;
            return (
              <div key={interview.id} className='flex items-center gap-3'>
                <Avatar className='h-10 w-10 bg-zion-purple/10'>
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar |interview.talent_avatar}
                      alt={interview.client_name |interview.talent_name}
                      loading='lazy'                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>
                      {(
                        interview.client_name |
                        interview.talent_name |
                        'U'
                      ).charAt(0)}
                    </div>
            return (<div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar |interview.talent_avatar |undefined} // Ensure src is string | undefined
                      alt={interview.client_name |interview.talent_name |"User"} // Ensure alt is string
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name |interview.talent_name |"U").charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <p className='font-medium line-clamp-1'>
                      {interview.title |'Interview'}
                    </p>
                    {isStartingSoon && (
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
                        Soon
                      </span>
                    )}
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <Clock className='h-3 w-3 mr-1' />
                    {formattedDate} at {formattedTime}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>
          <Button asChild size='sm' variant='outline' className='w-full'>
            <Link href='/interviews'>View All Interviews</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
