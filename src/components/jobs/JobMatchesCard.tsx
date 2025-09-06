<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx


=======
import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardDescription
  CardFooter
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react'
import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
import { format } from 'date-fns'
import { JobMatch } from '@/types/jobs'

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react'
import { format } from "date-fns",
import { JobMatch } from "@/types/jobs",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface JobMatchCardProps {
  match: JobMatch;
=======
>>>>>>> interface JobMatchCardProps {
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
=======
interface JobMatchCardProps {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>>   match: JobMatch;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface JobMatchCardProps {
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean
export function JobMatchesCard(): any ({;
  match,;
  onApply,;
  onDecline,;
  showApplied = false,;
}: JobMatchCardProps) {;
  const job = match && match.job;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
  return (
<<<<<<< HEAD
>>>>>>>     <Card className="overflow-hidden border-l-4 border-l-blue-500">
=======
  
=======
    <Card className='overflow-hidden border-l-4 border-l-blue-500'>;
      <CardHeader className='p-4 pb-2'>;
        <div className='flex justify-between items-start'>;



}


export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
  


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   +{match.matched_skills.length - 5}
ursor/fix-website-loading-errors-and-merge-6662
          <div>;
            <CardTitle className='text-lg'>{job && job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job && job.created_at), 'MMM d')}
              {match && match.status === 'viewed' && match && match.viewed_at && (;
                <span className='ml-2 text-xs text-muted-foreground'>;
                  (Viewed {format(new Date(match && match.viewed_at), 'MMM d')});
=======

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { format } from "date-fns",;
import { JobMatch } from "@/types/jobs",;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </span>;
              )}
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
            </CardDescription>;
          </div>;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
                <Badge key={i} variant='secondary' className='text-xs'>                  {skill}
                </Badge>;
              ))}

              {match.matched_skills.length > 5 && (
                <Badge variant="secondary" className="text-xs">

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                  +{match.matched_skills.length - 5}
<<<<<<< HEAD
>>>>>>>                 </Badge>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
                </Badge>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              )}
            </div>;
          </div>;
        )}
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                </span>;
              )}
            </CardDescription>
          </div>
          <Badge variant='outline' className='flex items-center'>
            {match.match_score}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='p-4 pt-0'>
        <p className='text-sm text-muted-foreground line-clamp-2 mb-3'>
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>;
            <div className="flex flex-wrap gap-1">;
              {match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;
                  {skill}
                </Badge>;
              ))}
              {match.matched_skills.length > 5 && (
                <Badge variant="secondary" className="text-xs">
                  +{match.matched_skills.length - 5}
                </Badge>
              )}
            </div>
          </div>
        )}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='grid grid-cols-2 gap-2 mb-2 mt-3'>
          <div className='flex items-center text-sm'>
            <DollarSign className='h-4 w-4 mr-1 text-muted-foreground' />$
            {job.budget.min} - ${job.budget.max}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${job.budget.min} - ${job.budget.max}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          </div>
