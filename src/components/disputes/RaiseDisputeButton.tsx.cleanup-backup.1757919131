
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
>>>>>>> origin/auto/autonomy-17186719616
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
import { useRouter } from 'next/router',
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}

export function RaiseDisputeButton({ 
  projectId,
=======
  DialogDescription,
} from "@/components/ui/dialog";
import { DisputeForm } from "./DisputeForm";
import { useRouter } from 'next/router';
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function RaiseDisputeButton({ 
  projectId, 
>>>>>>> origin/auto/autonomy-17186719616
  milestoneId, 
  variant = "outline", 
  size,
  className 
}: RaiseDisputeButtonProps) {
<<<<<<< HEAD
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`),
  },
=======
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);
  };
>>>>>>> origin/auto/autonomy-17186719616
  
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
<<<<<<< HEAD
        <DialogContent className='sm:max-w-[550px]'>
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with
              this project.
=======
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
>>>>>>> origin/auto/autonomy-17186719616
            </DialogDescription>
          </DialogHeader>
          
          <DisputeForm 
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
