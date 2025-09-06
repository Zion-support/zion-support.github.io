<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from 'next/link'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
return (
    <div className='flex items-center justify-end gap-2'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}
<<<<<<< HEAD
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"
          >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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

            Reject
          </DropdownMenuItem>
<<<<<<< HEAD
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application.talent_id}`}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Button
        variant="default"
        size="sm"
        asChild
      >
<<<<<<< HEAD
>>>>>>>       <Button 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
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


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      
      


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <Button 
>>>>>>>         variant="default" 
        size="sm"
        asChild
      >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Contact
        </Link>
      </Button>
    </div>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <Link href={`/messages?talentId=${application.talent_id}`}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Contact
        </Link>
      </Button>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from "next/link",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
=======
import Link from 'next / link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
            on_click={() => onStatusChange (application.id, 'rejected')}
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";

<<<<<<< HEAD
>>>>>>>           >;
=======
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD


  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
