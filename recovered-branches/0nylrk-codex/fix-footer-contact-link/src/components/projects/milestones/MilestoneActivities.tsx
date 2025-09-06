

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('milestone_activities')
          .select(`

            *;
            milestone: milestone_id(title)
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('project_id', projectId)
          .order('created_at', { ascending: false })
        if (error) throw error;
        setActivities(data |[])

      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
        setIsLoading(false)

      }
    }
    if (projectId) {
      fetchActivities()
    }

    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-60" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (activities.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground py-8">No activity found for this project</p>
        </CardContent>
      </Card>
    )
  }
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activity.created_by_profile?.avatar_url |''} alt="User" />
                  <AvatarFallback>
                    {activity.created_by_profile?.display_name?.charAt(0) |'?'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{activity.created_by_profile?.display_name}</span>
                    <span className="text-muted-foreground text-sm">
                      {getActivityDescription(activity)}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {format(new Date(activity.created_at), 'MMM d, yyyy h:mm a')}
                    </span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.milestone?.title}</span>
                    {activity.comment && (
                      <span className="ml-2 text-muted-foreground">"{activity.comment}"</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
