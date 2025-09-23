
<<<<<<< HEAD
import React{ useState } from 'react';
import { MilestoneStatusMilestoneActivity } from '@/hooks/useMilestones';
=======
import React, { useState } from 'react';
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
>>>>>>> origin/auto/autonomy-17186719616
import { useAuth } from '@/hooks/useAuth';
import { MilestoneCard } from './MilestoneCard';
import { AddMilestoneForm } from './AddMilestoneForm';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { CardContent } from '@/components/ui/card';
// lucide-react doesn't export PlusIconuse our icon wrapper
=======
import { Card, CardContent } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
>>>>>>> origin/auto/autonomy-17186719616
import { Plus } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';

interface MilestonesListProps {
  milestones: Milestone[];
<<<<<<< HEAD
  activities: Record<stringMilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  onUpdateStatus: (id: stringstatus: MilestoneStatuscomment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: stringfile: File) => Promise<any>;
=======
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: string, file: File) => Promise<any>;
>>>>>>> origin/auto/autonomy-17186719616
  isSubmitting: boolean;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>;
}

export const MilestonesList: React.FC<MilestonesListProps> = ({
  milestones,
  activities,
  isLoading,
  isClient,
  onCreateMilestone,
  onUpdateStatus,
  onDeleteMilestone,
  onUploadDeliverable,
  isSubmitting,
  onApprove,
  onReject
}) => {
<<<<<<< HEAD
  const [showAddFormsetShowAddForm] = useState(false);
=======
  const [showAddForm, setShowAddForm] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data);
    setShowAddForm(false);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
<<<<<<< HEAD
        {[123].map((i) => (
=======
        {[1, 2, 3].map((i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <Card key={i}>
            <CardContent className="p-6">
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (milestones.length === 0 && !showAddForm) {
    return (
      <EmptyState
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet"
        description={isClient ? 
          "Break down the project into manageable milestones to track progress and payments." : 
          "No milestones have been created for this project yet."}
        action={isClient ? 
          {
            text: "Create First Milestone",
            onClick: () => setShowAddForm(true)
          } : undefined
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {isClient && !showAddForm && (
        <div className="flex justify-end">
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Milestone
          </Button>
        </div>
      )}
      
      {showAddForm && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
            <AddMilestoneForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <MilestoneCard
            key={milestone.id}
            id={milestone.id}
            projectId={milestone.project_id}
            title={milestone.title}
            description={milestone.description}
            amount={parseFloat(milestone.amount.toString())}
            status={milestone.status}
            dueDate={milestone.due_date}
            onApprove={onApprove}
            onReject={onReject}
          />
        ))}
      </div>
    </div>
  );
};
