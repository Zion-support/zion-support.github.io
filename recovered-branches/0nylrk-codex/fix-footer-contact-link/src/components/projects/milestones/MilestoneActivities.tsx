<<<<<<< HEAD
import {supabase} from '@/integrations / supabase / client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {format} from 'date - fns';
import {Skeleton} from '@/components / ui / skeleton';

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface MilestoneActivitiesProps {
  project_id: string;
}
interface Activity {

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {supabase} from '@/integrations / supabase / client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {format} from 'date - fns';
import {Skeleton} from '@/components / ui / skeleton';

interface MilestoneActivitiesProps {
  project_id: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
interface Activity {

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {;
    }
    async function fetchActivities() {;
      }
      try {;
        }
        setIsLoading(true);
          .from('milestone_activities');'
          .select(`;`            *,;
            "milestone":milestone_id(title),;
            "created_by_profile":profiles!user_id(display_name, avatar_url);
          `);`          .eq('project_id', projectId);'
          .order('created_at', { "ascending": false }),;'
        if (error) throw error;

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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    title: string},
=======
>>>>>>> origin/chore/fix-lint-and-merge
  created_by_profile: {
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    title: string
  }
  created_by_profile: {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    display_name: string

    avatar_url: string | null
  }
}
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    display_name: string

    avatar_url: string | null
  }
}
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
      }
    }
    if (projectId) {
      fetchActivities()
    }
  }, [projectId]),
=======
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { format } from 'date-fns',;
import { Skeleton } from '@/components/ui/skeleton',;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
      } catch (err) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        console.error ('Error fetching milestone activities:', err);
      } finally {}
        setIsLoading (false);
      }
    }
<<<<<<< HEAD

import {Skeleton} from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {;
  projectId: string;
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
        setIsLoading (false);
      }
    }'
        return 'updated milestone details';'
      case 'deliverable_added':;'
        return 'added a deliverable';
      default:;

  if (isLoading) {;

    }
  }

  if (isLoading) {}
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

=======
<<<<<<< HEAD

=======
import {supabase} from '@/integrations/supabase/client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {format} from 'date-fns';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
    title: string;
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
          .eq('project_id', projectId);
          .order('created_at', { ascending: false }),;

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        if (error) throw error;

        setActivities(data || []);
      } catch (err) {;
        console && console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);

      }
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
        setIsLoading (false);
      }
    }'
        return 'updated milestone details';'
      case 'deliverable_added':;'
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return 'updated milestone details';
      case 'deliverable_added':;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return 'added a deliverable';
      default:;

  if (isLoading) {;

<<<<<<< HEAD
    }
  }

  if (isLoading) {}
=======
        return activity.action.replace(/_/g, ' ');


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }

        return activity.action.replace(/_/g, ' ');
    }
  }

<<<<<<< HEAD
    }

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
=======
  if (isLoading) {
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Card key={i}>"
            <CardContent className="p-6">"
              <div className="flex items-center space-x-4">"
                <Skeleton className="h-10 w-10 rounded-full" />"
                <div className="space-y-2">"
                  <Skeleton className="h-4 w-40" />"
                  <Skeleton className="h-4 w-60" />
<<<<<<< HEAD
=======
                </div>
              </div>
            </CardContent>

        return activity.action.replace(/_/g, ' ');

    }
  }

    }

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>"
            <CardContent className="p-6">"
              <div className="flex items-center space-x-4">"
                <Skeleton className="h-10 w-10 rounded-full" />"
                <div className="space-y-2">"
                  <Skeleton className="h-4 w-40" />"
                  <Skeleton className="h-4 w-60" />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (activities.length === 0) {
<<<<<<< HEAD
=======
        }
        return activity && activity.action.replace(/_/g, ' ');'
    }
  }
  if (isLoading) {;
}
return (;
import React, { useState, useEffect } from 'react';'
import { supabase } from '@/integrations/supabase/client';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;'
import { format } from 'date-fns',;'
import { Skeleton } from '@/components/ui/skeleton',;'
;
interface MilestoneActivitiesProps {;
  }
  "projectId":string;
}
;
interface Activity {;
  }
  "id":string,;
  "milestone_id":string,;
  "user_id":string,;
  "action":string,;
  "previous_status":string | null,;
  "new_status":string,;
  "comment":string | null,;
  "created_at":string,;
  "milestone":{;
    }
    "title":string;
  },;
  "created_by_profile":{;
    }
    "display_name":string,;
    "avatar_url":string | null;
  },;
}
;
export function MilestoneActivities() {;
  }
  const [activities, setActivities] = useState<Activity[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    }
    async function fetchActivities() {;
      }
      try {;
        }
        setIsLoading(true),;
        ;
          .from('milestone_activities');'
          .select(`;`            *,;
            "milestone":milestone_id(title),;
            "created_by_profile":profiles!user_id(display_name, avatar_url);
          `);`          .eq('project_id', projectId);'
          .order('created_at', { "ascending":false }),;'
;
        if (error) throw error,;
        ;
        setActivities(data || []),;
      } catch (err) {;
        }
        console.error('Error fetching milestone "activities":', err),;'
      } finally {;
        }
        setIsLoading(false),;
      }
    }
;
    if (projectId) {;
      }
      fetchActivities(),;
    }
  }, [projectId]),;
;
  function getActivityDescription("activity":Activity):string {;
    }
    switch (activity.action) {;
      }
      case 'created':;'
        return 'created a new milestone',;'
      case 'status_changed':;'
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`,;`
      case 'updated':;'
        return 'updated milestone details',;'
      case 'deliverable_added':;'
        return 'added a deliverable',;'
      "default":;
        return activity.action.replace(/_/g, ' '),;'
    }
  }
;
  if (isLoading) {;
    }
    return (;
      <div className="space-y-4">;"
=======

    return ("
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;

    return (
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="space-y-4">;
>>>>>>> origin/chore/fix-lint-and-merge
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

          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;

=======
<<<<<<< HEAD

          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
=======
<<<<<<< HEAD
  if (activities && activities.length === 0) {;
    return (
    ),;
  }
;
  if (activities.length === 0) {;
    return (;
=======
    );
  }


  if (activities && activities.length === 0) {;

    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card>;
        <CardContent className="p-6 text-center">;
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    ),;
  }
;
  return (;
=======
    );
  }
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
<<<<<<< HEAD
            {activities.map((activity) => (;
              <div key={activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity.created_by_profile?.display_name?.charAt(0) || '?'}
=======
            {activities && activities.map((activity) => (;
              <div key={activity && activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity && activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity && activity.created_by_profile?.display_name?.charAt(0) || '?'}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </AvatarFallback>;
                </Avatar>;
                <div className="space-y-1">;
                  <div className="flex items-center space-x-2">;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    )}
                  </p>;
                </div>;
              </div>;
            ))}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </Card>;
    </div>;

}
      fetch_activities ();
    }
  }, [project_id]);

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
=======
=======
<<<<<<< HEAD
  if (activities.length === 0) {
>>>>>>> merged-prs-20250907-203621
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground py-8">No activity found for this project</p>
        </CardContent>
      </Card>
    )
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </CardContent>;
      </Card>;
    </div>;
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
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    // Check condition
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
