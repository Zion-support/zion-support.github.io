

  onSelectJob?: (jobId: string, jobTitle: string) => void;
}

pr-12325
export function JobsList(): any ({ filter, onSelectJob }: JobsListProps) {;

  const { user } = useAuth();


interface JobsListProps {
  filter?: JobStatus,
  onSelectJob?: (jobId: string, jobTitle: string) => void
}


  useEffect(() => {

      if (!user) return;
      if (!user) return,

export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  useEffect(() => {
    const fetchJobs = $2;


      try {

        let query = supabase
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false })
        if (filter) {

      try {}
        let query = supabase"
          .from("jobs")"
          .select("*")"
          .eq("client_id", user.id)"
          .order("created_at", { ascending: false })
        if (filter) {"

          query = query.eq("status", filter)



  useEffect(() => {;
    const fetchJobs = async () => {;
      if (!user) return;


        }
        const { data, error } = await query;
        if (error) throw error;

        const { data, error } = await query,

        if (error) throw error,

        setJobs(data as Job[])
      } catch (error) {"
        console.error("Error fetching jobs:", error)
      } finally {}
        setIsLoading(false)
      }



    },

    fetchJobs()
  }, [user, filter]),



          }
        </p>"
        <Button asChild className="mt-4">"

          <Link to="/post-job">Post Your First Job</Link>
        </Button>
      </div>
    )
  }

        return "bg-gray-100 text-gray-800"
    }

  },



    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <Card;
          key={job.id}
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${"
            onSelectJob ? "cursor-pointer" : ""`
          }`}
          onClick={() => onSelectJob?.(job.id, job.title)}
        >"
          <CardHeader className="p-4">"
            <div className="flex justify-between items-start">
              <div>"
                <CardTitle className="text-xl">{job.title}</CardTitle>"
                <CardDescription className="mt-1">"
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>"
                {job.status.replace("_", " ").toUpperCase()}
              </Badge>
            </div>
          </CardHeader>"
          <CardContent className="p-4 pt-0">"
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
              {job.description}
            </p>"
            <div className="flex flex-wrap gap-1 mt-2">
              {job.skills.slice(0, 3).map((skill, index) => ("
                <Badge key={index} variant="outline" className="text-xs">


          }

        </p>;
        <Button asChild className="mt-4">;
          <Link to="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;
      case "new": return "bg-blue-100 text-blue-800";
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800";
      case "filled":;
        return "bg-green-100 text-green-800";
    ),;
  }
;
  const getStatusColor = (status:JobStatus) => {;
    switch (status) {;
      case "new":return "bg-blue-100 text-blue-800",;
    );
  }


  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;

      case "new": return "bg-blue-100 text-blue-800";
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800";
      case "filled":;

        return "bg-green-100 text-green-800";

    ),;
    );
  }
          }

        return "bg-gray-100 text-gray-800";
      default:;"
        return "bg-gray-100 text-gray-800";
    }
  };
  return (;"
    <div className="grid gap-6 md:grid-cols-2">;
      {jobs.map((job) => (;
        <Card;
          key={job.id} ;`
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${;"
            onSelectJob ? "cursor-pointer" : "";`

          }`}
          onClick={() => onSelectJob?.(job.id, job.title)}
        >"
          <CardHeader className="p-4">"
            <div className="flex justify-between items-start">
              <div>"
                <CardTitle className="text-xl">{job.title}</CardTitle>"
                <CardDescription className="mt-1">"
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>"
                {job.status.replace("_", " ").toUpperCase()}
              </Badge>
            </div>
          </CardHeader>"
          <CardContent className="p-4 pt-0">"
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
              {job.description}
        setJobs(data as Job[]);
      } catch (error) {;"
        console && console.error("Error fetching jobs:", error);
      } finally {;
        setIsLoading(false);
      }
    return ("
      <div className="flex justify-center items-center p-8">;"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
          }
        </p>;"
        <Button asChild className="mt-4">;"
          <Link to="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
    );
  }"
      case "new": return "bg-blue-100 text-blue-800";"
      case "in_progress":;"
        return "bg-yellow-100 text-yellow-800";"
      case "filled":;"
        return "bg-green-100 text-green-800";
    }
  }


              </Badge>;
            </div>;
          </CardHeader>;"
          <CardContent className="p-4 pt-0">;"
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;

              {job && job.description}
            </p>;"
            <div className="flex flex-wrap gap-1 mt-2">;

                <Badge key={index} variant="outline" className="text-xs">;

                  {skill}
                </Badge>;
              ))}
              {job && job.skills.length > 3 && (;
                <Badge variant="outline" className="text-xs">;
                  +{job && job.skills.length - 3} more;
                </Badge>;
              )}
            </div>;
            <div className="mt-3 text-sm">;
              <span className="font-medium">Budget:</span> ${job && job.budget.min} - ${job && job.budget.max}
            </div>;
            <div className="mt-1 text-sm">;
              <span className="font-medium">Deadline:</span> {format(new Date(job && job.deadline), "PPP")}
            </div>;
          </CardContent>;
          <CardFooter className="flex justify-between p-4 pt-0 gap-2">;
            <Button variant="outline" size="sm" asChild>;
              <Link to={`/jobs/${job && job.id}`}>;


