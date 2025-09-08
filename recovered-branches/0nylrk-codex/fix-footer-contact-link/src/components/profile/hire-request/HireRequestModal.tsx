import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
} from '@/components / ui / dialog';
import { HireRequestForm  } from './HireRequestForm';
import { TalentProfile  } from '@/types / talent';
import { UserProfile  } from '@/types / auth';
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

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Hire {talent.full_name}
          </DialogTitle>
        </DialogHeader>



          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}

            Hire {talent && talent.full_name}
          </DialogTitle>;
        </DialogHeader>;
        <HireRequestForm

=======
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
      </DialogContent>
    </Dialog>
  );
}


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
