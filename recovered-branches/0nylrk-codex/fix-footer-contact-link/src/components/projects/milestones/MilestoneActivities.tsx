
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
  milestoneid: string,
  userid: string,
  action: string,
  previousstatus: string | null,
  newstatus: string,
  comment: string | null,
  createdat: string,
  milestone: {
    title: string
  },
  createdby_profile: {
    displayname: string,
    avatarurl: string | null
  }
}

export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  useEffect_(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true),
        
        const { data, error} = await supabase
          .from('milestoneactivities')
          .select(`
            *,
            milestone: milestoneid(title),
            createdby_profile:profiles!userid(displayname, avatarurl)
          `)
          .eq('projectid', projectId)
          .order('createdat', { ascending: false }),
        if (error) throw error,
        
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
  function getActivityDescription(activity: Activity): string {switch (activity.action) {
      case 'created':
        return 'created a new milestone',
      case 'statuschanged':
        return `changed status from ${activity.previousstatus || 'none'} to ${activity.newstatus}`,      case 'updated':
        return 'updated milestone details',
      case 'deliverableadded':
        return 'added a deliverable',
      default:
        return activity.action.replace(/_/g, ' ')
    }
  }

  if (isLoading) {
    return (
      <div className=&quot;space-y-4&quot;>
        {[1, 2, 3].map((i) => (          <Card key={i}>
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

  if (activities.length === 0) {return (
      <Card>
        <CardContent className=&quot;p-6 text-center&quot;>
          <p className=&quot;text-muted-foreground py-8&quot;>No activity found for this project</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className=&quot;space-y-4&quot;>      <Card>
        <CardHeader>
          <CardTitle>Project Activity</CardTitle>
        </CardHeader>
        <CardContent className=&quot;p-6&quot;>
          <div className=&quot;space-y-6&quot;>
            {activities.map((activity) => (
              <div key={activity.id} className=&quot;flex items-start space-x-4&quot;>
                <Avatar className=&quot;h-10 w-10&quot;>
                  <AvatarImage src={activity.createdby_profile?.avatarurl || ''} alt=&quot;User&quot; />                  <AvatarFallback>
                    {activity.createdby_profile?.displayname?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className=&quot;space-y-1&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <span className=&quot;font-medium&quot;>{activity.createdby_profile?.displayname}</span>
                    <span className=&quot;text-muted-foreground text-sm&quot;>
                      {getActivityDescription(activity)}
                    </span>
                    <span className=&quot;text-muted-foreground text-xs&quot;>
                      {format(new Date(activity.createdat), 'MMM d, yyyy h:mm a')}
                    </span>
                  </div>
                  <p className=&quot;text-sm&quot;>
                    <span className=&quot;font-medium&quot;>{activity.milestone?.title}</span>
                    {activity.comment && (
                      <span className=&quot;ml-2 text-muted-foreground&quot;>&quot;{activity.comment}&quot;</span>                    )}
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
