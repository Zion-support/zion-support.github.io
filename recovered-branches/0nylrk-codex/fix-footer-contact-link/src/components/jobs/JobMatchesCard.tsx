

import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
interface JobMatchCardProps {;  match: JobMatch;
  onApply: (matchId: string, jobId: string) => void;
  onDecline: (matchId: string) => void;
  showApplied?: boolean
}
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



export function JobMatchesCard(): any ({;
  match,;
  onApply,;
  onDecline,;
  showApplied = false,;
}: JobMatchCardProps) {;
  const job = match && match.job;


  if (!job) return null;


  match,
  onApply,
  onDecline,
  showApplied = false,
}: JobMatchCardProps) {;
  const job = match.job;

  if (!job) return null;
  const job = match.job,
  
  if (!job) return null,
  
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
  return (

  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;
      <CardHeader className="p-4 pb-2">;
        <div className="flex justify-between items-start">;
          <div>;

        


        

        {match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">
              Matched skills:
            </p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, 5).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">





          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">

        {match.status === "applied" |showApplied ? (
        {match.status === 'applied' || showApplied ? (

        {match.status === 'applied' || showApplied ? (

        {match.status === "applied" |showApplied ? (
        {match.status === 'applied' || showApplied ? (
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
            Applied
          </div>


        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">;
          <div className="flex items-center text-sm">;
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />$;
            {job && job.budget.min} - ${job && job.budget.max}
          </div>;
          <div className="flex items-center text-sm">;
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />;
            Due: {format(new Date(job && job.deadline), "MMM d, yyyy")}
            <Button
              className="flex-1"
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;
            <Button
              variant="outline"
            <Button 
              variant="outline"               className="flex-1"
              onClick={() => onDecline(match && match.id)}
            <Button
              variant="outline"
            <Button 
              variant="outline" 

              className="flex-1"
              onClick={() => onDecline(match && match.id)}
            >;
              Decline;
            </Button>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
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
}
}
