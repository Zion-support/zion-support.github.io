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
  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;
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
=======
          <DropdownMenuItem ;
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem ;
            onClick={() => onStatusChange(application.id, "interview")}
          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem ;
            onClick={() => onStatusChange(application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem ;
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD
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
      <Button ;
        variant="default" ;
        size="sm";
        asChild;
      >;
        <Link to={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
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
