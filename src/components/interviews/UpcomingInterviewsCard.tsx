import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useInterviews } from '@/hooks/useInterviews'
import { Interview } from '@/types/interview'
import { format, isPast, parseISO } from 'date-fns'
import Link from 'next/link'
import { Calendar, Clock, Video } from 'lucide-react'
import { Avatar } from "@/components/ui/avatar";
import {logErrorToProduction} from '@/utils/productionLogger';
export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews()
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect((,) => {
    const loadInterviews = async () => {      setIsLoading(true)
      try {
        const interviews = await fetchInterviews()
      } finally {
        setIsLoading(false)
      }
    }
    loadInterviews()
  }, [])
  }
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
    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;
        <CardTitle className='text-lg flex items-center'>;
          <Video className='h-5 w-5 mr-2 text-zion-purple' />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className='space-y-4'>;
          {upcomingInterviews && upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview && interview.scheduled_date);
            const formattedDate = format(interviewDate, 'EEE, MMM d');
            const formattedTime = format(interviewDate, 'h:mm a');

            // Determine if interview is happening soon (within 30 minutes)            const now = new Date();
            const isStartingSoon =;
              interviewDate && interviewDate.getTime() - now && now.getTime() < 30 * 60 * 1000 &&;
              interviewDate && interviewDate.getTime() > now && now.getTime();

            return (
              <div key={interview && interview.id} className='flex items-center gap-3'>;
                <Avatar className='h-10 w-10 bg-zion-purple/10'>;
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (;
                    <img
                      src={interview && interview.client_avatar || interview && interview.talent_avatar}
                      alt={interview && interview.client_name || interview && interview.talent_name}
                      loading='lazy'                    />;
                  ) : (;
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;
                      {(;
                        interview && interview.client_name ||;
                        interview && interview.talent_name ||;
                        'U';
                      ).charAt(0)}
                    </div>;
            return (<div key={interview && interview.id} className="flex items-center gap-3">;
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (;
                    <img
                      src={interview && interview.client_avatar || interview && interview.talent_avatar || undefined} // Ensure src is string | undefined
                      alt={interview && interview.client_name || interview && interview.talent_name || "User"} // Ensure alt is string
                    />;
                  ) : (;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview && interview.client_name || interview && interview.talent_name || "U").charAt(0)}
                    </div>;
                  )}
                </Avatar>;
                <div className='flex-1'>;
                  <div className='flex justify-between items-start'>;
                    <p className='font-medium line-clamp-1'>;
                      {interview && interview.title || 'Interview'}
                    </p>;
                    {isStartingSoon && (;
                      <span className='text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>;
                        Soon;
                      </span>;
        
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">
          <Button asChild size="sm" variant="outline" className="w-full">
            <Link href="/interviews">
              View All Interviews
            </Link>


    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle className='text - lg flex items - center'>;
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='text - center py - 6'>;
            <Calendar className='h - 10 w - 10 mx - auto mb - 2 text - muted - foreground' />;
            <p className='text - sm text - muted - foreground'>;
              No upcoming interviews scheduled;
            </p>;
            <Button as_child className='mt - 4' variant='outline' size='sm'>;
              <Link href='/interviews'>Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
      <CardHeader>;
        <CardTitle className='text - lg flex items - center'>;
          <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className='space - y-4'>;
          {upcoming_interviews.map (interview => {
            const interview_date = parseISO (interview.scheduled_date);
            const formatted_date = format (interview_date, 'EEE, MMM d');
            const formatted_time = format (interview_date, 'h:mm a');
            // Determine if interview is happening soon (within 30 minutes)            const now = new Date ();
            const isStartingSoon =;
              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
            return (
              <div key={interview.id} className='flex items - center gap - 3'>;
                <Avatar className='h - 10 w - 10 bg - zion - purple / 10'>;
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading='lazy'                    />) : (
                    <div className='flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium'>;
                      {(
                        interview.client_name ||;
                        interview.talent_name ||;
                        'U').char_at (0)}
                    </div>;
            return (<div key={interview.id} className="flex items - center gap - 3">;
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img;
                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined;
                      alt={interview.client_name || interview.talent_name || "User"} // Ensure alt is string;
                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;
                      {(interview.client_name || interview.talent_name || "U").char_at (0)}
                    </div>)}
                </Avatar>;
                <div className='flex - 1'>;
                  <div className='flex justify - between items - start'>;
                    <p className='font - medium line - clamp - 1'>;
                      {interview.title || 'Interview'}
                    </p>;
                    {isStartingSoon && (
                      <span className='text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse'>;
                        Soon;
                      </span>)}
                  </div>;
                  <div className='flex items - center text - sm text - muted - foreground'>;
                    <Clock className='h - 3 w - 3 mr - 1' />;
                    {formatted_date} at {formatted_time}
                  </div>;
                </div>;
              </div>);
          })}
        </div>;
        <div className='mt - 4 pt - 3 border - t border - zion - blue - light / 40'>;
          <Button as_child size='sm' variant='outline' className='w - full'>;
            <Link href='/interviews'>View All Interviews</Link>;
          </Button>;
        </div>;
      </CardContent>;

}



    </Card>);
}
}

;
