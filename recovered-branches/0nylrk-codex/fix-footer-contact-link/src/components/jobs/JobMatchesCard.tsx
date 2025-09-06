
<<<<<<< HEAD

<<<<<<< HEAD
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardFooter,;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardFooter,;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD

import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
interface JobMatchCardProps {;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface JobMatchCardProps {;

import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface JobMatchCardProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  if (!job) return null;

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

=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  if (!job) return null;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface JobMatchCardProps {
  match: JobMatch,
  onApply: (matchId: string, jobId: string) => void,
  onDecline: (matchId: string) => void,
  showApplied?: boolean
}

<<<<<<< HEAD
<<<<<<< HEAD

=======

export function JobMatchesCard({
  match,
  onApply,
  onDecline,
  showApplied = false,
}: JobMatchCardProps) {;
  const job = match.job;

  if (!job) return null;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;
      <CardHeader className="p-4 pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <CardTitle className="text-lg">{job && job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job && job.created_at), "MMM d")}
              {match && match.status === "viewed" && match && match.viewed_at && (;
                <span className="ml-2 text-xs text-muted-foreground">;
                  (Viewed {format(new Date(match && match.viewed_at), "MMM d")});
                </span>;
              )}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">
              Matched skills:
            </p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
        
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            {match && match.match_score}% Match;
=======
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
            {match.match_score}% Match;
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
            {match.match_score}% Match;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p-4 pt-0">;
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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




          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>;
            <div className="flex flex-wrap gap-1">;
              {match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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

        {match && match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">;
              Matched skills:;
            </p>;
            <div className="flex flex-wrap gap-1">;
              {match && match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;



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

        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$
            {job.budget.min} - ${job.budget.max}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${job.budget.min} - ${job.budget.max}


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

        {match.status === 'applied' || showApplied ? (


=======
        {match.status === 'applied' || showApplied ? (


        {match.status === "applied" |showApplied ? (
        {match.status === 'applied' || showApplied ? (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
            Applied
          </div>
<<<<<<< HEAD
        ) : match.status === 'declined' ? (
=======
<<<<<<< HEAD
<<<<<<< HEAD
        ) : match.status === "declined" ? (
=======
        ) : match.status === 'declined' ? (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        ) : match.status === 'declined' ? (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">
            <XCircle className="h-4 w-4 mr-2" />
            Declined
          </div>
        ) : (
          <div className="flex gap-2 w-full">
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;
          <div className="flex items-center text-sm">;
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$;
            {job && job.budget.min} - ${job && job.budget.max}
          </div>;
          <div className="flex items-center text-sm">;
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;
            Due: {format(new Date(job && job.deadline), "MMM d, yyyy")}
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="p-4 pt-0">;
<<<<<<< HEAD
        {match && match.status === "applied" || showApplied ? (;
=======
        {match.status === 'applied' || showApplied ? (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;
            <CheckCircle className="h-4 w-4 mr-2" />;
            Applied;
          </div>;
<<<<<<< HEAD
        ) : match && match.status === "declined" ? (;
=======
        ) :match.status === 'declined' ? (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;
            <XCircle className="h-4 w-4 mr-2" />;
            Declined;
          </div>;
<<<<<<< HEAD
        ) : (;
          <div className="flex gap-2 w-full">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            <Button
              className="flex-1"
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;
            <Button
              variant="outline"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            <Button 
              className="flex-1" 
              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button 
              variant="outline" 

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              className="flex-1"
              onClick={() => onDecline(match && match.id)}
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              className="flex-1"
              onClick={() => onDecline(match && match.id)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >;
              Decline;
            </Button>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
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
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
      </CardFooter>
    </Card>
      </CardFooter>;
    </Card>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
