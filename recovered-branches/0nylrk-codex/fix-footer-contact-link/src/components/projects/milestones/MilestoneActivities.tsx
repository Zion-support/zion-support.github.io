
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { format  } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {
  projectId: string
=======
import {supabase} from '@/integrations / supabase / client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {format} from 'date - fns';
import {Skeleton} from '@/components / ui / skeleton';

interface MilestoneActivitiesProps {
  project_id: string;
>>>>>>> main
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

  milestone: {
<<<<<<< HEAD
    title: string
  }
  created_by_profile: {

    display_name: string

    avatar_url: string | null
  }
}
<<<<<<< HEAD
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),
=======

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);


>>>>>>> main
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

<<<<<<< HEAD
      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
        setIsLoading(false)
=======
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { format } from 'date-fns',;
import { Skeleton } from '@/components/ui/skeleton',;
interface MilestoneActivitiesProps {;
  projectId: string;
}
;
=======
=======
    title: string;
  }
  created_by_profile: {
    display_name: string,
    avatar_url: string | null;
  }
}
export /**
 * MilestoneActivities - Function description
 */
function MilestoneActivities() {
  const [activities, set_activities] = useState < Activity[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    async /**
 * fetch_activities - Function description
 */
function fetch_activities() {
      try {
        setIsLoading (true);
;
        const { data, error } = await supabase;
          .from ('milestone_activities');
          .select (`;
            *;
            milestone: milestone_id (title),
            created_by_profile:profiles ! user_id (display_name, avatar_url);
          `);
          .eq ('project_id', project_id);
          .order ('created_at', { ascending: false }),
        // Check condition
if (throw error) {
  $2
}
        set_activities (data || []);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } catch (err) {
        console.error ('Error fetching milestone activities:', err);
      } finally {
        setIsLoading (false);
      }
    }

import {supabase} from '@/integrations/supabase/client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {format} from 'date-fns';
import {Skeleton} from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {;
  projectId: string;
}

>>>>>>> main
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
    title: string;
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> main
  created_by_profile: {;
    display_name: string,;
    avatar_url: string | null;
  }
}
<<<<<<< HEAD
;
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    async function fetchActivities() {;
      try {;
        setIsLoading(true),;
        const { data, error } = await supabase;
          .from('milestone_activities');
          .select(`;
            *,;
            milestone:milestone_id(title),;
=======

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
            *;
            milestone: milestone_id(title),;
>>>>>>> main
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
          .eq('project_id', projectId);
          .order('created_at', { ascending: false }),;
<<<<<<< HEAD
        if (error) throw error,;
        setActivities(data || []);
      } catch (err) {;
        console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    }
    if (projectId) {
      fetchActivities()
    }
<<<<<<< HEAD
  }, [projectId]);
  function getActivityDescription(activity: Activity): string {
    switch (activity.action) {
      case 'created':

        return 'created a new milestone'

      case 'status_changed':
        return `changed status from ${activity.previous_status |'none'} to ${activity.new_status}`;
      case 'updated':
        return 'updated milestone details';
      case 'deliverable_added':
        return 'added a deliverable';
      default:
        return activity.action.replace(/_/g, ' ')
<<<<<<< HEAD
    }
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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



>>>>>>> main
=======
  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;
<<<<<<< HEAD
      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`,;
      case 'updated':;
=======

      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;
      case 'updated':;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
        return 'updated milestone details';
      case 'deliverable_added':;
        return 'added a deliverable';
      default:;
<<<<<<< HEAD
        return activity.action.replace(/_/g, ' ');
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


  if (isLoading) {;

=======
        return activity.action.replace(/_/g, ' ');


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
=======
=======



  if (activities.length === 0) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
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
    );
  }


  if (activities && activities.length === 0) {;

    return (
      <Card>;
        <CardContent className="p-6 text-center">;
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
      </Card>;
    );
  }
  return (

    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
            {activities && activities.map((activity) => (;
              <div key={activity && activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity && activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity && activity.created_by_profile?.display_name?.charAt(0) || '?'}
                  </AvatarFallback>;
                </Avatar>;
                <div className="space-y-1">;
                  <div className="flex items-center space-x-2">;
                    <span className="font-medium">{activity && activity.created_by_profile?.display_name}</span>;
                    <span className="text-muted-foreground text-sm">;

                      {getActivityDescription(activity)}
                    </span>;
                    <span className="text-muted-foreground text-xs">;
                      {format(new Date(activity && activity.created_at), 'MMM d, yyyy h:mm a')}
                    </span>;
                  </div>;
                  <p className="text-sm">;
                    <span className="font-medium">{activity && activity.milestone?.title}</span>;
                    {activity && activity.comment && (;
                      <span className="ml-2 text-muted-foreground">"{activity && activity.comment}"</span>;
                    )}
                  </p>;
                </div>;
              </div>;
            ))}

>>>>>>> main
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    // Check condition
if ( {) {
  $2
}
      fetch_activities ();
    }
  }, [project_id]);
;



>>>>>>> main
