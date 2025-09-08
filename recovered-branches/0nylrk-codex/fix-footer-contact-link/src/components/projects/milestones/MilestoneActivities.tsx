
<<<<<<< HEAD

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

  }
<<<<<<< HEAD
=======
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
  created_by_profile: {

=======
        setActivities(data || []);
      } catch (err) {;
        }
        console && console.error('Error fetching milestone "activities":', err);'
      } finally {;
        }
        setIsLoading(false);

      }
    }
    if (projectId) {;
      }
      fetchActivities();
    }

  }, [projectId]),;
  function getActivityDescription("activity": Activity): string {;
    }
    switch (activity.action) {;
      }
      case 'created':;'
        return 'created a new milestone',;'
      case 'status_changed':;'
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;`        if (error) throw error,;
        setActivities(data || []);
      } catch (err) {;
        }
        console.error('Error fetching milestone "activities":', err);'
      } finally {;
        }
        setIsLoading(false);      }
import React, { useState, useEffect } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { format  } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {
  projectId: string}

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

  created_by_profile: {


    display_name: string

    avatar_url: string | null
  }
}
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchActivities() {
      try {

        setIsLoading(true);
        const { data, error } = await supabase;
          .from('milestone_activities')
          .select(`

            *;
            milestone: milestone_id(title)
            created_by_profile:profiles!user_id(display_name, avatar_url)`
          `)'
          .eq('project_id', projectId)'
          .order('created_at', { ascending: false })
        if (error) throw error;
        setActivities(data |[])


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    title: string;
  }

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

<<<<<<< HEAD
      } catch (err) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        console.error ('Error fetching milestone activities:', err);
      } finally {}
        setIsLoading (false);
      }
    }

<<<<<<< HEAD
import {supabase} from '@/integrations/supabase/client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {format} from 'date-fns';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {Skeleton} from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {;
  projectId: string;
}
<<<<<<< HEAD




=======
interface MilestoneActivitiesProps {;
  projectId: string;
}
;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

    title: string;

        return 'updated milestone details';
      case 'deliverable_added':;
=======


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


<<<<<<< HEAD
        return activity.action.replace(/_/g, ' ');



    }
  }

        return activity.action.replace(/_/g, ' ');
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

        return activity.action.replace(/_/g, ' ');

    }
  }

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


<<<<<<< HEAD


=======
    return ("
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;

    return (
      <div className="space-y-4">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======


          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;

<<<<<<< HEAD
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    )}
                  </p>;
                </div>;
              </div>;
            ))}

<<<<<<< HEAD
=======

      </Card>;
    </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
          </div>;
        </CardContent>;
      </Card>;
    </div>;

  );
}


=======

    // Check condition
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

;


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
=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div className="space - y-4">;
        {[1, 2, 3].map ((i) => (
  milestone: {;,
  title: string;
  };
  created_by_profile: {;,
  display_name: string,;
    avatar_url: string | null;

export function MilestoneActivities(): any ({ projectId }: MilestoneActivitiesProps) {;

<<<<<<< HEAD

=======

      <div className="space-y-4">"

      </div>;"
      <div className="space-y-4">;"
</div>
          <Card key={i}>;
</Card>"
            <CardContent className="p-6">;"
</CardContent>"
              <div className="flex items-center space-x-4">;"
</div>"
                <Skeleton className="h-10 w-10 rounded-full" />;"
</Skeleton>"
                <div className="space-y-2">;"
</div>"
                  <Skeleton className="h-4 w-40" />;"
</Skeleton>"
                  <Skeleton className="h-4 w-60" />;"
</Skeleton>
                </div>;
              </div>;
            </CardContent>;
          </Card>;
      </div>;
      <Card>;
</Card>"
        <CardContent className="p-6 text-center">;"
</CardContent>"
          <p className="text-muted-foreground py-8">No activity found for this project</p>;"
        </CardContent>;
      </Card>;"
    <div className="space-y-4">;"
</div>
          <Card key={i}>
"
            <CardContent className="p-6">"
              <div className="flex items-center space-x-4">"
</div>"
                <Skeleton className="h-10 w-10 rounded-full" />"
                <div className="space-y-2">"
                  <Skeleton className="h-4 w-40" />"
                  <Skeleton className="h-4 w-60" />"

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
});
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
