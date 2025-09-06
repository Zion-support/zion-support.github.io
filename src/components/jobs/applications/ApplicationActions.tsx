<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
return (
    <div className='flex items-center justify-end gap-2'>;
      <Button
        variant='outline'
        size='sm'
<<<<<<< HEAD

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

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}

import Link from "next/link";
=======
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
            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Link from "next/link",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
            Reject
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          >


            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      

      
      
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
=======
      
      
      
      <Button 
        size="sm"
        asChild
      >
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Link from 'next / link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
          Contact
        </Link>
      </Button>
    </div>
  )
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
<<<<<<< HEAD
            on_click={() => onStatusChange (application.id, 'interview')}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            on_click={() => onStatusChange (application.id, 'hired')}          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click = {() => onStatusChange (application.id, "interview"), }          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click = {() => onStatusChange (application.id, "hired"), }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
<<<<<<< HEAD
            on_click={() => onStatusChange (application.id, 'rejected')}
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";

          >;
=======
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
<<<<<<< HEAD


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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
