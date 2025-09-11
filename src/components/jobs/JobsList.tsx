<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/integrations/supabase/client"
import { Job, JobStatus } from "@/types/jobs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Edit, X, Eye } from 'lucide-react'import { format } from "date-fns"
import Link from "next/link"
import {logErrorToProduction} from '@/utils/productionLogger'
interface JobsListProps {
  filter?: JobStatus
  onSelectJob?: (jobId: string, jobTitle: string) => void}

export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth()
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect((,) => {
    const fetchJobs = async () => {
      if (!user) return;
import { format } from "date-fns";
import Link from "next/link";
import {logErrorToProduction} from '@/utils/productionLogger';
interface JobsListProps {

import { useState, useEffect } from "react",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Edit, X, Eye } from 'lucide-react'
import { format } from "date-fns",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from "next/link";
import {logErrorToProduction} from '@/utils/productionLogger';
interface JobsListProps {

  filter?: JobStatus
  onSelectJob?: (jobId: string, jobTitle: string) => void}
export function JobsList({ filter, onSelectJob }: JobsListProps) {
  const { user } = useAuth()
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect((,) => {
    const fetchJobs = async () => {
      if (!user) return
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from "next/link",
import {logErrorToProduction} from '@/utils/productionLogger',
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
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
<<<<<<< HEAD
<<<<<<< HEAD
          .order("created_at", { ascending: false })
        if (filter) {
          query = query.eq("status", filter)
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect  } from './react';
import { use_auth  } from '@/hooks / use_auth';
import { supabase  } from '@/integrations / supabase / client';
import { Job, JobStatus  } from '@/types / jobs';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Loader2, Edit, X, Eye } from 'lucide-react'import { format  } from './date - fns';
import Link from './next / link';
import {logErrorToProduction} from '@/utils / production_logger';
interface JobsListProps {
  filter?: JobStatus;
  onSelectJob?: (job_id: string, job_title: string) => void}
export /**
 * JobsList - Function description
 */
function JobsList() {
  const { user } = use_auth ();
  const [jobs, set_jobs] = useState < Job[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  useEffect ((, ) => {
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
        // Check condition
if (throw error) {
  $2
}
        set_jobs (data as Job[]);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (error) {
        logErrorToProduction ('Error fetching jobs:', { data: error });
      } finally {
        setIsLoading (false);
<<<<<<< HEAD

import { useState, useEffect } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { Job, JobStatus } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Edit, X, Eye } from 'lucide-react';
import { format } from "date-fns",;
import Link from "next/link",;
import {logErrorToProduction} from '@/utils/productionLogger',;
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
      try {;
        let query = supabase;
          .from("jobs");
          .select("*");
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
        logErrorToProduction('Error fetching jobs:', { data:error }),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    fetchJobs(),;
  }, [user, filter]),;
;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    ),;
  }
;
  if (jobs.length === 0) {;
    return (;
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter ;
            ? `No jobs with status "${filter}" found.` ;
            :"You haven't posted any jobs yet.";
          }
        </p>;
        <Button asChild className="mt-4">;
          <Link href="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
    ),;
  }
;
  const getStatusColor = (status:JobStatus) => {;
    switch (status) {;
      case "new":return "bg-blue-100 text-blue-800",;
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800",;
      case "filled":;
        return "bg-green-100 text-green-800",;
      case "closed":;
        return "bg-gray-100 text-gray-800",;
      default:;
        return "bg-gray-100 text-gray-800";
    }
          .order("created_at", { ascending: false }),
          .order("created_at", { ascending: false })
          .order("created_at", { ascending: false }),
        if (filter) {
          query = query.eq("status", filter)
        }
        const { data, error } = await query
        if (error) throw error
        setJobs(data as Job[])
      } catch (error) {
        logErrorToProduction('Error fetching jobs:', { data: error })
      } finally {
        setIsLoading(false)
      }
    }
    fetchJobs()
  }, [user, filter])
          .order("created_at", { ascending: false }),

        if (filter) {
          query = query.eq("status", filter)
import { useState, useEffect } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { Job, JobStatus } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Edit, X, Eye } from 'lucide-react';
import { format } from "date-fns",;
import Link from "next/link",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface JobsListProps {;
  filter?: JobStatus,;
  onSelectJob?: (jobId: string, jobTitle: string) => void;
=======
      }
    }
    fetch_jobs ();
  }, [user, filter]);
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center p - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Check condition
if ( {) {
  $2
}
    return (<div className="text - center p - 8 border rounded - md bg - muted / 20">;
        <p className="text - lg text - muted - foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            : "You haven't posted any jobs yet.", }
        </p>;
        <Button as_child className="mt - 4">;
          <Link href="/post - job">Post Your First Job</Link>;
        </Button>;
      </div>);
  }
