import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import {  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components / ui / dialog';
import { DisputeForm } from './DisputeForm';
import { ShieldAlert } from 'lucide-react';
  DialogDescription} from "@/components / ui / dialog",
import { DisputeForm  } from './DisputeForm';
import { use_router } from 'next / router';
interface RaiseDisputeButtonProps {
  project_id: string;
  milestone_id?: string;
  variant?:;
    | 'default';
    | 'outline';
    | 'secondary';
    | 'destructive';
    | 'ghost';
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  class_name?: string;
export /**
 * RaiseDisputeButton - Function description
 */
function RaiseDisputeButton() {
  const [isDialogOpen, setIsDialogOpen] = useState (false);
  const router = use_router ();
  const handleDisputeCreated = (dispute_id: string) =>: any {
    setIsDialogOpen (false);
    router.push (`/dashboard / disputes/${dispute_id}`);
  }
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;
} from '@/components/ui/dialog';
import { DisputeForm } from './DisputeForm';
import { ShieldAlert } from 'lucide-react';
  DialogDescription} from "@/components/ui/dialog",;
import { DisputeForm } from "./DisputeForm";
import { useRouter } from 'next/router';
import { ShieldAlert } from 'lucide-react';
interface RaiseDisputeButtonProps {;
  projectId: string;
  milestoneId?: string;
  variant?:;
    | 'default';
    | 'outline';
    | 'secondary';
    | 'destructive';
    | 'ghost';
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
export function RaiseDisputeButton(): any ({;
  projectId,;
  milestoneId,;
  variant = 'outline',;
  size,;
  className,;
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false);
    router && router.push(`/dashboard/disputes/${disputeId}`);
  };
  return (
    <>;
        onClick={() => setIsDialogOpen(true)}      >;
        <ShieldAlert className='h-4 w-4 mr-2' />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className='sm:max-w-[550px]'>;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
      <Button;
        variant={variant}
        size={size}
        className={class_name}
        on_click={() => setIsDialogOpen (true)}      >;
        <ShieldAlert className='h - 4 w - 4 mr - 2' />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className='sm:max - w-[550px]'>;
          <DialogHeader>;
            <DialogTitle > Raise a Dispute</DialogTitle>;
            <DialogDescription>;
              Please provide details about the issue you're experiencing with;
              this project.;
            </DialogDescription>;
          </DialogHeader>;
            onCancel={() => setIsDialogOpen(false)}          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}
          <DisputeForm;
            project_id={project_id}
            milestone_id={milestone_id}
            onDisputeCreated={handleDisputeCreated}
            on_cancel={() => setIsDialogOpen (false)}          />;
        </DialogContent>;
      </Dialog>;
    </>);
}