 interface HiringAnalyticsProps {
  jobId?: string 
}export function HiringAnalytics ({
  jobId 
}: HiringAnalyticsProps) {
  const {
  applications, isLoading 
}= useJobApplications (jobId);
const [analyticsData, setAnalyticsData] = useState< {
  statusDistribution: any[];
timeToHire: number;
conversionRate: number;
funnelData: any[] 
}> ({
  statusDistribution: [];
timeToHire: 0;
conversionRate: 0;
funnelData: [] 
});
if (applications && applications.length > 0) {
  //Calculate status distribution avgTimeToHire = Math.round (totalDays / hiredApplications.length) 
}//Calculate conversion rate const conversionRate = hiredApplications.length > 0 ? Math.round ( (hiredApplications.length / applications.length) * 100) : 0;
//Funnel data 
}
}, [applications]);
<CardContent> <h3 className="text-lg font-semibold mb-2" >No data available</h3> <p className="text-muted-foreground mb-6" > You need applications to generate analytics </p> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Application Status Distribution</CardTitle> </CardHeader> <CardContent className="h-64" > <ResponsiveContainer width="100%" height="100%" > <PieChart> <Pie > {
  analyticsData.statusDistribution.map ( (entry, index) => (<Cell key= {
  `cell-$ {
  index 
}` 
}fill= {
  COLORS[index % COLORS.length] 
}/>) ) 
}</Pie> <Tooltip /> </PieChart> </ResponsiveContainer> </CardContent> </Card> {
  /* Time to Hire */ 
}<Card> <CardHeader> <CardTitle>Time to Hire</CardTitle> </CardHeader> </div> <div className="text-sm text-muted-foreground mt-2" > Average days from application to hire </div> </CardContent> </Card> {
  /* Conversion Rate */ 
}<Card> <CardHeader> <CardTitle>Application Conversion Rate</CardTitle> </CardHeader> </div> <div className="text-sm text-muted-foreground mt-2" > Applications to hired ratio </div> </CardContent> </Card> <CardHeader> <CardTitle>Hiring Funnel</CardTitle> </CardHeader> <CardContent className="h-80" > <ResponsiveContainer width="100%" height="100%" > <BarChart) ) 
}</Bar> </BarChart> </ResponsiveContainer> </CardContent> </Card> </div>) 
}