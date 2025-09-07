
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
</Project>
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
</Project>
            <BriefcaseIcon className="h-5 w-5 text-primary" />"
</BriefcaseIcon>
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
</CardContent>"
          <div className="space-y-2">"
</div>"
                className='h-16 animate-pulse bg-muted rounded'></div>            ))}'
          </div>;
        </CardContent>;
      </Card>;'
  }          <div className="space-y-2">;"
</div>"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>"
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
</Project>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;"
</BriefcaseIcon>
            <span>Active Projects</span>;

          </CardTitle>;
          <CardDescription />Your ongoing work</CardDescription>;
        </CardHeader>;

        <CardContent>;
</CardContent>"
          <div className="space-y-2">;"
</div>"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;"
          </div>;
        </CardContent>;
      </Card>;
      <Card>
</Card>
        <CardHeader>
</CardHeader>
"
          <CardTitle className="flex items-center gap-2">"
</CardTitle>"
            <BriefcaseIcon className="h-5 w-5 text-primary" />"
</BriefcaseIcon>
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className='flex items-center gap-2'>;'
</CardTitle>'
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>;'
</BriefcaseIcon>
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;'
        </CardHeader>          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;"
</BriefcaseIcon>
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;"
        <CardContent className='text-center py-6'>;'
</CardContent>'
          <p className='text-muted-foreground mb-2'>;'
</p>
          </p>;'
          <Button variant='outline' asChild>;'
</Button>'
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text-center py-6">;""
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;''
          <Button variant="outline" asChild>;"
</Button>"
            <Link href="/jobs">Find Opportunities</Link>;"
        </CardContent>;
      </Card>;"
        <CardContent className="text-center py-6">"
</CardContent>"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>''
          <Button variant="outline" asChild>"
</Button>"
            <Link href="/jobs">Find Opportunities</Link>"
          </Button>


        </CardContent>
      </Card>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className='flex items-center gap-2'>;'
</CardTitle>'
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;'
</BriefcaseIcon>
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;'
      <CardContent className='space-y-4'>  ;'
</CardContent>
    <Card>
</Card>
      <CardHeader>
</CardHeader>'
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <BriefcaseIcon className="h-5 w-5 text-primary" />"
</BriefcaseIcon>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>"
      <CardContent className='space-y-4'>'
</CardContent>'
          <div key={project.id} className='border rounded-md p-3'>'
</div>'
            <div className='flex justify-between items-start mb-2'>'
</div>'
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>'
              <Badge;
                variant={'
                  project.status === 'in_progress' ? 'default' : 'outline''
                }
                className={'
                  project.status === 'in_progress'''
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'''
                    : ''''
                  : 'In Progress'}'
              </Badge>;
            </div>;'
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;'
</div>'
              <Clock className='h-3 w-3' />;'
</Clock>
              <span>;
</span>
              </span>;
            </div>;'
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project && project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;"
</Button>
              <Link href={`/project/${project && project.id}`}>View Project</Link>;
            </Button>;
          </div>;
      </CardContent>;
        <CardFooter>;
</CardFooter>"
          <Button variant='ghost' className='w-full' asChild>;'
</Button>'
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w-full" asChild>;""
            <Link href="/projects">View All Projects</Link>;"
          </Button>;
        </CardFooter>;
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  useEffect (() => {    // Check condition;
if ( {) {
  $2;
}
      const active = projects;"
        .filter (p => ['offer_accepted', 'in_progress'].includes (p.status));'
        .slice (0, 3); // Limit to 3 most recent projects;
      setActiveProjects (active);
    }
  }, [projects, is_loading]);
  // Check condition;
if ( {) {
  $2;
}
    return (
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>'
          <CardTitle className='flex items - center gap - 2'>;'
</CardTitle>'
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap - 2">;"
</BriefcaseIcon>"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"
</BriefcaseIcon>
            <span > Active Projects</span>;

          </CardTitle>;
          <CardDescription />Your ongoing work</CardDescription>;
        </CardHeader>;

        <CardContent>;
</CardContent>"
          <div className='space - y-2'>;'
</div>
              <div;
                key={idx}'
                className='h - 16 animate - pulse bg - muted rounded';')
              ></div>            ))}
          </div>;
        </CardContent>;
      </Card>);'
  }          <div className="space - y-2">;"
</div>"
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}"
          </div>;
        </CardContent>;
      </Card>);
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className='flex items - center gap - 2'>;'
</CardTitle>'
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>;'
</BriefcaseIcon>
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;'
        </CardHeader>          <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"
</BriefcaseIcon>
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;"
        <CardContent className='text - center py - 6'>;'
</CardContent>'
          <p className='text - muted - foreground mb - 2'>;'
</p>
          </p>;'
          <Button variant='outline' as_child>;'
</Button>'
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text - center py - 6">;""
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;''
          <Button variant="outline" as_child>;"
</Button>"
            <Link href="/jobs">Find Opportunities</Link>;"
        </CardContent>;
      </Card>);
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className='flex items - center gap - 2'>;'
</CardTitle>'
          <BriefcaseIcon className='h - 5 w - 5 text - primary' />          <span > Active Projects</span>;'
</BriefcaseIcon>
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;'
      <CardContent className='space - y-4'>;'
</CardContent>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>'
        <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
          <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"
</BriefcaseIcon>
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;"
      <CardContent className='space - y-4'>;'
</CardContent>'
          <div key={project.id} className='border rounded - md p - 3'>;'
</div>'
            <div className='flex justify - between items - start mb - 2'>;'
</div>'
              <h3 className='font - medium text - sm'>{project.job?.title}</h3>;'
              <Badge;
                variant={'
                  project.status === 'in_progress' ? 'default' : 'outline';'
                }
                className={'
                  project.status === 'in_progress';''
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';''
                    : '';''
                }          <div key={project.id} className="border rounded - md p - 3">;"
</Badge>"
            <div className="flex justify - between items - start mb - 2">;"
</div>"
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;"
              <Badge;"
                variant = {project.status === "in_progress" ? "default" : "outline", }""
                class_name = {project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : "", }"
              >;
</Badge>
              </Badge>;
            </div>;"
            <div className='flex items - center text - xs text - muted - foreground gap - 2'>;'
</div>'
              <Clock className='h - 3 w - 3' />;'
</Clock>
              <span>;
</span>
              </span>;
            </div>;'
            <Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;"
</Button>
              <Link href={`/project/${project.id}`}>View Project</Link>;
            </Button>;
          </div>))}
      </CardContent>;
        <CardFooter>;
</CardFooter>"
          <Button variant="ghost" className="w-full" asChild>;"
</Button>"
            <Link href="/projects">View All Projects</Link>;"
          </Button>;
        </CardFooter>;
    </Card>;"

