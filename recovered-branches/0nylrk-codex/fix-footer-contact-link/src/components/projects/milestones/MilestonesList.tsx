

import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { useAuth  } from '@/hooks/useAuth';
import { MilestoneCard  } from './MilestoneCard';
import { AddMilestoneForm  } from './AddMilestoneForm';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus  } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';







export const MilestonesList: React.FC<MilestonesListProps> = ({;







}
export const MilestonesList: React.FC < MilestonesListProps> = ({


  onApprove,




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
  

          } : undefined

      )}

            <AddMilestoneForm 

            <AddMilestoneForm ;

              onSubmit={handleSubmit}



      


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


;



