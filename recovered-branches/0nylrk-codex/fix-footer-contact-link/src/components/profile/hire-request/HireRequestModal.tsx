
import React from "react";

interface HireRequestModalProps {_talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;}

export function HireRequestModal(_{_talent, _isOpen, _onClose, _userDetails}: HireRequestModalProps) {_const _handleClose = () => {
    onClose();};

  if (!talent) return null;

  return (
    <Dialog open={_isOpen} onOpenChange={_handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Hire {_talent.full_name}
          </DialogTitle>
        </DialogHeader>
        
        <HireRequestForm 
          talent={_talent}
          onClose={_handleClose}
          userDetails={_userDetails}
        />
      </DialogContent>
    </Dialog>
  );
}
