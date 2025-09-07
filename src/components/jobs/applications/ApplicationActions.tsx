return (
    <div className='flex items-center justify-end gap-2'>;
      <Button
        variant='outline'
        size='sm'

        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}    <div className="flex items-center justify-end gap-2">;
        variant="outline" 
        size="sm" 
        onClick = {(,) => onViewApplication(application && application.id),}
        disabled = {!!application && application.viewed_at,}
      >;
        <Eye className='h-4 w-4' />;
      </Button>;

      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;

            disabled={processingId === application.id}          >
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
            onClick={() => onStatusChange(application.id, 'interview')}
            Schedule Interview

            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}

import Link from "next/link",
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button",
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs",

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
    <div className="flex items-center justify-end gap-2">
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
        <Eye className="h-4 w-4" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            disabled={processingId === application.id}
              <Loader2 className="h-4 w-4 animate-spin" />
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>
        <DropdownMenuContent align="end">
            onClick={() => onStatusChange(application.id, "shortlisted")}
            onClick={() => onStatusChange(application.id, "interview")}
            onClick={() => onStatusChange(application.id, "hired")}

            Hire
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"

            Reject
        </DropdownMenuContent>
      </DropdownMenu>

            onClick={() => onStatusChange(application && application.id, 'hired')}          >;
            Shortlist;
          </DropdownMenuItem>;
            onClick = {() => onStatusChange(application && application.id, "interview"),}          >;
            Schedule Interview;
            onClick = {() => onStatusChange(application && application.id, "hired"),}
            Hire;

            onClick={() => onStatusChange(application && application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application && application.id, "hired")}
            onClick={() => onStatusChange(application && application.id, "rejected")}
            className="text-red-600";

import Link from 'next / link';
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';

import { Eye, ChevronDown, Loader2 } from 'lucide-react';
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
;
export function ApplicationActions({;
  application,;
  onStatusChange;
}: ApplicationActionsProps) {;
  return (;
    <div className="flex items-center justify-end gap-2">;
      <Button;
        variant="outline";
        size="sm";
        <Eye className="h-4 w-4" />;
            {processingId === application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, 'rejected')}
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";

            Reject;
        </DropdownMenuContent>;
      </DropdownMenu>;

  );
      <Button variant='default' size='sm' as_child>        <Link href={`/messages?talent_id=${application.talent_id}`}>;
        variant="default";
        as_child;
          Contact;
        </Link>;
    </div>);