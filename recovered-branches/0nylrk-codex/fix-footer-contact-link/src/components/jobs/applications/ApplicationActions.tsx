
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

export function ApplicationActions({;
import { 

  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;

import { Button } from "@/components/ui/button",;

import { Eye, ChevronDown, Loader2 } from "lucide-react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;


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

  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;


  onStatusChange
}: ApplicationActionsProps) {

    <div className="flex items-center justify-end gap-2">;
      <Button"
        variant="outline" "
        size="sm" 
        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}
      >;"

        <Eye className="h-4 w-4" />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;


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

      <Button "
        variant="default" 


        size="sm"
        asChild;
      >
        <Link to={`/messages?talentId=${application.talent_id}`}>
          Contact;
        </Link>
      </Button>
    </div>


          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;


}
import { useState } from "react",;

import { Link } from "react-router-dom",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu",;"
import { Button } from "@/components/ui/button",;"
import { Eye, ChevronDown, Loader2 } from "lucide-react",;"
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;

          </Button>;
        </DropdownMenuTrigger>;"
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;


          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem;


          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;


          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;


          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;

;

      ;
      <Button ;"
        variant="default" ;"
        size="sm";
      <Button;"
        variant="default";"
        size="sm";
        asChild;
      >;`
        <Link to={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
  );
}
;

;

      ;
      <Button ;"
        variant="default" ;"
        size="sm";
      <Button;"
        variant="default";"
        size="sm";
        asChild;
      >;`
        <Link to={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
  );
}

;
