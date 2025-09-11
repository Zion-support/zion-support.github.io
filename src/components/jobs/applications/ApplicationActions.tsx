<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
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

import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {

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
  return (
    <div className='flex items-center justify-end gap-2'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (
    <div className='flex items-center justify-end gap-2'>;
      <Button
        variant='outline'
        size='sm'
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
            Reject
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </DropdownMenuItem>
      <Button
        variant="default"
        size="sm"
        asChild
      >
=======
          </DropdownMenuItem>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          >


            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      

      
      

<<<<<<< HEAD

<<<<<<< HEAD
      
      
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button 
        size="sm"
        asChild
      >
<<<<<<< HEAD
        <Link href={`/messages?talentId=${application.talent_id}`}>
        <Link href={`/messages?talentId=${application.talent_id}`}>
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>;
  );
};
}
        <Link href={`/messages?talentId=${application.talent_id}`}>
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  )
}
}
import Link from "next/link",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next / link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  )
=======
import Link from "next/link",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            onClick={() => onStatusChange(application.id, "interview")}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            onClick={() => onStatusChange(application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            on_click={() => onStatusChange (application.id, 'rejected')}
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
<<<<<<< HEAD
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
ursor/fix-website-loading-errors-and-merge-6662
      <Button;
        variant="default";
        size="sm";
        asChild;
      >;
        <Link href={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
  );
}
;
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