<<<<<<< HEAD
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
        logErrorToProduction('Error fetching jobs:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    },

    fetchJobs()
  }, [user, filter]),

<<<<<<< HEAD
=======
          .order("created_at", { ascending: false }),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


          .order("created_at", { ascending: false }),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          {filter
            ? `No jobs with status "${filter}" found.`
            : "You haven't posted any jobs yet.", }
          {filter
            ? `No jobs with status "${filter}" found.`
            : "You haven't posted any jobs yet.", }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {filter
            ? `No jobs with status "${filter}" found.`
            : "You haven't posted any jobs yet.", }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {filter 
            ? `No jobs with status "${filter}" found.` 
            : "You haven't posted any jobs yet."
          }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </p>
        <Button asChild className="mt-4">
          <Link href="/post-job">Post Your First Job</Link>
        </Button>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const getStatusColor = (status: JobStatus,) => {
    switch (status) {
  const getStatusColor = (status: JobStatus,) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800"
      case "in_progress":
        return "bg-yellow-100 text-yellow-800"
      case "filled":
        return "bg-green-100 text-green-800"
  const getStatusColor = (status: JobStatus) => {
    switch (status) {

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800",
      case "in_progress":
        return "bg-yellow-100 text-yellow-800",
      case "filled":
        return "bg-green-100 text-green-800",
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
<<<<<<< HEAD
<<<<<<< HEAD
    }
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface JobsListProps {;
  filter?: JobStatus;
  onSelectJob?: (jobId: string, jobTitle: string) => void}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function JobsList(): any ({ filter, onSelectJob }: JobsListProps) {;
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  useEffect((,) => {;
    const fetchJobs = async () => {;
      if (!user) return;
=======

  useEffect((,) => {;
    const fetchJobs = async () => {;
      if (!user) return;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      try {;
        let query = supabase;
          .from("jobs");
          .select("*");
          .eq("client_id", user && user.id);
          .order("created_at", { ascending: false }),;
        if (filter) {;
          query = query && query.eq("status", filter);
        }
<<<<<<< HEAD
        const { data, error } = await query;
=======

        const { data, error } = await query;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (error) throw error;
        setJobs(data as Job[]);
      } catch (error) {;
        logErrorToProduction('Error fetching jobs:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    };
<<<<<<< HEAD
  }

  },

  },



<<<<<<< HEAD
=======

    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job,) => (
        <Card
          key = {job.id,}
  },

  },

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <Card 
          key={job.id} 
<<<<<<< HEAD
<<<<<<< HEAD
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              {job.skills.slice(0, 3).map((skill, index,) => (
                <Badge key={index} variant="outline" className="text-xs">
                </Badge>
ursor/fix-website-loading-errors-and-merge-6662
    fetchJobs();
  }, [user, filter]);
  if (isLoading) {;
    return (
              {job.skills.slice(0, 3).map((skill, index,) => (
                <Badge key={index} variant="outline" className="text-xs">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {job.skills.slice(0, 3).map((skill, index,) => (
                <Badge key={index} variant="outline" className="text-xs">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {job.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs">
    },;
    fetchJobs();
<<<<<<< HEAD
<<<<<<< HEAD
  }, [user, filter]),;
  if (isLoading) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [user, filter]);

  if (isLoading) {;
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  if (jobs.length === 0) {;
    return (;
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
            : "You haven't posted any jobs yet.";
          }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (jobs && jobs.length === 0) {;
    return (<div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter ;
            ? `No jobs with status "${filter}" found.` ;
            : "You haven't posted any jobs yet.", }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </p>;
        <Button asChild className="mt-4">;
          <Link href="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const getStatusColor = (status: JobStatus,) => {;
    switch (status) {;
      case "new": return "bg-blue-100 text-blue-800";
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800";
      case "filled":;
        return "bg-green-100 text-green-800";
      case "closed":;
        return "bg-gray-100 text-gray-800",;
      default:;
        return "bg-gray-100 text-gray-800";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getStatusColor = (status: JobStatus, ) =>: any {
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
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="grid gap-6 md:grid-cols-2">;
      {jobs && jobs.map((job,) => (;
        <Card
          key = {job && job.id,}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""
          }`}
          onClick = {(,) => onSelectJob?.(job && job.id, job && job.title),}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >;
          <CardHeader className="p-4">;
            <div className="flex justify-between items-start">;
              <div>;
<<<<<<< HEAD
<<<<<<< HEAD
                <CardTitle className="text-xl">{job.title}</CardTitle>;
                <CardDescription className="mt-1">;
                  Posted {format(new Date(job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor(job.status)}>;
                {job.status.replace("_", " ").toUpperCase()}
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent className="p-4 pt-0">;
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;
                  {skill}
                </Badge>;
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
;
  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;
      case "new": return "bg-blue-100 text-blue-800",;
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800",;
      case "filled":;
        return "bg-green-100 text-green-800",;
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
          onClick = {(,) => onSelectJob?.(job.id, job.title),}
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
            </p>;
            <div className="flex flex-wrap gap-1 mt-2">;
              {job.skills.slice(0, 3).map((skill, index) => (;
              <Link href={`/jobs/${job.id}`}>;
                <Eye className="h-4 w-4 mr-1" /> View Details;
              </Link>;
            </Button>;
            <div className="flex gap-2">;
              <Button variant="outline" size="sm" asChild>;
                <Link href={`/jobs/${job.id}/edit`}>;
                  <Edit className="h-4 w-4" />;
                </Link>;
              </Button>;
              <Button variant="outline" size="sm">;
                <X className="h-4 w-4" />;
              </Button>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <CardTitle className="text-xl">{job && job.title}</CardTitle>;
                <CardDescription className="mt-1">;
                  Posted {format(new Date(job && job.created_at), "PPP")}
                </CardDescription>;
              </div>;
              <Badge className={getStatusColor(job && job.status)}>;
                {job && job.status.replace("_", " ").toUpperCase()}
              </Badge>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </CardFooter>;
        </Card>;
      ))}
    </div>;
=======
            </div>;
          </CardHeader>;
          <CardContent className="p-4 pt-0">;
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;
              {job && job.description}
            </p>;
            <div className="flex flex-wrap gap-1 mt-2">;
              {job && job.skills.slice(0, 3).map((skill, index,) => (;
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
  );

};";
return (<div className="grid gap-6 md:grid-cols-2" > {;
  jobs && jobs.map ( (job) => (<Cardkey= {
  job && job.id 
}className= {
  `overflow-hidden cursor-pointer transition-shadow hover:shadow-md $ {"
  onSelectJob ? "cursor-pointer" : "" 
}` 
}onClick={
  () => onSelectJob?. (job && job.id, job && job.title) ;
}job && job.description ;
}</p> + {;
  job && job.skills.length - 3 ;
}more </Badge>) ";
}</div> <div className="mt-3 text-sm"> <span className="font-medium">Budget:</span> $ {;
  job && job.budget.min ;
}- $ {;
  job && job.budget.max ";
}</div> <div className="mt-1 text-sm"> </Link> </Button> <Button variant=" outline"size=" sm"> <X className="h-4 w-4" /> </Button> </div> </CardFooter> </Card>) ) ;
}</div>) ;
}'"}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="grid gap - 6 md:grid - cols - 2">;
      {jobs.map ((job, ) => (
        <Card;
          key = {job.id, }
          className={`overflow - hidden cursor - pointer transition - shadow hover:shadow - md ${
            onSelectJob ? "cursor - pointer" : "";
          }`}
          on_click = {(, ) => onSelectJob?.(job.id, job.title), }
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
              {job.skills.slice (0, 3).map ((skill, index, ) => (
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
              <Link href={`/jobs/${job.id}`}>;
                <Eye className="h - 4 w - 4 mr - 1" /> View Details;
              </Link>;
            </Button>;
            <div className="flex gap - 2">;
              <Button variant="outline" size="sm" as_child>;
                <Link href={`/jobs/${job.id}/edit`}>;
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
}";
return (<div className="grid gap - 6 md:grid - cols - 2" > {
  jobs.map ( (job) => (<Card key= {
  job.id;
}className= {
  `overflow - hidden cursor - pointer transition - shadow hover:shadow - md $ {";
  onSelectJob ? "cursor - pointer" : "";
}`;
}on_click={
  () => onSelectJob?. (job.id, job.title);
}job.description;
}</p> + {
  job.skills.length - 3;
}more </Badge>) ";
}</div> <div className="mt - 3 text - sm"> <span className="font - medium">Budget:</span> $ {
  job.budget.min;
}- $ {
  job.budget.max ";
}</div> <div className="mt - 1 text - sm"> </Link> </Button> <Button variant=" outline"size=" sm"> <X className="h - 4 w - 4" /> </Button> </div> </CardFooter> </Card>) );
}</div>);
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
                <Badge key={index} variant="outline" className="text-xs">;
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{job.skills.length - 3} more
                </Badge>
              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <Link href={`/jobs/${job.id}`}>
                <Eye className="h-4 w-4 mr-1" /> View Details
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/jobs/${job.id}/edit`}>
                  <Edit className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
        </Card>
      ))}
    </div>
  )
        </Card>;
      ))};
    </div>;
  );
};"
return (<div className="grid gap-6 md:grid-cols-2" > {
  jobs.map ( (job) => (<Card key= {
  job.id
}className= {
  `overflow-hidden cursor-pointer transition-shadow hover:shadow-md $ {"
  onSelectJob ? "cursor-pointer" : ""
}`
}onClick={
  () => onSelectJob?. (job.id, job.title)
}job.description
}</p> + {
  job.skills.length - 3
}more </Badge>) "
}</div> <div className="mt-3 text-sm"> <span className="font-medium">Budget:</span> $ {
  job.budget.min
}- $ {
  job.budget.max "
}</div> <div className="mt-1 text-sm"> </Link> </Button> <Button variant=" outline"size=" sm"> <X className="h-4 w-4" /> </Button> </div> </CardFooter> </Card>) )
}</div>)
}'"}
        </Card>
      ))}
        </Card>
      ))}
    </div>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
  ),; interface JobsListProps {;
  filter?: JobStatus;
onSelectJob?: (jobId: string, jobTitle: string) => void ;
}export function JobsList ({;
  filter, onSelectJob ;
}: JobsListProps) {;
  const {;
  user ;
}= useAuth ();
const [jobs, setJobs] = useState<Job[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {;
  const fetchJobs = async () => {;
  if (!user) return;
try {;
  let query = supabase ;
}const {;
  data, error ;
}= await query;
if (error) throw error;
setJobs (data as Job[]) ;
}catch (error) {;
  logErrorToProduction ('Error fetching jobs:', {;
  data: error ;
}) ;
}finally {;
  setIsLoading (false) ;
}
};
}, [user, filter]);
{;
  filter ? `No jobs with status "$ {;
  filter '";
}" found.` : "You haven't posted any jobs yet." ";
}</p> <Button asChild className="mt-4" > <Link href="/post-job" >Post Your First Job</Link> </Button> </div>) ";
}case "in progress": return "bg-yellow-100 text-yellow-800";";
case "filled": return "bg-green-100 text-green-800";";
case "closed": return "bg-gray-100 text-gray-800";
default: ;
}
};";
return (<div className="grid gap-6 md:grid-cols-2" > {;
  jobs.map ( (job) => (<Card key= {;
  job.id ;
}className= {;
  `overflow-hidden cursor-pointer transition-shadow hover:shadow-md $ {";
  onSelectJob ? "cursor-pointer" : "" ;
}` ;
}onClick={;
  () => onSelectJob?. (job.id, job.title) ;
}job.description ;
}</p> + {;
  job.skills.length - 3 ;
}more </Badge>) ";
}</div> <div className="mt-3 text-sm"> <span className="font-medium">Budget:</span> $ {;
  job.budget.min ;
}- $ {;
  job.budget.max ";
}</div> <div className="mt-1 text-sm"> </Link> </Button> <Button variant=" outline"size=" sm"> <X className="h-4 w-4" /> </Button> </div> </CardFooter> </Card>) ) ;
}</div>) ;
}'"
          </CardFooter>
=======
          </CardFooter>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          </CardFooter>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
