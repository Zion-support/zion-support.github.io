:src/components/disputes/RaiseDisputeButton.tsx

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
  projectId: string,

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm";
import { useRouter } from 'next/router';
:src/components/disputes/RaiseDisputeButton.tsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
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
:src_backup/components/disputes/RaiseDisputeButton.tsx

export function RaiseDisputeButton({
Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

:src_backup/components/disputes/RaiseDisputeButton.tsx
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from "@/components/ui/dialog",
:src_backup/components/disputes/RaiseDisputeButton.tsx
import { DisputeForm } from "./DisputeForm",
import { useRouter } from 'next/router',
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {  projectId: string,
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link","
  size?: "default" | "sm" | "lg" | "icon","
  className?: string
}
:src_backup/components/disputes/RaiseDisputeButton.tsx

export function RaiseDisputeButton({ 

  projectId,
  milestoneId,
  variant = "outline", "
  size,
  className
}:,  RaiseDisputeButtonProps) {
  className 
}: RaiseDisputeButtonProps) {
:src/components/disputes/RaiseDisputeButton.tsx
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),

  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
  },
}

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
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>
:src_backup/components/disputes/RaiseDisputeButton.tsx

<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
            </DialogDescription>
          </DialogHeader>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-[550px]'>',
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with'
              this project.
            </DialogDescription>
          </DialogHeader>
        onClick={() => setIsDialogOpen(true)}      >;
        <ShieldAlert className='h-4 w-4 mr-2' />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;,
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
        <DialogContent className='sm:max - w-[550px]'>;,
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
:src_backup/components/disputes/RaiseDisputeButton.tsx
            onCancel={() => setIsDialogOpen(false)}          />
        </DialogContent>
      </Dialog>
    </>
:src_backup/components/disputes/RaiseDisputeButton.tsx
  )
}
  )
}
            on_cancel={() => setIsDialogOpen (false)}          />;
        </DialogContent>;
      </Dialog>;
    </>);
}
          <DisputeForm

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

:src_backup/components/disputes/RaiseDisputeButton.tsx

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
}:,  RaiseDisputeButtonProps) {;,
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const router = useRouter(),;
  const handleDisputeCreated = (disputeId:,  string) => {;,
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);`
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const router = useRouter(),;
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`)
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
:src_backup/components/disputes/RaiseDisputeButton.tsx
            onCancel={() => setIsDialogOpen(false)}
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
:src_backup/components/disputes/RaiseDisputeButton.tsx

}
;
:src/components/disputes/RaiseDisputeButton.tsx
  );

}
;
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
