
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',
import { format } from 'date-fns',
import { Skeleton } from '@/components/ui/skeleton',
interface MilestoneActivitiesProps {
  projectId: string
}

interface Activity {
  id: string,
  milestone_id: string,
  user_id: string,
  action: string,
  previous_status: string | null,
  new_status: string,
  comment: string | null,
  created_at: string,
  milestone: {
    title: string
  },
  created_by_profile: {
    display_name: string,
    avatar_url: string | null
  }
}

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),
  const [isLoading, setIsLoading] = useState(true),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true),
        
        const { data, _error} = await supabase
          .from('milestone_activities')
          .select(`
            *,
            milestone: milestone_id(title),
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('project_id', projectId)
<<<<<<< HEAD
          .order('created_at', { ascending: false }),
=======
          .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        if (error) throw error,
        
<<<<<<< HEAD
        setActivities(data || [])
      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (projectId) {
      fetchActivities()
    }
  }, [projectId]),
=======
        setActivities(data || []);
      } catch (err) {} finally {_setIsLoading(false);}
    }

    if (projectId) {_fetchActivities();}
  }, [projectId]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  function getActivityDescription(_activity: Activity): string {_switch (activity.action) {
      case 'created':
        return 'created a new milestone',
      case 'status_changed':
<<<<<<< HEAD
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`,
=======
        return `changed status from ${activity.previous_status || 'none'} to ${_activity.new_status}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case 'updated':
        return 'updated milestone details',
      case 'deliverable_added':
        return 'added a deliverable',
      default:
        return activity.action.replace(/_/g, ' ')
    }
  }

<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className=&quot;space-y-4&quot;>
        {[1, 2, 3].map((i) => (
=======
  if (isLoading) {_return (_<div className="space-y-4">
        {[1, _2, _3].map((i) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Card key={i}>
            <CardContent className=&quot;p-6&quot;>
              <div className=&quot;flex items-center space-x-4&quot;>
                <Skeleton className=&quot;h-10 w-10 rounded-full&quot; />
                <div className=&quot;space-y-2&quot;>
                  <Skeleton className=&quot;h-4 w-40&quot; />
                  <Skeleton className=&quot;h-4 w-60&quot; />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (activities.length === 0) {_return (
      <Card>
        <CardContent className=&quot;p-6 text-center&quot;>
          <p className=&quot;text-muted-foreground py-8&quot;>No activity found for this project</p>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }

  return (
    <div className=&quot;space-y-4&quot;>
=======
    );}

  return (_<div className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Card>
        <CardHeader>
          <CardTitle>Project Activity</CardTitle>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className=&quot;p-6&quot;>
          <div className=&quot;space-y-6&quot;>
            {activities.map((activity) => (
              <div key={activity.id} className=&quot;flex items-start space-x-4&quot;>
                <Avatar className=&quot;h-10 w-10&quot;>
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt=&quot;User&quot; />
=======
        <CardContent className="p-6">
          <div className="space-y-6">
            {_activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={_activity.created_by_profile?.avatar_url || ''} alt="User" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <AvatarFallback>
                    {_activity.created_by_profile?.display_name?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
<<<<<<< HEAD
                <div className=&quot;space-y-1&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <span className=&quot;font-medium&quot;>{activity.created_by_profile?.display_name}</span>
                    <span className=&quot;text-muted-foreground text-sm&quot;>
                      {getActivityDescription(activity)}
                    </span>
                    <span className=&quot;text-muted-foreground text-xs&quot;>
                      {format(new Date(activity.created_at), 'MMM d, yyyy h:mm a')}
                    </span>
                  </div>
                  <p className=&quot;text-sm&quot;>
                    <span className=&quot;font-medium&quot;>{activity.milestone?.title}</span>
                    {activity.comment && (
                      <span className=&quot;ml-2 text-muted-foreground&quot;>&quot;{activity.comment}&quot;</span>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
