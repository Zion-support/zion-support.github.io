
<<<<<<< HEAD
import React, { useState } from 'react',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { useAuth } from '@/hooks/useAuth',
import { MilestoneCard } from './MilestoneCard',
import { AddMilestoneForm } from './AddMilestoneForm',
import { Button } from '@/components/ui/button',
import { Card, CardContent } from '@/components/ui/card',
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus } from '@/components/icons',
import { EmptyState } from '@/components/ui/empty-state',
interface MilestonesListProps {
  milestones: Milestone[],
  activities: Record<string MilestoneActivity[]>,
  isLoading: boolean,
  isClient: boolean,
  onCreateMilestone: (data: any) => Promise<Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,
  onDeleteMilestone: (id: string) => Promise<boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise<any>,
  isSubmitting: boolean,
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
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
    return (
      <div className=&quot;space-y-4&quot;>
        {[1, 2, 3].map((i) => (
=======
import React, {_useState} from 'react';
// lucide-react doesn't export PlusIcon, use our icon wrapper

interface MilestonesListProps {_milestones: Milestone[];
  activities: Record<string, _MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  onCreateMilestone: (_data: unknown) => Promise<Milestone | null>;
  onUpdateStatus: (_id: string, _status: MilestoneStatus, _comment?: string) => Promise<boolean>;
  onDeleteMilestone: (_id: string) => Promise<boolean>;
  onUploadDeliverable: (_id: string, _file: File) => Promise<any>;
  isSubmitting: boolean;
  onApprove?: (_id: string) => Promise<void>;
  onReject?: (_id: string) => Promise<void>;}

export const MilestonesList: React.FC<MilestonesListProps> = (_{_milestones, _activities, _isLoading, _isClient, _onCreateMilestone, _onUpdateStatus, _onDeleteMilestone, _onUploadDeliverable, _isSubmitting, _onApprove, _onReject}) => {_const [showAddForm, _setShowAddForm] = useState(false);
  
  const _handleSubmit = async (_data: unknown) => {
    await onCreateMilestone(data);
    setShowAddForm(false);};

  if (isLoading) {_return (_<div className="space-y-4">
        {[1, _2, _3].map((i) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Card key={i}>
            <CardContent className=&quot;p-6&quot;>
              <div className=&quot;h-6 w-48 bg-muted rounded animate-pulse mb-4&quot;></div>
              <div className=&quot;h-4 bg-muted rounded animate-pulse w-full mb-2&quot;></div>
              <div className=&quot;h-4 bg-muted rounded animate-pulse w-3/4&quot;></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  
<<<<<<< HEAD
  if (milestones.length === 0 && !showAddForm) {
    return (
      <EmptyState
        icon={<span className=&quot;text-3xl&quot;>📊</span>}
        title=&quot;No Milestones Yet&quot;
        description={isClient ? 
          &quot;Break down the project into manageable milestones to track progress and payments.&quot; : 
          &quot;No milestones have been created for this project yet.&quot;}
        action={isClient ? 
          {
            text: &quot;Create First Milestone&quot;,
            onClick: () => setShowAddForm(true)
          } : undefined
=======
  if (milestones.length === 0 && !showAddForm) {_return (_<EmptyState
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet"
        description={_isClient ? 
          "Break down the project into manageable milestones to track progress and payments." : 
          "No milestones have been created for this project yet."}
        action={_isClient ? 
          {
            text: "Create First Milestone", _onClick: () => setShowAddForm(true)} : undefined
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      />
    )
  }

<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6&quot;>
      {isClient && !showAddForm && (
        <div className=&quot;flex justify-end&quot;>
=======
  return (_<div className="space-y-6">
      {_isClient && !showAddForm && (
        <div className="flex justify-end">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className=&quot;h-4 w-4 mr-2&quot; />
            Add Milestone
          </Button>
        </div>
      )}
      
<<<<<<< HEAD
      {showAddForm && (
        <Card>
          <CardContent className=&quot;pt-6&quot;>
            <h3 className=&quot;text-lg font-medium mb-4&quot;>Create New Milestone</h3>
=======
      {_showAddForm && (_<Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <AddMilestoneForm 
              onSubmit={handleSubmit}
              isSubmitting={_isSubmitting}
              onCancel={_() => setShowAddForm(false)}
            />
          </CardContent>
        </Card>
      )}
      
<<<<<<< HEAD
      <div className=&quot;space-y-4&quot;>
        {milestones.map((milestone) => (
=======
      <div className="space-y-4">
        {_milestones.map(_(milestone) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <MilestoneCard
            key={milestone.id}
            id={_milestone.id}
            projectId={_milestone.project_id}
            title={_milestone.title}
            description={_milestone.description}
            amount={_parseFloat(milestone.amount.toString())}
            status={_milestone.status}
            dueDate={_milestone.due_date}
            onApprove={_onApprove}
            onReject={_onReject}
          />
        ))}
      </div>
    </div>
  )
},
