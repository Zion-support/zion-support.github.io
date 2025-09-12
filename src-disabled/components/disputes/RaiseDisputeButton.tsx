

:src_backup/components/disputes/RaiseDisputeButton.tsx

;
import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import {Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
:src_backup/components/disputes/RaiseDisputeButton.tsx
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm";
import { useRouter } from 'next/router';
:src_backup/components/disputes/RaiseDisputeButton.tsx
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
return (
    <>;


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

export function RaiseDisputeButton({

:src/components/disputes/RaiseDisputeButton.tsx
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
  projectId,
  milestoneId, 
  variant = "outline", 
  size,
  className 
}: RaiseDisputeButtonProps) {
:src_backup/components/disputes/RaiseDisputeButton.tsx


:src_backup/components/disputes/RaiseDisputeButton.tsx


:src_backup/components/disputes/RaiseDisputeButton.tsx


:src_backup/components/disputes/RaiseDisputeButton.tsx

  DialogDescription} from "@/components/ui/dialog",import { DisputeForm  } from './DisputeForm';
import { useRouter  } from 'next/router';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
 } from '@/components/ui/dialog';
Dialog,DialogContent,DialogHeader,DialogTitle,import { ShieldAlert  } from 'lucide-react';
  DialogDescription} from "@/components/ui/dialog";
interface RaiseDisputeButtonProps  {projectId: string;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
export function RaiseDisputeButton() {const [isDialogOpen, setIsDialogOpen] = useState(false),const router = useRouter(),const handleDisputeCreated = (disputeId: string) => {setIsDialogOpen(false),router.push(`/dashboard/disputes/${disputeId}`)}}export function RaiseDisputeButton({projectId;
  milestoneId;
  variant;return (<>;
      <Button;
        variant={variant}size={size}className={className}onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className='sm:max-w-[550px]'>;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
            <DialogDescription>Please provide details about the issue you're experiencing with;
              this project.;
            </DialogDescription>;
          </DialogHeader>;
        onClick={() => setIsDialogOpen(true)}      >;
        <ShieldAlert className='h-4 w-4 mr-2' />;
        Raise Dispute;
      </Button>;<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;


:src_backup/components/disputes/RaiseDisputeButton.tsx
            <DialogTitle > Raise a Dispute</DialogTitle>;<DialogDescription>Please provide details about the issue you're experiencing with;
              this project.;
            </DialogDescription>;
          </DialogHeader>;onCancel={() => setIsDialogOpen(false)}          />;
        </DialogContent>;
      </Dialog>;
    </>;
  )}<DisputeForm;
:src_backup/components/disputes/RaiseDisputeButton.tsx
            onDisputeCreated={handleDisputeCreated}
:src_backup/components/disputes/RaiseDisputeButton.tsx
            on_cancel={() => setIsDialogOpen (false)}          />;
        </DialogContent>;
      </Dialog>;
    </>);
}



            onCancel={() => setIsDialogOpen(false)}          />
        </DialogContent>
      </Dialog>
    </>

:src/components/disputes/RaiseDisputeButton.tsx
  )
}
:src_backup/components/disputes/RaiseDisputeButton.tsx


            onDisputeCreated={handleDisputeCreated}onCancel={() => setIsDialogOpen(false)}          />;
        </DialogContent>;
      </Dialog>;
    </>;
  )}on_cancel={() => setIsDialogOpen (false)}          />;
        </DialogContent>;
      </Dialog>;
    </>)}<DisputeForm;
  Dialog,DialogContent,DialogHeader,DialogTitle,DialogDescription} from "@/components/ui/dialog",interface RaiseDisputeButtonProps  {projectId: string,milestoneId?: string,variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",size?: "default" | "sm" | "lg" | "icon",className?: string;
}export function RaiseDisputeButton() {const [isDialogOpen, setIsDialogOpen] = useState(false),const router = useRouter(),const handleDisputeCreated = (disputeId: string) => {setIsDialogOpen(false)router.push(`/dashboard/disputes/${disputeId}`)}return (<>;


:src_backup/components/disputes/RaiseDisputeButton.tsx
            onCancel={() => setIsDialogOpen(false)}          />;
:src_backup/components/disputes/RaiseDisputeButton.tsx
  );
:src_backup/components/disputes/RaiseDisputeButton.tsx

;
