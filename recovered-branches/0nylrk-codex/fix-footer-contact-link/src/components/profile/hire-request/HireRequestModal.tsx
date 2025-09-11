

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;
export function HireRequestModal({
  talent
  isOpen
  onClose
  userDetails
}: HireRequestModalProps) {
  const handleClose = () => {
  };

    onClose()
  },


  if (!talent) return null,

=======


  };

=======
    onClose()
  },

  if (!talent) return null,

=======import React from './react';
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
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
=======
==============
=======    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import React from "react",;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm 
<<<<<<< HEAD
            Hire {talent && talent.full_name}
          </DialogTitle>;
        </DialogHeader>;
        <HireRequestForm

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
        />;
      </DialogContent>;
    </Dialog>;
  );
}

=======          </DialogTitle>;
        </DialogHeader>;
        <HireRequestForm;
          talent={talent}
          on_close={handle_close}
          user_details={user_details}
        />;
      </DialogContent>;
    </Dialog>);
}
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
