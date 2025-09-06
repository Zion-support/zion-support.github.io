

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { useAuth  } from '@/hooks/useAuth';
import { MilestoneCard  } from './MilestoneCard';
import { AddMilestoneForm  } from './AddMilestoneForm';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus  } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';
<<<<<<< HEAD
interface MilestonesListProps {
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
=======
interface MilestonesListProps {import React, { useState } from 'react',;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

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

import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {useAuth} from '@/hooks/useAuth';
import {MilestoneCard} from './MilestoneCard';
import {AddMilestoneForm} from './AddMilestoneForm';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import {Plus} from '@/components/icons';
import {EmptyState} from '@/components/ui/empty-state';
interface MilestonesListProps {;
  milestones: Milestone[],;
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean,;
  isClient: boolean,;
  onCreateMilestone: (data: any) => Promise<Milestone | null>,;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>,;
  onUploadDeliverable: (id: string, file: File) => Promise<any>,;
  isSubmitting: boolean,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}

export const MilestonesList: React.FC<MilestonesListProps> = ({;

import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks / use_milestones';
import {use_auth} from '@/hooks / use_auth';
import {MilestoneCard} from './MilestoneCard';
import {AddMilestoneForm} from './AddMilestoneForm';
import {Button} from '@/components / ui / button';
import {Card, CardContent} from '@/components / ui / card';
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import {Plus} from '@/components / icons';
import {EmptyState} from '@/components / ui / empty - state';
interface MilestonesListProps {
  milestones: Milestone[],
  activities: Record < string, MilestoneActivity[]>;
  is_loading: boolean,
  is_client: boolean,
  onCreateMilestone: (data: any) => Promise < Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise < boolean>;
  onDeleteMilestone: (id: string) => Promise < boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise < any>,
  is_submitting: boolean,
  on_approve?: (id: string) => Promise < void>,
  on_reject?: (id: string) => Promise < void>;
}
export const MilestonesList: React.FC < MilestonesListProps> = ({
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  milestones;
  activities;
  is_loading;
  is_client;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
<<<<<<< HEAD
  onUploadDeliverable;


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

  },


  if (isLoading) {
  onApprove,;
  onReject;
}) => {;
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSubmit = async (data: any) => {;
    await onCreateMilestone(data),;
    setShowAddForm(false);
  };

  if (isLoading) {;
    return (
    return (;
    return (
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>;
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>;
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    );
  }


  


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
        }
      />
    )
  }



  return (
  return (
    ),;
  }
  ;
  if (milestones.length === 0 && !showAddForm) {;
    return (;
      <EmptyState;
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet";
        description={isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." :;
          "No milestones have been created for this project yet."}
        action={isClient ? ;
          {;
            text:"Create First Milestone",;
            onClick:() => setShowAddForm(true);
          } undefined;
        }
      />;
    ),;
  }
;
  return (;
  return (
=======
  onUploadDeliverable;  return (  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="space-y-6">;
      {isClient && !showAddForm && (;
        <div className="flex justify-end">;
          <Button onClick={() => setShowAddForm(true)}>;
            <Plus className="h-4 w-4 mr-2" />;
            Add Milestone;
          </Button>;
        </div>;
<<<<<<< HEAD
      )}


      {showAddForm && (;
        <Card>;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;

            <AddMilestoneForm

            <AddMilestoneForm 

            <AddMilestoneForm ;
              onSubmit={handleSubmit}
=======
      )}              onSubmit={handleSubmit}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
            key={milestone && milestone.id}
            id={milestone && milestone.id}
            projectId={milestone && milestone.project_id}
            title={milestone && milestone.title}
            description={milestone && milestone.description}
            amount={parseFloat(milestone && milestone.amount.toString())}
            status={milestone && milestone.status}
            dueDate={milestone && milestone.due_date}
<<<<<<< HEAD
            onApprove={onApprove}
            onReject={onReject}
          />;
        ))}
}

      </div>;
    </div>;
  );




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      ;
      <div className="space-y-4">;
        {milestones.map((milestone) => (;
          <MilestoneCard;
            key={milestone.id}            id={milestone.id}
            projectId={milestone.projectid}
            <AddMilestoneForm
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

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </div>;
    </div>;
  );

<<<<<<< HEAD



};
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  is_submitting;
  on_approve,
  on_reject;
}) => {
  const [showAddForm, setShowAddForm] = useState (false);
;
  const handle_submit = async (data: any) => {
    await onCreateMilestone (data),
    setShowAddForm (false);
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
<<<<<<< HEAD
      <div className="space - y-4">;
        {[1, 2, 3].map ((i) => (
          <Card key={i}>;
            <CardContent className="p - 6">;
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb - 4"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb - 2"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - 3/4"></div>;
=======
      <div className="space-y-4">;
        {[1, 2, 3].map ((i) => (
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb-4"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb-2"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w-3/4"></div>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        icon={<span className="text - 3xl">📊</span>}
=======
        icon={<span className="text-3xl">📊</span>}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        title="No Milestones Yet";
        description={is_client ?;
          "Break down the project into manageable milestones to track progress and payments." :;
          "No milestones have been created for this project yet."}
        action={is_client ?;
          {
            text: "Create First Milestone",
            on_click: () => setShowAddForm (true);
          } : undefined;
        }
      />);
  }
  return (
<<<<<<< HEAD
    <div className="space - y-6">;
      {is_client && !showAddForm && (
        <div className="flex justify - end">;
          <Button on_click={() => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr - 2" />;
=======
    <div className="space-y-6">;
      {is_client && !showAddForm && (
        <div className="flex justify-end">;
          <Button on_click={() => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr-2" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            Add Milestone;
          </Button>;
        </div>)}
      {showAddForm && (
        <Card>;
<<<<<<< HEAD
          <CardContent className="pt - 6">;
            <h3 className="text - lg font - medium mb - 4">Create New Milestone</h3>;
=======
          <CardContent className="pt-6">;
            <h3 className="text - lg font - medium mb-4">Create New Milestone</h3>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            <AddMilestoneForm;
              on_submit={handle_submit}
              is_submitting={is_submitting}
              on_cancel={() => setShowAddForm (false)}
            />;
          </CardContent>;
        </Card>)}
<<<<<<< HEAD
      <div className="space - y-4">;
=======
      <div className="space-y-4">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {milestones.map ((milestone) => (
          <MilestoneCard;
            key={milestone.id}
            id={milestone.id}
            project_id={milestone.project_id}
            title={milestone.title}
            description={milestone.description}
            amount={parse_float (milestone.amount.to_string ())}
            status={milestone.status}
            due_date={milestone.due_date}
            on_approve={on_approve}
            on_reject={on_reject}
          />))}
      </div>;
    </div>);
}
<<<<<<< HEAD
;
  ),;
},; <Card key= {
  i 
}> <CardContent className="p-6" > <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4" ></div> <div className="h-4 bg-muted rounded animate-pulse w-full mb-2" ></div> <div className="h-4 bg-muted rounded animate-pulse w-3/4" ></div> </CardContent> </Card>) ) 
}</div>) 
}
}/>) 
}<Button onClick= {
  () => setShowAddForm (true) 
}> <Plus className="h-4 w-4 mr-2" /> Add Milestone </Button> </div>) 
}<AddMilestoneForm onSubmit= {
  handleSubmit 
}isSubmitting= {
  isSubmitting 
}onCancel= {
  () => setShowAddForm (false) 
}/> </CardContent> </Card>) 
}<MilestoneCard key= {
  milestone.id 
}id= {
  milestone.id 
}projectId= {
  milestone.project id 
}title= {
  milestone.title 
}description= {
  milestone.description 
}amount= {
  parseFloat (milestone.amount.toString () ) 
}status= {
  milestone.status 
}dueDate= {
  milestone.due date 
}onApprove= {
  onApprove 
}onReject= {
  onReject 
}/>) ) 
}</div> </div>) 
};
            dueDate={milestone.due_date}
            onApprove={onApprove}
            onReject={onReject}
          />
        ))}
      </div>
    </div>
  )
}

      </div>;
    </div>;
  );
};
=======
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
