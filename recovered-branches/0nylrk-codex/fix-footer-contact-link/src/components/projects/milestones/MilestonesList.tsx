<<<<<<< HEAD
<<<<<<< HEAD

=======
import React, { useState } from 'react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
import React, { useState } from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
interface MilestonesListProps {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
interface MilestonesListProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {useAuth} from '@/hooks/useAuth';
import {MilestoneCard} from './MilestoneCard';
import {AddMilestoneForm} from './AddMilestoneForm';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import {Plus} from '@/components/icons';
<<<<<<< HEAD
=======

import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';'
import { useAuth  } from '@/hooks/useAuth';'
import { MilestoneCard  } from './MilestoneCard';'
import { AddMilestoneForm  } from './AddMilestoneForm';'
import { Button  } from '@/components/ui/button';'
import { Card, CardContent  } from '@/components/ui/card';'
// lucide-react doesn't export PlusIcon, use our icon wrapper';
import { Plus  } from '@/components/icons';'
import { EmptyState } from '@/components/ui/empty-state';
interface MilestonesListProps {}
'
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';'
import {useAuth} from '@/hooks/useAuth';'
import {MilestoneCard} from './MilestoneCard';'
import {AddMilestoneForm} from './AddMilestoneForm';'
import {Button} from '@/components/ui/button';'
import {Card, CardContent} from '@/components/ui/card';'
// lucide-react doesn't export PlusIcon, use our icon wrapper;'
import {Plus} from '@/components/icons';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {EmptyState} from '@/components/ui/empty-state';
interface MilestonesListProps {}
=======
import {EmptyState} from '@/components/ui/empty-state';
interface MilestonesListProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',;
=======
interface MilestonesListProps {import React, { useState } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
interface MilestonesListProps {import React, { useState } from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React, { useState } from 'react',;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
interface MilestonesListProps {import React, { useState } from 'react',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { useAuth } from '@/hooks/useAuth',;
import { MilestoneCard } from './MilestoneCard',;
import { AddMilestoneForm } from './AddMilestoneForm',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import { Plus } from '@/components/icons',;
=======


'
import React, { useState } from 'react',;'
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;'
import { useAuth } from '@/hooks/useAuth',;'
import { MilestoneCard } from './MilestoneCard',;'
import { AddMilestoneForm } from './AddMilestoneForm',;'
import { Button } from '@/components/ui/button',;'
import { Card, CardContent } from '@/components/ui/card',;'
// lucide-react doesn't export PlusIcon, use our icon wrapper;'
import { Plus } from '@/components/icons',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean
  isClient: boolean
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>
<<<<<<< HEAD
  isSubmitting: boolean;
=======
  isSubmitting: boolean
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onApprove?: (id: string) => Promise<void>
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import { Plus  } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';


import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';''
import { useAuth  } from '@/hooks/useAuth';''
import { MilestoneCard  } from './MilestoneCard';''
import { AddMilestoneForm  } from './AddMilestoneForm';''
import { Button  } from '@/components/ui/button';''
import { Card, CardContent  } from '@/components/ui/card';''
// lucide-react doesn't export PlusIcon, use our icon wrapper;''
import { Plus  } from '@/components/icons';''
import { EmptyState } from '@/components/ui/empty-state';'
interface MilestonesListProps {

