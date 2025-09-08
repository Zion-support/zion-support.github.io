





  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type



    loadInterviews()
  }, []);
  // Filter interviews based on status and date
  const now = new Date();
  const today = startOfDay(now);
  const upcomingInterviews = interviews
    .filter((interview) => {




    const grouped: Record<string Interview[]> = {},
    


      if (!grouped[dateKey]) {
        grouped[dateKey] = []




                  {upcomingInterviews.length}
                </span>


              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)



              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)



              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)

      <SEO
        title="Interviews | Zion AI Marketplace" 
        description="Manage your scheduled interviews with clients and talent" 
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Interviews</h1>;
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>;
          </div>;
        </div>;
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">;
          <TabsList className="mb-6">;
            <TabsTrigger value="upcoming" className="flex items-center">;
              <Clock className="h-4 w-4 mr-2" />;
              Upcoming;
              {upcomingInterviews && upcomingInterviews.length > 0 && (;
                <span className="ml-2 bg-primary rounded-full px-2 py-0 && 0.5 text-xs">;
                  {upcomingInterviews && upcomingInterviews.length}
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value="pending">;
              Pending;
              {pendingInterviews && pendingInterviews.length > 0 && (;
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0 && 0.5 text-xs">;
                  {pendingInterviews && pendingInterviews.length}
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value="past">Past</TabsTrigger>;
          </TabsList>;
          <TabsContent value="upcoming" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) : upcomingInterviews && upcomingInterviews.length > 0 ? (;
              renderInterviewGroups(upcomingGrouped);
            ) : (;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>;
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>;
              </div>;
            )}
          </TabsContent>;
          <TabsContent value="pending" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) : pendingInterviews && pendingInterviews.length > 0 ? (;
              renderInterviewGroups(pendingGrouped);
            ) : (;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>;
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>;
              </div>;
            )}
          </TabsContent>;
          <TabsContent value="past" className="space-y-6">;
            {isLoading ? (;
              <div className="flex justify-center py-12">;
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>;
              </div>;
            ) : pastInterviews && pastInterviews.length > 0 ? (;
              renderInterviewGroups(pastGrouped);
            ) : (;
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">;
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />;
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>;
                <p className="text-muted-foreground">Your interview history will appear here.</p>;
              </div>;
            )}



;

    </>);
}
export default /**
 * Interviews - Function description
 */
function Interviews() {
  return (
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>);
}




