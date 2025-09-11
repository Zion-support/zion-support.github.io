<<<<<<< HEAD
interface MilestoneActivitiesProps {
  project_id: string;
}
interface Activity {

<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { format  } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {
<<<<<<< HEAD
  projectId: string
=======
import {supabase} from '@/integrations / supabase / client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {format} from 'date - fns';
import {Skeleton} from '@/components / ui / skeleton';

interface MilestoneActivitiesProps {
  project_id: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  project_id: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    title: string
  }
  created_by_profile: {

    display_name: string

    avatar_url: string | null
  }
}
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
        setIsLoading(false)
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { format } from 'date-fns',;
import { Skeleton } from '@/components/ui/skeleton',;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
interface MilestoneActivitiesProps {;
  projectId: string;
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface MilestoneActivitiesProps {;
  projectId: string;
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  created_by_profile: {;
    display_name: string,;
    avatar_url: string | null;
  }
}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
          .eq('project_id', projectId);
          .order('created_at', { ascending: false }),;

<<<<<<< HEAD
<<<<<<< HEAD
    if (projectId) {;
      fetchActivities();
    }



  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;

    if (projectId) {;
      fetchActivities();
    }
  }, [projectId]);
  function getActivityDescription(): any (activity: Activity): string {;
    switch (activity && activity.action) {;
      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;
        if (error) throw error,;
        setActivities(data || []);
      } catch (err) {;
        console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);
      }
    }
    if (projectId) {
      fetchActivities()
    }
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
    }
  }
  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;
      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`,;
      case 'updated':;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (error) throw error;

        setActivities(data || []);
      } catch (err) {;
        console && console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);

      }
    }
<<<<<<< HEAD
=======
    if (projectId) {
      fetchActivities()
    }
  }, [projectId]);
  function getActivityDescription(activity: Activity): string {
    switch (activity.action) {
      case 'created':
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (projectId) {;
      fetchActivities();
    }



=======
  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;

      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;
      case 'updated':;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return 'updated milestone details';
      case 'deliverable_added':;
        return 'added a deliverable';
      default:;
<<<<<<< HEAD


  if (isLoading) {;

        return activity.action.replace(/_/g, ' ');


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }

        return activity.action.replace(/_/g, ' ');
=======
        return activity.action.replace(/_/g, ' ');


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD

<<<<<<< HEAD
  if (activities.length === 0) {
    return (
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
=======

  if (activities.length === 0) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (activities.length === 0) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  if (activities && activities.length === 0) {;
    return (
    ),;
  }
;
  if (activities.length === 0) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }


  if (activities && activities.length === 0) {;

    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>;
        <CardContent className="p-6 text-center">;
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
    ),;
  }
;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
<<<<<<< HEAD
<<<<<<< HEAD
            {activities.map((activity) => (;
              <div key={activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity.created_by_profile?.display_name?.charAt(0) || '?'}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {activities && activities.map((activity) => (;
              <div key={activity && activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity && activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity && activity.created_by_profile?.display_name?.charAt(0) || '?'}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </AvatarFallback>;
                </Avatar>;
                <div className="space-y-1">;
                  <div className="flex items-center space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )}
                  </p>;
                </div>;
              </div>;
            ))}
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </CardContent>;
      </Card>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    // Check condition
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
if ( {) {
  $2
}
      fetch_activities ();
    }
  }, [project_id]);
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
