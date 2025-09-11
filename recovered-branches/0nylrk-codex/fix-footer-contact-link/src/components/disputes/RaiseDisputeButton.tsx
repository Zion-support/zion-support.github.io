

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
=======
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
=======
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false),;
    navigate(`/dashboard/disputes/${disputeId}`);
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;

          
          <DisputeForm 

=======
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}
=======          <DisputeForm;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
