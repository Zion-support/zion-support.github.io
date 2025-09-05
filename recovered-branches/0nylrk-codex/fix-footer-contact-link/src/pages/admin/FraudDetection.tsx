 //Import refactored components import {
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
FraudTabContent const [stats, setStats] = useState<FraudStats> ({
  total flags: 0;
pending flags: 0;
suspicious count: 0;
dangerous count: 0;
false positives: 0;
actioned count: 0 
});
//Fetch fraud flags const fetchFraudFlags = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase setFlags (data || []);
setFilteredFlags (data || []);
//Calculate stats 
}finally {
  setIsLoading (false) 
}
};
useEffect ( () => {
  fetchFraudFlags () 
}, []);
//Apply filters useEffect ( () => {
  let result = [...flags];
//Apply search filter if (searchQuery) {
  const query = searchQuery.toLowerCase ();
result = result.filter ( (flag) => flag.user email?.toLowerCase () .includes (query) || flag.content excerpt.toLowerCase () .includes (query) || flag.reason.toLowerCase () .includes (query) ) 
}//Apply status filter if (statusFilter) {
  result = result.filter ( (flag) => flag.status === statusFilter) 
}//Apply severity filter if (severityFilter) {
  result = result.filter ( (flag) => flag.severity === severityFilter) 
}//Apply content type filter if (contentTypeFilter) {
  result = result.filter ( (flag) => flag.content type === contentTypeFilter) 
}
}, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]);
}catch (error) {
  toast ({
  title: "Error", description: "Failed to update flag", variant: "destructive" 
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13 
}
};
const hasFilters = !! (searchQuery || statusFilter || severityFilter || contentTypeFilter);
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> </div> <div className=" mt-4 md:mt-0"> <Button > Refresh Data </Button> </div> </div> {
  /* Stats Cards */ 
}<FraudStatsCards stats= {
  stats 
}/> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Flags</TabsTrigger> <TabsTrigger value=" pending">Pending Review</TabsTrigger> <TabsTrigger value=" dangerous">Dangerous</TabsTrigger> <TabsTrigger value=" actioned">Actioned</TabsTrigger> </TabsList> <FraudFilters searchQuery= {
  searchQuery 
}setSearchQuery= {
  setSearchQuery 
}statusFilter= {
  statusFilter 
}setStatusFilter= {
  setStatusFilter 
}severityFilter= {
  severityFilter 
}setSeverityFilter= {
  setSeverityFilter 
}contentTypeFilter= {
  contentTypeFilter 
}setContentTypeFilter= {
  setContentTypeFilter 
}resetFilters= {
  resetFilters 
}/> {
  /* Flags Table */ 
}<Card> <CardContent className=" p-0"> <FraudFlagsTable flags= {
  filteredFlags 
}isLoading= {
  isLoading 
}hasFilters= {
  hasFilters 
}resetFilters= {
  resetFilters 
}onAction= {
  handleAction 
}/> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> </TabsContent> <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" /> </TabsContent> </Tabs> </div> </AppLayout>) 
}