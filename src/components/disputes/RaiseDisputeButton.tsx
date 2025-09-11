<<<<<<< HEAD
<<<<<<< HEAD

=======
return (
    <>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from '@/components/ui/dialog'
import { DisputeForm } from './DisputeForm'

import { ShieldAlert } from 'lucide-react'
  DialogDescription} from "@/components/ui/dialog"
import { DisputeForm } from "./DisputeForm"
import { useRouter } from 'next/router'
interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string

export function RaiseDisputeButton({
<<<<<<< HEAD
  projectId
  milestoneId
  variant = 'outline'
  size
  className
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false)
    router.push(`/dashboard/disputes/${disputeId}`)
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsDialogOpen(true)}      >
        <ShieldAlert className='h-4 w-4 mr-2' />
        Raise Dispute
      </Button>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
return (
    <>;

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
import { useRouter } from 'next/router',
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {
=======
return (
    <>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}

export function RaiseDisputeButton({ 
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectId,
  milestoneId, 
  variant = "outline", 
  size,
  className 
}: RaiseDisputeButtonProps) {
<<<<<<< HEAD
<<<<<<< HEAD
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false)
    router.push(`/dashboard/disputes/${disputeId}`)
  }
  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsDialogOpen(true)}      >
        <ShieldAlert className='h-4 w-4 mr-2' />
        Raise Dispute
      </Button>
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
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
      
        <DialogContent className="sm:max-w-[550px]">
ursor/fix-website-loading-errors-and-merge-6662
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-[550px]'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-[550px]'>
          <DialogHeader>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with
              this project.
            </DialogDescription>
          </DialogHeader>
<<<<<<< HEAD
<<<<<<< HEAD
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
            </DialogDescription>
          </DialogHeader>
          <DisputeForm
            projectId={projectId}
            milestoneId={milestoneId}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        onClick={() => setIsDialogOpen(true)}      >;
        <ShieldAlert className='h-4 w-4 mr-2' />;
        Raise Dispute;
      </Button>;

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className='sm:max-w-[550px]'>;
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
        <DialogContent className='sm:max - w-[550px]'>;
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
  )
}


          
          <DisputeForm 
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription} from "@/components/ui/dialog",;
import { DisputeForm } from "./DisputeForm",;
import { useRouter } from 'next/router',;
import { ShieldAlert } from 'lucide-react';
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
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const router = useRouter(),;
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);
  };
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;
          <DisputeForm;
<<<<<<< HEAD
<<<<<<< HEAD
            projectId={projectId}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}          />
        </DialogContent>
      </Dialog>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
};
}
;
=======

}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
