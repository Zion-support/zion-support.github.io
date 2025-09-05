 useEffect ( () => {
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