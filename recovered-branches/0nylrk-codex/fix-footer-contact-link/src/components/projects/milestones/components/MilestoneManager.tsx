
import React from 'react';
import { MilestonesList } from '../MilestonesList';
import { PaymentSummary } from '../PaymentSummary';
import { toast } from "sonner";

interface MilestoneManagerProps {
  projectId: string;
  milestones: Milestone[];
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  refetch: () => Promise<void>;
}

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
  refetch
}: MilestoneManagerProps) {
  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
      toast.error("Failed to approve milestone");
    }
  };
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      toast.error("Failed to reject milestone");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <MilestonesList 
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary 
          milestones={milestones} 
          paymentTerms={paymentTerms}
        />
      </div>
    </div>
  );
}
