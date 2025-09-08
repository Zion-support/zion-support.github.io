
<<<<<<< HEAD

=======
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardFooter,;


import { useState } from "react";
import {};
  Card;
  CardContent;
  CardHeader;
  CardTitle;
  CardDescription;
  CardFooter"
import { useState } from "react";
import {}
  Card,
  CardContent,
  CardHeader,
CardTitle
  CardDescription,
CardFooter
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react";

<<<<<<< HEAD
interface JobMatchCardProps {;

import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";

=======
import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
interface JobMatchCardProps {
  match: JobMatch,
  onApply: (matchId: string, jobId: string) => void,
  onDecline: (matchId: string) => void,
  showApplied?: boolean
}

export function JobMatchesCard({ match, onApply, onDecline, showApplied = $2;
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
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
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
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$
            {job.budget.min} - ${job.budget.max}
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {match.status === "applied" |showApplied ? (
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
            Applied
          </div>
        ) : match.status === 'declined' ? (
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">
            <XCircle className="h-4 w-4 mr-2" />
            Declined
          </div>
        ) : (
          <div className="flex gap-2 w-full">
            <Button 
              className="flex-1" 
              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
>>>>>>> origin/cursor/delete-old-data-records-6bba
  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean;
}
<<<<<<< HEAD


  if (!job) return null;


=======

  if (!job) return null;

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface JobMatchCardProps {

  match: JobMatch,
  onApply: (matchId: string, jobId: string) => void,
  onDecline: (matchId: string) => void,
  showApplied?: boolean;
}


<<<<<<< HEAD
=======
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {}
  const job = match.job,
  
  if (!job) return null,
>>>>>>> origin/cursor/delete-old-data-records-6bba

        {match.matched_skills?.length > 0 && (

            <p className="text-xs text-muted-foreground mb-1">
              Matched skills:
            </p>"
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => ("
                <Badge key={i} variant="secondary" className="text-xs">


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export function JobMatchesCard() { return null; }
            <CardTitle className="text-lg">{job.title}</CardTitle>;
            <CardDescription>;"
              Posted {format(new Date(job.created_at), "MMM d")}
              {match.status === 'viewed' && match.viewed_at && (;"
                <span className="ml-2 text-xs text-muted-foreground">;"
                  (Viewed {format(new Date(match.viewed_at), "MMM d")});
                </span>;
              )}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p-4 pt-0">;

        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                <Badge variant="secondary" className="text-xs">
                  +{match.matched_skills.length - 5}
                </Badge>
              )}
            </div>
          </div>
        )}

                <Badge key={i} variant="secondary" className="text-xs">;

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
=======

                  {skill}
                </Badge>;
              ))}

                <Badge variant="secondary" className="text-xs">;
                  +{match && match.matched_skills.length - 5}
                </Badge>;
              )}
            </div>;
          </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        )}

        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$
            {job.budget.min} - ${job.budget.max}

<<<<<<< HEAD


=======
        
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">

            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${job.budget.min} - ${job.budget.max}


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>

          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />

            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>"
      <CardFooter className="p-4 pt-0">


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">

            <CheckCircle className="h-4 w-4 mr-2" />
            Applied;
          </div>
<<<<<<< HEAD

=======


'
        ) : match.status === 'declined' ? (
"
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">"
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <XCircle className="h-4 w-4 mr-2" />
            Declined;
          </div>
        ) : ("
          <div className="flex gap-2 w-full">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <Button
              className="flex-1"


            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$;
            {job && job.budget.min} - ${job && job.budget.max}
          </div>;"
          <div className="flex items-center text-sm">;"
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;"
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </div>;
        </div>;
      </CardContent>;"
      <CardFooter className="p-4 pt-0">;
<<<<<<< HEAD

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
=======

"
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;"
            <CheckCircle className="h-4 w-4 mr-2" />;
            Applied;
          </div>;
"
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;"
            <XCircle className="h-4 w-4 mr-2" />;
            Declined;
          </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

            <Button

              className="flex-1"
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;

<<<<<<< HEAD
            <Button
              variant="outline"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className="flex-1" 

              onClick={() => onApply(match.id, job.id)}
            >
<<<<<<< HEAD

              Apply Now
            </Button>


=======


            <Button 
              variant="outline" 

              className="flex-1"
              onClick={() => onDecline(match && match.id)}


              Apply Now;
            </Button>

            <Button "
              variant="outline" 
"
              className="flex-1"
              onClick={() => onDecline(match && match.id)}

"
              className="flex-1"
              onClick={() => onDecline(match && match.id)}

            >;
              Decline;

            </Button>;
          </div>;
        )});

import { useState  } from './react';
import {}
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,';
} from '@/components / ui / card';'
import { Badge  } from '@/components / ui / badge';'
import { Button  } from '@/components / ui / button';'
import { DollarSign, Calendar, CheckCircle, XCircle  } from './lucide-react';'
import { format  } from './date - fns';'
import { JobMatch  } from '@/types / jobs';
interface JobMatchCardProps {}
  match: JobMatch;
  on_apply: (match_id: string, job_id: string) => void;
  on_decline: (match_id: string) => void;
  show_applied?: boolean;
}
  if (!job) return null;export function JobMatchesCard() {
}
const job = match.job,;
  if (!job) return null,
