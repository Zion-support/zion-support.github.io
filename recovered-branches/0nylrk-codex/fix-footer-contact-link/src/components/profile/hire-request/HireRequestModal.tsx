

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {HireRequestForm} from "./HireRequestForm";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>;
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">;

            Hire {talent.full_name}
import React from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { HireRequestForm } from "./HireRequestForm",;
import { TalentProfile } from "@/types/talent",;
import { UserProfile } from "@/types/auth",            Hire {talent.full_name}
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
}
import React from "react";"

import {
  // TODO: Implement
}
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,"
} from "@/components/ui/dialog";""
import { HireRequestForm } from "./HireRequestForm";""
import { TalentProfile } from "@/types/talent";""
import { UserProfile } from "@/types/auth";"

interface HireRequestModalProps {
  // TODO: Implement
  talent: TalentProfile | null;,
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;
  onClose: () => void;}
  userDetails?: UserProfile;}
}

export function HireRequestModal({
  talent,
  isOpen,

  onClose,
  userDetails,)

}: HireRequestModalProps) {
  const handleClose = (
    onClose();) => {
  return $3;}
}
  };

  if (!talent) return null;

  return (

    <Dialog open={isOpen} onOpenChange={handleClose}>;
"
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;"

        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">;"

          
        

        <HireRequestForm;
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />

      
    
          
        

      
    


          ;
          on_close={handle_close}
          user_details={user_details}
        />;

      ;)
    );"
pr-12325
</HireRequestForm>
      </DialogContent>
    </Dialog>
          </DialogTitle>
        </DialogHeader>
        <HireRequestForm;
        <HireRequestForm;
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
</HireRequestForm>
      </DialogContent>
    </Dialog>
    <Dialog open={isOpen} onOpenChange={handleClose}>;
</Dialog>"
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>"
          <DialogTitle className="text-xl font-bold text-white">;"
</DialogTitle>
          </DialogTitle>;
        </DialogHeader>;
        <HireRequestForm;
          talent={talent}
          on_close={handle_close}
          user_details={user_details}
        />;
</HireRequestForm>
      </DialogContent>;)
    </Dialog>);"

