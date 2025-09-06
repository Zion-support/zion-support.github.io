 export function AnalyticsSummary () {
  const {
  data: stats, isLoading 
}= useQuery ({
  queryKey: ['analytics-summary'];
queryFn: async () => {
  data: pageViewsData, error: pageViewsError 
}= await supabase .from ('analytics events') .select ('count') .eq ('event typepage view') .single ();
if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
//Get unique visitors (by counting distinct user IDs) const {
  data: uniqueVisitorsData, error: uniqueVisitorsError 
}= await supabase .from ('analytics events') .select ('user id') .eq ('event typepage view') .is ('user idnot.null');
if (uniqueVisitorsError) throw uniqueVisitorsError;
//Get conversion count const {
  data: conversionsData, error: conversionsError 
}= await supabase .from ('analytics events') .select ('count') .eq ('event typeconversion') .single ();
if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;
.from ('analytics events') .select ('created at') .order ('created at', {
  ascending: false 
}) .limit (1) .single ();
if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;
};
refetchInterval: 300000, //Refetch every 5 minutes 
});
//Calculate conversion rate const conversionRate = stats && stats.totalPageViews > 0 ? ( (stats.conversions / stats.totalPageViews) * 100) .toFixed (2) : '0.00';
return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" > <StatCard) : stats?.lastUpdated ? (formatDistanceToNow (stats.lastUpdated, {
  addSuffix: true 
}) ) : 'Never' 
}/> </div>) 
}</h4> </div> </div> </CardContent> </Card>) 
}