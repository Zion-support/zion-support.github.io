<<<<<<< HEAD


import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";

import React from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { HireRequestForm } from "./HireRequestForm",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
    onClose();
  };

    onClose()
  },

  if (!talent) return null,

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
  return (
    <Dialog open={is_open} onOpenChange={handle_close}>;
      <DialogContent className="bg - zion - blue - dark border - zion - blue - light max - w-4xl w-[95vw] max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle className="text - xl font - bold text - white">;
            Hire {talent.full_name}
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";

  }
  if (!talent) return null;

            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm 
=======
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

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <HireRequestForm
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
      </DialogContent>
    </Dialog>
  );
}

=======
=======
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
<<<<<<< HEAD
        <HireRequestForm 
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <HireRequestForm
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
