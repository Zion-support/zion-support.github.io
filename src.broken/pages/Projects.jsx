import { Link  } from 'react-router-dom',
export default function Page() {
</Badge>
                    <span className="flex items - center gap-1 text-xs text-muted -foreground">
                      <Clock className="h-3 w-3"/>
                      Started {new Date(project.start_date) .toLocaleDateString () }
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted - foreground line - clamp -2">
                    {project.job?.description || "Project details"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/project/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>) ) }
          </div>) }
      </main>

    </>) }
    return < ProjectsContent />}
