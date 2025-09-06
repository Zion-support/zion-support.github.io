

<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from "react";
import {Link} from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Eye, ChevronDown, Loader2} from "lucide-react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
<<<<<<< HEAD
import { useState } from "react",
import { Link } from "react-router-dom",

import { useState } from "react",
import { Link } from "react-router-dom",
import { useState } from "react",
import { Link } from "react-router-dom",
=======

=======
import { useState } from "react",
import { Link } from "react-router-dom",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button",


import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",



<<<<<<< HEAD
import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ApplicationActionsProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

<<<<<<< HEAD
export function ApplicationActions({;
  application;
  processingId;
  onViewApplication;
export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  onStatusChange
}: ApplicationActionsProps) {
<<<<<<< HEAD
  return (

  return (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="flex items-center justify-end gap-2">;
      <Button
        variant="outline" 
        size="sm" 
        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button
            variant="outline" 
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            size="sm"
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
<<<<<<< HEAD

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
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
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
          >
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
=======
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      <Button 
        variant="default" 


<<<<<<< HEAD
      <Button
        variant="default"
      <Button 
        variant="default" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;

<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;
<<<<<<< HEAD
          <DropdownMenuItem ;
            onClick={() => onStatusChange(application.id, "shortlisted")}
=======
            on_click={() => onStatusChange (application.id, "shortlisted")}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "interview")}
=======
            on_click={() => onStatusChange (application.id, "interview")}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "hired")}
=======
            on_click={() => onStatusChange (application.id, "hired")}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
=======
            on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
;

      ;
      <Button ;
        variant="default" ;
        size="sm";
      <Button;
        variant="default";
        size="sm";
        asChild;
      >;
        <Link to={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
  );
}
;
=======

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

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
