
<<<<<<< HEAD
import { useStateuseEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { JobStatus } from "@/types/jobs";
import { Button } from "@/components/ui/button";
import { CardContentCardDescriptionCardFooterCardHeaderCardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2EditXEye } from "lucide-react";
=======
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Job, JobStatus } from "@/types/jobs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Edit, X, Eye } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface JobsListProps {
  filter?: JobStatus;
<<<<<<< HEAD
  onSelectJob?: (jobId: stringjobTitle: string) => void;
}

export function JobsList({ filteronSelectJob }: JobsListProps) {
  const { user } = useAuth();
  const [jobsetJobs] = useState<Job[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
=======
  onSelectJob?: (jobId: string, jobTitle: string) => void;
}

export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    const fetchJobs = async () => {
      if (!user) return;

      try {
        let query = supabase
          .from("jobs")
          .select("*")
<<<<<<< HEAD
          .eq("client_id"user.id)
          .order("created_at"{ ascending: false });

        if (filter) {
          query = query.eq("status"filter);
        }

        const { dataerror } = await query;
=======
          .eq("client_id", user.id)
          .order("created_at", { ascending: false });

        if (filter) {
          query = query.eq("status", filter);
        }

        const { data, error } = await query;
>>>>>>> origin/auto/autonomy-17186719616

        if (error) throw error;
        setJobs(data as Job[]);
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching jobs:"error);
=======
        console.error("Error fetching jobs:", error);
>>>>>>> origin/auto/autonomy-17186719616
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
<<<<<<< HEAD
  }[userfilter]);
=======
  }, [user, filter]);
>>>>>>> origin/auto/autonomy-17186719616

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center p-8 border rounded-md bg-muted/20">
        <p className="text-lg text-muted-foreground">
          {filter 
            ? `No jobs with status "${filter}" found.` 
            : "You haven't posted any jobs yet."
          }
        </p>
        <Button asChild className="mt-4">
          <Link to="/post-job">Post Your First Job</Link>
        </Button>
      </div>
    );
  }

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "filled":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <Card 
          key={job.id} 
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""
          }`}
<<<<<<< HEAD
          onClick={() => onSelectJob?.(job.idjob.title)}
=======
          onClick={() => onSelectJob?.(job.id, job.title)}
>>>>>>> origin/auto/autonomy-17186719616
        >
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="mt-1">
<<<<<<< HEAD
                  Posted {format(new Date(job.created_at)"PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>
                {job.status.replace("_" ").toUpperCase()}
=======
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(job.status)}>
                {job.status.replace("_", " ").toUpperCase()}
>>>>>>> origin/auto/autonomy-17186719616
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
<<<<<<< HEAD
              {job.skills.slice(03).map((skillindex) => (
=======
              {job.skills.slice(0, 3).map((skill, index) => (
>>>>>>> origin/auto/autonomy-17186719616
                <Badge key={index} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{job.skills.length - 3} more
                </Badge>
              )}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Budget:</span> ${job.budget.min} - ${job.budget.max}
            </div>
            <div className="mt-1 text-sm">
<<<<<<< HEAD
              <span className="font-medium">Deadline:</span> {format(new Date(job.deadline)"PPP")}
=======
              <span className="font-medium">Deadline:</span> {format(new Date(job.deadline), "PPP")}
>>>>>>> origin/auto/autonomy-17186719616
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0 gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/jobs/${job.id}`}>
                <Eye className="h-4 w-4 mr-1" /> View Details
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to={`/jobs/${job.id}/edit`}>
                  <Edit className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
