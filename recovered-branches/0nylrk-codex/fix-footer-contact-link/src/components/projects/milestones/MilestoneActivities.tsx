  id: string
  milestone_id: string
  user_id: string
  action: string
  previous_status: string | null
  new_status: string
  comment: string | null
  created_at: string

  milestone: {
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



export function MilestoneActivities({ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);


            *;
            milestone: milestone_id(title)
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('project_id', projectId)
          .order('created_at', { ascending: false })
        if (error) throw error;
        setActivities(data |[])

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

  if (activities && activities.length === 0) {;

    return (
=======
if ( {) {
  $2
}
      fetch_activities ();
    }
  }, [project_id]);
;