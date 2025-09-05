
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Edit, X, Eye } from 'lucide-react'
import { format } from "date-fns",
import Link from "next/link",
import {logErrorToProduction} from '@/utils/productionLogger',interface JobsListProps {
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
          .from("jobs")
          .select("*")
          .eq("clientid", user.id)
          .order("createdat", { ascending: false }),

        if (filter) {
          query = query.eq("status", filter)        }

        const { data, error } = await query,

        if (error) throw error,
        setJobs(data as Job[])
      } catch (error) {
        logErrorToProduction('Error fetching jobs:', { data: error })
      } finally {
        setIsLoading(false)
      }
    },
import Link from "next/link";

interface JobsListProps {filter?: JobStatus;
  onSelectJob?: (jobId: string, jobTitle: string) => void}

export function JobsList(_{filter, onSelectJob}: JobsListProps) {const { user} = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect_(() => {const fetchJobs = async () => {
      if (!user) return;

      try {
        let query = supabase
          .from("jobs")
          .select("*")
          .eq("clientid", user.id)
          .order("createdat", _{ ascending: false});

        if (filter) {query = query.eq("status", filter)}

        const {data, error} = await query;

        if (error) throw error;
        setJobs(data as Job[])
      } catch (error) {logErrorToProduction('Error fetching jobs:', _{ data: error})
      } finally {setIsLoading(false)}
    };

    fetchJobs()
  }, [user, filter]),

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
        <p className=&quot;text-lg text-muted-foreground&quot;>          {filter 
            ? `No jobs with status &quot;${filter}&quot; found.` 
            : &quot;You haven't posted any jobs yet.&quot
          }
        </p>
        <Button asChild className=&quot;mt-4&quot;>
          <Link href=&quot;/post-job&quot;>Post Your First Job</Link>
        </Button>
      </div>
    )
  }

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800",      case "inprogress":
        return "bg-yellow-100 text-yellow-800",
      case "filled":
        return "bg-green-100 text-green-800",
      case "closed":
        return "bg-gray-100 text-gray-800",
      default:
        return "bg-gray-100 text-gray-800"    }
  },

  return (
    <div className=&quot;grid gap-6 md:grid-cols-2&quot;>
      {jobs.map((job) => (
        <Card,
key={job.id} 
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? &quot;cursor-pointer&quot; : ""
          }`}
          onClick={() => onSelectJob?.(job.id, job.title)}
        return "bg-gray-100 text-gray-800"}
  };

  return (_<div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (_<Card,
key={job.id} 
          className={_`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""}`}
          onClick={_() => onSelectJob?.(job.id, job.title)}
        >
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="mt-1&quot;>
                  Posted {format(new Date(job.createdat), &quot;PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>
                {job.status.replace("_&quot;, &quot; ").toUpperCase()}              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2&quot;>
              {job.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant=&quot;outline" className="text-xs&quot;>
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 3 && (
                <Badge variant=&quot;outline" className="text-xs">                  +{job.skills.length - 3} more
                </Badge>
              )}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Budget:</span> ${job.budget.min} - ${job.budget.max}
            </div>
            <div className="mt-1 text-sm">
              <span className="font-medium&quot;>Deadline:</span> {format(new Date(job.deadline), &quot;PPP")}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0 gap-2&quot;>
            <Button variant=&quot;outline&quot; size=&quot;sm" asChild>
              <Link href={`/jobs/${job.id}`}>
                <Eye className="h-4 w-4 mr-1" /> View Details
              </Link>
            </Button>
            <div className="flex gap-2&quot;>
              <Button variant=&quot;outline&quot; size=&quot;sm" asChild>
                <Link href={`/jobs/${job.id}/edit`}>
                  <Edit className="h-4 w-4&quot; />                </Link>
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
