<<<<<<< HEAD
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
import { JobApplication, ApplicationStatus } from '@/types/jobs';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (
    applicationId: string,
    newStatus: ApplicationStatus
  ) => Promise<void>;
=======

import Link from "next/link";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button";
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string,) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus,) => Promise<void>
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
}: ApplicationActionsProps) {
  return (
<<<<<<< HEAD
    <div className='flex items-center justify-end gap-2'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
=======
    <div className="flex items-center justify-end gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick = {(,) => onViewApplication(application.id),}
        disabled = {!!application.viewed_at,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <Eye className='h-4 w-4' />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
<<<<<<< HEAD
          <Button
            variant='outline'
            size='sm'
            disabled={processingId === application.id}
=======
          <Button 
            variant="outline" 
            size="sm"
            disabled = {processingId === application.id,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          >
            {processingId === application.id ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <>
                Status <ChevronDown className='h-4 w-4 ml-1' />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
<<<<<<< HEAD
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'shortlisted')}
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'interview')}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'hired')}
=======
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick = {() => onStatusChange(application.id, "shortlisted"),}
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick = {() => onStatusChange(application.id, "interview"),}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick = {() => onStatusChange(application.id, "hired"),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >
=======
          <DropdownMenuItem 
            onClick = {() => onStatusChange(application.id, "rejected"),}
            className="text-red-600"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application.talent_id}`}>
      
      <Button 
        variant="default" 
        size="sm"
        asChild
      >
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Contact
        </Link>
      </Button>
    </div>
  );
}
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
