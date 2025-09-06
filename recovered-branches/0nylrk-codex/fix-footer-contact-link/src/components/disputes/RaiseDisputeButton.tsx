


import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";

=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { 
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
  DialogOverlay
} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {

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

  milestoneId
  variant = "outline"
  size;
  className
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",

interface RaiseDisputeButtonProps {
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}

export function RaiseDisputeButton({ ;
  projectId;
export function RaiseDisputeButton({ 
  projectId,
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
  }

  },
  
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
        onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
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

            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;


          
          <DisputeForm 
=======
          <DisputeForm 


            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}

          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
