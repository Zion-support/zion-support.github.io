

projectId: string,

import React, { useState } from "react;
import { Button } from @/components/ui/button";
import { 
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription} from "@/components/ui/dialog,
import { useRouter } from next/router';

import React, { useState } from 'react
import { Button } from @/components/ui/button'
import {  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from '@/components/ui/dialog'
import { DisputeForm } from './DisputeForm'


Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

origin/cursor/automate-test-improve-and-merge-code-2533
  DialogDescription} from "@/components/ui/dialog
interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?: "default | outline" | "secondary | destructive" | "ghost | link";
  size?: "default | sm" | "lg | icon";
  className?: string

export function RaiseDisputeButton({



}

export function RaiseDisputeButton({ 
  projectId;
  milestoneId;
  variant;
origin/cursor/automate-test-improve-and-merge-code-2533

  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),
  
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
  },
  


Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from @/components/ui/dialog",

  projectId: string,

  milestoneId?: string,
  variant?: "default | outline" | "secondary | destructive" | "ghost | link","
  size?: default | "sm" | lg | "icon",
  className?: string
}

  projectId,
  milestoneId,
  variant = outline", "
  size,
  className
}:,  RaiseDisputeButtonProps) {
  className 
}: RaiseDisputeButtonProps) {}

export function RaiseDisputeButton({ 
  projectId;
  milestoneId;
  variant;

  return (
    <>
      <Button 
        variant={variant} 
        size={size} 
        className={className} 
        onClick={() => setIsDialogOpen(true)}
      >
        <ShieldAlert className=h-4 w-4 mr-2 />
        Raise Dispute
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className=sm:max-w-[550px]>',
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with
              this project.
            </DialogDescription>
          </DialogHeader>


        onClick={() => setIsDialogOpen(true)}      >;
        <ShieldAlert className='h-4 w-4 mr-2' />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;,
        <DialogContent className=sm:max-w-[550px]>;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
      <Button;
        variant={variant}
        size={size}
        className={class_name}
        on_click={() => setIsDialogOpen (true)}      >;
        <ShieldAlert className='h - 4 w - 4 mr - 2' />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className=sm:max - w-[550px]>;,
          <DialogHeader>;


            <DialogTitle > Raise a Dispute</DialogTitle>;
            <DialogDescription>;
              Please provide details about the issue you're experiencing with;
              this project.;
            </DialogDescription>;
          </DialogHeader>;
            onCancel={() => setIsDialogOpen(false)}          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}
          <DisputeForm;
            project_id={project_id}
            milestone_id={milestone_id}
            onDisputeCreated={handleDisputeCreated}



            onCancel={() => setIsDialogOpen(false)}          />
        </DialogContent>
      </Dialog>
    </>

          


            on_cancel={() => setIsDialogOpen (false)}          />;
        </DialogContent>;
      </Dialog>;
    </>);
}
          <DisputeForm

import React, { useState } from "react",
import { Button } from @/components/ui/button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from ./DisputeForm,
import { useRouter } from next/router,
import { ShieldAlert } from 'lucide-react'

          <DisputeForm 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from "@/components/ui/dialog",
import { ShieldAlert } from 'lucide-react';
interface RaiseDisputeButtonProps {
  projectId: string,
  milestoneId?: string,
  variant?: "default" | outline | "secondary" | destructive | "ghost" | link,
  size?: "default" | sm | "lg" | icon,
  className?: string;
}
export function RaiseDisputeButton({
  projectId,
  milestoneId,
  variant = "outline",
  size,
  className;
}:,  RaiseDisputeButtonProps) {,
  const handleDisputeCreated = (disputeId:,  string) => {,
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);`
}: RaiseDisputeButtonProps) {
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`)
}
  return (;
    <>;


      <Button;
        variant={variant} ;
        size={size} ;
        className={className} ;
        onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;,
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;
          <DisputeForm;
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

  );

