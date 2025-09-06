<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

<<<<<<< HEAD

import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Edit, X, Eye } from "lucide-react",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState, useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Loader2, Edit, X, Eye} from "lucide-react";
import {format} from "date-fns";
import {Link} from "react-router-dom";
<<<<<<< HEAD
interface JobsListProps {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

  filter?: JobStatus;
  onSelectJob?: (jobId: string, jobTitle: string) => void;
}


export function JobsList(): any ({ filter, onSelectJob }: JobsListProps) {;

  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true);



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Edit, X, Eye } from "lucide-react",
<<<<<<< HEAD
import { format } from "date-fns";
import { Link } from "react-router-dom";
=======
import { format } from "date-fns",
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface JobsListProps {
  filter?: JobStatus,
  onSelectJob?: (jobId: string, jobTitle: string) => void
}
<<<<<<< HEAD

<<<<<<< HEAD
export function JobsList({ filter, onSelectJob }: JobsListProps) {

  useEffect(() => {

    const fetchJobs = async () => {

=======


  useEffect(() => {

    const fetchJobs = async () => {

      if (!user) return,


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function JobsList({ filter, onSelectJob }: JobsListProps) {;
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function JobsList({ filter, onSelectJob }: JobsListProps) {
<<<<<<< HEAD
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true);
=======
  const { user } = useAuth(),
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {

    const fetchJobs = async () => {
<<<<<<< HEAD
      if (!user) return;
=======
      if (!user) return,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        let query = supabase
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false })
        if (filter) {
          query = query.eq("status", filter)
<<<<<<< HEAD
<<<<<<< HEAD
        }

=======

=======
        }



========
  filter?: JobStatus;
  onSelectJob?: (jobId: string, jobTitle: string) => void;
}
export function JobsList(): any ({ filter, onSelectJob }: JobsListProps) {;
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
  useEffect(() => {;
    const fetchJobs = async () => {;
      if (!user) return;
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

        if (error) throw error,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        }
<<<<<<< HEAD
        const { data, error } = await query;
        if (error) throw error;
=======

        const { data, error } = await query,

        if (error) throw error,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setJobs(data as Job[])
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
    }
    fetchJobs()
  }, [user, filter]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },

    fetchJobs()
  }, [user, filter]),

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (isLoading) {
=======
========
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
;
interface JobsListProps {;
  filter?:JobStatus,;
  onSelectJob?:(jobId:string, jobTitle:string) => void;
}
;
export function JobsList({ filter, onSelectJob } JobsListProps) {;
  const { user } = useAuth(),;
  const [jobs, setJobs] = useState<Job[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    const fetchJobs = async () => {;
      if (!user) return,;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      try {;
        let query = supabase;
          .from("jobs");
          .select("*");
<<<<<<< HEAD
          .eq("client_id", user && user.id);
          .order("created_at", { ascending: false }),;
        if (filter) {;
          query = query && query.eq("status", filter);
        }
        const { data, error } = await query;
        if (error) throw error;
        setJobs(data as Job[]);
      } catch (error) {;
        console && console.error("Error fetching jobs:", error);
      } finally {;
        setIsLoading(false);
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
    };
    fetchJobs();
  }, [user, filter]);
  if (isLoading) {;
    return (
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx


  if (jobs && jobs.length === 0) {;
    return (
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  if (jobs.length === 0) {
    return (
      <div className="text-center p-8 border rounded-md bg-muted/20">
        <p className="text-lg text-muted-foreground">
          {filter
            ? `No jobs with status "${filter}" found.`
            : "You haven't posted any jobs yet."
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
        </p>
        <Button asChild className="mt-4">
          <Link to="/post-job">Post Your First Job</Link>
        </Button>
      </div>
    )
  }
  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800",
      case "in_progress":
        return "bg-yellow-100 text-yellow-800",
      case "filled":
        return "bg-green-100 text-green-800",
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
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
export function JobsList({ filter, onSelectJob }: JobsListProps) {;
  const { user } = useAuth(),;
  const [jobs, setJobs] = useState<Job[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const fetchJobs = async () => {;
      if (!user) return,;
      try {;
        let query = supabase;
          .from("jobs");
          .select("*");
          .eq("client_id", user.id);
          .order("created_at", { ascending: false }),;
        if (filter) {;
          query = query.eq("status", filter);
        }
;
        const { data, error } = await query,;
        if (error) throw error,;
        setJobs(data as Job[]);
      } catch (error) {;
        console.error("Error fetching jobs:", error);
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchJobs();
  }, [user, filter]),;
<<<<<<< HEAD
========
  if (jobs && jobs.length === 0) {;
    return (
=======
          .eq("client_id", user.id);
          .order("created_at", { ascending:false }),;
;
        if (filter) {;
          query = query.eq("status", filter),;
        }
;
        const { data, error } = await query,;
;
        if (error) throw error,;
        setJobs(data as Job[]),;
      } catch (error) {;
        console.error("Error fetching jobs:", error),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    fetchJobs(),;
  }, [user, filter]),;
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
    );
========
    ),;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
=======
    );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  if (jobs.length === 0) {;
    return (;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter ;
            ? `No jobs with status "${filter}" found.` ;
<<<<<<< HEAD
            : "You haven't posted any jobs yet.";
=======
            :"You haven't posted any jobs yet.";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
            : "You haven't posted any jobs yet.";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
        </p>;
        <Button asChild className="mt-4">;
          <Link to="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx


  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;

========
  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
      case "new": return "bg-blue-100 text-blue-800";
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800";
      case "filled":;
        return "bg-green-100 text-green-800";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

========
=======
    ),;
  }
;
  const getStatusColor = (status:JobStatus) => {;
    switch (status) {;
      case "new":return "bg-blue-100 text-blue-800",;
=======
    );
  }
;
  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;
      case "new": return "bg-blue-100 text-blue-800",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800",;
      case "filled":;
        return "bg-green-100 text-green-800",;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
      case "closed":;
        return "bg-gray-100 text-gray-800",;
      default:;
        return "bg-gray-100 text-gray-800";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

    }
  }

  return (

========
    }
<<<<<<< HEAD
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
    <div className="grid gap-6 md:grid-cols-2">;
      {jobs && jobs.map((job) => (;
        <Card
          key={job && job.id} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""
          }`}
          onClick={() => onSelectJob?.(job && job.id, job && job.title)}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >;
          <CardHeader className="p-4">;
            <div className="flex justify-between items-start">;
              <div>;
<<<<<<< HEAD
                <CardTitle className="text-xl">{job && job.title}</CardTitle>;
                <CardDescription className="mt-1">;
                  Posted {format(new Date(job && job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor(job && job.status)}>;
                {job && job.status.replace("_", " ").toUpperCase()}
=======
                <CardTitle className="text-xl">{job.title}</CardTitle>;
                <CardDescription className="mt-1">;
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor(job.status)}>;
                {job.status.replace("_", " ").toUpperCase()}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent className="p-4 pt-0">;
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;
<<<<<<< HEAD
              {job && job.description}
            </p>;
            <div className="flex flex-wrap gap-1 mt-2">;
              {job && job.skills.slice(0, 3).map((skill, index) => (;
                <Badge key={index} variant="outline" className="text-xs">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======
      case "closed":;
        return "bg-gray-100 text-gray-800";
      default:;
        return "bg-gray-100 text-gray-800";
    }
  };
  return (;
    <div className="grid gap-6 md:grid-cols-2">;
      {jobs.map((job) => (;
        <Card;
          key={job.id} ;
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${;
            onSelectJob ? "cursor-pointer" : "";
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {job.description}
            </p>;
            <div className="flex flex-wrap gap-1 mt-2">;
              {job.skills.slice(0, 3).map((skill, index) => (;
<<<<<<< HEAD
                <Badge key={index} variant="outline" className="text-xs">;                  {skill}
                </Badge>;
              ))}
              {job.skills.length > 3 && (;
                <Badge variant="outline" className="text-xs">;
                  +{job.skills.length - 3} more;
                </Badge>;              )}
            </div>;
            <div className="mt-3 text-sm">;
              <span className="font-medium">Budget:</span> ${job.budget.min} - ${job.budget.max}
            </div>;
            <div className="mt-1 text-sm">;
              <span className="font-medium">Deadline:</span> {format(new Date(job.deadline), "PPP")}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </CardContent>;
          <CardFooter className="flex justify-between p-4 pt-0 gap-2">;
            <Button variant="outline" size="sm" asChild>;
<<<<<<< HEAD
              <Link to={`/jobs/${job && job.id}`}>;
=======
              <Link to={`/jobs/${job.id}`}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <Eye className="h-4 w-4 mr-1" /> View Details;
              </Link>;
            </Button>;
            <div className="flex gap-2">;
              <Button variant="outline" size="sm" asChild>;
<<<<<<< HEAD
                <Link to={`/jobs/${job && job.id}/edit`}>;
=======
                <Link to={`/jobs/${job.id}/edit`}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <Edit className="h-4 w-4" />;
                </Link>;
              </Button>;
              <Button variant="outline" size="sm">;
                <X className="h-4 w-4" />;
              </Button>;
            </div>;
          </CardFooter>;
        </Card>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
    </div>;
<<<<<<< HEAD
  );
}
import { useState, useEffect } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { Job, JobStatus } from '@/types / jobs';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Loader2, Edit, X, Eye } from './lucide-react';
import { format } from './date - fns';
import { Link } from './react-router-dom';
interface JobsListProps {
  filter?: JobStatus;
  onSelectJob?: (job_id: string, job_title: string) => void;
}
export /**
 * JobsList - Function description
 */
function JobsList() {
  const { user } = use_auth ();
  const [jobs, set_jobs] = useState < Job[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  useEffect (() => {
    const fetch_jobs = async () => {
      // Check condition
if (return) {
  $2
}
      try {
        let query = supabase;
          .from ("jobs");
          .select ("*");
          .eq ("client_id", user.id);
          .order ("created_at", { ascending: false }),
        // Check condition
if ( {) {
  $2
}
          query = query.eq ("status", filter);
        }
        const { data, error } = await query;
;
        // Check condition
if (throw error) {
  $2
}
        set_jobs (data as Job[]);
      } catch (error) {
        console.error ("Error fetching jobs:", error);
      } finally {
        setIsLoading (false);
      }
    }
;
    fetch_jobs ();
  }, [user, filter]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center p - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center p - 8 border rounded - md bg - muted / 20">;
        <p className="text - lg text - muted - foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
            : "You haven't posted any jobs yet.";
          }
        </p>;
        <Button as_child className="mt - 4">;
          <Link to="/post - job">Post Your First Job</Link>;
        </Button>;
      </div>);
  }
  const getStatusColor = (status: JobStatus) =>: any {
    switch (status) {
      case "new": return "bg - blue - 100 text - blue - 800";
      case "in_progress":;
        return "bg - yellow - 100 text - yellow - 800";
      case "filled":;
        return "bg - green - 100 text - green - 800";
      case "closed":;
        return "bg - gray - 100 text - gray - 800",
      default:;
        return "bg - gray - 100 text - gray - 800";
    }
  }
;
  return (
    <div className="grid gap - 6 md:grid - cols - 2">;
      {jobs.map ((job) => (
        <Card;
          key={job.id}
          className={`overflow - hidden cursor - pointer transition - shadow hover:shadow - md ${
            onSelectJob ? "cursor - pointer" : "";
          }`}
          on_click={() => onSelectJob?.(job.id, job.title)}
        >;
          <CardHeader className="p - 4">;
            <div className="flex justify - between items - start">;
              <div>;
                <CardTitle className="text - xl">{job.title}</CardTitle>;
                <CardDescription className="mt - 1">;
                  Posted {format (new Date (job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor (job.status)}>;
                {job.status.replace ("_", " ").toUpperCase ()}
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent className="p - 4 pt - 0">;
            <p className="line - clamp - 3 text - sm text - muted - foreground mb - 2">;
              {job.description}
            </p>;
            <div className="flex flex - wrap gap - 1 mt - 2">;
              {job.skills.slice (0, 3).map ((skill, index) => (
                <Badge key={index} variant="outline" className="text - xs">;
                  {skill}
                </Badge>))}
              {job.skills.length > 3 && (
                <Badge variant="outline" className="text - xs">;
                  +{job.skills.length - 3} more;
                </Badge>)}
            </div>;
            <div className="mt - 3 text - sm">;
              <span className="font - medium">Budget:</span> ${job.budget.min} - ${job.budget.max}
            </div>;
            <div className="mt - 1 text - sm">;
              <span className="font - medium">Deadline:</span> {format (new Date (job.deadline), "PPP")}
            </div>;
          </CardContent>;
          <CardFooter className="flex justify - between p - 4 pt - 0 gap - 2">;
            <Button variant="outline" size="sm" as_child>;
              <Link to={`/jobs/${job.id}`}>;
                <Eye className="h - 4 w - 4 mr - 1" /> View Details;
              </Link>;
            </Button>;
            <div className="flex gap - 2">;
              <Button variant="outline" size="sm" as_child>;
                <Link to={`/jobs/${job.id}/edit`}>;
                  <Edit className="h - 4 w - 4" />;
                </Link>;
              </Button>;
              <Button variant="outline" size="sm">;
                <X className="h - 4 w - 4" />;
              </Button>;
            </div>;
          </CardFooter>;
        </Card>))}
    </div>);
=======
  ),; interface JobsListProps {
  filter?: JobStatus;
onSelectJob?: (jobId: string, jobTitle: string) => void 
}export function JobsList ({
  filter, onSelectJob 
}: JobsListProps) {
  const {
  user 
}= useAuth ();
const [jobs, setJobs] = useState<Job[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
  const fetchJobs = async () => {
  if (!user) return;
try {
  let query = supabase 
}const {
  data, error 
}= await query;
if (error) throw error;
setJobs (data as Job[]) 
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
}, [user, filter]);
{
  filter ? `No jobs with status "$ {
  filter 
}" found.` : "You haven't posted any jobs yet." 
}</p> <Button asChild className="mt-4" > <Link to="/post-job" >Post Your First Job</Link> </Button> </div>) 
}case "in progress": return "bg-yellow-100 text-yellow-800";
case "filled": return "bg-green-100 text-green-800";
case "closed": return "bg-gray-100 text-gray-800";
default: 
}
};
return (<div className="grid gap-6 md:grid-cols-2" > {
  jobs.map ( (job) => (<Card key= {
  job.id 
}className= {
  `overflow-hidden cursor-pointer transition-shadow hover:shadow-md $ {
  onSelectJob ? "cursor-pointer" : "" 
}` 
}onClick= {
  () => onSelectJob?. (job.id, job.title) 
}job.description 
}</p> + {
  job.skills.length - 3 
}more </Badge>) 
}</div> <div className="mt-3 text-sm"> <span className="font-medium">Budget:</span> $ {
  job.budget.min 
}- $ {
  job.budget.max 
}</div> <div className="mt-1 text-sm"> </Link> </Button> <Button variant=" outline"size=" sm"> <X className="h-4 w-4" /> </Button> </div> </CardFooter> </Card>) ) 
}</div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobsList.tsx
=======
                <Badge key={index} variant="outline" className="text-xs">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              <span className="font-medium">Deadline:</span> {format(new Date(job.deadline), "PPP")}
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
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
