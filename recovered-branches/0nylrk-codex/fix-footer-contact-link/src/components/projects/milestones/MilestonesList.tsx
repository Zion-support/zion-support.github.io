
<<<<<<< HEAD

import React, { useState } from 'react';


=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
  const [showAddForm, setShowAddForm] = useState(false),
  
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data)
    setShowAddForm(false)
  }
  },

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
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
            text: "Create First Milestone"
            onClick: () => setShowAddForm(true)
          } : undefined


  if (milestones && milestones.length === 0 && !showAddForm) {;
    return (
      <EmptyState
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet";
        description={isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." : ;
          "No milestones have been created for this project yet."}
        action={isClient ? ;
          {;
            text: "Create First Milestone",;
            onClick: () => setShowAddForm(true);
          } : undefined;

        }
      />;
    );
  }

          <MilestoneCard
            key={milestone && milestone.id}
            id={milestone && milestone.id}
            projectId={milestone && milestone.project_id}
            title={milestone && milestone.title}
            description={milestone && milestone.description}
            amount={parseFloat(milestone && milestone.amount.toString())}
            status={milestone && milestone.status}
            dueDate={milestone && milestone.due_date}
            onApprove={onApprove}
            onReject={onReject}
          />;
        ))}

<<<<<<< HEAD
      </div>
    </div>
  )


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======



=======
      </div>;
    </div>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
