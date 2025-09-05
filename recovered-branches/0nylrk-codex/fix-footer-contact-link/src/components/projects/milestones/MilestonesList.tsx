
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
  
  if (milestones.length === 0 && !showAddForm) {_return (_<EmptyState
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet"
        description={_isClient ? 
          "Break down the project into manageable milestones to track progress and payments." : 
          "No milestones have been created for this project yet."}
        action={_isClient ? 
          {
            text: "Create First Milestone", _onClick: () => setShowAddForm(true)} : undefined
        }
      />
    );
  }

  return (_<div className="space-y-6">
      {_isClient && !showAddForm && (
        <div className="flex justify-end">
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Milestone
          </Button>
        </div>
      )}
      
      {_showAddForm && (_<Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
            <AddMilestoneForm 
              onSubmit={handleSubmit}
              isSubmitting={_isSubmitting}
              onCancel={_() => setShowAddForm(false)}
            />
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-4">
        {_milestones.map(_(milestone) => (
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
  );
};
