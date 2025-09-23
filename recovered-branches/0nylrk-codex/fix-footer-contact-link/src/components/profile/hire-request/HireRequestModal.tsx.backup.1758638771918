
import React from "react";
<<<<<<< HEAD
import { DialogContentDialogHeaderDialogTitle } from "@/components/ui/dialog";
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
>>>>>>> origin/auto/autonomy-17186719616
import { HireRequestForm } from "./HireRequestForm";
import { TalentProfile } from "@/types/talent";
import { UserProfile } from "@/types/auth";

interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;
}

<<<<<<< HEAD
export function HireRequestModal({ talentisOpenonCloseuserDetails }: HireRequestModalProps) {
=======
export function HireRequestModal({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {
>>>>>>> origin/auto/autonomy-17186719616
  const handleClose = () => {
    onClose();
  };

  if (!talent) return null;

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
