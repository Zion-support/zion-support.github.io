import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { useAuth  } from '@/hooks/useAuth';
import { MilestoneCard  } from './MilestoneCard';
import { AddMilestoneForm  } from './AddMilestoneForm';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus  } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {useAuth} from '@/hooks/useAuth';
import {MilestoneCard} from './MilestoneCard';
import {AddMilestoneForm} from './AddMilestoneForm';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import {Plus} from '@/components/icons';
import {EmptyState} from '@/components/ui/empty-state';
interface MilestonesListProps {
  milestones: Milestone[],
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean,
  isClient: boolean,
  onCreateMilestone: (data: any) => Promise<Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise<any>,
  isSubmitting: boolean,
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
}

export const MilestonesList: React.FC<MilestonesListProps> = ({;
  milestones;
  activities;
  isLoading;
  isClient;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;
  isSubmitting;
import React, { useState } from 'react',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { useAuth } from '@/hooks/useAuth',;
import { MilestoneCard } from './MilestoneCard',;
import { AddMilestoneForm } from './AddMilestoneForm',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import { Plus } from '@/components/icons',;
import { EmptyState } from '@/components/ui/empty-state',;
interface MilestonesListProps {;
  milestones: Milestone[],;
  activities: Record<string MilestoneActivity[]>,;
  isLoading: boolean,;
  isClient: boolean,;
  onCreateMilestone: (data: any) => Promise<Milestone | null>,;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,;
  onDeleteMilestone: (id: string) => Promise<boolean>,;
  onUploadDeliverable: (id: string, file: File) => Promise<any>,;
  isSubmitting: boolean,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}

  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean
  isClient: boolean
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>
  isSubmitting: boolean
  onApprove?: (id: string) => Promise<void>

  onReject?: (id: string) => Promise<void>
}
export const MilestonesList: React.FC<MilestonesListProps> = ({
  milestones;
  activities;
  is_loading;
  is_client;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;

  onApprove
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  if (milestones.length === 0 && !showAddForm) {
    return (
      <EmptyState
        icon={<span className="text-3xl"></span>}
        title="No Milestones Yet"
        description={isClient ?
          "Break down the project into manageable milestones to track progress and payments." :
          "No milestones have been created for this project yet."}
        action={isClient ?
          {
            text: "Create First Milestone"
            onClick: () => setShowAddForm(true)
          } : undefined
        }
      />;
    );
  }
  return (
    <div className="space-y-6">;
      {isClient && !showAddForm && (;
        <div className="flex justify-end">;
          <Button onClick={() => setShowAddForm(true)}>;
            <Plus className="h-4 w-4 mr-2" />;
            Add Milestone;
          </Button>;
        </div>;
      )}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />;
          </CardContent>;
        </Card>;
      )}
      <div className="space-y-4">
        {milestones.map((milestone) => (

      <div className="space-y-4">;
        {milestones && milestones.map((milestone) => (;
          <MilestoneCard
};
