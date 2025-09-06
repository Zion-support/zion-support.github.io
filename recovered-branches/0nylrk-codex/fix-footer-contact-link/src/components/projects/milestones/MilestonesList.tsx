<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx

<<<<<<< HEAD

=======


=======

<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { useAuth  } from '@/hooks/useAuth';
import { MilestoneCard  } from './MilestoneCard';
import { AddMilestoneForm  } from './AddMilestoneForm';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus  } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';
interface MilestonesListProps {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
import React, { useState } from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
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
  milestones;
  activities;
  is_loading;
  is_client;
=======
  milestones;
  activities;
  isLoading;
  isClient;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx


=======
  isSubmitting;

  onApprove
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  milestones,
  activities,
  isLoading,
  isClient,
  onCreateMilestone,
  onUpdateStatus,
  onDeleteMilestone,
  onUploadDeliverable,
  isSubmitting,
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onApprove,
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data)
    setShowAddForm(false)
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  if (isLoading) {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
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
=======

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
;
interface MilestonesListProps {;
  milestones:Milestone[],;
  activities:Record<string MilestoneActivity[]>,;
  isLoading:boolean,;
  isClient:boolean,;
  onCreateMilestone:(data:any) => Promise<Milestone | null>,;
  onUpdateStatus:(id:string, status:MilestoneStatus, comment?:string) => Promise<boolean>,;
  onDeleteMilestone:(id:string) => Promise<boolean>,;
  onUploadDeliverable:(id:string, file:File) => Promise<any>,;
  isSubmitting:boolean,;
  onApprove?:(id:string) => Promise<void>,;
  onReject?:(id:string) => Promise<void>;
}
;
export const MilestonesList:React.FC<MilestonesListProps> = ({;
  milestones,;
  activities,;
  isLoading,;
  isClient,;
  onCreateMilestone,;
  onUpdateStatus,;
  onDeleteMilestone,;
  onUploadDeliverable,;
  isSubmitting,;
  onApprove,;
  onReject;
}) => {;
  const [showAddForm, setShowAddForm] = useState(false),;
  ;
  const handleSubmit = async (data:any) => {;
    await onCreateMilestone(data),;
    setShowAddForm(false);
  },;
;
  if (isLoading) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx


  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
        }
      />;
    );
  }
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      />
    )
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6">;
      {isClient && !showAddForm && (;
        <div className="flex justify-end">;
          <Button onClick={() => setShowAddForm(true)}>;
            <Plus className="h-4 w-4 mr-2" />;
            Add Milestone;
          </Button>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {showAddForm && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
<<<<<<< HEAD

=======


========
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
      {showAddForm && (;
        <Card>;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx

            <AddMilestoneForm
=======

            <AddMilestoneForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
            <AddMilestoneForm
=======
            <AddMilestoneForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />;
          </CardContent>;
        </Card>;
      )}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
=======

      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="space-y-4">
        {milestones.map((milestone) => (
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
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
=======
      ;
      <div className="space-y-4">;
        {milestones.map((milestone) => (;
          <MilestoneCard;
            key={milestone.id}            id={milestone.id}
            projectId={milestone.projectid}
=======
<<<<<<< HEAD
            <AddMilestoneForm
=======
            <AddMilestoneForm 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <MilestoneCard
            key={milestone.id}
            id={milestone.id}
            projectId={milestone.project_id}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            title={milestone.title}
            description={milestone.description}
            amount={parseFloat(milestone.amount.toString())}
            status={milestone.status}
<<<<<<< HEAD
            dueDate={milestone.duedate}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onApprove={onApprove}
            onReject={onReject}
          />;
        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx

<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
      </div>;
    </div>;
<<<<<<< HEAD
  );

<<<<<<< HEAD
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
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
      <div className="space - y-4">;
        {[1, 2, 3].map ((i) => (
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
        icon={<span className="text - 3xl">📊</span>}
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
    <div className="space - y-6">;
      {is_client && !showAddForm && (
        <div className="flex justify - end">;
          <Button on_click={() => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr - 2" />;
            Add Milestone;
          </Button>;
        </div>)}
      {showAddForm && (
        <Card>;
          <CardContent className="pt - 6">;
            <h3 className="text - lg font - medium mb - 4">Create New Milestone</h3>;
            <AddMilestoneForm;
              on_submit={handle_submit}
              is_submitting={is_submitting}
              on_cancel={() => setShowAddForm (false)}
            />;
          </CardContent>;
        </Card>)}
      <div className="space - y-4">;
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
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/MilestonesList.tsx
=======
            dueDate={milestone.due_date}
            onApprove={onApprove}
            onReject={onReject}
          />
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
