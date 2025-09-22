<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";

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
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import {}
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,";
} from "@/components/ui/dialog";"
import { HireRequestForm } from "./HireRequestForm";"
import { TalentProfile } from "@/types/talent";"
import { UserProfile } from "@/types/auth";
interface HireRequestModalProps {}
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;
}

export function HireRequestModal({}
  talent,
  isOpen,
  onClose,
  userDetails,
}: HireRequestModalProps) {
  const handleClose = () => {
<<<<<<< HEAD
    onClose();
  }
  if (!talent) return null;
  };
    onClose();
  };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    onClose();
  };

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onClose()
  },

  if (!talent) return null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
import React from './react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { HireRequestForm  } from './HireRequestForm';
import { TalentProfile  } from '@/types / talent';
import { UserProfile  } from '@/types / auth';
interface HireRequestModalProps {
  talent: TalentProfile | null;
  is_open: boolean;
  on_close: () => void;
  user_details?: UserProfile;
}
export /**
 * HireRequestModal - Function description
 */
function HireRequestModal() {
  const handle_close = () =>: any {
    on_close ();
  }
;
  // Check condition
if (return null) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<Dialog open={is_open} onOpenChange={handle_close}>;
      <DialogContent className="bg - zion - blue - dark border - zion - blue - light max - w-4xl w-[95vw] max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle className="text - xl font - bold text - white">;
            Hire {talent.full_name}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
<<<<<<< HEAD

  }
  if (!talent) return null;

onClose()
  },

  if (!talent) return null,
    onClose();
  }
  if (!talent) return null;
  };
    onClose()
  },

  if (!talent) return null,

  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
<<<<<<< HEAD
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

export function HireRequestModal(): any ({ talent, isOpen, onClose, userDetails }: HireRequestModalProps) {;
  const handleClose = () => {;
    onClose();
  };
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";

return (
    <Dialog open={isOpen} onOpenChange={handleClose}>;"
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;"
          <DialogTitle className="text-xl font-bold text-white">;
Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            Hire {talent.full_name}
=======
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",            Hire {talent.full_name}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HireRequestForm } from "./HireRequestForm";
import { TalentProfile } from "@/types/talent";
import { UserProfile } from "@/types/auth";
interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;
}

export function HireRequestModal({
  talent,
  isOpen,
  onClose,
  userDetails,
}: HireRequestModalProps) {
  const handleClose = () => {
    onClose();
  };

  if (!talent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>;
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">;

            Hire {talent.full_name}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </DialogTitle>
        </DialogHeader>
<HireRequestForm 

        <HireRequestForm;
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
      </DialogContent>
    </Dialog>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm 

        <HireRequestForm
        <HireRequestForm         <HireRequestForm
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
      </DialogContent>
    </Dialog>
  );
}

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
=======

            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>

        <HireRequestForm;
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </DialogTitle>;
        </DialogHeader>;
        <HireRequestForm;
          talent={talent}
          on_close={handle_close}
          user_details={user_details}
        />;
      </DialogContent>;
    </Dialog>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
