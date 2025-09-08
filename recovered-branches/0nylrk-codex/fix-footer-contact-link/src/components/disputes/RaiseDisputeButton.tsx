
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button",
"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import React, { useState } from "react","
import { Button } from "@/components/ui/button",

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button",

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { 

  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  DialogOverlay"
} from "@/components/ui/dialog","
import { DisputeForm } from "./DisputeForm",

<<<<<<< HEAD
=======
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  milestoneId?: string;

  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
<<<<<<< HEAD

  className?: string;
}


=======
  className?: string;
}

  DialogOverlay
} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm";
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface RaiseDisputeButtonProps {

  projectId: string

<<<<<<< HEAD
=======
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  milestoneId?: string;

  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";

import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",

import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {

  projectId: string


  className?: string;
}

import { useNavigate } from "react-router-dom",

interface RaiseDisputeButtonProps {

  projectId: string,
  milestoneId?: string,"
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link","
  size?: "default" | "sm" | "lg" | "icon",
  className?: string;
}

<<<<<<< HEAD
=======
  milestoneId, 
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  size,
  className

  const handleDisputeCreated = (disputeId: string) => {

  },
  


    setIsDialogOpen(false)
    navigate(`/dashboard/disputes/${disputeId}`)
  }


  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <>
      <Button;

        variant={variant}
        size={size}
        className={className})
        onClick={() => setIsDialogOpen(true)}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function RaiseDisputeButton(): any ({ ;
  projectId;
  milestoneId, ;"
  variant = "outline", ;
  size;
  className ;

;
  projectId:string,;
  milestoneId?:string,;"
  variant?:"default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;""
  size?:"default" | "sm" | "lg" | "icon",;"
  className?:string;
export function RaiseDisputeButton({ ;
  projectId,;
  milestoneId, ;"
  variant = "outline", ;"
  size,;

}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleDisputeCreated = (disputeId: string) => {;

    navigate(`/dashboard/disputes/${disputeId}`);
  };
<<<<<<< HEAD



  return (
    <>;

      <Button
        variant={variant} 
        size={size} 
        className={className} 

=======
  return (
    <>;

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;"

          <DialogHeader>;


            <DialogTitle>Raise a Dispute;
            <DialogDescription>;

          <DisputeForm;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}

          />;
        </DialogContent>;
      </Dialog>;
    </>;
<<<<<<< HEAD
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
  );
}


            project_id={project_id}
            milestone_id={milestone_id}
            onDisputeCreated={handleDisputeCreated}
            on_cancel={() => setIsDialogOpen (false)}
          />;
        </DialogContent>;
      </Dialog>;
    </>);
}


          ;
          <DisputeForm ;


            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}


    </>;
  );

            project_id={project_id}
            milestone_id={milestone_id}
            on_cancel={() => setIsDialogOpen (false)}

    </>);
          <DisputeForm ;

  ),;}
  // TODO: Implement
DialogOverlay interface RaiseDisputeButtonProps {
  // TODO: Implement
milestoneId?: string;
return (<> <Button variant= {
  variant;
}size= {
  size;
}className= {
  className;
}onClick= {)
  () => setIsDialogOpen (true) 
}> <ShieldAlert className="h-4 w-4 mr-2" /> Raise Dispute  <DialogHeader> <DialogTitle>Raise a Dispute <DialogDescription> Please provide details about the issue you're experiencing with this project.   <DisputeForm projectId= {

}/>   </>) 

          />
    </>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
