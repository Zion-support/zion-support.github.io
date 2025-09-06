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
<<<<<<< HEAD
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
