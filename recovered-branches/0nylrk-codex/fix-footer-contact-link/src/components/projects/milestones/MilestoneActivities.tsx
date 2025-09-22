
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
  milestone: {
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  milestone: {

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


<<<<<<< HEAD
export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);


<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    title: string
=======
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

    title: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======


interface MilestoneActivitiesProps {}
  project_id: string;
}
interface Activity {}
  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status: string | null;
  new_status: string;
  comment: string | null;
  created_at: string;
  milestone: {}
export function MilestoneActivities() { return null; }
  useEffect(() => {}
    async function fetchActivities() {}
      try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

    title: string;
  }
  created_by_profile: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

      } catch (err) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        console.error ('Error fetching milestone activities:', err);
      } finally {}
        setIsLoading (false);
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
'
import {supabase} from '@/integrations/supabase/client';'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';'
import {format} from 'date-fns';'
=======

import {supabase} from '@/integrations/supabase/client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {format} from 'date-fns';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Skeleton} from '@/components/ui/skeleton';
interface MilestoneActivitiesProps {;
  projectId: string;
}
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    title: string
};  created_by_profile: {;
=======
    title: string;

  created_by_profile: {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    title: string;
  };
},;
  created_by_profile: {;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    title: string
};  created_by_profile: {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    display_name: string,;

  milestone: {;,
  title: string;
  };
  created_by_profile: {;,
  display_name: string,;
    avatar_url: string | null;

  }
}

<<<<<<< HEAD
export function MilestoneActivities(): any ({ projectId }: MilestoneActivitiesProps) {;

<<<<<<< HEAD
  useEffect(() => {;
    async function fetchActivities() {;
      try {;
        setIsLoading(true);

        const { data, error } = await supabase;
          .from('milestone_activities');
=======
        const { data, error } = await supabase;'
          .from('milestone_activities');`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          .select(`;
            *,;
            milestone:milestone_id(title),;
            created_by_profile:profiles!user_id(display_name, avatar_url);`
          `);'
          .eq('project_id', projectId);'
          .order('created_at', { ascending: false }),;

<<<<<<< HEAD
        if (error) throw error;

        setActivities(data || []);
      } catch (err) {;
        console && console.error('Error fetching milestone activities:', err);
      } finally {;
        setIsLoading(false);
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      }
    }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (projectId) {;
      fetchActivities();
    }

  }, [projectId]),;
  function getActivityDescription(activity: Activity): string {;
    switch (activity.action) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
if (projectId) {;
      fetchActivities();
    }
  }, [projectId]);
  function getActivityDescription(): any (activity: Activity): string {;
    switch (activity && activity.action) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      case 'created':;
        return 'created a new milestone',;
      case 'status_changed':;
=======

'
      case 'created':;'
        return 'created a new milestone',;'
      case 'status_changed':;'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return `changed status from ${activity && activity.previous_status || 'none'} to ${activity && activity.new_status}`;
        if (error) throw error,;
        setActivities(data || []);
      } catch (err) {;'
        console.error('Error fetching milestone activities:', err);
      } finally {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        setIsLoading(false);

      } catch (err) {'
        console.error('Error fetching milestone activities:', err)
<<<<<<< HEAD
      } finally {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
=======
        setIsLoading(false);      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        setIsLoading(false);      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching milestone activities:', err)
      } finally {
      }
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        setIsLoading(false);      }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    if (projectId) {}
      fetchActivities()
    }
  }, [projectId]);
