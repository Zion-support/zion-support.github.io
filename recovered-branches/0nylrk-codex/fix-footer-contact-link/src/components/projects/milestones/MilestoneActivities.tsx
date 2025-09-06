
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {supabase} from '@/integrations / supabase / client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {format} from 'date - fns';
import {Skeleton} from '@/components / ui / skeleton';
interface MilestoneActivitiesProps {
  project_id: string;
}
interface Activity {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React, { useState, useEffect } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { format  } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {
  projectId: string
}
interface Activity {

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string
  milestone_id: string
  user_id: string
  action: string
  previous_status: string | null
  new_status: string
  comment: string | null
  created_at: string

<<<<<<< HEAD
<<<<<<< HEAD
  milestone: {
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    title: string
  }
  created_by_profile: {

    display_name: string

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    avatar_url: string | null
  }
}
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======
      } catch (err) {
        console.error ('Error fetching milestone activities:', err);
      } finally {
        setIsLoading(false)
<<<<<<< HEAD

      }
    }
    if (projectId) {
      fetchActivities()
    }

=======
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { format } from 'date-fns',;
import { Skeleton } from '@/components/ui/skeleton',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    title: string;
  }
=======
  milestone: {  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  milestone: {  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      } catch (err) {
        console.error ('Error fetching milestone activities:', err);
      } finally {
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
      } catch (err) {;
        console.error('Error fetching milestone activities:', err);
      } finally {;
<<<<<<< HEAD
<<<<<<< HEAD
        setIsLoading(false);
=======
      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
=======
        setIsLoading(false);      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        setIsLoading(false);      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    if (projectId) {
      fetchActivities()
    }
  }, [projectId]);
  function getActivityDescription(activity: Activity): string {
    switch (activity.action) {
      case 'created':

<<<<<<< HEAD
        return 'created a new milestone'

      case 'status_changed':
        return `changed status from ${activity.previous_status |'none'} to ${activity.new_status}`;
      case 'updated':
        return 'updated milestone details';
      case 'deliverable_added':
        return 'added a deliverable';
      default:
        return activity.action.replace(/_/g, ' ')
    }
  }
=======
    if (projectId) {;
      fetchActivities();
    }

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;

      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;
      case 'updated':;
        setIsLoading (false);
      }
    }
        return 'updated milestone details';
      case 'deliverable_added':;
        return 'added a deliverable';
      default:;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return activity.action.replace(/_/g, ' ');
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (isLoading) {;
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
<<<<<<< HEAD
<<<<<<< HEAD
          </Card>
=======
  if (isLoading) {;

        return activity.action.replace(/_/g, ' ');


    }
  }

        return activity.action.replace(/_/g, ' ');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
