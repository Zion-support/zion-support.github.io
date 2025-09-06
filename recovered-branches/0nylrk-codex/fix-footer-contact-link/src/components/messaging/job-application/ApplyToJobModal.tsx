
import React from "react";
import {



  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
DialogTitle,;






} from "@/components/ui/dialog";
import { ApplyForm } from "./ApplyForm";
import { ApplyToJobModalProps } from "./types";
export function ApplyToJobModal({
  job
  isOpen
  onClose
  onApplySuccess
}: ApplyToJobModalProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply to Job: {job.title}</DialogTitle>
          <DialogDescription>
            Complete your application for this position
          </DialogDescription>
        </DialogHeader>










          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;

        <ApplyForm;

          job={job}
          on_close={on_close}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
    </Dialog>;





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  );
>>>>>>> origin/feature/merge-conflicts-and-improvements

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  );

}