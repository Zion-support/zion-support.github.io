<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx

<<<<<<< HEAD

=======
=======



import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import React from 'react';
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {

  projectId: string
  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean
  isClient: boolean
  isTalent: boolean
  paymentTerms?: string;
  isSubmitting: boolean
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>

import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {toast} from "sonner";
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface MilestoneManagerProps {
  projectId: string,
  milestones: Milestone[],
  activities: Record<string MilestoneActivity[]>,
  isLoading: boolean,
  isClient: boolean,
  isTalent: boolean,
  paymentTerms?: string,
  isSubmitting: boolean,
  onCreateMilestone: (data: any) => Promise<Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,
  onDeleteMilestone: (id: string) => Promise<boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise<any>,
<<<<<<< HEAD
<<<<<<< HEAD

  refetch: () => Promise<void>
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  refetch: () => Promise<void>
}

export function MilestoneManager({;
  projectId;
  milestones;
  activities;
  isLoading;
  isClient;
  isTalent;
  paymentTerms;
  isSubmitting;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MilestoneManager({
  projectId,
  milestones,
  activities,
  isLoading,
  isClient,
  isTalent,
  paymentTerms,
  isSubmitting,
  onCreateMilestone,
  onUpdateStatus,
  onDeleteMilestone,
  onUploadDeliverable,
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
<<<<<<< HEAD

  refetch;
}: MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId: string) => {;
    try {;

      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);
      toast && toast.success("Milestone approved");
      await refetch();
    } catch (error) {;
      console && console.error("Error approving milestone:", error);
      toast && toast.error("Failed to approve milestone");
    }

  };

  const handleMilestoneRejected = async (milestoneId: string) => {;
    try {;

      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      toast && toast.success("Milestone rejected");
      await refetch();
    } catch (error) {;
      console && console.error("Error rejecting milestone:", error);
      toast && toast.error("Failed to reject milestone");
    }
  }

  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
      <div className="lg:col-span-2">;

        <MilestonesList
=======
========
<<<<<<< HEAD
import React from 'react';
import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks / use_milestones';
import { toast } from './sonner';
interface MilestoneManagerProps {
  project_id: string,
  milestones: Milestone[],
  activities: Record < string, MilestoneActivity[]>;
  is_loading: boolean,
  is_client: boolean,
  is_talent: boolean,
  payment_terms?: string;
  is_submitting: boolean,
  onCreateMilestone: (data: any) => Promise < Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise < boolean>;
  onDeleteMilestone: (id: string) => Promise < boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise < any>,
  refetch: () => Promise < void>;
}
export /**
 * MilestoneManager - Function description
 */
function MilestoneManager() {
  const handleMilestoneApproved = async (milestone_id: string) => {
    try {
      await onUpdateStatus (milestone_id, "completed" as MilestoneStatus);
      toast.success ("Milestone approved");
      await refetch ();
    } catch (error) {
      console.error ("Error approving milestone:", error);
      toast.error ("Failed to approve milestone");
    }
  }
;
  const handleMilestoneRejected = async (milestone_id: string) => {
    try {
      await onUpdateStatus (milestone_id, "rejected" as MilestoneStatus);
      toast.success ("Milestone rejected");
      await refetch ();
    } catch (error) {
      console.error ("Error rejecting milestone:", error);
      toast.error ("Failed to reject milestone");
    }
  }
;
  return (
    <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
      <div className="lg:col - span - 2">;
        <MilestonesList;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error),
      toast.error("Failed to approve milestone")
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error),
      toast.error("Failed to reject milestone")
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
========
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <MilestonesList
        <MilestonesList 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { toast } from "sonner",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface MilestoneManagerProps {;
  projectId: string,;
  milestones: Milestone[],;
  activities: Record<string MilestoneActivity[]>,;
  isLoading: boolean,;
  isClient: boolean,;
  isTalent: boolean,;
  paymentTerms?: string,;
  isSubmitting: boolean,;
  onCreateMilestone: (data: any) => Promise<Milestone | null>,;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,;
  onDeleteMilestone: (id: string) => Promise<boolean>,;
  onUploadDeliverable: (id: string, file: File) => Promise<any>,;
  refetch: () => Promise<void>;
<<<<<<< HEAD
========
;
interface MilestoneManagerProps {;
  projectId:string,;
  milestones:Milestone[],;
  activities:Record<string MilestoneActivity[]>,;
  isLoading:boolean,;
  isClient:boolean,;
  isTalent:boolean,;
  paymentTerms?:string,;
  isSubmitting:boolean,;
  onCreateMilestone:(data:any) => Promise<Milestone | null>,;
  onUpdateStatus:(id:string, status:MilestoneStatus, comment?:string) => Promise<boolean>,;
  onDeleteMilestone:(id:string) => Promise<boolean>,;
  onUploadDeliverable:(id:string, file:File) => Promise<any>,;
  refetch:() => Promise<void>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function MilestoneManager({;
  projectId,;
  milestones,;
  activities,;
  isLoading,;
  isClient,;
  isTalent,;
  paymentTerms,;
  isSubmitting,;
  onCreateMilestone,;
  onUpdateStatus,;
  onDeleteMilestone,;
  onUploadDeliverable,;
  refetch;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId: string) => {;
    try {;
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),;
      toast.success("Milestone approved"),;
      await refetch();
    } catch (error) {;
      console.error("Error approving milestone:", error),;
      toast.error("Failed to approve milestone");
    }
  },;
  const handleMilestoneRejected = async (milestoneId: string) => {;
    try {;
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),;
      toast.success("Milestone rejected"),;
      await refetch();
    } catch (error) {;
      console.error("Error rejecting milestone:", error);
      toast.error("Failed to reject milestone");
    }
  };
  return (;
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
      <div className="lg:col-span-2">;
        <MilestonesList;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <MilestonesList 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
} MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId:string) => {;
    try {;
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),;
      toast.success("Milestone approved"),;
      await refetch(),;
    } catch (error) {;
      console.error("Error approving milestone:", error),;
      toast.error("Failed to approve milestone"),;
    }
  },;
  ;
  const handleMilestoneRejected = async (milestoneId:string) => {;
    try {;
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),;
      toast.success("Milestone rejected"),;
      await refetch(),;
    } catch (error) {;
      console.error("Error rejecting milestone:", error),;
      toast.error("Failed to reject milestone"),;
    }
  },;
