
<<<<<<< HEAD
import React{ useStateuseEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CardContentCardHeaderCardTitle } from '@/components/ui/card';
import { AvatarFallbackAvatarImage } from '@/components/ui/avatar';
=======
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  const [activitiesetActivities] = useState<Activity[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
=======
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true);
        
<<<<<<< HEAD
        const { dataerror } = await supabase
=======
        const { data, error } = await supabase
>>>>>>> origin/auto/autonomy-17186719616
          .from('milestone_activities')
          .select(`
            *,
            milestone:milestone_id(title),
<<<<<<< HEAD
            created_by_profile:profiles!user_id(display_nameavatar_url)
          `)
          .eq('project_id'projectId)
          .order('created_at'{ ascending: false });
=======
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('project_id', projectId)
          .order('created_at', { ascending: false });
>>>>>>> origin/auto/autonomy-17186719616

        if (error) throw error;
        
        setActivities(data || []);
      } catch (err) {
<<<<<<< HEAD
        console.error('Error fetching milestone activities:'err);
=======
        console.error('Error fetching milestone activities:', err);
>>>>>>> origin/auto/autonomy-17186719616
      } finally {
        setIsLoading(false);
      }
    }

    if (projectId) {
      fetchActivities();
    }
<<<<<<< HEAD
  }[projectId]);
=======
  }, [projectId]);
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
        return activity.action.replace(/_/g' ');
=======
        return activity.action.replace(/_/g, ' ');
>>>>>>> origin/auto/autonomy-17186719616
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
<<<<<<< HEAD
        {[123].map((i) => (
=======
        {[1, 2, 3].map((i) => (
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                      {format(new Date(activity.created_at)'MMM dyyyy h:mm a')}
=======
                      {format(new Date(activity.created_at), 'MMM d, yyyy h:mm a')}
>>>>>>> origin/auto/autonomy-17186719616
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
