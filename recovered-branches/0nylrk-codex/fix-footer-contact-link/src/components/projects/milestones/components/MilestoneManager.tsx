

<<<<<<< HEAD

import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';


  projectId: string
=======
import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';

=======  projectId: string
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
import {PaymentSummary} from '../PaymentSummary';
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {toast} from "sonner";
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",



interface MilestoneManagerProps {
=======
import {PaymentSummary} from '../PaymentSummary';interface MilestoneManagerProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  refetch: () => Promise<void>
<<<<<<< HEAD
}




export function MilestoneManager({;
  projectId;
=======
}  projectId;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  onUploadDeliverable,


  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {

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
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      toast && toast.success("Milestone rejected");
      await refetch();
    } catch (error) {;
      console && console.error("Error rejecting milestone:", error);
      toast && toast.error("Failed to reject milestone");
    }
  }

  return (
        <MilestonesList
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
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
=======
  onUploadDeliverable,      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error),
      toast.error("Failed to approve milestone")
    }

  },
<<<<<<< HEAD
  

  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error),
      toast.error("Failed to reject milestone")
    }

  },


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">

        <MilestonesList 

        <MilestonesList
        <MilestonesList 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
import React from 'react',;
=======
  import React from 'react',;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { toast } from "sonner",;
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
          milestones={milestones}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
<<<<<<< HEAD
          onUploadDeliverable={onUploadDeliverable}

        />;
      </div>;
      <div>;
        <PaymentSummary
          milestones={milestones} 
          paymentTerms={paymentTerms}
=======
          onUploadDeliverable={onUploadDeliverable}          paymentTerms={paymentTerms}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        />;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
}

  ),; interface MilestoneManagerProps {
=======
}  ),; interface MilestoneManagerProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
}
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
