<<<<<<< HEAD

import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
=======
import React from "react";
import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
} from "@/components/ui/dialog";
import { HireRequestForm } from "./HireRequestForm";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
import { TalentProfile } from "@/types/talent";
import { UserProfile } from "@/types/auth";
interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
<<<<<<< HEAD
  userDetails?: UserProfile
}
<<<<<<< HEAD
=======
  userDetails?: UserProfile;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {
  const handleClose = null;
=======
export function HireRequestModal({
  talent
  isOpen
  onClose
  userDetails
}: HireRequestModalProps) {
  const handleClose = () => {
    onClose();
  }
  if (!talent) return null;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
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