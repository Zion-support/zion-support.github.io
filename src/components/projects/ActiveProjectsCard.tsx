
import Link from "next/link";

export function ActiveProjectsCard() {_const { projects, _isLoading} = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  
  useEffect__(() => {_if (projects && !isLoading) {
      const _active = projects.filter(p => 
        ['offer_accepted', _'in_progress'].includes(p.status)
      ).slice(0, _3); // Limit to 3 most recent projects
      setActiveProjects(active);}
  }, [projects, isLoading]);
  
  if (isLoading) {_return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[1, _2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (activeProjects.length === 0) {_return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link href="/jobs">Find Opportunities</Link>
          </Button>
        </CardContent>
      </Card>
    );}
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {_activeProjects.map(project => (
          <div key={project.id} className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">{_project.job?.title}</h3>
              <Badge 
                variant={_project.status === "in_progress" ? "default" : "outline"}
                className={_project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}
              >
                {_project.status === "offer_accepted" ? "Starting" : "In Progress"}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground gap-2">
              <Clock className="h-3 w-3" />
              <span>Started {_new Date(project.start_date).toLocaleDateString()}</span>
            </div>
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>
              <Link href={_`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
      </CardContent>
      {_activeProjects.length > 2 && (
        <CardFooter>
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
