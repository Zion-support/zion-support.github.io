<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx


<<<<<<< HEAD
import { useState } from "react",
import { Link } from "react-router-dom",

=======

=======

import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {Link} from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Eye, ChevronDown, Loader2} from "lucide-react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState } from "react",
import { Link } from "react-router-dom",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from "react",
import { Link } from "react-router-dom",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useState } from "react",
import { Link } from "react-router-dom",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ApplicationActionsProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function ApplicationActions({;
  application;
  processingId;
  onViewApplication;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
import {useState} from "react";
import {Link} from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Eye, ChevronDown, Loader2} from "lucide-react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
}
export function ApplicationActions(): any ({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  onStatusChange
}: ApplicationActionsProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

========
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
    <div className="flex items-center justify-end gap-2">;
      <Button
        variant="outline" 
        size="sm" 
        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button
            variant="outline" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
            size="sm"
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
=======

import { useState } from "react",;
import { Link } from "react-router-dom",;
import { ;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
import { Eye, ChevronDown, Loader2 } from "lucide-react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
;
interface ApplicationActionsProps {;
  application:JobApplication,;
  processingId:string | null,;
  onViewApplication:(applicationId:string) => Promise<void>,;
  onStatusChange:(applicationId:string, newStatus:ApplicationStatus) => Promise<void>;
}
;
export function ApplicationActions({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange;
} ApplicationActionsProps) {;
  return (;
    <div className="flex items-center justify-end gap-2">;
      <Button ;
        variant="outline" ;
        size="sm" ;
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      ;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button ;
            variant="outline" ;
            size="sm";
            disabled={processingId === application.id}
          >;
            {processingId === application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          >
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD
<<<<<<< HEAD
=======


      <Button 
        variant="default" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Button
        variant="default"
      <Button 
        variant="default" 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        size="sm"
        asChild
      >
        <Link to={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
<<<<<<< HEAD
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "shortlisted")}
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "interview")}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem
            onClick={() => onStatusChange(application && application.id, "rejected")}
            className="text-red-600";
import { useState } from './react';
import { Link } from './react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
import { Eye, ChevronDown, Loader2 } from './lucide-react';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
interface ApplicationActionsProps {
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus) => Promise < void>;
=======

=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",;
import { Link } from "react-router-dom",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
import { Eye, ChevronDown, Loader2 } from "lucide-react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
<<<<<<< HEAD

}
export /**
 * ApplicationActions - Function description
 */
function ApplicationActions() {
  return (
    <div className="flex items - center justify - end gap - 2">;
      <Button;
        variant="outline";
        size="sm";
        on_click={() => onViewApplication (application.id)}
        disabled={!!application.viewed_at}
      >;
        <Eye className="h - 4 w - 4" />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger as_child>;
          <Button;
            variant="outline";
            size="sm";
            disabled={processing_id === application.id}
          >;
            {processing_id === application.id ? (
              <Loader2 className="h - 4 w - 4 animate - spin" />) : (
              <>Status <ChevronDown className="h - 4 w - 4 ml - 1" /></>)}
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;
<<<<<<< HEAD
            on_click={() => onStatusChange (application.id, "shortlisted")}
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "interview")}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";
=======
          <DropdownMenuItem ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >;
            Shortlist;
          </DropdownMenuItem>;
<<<<<<< HEAD
          <DropdownMenuItem ;
=======
          <DropdownMenuItem;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={() => onStatusChange(application.id, "interview")}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
<<<<<<< HEAD
          <DropdownMenuItem ;
=======
          <DropdownMenuItem;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={() => onStatusChange(application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
<<<<<<< HEAD
          <DropdownMenuItem ;
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <DropdownMenuItem;
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
      <Button;
        variant="default";
        size="sm";
        as_child;
      >;
        <Link to={`/messages?talent_id=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
      ;
      <Button ;
        variant="default" ;
        size="sm";
=======
      <Button;
        variant="default";
        size="sm";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        asChild;
      >;
        <Link to={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
<<<<<<< HEAD
  ),;}
 import {
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger interface ApplicationActionsProps {
  application: JobApplication;
processingId: string | null;
onViewApplication: (applicationId: string) => Promise<void>;
onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void> 
}export function ApplicationActions ({
  application;
processingId;
onViewApplication;
onStatusChange 
}: ApplicationActionsProps) {
  return (<div className="flex items-center justify-end gap-2" > outline"size=" sm"onClick= {
  () => onViewApplication (application.id) 
}disabled= {
  !!application.viewed at 
}> <Eye className=" h-4 w-4"/> </Button> <DropdownMenu> <DropdownMenuTrigger asChild> <Button) : (<>Status <ChevronDown className=" h-4 w-4 ml-1"/></>) 
}</Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"> <DropdownMenuItem > Shortlist </DropdownMenuItem> <DropdownMenuItem > Schedule Interview </DropdownMenuItem> <DropdownMenuItem > Hire </DropdownMenuItem> <DropdownMenuItem > Reject </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <Button variant=" default"size=" sm" asChild > <Link to= {
  `/messages?talentId=$ {
  application.talent id 
}` 
}> Contact </Link> </Button> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationActions.tsx
=======
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