return (  return (;
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;"
      <CardHeader className="p-4 pb-2">;"
        <div className="flex justify-between items-start">;"
          <div>;        {match.matched_skills?.length > 0 && (
          <div className="mb-3">"
            <p className="text-xs text-muted-foreground mb-1">"
              }
              Matched "skills":
            </p>
            <div className="flex flex-wrap gap-1">"
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",;"
import { format } from "date-fns",;"
import { JobMatch } from "@/types/jobs",;"
interface JobMatchCardProps {;
  }
  "match": JobMatch,;
  "onApply": ("matchId": string, "jobId": string) => void,;
  "onDecline": ("matchId": string) => void,;
  showApplied?: boolean;
}
;
export function JobMatchesCard() {;
  }
  const job = match.job;
;
  // Check condition;
if (return null) {}
  $2;
}
  return ("
    <Card className="overflow - hidden border - l-4 border - l-blue - 500">;"
      <CardHeader className="p - 4 pb - 2">;"
        <div className="flex justify - between items - start">;
          <div>;"
            <CardTitle className="text - lg">{job.title}</CardTitle>;
            <CardDescription>;"
              Posted {format (new Date (job.created_at), "MMM d")}"
              {match.status === "viewed" && match.viewed_at && ("
                <span className="ml - 2 text - xs text - muted - foreground">;"
                  (Viewed {format (new Date (match.viewed_at), "MMM d")});
                </span>)}
            </CardDescription>;
          </div>;"
          <Badge variant="outline" className="flex items - center">;
            {match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;"
      <CardContent className="p - 4 pt - 0">;"
        <p className="text - sm text - muted - foreground line - clamp - 2 mb - 3">;
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && ("
          <div className="mb - 3">;"
            <p className="text - xs text - muted - foreground mb - 1">;
              Matched skills:;
            </p>;"
            <div className="flex flex - wrap gap - 1">;
              {match.matched_skills.slice (0, 5).map ((skill, i) => ("
                <Badge key={i} variant="secondary" className="text - xs">;
                  {skill}
                </Badge>))}
              {match.matched_skills.length > 5 && ("
                <Badge variant="secondary" className="text - xs">;
                  +{match.matched_skills.length - 5}
                </Badge>)}
            </div>;
          </div>)}"
        <div className="grid grid - cols - 2 gap - 2 mb - 2 mt - 3">;"
          <div className="flex items - center text - sm">;"
            <DollarSign className="h - 4 w - 4 mr - 1 text - muted - foreground" />$;
            {job.budget.min} - ${job.budget.max}
          </div>;"
          <div className="flex items - center text - sm">;"
            <Calendar className="h - 4 w - 4 mr - 1 text - muted - foreground" />;"
            Due: {format (new Date (job.deadline), "MMM d, yyyy")}
          </div>;
        </div>;
      </CardContent>;"
      <CardFooter className="p - 4 pt - 0">;"
        {match.status === "applied" || show_applied ? ("
          <div className="w - full flex items - center justify - center p - 2 bg - green - 50 text - green - 700 rounded - md">;"
            <CheckCircle className="h - 4 w - 4 mr - 2" />;
            Applied;"
          </div>) : match.status === "declined" ? ("
          <div className="w - full flex items - center justify - center p - 2 bg - red - 50 text - red - 700 rounded - md">;"
            <XCircle className="h - 4 w - 4 mr - 2" />;
            Declined;
          </div>) : ("
          <div className="flex gap - 2 w - full">;
            <Button;"
              className="flex - 1";
              on_click={() => on_apply (match.id, job.id)}
            >;
              Apply Now;
            </Button>;
            <Button;"
              variant="outline";"
              className="flex - 1";
              on_click={() => on_decline (match.id)}

>>>>>>> origin/cursor/delete-old-data-records-6bba
            >;
              Decline;
            </Button>;
          </div>)}
      </CardFooter>;
    </Card>);
}

<<<<<<< HEAD
=======
            <Button
              variant="outline"
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onDecline(match.id)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            >
              Decline
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
      </CardFooter>;
    </Card>;
<<<<<<< HEAD



=======
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
});
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

  CardFooter,;