=======
          </Card>    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </Card>    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    );
  }


  if (activities && activities.length === 0) {;

    return (
=======
;
  if (activities.length === 0) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <Card>;
        <CardContent className="p-6 text-center">;
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }
  return (

=======
    ),;
  }
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
<<<<<<< HEAD
            {activities && activities.map((activity) => (;
              <div key={activity && activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity && activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity && activity.created_by_profile?.display_name?.charAt(0) || '?'}
=======
            {activities.map((activity) => (;
              <div key={activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity.created_by_profile?.display_name?.charAt(0) || '?'}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </AvatarFallback>;
                </Avatar>;
                <div className="space-y-1">;
                  <div className="flex items-center space-x-2">;
<<<<<<< HEAD
                    <span className="font-medium">{activity && activity.created_by_profile?.display_name}</span>;
                    <span className="text-muted-foreground text-sm">;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
                    <span className="font-medium">{activity.created_by_profile?.display_name}</span>;
                    <span className="text-muted-foreground text-sm">;
                      {getActivityDescription(activity)}
                    </span>;
                    <span className="text-muted-foreground text-xs">;
                      {format(new Date(activity.created_at), 'MMM d, yyyy h:mm a')}
                    </span>;
                  </div>;
                  <p className="text-sm">;
                    <span className="font-medium">{activity.milestone?.title}</span>;
                    {activity.comment && (;
                      <span className="ml-2 text-muted-foreground">"{activity.comment}"</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    )}
                  </p>;
                </div>;
              </div>;
            ))}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>;
        </CardContent>;
=======
      </Card>;        </CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </Card>;        </CardContent>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
;
<<<<<<< HEAD



=======
  function getActivityDescription (activity: Activity): string {
    switch (activity.action) {
      case 'created':;
        return 'created a new milestone',
      case 'status_changed':;
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`;
      case 'updated':;
        return 'updated milestone details';
      case 'deliverable_added':;
        return 'added a deliverable';
      default:;
        return activity.action.replace (/_ / g, ' ');
    }
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="space - y-4">;
        {[1, 2, 3].map ((i) => (
          <Card key={i}>;
            <CardContent className="p - 6">;
              <div className="flex items - center space - x-4">;
                <Skeleton className="h - 10 w - 10 rounded - full" />;
                <div className="space - y-2">;
                  <Skeleton className="h - 4 w - 40" />;
                  <Skeleton className="h - 4 w - 60" />;
                </div>;
              </div>;
            </CardContent>;
          </Card>))}
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardContent className="p - 6 text - center">;
          <p className="text - muted - foreground py - 8">No activity found for this project</p>;
        </CardContent>;
      </Card>);
  }
  return (
    <div className="space - y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle > Project Activity</CardTitle>;
        </CardHeader>;
        <CardContent className="p - 6">;
          <div className="space - y-6">;
            {activities.map ((activity) => (
              <div key={activity.id} className="flex items - start space - x-4">;
                <Avatar className="h - 10 w - 10">;
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity.created_by_profile?.display_name?.char_at (0) || '?'}
                  </AvatarFallback>;
                </Avatar>;
                <div className="space - y-1">;
                  <div className="flex items - center space - x-2">;
                    <span className="font - medium">{activity.created_by_profile?.display_name}</span>;
                    <span className="text - muted - foreground text - sm">;
                      {getActivityDescription (activity)}
                    </span>;
                    <span className="text - muted - foreground text - xs">;
                      {format (new Date (activity.created_at), 'MMM d, yyyy h:mm a')}
                    </span>;
                  </div>;
                  <p className="text - sm">;
                    <span className="font - medium">{activity.milestone?.title}</span>;
                    {activity.comment && (
                      <span className="ml - 2 text - muted - foreground">"{activity.comment}"</span>)}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>;
    </div>);
  ),; useEffect ( () => {
  async function fetchActivities () {
  try {
  setIsLoading (true);
const {
  data, error 
}= await supabase .from ('milestone activities') .select (`*;
milestone: milestone id (title);
created by profile:profiles!user id (display name, avatar url) `) .eq ('project id', projectId) if (error) throw error;
function getActivityDescription (activity: Activity) : string {
  switch (activity.action) {
  case 'created': return 'created a new milestone';
case 'status changed': case 'updated': return 'updated milestone details';
case 'deliverable added': return 'added a deliverable';
default: return activity.action.replace (/ /g, ' ') 
}
}<Card key= {
  i 
}> <CardContent className="p-6" > <div className="flex items-center space-x-4" > <Skeleton className="h-10 w-10 rounded-full" /> <div className="space-y-2" > <Skeleton className="h-4 w-40" /> <Skeleton className="h-4 w-60" /> </div> </div> </CardContent> </Card>) ) 
}</div>) 
}if (activities.length === 0) {
  return (<Card> <CardContent className="p-6 text-center" > <p className="text-muted-foreground py-8" >No activity found for this project</p> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Project Activity</CardTitle> </CardHeader> <AvatarFallback> {
  activity.created by profile?.display name?.charAt (0) || '?' 
}</AvatarFallback> </Avatar>) 
}</p> </div> </div>) ) 
}</div> </CardContent> </Card> </div>) 
}
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
