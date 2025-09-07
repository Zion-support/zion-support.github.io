<<<<<<< HEAD

import React, { useState } from 'react';
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
import { useAuth } from '@/hooks/useAuth';
import { MilestoneCard } from './MilestoneCard';
import { AddMilestoneForm } from './AddMilestoneForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus } from 'lucide-react'
import { EmptyState } from '@/components/ui/empty-state';
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

export const MilestonesList: React.FC<MilestonesListProps> = ({
  milestones;
  activities;
  isLoading;
  isClient;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;
  isSubmitting;
  onApprove;
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data);
    setShowAddForm(false)
  };

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
=======
<<<<<<< HEAD
}; import React, { useState } from 'react'
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones'
import { useAuth } from '@/hooks/useAuth'
import { MilestoneCard } from './MilestoneCard'
import { AddMilestoneForm } from './AddMilestoneForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus } from 'lucide-react'import { EmptyState } from '@/components/ui/empty-state'
interface MilestonesListProps {
  milestones: Milestone[],
  activities: Record<string, MilestoneActivity[]>
  isLoading: boolean,
  isClient: boolean,
  onCreateMilestone: (data: any) => Promise<Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>
  onDeleteMilestone: (id: string) => Promise<boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise<any>,  isSubmitting: boolean,
  onApprove?: (id: string,) => Promise<void>,
  onReject?: (id: string,) => Promise<void>
}

import React, { useState } from 'react';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { useAuth  } from '@/hooks/useAuth';
import { MilestoneCard  } from './MilestoneCard';
import { AddMilestoneForm  } from './AddMilestoneForm';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus } from 'lucide-react'
import { EmptyState } from '@/components/ui/empty-state';
interface MilestonesListProps {

  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>
  isLoading: boolean
  isClient: boolean
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>,  isSubmitting: boolean
  onApprove?: (id: string,) => Promise<void>
  onReject?: (id: string,) => Promise<void>

}
export const MilestonesList: React.FC<MilestonesListProps> = ({

  milestones
  activities
  isLoading
  isClient
  onCreateMilestone
  onUpdateStatus
  onDeleteMilestone
  onUploadDeliverable
  isSubmitting
  onApprove
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false)
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data);    setShowAddForm(false)
  }
  onApprove,
  onReject;
}) => {;
  const [showAddForm, setShowAddForm] = useState(false);
  const handleSubmit = async (data: any) => {;
    await onCreateMilestone(data);    setShowAddForm(false)
  }

import React, { useState } from 'react',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { useAuth } from '@/hooks/useAuth',;
import { MilestoneCard } from './MilestoneCard',;
import { AddMilestoneForm } from './AddMilestoneForm',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import { Plus } from 'lucide-react';
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
  const [showAddForm, setShowAddForm] = useState(false),
  
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data),
    setShowAddForm(false)
  },

  if (isLoading) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
ursor/fix-website-loading-errors-and-merge-6662
      <div className="space-y-4">;
        {[1, 2, 3].map((i,) => (;
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>;
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>;
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>;
            </CardContent>;
          </Card>;
>>>>>>> merged-prs-20250907-203621
        ))}
      </div>
    )
  }
<<<<<<< HEAD
  
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
=======
<<<<<<< HEAD
  
  
=======


  


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (milestones.length === 0 && !showAddForm) {
    return (
      <EmptyState
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet"
<<<<<<< HEAD
        description = {isClient ?
          "Break down the project into manageable milestones to track progress and payments." :
          "No milestones have been created for this project yet.",}
        action={isClient ?
          {
            text: "Create First Milestone"
            onClick: (,) => setShowAddForm(true)
>>>>>>> merged-prs-20250907-203621
          } : undefined
        }
      />
    )
  }