<<<<<<< HEAD
  function getActivityDescription(activity: Activity): string {}
    switch (activity.action) {'
=======

  function getActivityDescription(activity: Activity): string {
    switch (activity.action) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
return activity.action.replace(/_/g, ' ');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </Card>

  if (isLoading) {;
'
        return activity.action.replace(/_/g, ' ');


    }
  }
'
=======
          </Card>
  if (isLoading) {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return activity.action.replace(/_/g, ' ');

    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        return activity.action.replace(/_/g, ' ');
    }
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          </Card>    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }

  if (isLoading) {
    return (
=======
  if (isLoading) {}
    return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
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
  if (activities.length === 0) {
        return activity && activity.action.replace(/_/g, ' ');
    }
  }
  if (isLoading) {;
    return (
=======
  if (activities.length === 0) {'
        return activity && activity.action.replace(/_/g, ' ');
    }
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    return ("
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
<<<<<<< HEAD
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="flex items-center space-x-4">;
                <Skeleton className="h-10 w-10 rounded-full" />;
                <div className="space-y-2">;
                  <Skeleton className="h-4 w-40" />;
                  <Skeleton className="h-4 w-60" />;
      </div>
  const [activities, setActivities] = useState<Activity[]>([]),;
</Activity>"
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
        ))}
      </div>;
  if (activities && activities.length === 0) {;
    return (
    ),;
  }

  if (activities.length === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="flex items-center space-x-4">;
                <Skeleton className="h-10 w-10 rounded-full" />;
                <div className="space-y-2">;
                  <Skeleton className="h-4 w-40" />;
<<<<<<< HEAD
=======
          <Card key={i}>;"
            <CardContent className="p-6">;"
              <div className="flex items-center space-x-4">;"
                <Skeleton className="h-10 w-10 rounded-full" />;"
                <div className="space-y-2">;"
                  <Skeleton className="h-4 w-40" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <Skeleton className="h-4 w-60" />;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
<<<<<<< HEAD



<<<<<<< HEAD
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
=======
    );
  }

  if (activities && activities.length === 0) {;

    return (
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
  if (activities.length === 0) {;
    return (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Card>;
        <CardContent className="p-6 text-center">;
=======
      <Card>;"
        <CardContent className="p-6 text-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </Card>;
"
=======
      </Card>;
    );
  }
  return (

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
),;
  }
;
  return (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;
<<<<<<< HEAD
        </CardHeader>;"
        <CardContent className="p-6">;"
          <div className="space-y-6">;

                  </AvatarFallback>;
                </Avatar>;"
                <div className="space-y-1">;"
                  <div className="flex items-center space-x-2">;

                      {getActivityDescription(activity)}
                    </span>;"
                    <span className="text-muted-foreground text-xs">;'
                      {format(new Date(activity && activity.created_at), 'MMM d, yyyy h:mm a')}
                    </span>;
                  </div>;"
                  <p className="text-sm">;"
                    <span className="font-medium">{activity && activity.milestone?.title}</span>;
                    {activity && activity.comment && (;"
                      <span className="ml-2 text-muted-foreground">"{activity && activity.comment}"</span>;



=======
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
            {activities && activities.map((activity) => (;
              <div key={activity && activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity && activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity && activity.created_by_profile?.display_name?.charAt(0) || '?'}
{activities.map((activity) => (;
              <div key={activity.id} className="flex items-start space-x-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={activity.created_by_profile?.avatar_url || ''} alt="User" />;
                  <AvatarFallback>;
                    {activity.created_by_profile?.display_name?.charAt(0) || '?'}
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    )}
                  </p>;
                </div>;
              </div>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
          </div>;
        </CardContent>;
<<<<<<< HEAD
=======
      </Card>;        </CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </Card>;        </CardContent>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          </div>;
        </CardContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      </Card>;        </CardContent>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </Card>;
    </div>;
<<<<<<< HEAD
  );
}
    // Check condition
if ( {) {
  $2
=======

    // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
      fetch_activities ();
    }
  }, [project_id]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const [activities, setActivities] = useState<Activity[]>([]),;
      <div className="space-y-4">;"
          <Card key={i}>;
            <CardContent className="p-6">;"
              <div className="flex items-center space-x-4">;"
                <Skeleton className="h-10 w-10 rounded-full" />;"
                <div className="space-y-2">;"
                  <Skeleton className="h-4 w-40" />;"
                  <Skeleton className="h-4 w-60" />;"

                </div>;
      </div>;"

      <Card>;
        <CardContent className="p-6 text-center">;"
          <p className="text-muted-foreground py-8">No activity found for this project</p>;"
      ;"

        <CardHeader>;

          <CardTitle>Project Activity;
          <div className="space-y-6">;"
              <div key={activity && activity.id} className="flex items-start space-x-4">;"
                <Avatar className="h-10 w-10">;"
                  <AvatarImage src={activity && activity.created_by_profile?.avatar_url || } alt="User" />;"

                  <AvatarFallback>;

                <div className="space-y-1">;"
                  <div className="flex items-center space-x-2">;"
                    <span className="font-medium">{activity && activity.created_by_profile?.display_name}</span>;""
                    <span className="text-muted-foreground text-sm">;"
</span>
                    </span>;"
                    <span className="text-muted-foreground text-xs">;"
                    </span>;
                  <p className="text-sm">;"
</p>"
                    <span className="font-medium">{activity && activity.milestone?.title}</span>;""
                      <span className="ml-2 text-muted-foreground">"{activity && activity.comment}"</span>;"
                  </p>;
    </div>;"`;
pr-12325
                </div>;
              </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
