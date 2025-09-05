
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
=======
import React from &quot;react&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { HireRequestForm } from &quot;./HireRequestForm&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { UserProfile } from &quot;@/types/auth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface HireRequestModalProps {
  talent: TalentProfile | null,
  isOpen: boolean,
  onClose: () => void,
  userDetails?: UserProfile
}

export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {
  const handleClose = () => {
    onClose()
  },
=======
import React from "react";

interface HireRequestModalProps {_talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;}

export function HireRequestModal(_{_talent, _isOpen, _onClose, _userDetails}: HireRequestModalProps) {_const _handleClose = () => {
    onClose();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!talent) return null,

  return (
<<<<<<< HEAD
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className=&quot;bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-xl font-bold text-white&quot;>
            Hire {talent.full_name}
=======
    <Dialog open={_isOpen} onOpenChange={_handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Hire {_talent.full_name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </DialogTitle>
        </DialogHeader>
        
        <HireRequestForm 
          talent={_talent}
          onClose={_handleClose}
          userDetails={_userDetails}
        />
      </DialogContent>
    </Dialog>
  )
}
