 export function ActiveProjectsCard () {;
  const { ;
  projects, isLoading ;
 } = useProjects ();
const [activeProjects, setActiveProjects] = useState<Project[]> ([]);
useEffect () => {;
  if (projects && !isLoading) {;
  const active = projects.filter (p => ['offer acceptedin progress'
</div> </CardContent> </Card>) ;"}if (activeProjects.length = = 0) {'";"  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> 