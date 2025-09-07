<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======
<<<<<<< HEAD
import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
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

import { useState } from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react'
import { format } from "date-fns",
import { JobMatch } from "@/types/jobs",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface JobMatchCardProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
import { useState } from 'react';
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
origin/cursor/automate-test-improve-and-merge-code-2533
interface JobMatchCardProps {

import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardFooter,;'
} from '@/components/ui/card';'
import { Badge } from '@/components/ui/badge';'
import { Button } from '@/components/ui/button';'
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';'
import { format } from 'date-fns';'
import { JobMatch } from '@/types/jobs';
interface JobMatchCardProps {;
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

=======
<<<<<<< HEAD

interface JobMatchCardProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;

  showApplied?: boolean
<<<<<<< HEAD

export function JobMatchesCard({
  match
  onApply
  onDecline
  showApplied = false
}: JobMatchCardProps) {
  const job = match.job
  if (!job) return null
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
  
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean
export function JobMatchesCard(): any ({;
  match,;
  onApply,;
  onDecline,;
  showApplied = false,;
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

  return ('
    <Card className='overflow-hidden border-l-4 border-l-blue-500'>;'
      <CardHeader className='p-4 pb-2'>;'

=======
}: JobMatchCardProps) {;
  const job = match && match.job;
  return (
  
    <Card className='overflow-hidden border-l-4 border-l-blue-500'>;
      <CardHeader className='p-4 pb-2'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
        <div className='flex justify-between items-start'>;
}
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }:,  JobMatchCardProps) {
  const job = match.job,
  if (!job) return null,
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500">"
      <CardHeader className="p-4 pb-2">"
        <div className="flex justify-between items-start">"
          <div>
            <CardTitle className="text-lg">{job.title}</CardTitle>"
            <CardDescription>
              Posted {format(new Date(job.created_at), "MMM d")}"
              {match.status === 'viewed' && match.viewed_at && ('
                <span className="ml-2 text-xs text-muted-foreground">"
                  (Viewed {format(new Date(match.viewed_at), "MMM d")})"

export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {

  if (!job) return null,

<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======

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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>

            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => ("
                <Badge key={i} variant="secondary" className="text-xs">"
import { useState } from "react",;"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;'
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';"
import { format } from "date-fns",;"
import { JobMatch } from "@/types/jobs",;
interface JobMatchCardProps {;
  match: JobMatch,;
  onApply: (matchId: string, jobId:,  string) => void,;
  onDecline: (matchId:,  string) => void,;
  showApplied?: boolean;
}
;
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }:,  JobMatchCardProps) {;
  onApply: (matchId: string, jobId: string) => void,;
  onDecline: (matchId: string) => void,;
  showApplied?: boolean;
}
;
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

=======
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {;
  const job = match.job;
  if (!job) return null;
  return (;
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;
      <CardHeader className="p-4 pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
<<<<<<< HEAD
            <CardTitle className="text-lg">{job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job.created_at), "MMM d")}
              {match.status === 'viewed' && match.viewed_at && (;
                <span className="ml-2 text-xs text-muted-foreground">;
                  (Viewed {format(new Date(match.viewed_at), "MMM d")});
            </CardDescription>;
          </div>;
=======
            <CardTitle className='text-lg'>{job && job.title}</CardTitle>;
            <CardDescription>;
              Posted {format(new Date(job && job.created_at), 'MMM d')}
              {match && match.status === 'viewed' && match && match.viewed_at && (;
                <span className='ml-2 text-xs text-muted-foreground'>;
                  (Viewed {format(new Date(match && match.viewed_at), 'MMM d')});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
                </span>;
              )}
            </CardDescription>;

            <p className='text-xs text-muted-foreground mb-1'>;
              Matched skills:;
            </p>;'
            <div className='flex flex-wrap gap-1'>;
              {match && match.matched_skills.slice(0, 5).map((skill, i) => (;

<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Badge key={i} variant='secondary' className='text-xs'>                  {skill}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
                </Badge>;
              )}
            </div>;
          </div>;
        )}
<<<<<<< HEAD
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
=======

<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
        <div className='grid grid-cols-2 gap-2 mb-2 mt-3'>
          <div className='flex items-center text-sm'>
            <DollarSign className='h-4 w-4 mr-1 text-muted-foreground' />$
            {job.budget.min} - ${job.budget.max}
<<<<<<< HEAD
        
=======

<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">

            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${job.budget.min} - ${job.budget.max}
<<<<<<< HEAD
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>
      <CardFooter className='p-4 pt-0'>
        {match.status === 'applied' |showApplied ? (
          <div className='w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md'>
            <CheckCircle className='h-4 w-4 mr-2' />
=======

<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </div>
          <div className='flex items-center text-sm'>
            <Calendar className='h-4 w-4 mr-1 text-muted-foreground' />
            Due: {format(new Date(job.deadline), 'MMM d, yyyy')}
          </div>
        </div>
      </CardContent>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
      <CardFooter className="p-4 pt-0">
        {match.status === 'applied' || showApplied ? (
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
            Applied
          </div>
        ) : match.status === 'declined' ? (
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">
            <XCircle className="h-4 w-4 mr-2" />
            Declined
          </div>
        ) : (
          <div className='flex gap-2 w-full'>
            <Button
              className='flex-1'
          <div className="flex gap-2 w-full">
            <Button 
              className="flex-1" 
              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
          <div className='flex gap-2 w-full'>
            <Button
              className='flex-1'
            >
              Apply Now
            </Button>
            <Button
              variant='outline'
              className='flex-1'
              onClick={() => onDecline(match.id)}            >
              Decline
            </Button>
=======

<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx
=======

            Applied
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onDecline(match.id)}
            >;
              Decline;
            </Button>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
  );
      </CardFooter>;
    </Card>;
  );
};
}
        )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
        <div className='grid grid-cols-2 gap-2 mb-2 mt-3'>;
          <div className='flex items-center text-sm'>;

            <DollarSign className='h-4 w-4 mr-1 text-muted-foreground' />$;
            {job && job.budget.min} - ${job && job.budget.max}

          </div>;
        </div>;
      </CardContent>;'
      <CardFooter className='p-4 pt-0'>;'
        {match && match.status === 'applied' || showApplied ? (;'
          <div className='w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md'>;'
            <CheckCircle className='h-4 w-4 mr-2' />;
            Applied;
          </div>;'
        ) : match && match.status === 'declined' ? (;'
          <div className='w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md'>;'
            <XCircle className='h-4 w-4 mr-2' />;
            Declined;
          </div>;
        ) : (;'
          <div className='flex gap-2 w-full'>;
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

=======
            <Button
              className='flex-1'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;

              onClick={() => onDecline(match && match.id)}            >;
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

          <div className="flex gap-2 w-full">
            <Button "
              className="flex-1" 

              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now;
            </Button>

            <Button 
              variant="outline" 

              className="flex-1"
              onClick={() => onDecline(match.id)}
            >;
              Decline;
            </Button>;
          </div>;
        )}
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

import {}
=======
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
=======
  );

}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import { useState } from 'react';
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,

  show_applied?: boolean;
export /**;
 * JobMatchesCard - Function description;
 */
function JobMatchesCard() {}
  const job = match.job;

}
  return ('
    <Card className='overflow - hidden border - l-4 border - l-blue - 500'>;'
      <CardHeader className='p - 4 pb - 2'>;'
        <div className='flex justify - between items - start'>;
          <div>;'
            <CardTitle className='text - lg'>{job.title}</CardTitle>;

                  (Viewed {format (new Date (match.viewed_at), 'MMM d')});
                </span>)}
            </CardDescription>;
          </div>;'
          <Badge variant='outline' className='flex items - center'>;
            {match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;'
      <CardContent className='p - 4 pt - 0'>;'
        <p className='text - sm text - muted - foreground line - clamp - 2 mb - 3'>;
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && ('
          <div className='mb - 3'>;'
            <p className='text - xs text - muted - foreground mb - 1'>;
              Matched skills:;
            </p>;'
            <div className='flex flex - wrap gap - 1'>;

                </Badge>))}
              {match.matched_skills.length > 5 && ('
                <Badge variant='secondary' className='text - xs'>;
                  +{match.matched_skills.length - 5}
                </Badge>)}
            </div>;

            <XCircle className='h - 4 w - 4 mr - 2' />;
            Declined;
          </div>) : ('
          <div className='flex gap - 2 w - full'>;
            <Button;'
              className='flex - 1';
              on_click={() => on_apply (match.id, job.id)}
            >;
              Apply Now;
            </Button>;
            <Button;'
              variant='outline';'
              className='flex - 1';
              on_click={() => on_decline (match.id)}            >;
              Decline;
            </Button>;
          </div>)}
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD:src-disabled/components/jobs/JobMatchesCard.tsx

;
}}}}}})))))
;
      </CardFooter>
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
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
};
}
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/JobMatchesCard.tsx
