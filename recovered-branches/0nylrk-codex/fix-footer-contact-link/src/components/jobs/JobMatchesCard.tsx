
import { useState } from "react";
<<<<<<< HEAD
import { CardContentCardHeaderCardTitleCardDescriptionCardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSignCalendarCheckCircleXCircle } from "lucide-react";
=======
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";

interface JobMatchCardProps {
  match: JobMatch;
<<<<<<< HEAD
  onApply: (matchId: stringjobId: string) => void;
=======
  onApply: (matchId: string, jobId: string) => void;
>>>>>>> origin/auto/autonomy-17186719616
  onDecline: (matchId: string) => void;
  showApplied?: boolean;
}

<<<<<<< HEAD
export function JobMatchesCard({ matchonApplyonDeclineshowApplied = false }: JobMatchCardProps) {
=======
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false }: JobMatchCardProps) {
>>>>>>> origin/auto/autonomy-17186719616
  const job = match.job;
  
  if (!job) return null;
  
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <CardDescription>
<<<<<<< HEAD
              Posted {format(new Date(job.created_at)"MMM d")}
              {match.status === 'viewed' && match.viewed_at && (
                <span className="ml-2 text-xs text-muted-foreground">
                  (Viewed {format(new Date(match.viewed_at)"MMM d")})
=======
              Posted {format(new Date(job.created_at), "MMM d")}
              {match.status === 'viewed' && match.viewed_at && (
                <span className="ml-2 text-xs text-muted-foreground">
                  (Viewed {format(new Date(match.viewed_at), "MMM d")})
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
              {match.matched_skills.slice(05).map((skilli) => (
=======
              {match.matched_skills.slice(0, 5).map((skill, i) => (
>>>>>>> origin/auto/autonomy-17186719616
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
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${job.budget.min} - ${job.budget.max}
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
<<<<<<< HEAD
            Due: {format(new Date(job.deadline)"MMM dyyyy")}
=======
            Due: {format(new Date(job.deadline), "MMM d, yyyy")}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {match.status === 'applied' || showApplied ? (
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
<<<<<<< HEAD
              onClick={() => onApply(match.idjob.id)}
=======
              onClick={() => onApply(match.id, job.id)}
>>>>>>> origin/auto/autonomy-17186719616
            >
              Apply Now
            </Button>
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
  );
}
