
<<<<<<< HEAD

=======
filter?: JobStatus;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onSelectJob?: (jobId: string, jobTitle: string) => void;
}

pr-12325
export function JobsList(): any ({ filter, onSelectJob }: JobsListProps) {;

  const { user } = useAuth();

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface JobsListProps {
  filter?: JobStatus,
  onSelectJob?: (jobId: string, jobTitle: string) => void
}
<<<<<<< HEAD


=======
  const { user } = useAuth();

  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {


  useEffect(() => {}
    const fetchJobs = async () => {}
      if (!user) return,

export function JobsList({ filter, onSelectJob }: JobsListProps) {;
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
export function JobsList({ filter, onSelectJob }: JobsListProps) {

  const { user } = useAuth();

    const fetchJobs = async () => {
      if (!user) return;
      if (!user) return,  const { user } = useAuth();

  useEffect(() => {

    const fetchJobs = async () => {
      if (!user) return;
      if (!user) return,

export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth($2);
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  useEffect(() => {
    const fetchJobs = $2;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  useEffect(() => {

      if (!user) return;
      if (!user) return,

export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  useEffect(() => {
    const fetchJobs = $2;
<<<<<<< HEAD


=======
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true);

>>>>>>> origin/cursor/delete-old-data-records-6bba
      try {
        let query = supabase
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
          .order($2);
        if (filter) {
          query = query.eq("status", filter)
<<<<<<< HEAD



=======
        }


        }

>>>>>>> origin/cursor/delete-old-data-records-6bba
  useEffect(() => {;
    const fetchJobs = async () => {;
      if (!user) return;

<<<<<<< HEAD

        }
        const { data, error } = await query;
        if (error) throw error;

        const { data, error } = await query,

        if (error) throw error,

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        setJobs(data as Job[])
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },

    fetchJobs()
  }, [user, filter]),


<<<<<<< HEAD
=======
  if (isLoading) {;

    return (
      <div className="flex justify-center items-center p-8">;

        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

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


<<<<<<< HEAD

=======
  return ("
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <Card
          key={job.id}
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""
          }`}
          onClick={() => onSelectJob?.(job.id, job.title)}
        >
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="mt-1">
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>
                {job.status.replace("_", " ").toUpperCase()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {job.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs">
<<<<<<< HEAD


          }
=======
          query = query.eq("status", filter)          }
import { useState, useEffect } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { Job, JobStatus } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Edit, X, Eye } from "lucide-react",;
import { format } from "date-fns",;

import { Link } from "react-router-dom",;
interface JobsListProps {;
  filter?: JobStatus,;
  onSelectJob?: (jobId: string, jobTitle: string) => void;
}
;

  const { user } = useAuth(),;
  const [jobs, setJobs] = useState<Job[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const fetchJobs = async () => {;
      if (!user) return,;
      try {;

          query = query.eq("status", filter);
        }
;
        const { data, error } = await query,;
        if (error) throw error,;
        setJobs(data as Job[]);

        console.error("Error fetching jobs:", error);
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchJobs();
  }, [user, filter]),;


    );
  }
;
  if (jobs.length === 0) {;
    return (;

            :"You haven't posted any jobs yet.";
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
            : "You haven't posted any jobs yet.";

>>>>>>> origin/cursor/delete-old-data-records-6bba

        </p>;
        <Button asChild className="mt-4">;
          <Link to="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
    );
  }

  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;

      case "new": return "bg-blue-100 text-blue-800";
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800";
      case "filled":;

        return "bg-green-100 text-green-800";
<<<<<<< HEAD
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
=======

      case "closed":;
        return "bg-gray-100 text-gray-800",;
      default:;
        return "bg-gray-100 text-gray-800";

    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
          }

          onClick={() => onSelectJob?.(job && job.id, job && job.title)}
        >;"
          <CardHeader className="p-4">;"
            <div className="flex justify-between items-start">;
              <div>;"
                <CardTitle className="text-xl">{job && job.title}</CardTitle>;"
                <CardDescription className="mt-1">;"
  return (

    <div className="grid gap-6 md:grid-cols-2">;
      {jobs && jobs.map((job) => (;
        <Card
          key={job && job.id}       case "closed":;
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""
          }`}
          onClick={() => onSelectJob?.(job && job.id, job && job.title)}
  },;
;
  return (;
    <div className="grid gap-6 md:grid-cols-2">;
      {jobs.map((job) => (;
        <Card ;
          key={job.id} ;
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${;
            onSelectJob ? "cursor-pointer" :"";
          }`}
          onClick={() => onSelectJob?.(job.id, job.title)}
        >;
          <CardHeader className="p-4">;
            <div className="flex justify-between items-start">;
              <div>;
                <CardTitle className="text-xl">{job.title}</CardTitle>;
                <CardDescription className="mt-1">;
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor(job.status)}>;
                {job.status.replace("_", " ").toUpperCase()}
                  Posted {format(new Date(job && job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor(job && job.status)}>;"
                {job && job.status.replace("_", " ").toUpperCase()}
              </Badge>;
            </div>;
          </CardHeader>;"
          <CardContent className="p-4 pt-0">;"
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;
      case "closed":;
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

<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
              </Link>;
            </Button>;"
            <div className="flex gap-2">;"
              <Button variant="outline" size="sm" asChild>;

  const { user } = use_auth ();
  const [jobs, set_jobs] = useState < Job[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;

      try {
        let query = supabase;
          .from ("jobs");
          .select ("*");
          .eq ("client_id", user.id);

          .order ("created_at", { ascending: false }),
        // Check condition;
if ( {) {}
  $2;
}"
          query = query.eq ("status", filter);
        }
        const { data, error } = await query;
;
        // Check condition;
if (throw error) {}
  $2;
}
        set_jobs (data as Job[]);
      } catch (error) {"
        console.error ("Error fetching jobs:", error);
      } finally {}
        setIsLoading (false);
      }
    }
;
    fetch_jobs ();
  }, [user, filter]);
;
  // Check condition;
if ( {) {}
  $2;
}


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