"
} from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react";""
import { format } from "date-fns";""
import { JobMatch } from "@/types/jobs";"
interface JobMatchCardProps {;
interface JobMatchCardProps {
  // TODO: Implement
  match: JobMatch;,
  onApply: (matchId: string, jobId: string) => void;,
  onDecline: (matchId: string) => void;
  showApplied?: boolean;

export function JobMatchesCard(): any ({;
  match,;
  onApply,;
  onDecline,;
  showApplied = false,;)
}: JobMatchCardProps) {;
  const job = match && match.job;

  if (!job) return null;

  // TODO: Implement
  match: JobMatch,
  onApply: (matchId: string, jobId: string) => void,
  onDecline: (matchId: string) => void,

export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {

  const job = match.job,
  if (!job) return null,

  return ()
  return (
import { useState } from "react",;""
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;""
import { Badge } from "@/components/ui/badge",;""
import { Button } from "@/components/ui/button",;""
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",;""
import { format } from "date-fns",;""
import { JobMatch } from "@/types/jobs",;"
;
  match:JobMatch,;)
  onApply:(matchId:string, jobId:string) => void,;
  onDecline:(matchId:string) => void,;
  showApplied?:boolean;
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false } JobMatchCardProps) {;
  const job = match.job,;
  if (!job) return null,;
  return (;
  return ("
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;"
      <CardHeader className="p-4 pb-2">;"
        <div className="flex justify-between items-start">;"
</div>
          <div>;
</div>"
            <CardTitle className="text-lg">{job && job.title};"
            <CardDescription>;
                <span className="ml-2 text-xs text-muted-foreground">;"
</span>
                </span>;"
          <div className="mb-3">"
            <p className="text-xs text-muted-foreground mb-1">"
</p>
            </p>"
            <div className="flex flex-wrap gap-1">"
                <Badge key={i} variant="secondary" className="text-xs">"
            <CardTitle className="text-lg">{job.title};"
                </span>;
          </div>;"
          <Badge variant="outline" className="flex items-center">;"

        </div>;
      ;"
      <CardContent className="p-4 pt-0">;"
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;"
        </p>;"
          <div className="mb-3">;"
            <p className="text-xs text-muted-foreground mb-1">;"
            <div className="flex flex-wrap gap-1">;"
                <Badge key={i} variant="secondary" className="text-xs">;"

                <Badge variant="secondary" className="text-xs">;"

            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>;""

                <Badge variant="secondary" className="text-xs">"

        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">"
          <div className="flex items-center text-sm">"
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$"
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />"

            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />"

      <CardFooter className="p-4 pt-0">"
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">"
            <CheckCircle className="h-4 w-4 mr-2" />"

          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">"
            <XCircle className="h-4 w-4 mr-2" />"

          <div className="flex gap-2 w-full">"
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;"
          <div className="flex items-center text-sm">;"
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$;"

            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;"

      <CardFooter className="p-4 pt-0">;"
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;"
            <CheckCircle className="h-4 w-4 mr-2" />;"

          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;"
            <XCircle className="h-4 w-4 mr-2" />;"

          <div className="flex gap-2 w-full">;"
            <Button;"
              className="flex-1"")
              onClick={() => onApply(match && match.id, job && job.id)}

              variant="outline""
              className="flex-1""
              onClick={() => onApply(match.id, job.id)}

              variant="outline"""
              onClick={() => onDecline(match && match.id)}

</Button>

            </Button>;
          </div>;
      </CardFooter>;

    </Card>;"
    <Card className="overflow - hidden border - l-4 border - l-blue - 500">;"
      <CardHeader className="p - 4 pb - 2">;"
        <div className="flex justify - between items - start">;"
            <CardTitle className="text - lg">{job.title};"
                <span className="ml - 2 text - xs text - muted - foreground">;"
                </span>)}
          <Badge variant="outline" className="flex items - center">;"

      <CardContent className="p - 4 pt - 0">;"
        <p className="text - sm text - muted - foreground line - clamp - 2 mb - 3">;"
          <div className="mb - 3">;"
            <p className="text - xs text - muted - foreground mb - 1">;"
            <div className="flex flex - wrap gap - 1">;"
                <Badge key={i} variant="secondary" className="text - xs">;"

                ))}"
                <Badge variant="secondary" className="text - xs">;"

                )}
          </div>)}"
        <div className="grid grid - cols - 2 gap - 2 mb - 2 mt - 3">;"
          <div className="flex items - center text - sm">;"
            <DollarSign className="h - 4 w - 4 mr - 1 text - muted - foreground" />$;"

            <Calendar className="h - 4 w - 4 mr - 1 text - muted - foreground" />;"

      <CardFooter className="p - 4 pt - 0">;"
          <div className="w - full flex items - center justify - center p - 2 bg - green - 50 text - green - 700 rounded - md">;"
            <CheckCircle className="h - 4 w - 4 mr - 2" />;"
          </div>) : match.status === "declined" ? (""
          <div className="w - full flex items - center justify - center p - 2 bg - red - 50 text - red - 700 rounded - md">;"
            <XCircle className="h - 4 w - 4 mr - 2" />;"
)
          </div>) : ("
          <div className="flex gap - 2 w - full">;"
              className="flex - 1";")
              on_click={() => on_apply (match.id, job.id)}

              variant="outline";""
              className="flex - 1";"
              on_click={() => on_decline (match.id)}

          </div>)});"
pr-12325
      </CardFooter>;
    </Card>);

<<<<<<< HEAD

}


=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
