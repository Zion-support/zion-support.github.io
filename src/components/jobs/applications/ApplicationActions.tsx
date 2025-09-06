<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======

import Link from "next/link";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (
    applicationId: string,
    newStatus: ApplicationStatus
  ) => Promise<void>;

export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
}: ApplicationActionsProps) {
  return (
    <div className='flex items-center justify-end gap-2'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >
        <Eye className='h-4 w-4' />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            disabled={processingId === application.id}
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
          >
            Hire
          </DropdownMenuItem>
<<<<<<< HEAD
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >
=======
<<<<<<< HEAD
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'
=======

import Link from "next/link";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger

} from "@/components/ui/dropdown-menu",

import { Button } from "@/components/ui/button";
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";

interface ApplicationActionsProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

export function ApplicationActions({
  application;
  processingId;
  onViewApplication;
  onStatusChange
}: ApplicationActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >
        <Eye className="h-4 w-4" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            disabled={processingId === application.id}
          >
            {processingId === application.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "interview")}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "hired")}
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD

      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application.talent_id}`}>
=======
<<<<<<< HEAD
<<<<<<< HEAD

      <Button variant='default' size='sm' asChild>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      
      <Button 
        variant="default" 
        size="sm"
        asChild
      >
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Contact
        </Link>
      </Button>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
