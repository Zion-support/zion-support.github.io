
import React, {_useState} from "react";
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle, _DialogDescription} from "@/components/ui/dialog";

interface RaiseDisputeButtonProps {_projectId: string;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;}

export function RaiseDisputeButton(_{_projectId, _milestoneId, _variant = "outline", _size, _className}: RaiseDisputeButtonProps) {_const [isDialogOpen, _setIsDialogOpen] = useState(false);
  const _router = useRouter();
  
  const _handleDisputeCreated = (_disputeId: string) => {
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);
  };
  
  return (_<>
      <Button 
        variant={_variant} 
        size={_size} 
        className={_className} 
        onClick={_() => setIsDialogOpen(true)}
      >
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>
      
      <Dialog open={_isDialogOpen} onOpenChange={_setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
            </DialogDescription>
          </DialogHeader>
          
          <DisputeForm 
            projectId={_projectId}
            milestoneId={_milestoneId}
            onDisputeCreated={_handleDisputeCreated}
            onCancel={_() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
