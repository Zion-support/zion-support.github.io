

        // Filter for confirmed interviews in the future
        const upcoming = interviews
          .filter(interview =>
            interview.status === 'confirmed' &&
            !isPast(parseISO(interview.scheduled_date))
          )
          .sort(
            (a, b) =>
              parseISO(a.scheduled_date).getTime() -
              parseISO(b.scheduled_date).getTime()          )
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
            return (
              <div key={interview.id} className='flex items-center gap-3'>
                <Avatar className='h-10 w-10 bg-zion-purple/10'>
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading="lazy"
                    />
                  ) : (
                      loading='lazy'                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>
                      {(
                        interview.client_name ||
                        interview.talent_name ||
                        'U'
                      ).charAt(0)}
                    </div>
            return (<div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img 
                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined
                      alt={interview.client_name || interview.talent_name || "User"} // Ensure alt is string
                    />
                  ) : (
                      loading="lazy"
                    />
                  ) : (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
