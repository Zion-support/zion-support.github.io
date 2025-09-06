
<<<<<<< HEAD
import React from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
=======
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface HireRequestModalProps {
  talent: TalentProfile | null,
  isOpen: boolean,
  onClose: () => void,
  userDetails?: UserProfile
}

export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {
  const handleClose = () => {
<<<<<<< HEAD
    onClose();
  };
=======
    onClose()
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  if (!talent) return null,

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
<<<<<<< HEAD
=======
import React from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { HireRequestForm } from "./HireRequestForm",;
import { TalentProfile } from "@/types/talent",;
import { UserProfile } from "@/types/auth",;
interface HireRequestModalProps {;
  talent: TalentProfile | null,;
  isOpen: boolean,;
  onClose: () => void,;
  userDetails?: UserProfile;
}
;
export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {;
  const handleClose = () => {;
    onClose();
  };
  if (!talent) return null;
  return (;
    <Dialog open={isOpen} onOpenChange={handleClose}>;
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
  )
}
