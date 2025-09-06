

<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======

=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
  DialogOverlay
} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
<<<<<<< HEAD
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {

  projectId: string
=======

import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
<<<<<<< HEAD
  className?: string
}
export function RaiseDisputeButton({
  projectId;

  milestoneId
  variant = "outline"
  size;
  className
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",
=======
  className?: string;
}


import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface RaiseDisputeButtonProps {
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}


export function RaiseDisputeButton({ 
  projectId,

<<<<<<< HEAD
export function RaiseDisputeButton({ ;
  projectId;
export function RaiseDisputeButton({ 
  projectId,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  milestoneId, 
  variant = "outline", 
  size,
  className 
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const navigate = useNavigate(),
  

  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false)
    navigate(`/dashboard/disputes/${disputeId}`)

  },
  

<<<<<<< HEAD
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false)
    navigate(`/dashboard/disputes/${disputeId}`)
  }

  },
  
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsDialogOpen(true)}
      >
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
            </DialogDescription>
          </DialogHeader>
<<<<<<< HEAD
          <DisputeForm
          
          <DisputeForm 
          <DisputeForm 
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
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
interface RaiseDisputeButtonProps {;
  projectId: string,;
  milestoneId?: string,;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;
  size?: "default" | "sm" | "lg" | "icon",;
  className?: string;
}
;
export function RaiseDisputeButton({;
  projectId,;
  milestoneId,;
  variant = "outline",;
  size,;
  className;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function RaiseDisputeButton(): any ({ ;
  projectId;
  milestoneId, ;
  variant = "outline", ;
  size;
  className ;
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false),;
    navigate(`/dashboard/disputes/${disputeId}`);
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>;
      <Button
        variant={variant} 
        size={size} 
        className={className} 
<<<<<<< HEAD

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
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const navigate = useNavigate(),;
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false);
    navigate(`/dashboard/disputes/${disputeId}`);
  };
  return (;
    <>;
      <Button;
        variant={variant} ;
        size={size} ;
        className={className} ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
<<<<<<< HEAD
=======
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;


          
          <DisputeForm 
          <DisputeForm 


<<<<<<< HEAD
          <DisputeForm;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