<<<<<<< HEAD

  return (
    <div className="space-y-6">
      {isClient && !showAddForm && (
        <div className="flex justify-end">
          <Button onClick={() => setShowAddForm(true)}>
<<<<<<< HEAD
            <Plus className="h-4 w-4 mr-2" />
=======
            <Plus className="h-4 w-4 mr-2 />
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        description={isClient ? 
          "Break down the project into manageable milestones to track progress and payments." : 
          "No milestones have been created for this project yet."}
        action={isClient ? 
          {
            text: "Create First Milestone",
            onClick: () => setShowAddForm(true)
          } : undefined
<<<<<<< HEAD
        }
      />;
    );
  }

=======
        }

  }


  if (milestones && milestones.length === 0 && !showAddForm) {;
    return (
      <EmptyState
        icon = {<span className="text-3xl">📊</span>,}
        title="No Milestones Yet";
        description = {isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." : ;
          "No milestones have been created for this project yet.",}
        action={isClient ? ;
          {;
            text: "Create First Milestone",;
            onClick: (,) => setShowAddForm(true);
          } : undefined;
        }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="space-y-6">
      {isClient && !showAddForm && (
        <div className="flex justify-end">
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            Add Milestone
          </Button>
        </div>
      )}
<<<<<<< HEAD
      
      {showAddForm && (
        <Card>
<<<<<<< HEAD
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
=======
          <CardContent className=pt-6">
            <h3 className="text-lg font-medium mb-4>Create New Milestone</h3>
=======
<<<<<<< HEAD
      
      
=======


      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {showAddForm && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
<<<<<<< HEAD
=======


      {showAddForm && (;
        <Card>;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <AddMilestoneForm
            <AddMilestoneForm 
              onSubmit = {handleSubmit,}
              isSubmitting = {isSubmitting,}
              onCancel = {(,) => setShowAddForm(false),}
            />
          </CardContent>
        </Card>
            <AddMilestoneForm

              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />;
          </CardContent>;
        </Card>;
      )}


      <div className="space-y-4">;
        {milestones && milestones.map((milestone,) => (;

<<<<<<< HEAD
      )}
      <div className="space-y-4">
        {milestones.map((milestone,) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <MilestoneCard
            key = {milestone.id,}
            id = {milestone.id,}
            projectId = {milestone.project_id,}
            title = {milestone.title,}
            description = {milestone.description,}
            amount = {parseFloat(milestone.amount.toString()),}
            status = {milestone.status,}
            dueDate = {milestone.due_date,}
            onApprove = {onApprove,}
            onReject = {onReject,}
          />
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
}
"

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <AddMilestoneForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
<<<<<<< HEAD
            />
          </CardContent>
        </Card>
      )}
      
<<<<<<< HEAD
      <div className="space-y-4">
=======
      <div className=space-y-4">
=======
            />;
          </CardContent>;
        </Card>;
      )}
      
      <div className="space-y-4">
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
          />
        ))}
      </div>
  )
<<<<<<< HEAD
:src/components/projects/milestones/MilestonesList.tsx
};
},
;
=======
};
=======
          />;
        ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
            <AddMilestoneForm 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  // Check condition
if ( {) {
  $2
}
    return (
      <div className="space - y-4">;
        {[1, 2, 3].map ((i, ) => (
          <Card key={i}>;
            <CardContent className="p - 6">;
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb - 4"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb - 2"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - 3/4"></div>;
            </CardContent>;
          </Card>))}
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <EmptyState;
        icon = {<span className="text - 3xl">📊</span>, }
        title="No Milestones Yet";
        description = {is_client ?;
          "Break down the project into manageable milestones to track progress and payments." :;
          "No milestones have been created for this project yet.", }
        action={is_client ?;
          {
            text: "Create First Milestone",
            on_click: (, ) => setShowAddForm (true);
          } : undefined;
        }
      />);
  }
  return (
    <div className="space - y-6">;
      {is_client && !showAddForm && (
        <div className="flex justify - end">;
          <Button on_click={(, ) => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr - 2" />;
            Add Milestone;
          </Button>;
        </div>)}
      {showAddForm && (
        <Card>;
          <CardContent className="pt - 6">;
            <h3 className="text - lg font - medium mb - 4">Create New Milestone</h3>;
            <AddMilestoneForm;
              on_submit = {handle_submit, }
              is_submitting = {is_submitting, }
              on_cancel = {(, ) => setShowAddForm (false), }
            />;
          </CardContent>;
        </Card>)}
      <div className="space - y-4">;
        {milestones.map ((milestone, ) => (
          <MilestoneCard;
            key = {milestone.id, }
            id = {milestone.id, }
            project_id = {milestone.project_id, }
            title = {milestone.title, }
            description = {milestone.description, }
            amount = {parse_float (milestone.amount.to_string ()), }
            status = {milestone.status, }
            due_date = {milestone.due_date, }
            on_approve = {on_approve, }
            on_reject = {on_reject, }
          />))}
      </div>;
    </div>);
}
";

<<<<<<< HEAD
            <AddMilestoneForm
=======
            <AddMilestoneForm
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
