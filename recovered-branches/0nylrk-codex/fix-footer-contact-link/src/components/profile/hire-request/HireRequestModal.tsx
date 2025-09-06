
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
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
=======


import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
  };
=======


  };

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    onClose()
  },

  if (!talent) return null,

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
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm 
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
