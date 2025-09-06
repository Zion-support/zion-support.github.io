<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { format } from "date-fns";
import Link from "next/link";
import {logErrorToProduction} from '@/utils/productionLogger';
interface JobsListProps {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useState, useEffect } from "react",
=======
>>>>>>> import { useState, useEffect } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from "react",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>>       try {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      try {
>>>>>>>         let query = supabase
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      try {
        let query = supabase
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          .order("created_at", { ascending: false })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (filter) {
          query = query.eq("status", filter)
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
        }
        const { data, error } = await query;
        // Check condition
if (throw error) {
  $2
}
        set_jobs (data as Job[]);
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
      } catch (error) {
        logErrorToProduction ('Error fetching jobs:', { data: error });
      } finally {
        setIsLoading (false);
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx
    fetchJobs()
  }, [user, filter])
<<<<<<< HEAD
=======
          .order("created_at", { ascending: false }),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
========
<<<<<<< HEAD
    fetch_jobs ();
  }, [user, filter]);
  // Check condition
if ( {) {
  $2
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
}
    return (
      <div className="flex justify - center items - center p - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
  // Check condition
if ( {) {
  $2
}
    return (<div className="text - center p - 8 border rounded - md bg - muted / 20">;
        <p className="text - lg text - muted - foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

<<<<<<< HEAD
  if (isLoading) {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
            : "You haven't posted any jobs yet.", }
        </p>;
        <Button as_child className="mt - 4">;
          <Link href="/post - job">Post Your First Job</Link>;
        </Button>;
      </div>);
  }
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx


          .order("created_at", { ascending: false }),

>>>>>>>   if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

  if (isLoading) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
          {filter
            ? `No jobs with status "${filter}" found.`
            : "You haven't posted any jobs yet.", }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {filter
            ? `No jobs with status "${filter}" found.`
            : "You haven't posted any jobs yet.", }
          {filter 
            ? `No jobs with status "${filter}" found.` 
            : "You haven't posted any jobs yet."
          }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </p>
        <Button asChild className="mt-4">
          <Link href="/post-job">Post Your First Job</Link>
        </Button>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const getStatusColor = (status: JobStatus,) => {
    switch (status) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const getStatusColor = (status: JobStatus,) => {
    switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      case "new": return "bg-blue-100 text-blue-800"
      case "in_progress":
        return "bg-yellow-100 text-yellow-800"
      case "filled":
        return "bg-green-100 text-green-800"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const getStatusColor = (status: JobStatus) => {
    switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      case "new": return "bg-blue-100 text-blue-800",
      case "in_progress":
        return "bg-yellow-100 text-yellow-800",
      case "filled":
        return "bg-green-100 text-green-800",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
>>>>>>>       case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
interface JobsListProps {;
  filter?: JobStatus;
  onSelectJob?: (jobId: string, jobTitle: string) => void}
export function JobsList(): any ({ filter, onSelectJob }: JobsListProps) {;
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect((,) => {;
    const fetchJobs = async () => {;
      if (!user) return;
      try {;
        let query = supabase;
          .from("jobs");
          .select("*");
          .eq("client_id", user && user.id);
          .order("created_at", { ascending: false }),;
        if (filter) {;
          query = query && query.eq("status", filter);
        }
        const { data, error } = await query;
        if (error) throw error;
        setJobs(data as Job[]);
      } catch (error) {;
        logErrorToProduction('Error fetching jobs:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    };
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  },

  },


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job,) => (
        <Card
          key = {job.id,}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  },

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <Card 
          key={job.id} 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
=======
>>>>>>>           className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
              {job.skills.slice(0, 3).map((skill, index,) => (
                <Badge key={index} variant="outline" className="text-xs">
>>>>>>>                   {skill}
                </Badge>
ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
    fetchJobs();
  }, [user, filter]);
  if (isLoading) {;
    return (
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {job.skills.slice(0, 3).map((skill, index,) => (
                <Badge key={index} variant="outline" className="text-xs">
              {job.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs">
    },;
    fetchJobs();
  }, [user, filter]),;
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD
  if (jobs && jobs.length === 0) {;
    return (<div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter ;
            ? `No jobs with status "${filter}" found.` ;
            : "You haven't posted any jobs yet.", }
=======
;
  if (jobs.length === 0) {;
    return (;
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter;
            ? `No jobs with status "${filter}" found.`;
            : "You haven't posted any jobs yet.";
          }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </p>;
        <Button asChild className="mt-4">;
          <Link href="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
  return (
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
    <div className="grid gap-6 md:grid-cols-2">;
      {jobs && jobs.map((job,) => (;
        <Card
          key = {job && job.id,}
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
            onSelectJob ? "cursor-pointer" : ""
          }`}
          onClick = {(,) => onSelectJob?.(job && job.id, job && job.title),}
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
              {job && job.skills.slice(0, 3).map((skill, index,) => (;
                <Badge key={index} variant="outline" className="text-xs">;



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  {skill}
                </Badge>;
>>>>>>>               ))}
              {job && job.skills.length > 3 && (;
                <Badge variant="outline" className="text-xs">;
                  +{job && job.skills.length - 3} more;
                </Badge>;
              )}
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

========
            </div>;
            <div className="mt-3 text-sm">;
              <span className="font-medium">Budget:</span> ${job && job.budget.min} - ${job && job.budget.max}
            </div>;
            <div className="mt-1 text-sm">;
              <span className="font-medium">Deadline:</span> {format(new Date(job && job.deadline), "PPP")}
=======
=======
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
              <Link href={`/jobs/${job && job.id}`}>;
=======
              <Link href={`/jobs/${job.id}`}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <Eye className="h-4 w-4 mr-1" /> View Details;
              </Link>;
            </Button>;
            <div className="flex gap-2">;
              <Button variant="outline" size="sm" asChild>;
<<<<<<< HEAD
                <Link href={`/jobs/${job && job.id}/edit`}>;
=======
                <Link href={`/jobs/${job.id}/edit`}>;
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
    </div>;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<<< HEAD:src/components/jobs/JobsList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>             </div>
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          </CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </div>
  )
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Card>
      ))}
    </div>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Card>;
      ))};
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
        </Card>
      ))}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        </Card>
      ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobsList.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
          </CardFooter>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
