

<<<<<<< HEAD

import {useState} from "react";
import {Link} from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Eye, ChevronDown, Loader2} from "lucide-react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";

import { useState } from "react",
import { Link } from "react-router-dom",

import { useState } from "react",
import { Link } from "react-router-dom",
import { useState } from "react",
import { Link } from "react-router-dom",
import { useState } from "react",
import { Link } from "react-router-dom",
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button",

<<<<<<< HEAD

import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",



import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",

interface ApplicationActionsProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

<<<<<<< HEAD
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function ApplicationActions({;
  application;
  processingId;
  onViewApplication;
export function ApplicationActions({
  application,
  processingId,
<<<<<<< HEAD
  onViewApplication,
  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;



  onStatusChange
}: ApplicationActionsProps) {
  return (

  return (

  return (
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

  onStatusChange;
}: ApplicationActionsProps) {;
  onStatusChange
}: ApplicationActionsProps) {
  return (
            size="sm"
=======
  onViewApplication,            size="sm"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
<<<<<<< HEAD
            )}
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}

=======
            )}              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      <Button 
        variant="default" 

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        size="sm"
        asChild
      >
        <Link to={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
  )

          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
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
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;
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
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;

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

;
=======
  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
