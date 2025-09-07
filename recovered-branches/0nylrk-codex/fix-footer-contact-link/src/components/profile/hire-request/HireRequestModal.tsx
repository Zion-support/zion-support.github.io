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
}
  talent: TalentProfile | null;,
  isOpen: boolean;
  onClose: () => void;
  userDetails?: UserProfile;
}

export function HireRequestModal({
  talent,
  isOpen,
  onClose,
  userDetails,)
}: HireRequestModalProps) {
  const handleClose = () => {
    onClose();
  };

  if (!talent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>;
</Dialog>"
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>"
          <DialogTitle className="text-xl font-bold text-white">;"
</DialogTitle>
          </DialogTitle>
        </DialogHeader>

        <HireRequestForm;
          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}
        />
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