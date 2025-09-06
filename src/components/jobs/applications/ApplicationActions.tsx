<<<<<<< HEAD
<<<<<<< HEAD
=======
return (
    <div className='flex items-center justify-end gap-2'>;
=======

import Link from "next/link";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

export function ApplicationActions({
  application;
  processingId;
  onViewApplication;
  onStatusChange
}: ApplicationActionsProps) {
  return (
    <div className='flex items-center justify-end gap-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      <Button
        variant='outline'
        size='sm'

        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}    <div className="flex items-center justify-end gap-2">;
      <Button
        variant="outline" 
        size="sm" 
        onClick = {(,) => onViewApplication(application && application.id),}
        disabled = {!!application && application.viewed_at,}
      >;
        <Eye className='h-4 w-4' />;
      </Button>;

      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;

          <Button
            variant='outline'
            size='sm'
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
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'interview')}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem

            onClick={() => onStatusChange(application.id, 'rejected')}
<<<<<<< HEAD
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
            className='text-red-600'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          >


            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      

      
      
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <Button 
        variant="default" 
        size="sm"
        asChild
      >

            onClick={() => onStatusChange(application && application.id, 'hired')}          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick = {() => onStatusChange(application && application.id, "interview"),}          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick = {() => onStatusChange(application && application.id, "hired"),}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem

            onClick={() => onStatusChange(application && application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application && application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "rejected")}
            className="text-red-600";

import Link from 'next / link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
}
;
export function ApplicationActions({;
  application,;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;
  return (;
    <div className="flex items-center justify-end gap-2">;
      <Button;
        variant="outline";
        size="sm";
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button;
            variant="outline";
            size="sm";
            disabled={processingId === application.id}
          >;
            {processingId === application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
=======
            onClick={() => onStatusChange(application.id, "interview")}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
=======
            onClick={() => onStatusChange(application.id, "hired")}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
=======
            on_click={() => onStatusChange (application.id, 'rejected')}
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
=======


  );
}
      <Button variant='default' size='sm' as_child>        <Link href={`/messages?talent_id=${application.talent_id}`}>;
      <Button;
        variant="default";
        size="sm";
        as_child;
      >;
          Contact;
        </Link>;
      </Button>;
    </div>);
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<Button variant='default' size='sm' asChild>
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
