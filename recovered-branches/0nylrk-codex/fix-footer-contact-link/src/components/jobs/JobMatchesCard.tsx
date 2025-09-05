
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",
import { format } from "date-fns",
import { JobMatch } from "@/types/jobs",
=======
import { useState } from &quot;react&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { DollarSign, Calendar, CheckCircle, XCircle } from &quot;lucide-react&quot;;
import { format } from &quot;date-fns&quot;;
import { JobMatch } from &quot;@/types/jobs&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface JobMatchCardProps {
  match: JobMatch,
  onApply: (matchId: string, jobId: string) => void,
  onDecline: (matchId: string) => void,
  showApplied?: boolean
}

export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
  const job = match.job,
  
  if (!job) return null,
  
  return (
    <Card className=&quot;overflow-hidden border-l-4 border-l-blue-500&quot;>
      <CardHeader className=&quot;p-4 pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div>
            <CardTitle className=&quot;text-lg&quot;>{job.title}</CardTitle>
            <CardDescription>
              Posted {format(new Date(job.created_at), &quot;MMM d&quot;)}
              {match.status === 'viewed' && match.viewed_at && (
                <span className=&quot;ml-2 text-xs text-muted-foreground&quot;>
                  (Viewed {format(new Date(match.viewed_at), &quot;MMM d&quot;)})
                </span>
              )}
            </CardDescription>
          </div>
          <Badge variant=&quot;outline&quot; className=&quot;flex items-center&quot;>
            {match.match_score}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className=&quot;p-4 pt-0&quot;>
        <p className=&quot;text-sm text-muted-foreground line-clamp-2 mb-3&quot;>
          {job.description}
        </p>
        
        {match.matched_skills?.length > 0 && (
          <div className=&quot;mb-3&quot;>
            <p className=&quot;text-xs text-muted-foreground mb-1&quot;>Matched skills:</p>
            <div className=&quot;flex flex-wrap gap-1&quot;>
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
=======
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
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;
            {match.match_score}% Match;
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p-4 pt-0">;
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;
          {job.description}
        </p>;
        {match.matched_skills?.length > 0 && (;
          <div className="mb-3">;
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>;
            <div className="flex flex-wrap gap-1">;
              {match.matched_skills.slice(0, 5).map((skill, i) => (;
                <Badge key={i} variant="secondary" className="text-xs">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {skill}
                </Badge>;
              ))}
<<<<<<< HEAD
              {match.matched_skills.length > 5 && (
                <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
=======
              {match.matched_skills.length > 5 && (;
                <Badge variant="secondary" className="text-xs">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  +{match.matched_skills.length - 5}
                </Badge>;
              )}
            </div>;
          </div>;
        )}
<<<<<<< HEAD
        
        <div className=&quot;grid grid-cols-2 gap-2 mb-2 mt-3&quot;>
          <div className=&quot;flex items-center text-sm&quot;>
            <DollarSign className=&quot;h-4 w-4 mr-1 text-muted-foreground&quot; />
            ${job.budget.min} - ${job.budget.max}
          </div>
          <div className=&quot;flex items-center text-sm&quot;>
            <Calendar className=&quot;h-4 w-4 mr-1 text-muted-foreground&quot; />
            Due: {format(new Date(job.deadline), &quot;MMM d, yyyy&quot;)}
          </div>
        </div>
      </CardContent>
      <CardFooter className=&quot;p-4 pt-0&quot;>
        {match.status === 'applied' || showApplied ? (
          <div className=&quot;w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md&quot;>
            <CheckCircle className=&quot;h-4 w-4 mr-2&quot; />
            Applied
          </div>
        ) : match.status === 'declined' ? (
          <div className=&quot;w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md&quot;>
            <XCircle className=&quot;h-4 w-4 mr-2&quot; />
            Declined
          </div>
        ) : (
          <div className=&quot;flex gap-2 w-full&quot;>
            <Button 
              className=&quot;flex-1&quot; 
              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>
            <Button 
              variant=&quot;outline&quot; 
              className=&quot;flex-1&quot;
=======
;
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;
          <div className="flex items-center text-sm">;
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />;
            ${job.budget.min} - ${job.budget.max}
          </div>;
          <div className="flex items-center text-sm">;
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="p-4 pt-0">;
        {match.status === 'applied' || showApplied ? (;
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;
            <CheckCircle className="h-4 w-4 mr-2" />;
            Applied;
          </div>;
        ) : match.status === 'declined' ? (;
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;
            <XCircle className="h-4 w-4 mr-2" />;
            Declined;
          </div>;
        ) : (;
          <div className="flex gap-2 w-full">;
            <Button;
              className="flex-1";
              onClick={() => onApply(match.id, job.id)}
            >;
              Apply Now;
            </Button>;
            <Button;
              variant="outline";
              className="flex-1";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              onClick={() => onDecline(match.id)}
            >;
              Decline;
            </Button>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
  );
}
;