
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay
} from &quot;@/components/ui/dialog&quot;;
import { DisputeForm } from &quot;./DisputeForm&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { ShieldAlert } from &quot;lucide-react&quot;;

interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?: &quot;default&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;destructive&quot; | &quot;ghost&quot; | &quot;link&quot;;
  size?: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot;;
  className?: string;
}

export function RaiseDisputeButton({ 
  projectId, 
  milestoneId, 
  variant = &quot;outline&quot;, 
  size,
  className 
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false);
    navigate(`/dashboard/disputes/${disputeId}`);
  };
  
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
  );
}
