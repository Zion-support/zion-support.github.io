
<<<<<<< HEAD
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",
=======
import React from 'react';
<<<<<<< HEAD
import { MilestonesList } from '../MilestonesList';
import { PaymentSummary } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  refetch: () => Promise<void>
}
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function MilestoneManager(_{_projectId, _milestones, _activities, _isLoading, _isClient, _isTalent, _paymentTerms, _isSubmitting, _onCreateMilestone, _onUpdateStatus, _onDeleteMilestone, _onUploadDeliverable, _refetch}: MilestoneManagerProps) {_const _handleMilestoneApproved = async (_milestoneId: string) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error),
      toast.error("Failed to approve milestone")
=======
      await onUpdateStatus(milestoneId, &quot;completed&quot; as MilestoneStatus);
      toast.success(&quot;Milestone approved&quot;);
      await refetch();
    } catch (error) {
      console.error(&quot;Error approving milestone:&quot;, error);
      toast.error(&quot;Failed to approve milestone&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
<<<<<<< HEAD
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error),
      toast.error("Failed to reject milestone")
=======
      await onUpdateStatus(milestoneId, &quot;rejected&quot; as MilestoneStatus);
      toast.success(&quot;Milestone rejected&quot;);
      await refetch();
    } catch (error) {
      console.error(&quot;Error rejecting milestone:&quot;, error);
      toast.error(&quot;Failed to reject milestone&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
      await onUpdateStatus(milestoneId, _"completed" as MilestoneStatus);
      toast.success("Milestone approved");
      await refetch();} catch (error) {_toast.error("Failed to approve milestone");}
  };
  
  const _handleMilestoneRejected = async (_milestoneId: string) => {_try {
      await onUpdateStatus(milestoneId, _"rejected" as MilestoneStatus);
      toast.success("Milestone rejected");
      await refetch();} catch (error) {_toast.error("Failed to reject milestone");}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
}
