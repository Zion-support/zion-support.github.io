=======
interface JobMatchCardProps {
import { useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardFooter,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';
import { JobMatch } from '@/types/jobs';
interface JobMatchCardProps {;
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean
export function JobMatchesCard({
  match
  onApply
  onDecline
  showApplied = false
}: JobMatchCardProps) {
  const job = match.job
  if (!job) return null
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
  


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
        {match.matched_skills?.length > 0 && (
          <div className='mb-3'>
            <p className='text-xs text-muted-foreground mb-1'>
              Matched skills:
            </p>
            <div className='flex flex-wrap gap-1'>
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant='secondary' className='text-xs'>                  {skill}
                </Badge>
              ))}
              {match.matched_skills.length > 5 && (
                <Badge variant='secondary' className='text-xs'>
        
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
import { useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';
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
            <CardTitle className='text-lg'>{job && job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job && job.created_at), 'MMM d')}
              {match && match.status === 'viewed' && match && match.viewed_at && (;
                <span className='ml-2 text-xs text-muted-foreground'>;
                  (Viewed {format(new Date(match && match.viewed_at), 'MMM d')});
                </span>;
              )}

            </CardDescription>;
          </div>;
          <Badge variant='outline' className='flex items-center'>;
            {match && match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className='p-4 pt-0'>;
        <p className='text-sm text-muted-foreground line-clamp-2 mb-3'>;
          {job && job.description}
        </p>;

        {match && match.matched_skills?.length > 0 && (;
          <div className='mb-3'>;
            <p className='text-xs text-muted-foreground mb-1'>;
              Matched skills:;
            </p>;
            <div className='flex flex-wrap gap-1'>;
              {match && match.matched_skills.slice(0, 5).map((skill, i) => (;

                <Badge key={i} variant='secondary' className='text-xs'>                  {skill}
                </Badge>;
              ))}

              {match.matched_skills.length > 5 && (
                <Badge variant="secondary" className="text-xs">
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                  +{match.matched_skills.length - 5}
                </Badge>
              )}
            </div>;
          </div>;
        )}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <div className='grid grid-cols-2 gap-2 mb-2 mt-3'>
          <div className='flex items-center text-sm'>
            <DollarSign className='h-4 w-4 mr-1 text-muted-foreground' />$
            {job.budget.min} - ${job.budget.max}

              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
