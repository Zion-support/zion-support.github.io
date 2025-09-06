<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import Link from 'next/link'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
=======
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (
    applicationId: string
    newStatus: ApplicationStatus
  ) => Promise<void>
export function ApplicationActions({
  application
  processingId
  onViewApplication

  onStatusChange
}: ApplicationActionsProps) {
<<<<<<< HEAD
import Link from 'next/link';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
import { JobApplication, ApplicationStatus } from '@/types/jobs';

interface ApplicationActionsProps {;
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (;
    applicationId: string,;
    newStatus: ApplicationStatus;
  ) => Promise<void>;
export function ApplicationActions(): any ({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
}: ApplicationActionsProps) {;
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className='flex items-center justify-end gap-2'>;
      <Button
        variant='outline'
        size='sm'
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}    <div className="flex items-center justify-end gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick = {(,) => onViewApplication(application.id),}
        disabled = {!!application.viewed_at,}
      >
        <Eye className='h-4 w-4' />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;
              <Loader2 className='h-4 w-4 animate-spin' />;
            ) : (;
              <>;
                Status <ChevronDown className='h-4 w-4 ml-1' />;
              </>;
            )}
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align='end'>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, 'shortlisted')}
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, 'interview')}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, 'hired')}          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick = {() => onStatusChange(application.id, "interview"),}          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick = {() => onStatusChange(application.id, "hired"),}
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"
          >
=======

            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD
      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application.talent_id}`}>
      <Button
        variant="default"
        size="sm"
        asChild
      >
=======
<<<<<<< HEAD
      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application.talent_id}`}>
<<<<<<< HEAD
      <Button
        variant="default"
        size="sm"
        asChild
      >
=======

      
=======
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Button 
        variant="default" 
        size="sm"
        asChild
      >
<<<<<<< HEAD
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
          Contact
        </Link>
      </Button>
    </div>;
  );
};
}
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          Contact
        </Link>
      </Button>
    </div>
  )
<<<<<<< HEAD
}
            onClick={() => onStatusChange(application && application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application && application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "rejected")}
            className="text-red-600";
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Link from "next/link",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
interface ApplicationActionsProps {
  application: JobApplication;
  processing_id: string | null;
  onViewApplication: (application_id: string) => Promise < void>;
  onStatusChange: (
    application_id: string,
    new_status: ApplicationStatus) => Promise < void>;
export /**
 * ApplicationActions - Function description
 */
function ApplicationActions() {
  return (
    <div className='flex items - center justify - end gap - 2'>;
      <Button;
        variant='outline';
        size='sm';
        on_click={() => onViewApplication (application.id)}
        disabled={!!application.viewed_at}    <div className="flex items - center justify - end gap - 2">;
      <Button;
        variant="outline";
        size="sm";
        on_click = {(, ) => onViewApplication (application.id), }
        disabled = {!!application.viewed_at, }
      >;
        <Eye className='h - 4 w - 4' />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger as_child>;
          <Button;
            variant='outline';
            size='sm';
            disabled={processing_id === application.id}          >;
            {processing_id === application.id ? (
              <Loader2 className='h - 4 w - 4 animate - spin' />) : (
              <>;
                Status <ChevronDown className='h - 4 w - 4 ml - 1' />;
              </>)}
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align='end'>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, 'shortlisted')}
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, 'interview')}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, 'hired')}          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click = {() => onStatusChange (application.id, "interview"), }          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click = {() => onStatusChange (application.id, "hired"), }
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, 'rejected')}
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;

      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application && application.talent_id}`}>      ;
      <Button
        variant="default" 
        size="sm"
        asChild>;
          Contact;
        </Link>;
      </Button>;
    </div>;
  );
}
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
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
