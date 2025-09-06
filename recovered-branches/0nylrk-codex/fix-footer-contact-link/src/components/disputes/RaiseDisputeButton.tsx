
import React, { useState } from "react";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
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

  projectId: string

=======
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
<<<<<<< HEAD
export function RaiseDisputeButton({
  projectId;

  milestoneId
  variant = "outline"
  size;
  className
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false)
    navigate(`/dashboard/disputes/${disputeId}`)
  }

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
=======

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
            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <DisputeForm
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}
<<<<<<< HEAD
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
=======
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
