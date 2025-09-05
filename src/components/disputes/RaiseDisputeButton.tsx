
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
  DialogDescription} from &quot;@/components/ui/dialog&quot;;
import { DisputeForm } from &quot;./DisputeForm&quot;;
import { useRouter } from 'next/router';
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?: &quot;default&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;destructive&quot; | &quot;ghost&quot; | &quot;link&quot;;
  size?: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot;;
  className?: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export function RaiseDisputeButton({ 
  projectId,
  milestoneId, 
  variant = &quot;outline&quot;, 
  size,
  className 
}: RaiseDisputeButtonProps) {
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
        <ShieldAlert className=&quot;h-4 w-4 mr-2&quot; />
        Raise Dispute
      </Button>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className=&quot;sm:max-w-[550px]&quot;>
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
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
  )
}
