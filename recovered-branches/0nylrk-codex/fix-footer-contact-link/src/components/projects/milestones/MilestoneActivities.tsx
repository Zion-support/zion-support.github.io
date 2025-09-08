
=======
import {supabase} from '@/integrations / supabase / client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {format} from 'date - fns';
import {Skeleton} from '@/components / ui / skeleton';
interface MilestoneActivitiesProps {
  project_id: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
interface Activity {

  id: string
  milestone_id: string
  user_id: string
  action: string
  previous_status: string | null
  new_status: string
  comment: string | null
  created_at: string

  milestone: {  }
  created_by_profile: {

    display_name: string,
    avatar_url: string | null;
  }
}
export /**;
 * MilestoneActivities - Function description;
 */
function MilestoneActivities() {}
  const [activities, set_activities] = useState < Activity[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {}
    async /**
 * fetch_activities - Function description;
 */
function fetch_activities() {}
      try {}
        setIsLoading (true);
;
        const { data, error } = await supabase;'
          .from ('milestone_activities');`
          .select (`;
            *;
            milestone: milestone_id (title),
            created_by_profile:profiles ! user_id (display_name, avatar_url);`
          `);'
          .eq ('project_id', project_id);'
          .order ('created_at', { ascending: false }),
        // Check condition;
if (throw error) {}
  $2;
}
        set_activities (data || []);
      } catch (err) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        console.error ('Error fetching milestone activities:', err);
      } finally {}
        setIsLoading (false);
      }
    }
interface Activity {;
  id: string,;
  milestone_id: string,;
  user_id: string,;
  action: string,;
  previous_status: string | null,;
  new_status: string,;
  comment: string | null,;
  created_at: string,;
  milestone: {;
    title: string
};  created_by_profile: {;
    display_name: string,;
    avatar_url: string | null;
  }
}

export function MilestoneActivities(): any ({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {;
    async function fetchActivities() {;
      try {;
        setIsLoading(true);
        const { data, error } = await supabase;
          .from('milestone_activities');
          .select(`;
            *,;
            milestone:milestone_id(title),;
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
          .eq('project_id', projectId);
          .order('created_at', { ascending: false }),;

        if (error) throw error;

        setActivities(data || []);
      } catch (err) {;
        console && console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);

      }
    }
    if (projectId) {;
      fetchActivities();
    }

  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;
      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;

        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;
        if (error) throw error,;
        setActivities(data || []);
      } catch (err) {;'
        console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);      }
    }
    if (projectId) {
      fetchActivities()
    }
  }, [projectId]);
  function getActivityDescription(activity: Activity): string {
    switch (activity.action) {
      case 'created':

    if (projectId) {;
      fetchActivities();
    }

  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;
'
      case 'created':;'
        return 'created a new milestone',;'
      case 'status_changed':;'`
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;'
      case 'updated':;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        return 'added a deliverable';
      default:;

  if (isLoading) {;
    }
  }

  if (isLoading) {


    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>"
            <CardContent className="p-6">"
              <div className="flex items-center space-x-4">"
                <Skeleton className="h-10 w-10 rounded-full" />"
                <div className="space-y-2">"
                  <Skeleton className="h-4 w-40" />"
                  <Skeleton className="h-4 w-60" />
                </div>
              </div>
            </CardContent>
          </Card>    }
  }

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
=======
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Card key={i}>"
            <CardContent className="p-6">"
              <div className="flex items-center space-x-4">"
                <Skeleton className="h-10 w-10 rounded-full" />"
                <div className="space-y-2">"
                  <Skeleton className="h-4 w-40" />"
                  <Skeleton className="h-4 w-60" />
</Activity>'
      <div className="space-y-4">"
</div>
          <Card key={i}>
</Card>"
            <CardContent className="p-6">"
</CardContent>"
              <div className="flex items-center space-x-4">"
</div>"
                <Skeleton className="h-10 w-10 rounded-full" />"
</Skeleton>"
                <div className="space-y-2">"
</div>"
                  <Skeleton className="h-4 w-40" />"
</Skeleton>"
                  <Skeleton className="h-4 w-60" />"
</Skeleton>
                </div>
              </div>
            </CardContent>
          </Card>"
      <div className="space-y-4">"
</div>
          <Card key={i}>
</Card>"
            <CardContent className="p-6">"
</CardContent>"
              <div className="flex items-center space-x-4">"
</div>"
                <Skeleton className="h-10 w-10 rounded-full" />"
</Skeleton>"
                <div className="space-y-2">"
</div>"
                  <Skeleton className="h-4 w-40" />"
</Skeleton>"
                  <Skeleton className="h-4 w-60" />"
</Skeleton>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (activities.length === 0) {
        return activity && activity.action.replace(/_/g, ' ');
    }
  }
  if (isLoading) {;
    return (

import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { format } from 'date-fns',;
import { Skeleton } from '@/components/ui/skeleton',;
;
interface MilestoneActivitiesProps {;
  projectId:string;
}
;
interface Activity {;
  id:string,;
  milestone_id:string,;
  user_id:string,;
  action:string,;
  previous_status:string | null,;
  new_status:string,;
  comment:string | null,;
  created_at:string,;
  milestone:{;
    title:string;
  },;
  created_by_profile:{;
    display_name:string,;
    avatar_url:string | null;
  },;
}
;
export function MilestoneActivities({ projectId } MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    async function fetchActivities() {;
      try {;
        setIsLoading(true),;
        ;
        const { data, error } = await supabase;
          .from('milestone_activities');
          .select(`;
            *,;
            milestone:milestone_id(title),;
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
          .eq('project_id', projectId);
          .order('created_at', { ascending:false }),;
;
        if (error) throw error,;
        ;
        setActivities(data || []),;
      } catch (err) {;
        console.error('Error fetching milestone activities:', err),;
      } finally {;
        setIsLoading(false),;
      }
    }
;
    if (projectId) {;
      fetchActivities(),;
    }
  }, [projectId]),;
;
  function getActivityDescription(activity:Activity):string {;
    switch (activity.action) {;
      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`,;
      case 'updated':;
        return 'updated milestone details',;
      case 'deliverable_added':;
        return 'added a deliverable',;
      default:;
        return activity.action.replace(/_/g, ' '),;
    }
  }
;
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="flex items-center space-x-4">;
                <Skeleton className="h-10 w-10 rounded-full" />;
                <div className="space-y-2">;
                  <Skeleton className="h-4 w-40" />;
                  <Skeleton className="h-4 w-60" />;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
  if (activities && activities.length === 0) {;
    return (
    ),;
  }

  if (activities.length === 0) {
      <Card>;
        <CardContent className="p-6 text-center">;
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
      </Card>;        </CardContent>;
      </Card>;
    </div>;
  );
}
    // Check condition
if ( {) {
  $2
}
      fetch_activities ();
    }
  }, [project_id]);
;