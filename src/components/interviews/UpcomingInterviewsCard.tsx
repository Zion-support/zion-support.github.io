

        // Filter for confirmed interviews in the future
        const upcoming = interviews
          .filter(interview =>
            interview.status === 'confirmed' &&
            !isPast(parseISO(interview.scheduled_date))
          )

          .slice(0, 3); // Take only the next 3 interviews
        setUpcomingInterviews(upcoming)
      } catch (error) {
        logErrorToProduction('Error loading upcoming interviews:', {
          data: error
        })
      } finally {
        setIsLoading(false)
      }
    }
    loadInterviews()
  }, [])

  if (isLoading) {
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Video className="h-5 w-5 mr-2 text-zion-purple" />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>
                </div>
              </div>

  }

  if (upcomingInterviews.length === 0) {
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center'>
            <Video className='h-5 w-5 mr-2 text-zion-purple' />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-center py-6'>
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />
            <p className='text-sm text-muted-foreground'>
              No upcoming interviews scheduled
            </p>
            <Button asChild className='mt-4' variant='outline' size='sm'>
              <Link href='/interviews'>Schedule Interview</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
          </div>;
        </CardContent>;
      </Card>;
    );
  }

  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;
          <CardTitle className='text-lg flex items-center'>;
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='text-center py-6'>;
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />;
            <p className='text-sm text-muted-foreground'>;
              No upcoming interviews scheduled;
            </p>;
            <Button asChild className='mt-4' variant='outline' size='sm'>;
              <Link href='/interviews'>Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
  return (
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingInterviews.map(interview => {

            return (
              <div key={interview.id} className='flex items-center gap-3'>
                <Avatar className='h-10 w-10 bg-zion-purple/10'>
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}

=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name |interview.talent_name |"U").charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
                      {interview.title || "Interview"}

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
<<<<<<< HEAD
