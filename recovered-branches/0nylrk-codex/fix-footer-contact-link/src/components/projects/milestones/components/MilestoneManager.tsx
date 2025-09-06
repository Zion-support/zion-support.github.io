
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



import {MilestonesList} from '../MilestonesList';'
import {PaymentSummary} from '../PaymentSummary';

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  projectId: string
=======
=======  projectId: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======  projectId: string
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  projectId: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>
<<<<<<< HEAD

import {MilestonesList} from '../MilestonesList';
<<<<<<< HEAD
<<<<<<< HEAD
import {PaymentSummary} from '../PaymentSummary';
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {toast} from "sonner";
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
'
import {MilestonesList} from '../MilestonesList';'
import {PaymentSummary} from '../PaymentSummary';
'
import React from 'react','
import { MilestonesList } from '../MilestonesList','
import { PaymentSummary } from '../PaymentSummary','
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MilestoneManagerProps {
=======
import {PaymentSummary} from '../PaymentSummary';interface MilestoneManagerProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {PaymentSummary} from '../PaymentSummary';interface MilestoneManagerProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface MilestoneManagerProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export function MilestoneManager({;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  refetch: () => Promise<void>
}
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectId;
=======
  refetch: () => Promise<void>
}  projectId;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  refetch: () => Promise<void>
}  projectId;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
export function MilestoneManager({}
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
<<<<<<< HEAD
  onUploadDeliverable,
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  refetch;
}: MilestoneManagerProps) {}
  const handleMilestoneApproved = async (milestoneId: string) => {}
    try {}
"
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);"
      toast && toast.success("Milestone approved");
      await refetch();
    } catch (error) {;"
      console && console.error("Error approving milestone:", error);"
      toast && toast.error("Failed to approve milestone");
    }"
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);"
      toast && toast.success("Milestone rejected");
      await refetch();
    } catch (error) {;"
      console && console.error("Error rejecting milestone:", error);"
      toast && toast.error("Failed to reject milestone");
    }
  }

  return (
        <MilestonesList'
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks / use_milestones';'
import { toast } from './sonner';
interface MilestoneManagerProps {}
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
export /**;
 * MilestoneManager - Function description;
 */
function MilestoneManager() {}
  const handleMilestoneApproved = async (milestone_id: string) => {}
    try {"
      await onUpdateStatus (milestone_id, "completed" as MilestoneStatus);"
      toast.success ("Milestone approved");
      await refetch ();
    } catch (error) {"
      console.error ("Error approving milestone:", error);"
      toast.error ("Failed to approve milestone");
    }
  }
;
  const handleMilestoneRejected = async (milestone_id: string) => {}
    try {"
      await onUpdateStatus (milestone_id, "rejected" as MilestoneStatus);"
      toast.success ("Milestone rejected");
      await refetch ();
    } catch (error) {"
      console.error ("Error rejecting milestone:", error);"
      toast.error ("Failed to reject milestone");
    }
  }
;
  return ("
    <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;"
      <div className="lg:col - span - 2">;
        <MilestonesList;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
=======
  onUploadDeliverable,      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onUploadDeliverable,      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {"
      console.error("Error approving milestone:", error),"
      toast.error("Failed to approve milestone")
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  },
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
=======
  const handleMilestoneRejected = async (milestoneId: string) => {}
    try {"
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {"
      console.error("Error rejecting milestone:", error),"
      toast.error("Failed to reject milestone")
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return ("
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
      <div className="lg:col-span-2">

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <MilestonesList 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        <MilestonesList
        <MilestonesList 
=======
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
=======

  },
  import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  },
  import React from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
=======
'
import React from 'react',;'
import { MilestonesList } from '../MilestonesList',;'
import { PaymentSummary } from '../PaymentSummary',;'
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export function MilestoneManager() { return null; }
    } catch (error) {;"
      console.error("Error approving milestone:", error),;"
      toast.error("Failed to approve milestone");
    }
  },;
  const handleMilestoneRejected = async (milestoneId: string) => {;
    try {;"
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),;"
      toast.success("Milestone rejected"),;
      await refetch();
    } catch (error) {;"
      console.error("Error rejecting milestone:", error);"
      toast.error("Failed to reject milestone");
    }
  };
  return (;"
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
      <div className="lg:col-span-2">;
        <MilestonesList;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          milestones={milestones}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
<<<<<<< HEAD
<<<<<<< HEAD
          onUploadDeliverable={onUploadDeliverable}

<<<<<<< HEAD
=======


=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        />;
      </div>;
      <div>;
        <PaymentSummary;
          milestones={milestones} 

          paymentTerms={paymentTerms}
=======
          onUploadDeliverable={onUploadDeliverable}          paymentTerms={paymentTerms}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          onUploadDeliverable={onUploadDeliverable}          paymentTerms={paymentTerms}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        />;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
}  ),; interface MilestoneManagerProps {
=======




  ),; interface MilestoneManagerProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
}projectId, milestones, activities, isLoading, isClient, isTalent, paymentTerms, isSubmitting, onCreateMilestone, onUpdateStatus, onDeleteMilestone, onUploadDeliverable, refetch;
}: MilestoneManagerProps) {}
  const handleMilestoneApproved = async (milestoneId: string) => {}
  try {}
}

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
