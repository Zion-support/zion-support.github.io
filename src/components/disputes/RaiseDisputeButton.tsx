=======
return (
    <>;
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

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
=======
}

export function RaiseDisputeButton({ 
<<<<<<< HEAD

export function RaiseDisputeButton({

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),

  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
  },

        onClick={() => setIsDialogOpen(true)}
      >
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-[550px]'>
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with
              this project.
            </DialogDescription>
          </DialogHeader>
<<<<<<< HEAD
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
