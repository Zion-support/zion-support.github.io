
import React, {_useState, _useEffect} from 'react';

interface MilestoneActivitiesProps {_projectId: string;}

interface Activity {_id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status: string | null;
  new_status: string;
  comment: string | null;
  created_at: string;
  milestone: {
    title: string;};
  created_by_profile: {_display_name: string;
    avatar_url: string | null;};
}

export function MilestoneActivities(_{_projectId}: MilestoneActivitiesProps) {_const [activities, _setActivities] = useState<Activity[]>([]);
  const [isLoading, _setIsLoading] = useState(true);

  useEffect__(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true);
        
        const { data, _error} = await supabase
          .from('milestone_activities')
          .select(`
            *,
            milestone:milestone_id(title),
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('project_id', projectId)
          .order('created_at', {_ascending: false});

        if (error) throw error;
        
        setActivities(data || []);
      } catch (err) {} finally {_setIsLoading(false);}
    }

    if (projectId) {_fetchActivities();}
  }, [projectId]);

  function getActivityDescription(_activity: Activity): string {_switch (activity.action) {
      case 'created':
        return 'created a new milestone';
      case 'status_changed':
        return `changed status from ${activity.previous_status || 'none'} to ${_activity.new_status}`;
      case 'updated':
        return 'updated milestone details';
      case 'deliverable_added':
        return 'added a deliverable';
      default:
        return activity.action.replace(/_/g, ' ');
    }
  }

  if (isLoading) {_return (_<div className="space-y-4">
        {[1, _2, _3].map((i) => (
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
    );
  }

  if (activities.length === 0) {_return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground py-8">No activity found for this project</p>
        </CardContent>
      </Card>
    );}

  return (_<div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {_activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={_activity.created_by_profile?.avatar_url || ''} alt="User" />
                  <AvatarFallback>
                    {_activity.created_by_profile?.display_name?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{_activity.created_by_profile?.display_name}</span>
                    <span className="text-muted-foreground text-sm">
                      {_getActivityDescription(activity)}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {_format(new Date(activity.created_at), _'MMM d, _yyyy h:mm a')}
                    </span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">{_activity.milestone?.title}</span>
                    {_activity.comment && (
                      <span className="ml-2 text-muted-foreground">"{activity.comment}"</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