  onReject?: (id: string) => Promise<void>
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
export const MilestonesList: React.FC<MilestonesListProps> = ({
<<<<<<< HEAD


=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
export const MilestonesList: React.FC<MilestonesListProps> = ({

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const MilestonesList: React.FC<MilestonesListProps> = ({;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks / use_milestones';
import {use_auth} from '@/hooks / use_auth';
import {MilestoneCard} from './MilestoneCard';
import {AddMilestoneForm} from './AddMilestoneForm';
import {Button} from '@/components / ui / button';
import {Card, CardContent} from '@/components / ui / card';
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import {Plus} from '@/components / icons';
<<<<<<< HEAD
=======
export const MilestonesList: React.FC<MilestonesListProps> = ({}
';
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks / use_milestones';'
import {use_auth} from '@/hooks / use_auth';'
import {MilestoneCard} from './MilestoneCard';'
import {AddMilestoneForm} from './AddMilestoneForm';'
import {Button} from '@/components / ui / button';'
import {Card, CardContent} from '@/components / ui / card';'
// lucide-react doesn't export PlusIcon, use our icon wrapper;'
import {Plus} from '@/components / icons';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {EmptyState} from '@/components / ui / empty - state';
interface MilestonesListProps {}
=======
import {EmptyState} from '@/components / ui / empty - state';
interface MilestonesListProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  milestones: Milestone[],
  activities: Record<string MilestoneActivity[]>,;
</string>)
  onCreateMilestone: (data: any) => Promise<Milestone | null>,;

  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,;
  onDeleteMilestone: (id: string) => Promise<boolean>,;
  onUploadDeliverable: (id: string, file: File) => Promise<any>,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
  onCreateMilestone: (data: any) => Promise<Milestone | null>

  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>
  onApprove?: (id: string) => Promise<void>

export const MilestonesList: React.FC<MilestonesListProps> = ({



  activities: Record < string, MilestoneActivity[]>;
  is_loading: boolean,
  is_client: boolean,)
  onCreateMilestone: (data: any) => Promise < Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise < boolean>;
  onDeleteMilestone: (id: string) => Promise < boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise < any>,
  is_submitting: boolean,
  on_approve?: (id: string) => Promise < void>,
  on_reject?: (id: string) => Promise < void>;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
export const MilestonesList: React.FC < MilestonesListProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export const MilestonesList: React.FC < MilestonesListProps> = ({};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export const MilestonesList: React.FC < MilestonesListProps> = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export const MilestonesList: React.FC < MilestonesListProps> = ({
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  milestones;
  activities;
  is_loading;
  is_client;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
milestones;
  activities;
  isLoading;
  isClient;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  onUploadDeliverable;

=======
  onUploadDeliverable;

isSubmitting;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  onApprove
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
  onReject;
}) => {}
  const [showAddForm, setShowAddForm] = useState(false),
  

<<<<<<< HEAD
<<<<<<< HEAD
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data)
    setShowAddForm(false)
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data)
    setShowAddForm(false)

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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false),

  const handleSubmit = async (data: any) => {
    await onCreateMilestone(data)
    setShowAddForm(false)
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
const handleSubmit = async (data: any) => {
    await onCreateMilestone(data)
    setShowAddForm(false)
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

  },

<<<<<<< HEAD
  if (isLoading) {}
=======
  if (isLoading) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD

  if (isLoading) {;


    return (

      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
          <Card key={i}>;"
            <CardContent className="p-6">;"
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>;"
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
<<<<<<< HEAD
=======
    );
  }


<<<<<<< HEAD
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    );
  }
<<<<<<< HEAD

<<<<<<< HEAD

  
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    );
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (milestones.length === 0 && !showAddForm) {
=======
  if (milestones.length === 0 && !showAddForm) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
      <EmptyState"
        icon={<span className="text-3xl">📊</span>}"
        title="No Milestones Yet"
        description={isClient ?"
          "Break down the project into manageable milestones to track progress and payments." :"
          "No milestones have been created for this project yet."}
        action={isClient ?
          {"
            text: "Create First Milestone"
            onClick: () => setShowAddForm(true)
          } : undefined;
  if (milestones && milestones.length === 0 && !showAddForm) {;
    return (
      <EmptyState"
        icon={<span className="text-3xl">📊</span>}"
        title="No Milestones Yet";
        description={isClient ? ;"
          "Break down the project into manageable milestones to track progress and payments." : ;"
          "No milestones have been created for this project yet."}
        action={isClient ? ;
          {;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            text: "Create First Milestone",;
            onClick: () => setShowAddForm(true);
          } : undefined;

<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      />;
    );
  }
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      />
    )
  }

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
=======
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  onUploadDeliverable;  return (  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onUploadDeliverable;  return (  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return (
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;  return (  return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className="space-y-6">;
      {isClient && !showAddForm && (;"
        <div className="flex justify-end">;
          <Button onClick={() => setShowAddForm(true)}>;"
            <Plus className="h-4 w-4 mr-2" />;
            Add Milestone;
          </Button>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      )}

<<<<<<< HEAD
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {showAddForm && (;
        <Card>;"
          <CardContent className="pt-6">;"
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;



            <AddMilestoneForm;
            <AddMilestoneForm ;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              onSubmit={handleSubmit}
=======
      )}              onSubmit={handleSubmit}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      )}              onSubmit={handleSubmit}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      )}

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

      ;
      {showAddForm && (;
        <Card>;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;

            <AddMilestoneForm

<AddMilestoneForm
            <AddMilestoneForm 

            <AddMilestoneForm ;
              onSubmit={handleSubmit}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      )}              onSubmit={handleSubmit}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
      )}
<<<<<<< HEAD

      <div className="space-y-4">
        {milestones.map((milestone) => (
=======
=======
      )}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="space-y-4">
        {milestones.map((milestone) => (
"
      <div className="space-y-4">;
        {milestones && milestones.map((milestone) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <MilestoneCard
<<<<<<< HEAD
=======
          <MilestoneCard;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            key={milestone && milestone.id}
            id={milestone && milestone.id}
            projectId={milestone && milestone.project_id}
            title={milestone && milestone.title}
            description={milestone && milestone.description}
            amount={parseFloat(milestone && milestone.amount.toString())}
            status={milestone && milestone.status}
            dueDate={milestone && milestone.due_date}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            onApprove={onApprove}
            onReject={onReject}
          />;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  onUploadDeliverable;

<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



      </div>;
    </div>;
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  is_submitting;
  on_approve,
  on_reject;
}) => {}
  const [showAddForm, setShowAddForm] = useState (false);
;
  const handle_submit = async (data: any) => {}
    await onCreateMilestone (data),
    setShowAddForm (false);
  }
;
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
      <div className="space-y-4">;
        {[1, 2, 3].map ((i) => (
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb-4"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb-2"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w-3/4"></div>;
=======
    return ("
      <div className="space - y-4">;
        {[1, 2, 3].map ((i) => (
          <Card key={i}>;"
            <CardContent className="p - 6">;"
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb - 4"></div>;"
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb - 2"></div>;"
              <div className="h - 4 bg - muted rounded animate - pulse w - 3/4"></div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </CardContent>;
          </Card>))}
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
<<<<<<< HEAD
      <EmptyState;
        icon={<span className="text-3xl">📊</span>}
=======
      <EmptyState;"
        icon={<span className="text - 3xl">📊</span>}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        title="No Milestones Yet";
        description={is_client ?;"
          "Break down the project into manageable milestones to track progress and payments." :;"
          "No milestones have been created for this project yet."}
        action={is_client ?;
          {"
            text: "Create First Milestone",
            on_click: () => setShowAddForm (true);
          } : undefined;
        }
      />);
  }
<<<<<<< HEAD
  return (
    <div className="space-y-6">;
      {is_client && !showAddForm && (
        <div className="flex justify-end">;
          <Button on_click={() => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr-2" />;
=======
  return ("
    <div className="space - y-6">;
      {is_client && !showAddForm && ("
        <div className="flex justify - end">;
          <Button on_click={() => setShowAddForm (true)}>;"
            <Plus className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            Add Milestone;
          </Button>;
        </div>)}
      {showAddForm && (
<<<<<<< HEAD
        <Card>;
          <CardContent className="pt-6">;
            <h3 className="text - lg font - medium mb-4">Create New Milestone</h3>;
=======
        <Card>;"
          <CardContent className="pt - 6">;"
            <h3 className="text - lg font - medium mb - 4">Create New Milestone</h3>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <AddMilestoneForm;
              on_submit={handle_submit}
              is_submitting={is_submitting}
              on_cancel={() => setShowAddForm (false)}
            />;
          </CardContent>;
<<<<<<< HEAD
        </Card>)}
      <div className="space-y-4">;
=======
        </Card>)}"
      <div className="space - y-4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
            dueDate={milestone.due_date}
            onApprove={onApprove}
            onReject={onReject}
          />
        ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>
    </div>
  )
}

      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



=======
      </div>;
    </div>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
