
import React from "react";
import {

  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
DialogTitle,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

        <ApplyForm
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />
      </DialogContent>






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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  );

}