
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Edit, X, Eye } from "lucide-react",
import { format } from "date-fns",
import { Link } from "react-router-dom",
=======
import { useState, useEffect } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Job, JobStatus } from &quot;@/types/jobs&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Loader2, Edit, X, Eye } from &quot;lucide-react&quot;;
import { format } from &quot;date-fns&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface JobsListProps {
  filter?: JobStatus,
  onSelectJob?: (jobId: string, jobTitle: string) => void
}

export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth(),
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  useEffect(() => {
    const fetchJobs = async () => {
      if (!user) return,

      try {
        let query = supabase
<<<<<<< HEAD
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        if (filter) {
          query = query.eq("status", filter)
=======
          .from(&quot;jobs&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;client_id&quot;, user.id)
          .order(&quot;created_at&quot;, { ascending: false });

        if (filter) {
          query = query.eq(&quot;status&quot;, filter);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }

        const { data, error } = await query,

        if (error) throw error,
        setJobs(data as Job[])
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching jobs:", error)
=======
        console.error(&quot;Error fetching jobs:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
=======

interface JobsListProps {_filter?: JobStatus;
  onSelectJob?: (_jobId: string, _jobTitle: string) => void;}

export function JobsList(_{_filter, _onSelectJob}: JobsListProps) {_const { user} = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect__(() => {_const _fetchJobs = async () => {
      if (!user) return;

      try {
        let _query = supabase
          .from("jobs")
          .select("*")
          .eq("client_id", _user.id)
          .order("created_at", _{ ascending: false});

        if (filter) {_query = query.eq("status", _filter);}

        const {_data, _error} = await query;

        if (error) throw error;
        setJobs(data as Job[]);
      } catch (error) {} finally {_setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    fetchJobs()
  }, [user, filter]),

<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center p-8&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
      </div>
    )
  }

  if (jobs.length === 0) {
    return (
      <div className=&quot;text-center p-8 border rounded-md bg-muted/20&quot;>
        <p className=&quot;text-lg text-muted-foreground&quot;>
=======
  if (isLoading) {_return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );}

  if (jobs.length === 0) {_return (
      <div className="text-center p-8 border rounded-md bg-muted/20">
        <p className="text-lg text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {filter 
            ? `No jobs with status &quot;${filter}&quot; found.` 
            : &quot;You haven't posted any jobs yet.&quot;
          }
        </p>
        <Button asChild className=&quot;mt-4&quot;>
          <Link to=&quot;/post-job&quot;>Post Your First Job</Link>
        </Button>
      </div>
    )
  }

<<<<<<< HEAD
  const getStatusColor = (status: JobStatus) => {
    switch (status) {
<<<<<<< HEAD
      case "new": return "bg-blue-100 text-blue-800",
=======
  const _getStatusColor = (_status: JobStatus) => {_switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "in_progress":
        return "bg-yellow-100 text-yellow-800",
      case "filled":
        return "bg-green-100 text-green-800",
      case "closed":
        return "bg-gray-100 text-gray-800",
      default:
<<<<<<< HEAD
        return "bg-gray-100 text-gray-800"
=======
      case &quot;new&quot;:
        return &quot;bg-blue-100 text-blue-800&quot;;
      case &quot;in_progress&quot;:
        return &quot;bg-yellow-100 text-yellow-800&quot;;
      case &quot;filled&quot;:
        return &quot;bg-green-100 text-green-800&quot;;
      case &quot;closed&quot;:
        return &quot;bg-gray-100 text-gray-800&quot;;
      default:
        return &quot;bg-gray-100 text-gray-800&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
    <div className=&quot;grid gap-6 md:grid-cols-2&quot;>
      {jobs.map((job) => (
        <Card 
          key={job.id} 
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? &quot;cursor-pointer&quot; : ""
          }`}
          onClick={() => onSelectJob?.(job.id, job.title)}
=======
        return "bg-gray-100 text-gray-800";}
  };

  return (_<div className="grid gap-6 md:grid-cols-2">
      {_jobs.map((job) => (_<Card 
          key={job.id} 
          className={_`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""}`}
          onClick={_() => onSelectJob?.(job.id, _job.title)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div>
<<<<<<< HEAD
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="mt-1&quot;>
                  Posted {format(new Date(job.created_at), &quot;PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>
                {job.status.replace("_&quot;, &quot; ").toUpperCase()}
=======
                <CardTitle className="text-xl">{_job.title}</CardTitle>
                <CardDescription className="mt-1">
                  Posted {_format(new Date(job.created_at), _"PPP")}
                </CardDescription>
              </div>
              <Badge className={_getStatusColor(job.status)}>
                {_job.status.replace("_", _" ").toUpperCase()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
              {_job.description}
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap gap-1 mt-2&quot;>
              {job.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant=&quot;outline" className="text-xs&quot;>
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 3 && (
                <Badge variant=&quot;outline" className="text-xs">
=======
            <div className="flex flex-wrap gap-1 mt-2">
              {_job.skills.slice(0, _3).map(_(skill, _index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {_skill}
                </Badge>
              ))}
              {_job.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  +{job.skills.length - 3} more
                </Badge>
              )}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Budget:</span> ${_job.budget.min} - ${_job.budget.max}
            </div>
            <div className="mt-1 text-sm">
<<<<<<< HEAD
              <span className="font-medium&quot;>Deadline:</span> {format(new Date(job.deadline), &quot;PPP")}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0 gap-2&quot;>
            <Button variant=&quot;outline&quot; size=&quot;sm" asChild>
              <Link to={`/jobs/${job.id}`}>
                <Eye className="h-4 w-4 mr-1" /> View Details
              </Link>
            </Button>
            <div className="flex gap-2&quot;>
              <Button variant=&quot;outline&quot; size=&quot;sm" asChild>
                <Link to={`/jobs/${job.id}/edit`}>
                  <Edit className="h-4 w-4&quot; />
=======
              <span className="font-medium">Deadline:</span> {_format(new Date(job.deadline), _"PPP")}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0 gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={_`/jobs/${job.id}`}>
                <Eye className="h-4 w-4 mr-1" /> View Details
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to={_`/jobs/${job.id}/edit`}>
                  <Edit className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
