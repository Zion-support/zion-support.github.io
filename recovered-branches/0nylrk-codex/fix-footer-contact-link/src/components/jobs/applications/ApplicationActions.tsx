<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { useState } from "react";
import { Link } from "react-router-dom";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useState} from "react";
import {Link} from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Eye, ChevronDown, Loader2} from "lucide-react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
"
import { useState } from "react","
import { Link } from "react-router-dom",
"
import { useState } from "react","
import { Link } from "react-router-dom","
import { useState } from "react","
import { Link } from "react-router-dom",

"
import { useState } from "react","
import { Link } from "react-router-dom",

import { useState } from "react",
import { Link } from "react-router-dom",
import { useState } from "react",
import { Link } from "react-router-dom",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState } from "react",
import { Link } from "react-router-dom",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
DropdownMenuTrigger"
} from "@/components/ui/dropdown-menu","
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import { Button } from "@/components/ui/button",;

import { Eye, ChevronDown, Loader2 } from "lucide-react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;

import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ApplicationActionsProps {

  application: JobApplication
  processingId: string | null
=======
interface ApplicationActionsProps {};
  application: JobApplication;
  processingId: string | null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onViewApplication: (applicationId: string) => Promise<void>

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from "react";
import {Link} from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Eye, ChevronDown, Loader2} from "lucide-react";

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {JobApplication, ApplicationStatus} from "@/types/jobs";

interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
}

export function ApplicationActions(): any ({;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function ApplicationActions({;
  application;
  processingId;
  onViewApplication;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function ApplicationActions({
  application,
  processingId,
<<<<<<< HEAD
  onViewApplication,
<<<<<<< HEAD
<<<<<<< HEAD
  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  onStatusChange
}: ApplicationActionsProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="flex items-center justify-end gap-2">;
      <Button"
        variant="outline" "
        size="sm" 
        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}
      >;"
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Eye className="h-4 w-4" />;
      </Button>;

      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
<Button"
            variant="outline" 

  onStatusChange;
}: ApplicationActionsProps) {;
  onStatusChange;
}: ApplicationActionsProps) {}
  return (
"
            size="sm"
=======
  onViewApplication,            size="sm"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <Button
            variant="outline" 

  onStatusChange;
}: ApplicationActionsProps) {;
  onStatusChange
}: ApplicationActionsProps) {
  return (
            size="sm"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;"
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;

              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      <Button "
        variant="default" 

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button
        variant="default"
      <Button 
        variant="default"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        size="sm"
        asChild;
      >
        <Link to={`/messages?talentId=${application.talent_id}`}>
          Contact;
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
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
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",;
=======
"
import { useState } from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
on_click={() => onStatusChange (application.id, "rejected")}
            className="text - red - 600";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

;
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
