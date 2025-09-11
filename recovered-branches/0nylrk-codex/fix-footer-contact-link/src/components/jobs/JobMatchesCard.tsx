

<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardDescription
  CardFooter
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardFooter,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react";
<<<<<<< HEAD
interface JobMatchCardProps {;

import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
<<<<<<< HEAD
interface JobMatchCardProps {
=======
interface JobMatchCardProps {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
interface JobMatchCardProps {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
export function JobMatchesCard(): any ({;
  match,;
  onApply,;
  onDecline,;
  showApplied = false,;
}: JobMatchCardProps) {;
  const job = match && match.job;

export function JobMatchesCard({
  match
  onApply
  onDecline
  showApplied = false
}: JobMatchCardProps) {
  const job = match.job;
  if (!job) return null;

import { useState } from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",
import { format } from "date-fns",
import { JobMatch } from "@/types/jobs",

=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


export function JobMatchesCard(): any ({;
  match,;
  onApply,;
  onDecline,;
  showApplied = false,;
}: JobMatchCardProps) {;
  const job = match && match.job;


  if (!job) return null;

=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface JobMatchCardProps {
  match: JobMatch,
  onApply: (matchId: string, jobId: string) => void,
  onDecline: (matchId: string) => void,
  showApplied?: boolean
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function JobMatchesCard({
  match,
  onApply,
  onDecline,
  showApplied = false,
}: JobMatchCardProps) {;
  const job = match.job;

  if (!job) return null;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
  
<<<<<<< HEAD
<<<<<<< HEAD
  if (!job) return null;
  return (

import { useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",;
import { format } from "date-fns",;
import { JobMatch } from "@/types/jobs",;
;
interface JobMatchCardProps {;
  match:JobMatch,;
  onApply:(matchId:string, jobId:string) => void,;
  onDecline:(matchId:string) => void,;
  showApplied?:boolean;
}
;
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false } JobMatchCardProps) {;
  const job = match.job,;
  ;
  if (!job) return null,;
  ;
  return (;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;
      <CardHeader className="p-4 pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <CardTitle className="text-lg">{job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job.created_at), "MMM d")}
              {match.status === 'viewed' && match.viewed_at && (;
                <span className="ml-2 text-xs text-muted-foreground">;
                  (Viewed {format(new Date(match.viewed_at), "MMM d")});
                </span>;
              )}
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <CardDescription>
              Posted {format(new Date(job.created_at), "MMM d")}
              {match.status === 'viewed' && match.viewed_at && (
                <span className="ml-2 text-xs text-muted-foreground">
                  (Viewed {format(new Date(match.viewed_at), "MMM d")})
                </span>
              )}
=======
            <CardTitle className="text-lg">{job && job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job && job.created_at), "MMM d")}
              {match && match.status === "viewed" && match && match.viewed_at && (;
                <span className="ml-2 text-xs text-muted-foreground">;
                  (Viewed {format(new Date(match && match.viewed_at), "MMM d")});
                </span>;
              )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </CardDescription>
          </div>
          <Badge variant="outline" className="flex items-center">
            {match.match_score}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {job.description}
        </p>
<<<<<<< HEAD
=======
            <CardTitle className="text-lg">{job && job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job && job.created_at), "MMM d")}
              {match && match.status === "viewed" && match && match.viewed_at && (;
                <span className="ml-2 text-xs text-muted-foreground">;
                  (Viewed {format(new Date(match && match.viewed_at), "MMM d")});
                </span>;
              )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        


=======
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">
              Matched skills:
            </p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
<<<<<<< HEAD


<<<<<<< HEAD
        
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",;
import { format } from "date-fns",;
import { JobMatch } from "@/types/jobs",;
interface JobMatchCardProps {;
  match: JobMatch,;
  onApply: (matchId: string, jobId: string) => void,;
  onDecline: (matchId: string) => void,;
  showApplied?: boolean;
}
;
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {;
  const job = match.job;
  if (!job) return null;
  return (;
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;
      <CardHeader className="p-4 pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-lg">{job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job.created_at), "MMM d")}
              {match.status === 'viewed' && match.viewed_at && (;
                <span className="ml-2 text-xs text-muted-foreground">;
                  (Viewed {format(new Date(match.viewed_at), "MMM d")});
                </span>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
            {match.match_score}% Match;
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
            {match.match_score}% Match;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
            {match && match.match_score}% Match;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p-4 pt-0">;
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {job && job.description}
        </p>;

        {match && match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">;
              Matched skills:;
            </p>;
            <div className="flex flex-wrap gap-1">;
              {match && match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {skill}
                </Badge>;
              ))}
              {match && match.matched_skills.length > 5 && (;
                <Badge variant="secondary" className="text-xs">;
                  +{match && match.matched_skills.length - 5}
                </Badge>;
              )}
            </div>;
          </div>;
        )}




<<<<<<< HEAD
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>;
            <div className="flex flex-wrap gap-1">;
              {match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;
                  {skill}
                </Badge>
              ))}
              {match.matched_skills.length > 5 && (
                <Badge variant="secondary" className="text-xs">
                  +{match.matched_skills.length - 5}
                </Badge>
              )}
            </div>
          </div>
        )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$
            {job.budget.min} - ${job.budget.max}
<<<<<<< HEAD
<<<<<<< HEAD
        
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${job.budget.min} - ${job.budget.max}


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
<<<<<<< HEAD

<<<<<<< HEAD
        {match.status === 'applied' || showApplied ? (


        {match.status === "applied" |showApplied ? (
        {match.status === 'applied' || showApplied ? (
=======

        {match.status === 'applied' || showApplied ? (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {match.status === "applied" |showApplied ? (
        {match.status === 'applied' || showApplied ? (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
            Applied
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        ) : match.status === 'declined' ? (
=======
        ) : match.status === "declined" ? (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        ) : match.status === "declined" ? (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">
            <XCircle className="h-4 w-4 mr-2" />
            Declined
          </div>
        ) : (
          <div className="flex gap-2 w-full">
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;
          <div className="flex items-center text-sm">;
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$;
            {job && job.budget.min} - ${job && job.budget.max}
          </div>;
          <div className="flex items-center text-sm">;
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;
            Due: {format(new Date(job && job.deadline), "MMM d, yyyy")}
<<<<<<< HEAD
          {job.description}
        </p>;
        ;
        {match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>;
            <div className="flex flex-wrap gap-1">;
              {match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;                  {skill}
                </Badge>;
              ))}
              {match.matched_skills.length > 5 && (;
                <Badge variant="secondary" className="text-xs">;
                  +{match.matched_skills.length - 5}
                </Badge>;              )}
            </div>;
          </div>;
        )}
        ;
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;
          <div className="flex items-center text-sm">;
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />;
            ${job.budget.min} - ${job.budget.max}
          </div>;
          <div className="flex items-center text-sm">;
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;
            Due:{format(new Date(job.deadline), "MMM d, yyyy")}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="p-4 pt-0">;
<<<<<<< HEAD
        {match.status === 'applied' || showApplied ? (;
=======
        {match && match.status === "applied" || showApplied ? (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;
            <CheckCircle className="h-4 w-4 mr-2" />;
            Applied;
          </div>;
<<<<<<< HEAD
        ) :match.status === 'declined' ? (;
=======
        ) : match && match.status === "declined" ? (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;
            <XCircle className="h-4 w-4 mr-2" />;
            Declined;
          </div>;
<<<<<<< HEAD
=======
        ) : (;
          <div className="flex gap-2 w-full">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              className="flex-1"
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;
            <Button
              variant="outline"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button 
              className="flex-1" 
              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button 
              variant="outline" 

              className="flex-1"
              onClick={() => onDecline(match && match.id)}
        ) :(;
          <div className="flex gap-2 w-full">;
            <Button ;
              className="flex-1" ;
              onClick={() => onApply(match.id, job.id)}
            >;
              Apply Now;
            </Button>;
            <Button ;
              variant="outline" ;
              className="flex-1";
              onClick={() => onDecline(match.id)}
=======

            <Button 
              variant="outline" 

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="flex-1"
              onClick={() => onDecline(match && match.id)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Button
              variant="outline"
            <Button 
              variant="outline" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="flex-1"
              onClick={() => onDecline(match && match.id)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              Decline;
            </Button>;
          </div>;
        )}
<<<<<<< HEAD


      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  ),;}
 interface JobMatchCardProps {
  match: JobMatch;
onApply: (matchId: string, jobId: string) => void;
onDecline: (matchId: string) => void;
showApplied?: boolean 
}export function JobMatchesCard ({
  match, onApply, onDecline, showApplied = false 
}: JobMatchCardProps) {
  const job = match.job;
return (<Card className="overflow-hidden border-l-4 border-l-blue-500" > <CardHeader className="p-4 pb-2" > <div className="flex justify-between items-start" > <div> <CardTitle className="text-lg" > {
  job.title 
}</CardTitle> <CardDescription> </span>) 
}</CardDescription> </div> + {
  match.matched skills.length - 5 
}</Badge>) 
}</div> </div>) 
}Applied </div>) : match.status === 'declined' ? (<div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md" > <XCircle className="h-4 w-4 mr-2" /> Declined </div> > Apply Now </Button> <Button > Decline </Button> </div>) 
}</CardFooter> </Card>) 
}
            <Button
              variant="outline"
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onDecline(match.id)}
            >
              Decline
            </Button>
          </div>
        )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardFooter>
    </Card>
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
import { useState  } from './react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { DollarSign, Calendar, CheckCircle, XCircle  } from './lucide-react';
import { format  } from './date - fns';
import { JobMatch  } from '@/types / jobs';
interface JobMatchCardProps {
  match: JobMatch;
  on_apply: (match_id: string, job_id: string) => void;
  on_decline: (match_id: string) => void;
  show_applied?: boolean;
}
export /**
 * JobMatchesCard - Function description
 */
function JobMatchesCard() {
  const job = match.job;
;
  // Check condition
if (return null) {
  $2
}
  return (
    <Card className="overflow - hidden border - l-4 border - l-blue - 500">;
      <CardHeader className="p - 4 pb - 2">;
        <div className="flex justify - between items - start">;
          <div>;
            <CardTitle className="text - lg">{job.title}</CardTitle>;
            <CardDescription>;
              Posted {format (new Date (job.created_at), "MMM d")}
              {match.status === "viewed" && match.viewed_at && (
                <span className="ml - 2 text - xs text - muted - foreground">;
                  (Viewed {format (new Date (match.viewed_at), "MMM d")});
                </span>)}
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items - center">;
            {match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p - 4 pt - 0">;
        <p className="text - sm text - muted - foreground line - clamp - 2 mb - 3">;
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && (
          <div className="mb - 3">;
            <p className="text - xs text - muted - foreground mb - 1">;
              Matched skills:;
            </p>;
            <div className="flex flex - wrap gap - 1">;
              {match.matched_skills.slice (0, 5).map ((skill, i) => (
                <Badge key={i} variant="secondary" className="text - xs">;
                  {skill}
                </Badge>))}
              {match.matched_skills.length > 5 && (
                <Badge variant="secondary" className="text - xs">;
                  +{match.matched_skills.length - 5}
                </Badge>)}
            </div>;
          </div>)}
        <div className="grid grid - cols - 2 gap - 2 mb - 2 mt - 3">;
          <div className="flex items - center text - sm">;
            <DollarSign className="h - 4 w - 4 mr - 1 text - muted - foreground" />$;
            {job.budget.min} - ${job.budget.max}
          </div>;
          <div className="flex items - center text - sm">;
            <Calendar className="h - 4 w - 4 mr - 1 text - muted - foreground" />;
            Due: {format (new Date (job.deadline), "MMM d, yyyy")}
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="p - 4 pt - 0">;
        {match.status === "applied" || show_applied ? (
          <div className="w - full flex items - center justify - center p - 2 bg - green - 50 text - green - 700 rounded - md">;
            <CheckCircle className="h - 4 w - 4 mr - 2" />;
            Applied;
          </div>) : match.status === "declined" ? (
          <div className="w - full flex items - center justify - center p - 2 bg - red - 50 text - red - 700 rounded - md">;
            <XCircle className="h - 4 w - 4 mr - 2" />;
            Declined;
          </div>) : (
          <div className="flex gap - 2 w - full">;
            <Button;
              className="flex - 1";
              on_click={() => on_apply (match.id, job.id)}
            >;
              Apply Now;
            </Button>;
            <Button;
              variant="outline";
              className="flex - 1";
              on_click={() => on_decline (match.id)}
            >;
              Decline;
            </Button>;
          </div>)}
      </CardFooter>;
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
