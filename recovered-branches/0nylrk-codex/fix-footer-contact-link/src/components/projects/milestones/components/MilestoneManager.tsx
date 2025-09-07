<<<<<<< HEAD

  paymentTerms?: string,
  "isSubmitting": boolean,
  "onCreateMilestone": ("data": any) => Promise<Milestone | null>,
  "onUpdateStatus": ("id": string, "status": MilestoneStatus, comment?: string) => Promise<boolean>,
  "onDeleteMilestone": ("id": string) => Promise<boolean>,
  "onUploadDeliverable": ("id": string, "file": File) => Promise<any>,
  "refetch": () => Promise<void>
}  projectId;
}
export function MilestoneManager({
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
export function MilestoneManager({
  }
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

    }
  }
  return (;

<<<<<<< HEAD
=======
=======
projectId: string

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';


<<<<<<< HEAD

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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  refetch: () => Promise<void>
}
;
=======
  refetch: () => Promise<void>
}
<<<<<<< HEAD

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


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  projectId;

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
<<<<<<< HEAD
=======

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

      toast.error ("Failed to approve milestone");
    }
  }
;

      toast.error ("Failed to reject milestone");
    }
  }
;
<<<<<<< HEAD

=======
  return (
    <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
      <div className="lg:col - span - 2">;
        <MilestonesList;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),

      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {"
      console.error("Error approving milestone:", error),"
      toast.error("Failed to approve milestone")
    }
<<<<<<< HEAD
  },
  

  }
  },
  
=======

<<<<<<< HEAD
=======
  },
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),

      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {"
      console.error("Error rejecting milestone:", error),"
      toast.error("Failed to reject milestone")
    }

<<<<<<< HEAD
  return ("
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
      <div className="lg:col-span-2">

import React from 'react',;

import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;

=======
  },

<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">

<<<<<<< HEAD
        <MilestonesList
        <MilestonesList 
import React from 'react',;
import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}
;
export function MilestoneManager() { return null; }
    } catch (error) {;"
      console.error("Error approving milestone:", error),;"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast.error("Failed to approve milestone");
    }
  },;
  const handleMilestoneRejected = async (milestoneId: string) => {;
<<<<<<< HEAD
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
>>>>>>> origin/chore/fix-lint-and-merge
        <MilestonesList;

=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <MilestonesList 

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          milestones={milestones}

          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
<<<<<<< HEAD

          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
=======
<<<<<<< HEAD
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
<<<<<<< HEAD
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary
          milestones={milestones}
          paymentTerms={paymentTerms}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        />;
      </div>;
      <div>;
        <PaymentSummary;
          milestones={milestones} 
<<<<<<< HEAD

          paymentTerms={paymentTerms}
=======
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved :undefined}
          onReject={isClient ? handleMilestoneRejected :undefined}
        />;
      </div>;
      <div>;
        <PaymentSummary ;
          milestones={milestones} ;
          paymentTerms={paymentTerms}
        />;
      </div>;
    </div>;
<<<<<<< HEAD
=======
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          is_submitting={is_submitting}
          on_approve={is_client ? handleMilestoneApproved : undefined}
          on_reject={is_client ? handleMilestoneRejected : undefined}
        />;
      </div>;
      <div>;
<<<<<<< HEAD
        <PaymentSummary;
          milestones={milestones}
          payment_terms={payment_terms} />;
      </div>;
    </div>);

paymentTerms?: string;
"isSubmitting": boolean;
"onCreateMilestone": ("data": any) => Promise<Milestone | null>;
"onUpdateStatus": ("id": string, "status": MilestoneStatus, comment?: string) => Promise<boolean>;
"onDeleteMilestone": ("id": string) => Promise<boolean>;
"onUploadDeliverable": ("id": string, "file": File) => Promise<any>;
"refetch": () => Promise<void>
}projectId, milestones, activities, isLoading, isClient, isTalent, paymentTerms, isSubmitting, onCreateMilestone, onUpdateStatus, onDeleteMilestone, onUploadDeliverable, refetch
}: MilestoneManagerProps) {

}activities= {
  }
  activities
}isLoading= {
  }
  isLoading
}isClient= {
  }
  isClient
}onCreateMilestone= {
  }
  onCreateMilestone
}onUpdateStatus= {
  }
  onUpdateStatus
}onDeleteMilestone= {
  }
  onDeleteMilestone
}onUploadDeliverable= {
  }
  onUploadDeliverable
}isSubmitting= {
  }
  isSubmitting
}onApprove= {
  }
  isClient ? handleMilestoneApproved : undefined
}onReject= {
  }
  isClient ? handleMilestoneRejected : undefined
} /> </div> <div> <PaymentSummary milestones= {
  }
  milestones
}paymentTerms= {
  }
  paymentTerms
} /> </div> </div>)
}
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
=======

>>>>>>> origin/chore/fix-lint-and-merge
          onUploadDeliverable={onUploadDeliverable}

        />;
</MilestonesList>
      </div>;
      <div>;
</div>
        <PaymentSummary;
          milestones={milestones} 
          paymentTerms={paymentTerms}

        />;
</PaymentSummary>
      </div>;
    </div>;

      </div>;
      <div>;
</div>

        <PaymentSummary;
          milestones={milestones}
          payment_terms={payment_terms}
        />;
      </div>;
<<<<<<< HEAD
    </div>);
=======
    </div>);
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
;

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
