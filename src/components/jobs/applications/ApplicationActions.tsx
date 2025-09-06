<<<<<<< HEAD
return (
    <div className='flex items-center justify-end gap-2'>;
      <Button
        variant='outline''
        size='sm''
        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}    <div className="flex items-center justify-end gap-2">;
      <Button
        variant="outline" "
        size="sm" "
        onClick = {(,) => onViewApplication(application && application.id),}
        disabled = {!!application && application.viewed_at,}
      >;
        <Eye className='h-4 w-4' />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button
            variant='outline''
            size='sm''
            disabled={processingId === application.id}          >
            {processingId === application.id ? (
              <Loader2 className='h-4 w-4 animate-spin' />'
            ) : (
              <>
                Status <ChevronDown className='h-4 w-4 ml-1' />'
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>'
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'shortlisted')}'
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'interview')}'
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'rejected')}'
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}"
import Link from "next/link","
import {
=======

import Link from "next/link",
import { 
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
<<<<<<< HEAD
} from "@/components/ui/dropdown-menu","
import { Button } from "@/components/ui/button","
import { Eye, ChevronDown, Loader2 } from 'lucide-react''
import { JobApplication, ApplicationStatus } from "@/types/jobs","
interface ApplicationActionsProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId:,  string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus:,  ApplicationStatus) => Promise<void>
}
export function ApplicationActions({
  application;
  processingId;
  onViewApplication;
  onStatusChange
}:,  ApplicationActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">"
      <Button
        variant="outline" "
        size="sm" "
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >
        <Eye className="h-4 w-4" />"
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline" "
            size="sm""
            disabled={processingId === application.id}
          >
            {processingId === application.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />"
            ) : (
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>"
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">"
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, "shortlisted")}"
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, "interview")}"
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, "hired")}"
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, "rejected")}"
            className="text-red-600""
=======
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
  application,
  processingId,
  onViewApplication,
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          >
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD
      <Button
        variant="default" "
        size="sm""
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
            onClick = {() => onStatusChange(application && application.id, "hired"),}"
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, 'rejected')}'
            className='text-red-600'          >            onClick={() => onStatusChange(application && application.id, "hired")}"
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "rejected")}"
            className="text-red-600";
import Link from 'next / link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
=======
      
      <Button 
        variant="default" 
        size="sm"
        asChild
      >
        <Link href={`/messages?talentId=${application.talent_id}`}>
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
<<<<<<< HEAD
  onViewApplication: (applicationId:,  string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus:,  ApplicationStatus) => Promise<void>;
=======
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export function ApplicationActions({;
  application,;
  processingId;
  onViewApplication;
  onStatusChange;
<<<<<<< HEAD
}:,  ApplicationActionsProps) {;
=======
}: ApplicationActionsProps) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
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
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "shortlisted")}"
=======
            onClick={() => onStatusChange(application.id, "shortlisted")}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "interview")}"
=======
            onClick={() => onStatusChange(application.id, "interview")}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "hired")}"
=======
            onClick={() => onStatusChange(application.id, "hired")}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            on_click={() => onStatusChange (application.id, 'rejected')}'
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}"
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}"
            className="text - red - 600";
=======
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
  );
}
      <Button variant='default' size='sm' as_child>        <Link href={`/messages?talent_id=${application.talent_id}`} />;`
      <Button;
        variant="default";
        size="sm";
        as_child;
      >;
          Contact;
        </Link>;
      </Button>;
    </div>);
})
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
