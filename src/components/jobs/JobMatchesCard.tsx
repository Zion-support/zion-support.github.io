import { format } from "date-fns";
import { JobMatch } from "@/types/jobs";
import { useState } from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react'
import { format } from "date-fns",
import { JobMatch } from "@/types/jobs",
  match: JobMatch;

  return (
    <Card className='overflow-hidden border-l-4 border-l-blue-500'>;
      <CardHeader className='p-4 pb-2'>;
        <div className='flex justify-between items-start'>;



}


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
                </Badge>
              onClick={() => onApply(match && match.id, job && job.id)}
            >;
              Apply Now;
            </Button>;
            <Button
              variant='outline'
              className='flex-1'
              onClick={() => onDecline(match && match.id)}            >;
              Decline;
            </Button>;
          </div>;
        )}


          <div className="flex gap-2 w-full">
            <Button 
              className="flex-1" 


              onClick={() => onApply(match.id, job.id)}
            >
              Apply Now
            </Button>


        )}

;