;
  return (;
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
      <div className="lg:col-span-2">;
        <MilestonesList ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
          milestones={milestones}
          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary
          milestones={milestones}
          paymentTerms={paymentTerms}
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
        />;
      </div>;
      <div>;
        <PaymentSummary
          milestones={milestones} 
=======
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved :undefined}
          onReject={isClient ? handleMilestoneRejected :undefined}
        />;
      </div>;
      <div>;
        <PaymentSummary ;
          milestones={milestones} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          paymentTerms={paymentTerms}
        />;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
          is_submitting={is_submitting}
          on_approve={is_client ? handleMilestoneApproved : undefined}
          on_reject={is_client ? handleMilestoneRejected : undefined}
        />;
      </div>;
      <div>;
        <PaymentSummary;
          milestones={milestones}
          payment_terms={payment_terms}
        />;
      </div>;
    </div>);
=======
  ),; interface MilestoneManagerProps {
  projectId: string;
milestones: Milestone[];
activities: Record<string MilestoneActivity[]>;
isLoading: boolean;
isClient: boolean;
isTalent: boolean;
paymentTerms?: string;
isSubmitting: boolean;
onCreateMilestone: (data: any) => Promise<Milestone | null>;
onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
onDeleteMilestone: (id: string) => Promise<boolean>;
onUploadDeliverable: (id: string, file: File) => Promise<any>;
refetch: () => Promise<void> 
}projectId, milestones, activities, isLoading, isClient, isTalent, paymentTerms, isSubmitting, onCreateMilestone, onUpdateStatus, onDeleteMilestone, onUploadDeliverable, refetch 
}: MilestoneManagerProps) {
  const handleMilestoneApproved = async (milestoneId: string) => {
  try {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const handleMilestoneRejected = async (milestoneId: string) => {
  try {
  
}
};
grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className=" lg:col-span-2" > <MilestonesList milestones= {
  milestones 
}activities= {
  activities 
}isLoading= {
  isLoading 
}isClient= {
  isClient 
}onCreateMilestone= {
  onCreateMilestone 
}onUpdateStatus= {
  onUpdateStatus 
}onDeleteMilestone= {
  onDeleteMilestone 
}onUploadDeliverable= {
  onUploadDeliverable 
}isSubmitting= {
  isSubmitting 
}onApprove= {
  isClient ? handleMilestoneApproved : undefined 
}onReject= {
  isClient ? handleMilestoneRejected : undefined 
}/> </div> <div> <PaymentSummary milestones= {
  milestones 
}paymentTerms= {
  paymentTerms 
}/> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/MilestoneManager.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        />
      </div>
    </div>
  )
}
        />;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
