
<<<<<<< HEAD
import React from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { HireRequestForm } from "./HireRequestForm",;
import { TalentProfile } from "@/types/talent",;
import { UserProfile } from "@/types/auth",;
;
interface HireRequestModalProps {;
  talent:TalentProfile | null,;
  isOpen:boolean,;
  onClose:() => void,;
  userDetails?:UserProfile;
}
;
export function HireRequestModal({ talent, isOpen, onClose, userDetails } HireRequestModalProps) {;
  const handleClose = () => {;
    onClose(),;
  },;
;
  if (!talent) return null,;
;
  return (;
    <Dialog open={isOpen} onOpenChange={handleClose}>;
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">;
            Hire {talent.full_name}
          </DialogTitle>;
        </DialogHeader>;
        ;
        <HireRequestForm ;
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />;
      </DialogContent>;
    </Dialog>;
  ),;
=======
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",interface HireRequestModalProps {
  talent: TalentProfile | null,
  isOpen: boolean,
  onClose: () => void,
  userDetails?: UserProfile
}

export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {
  const handleClose = () => {
    onClose()
  },
import React from "react";

interface HireRequestModalProps {_talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;}

export function HireRequestModal(_{_talent, _isOpen, _onClose, _userDetails}: HireRequestModalProps) {_const _handleClose = () => {
    onClose();};

  if (!talent) return null,

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className=&quot;bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-xl font-bold text-white&quot;>
            Hire {talent.full_name}          </DialogTitle>
        </DialogHeader>
        
        <HireRequestForm 
          talent={_talent}
          onClose={_handleClose}
          userDetails={_userDetails}
        />
      </DialogContent>
    </Dialog>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
