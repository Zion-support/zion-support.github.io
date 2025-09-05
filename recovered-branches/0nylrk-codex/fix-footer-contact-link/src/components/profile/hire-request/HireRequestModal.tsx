
import React from &quot;react&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { HireRequestForm } from &quot;./HireRequestForm&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { UserProfile } from &quot;@/types/auth&quot;;

interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;
}

export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {
  const handleClose = () => {
    onClose();
  };

  if (!talent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className=&quot;bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-xl font-bold text-white&quot;>
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        
        <HireRequestForm 
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
      </DialogContent>
    </Dialog>
  );
}
