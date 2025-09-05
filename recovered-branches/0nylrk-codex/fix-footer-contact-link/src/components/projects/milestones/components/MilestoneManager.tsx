
<<<<<<< HEAD
import React from 'react',;
import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { toast } from "sonner",;
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
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
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
  ),;
=======
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",interface MilestoneManagerProps {
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
}

interface MilestoneManagerProps {_projectId: string;
  milestones: Milestone[];
  activities: Record<string, _MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (_data: unknown) => Promise<Milestone | null>;
  onUpdateStatus: (_id: string, _status: MilestoneStatus, _comment?: string) => Promise<boolean>;
  onDeleteMilestone: (_id: string) => Promise<boolean>;
  onUploadDeliverable: (_id: string, _file: File) => Promise<any>;
  refetch: () => Promise<void>;}

export function MilestoneManager(_{_projectId, _milestones, _activities, _isLoading, _isClient, _isTalent, _paymentTerms, _isSubmitting, _onCreateMilestone, _onUpdateStatus, _onDeleteMilestone, _onUploadDeliverable, _refetch}: MilestoneManagerProps) {_const _handleMilestoneApproved = async (_milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error),
      toast.error("Failed to approve milestone")    }
  },
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error),
      toast.error("Failed to reject milestone")    }
  },
      await onUpdateStatus(milestoneId, _"completed" as MilestoneStatus);
      toast.success("Milestone approved");
      await refetch();} catch (error) {_toast.error("Failed to approve milestone");}
  };
  
  const _handleMilestoneRejected = async (_milestoneId: string) => {_try {
      await onUpdateStatus(milestoneId, _"rejected" as MilestoneStatus);
      toast.success("Milestone rejected");
      await refetch();} catch (error) {_toast.error("Failed to reject milestone");}
  };

  return (
    <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
      <div className=&quot;lg:col-span-2&quot;>
        <MilestonesList 
          milestones={_milestones}
          activities={_activities}
          isLoading={_isLoading}
          isClient={_isClient}
          onCreateMilestone={_onCreateMilestone}
          onUpdateStatus={_onUpdateStatus}
          onDeleteMilestone={_onDeleteMilestone}
          onUploadDeliverable={_onUploadDeliverable}
          isSubmitting={_isSubmitting}
          onApprove={_isClient ? handleMilestoneApproved : undefined}
          onReject={_isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary 
          milestones={_milestones} 
          paymentTerms={_paymentTerms}
        />
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