=======
>>>>>>>           </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
            Applied
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <CardFooter className='p-4 pt-0'>
        {match.status === 'applied' |showApplied ? (
          <div className='w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md'>
            <CheckCircle className='h-4 w-4 mr-2' />
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>
          <div className='flex items-center text-sm'>
            <Calendar className='h-4 w-4 mr-1 text-muted-foreground' />
            Due: {format(new Date(job.deadline), 'MMM d, yyyy')}
          </div>
        </div>
      </CardContent>


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <CardFooter className="p-4 pt-0">
        {match.status === 'applied' || showApplied ? (
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>>             Applied
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>
        ) : match.status === 'declined' ? (
          <div className='w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md'>
            <XCircle className='h-4 w-4 mr-2' />
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            Applied
          </div>
        ) : match.status === 'declined' ? (
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">
            <XCircle className="h-4 w-4 mr-2" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Declined
          </div>
        ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='flex gap-2 w-full'>
            <Button
              className='flex-1'
          <div className="flex gap-2 w-full">
            <Button 
              className="flex-1" 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <div className='flex gap-2 w-full'>
            <Button
              className='flex-1'
>>>>>>>               onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button
              variant='outline'
              className='flex-1'
              onClick={() => onDecline(match.id)}            >
              Decline
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onDecline(match.id)}
            >;
              Decline;
            </Button>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
      </CardFooter>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         )}
      </CardFooter>;
    </Card>;
  );
};
}
>>>>>>> 
        )}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
        <div className='grid grid-cols-2 gap-2 mb-2 mt-3'>;
          <div className='flex items-center text-sm'>;
            <DollarSign className='h-4 w-4 mr-1 text-muted-foreground' />$;
            {job && job.budget.min} - ${job && job.budget.max}
          </div>;
          <div className='flex items-center text-sm'>;
            <Calendar className='h-4 w-4 mr-1 text-muted-foreground' />;
            Due: {format(new Date(job && job.deadline), 'MMM d, yyyy')}
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='p-4 pt-0'>;
        {match && match.status === 'applied' || showApplied ? (;
          <div className='w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md'>;
            <CheckCircle className='h-4 w-4 mr-2' />;
            Applied;
          </div>;
        ) : match && match.status === 'declined' ? (;
          <div className='w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md'>;
            <XCircle className='h-4 w-4 mr-2' />;
            Declined;
          </div>;
        ) : (;
          <div className='flex gap-2 w-full'>;
            <Button
              className='flex-1'
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;
            <Button
              variant='outline'
              className='flex-1'
              onClick={() => onDecline(match && match.id)}            >;
=======
          <Badge variant="outline" className="flex items-center">;
            {match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p-4 pt-0">;
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;
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
<<<<<<< HEAD
        ;
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;
          <div className="flex items-center text-sm">;
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />;
            ${job.budget.min} - ${job.budget.max}
          </div>;
          <div className="flex items-center text-sm">;
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;
            Due:{format(new Date(job.deadline), "MMM d, yyyy")}
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="p-4 pt-0">;
        {match.status === 'applied' || showApplied ? (;
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;
            <CheckCircle className="h-4 w-4 mr-2" />;
            Applied;
          </div>;
        ) :match.status === 'declined' ? (;
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;
            <XCircle className="h-4 w-4 mr-2" />;
            Declined;
          </div>;
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
=======


          <div className="flex gap-2 w-full">
            <Button 
              className="flex-1" 


              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>


            <Button 
              variant="outline" 
              className="flex-1"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              onClick={() => onDecline(match.id)}
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              Decline;
            </Button>;
          </div>;
        )}
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx


<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date - fns';
import { JobMatch } from '@/types / jobs';
interface JobMatchCardProps {
  match: JobMatch;
  on_apply: (match_id: string, job_id: string) => void;
  on_decline: (match_id: string) => void;
  show_applied?: boolean;
export /**
 * JobMatchesCard - Function description
 */
function JobMatchesCard() {
  const job = match.job;
  // Check condition
if (return null) {
  $2
}
  return (
    <Card className='overflow - hidden border - l-4 border - l-blue - 500'>;
      <CardHeader className='p - 4 pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div>;
            <CardTitle className='text - lg'>{job.title}</CardTitle>;
            <CardDescription>;
              Posted {format (new Date (job.created_at), 'MMM d')}
              {match.status === 'viewed' && match.viewed_at && (
                <span className='ml - 2 text - xs text - muted - foreground'>;
                  (Viewed {format (new Date (match.viewed_at), 'MMM d')});
                </span>)}
            </CardDescription>;
          </div>;
          <Badge variant='outline' className='flex items - center'>;
            {match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className='p - 4 pt - 0'>;
        <p className='text - sm text - muted - foreground line - clamp - 2 mb - 3'>;
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && (
          <div className='mb - 3'>;
            <p className='text - xs text - muted - foreground mb - 1'>;
              Matched skills:;
            </p>;
            <div className='flex flex - wrap gap - 1'>;
              {match.matched_skills.slice (0, 5).map ((skill, i) => (
                <Badge key={i} variant='secondary' className='text - xs'>                  {skill}
                </Badge>))}
              {match.matched_skills.length > 5 && (
                <Badge variant='secondary' className='text - xs'>;
                  +{match.matched_skills.length - 5}
                </Badge>)}
            </div>;
          </div>)}
        <div className='grid grid - cols - 2 gap - 2 mb - 2 mt - 3'>;
          <div className='flex items - center text - sm'>;
            <DollarSign className='h - 4 w - 4 mr - 1 text - muted - foreground' />$;
            {job.budget.min} - ${job.budget.max}
          </div>;
          <div className='flex items - center text - sm'>;
            <Calendar className='h - 4 w - 4 mr - 1 text - muted - foreground' />;
            Due: {format (new Date (job.deadline), 'MMM d, yyyy')}
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='p - 4 pt - 0'>;
        {match.status === 'applied' || show_applied ? (
          <div className='w - full flex items - center justify - center p - 2 bg - green - 50 text - green - 700 rounded - md'>;
            <CheckCircle className='h - 4 w - 4 mr - 2' />;
            Applied;
          </div>) : match.status === 'declined' ? (
          <div className='w - full flex items - center justify - center p - 2 bg - red - 50 text - red - 700 rounded - md'>;
            <XCircle className='h - 4 w - 4 mr - 2' />;
            Declined;
          </div>) : (
          <div className='flex gap - 2 w - full'>;
            <Button;
              className='flex - 1';
              on_click={() => on_apply (match.id, job.id)}
            >;
              Apply Now;
            </Button>;
            <Button;
              variant='outline';
              className='flex - 1';
              on_click={() => on_decline (match.id)}            >;
              Decline;
            </Button>;
          </div>)}
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/JobMatchesCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> ;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 interface JobMatchCardProps {;
  match: JobMatch;
onApply: (matchId: string, jobId: string) => void;
onDecline: (matchId: string) => void;
showApplied?: boolean ;
}export function JobMatchesCard ({;
  match, onApply,  onDecline, showApplied = false ;
}: JobMatchCardProps) {;
  const job = match.job;
return (<Card className="overflow-hidden border-l-4 border-l-blue-500" > <CardHeader className="p-4 pb-2" > <div className="flex justify-between items-start" > <div> <CardTitle className="text-lg" > {;
  job.title ;
}</CardTitle> <CardDescription> </span>) ;
}</CardDescription> </div> + {;
  match.matched skills.length - 5 ;
}</Badge>) ;
}</div> </div>) ";
}Applied </div>) : match.status === 'declined' ? (<div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md" > <XCircle className="h-4 w-4 mr-2" /> Declined </div> > Apply Now </Button> <Button > Decline </Button> </div>) ;
}</CardFooter> </Card>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/JobMatchesCard.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
