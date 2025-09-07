

<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
=======
>>>>>>> origin/main
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
=======
import { Button } from "@/components/ui/button",;

import { Eye, ChevronDown, Loader2 } from "lucide-react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
>>>>>>> origin/main

interface ApplicationActionsProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

export function ApplicationActions({;
  application;
  processingId;
  onViewApplication;
export function ApplicationActions({
  application,
  processingId,
  onViewApplication,            size="sm"
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}

      <Button 
        variant="default" 

        size="sm"
        asChild
      >
        <Link to={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  );

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


import {useState} from "react";""
import {Link} from "react-router-dom";""
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";""
import {Button} from "@/components/ui/button";""
import {Eye, ChevronDown, Loader2} from "lucide-react";""
import {JobApplication, ApplicationStatus} from "@/types/jobs";""
import { useState } from "react",""
import { Link } from "react-router-dom",""
import { Link } from "react-router-dom","
import {
  // TODO: Implement
}
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu",""
import { Button } from "@/components/ui/button",""
import { Eye, ChevronDown, Loader2 } from "lucide-react",""
import { JobApplication, ApplicationStatus } from "@/types/jobs",""
import { Eye, ChevronDown, Loader2 } from "lucide-react";""
import { JobApplication, ApplicationStatus } from "@/types/jobs";""
import { JobApplication, ApplicationStatus } from "@/types/jobs","
interface ApplicationActionsProps {
  // TODO: Implement
  application: JobApplication;,
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
</void>

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
</void>"
    <div className="flex items-center justify-end gap-2">;"
</div>
      <Button;"
        variant="outline"""
        size="sm""
        onClick={() => onViewApplication(application && application.id)}
"
        <Eye className="h-4 w-4" />;"

      ;
      <DropdownMenu>;

        <DropdownMenuTrigger asChild>;

            variant="outline""
  onStatusChange;
}: ApplicationActionsProps) {;
}: ApplicationActionsProps) {
  return ("
            disabled={processingId === application && application.id}>;
              <Loader2 className="h-4 w-4 animate-spin" />;"
</Loader2>"
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;"

        variant="default"""
        asChild;
      >

        <Link to={`/messages?talentId=${application.talent_id}`}>

        
      
        ;"
        <DropdownMenuContent align="end">;"

          <DropdownMenuItem;)"
            onClick={() => onStatusChange(application && application.id, "shortlisted")}"

          <DropdownMenuItem;"
            onClick={() => onStatusChange(application && application.id, "interview")}"

            onClick={() => onStatusChange(application && application.id, "hired")}"

            onClick={() => onStatusChange(application && application.id, "rejected")}"

    <div className="flex items - center justify - end gap - 2">;"
        variant="outline";""
        size="sm";"
        on_click={() => onViewApplication (application.id)}
        <Eye className="h - 4 w - 4" />;"


        <DropdownMenuTrigger as_child>;

            disabled={processing_id === application.id}
          >;
              <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
</Loader2>)"
              <>Status <ChevronDown className="h - 4 w - 4 ml - 1" /></>)}"


            on_click={() => onStatusChange (application.id, "shortlisted")}"

            on_click={() => onStatusChange (application.id, "interview")}"

            on_click={() => onStatusChange (application.id, "hired")}"

            on_click={() => onStatusChange (application.id, "rejected")}"

        variant="default";""
        as_child;
`;
        <Link to={`/messages?talent_id=${application.talent_id}`}>;

    </div>);
      <Button ;"
        variant="default" ;""
        <Link to={`/messages?talentId=${application.talent_id}`}>;

    </div>;"`;
pr-12325
</Link>
        </Link>;
      </Button>;
    </div>;
  );
}
;
