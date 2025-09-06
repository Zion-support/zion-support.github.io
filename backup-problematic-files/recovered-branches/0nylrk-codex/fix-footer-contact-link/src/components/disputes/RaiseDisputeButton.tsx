<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
export function RaiseDisputeButton(): any ({ ;
  projectId;
  milestoneId, ;
  variant = "outline", ;
  size;
  className ;
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false),;
    navigate(`/dashboard/disputes/${disputeId}`);
  };
  return (
    <>;
      <Button
        variant={variant} 
        size={size} 
        className={className} 
=======

import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { ;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;
  DialogOverlay;
} from "@/components/ui/dialog",;
import { DisputeForm } from "./DisputeForm",;
import { useNavigate } from "react-router-dom",;
import { ShieldAlert } from "lucide-react",;
;
interface RaiseDisputeButtonProps {;
  projectId:string,;
  milestoneId?:string,;
  variant?:"default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;
  size?:"default" | "sm" | "lg" | "icon",;
  className?:string;
}
;
export function RaiseDisputeButton({ ;
  projectId,;
  milestoneId, ;
  variant = "outline", ;
  size,;
  className ;
} RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const navigate = useNavigate(),;
  ;
  const handleDisputeCreated = (disputeId:string) => {;
    setIsDialogOpen(false),;
    navigate(`/dashboard/disputes/${disputeId}`),;
  },;
  ;
  return (;
    <>;
      <Button ;
        variant={variant} ;
        size={size} ;
        className={className} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
<<<<<<< HEAD
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay } from '@/components / ui / dialog';
import { DisputeForm } from './DisputeForm';
import { use_navigate } from './react-router-dom';
import { ShieldAlert } from './lucide-react';
interface RaiseDisputeButtonProps {
  project_id: string,
  milestone_id?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  class_name?: string;
}
export /**
 * RaiseDisputeButton - Function description
 */
function RaiseDisputeButton() {
  const [isDialogOpen, setIsDialogOpen] = useState (false);
  const navigate = use_navigate ();
;
  const handleDisputeCreated = (dispute_id: string) =>: any {
    setIsDialogOpen (false),
    navigate (`/dashboard / disputes/${dispute_id}`);
  }
;
  return (
    <>;
      <Button;
        variant={variant}
        size={size}
        className={class_name}
        on_click={() => setIsDialogOpen (true)}
      >;
        <ShieldAlert className="h - 4 w - 4 mr - 2" />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max - w-[550px]">;
          <DialogHeader>;
            <DialogTitle > Raise a Dispute</DialogTitle>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;
<<<<<<< HEAD
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}
          <DisputeForm;
            project_id={project_id}
            milestone_id={milestone_id}
            onDisputeCreated={handleDisputeCreated}
            on_cancel={() => setIsDialogOpen (false)}
          />;
        </DialogContent>;
      </Dialog>;
    </>);
}
=======
          ;
          <DisputeForm ;
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  ),;}
 import {
  Dialog;
DialogContent;
DialogHeader;
DialogTitle;
DialogDescription;
DialogOverlay interface RaiseDisputeButtonProps {
  projectId: string;
milestoneId?: string;
return (<> <Button variant= {
  variant 
}size= {
  size 
}className= {
  className 
}onClick= {
  () => setIsDialogOpen (true) 
}> <ShieldAlert className="h-4 w-4 mr-2" /> Raise Dispute </Button> <DialogHeader> <DialogTitle>Raise a Dispute</DialogTitle> <DialogDescription> Please provide details about the issue you're experiencing with this project. </DialogDescription> </DialogHeader> <DisputeForm projectId= {
  projectId 
}milestoneId= {
  milestoneId 
}onDisputeCreated= {
  handleDisputeCreated 
}onCancel= {
  () => setIsDialogOpen (false) 
}/> </DialogContent> </Dialog> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
