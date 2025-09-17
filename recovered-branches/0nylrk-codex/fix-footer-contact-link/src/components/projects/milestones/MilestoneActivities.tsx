
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

interface MilestoneActivitiesProps {
  projectId: string;
}

interface Activity {
  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status: string | null;
  new_status: string;
  comment: string | null;
  created_at: string;
  milestone: {
    title: string;
  };
  created_by_profile: {
    display_name: string;
    avatar_url: string | null;
  };
}

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {

  useEffect(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true);
        
          .from('milestone_activities')
          .select(`
            *,
            milestone:milestone_id(title),

        if (error) throw error;
        
        setActivities(data || []);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    }

    if (projectId) {
      fetchActivities();
    }

  function getActivityDescription(activity: Activity): string {
    switch (activity.action) {
      case 'created':
        return 'created a new milestone';
      case 'status_changed':
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`;
      case 'updated':
        return 'updated milestone details';
      case 'deliverable_added':
        return 'added a deliverable';
      default:
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
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

  if (activities.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground py-8">No activity found for this project</p>
        </CardContent>
      </Card>
    );
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
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt="User" />
                  <AvatarFallback>
                    {activity.created_by_profile?.display_name?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{activity.created_by_profile?.display_name}</span>
                    <span className="text-muted-foreground text-sm">
                      {getActivityDescription(activity)}
                    </span>
                    <span className="text-muted-foreground text-xs">
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
