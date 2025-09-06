

<<<<<<< HEAD

import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";

import React, { useState } from "react",
import { Button } from "@/components/ui/button",

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {

<<<<<<< HEAD
  projectId: string

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
<<<<<<< HEAD


import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",

  className?: string;
}
interface RaiseDisputeButtonProps {
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}


export function RaiseDisputeButton({ 
  projectId,

  milestoneId, 
=======
=======
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",  milestoneId, 
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false)
    navigate(`/dashboard/disputes/${disputeId}`)
  }
<<<<<<< HEAD

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
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false),;
    navigate(`/dashboard/disputes/${disputeId}`);
  };

  return (
    <>;
      <Button;
        variant={variant} ;
        size={size} ;
        className={className} ;
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


          
          <DisputeForm 
          <DisputeForm 


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

          <DisputeForm;
=======
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;          <DisputeForm;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
