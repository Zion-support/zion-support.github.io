
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);


            return (
              <div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}


                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
                      {interview.title || "Interview"}
                    </p>
                    {isStartingSoon && (
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
                        Soon
                      </span>
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
                    )}

                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
            );
          })}
        </div>
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">
          <Button asChild size="sm" variant="outline" className="w-full">
            <Link href="/interviews">
              View All Interviews
            </Link>


          </Button>
        </div>
      </CardContent>
    </Card>
  )
                  </div>;
                </div>;
              </div>;
            );
          })}
        </div>;

        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>;
          <Button asChild size='sm' variant='outline' className='w-full'>;
          <div className='space - y-4'>;
            {[1, 2].map (index => (
              <div key={interview.id} className="flex items-center gap-3">"
                <Avatar className="h-10 w-10 bg-zion-purple/10">"

                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}

                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">"
</img>
                  <div className="flex justify-between items-start">"
                    <p className="font-medium line-clamp-1">"
                    </p>"
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
</span>





        <div className='space-y-4'>;
              interviewDate && interviewDate.getTime() - now && now.getTime() < 30 * 60 * 1000 &&;
              interviewDate && interviewDate.getTime() > now && now.getTime();

              <div key={interview && interview.id} className='flex items-center gap-3'>;
                <Avatar className='h-10 w-10 bg-zion-purple/10'>;

                      src={interview && interview.client_avatar || interview && interview.talent_avatar}
                      alt={interview && interview.client_name || interview && interview.talent_name}
                      loading='lazy'                    />;
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;
            return (<div key={interview && interview.id} className="flex items-center gap-3">;"
                <Avatar className="h-10 w-10 bg-zion-purple/10">;"

                      src={interview && interview.client_avatar || interview && interview.talent_avatar || undefined} // Ensure src is string | undefined;"
                      alt={interview && interview.client_name || interview && interview.talent_name || "User"} // Ensure alt is string;"
                    />;
</img>"
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;"
                ;"
                <div className='flex-1'>;
                  <div className='flex justify-between items-start'>;
                    <p className='font-medium line-clamp-1'>;
                      <span className='text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>;
                      </span>;

                  <div className="flex items-center text-sm text-muted-foreground">"
                    <Clock className="h-3 w-3 mr-1" />"

        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">"
          <Button asChild size="sm" variant="outline" className="w-full">"
            <Link href="/interviews">"



        </div>;"
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>;
          <Button asChild size='sm' variant='outline' className='w-full'>;

          <div className='space - y-4'>;
pr-12325
              <div key={i} className='flex items - center gap - 3 animate - pulse'>;
                <div className='w - 10 h - 10 bg - zion - blue - light / 30 rounded - full'></div>;
                <div className='flex - 1'>;
                  <div className='h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2'></div>;
                  <div className='h - 3 w - 1/2 bg - zion - blue - light / 30 rounded'></div>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>);
  }
  // Check condition
if ( {) {
  $2
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
  );
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>;)
              </div>))}
      );





          <div className='text - center py - 6'>;
            <Calendar className='h - 10 w - 10 mx - auto mb - 2 text - muted - foreground' />;

            <p className='text - sm text - muted - foreground'>;
            <Button as_child className='mt - 4' variant='outline' size='sm'>;






              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ();
              <div key={interview.id} className='flex items - center gap - 3'>;
                <Avatar className='h - 10 w - 10 bg - zion - purple / 10'>;

                      alt={interview.client_name || interview.talent_name})
                      loading='lazy'                    />) : (
                    <div className='flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium'>;
            return (<div key={interview.id} className="flex items - center gap - 3">;"
                <Avatar className="h - 10 w - 10 bg - zion - purple / 10">;"

                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined;"
                      alt={interview.client_name || interview.talent_name || "User"} // Ensure alt is string;")
                    />) : (
                    <div className="flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;"
                    </div>)}
                  <div className='flex justify - between items - start'>;
                    <p className='font - medium line - clamp - 1'>;
                      <span className='text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse'>;
                      </span>)}
                  <div className='flex items - center text - sm text - muted - foreground'>;
                    <Clock className='h - 3 w - 3 mr - 1' />;

              </div>);
        <div className='mt - 4 pt - 3 border - t border - zion - blue - light / 40'>;
          <Button as_child size='sm' variant='outline' className='w - full'>;

            <Link href='/interviews'>View All Interviews;
pr-12325
