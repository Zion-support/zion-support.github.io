
<<<<<<< HEAD
import React from "react";
import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
} from "@/components/ui/dialog";
import { HireRequestForm } from "./HireRequestForm";

import { TalentProfile } from "@/types/talent";
import { UserProfile } from "@/types/auth";
=======
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile
}

export function HireRequestModal({
  talent
  isOpen
  onClose
  userDetails
}: HireRequestModalProps) {
  const handleClose = () => {
<<<<<<< HEAD
    onClose();
  }
  if (!talent) return null;
=======
    onClose()
  },

  if (!talent) return null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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