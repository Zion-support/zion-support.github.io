
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
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
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  }
  if (!talent) return null;
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    onClose()
  },


  if (!talent) return null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
=======
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">

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

  if (!talent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>;
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}

        />;
      </DialogContent>;
    </Dialog>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
